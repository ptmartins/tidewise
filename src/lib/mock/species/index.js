// Mock species data for marine mammals recorded in Portuguese waters
// (mainland, Azores and Madeira). Field names mirror the Sanity `species` schema
// (sanity/schemaTypes/species.js) so this can later be swapped for a GROQ query.
// Long-form sections are plain paragraph arrays for now (Portable Text later).
//
// Figures are compiled from general reference sources for mock purposes —
// verify statuses, sizes and population numbers before publishing.

import { baleenWhales } from './baleen-whales'
import { toothedWhales } from './toothed-whales'
import { dolphins } from './dolphins'
import { porpoises, seals } from './porpoises-and-seals'
import { thumbnails } from './thumbnails'
import { similarSpecies } from './similar'
import { pt } from './i18n/pt'
import { fr } from './i18n/fr'

export { IUCN_LABELS } from './_shared'

// Per-locale overrides (common name, summary). Long-form sections are
// English-only for now and fall back to the source text.
const TRANSLATIONS = { pt, fr }

const species = [...baleenWhales, ...toothedWhales, ...dolphins, ...porpoises, ...seals].map((item) => ({
  ...item,
  thumbnail: thumbnails[item.slug] ?? null,
}))

// `englishName` is kept so search still matches the English name in other locales
const localize = (item, locale) => ({
  ...item,
  englishName: item.commonName,
  ...TRANSLATIONS[locale]?.[item.slug],
})

export function getAllSpecies(locale) {
  return species.map((item) => localize(item, locale))
}

export function getAllSpeciesSlugs() {
  return species.map(({ slug }) => ({ slug }))
}

export function getSpeciesBySlug(slug, locale) {
  const item = species.find((entry) => entry.slug === slug)
  return item ? localize(item, locale) : null
}

// Species most often confused with this one, as full localized records
export function getSimilarSpecies(slug, locale) {
  return (similarSpecies[slug] ?? []).map((other) => getSpeciesBySlug(other, locale)).filter(Boolean)
}
