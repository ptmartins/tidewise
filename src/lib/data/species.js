import { cacheLife, cacheTag } from 'next/cache';
import { defineQuery } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import { GROUPS } from '@/ui/components/species-explorer/options';

// Images are projected to the { src, width, height, alt, credit } shape the
// components already use with next/image
export const IMAGE = `{ alt, credit, license, sourceUrl, "src": asset->url, "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height }`;

const SPECIES_QUERY = defineQuery(`*[_type == "species" && defined(slug.current)]{
  "slug": slug.current,
  commonName,
  "alternativeNames": coalesce(alternativeNames, []),
  scientificName,
  authority,
  category,
  family,
  summary,
  translations,
  length,
  weight,
  lifespan,
  "threats": coalesce(threats, []),
  distributionShort,
  "oceans": coalesce(oceans, []),
  distributionInPortugal,
  iucnStatus,
  nationalStatus,
  nationalStatusNote,
  populationTrend,
  "protectedUnder": coalesce(protectedUnder, []),
  "legalProtection": coalesce(legalProtection, []),
  "regionsInPortugal": coalesce(regionsInPortugal, []),
  residency,
  sightingFrequency,
  "bestMonths": coalesce(bestMonths, []),
  "about": coalesce(about, []),
  "populationStatus": coalesce(populationStatus, []),
  "appearance": coalesce(appearance, []),
  "behaviourAndDiet": coalesce(behaviourAndDiet, []),
  "lifespanAndReproduction": coalesce(lifespanAndReproduction, []),
  "threatsDetail": coalesce(threatsDetail, []),
  "classification": coalesce(classification[]{ rank, name, italic }, []),
  "mainImage": mainImage${IMAGE},
  "thumbnail": thumbnail${IMAGE},
  "sound": sound{ description, credit, license, sourceUrl, "src": asset->url },
  "similar": coalesce(similarSpecies[].species->slug.current, [])
}`);

const GROUP_ORDER = GROUPS.map(({ value }) => value);

// One cached query for every species; the per-locale views are derived from it
async function fetchSpecies() {
    'use cache';
    cacheTag('species');
    cacheLife('days');

    const species = await client.fetch(SPECIES_QUERY);
    // Group order (baleen whales first … seals last), then by name
    return species.sort((a, b) => GROUP_ORDER.indexOf(a.category) - GROUP_ORDER.indexOf(b.category) || a.commonName.localeCompare(b.commonName));
}

// Translated name and summary where they exist; `englishName` is kept so
// search still matches the English name in other locales
const localize = ({ translations, ...item }, locale) => ({
    ...item,
    englishName: item.commonName,
    commonName: translations?.[locale]?.commonName || item.commonName,
    summary: translations?.[locale]?.summary || item.summary,
    // Images without an uploaded asset count as missing
    mainImage: item.mainImage?.src ? item.mainImage : null,
    thumbnail: item.thumbnail?.src ? item.thumbnail : null,
    sound: item.sound?.src ? item.sound : null,
});

export async function getAllSpecies(locale) {
    return (await fetchSpecies()).map((item) => localize(item, locale));
}

export async function getAllSpeciesSlugs() {
    return (await fetchSpecies()).map(({ slug }) => ({ slug }));
}

export async function getSpeciesBySlug(slug, locale) {
    const item = (await fetchSpecies()).find((entry) => entry.slug === slug);
    return item ? localize(item, locale) : null;
}

// Species most often confused with this one, as full localized records
export async function getSimilarSpecies(slug, locale) {
    const all = await getAllSpecies(locale);
    const item = all.find((entry) => entry.slug === slug);
    return (item?.similar ?? []).map((other) => all.find((entry) => entry.slug === other)).filter(Boolean);
}
