import en from '@/i18n/dictionaries/en.json';

// Web app manifest, served at /manifest.webmanifest. One manifest for every language:
// start_url "/" goes through the proxy, which sends each visitor to their own locale.
export default function manifest() {
    return {
        id: '/',
        name: en.meta.title,
        short_name: en.meta.title,
        description: en.meta.description,
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'any',
        background_color: '#f6f8f6',
        theme_color: '#246663',
        categories: ['education', 'travel'],
        icons: [
            { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
            { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
            { src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
    };
}
