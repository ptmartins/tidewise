import { NextResponse } from 'next/server';
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
        .sort((a, b) => b.q - a.q)
        .find(({ language }) => hasLocale(language))?.language;

const getLocale = (request) => {
    const saved = request.cookies.get(LOCALE_COOKIE)?.value;
    if (hasLocale(saved)) return saved;
    return fromAcceptLanguage(request.headers.get('accept-language')) ?? DEFAULT_LOCALE;
};

export function proxy(request) {
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
}

export const config = {
    // Skip Next internals, the Sanity Studio, API routes and static files
    matcher: ['/((?!_next|studio|api|.*\\..*).*)'],
};
