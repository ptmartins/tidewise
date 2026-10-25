import { NextResponse } from 'next/server';
import { clerkMiddleware } from '@clerk/nextjs/server';
import { DEFAULT_LOCALE, LOCALES, LOCALE_COOKIE, hasLocale } from './i18n/config';

const ONE_YEAR = 60 * 60 * 24 * 365;

// Best match from Accept-Language, e.g. "pt-BR,pt;q=0.9,en;q=0.8" -> "pt"
const fromAcceptLanguage = (header) =>
    (header ?? '')
        .split(',')
        .map((part) => {
            const [tag, q] = part.trim().split(';q=');
            return { language: tag.split('-')[0].toLowerCase(), q: q ? Number(q) : 1 };
        })
        .filter(({ q }) => q > 0)
        .sort((a, b) => b.q - a.q)
        .find(({ language }) => hasLocale(language))?.language;

// Countries where English, Portuguese or French is an official / main language.
// Any other country falls back to English (DEFAULT_LOCALE).
const COUNTRY_LOCALES = {
    en: ['GB', 'IE', 'US', 'CA', 'AU', 'NZ', 'ZA', 'IN', 'SG', 'MT', 'GI', 'JM', 'NG', 'GH', 'KE'],
    pt: ['PT', 'BR', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL', 'MO'],
    fr: ['FR', 'MC', 'LU', 'BE', 'SN', 'CI', 'ML', 'BF', 'NE', 'TG', 'BJ', 'GN', 'CM', 'GA', 'CG', 'CD', 'CF', 'TD', 'MG', 'DJ', 'KM', 'HT', 'RE', 'GP', 'MQ', 'GF', 'YT', 'PF', 'NC'],
};

// Visitor country as set by the hosting platform's edge (none in local dev)
const GEO_HEADERS = ['x-vercel-ip-country', 'cf-ipcountry', 'cloudfront-viewer-country', 'x-country-code'];

const fromCountry = (headers) => {
    const country = GEO_HEADERS.map((name) => headers.get(name)).find(Boolean)?.toUpperCase();
    return Object.keys(COUNTRY_LOCALES).find((locale) => COUNTRY_LOCALES[locale].includes(country));
};

// Explicit choice (cookie) > browser languages > visitor location > English
const getLocale = (request) => {
    const saved = request.cookies.get(LOCALE_COOKIE)?.value;
    if (hasLocale(saved)) return saved;
    return fromAcceptLanguage(request.headers.get('accept-language')) ?? fromCountry(request.headers) ?? DEFAULT_LOCALE;
};

// Clerk reads the session cookie here, so auth() works in pages and Server Actions.
// Pages and actions check the session themselves; the proxy only handles locales.
export const proxy = clerkMiddleware((_auth, request) => {
    const { pathname } = request.nextUrl;
    const locale = LOCALES.find((code) => pathname === `/${code}` || pathname.startsWith(`/${code}/`));

    // Already localized: remember the choice so the next visit to "/" lands here
    if (locale) {
        const response = NextResponse.next();
        if (request.cookies.get(LOCALE_COOKIE)?.value !== locale) {
            response.cookies.set(LOCALE_COOKIE, locale, { path: '/', maxAge: ONE_YEAR, sameSite: 'lax' });
        }
        return response;
    }

    request.nextUrl.pathname = `/${getLocale(request)}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(request.nextUrl);
}, {
    // In production, only accept session tokens issued for this site (e.g. SITE_URL=https://whaletale.pt).
    // Unset locally and on previews, where any origin is fine
    authorizedParties: process.env.SITE_URL ? [process.env.SITE_URL] : undefined,
});

export const config = {
    // Skip Next internals, the Sanity Studio, API routes and static files
    matcher: ['/((?!_next|studio|api|.*\\..*).*)'],
};
