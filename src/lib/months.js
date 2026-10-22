import { LOCALE_DETAILS } from '@/i18n/config';

// Month keys as stored in the species data (`bestMonths`). Safe to import from
// client components (unlike ./time.js, which uses the server cache).
export const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

// Localized month names, e.g. { month: 'january', name: 'janeiro', short: 'jan.', initial: 'J' }
export const monthNames = (locale) => MONTHS.map((month, index) => {
    const date = new Date(Date.UTC(2000, index, 1));
    const name = (style) => new Intl.DateTimeFormat(LOCALE_DETAILS[locale].htmlLang, { month: style, timeZone: 'UTC' }).format(date);
    return { month, name: name('long'), short: name('short'), initial: name('narrow') };
});
