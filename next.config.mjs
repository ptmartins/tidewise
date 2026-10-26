// Clerk's Frontend API host is encoded in the publishable key: pk_live_<base64("clerk.example.com$")>
const clerkHost = (() => {
  const encoded = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.split('_')[2];
  return encoded ? Buffer.from(encoded, 'base64').toString().replace(/\$$/, '') : '';
})();
// *.protect.clerk.com: Clerk's bot protection, which loads a script from there and probes it on several
// non-standard ports, hence :* (a host without a port only allows 443)
const clerk = ['https://*.clerk.accounts.dev', clerkHost && `https://${clerkHost}`, 'https://*.protect.clerk.com:*'].filter(Boolean).join(' ');
const iconify = 'https://api.iconify.design https://api.simplesvg.com https://api.unisvg.com';
const dev = process.env.NODE_ENV === 'development';

// The Studio's policy: blocks plugins, <base> hijacking and framing by other sites. The Studio loads
// scripts and data from many Sanity hosts, so it doesn't get the full allowlist below.
const BASE_CSP = "base-uri 'self'; object-src 'none'; frame-ancestors 'self'";

// Full allowlist for the site (everything but the Studio). Scripts keep 'unsafe-inline' because
// prerendered pages can't carry per-request nonces. Adding a third-party service? Allow its hosts
// here first, or the browser will block it (the console shows a CSP violation).
const SITE_CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ''} ${clerk} https://challenges.cloudflare.com`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: https://cdn.sanity.io https://img.clerk.com https://tile.openstreetmap.org`,
  "font-src 'self'",
  // Species sound recordings are served from Sanity's asset CDN
  "media-src 'self' https://cdn.sanity.io",
  // clerk-telemetry.com: Clerk's development instances send usage telemetry
  `connect-src 'self' ${clerk} https://clerk-telemetry.com ${iconify}`,
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
  // Baseline hardening for every response, plus a CSP: the full allowlist for the site, the base one for the Studio.
  // Each path gets exactly one CSP rule, since a later rule setting the same header would override an earlier one.
  async headers() {
    return [{
      source: '/((?!studio).*)',
      headers: [{ key: 'Content-Security-Policy', value: SITE_CSP }],
    }, {
      source: '/studio/:path*',
      headers: [{ key: 'Content-Security-Policy', value: BASE_CSP }],
    }, {
      source: '/:path*',
      headers: [
        // Isolates the window from cross-origin pages it opens or is opened by; popups (e.g. OAuth) still work
        { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        // HTTPS only, for 2 years, on every subdomain. `preload` allows the domain onto browsers' built-in
        // HTTPS-only list (hstspreload.org). Removal takes months, so every subdomain must serve HTTPS first.
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        // The report form asks for location; nothing uses the camera or microphone
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
      ],
    }, {
      // Browsers must always fetch the latest service worker, or a fix could take a day to reach visitors
      source: '/sw.js',
      headers: [
        { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
        { key: 'Content-Type', value: 'application/javascript; charset=utf-8' },
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
