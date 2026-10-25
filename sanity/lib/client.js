import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Public, read-only client for published content. The CDN is off because
// results are cached by Next ('use cache' + cache tags) and refreshed by the
// /api/revalidate webhook, which needs fresh data when it fires.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})
