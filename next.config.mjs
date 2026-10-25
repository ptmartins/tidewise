// Clerk's Frontend API host is encoded in the publishable key: pk_live_<base64("clerk.example.com$")>
const clerkHost = (() => {
  const encoded = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.split('_')[2];
  return encoded ? Buffer.from(encoded, 'base64').toString().replace(/\$$/, '') : '';
})();
const clerk = ['https://*.clerk.accounts.dev', clerkHost && `https://${clerkHost}`].filter(Boolean).join(' ');
const iconify = 'https://api.iconify.design https://api.simplesvg.com https://api.unisvg.com';
const dev = process.env.NODE_ENV === 'development';

// Enforced everywhere: blocks plugins, <base> hijacking and framing by other sites, and can't break any page
const BASE_CSP = "base-uri 'self'; object-src 'none'; frame-ancestors 'self'";

// Full allowlist for the site (not the Studio), reported only for now: check the browser console
// for violations, then move it to the enforced header. Scripts keep 'unsafe-inline' because
// prerendered pages can't carry per-request nonces.
const SITE_CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ''} ${clerk} https://challenges.cloudflare.com`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: https://cdn.sanity.io https://img.clerk.com https://tile.openstreetmap.org`,
  "font-src 'self'",
  `connect-src 'self' ${clerk} ${iconify}`,
  "frame-src https://challenges.cloudflare.com",
  "worker-src 'self' blob:",
  "form-action 'self'",
  BASE_CSP,
].join('; ');

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  poweredByHeader: false,
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  experimental: {
    serverActions: {
      // Report form: up to 3 photos of 4 MB each, plus multipart overhead
      bodySizeLimit: '13mb',
    },
  },
  // Baseline hardening for every response, plus the report-only CSP for everything but the Studio
  async headers() {
    return [{
      source: '/((?!studio).*)',
      headers: [{ key: 'Content-Security-Policy-Report-Only', value: SITE_CSP }],
    }, {
      source: '/:path*',
      headers: [
        { key: 'Content-Security-Policy', value: BASE_CSP },
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
