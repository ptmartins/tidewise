// WhaleTale service worker: makes the site installable and keeps pages you've visited readable offline.
// Bump VERSION to drop every cache on the next visit.
const VERSION = 'v1';
const STATIC_CACHE = `static-${VERSION}`;
const PAGES_CACHE = `pages-${VERSION}`;
const ASSETS_CACHE = `assets-${VERSION}`;
const OFFLINE_URL = '/offline.html';

const PRECACHE = [OFFLINE_URL, '/icons/icon-192.png', '/logo.png'];

const MAX_PAGES = 60;
const MAX_ASSETS = 200;

// Never cached: per-user pages (the report form reads the session), sign-in, the Studio and API routes
const NEVER_CACHE = /^\/(?:studio|api)(?:\/|$)|^\/[a-z]{2}\/(?:report|sign-in|sign-up)(?:\/|$)/;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then((cache) => cache.addAll(PRECACHE))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    const current = [STATIC_CACHE, PAGES_CACHE, ASSETS_CACHE];
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys.filter((key) => !current.includes(key)).map((key) => caches.delete(key))))
            .then(() => self.clients.claim())
    );
});

// Oldest entries go first once a cache is over its limit
const trim = async (cacheName, max) => {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    await Promise.all(keys.slice(0, Math.max(0, keys.length - max)).map((key) => cache.delete(key)));
};

const put = async (cacheName, request, response, max) => {
    const cache = await caches.open(cacheName);
    await cache.put(request, response);
    if (max) await trim(cacheName, max);
};

// Pages: always try the network for fresh content, fall back to the last copy, then the offline page
const networkFirst = async (event) => {
    const { request } = event;
    try {
        const response = await fetch(request);
        if (response.ok && response.type === 'basic') {
            event.waitUntil(put(PAGES_CACHE, request, response.clone(), MAX_PAGES));
        }
        return response;
    } catch {
        return (await caches.match(request, { cacheName: PAGES_CACHE }))
            ?? (await caches.match(OFFLINE_URL, { cacheName: STATIC_CACHE }))
            ?? Response.error();
    }
};

// Hashed build files never change, so the cached copy is always right
const cacheFirst = async (event) => {
    const cached = await caches.match(event.request, { cacheName: STATIC_CACHE });
    if (cached) return cached;
    const response = await fetch(event.request);
    if (response.ok) event.waitUntil(put(STATIC_CACHE, event.request, response.clone()));
    return response;
};

// Images and other public files: answer from cache straight away, refresh it in the background
const staleWhileRevalidate = async (event) => {
    const cached = await caches.match(event.request, { cacheName: ASSETS_CACHE });
    const refresh = fetch(event.request).then((response) => {
        if (response.ok) event.waitUntil(put(ASSETS_CACHE, event.request, response.clone(), MAX_ASSETS));
        return response;
    });
    if (cached) {
        event.waitUntil(refresh.catch(() => {}));
        return cached;
    }
    return refresh;
};

self.addEventListener('fetch', (event) => {
    const { request } = event;
    if (request.method !== 'GET') return;

    const url = new URL(request.url);
    if (url.origin !== self.location.origin || NEVER_CACHE.test(url.pathname)) return;

    // React Server Component payloads for client-side navigation: leave them to the network.
    // Offline, Next falls back to a full page load, which the navigate branch below answers.
    if (request.headers.has('RSC') || url.searchParams.has('_rsc')) return;

    if (request.mode === 'navigate') {
        event.respondWith(networkFirst(event));
    } else if (url.pathname.startsWith('/_next/static/')) {
        event.respondWith(cacheFirst(event));
    } else if (url.pathname.startsWith('/_next/image') || /\.(?:png|jpe?g|webp|avif|svg|ico|woff2?)$/.test(url.pathname)) {
        event.respondWith(staleWhileRevalidate(event));
    }
});
