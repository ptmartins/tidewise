import { cacheLife, cacheTag } from 'next/cache';
import { defineQuery } from 'next-sanity';
import { client } from '../../../sanity/lib/client';

const LEARN_QUERY = defineQuery(`{
  "sections": *[_type == "chapter" && locale == $locale && defined(slug.current)] | order(order asc){
    "id": slug.current, icon, nav, title, lede, "body": coalesce(body, [])
  },
  "references": coalesce(*[_type == "learnSources" && locale == $locale][0].references, [])
}`);

const GLOSSARY_QUERY = defineQuery(`*[_type == "glossaryTerm" && locale == $locale] | order(term asc){ term, definition, chapter }`);

async function fetchLearn(locale) {
    'use cache';
    cacheTag('chapter', 'learnSources');
    cacheLife('days');
    return client.fetch(LEARN_QUERY, { locale });
}

async function fetchGlossary(locale) {
    'use cache';
    cacheTag('glossaryTerm');
    cacheLife('days');
    return client.fetch(GLOSSARY_QUERY, { locale });
}

// Chapters and references for a locale, falling back to English while a
// translation doesn't exist; `locale` reports which language was served
export async function getLearnContent(locale) {
    const content = await fetchLearn(locale);
    if (content.sections.length > 0 || locale === 'en') return { ...content, locale };
    return { ...(await fetchLearn('en')), locale: 'en' };
}

export async function getGlossary(locale) {
    const terms = await fetchGlossary(locale);
    if (terms.length > 0 || locale === 'en') return { terms, locale };
    return { terms: await fetchGlossary('en'), locale: 'en' };
}
