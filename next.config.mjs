/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  experimental: {
    serverActions: {
      // Report form: up to 3 photos of 4 MB each, plus multipart overhead
      bodySizeLimit: '13mb',
    },
  },
  // Baseline hardening for every response. A full Content-Security-Policy is left out on
  // purpose: Clerk, Leaflet tiles, Iconify and the Studio each need their own sources.
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
        // The report form asks for location; nothing uses the camera or microphone
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
      ],
    }];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // Species images and partner logos are served by Sanity's CDN
    remotePatterns: [new URL('https://cdn.sanity.io/images/**')],
  },
};

export default nextConfig;
