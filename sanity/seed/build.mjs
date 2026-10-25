// Builds sanity/seed/out/seed.ndjson from the seed data in ./data, ready for:
//
//   npx sanity exec sanity/seed/build.mjs
//   npx sanity dataset import sanity/seed/out/seed.ndjson production --replace
//
// Document IDs are deterministic, so importing again with --replace updates
// the same documents instead of creating copies. Images are uploaded by the
// import itself (the `_sanityAsset` references point at files in /public).

import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { baleenWhales } from './data/species/baleen-whales.js'
import { toothedWhales } from './data/species/toothed-whales.js'
import { dolphins } from './data/species/dolphins.js'
import { porpoises, seals } from './data/species/porpoises-and-seals.js'
import { thumbnails } from './data/species/thumbnails.js'
import { similarSpecies } from './data/species/similar.js'
import { pt } from './data/species/i18n/pt.js'
import { fr } from './data/species/i18n/fr.js'
import { en as learn } from './data/learn/en.js'
import { en as glossary } from './data/glossary/en.js'
import { LINK_CATEGORIES } from './data/links.js'
import { STRANDING_REGIONS } from './data/stranding.js'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..', '..')
const outDir = join(here, 'out')

// Stable array keys, so re-imports don't churn every key
const key = (...parts) => createHash('sha1').update(parts.join(':')).digest('hex').slice(0, 12)

// Drops null / undefined values so optional fields are simply absent
const clean = (value) => {
  if (Array.isArray(value)) return value.map(clean)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).filter(([, v]) => v != null).map(([k, v]) => [k, clean(v)]))
  }
  return value
}

const keyed = (items, prefix, type) => items.map((item, index) => ({ _key: key(prefix, index), ...(type && { _type: type }), ...item }))

// "/species/fin-whale.png" -> an image the import uploads from /public
const image = (src, fields) => {
  const file = join(root, 'public', src)
  if (!existsSync(file)) {
    console.warn(`  missing image ${src}, skipped`)
    return undefined
  }
  return { _type: 'image', _sanityAsset: `image@${pathToFileURL(file).href}`, ...fields }
}

// ---------- Species ----------

const species = [...baleenWhales, ...toothedWhales, ...dolphins, ...porpoises, ...seals].map((item) => {
  const id = `species-${item.slug}`
  const thumb = thumbnails[item.slug]
  const translations = Object.fromEntries(
    Object.entries({ pt, fr })
      .filter(([, table]) => table[item.slug])
      .map(([locale, table]) => [locale, { commonName: table[item.slug].commonName, summary: table[item.slug].summary }]),
  )

  return clean({
    _id: id,
    _type: 'species',
    slug: { _type: 'slug', current: item.slug },
    commonName: item.commonName,
    alternativeNames: item.alternativeNames,
    scientificName: item.scientificName,
    authority: item.authority,
    category: item.category,
    family: item.family,
    summary: item.summary,
    translations,
    length: item.length,
    weight: item.weight,
    lifespan: item.lifespan,
    threats: item.threats,
    distributionShort: item.distributionShort,
    iucnStatus: item.iucnStatus,
    nationalStatus: item.nationalStatus,
    nationalStatusNote: item.nationalStatusNote,
    populationTrend: item.populationTrend,
    protectedUnder: item.protectedUnder,
    legalProtection: item.legalProtection,
    regionsInPortugal: item.regionsInPortugal,
    residency: item.residency,
    sightingFrequency: item.sightingFrequency,
    bestMonths: item.bestMonths,
    about: item.about,
    populationStatus: item.populationStatus,
    appearance: item.appearance,
    behaviourAndDiet: item.behaviourAndDiet,
    lifespanAndReproduction: item.lifespanAndReproduction,
    threatsDetail: item.threatsDetail,
    classification: keyed(item.classification ?? [], `${id}:rank`, 'rank'),
    mainImage: item.mainImage && image(item.mainImage.src, { alt: item.mainImage.alt, credit: item.mainImage.credit }),
    thumbnail: thumb && image(thumb.src, { alt: thumb.alt, credit: thumb.credit, license: thumb.license, sourceUrl: thumb.sourceUrl }),
    similarSpecies: keyed(
      (similarSpecies[item.slug] ?? []).map((other) => ({ species: { _type: 'reference', _ref: `species-${other}` } })),
      `${id}:similar`,
      'similar',
    ),
  })
})

