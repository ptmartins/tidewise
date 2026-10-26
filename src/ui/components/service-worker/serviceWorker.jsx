'use client';

import { useEffect } from 'react';

// Registers /sw.js (offline support + installability). Production only: in dev a cached
// page would hide changes. To test locally, run `npm run build && npm start`.
export default function ServiceWorker() {
    useEffect(() => {
        if (process.env.NODE_ENV !== 'production' || !('serviceWorker' in navigator)) return;

        navigator.serviceWorker
            .register('/sw.js', { scope: '/', updateViaCache: 'none' })
            .catch((error) => console.error('Service worker registration failed:', error));
    }, []);

    return null;
}
