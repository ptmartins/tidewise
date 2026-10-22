import { cacheLife } from 'next/cache';
import { MONTHS } from './months';

export { MONTHS, monthNames } from './months';

// "Now" for prerendered pages: cached for a day, so pages built from it
// (the footer year, "in season now") refresh daily rather than per request
export async function getToday() {
    'use cache';
    cacheLife('days');
    const now = new Date();
    return { year: now.getFullYear(), month: MONTHS[now.getMonth()] };
}
