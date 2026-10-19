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

export { IUCN_LABELS } from './_shared'

const species = [...baleenWhales, ...toothedWhales, ...dolphins, ...porpoises, ...seals].map((item) => ({
  ...item,
  thumbnail: thumbnails[item.slug] ?? null,
}))

export function getAllSpecies() {
  return species
}

export function getAllSpeciesSlugs() {
  return species.map(({ slug }) => ({ slug }))
}

export function getSpeciesBySlug(slug) {
  return species.find((item) => item.slug === slug) ?? null
}
