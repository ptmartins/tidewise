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
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
