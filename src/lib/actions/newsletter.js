'use server'

import { createHash } from 'node:crypto'
import { writeClient } from '../../../sanity/lib/writeClient'
import { hasLocale } from '@/i18n/config'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Stores a subscriber in Sanity. One document per address (the id is a hash
// of the email), so signing up twice is harmless.
// TODO: hand over to a mailing provider with double opt-in before the first send.
export async function subscribe(_previous, formData) {
  if (String(formData.get('website') ?? '')) return { status: 'success' }

  const email = String(formData.get('email') ?? '').trim().toLowerCase().slice(0, 200)
  const locale = String(formData.get('locale') ?? '')

  if (!EMAIL.test(email)) return { status: 'error', error: 'email' }
  if (formData.get('consent') !== 'on') return { status: 'error', error: 'consent' }
  if (!writeClient) return { status: 'unavailable' }

  try {
    const id = `subscriber.${createHash('sha256').update(email).digest('hex').slice(0, 32)}`
    await writeClient.createIfNotExists({
      _id: id,
      _type: 'subscriber',
      email,
      locale: hasLocale(locale) ? locale : 'en',
      consentAt: new Date().toISOString(),
    })
    return { status: 'success' }
  } catch (error) {
    console.error('Newsletter sign-up failed', error)
    return { status: 'failed' }
  }
}
