// Supported locales. The URL segment is the short code (/en, /pt, /fr);
// `htmlLang` is the full tag used for <html lang> and number/date formatting.

export const LOCALES = ['en', 'pt', 'fr'];

export const DEFAULT_LOCALE = 'en';

export const LOCALE_COOKIE = 'NEXT_LOCALE';

export const LOCALE_DETAILS = {
    en: { htmlLang: 'en-GB', name: 'English' },
    pt: { htmlLang: 'pt-PT', name: 'Português' },
    fr: { htmlLang: 'fr-FR', name: 'Français' },
};

export const hasLocale = (locale) => LOCALES.includes(locale);

// Swaps (or adds) the locale segment at the start of a pathname
export const localizePath = (pathname, locale) => {
    const [, first, ...rest] = (pathname || '/').split('/');
    const segments = hasLocale(first) ? rest : [first, ...rest];
    return `/${[locale, ...segments].filter(Boolean).join('/')}`;
};
