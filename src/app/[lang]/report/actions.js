'use server'

import { randomUUID } from 'node:crypto'
import sharp from 'sharp'
import { auth, currentUser } from '@clerk/nextjs/server'
import { writeClient } from '../../../../sanity/lib/writeClient'
import { BEHAVIOURS, PLATFORMS, REPORT_TYPES } from '@/lib/reportOptions'
import { getAllSpeciesSlugs } from '@/lib/data/species'
import { REPORT_REGIONS } from '@/ui/components/species-explorer/options'
import { hasLocale } from '@/i18n/config'

const MAX_PHOTOS = 3
const MAX_PHOTO_BYTES = 4 * 1024 * 1024
// Per account and UTC day: generous for a busy boat trip, useless for spam
const MAX_REPORTS_PER_DAY = 10
// Longest side kept after re-encoding; plenty for identifying an animal
const MAX_PHOTO_SIDE = 4096
// "2026-10-22T14:05", as sent by <input type="datetime-local">
const WALL_CLOCK = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?$/
const EARLIEST = Date.UTC(1900, 0, 1)

const text = (formData, name, max) => String(formData.get(name) ?? '').trim().slice(0, max)

// The browser-supplied MIME type is just a claim; the first bytes say what the file really is.
// SVG and anything else that can carry script is refused.
const imageType = (bytes) => {
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return { format: 'jpeg', contentType: 'image/jpeg', extension: 'jpg' }
  if (bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return { format: 'png', contentType: 'image/png', extension: 'png' }
  if (bytes.toString('latin1', 0, 4) === 'RIFF' && bytes.toString('latin1', 8, 12) === 'WEBP') return { format: 'webp', contentType: 'image/webp', extension: 'webp' }
  return null
}

// Uploaded files are served publicly as-is, so they're rebuilt from their pixels first: that
// drops EXIF/XMP (GPS position, camera serial, time) and anything hidden after the image data.
// Returns null for files that only look like images.
const reencode = async (bytes, { format }) => {
  try {
    return await sharp(bytes, { limitInputPixels: 50_000_000 })
      .rotate()
      .resize({ width: MAX_PHOTO_SIDE, height: MAX_PHOTO_SIDE, fit: 'inside', withoutEnlargement: true })
      .toFormat(format)
      .toBuffer()
  } catch {
    return null
  }
}

// Server Actions are public endpoints: the session and every field are re-checked here.
// Returns { status, errors } for useActionState; error values are dictionary keys.
export async function submitReport(_previous, formData) {
  const { userId } = await auth()
  if (!userId) return { status: 'unauthorized' }

  // Bots fill the hidden "website" field; pretend all went well
  if (text(formData, 'website', 200)) return { status: 'success' }

  const errors = {}
  const type = text(formData, 'type', 20)
  const speciesSlug = text(formData, 'species', 100) || 'unknown'
  // Stored as wall-clock time (see ReportCard), whatever the server's own time zone
  const rawDate = text(formData, 'date', 40)
  const date = WALL_CLOCK.test(rawDate) ? new Date(`${rawDate}Z`) : new Date(NaN)
  const location = text(formData, 'location', 200)
  const region = text(formData, 'region', 20)
  const count = Number(text(formData, 'count', 10) || 1)
  const lat = text(formData, 'lat', 20)
  const lng = text(formData, 'lng', 20)
  const locale = text(formData, 'locale', 5)
  const behaviour = [...new Set(formData.getAll('behaviour').map(String))].filter((value) => BEHAVIOURS.includes(value))
  const photos = formData.getAll('photos').filter((file) => typeof file === 'object' && file.size > 0)

  if (!REPORT_TYPES.includes(type)) errors.type = 'required'
  if (speciesSlug !== 'unknown' && !(await getAllSpeciesSlugs()).some(({ slug }) => slug === speciesSlug)) errors.species = 'invalid'
  // Allow a day of slack for time zones, but nothing further in the future
  if (Number.isNaN(date.getTime()) || date.getTime() < EARLIEST || date.getTime() > Date.now() + 86_400_000) errors.date = 'invalid'
  if (location.length < 2) errors.location = 'required'
  if (!REPORT_REGIONS.includes(region)) errors.region = 'required'
  if (!Number.isInteger(count) || count < 1 || count > 10_000) errors.count = 'invalid'
  if (formData.get('consent') !== 'on') errors.consent = 'required'

  const position = lat && lng ? { lat: Number(lat), lng: Number(lng) } : null
  if (position && !(Math.abs(position.lat) <= 90 && Math.abs(position.lng) <= 180)) errors.position = 'invalid'

  if (photos.length > MAX_PHOTOS) errors.photos = 'tooMany'
  else if (photos.some((file) => file.size > MAX_PHOTO_BYTES)) errors.photos = 'invalid'

  const images = errors.photos ? [] : await Promise.all(photos.map(async (file) => {
    const original = Buffer.from(await file.arrayBuffer())
    const kind = imageType(original)
    return { bytes: kind && await reencode(original, kind), type: kind }
  }))
  if (images.some(({ bytes }) => !bytes)) errors.photos = 'invalid'

  if (Object.keys(errors).length) return { status: 'error', errors }

  // No token configured (e.g. local preview): say so instead of failing silently
  if (!writeClient) return { status: 'unavailable' }

  const uploaded = []
  try {
    // One private counter per account and day. Sanity applies `inc` atomically, so parallel
    // submissions each get their own number and can't all slip under the limit together
    const counterId = `rateLimit.report.${userId}.${new Date().toISOString().slice(0, 10)}`
    await writeClient.createIfNotExists({ _id: counterId, _type: 'rateLimit', count: 0 })
    const { count: sent } = await writeClient.patch(counterId).inc({ count: 1 }).commit()
    if (sent > MAX_REPORTS_PER_DAY) return { status: 'rateLimited' }

    // Contact details come from the account, and only once Clerk has verified them
    const user = await currentUser()
    const primary = user?.primaryEmailAddress
    const email = primary?.verification?.status === 'verified' ? primary.emailAddress : ''

    for (const [index, { bytes, type: { contentType, extension } }] of images.entries()) {
      // A neutral file name: the original can hold personal details
      uploaded.push(await writeClient.assets.upload('image', bytes, { filename: `report-photo-${index + 1}.${extension}`, contentType }))
    }

    const platform = text(formData, 'platform', 20)
    const condition = text(formData, 'condition', 10)

    await writeClient.create({
      // A dotted ID keeps the document private: the dataset is public, and reports hold emails
      _id: `report.${randomUUID()}`,
      _type: 'report',
      type,
      speciesSlug,
      ...(speciesSlug !== 'unknown' && { species: { _type: 'reference', _ref: `species-${speciesSlug}` } }),
      date: date.toISOString(),
      location,
      region,
      count,
      calves: formData.get('calves') === 'on',
      ...(position && { position: { _type: 'geopoint', ...position } }),
      ...(type === 'sighting' && { behaviour, ...(PLATFORMS.includes(platform) && { platform }) }),
      ...(type === 'stranding' && ['alive', 'dead'].includes(condition) && { condition }),
      notes: text(formData, 'notes', 2000),
      photos: uploaded.map((asset) => ({ _type: 'image', _key: asset._id.slice(-12), asset: { _type: 'reference', _ref: asset._id } })),
      observer: text(formData, 'name', 100),
      email,
      userId,
      consentAt: new Date().toISOString(),
      locale: hasLocale(locale) ? locale : 'en',
      status: 'pending',
    })

    return { status: 'success' }
  } catch (error) {
    console.error('Report submission failed', error)
    // Don't leave photos behind that no report points to
    await Promise.allSettled(uploaded.map((asset) => writeClient.delete(asset._id)))
    return { status: 'failed' }
  }
}
