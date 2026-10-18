/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { Suspense } from 'react'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export { metadata, viewport } from 'next-sanity/studio'

// Prerender /studio; the Studio handles its own client-side routing below it
export function generateStaticParams() {
  return [{ tool: [] }]
}

export default function StudioPage() {
  // Covers the site header/footer from the root layout
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 2000 }}>
      <Suspense>
        <NextStudio config={config} />
      </Suspense>
    </div>
  )
}
