import { lang } from 'next/root-params';
import { notFound } from 'next/navigation';
import { hasLocale } from './config';

const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    pt: () => import('./dictionaries/pt.json').then((module) => module.default),
    fr: () => import('./dictionaries/fr.json').then((module) => module.default),
};

// Current locale from the root [lang] segment, for Server Components
export const getLocale = async () => {
    const locale = await lang();
    if (!hasLocale(locale)) notFound();
    return locale;
};

export const getDictionary = async () => dictionaries[await getLocale()]();
