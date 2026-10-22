import 'server-only'

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Authenticated client for creating documents from Server Actions (reports,
// newsletter sign-ups). The token needs Editor rights and must never reach the
// browser, so it is read from a non-NEXT_PUBLIC variable.
const token = process.env.SANITY_API_WRITE_TOKEN

export const writeClient = token && projectId && dataset
  ? createClient({ projectId, dataset, apiVersion, token, useCdn: false })
  : null