// ---------- Learn ----------

// "*Orcinus orca* hunts" -> Portable Text spans with an `em` mark
const spans = (text, prefix) =>
  text.split(/(\*[^*]+\*)/g).filter(Boolean).map((part, index) => {
    const italic = /^\*[^*]+\*$/.test(part)
    return { _type: 'span', _key: key(prefix, index), text: italic ? part.slice(1, -1) : part, marks: italic ? ['em'] : [] }
  })

const textBlock = (text, prefix, extra = {}) => ({ _type: 'block', _key: key(prefix), style: 'normal', markDefs: [], children: spans(text, prefix), ...extra })

const toPortableText = (blocks, docId) => blocks.flatMap((block, index) => {
  const prefix = `${docId}:${index}`
  if (typeof block === 'string') return [textBlock(block, prefix)]

  switch (block.type) {
    case 'h3':
      return [textBlock(block.text, prefix, { style: 'h3' })]
    case 'list':
      return block.items.map((item, i) => textBlock(item, `${prefix}:${i}`, { listItem: 'bullet', level: 1 }))
    case 'facts':
      return [{ _type: 'facts', _key: key(prefix), items: keyed(block.items, prefix, 'fact') }]
    case 'cards':
      return [{ _type: 'cards', _key: key(prefix), items: keyed(block.items, prefix, 'card') }]
    case 'timeline':
      return [{ _type: 'timeline', _key: key(prefix), items: keyed(block.items, prefix, 'step') }]
    case 'callout':
      return [{ _type: 'callout', _key: key(prefix), title: block.title, text: block.text }]
    default:
      throw new Error(`Unknown block type "${block.type}" in ${docId}`)
  }
})

const chapters = learn.sections.map((section, index) => {
  const id = `chapter-en-${section.id}`
  return clean({
    _id: id,
    _type: 'chapter',
    locale: 'en',
    slug: { _type: 'slug', current: section.id },
    order: index + 1,
    nav: section.nav,
    icon: section.icon,
    title: section.title,
    lede: section.lede,
    body: toPortableText(section.blocks, id),
  })
})

const sources = { _id: 'learnSources-en', _type: 'learnSources', locale: 'en', references: learn.references }

const glossaryTerms = glossary.map(({ term, definition, chapter }) => clean({
  _id: `glossaryTerm-en-${term.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  _type: 'glossaryTerm',
  locale: 'en',
  term,
  definition,
  chapter,
}))

// ---------- Resources ----------

// The networks listed on /stranding are the Portuguese rescue links
const strandingRegion = new Map(
  STRANDING_REGIONS.flatMap(({ id, networks }) => networks.map(({ href }) => [href, id])),
)

const resources = LINK_CATEGORIES.flatMap(({ id: category, links }) =>
  links
    .filter(({ href }) => href && href !== '#')
    .map(({ id, title, href }, index) => clean({
      _id: `resource-${id}`,
      _type: 'resource',
      title: title.trim().replace(/:$/, ''),
      url: href,
      category,
      order: index + 1,
      region: category === 'rescue' ? (strandingRegion.get(href) ?? 'international') : undefined,
    })),
)

// ---------- Write ----------

const documents = [...species, ...chapters, sources, ...glossaryTerms, ...resources]

mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, 'seed.ndjson'), documents.map((doc) => JSON.stringify(doc)).join('\n') + '\n')

const count = (type) => documents.filter(({ _type }) => _type === type).length
console.log(`Wrote ${documents.length} documents to sanity/seed/out/seed.ndjson`)
for (const type of ['species', 'chapter', 'learnSources', 'glossaryTerm', 'resource']) console.log(`  ${type}: ${count(type)}`)
