import 'server-only'

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Authenticated read client for private documents. Field reports have dotted
// IDs (report.<uuid>), which Sanity hides from anonymous queries because they
// hold observers' emails; this token (Viewer rights is enough) can read them.
// Only ever select public fields with it.
const token = process.env.SANITY_API_READ_TOKEN

export const readClient = token && projectId && dataset
  ? createClient({ projectId, dataset, apiVersion, token, useCdn: false, perspective: 'published' })
  : null
