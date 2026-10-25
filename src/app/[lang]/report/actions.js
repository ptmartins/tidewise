'use server'

import { randomUUID } from 'node:crypto'
import { writeClient } from '../../../../sanity/lib/writeClient'
import { BEHAVIOURS, PLATFORMS, REPORT_TYPES } from '@/lib/reportOptions'
import { getAllSpeciesSlugs } from '@/lib/data/species'
import { REGIONS } from '@/ui/components/species-explorer/options'
import { hasLocale } from '@/i18n/config'

const MAX_PHOTOS = 3
const MAX_PHOTO_BYTES = 4 * 1024 * 1024
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const text = (formData, name, max) => String(formData.get(name) ?? '').trim().slice(0, max)

// Server Actions are public endpoints: every field is re-validated here.
// Returns { status, errors } for useActionState; error values are dictionary keys.
export async function submitReport(_previous, formData) {
  // Bots fill the hidden "website" field; pretend all went well
  if (text(formData, 'website', 200)) return { status: 'success' }

  const errors = {}
  const type = text(formData, 'type', 20)
  const speciesSlug = text(formData, 'species', 100) || 'unknown'
  const date = new Date(text(formData, 'date', 40))
  const location = text(formData, 'location', 200)
  const region = text(formData, 'region', 20)
  const count = Number(text(formData, 'count', 10) || 1)
  const lat = text(formData, 'lat', 20)
  const lng = text(formData, 'lng', 20)
  const email = text(formData, 'email', 200)
  const locale = text(formData, 'locale', 5)
  const behaviour = formData.getAll('behaviour').map(String).filter((value) => BEHAVIOURS.includes(value))
  const photos = formData.getAll('photos').filter((file) => typeof file === 'object' && file.size > 0)

  if (!REPORT_TYPES.includes(type)) errors.type = 'required'
  if (speciesSlug !== 'unknown' && !(await getAllSpeciesSlugs()).some(({ slug }) => slug === speciesSlug)) errors.species = 'invalid'
  // Allow a day of slack for time zones, but nothing further in the future
  if (Number.isNaN(date.getTime()) || date.getTime() > Date.now() + 86_400_000) errors.date = 'invalid'
  if (location.length < 2) errors.location = 'required'
  if (!REGIONS.includes(region)) errors.region = 'required'
  if (!Number.isInteger(count) || count < 1 || count > 10_000) errors.count = 'invalid'
  if (email && !EMAIL.test(email)) errors.email = 'invalid'
  if (formData.get('consent') !== 'on') errors.consent = 'required'

  const position = lat && lng ? { lat: Number(lat), lng: Number(lng) } : null
  if (position && !(Math.abs(position.lat) <= 90 && Math.abs(position.lng) <= 180)) errors.position = 'invalid'

  if (photos.length > MAX_PHOTOS) errors.photos = 'tooMany'
  else if (photos.some((file) => !file.type.startsWith('image/') || file.size > MAX_PHOTO_BYTES)) errors.photos = 'invalid'

  if (Object.keys(errors).length) return { status: 'error', errors }

  // No token configured (e.g. local preview): say so instead of failing silently
  if (!writeClient) return { status: 'unavailable' }

  try {
    const images = await Promise.all(photos.map(async (file) => {
      const asset = await writeClient.assets.upload('image', Buffer.from(await file.arrayBuffer()), { filename: file.name, contentType: file.type })
      return { _type: 'image', _key: asset._id.slice(-12), asset: { _type: 'reference', _ref: asset._id } }
    }))

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
      photos: images,
      observer: text(formData, 'name', 100),
      email,
      consentAt: new Date().toISOString(),
      locale: hasLocale(locale) ? locale : 'en',
      status: 'pending',
    })

    return { status: 'success' }
  } catch (error) {
    console.error('Report submission failed', error)
    return { status: 'failed' }
  }
}
