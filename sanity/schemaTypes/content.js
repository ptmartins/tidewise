import { defineArrayMember, defineField, defineType } from 'sanity'

// Supporting content types: partners, resources, articles, regions,
// glossary terms and newsletter subscribers. They mirror the mock data in
// src/lib/mock/* and src/lib/content/* so each can move to GROQ in turn.

const LOCALES = [
  { title: 'English', value: 'en' },
  { title: 'Português', value: 'pt' },
  { title: 'Français', value: 'fr' },
]

const localeField = defineField({
  name: 'locale',
  title: 'Language',
  type: 'string',
  options: { list: LOCALES, layout: 'radio' },
  initialValue: 'en',
  validation: (rule) => rule.required(),
})

export const partner = defineType({
  name: 'partner',
  title: 'Partner / sponsor',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'url', title: 'Website', type: 'url' }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Shown monochrome in the footer strip and in colour on /about#partners.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tier',
      title: 'Tier',
      type: 'string',
      options: { list: [{ title: 'Scientific partner', value: 'scientific' }, { title: 'Funder', value: 'funder' }, { title: 'Supporter', value: 'supporter' }], layout: 'radio' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'placements',
      title: 'Placements',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: { list: [{ title: 'Footer strip', value: 'footer' }, { title: 'About page', value: 'about' }, { title: 'Feature credit ("Made possible by")', value: 'feature' }] },
      description: 'Never the stranding or report pages, nor inside science content (see the sponsorship policy).',
    }),
    defineField({ name: 'feature', title: 'Credited feature', type: 'string', description: 'e.g. "Azores sightings map". Only for feature credits.', hidden: ({ document }) => !document?.placements?.includes('feature') }),
    defineField({ name: 'disclosure', title: 'Disclosure', type: 'text', rows: 2, description: 'What the partner provides, in plain words.' }),
    defineField({ name: 'start', title: 'Start date', type: 'date' }),
    defineField({ name: 'end', title: 'End date', type: 'date' }),
  ],
  preview: { select: { title: 'name', subtitle: 'tier', media: 'logo' } },
})

export const resource = defineType({
  name: 'resource',
  title: 'Resource link',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'url', title: 'URL', type: 'url', validation: (rule) => rule.required() }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['rescue', 'research', 'guides', 'conservation', 'learning'].map((value) => ({ title: value, value })) },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'region', title: 'Region served', type: 'string', options: { list: ['mainland', 'azores', 'madeira', 'international'].map((value) => ({ title: value, value })) } }),
    defineField({ name: 'phone', title: 'Phone (stranding networks)', type: 'string' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'category' } },
})

export const article = defineType({
  name: 'article',
  title: 'Story / article',
  type: 'document',
  fields: [
    localeField,
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (rule) => rule.required() }),
    defineField({ name: 'publishedAt', title: 'Published', type: 'datetime', validation: (rule) => rule.required() }),
    defineField({ name: 'author', title: 'Author', type: 'string' }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'mainImage', title: 'Main image', type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', title: 'Alternative text', type: 'string' })] }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [defineArrayMember({ type: 'block' }), defineArrayMember({ type: 'image' })] }),
    defineField({ name: 'species', title: 'Related species', type: 'array', of: [defineArrayMember({ type: 'reference', to: [{ type: 'species' }] })] }),
    defineField({ name: 'sponsor', title: 'Sponsor (if any)', type: 'reference', to: [{ type: 'partner' }], description: 'Shown as a labelled "Made possible by" credit, never inside the text.' }),
  ],
  orderings: [{ title: 'Newest first', name: 'publishedDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: { select: { title: 'title', subtitle: 'locale', media: 'mainImage' } },
})

export const region = defineType({
  name: 'region',
  title: 'Region',
  type: 'document',
  fields: [
    defineField({ name: 'id', title: 'ID', type: 'string', options: { list: ['mainland', 'azores', 'madeira'].map((value) => ({ title: value, value })) }, validation: (rule) => rule.required() }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'intro', title: 'Introduction', type: 'text', rows: 4 }),
    defineField({
      name: 'hotspots',
      title: 'Hotspots',
      type: 'array',
      of: [defineArrayMember({ type: 'object', name: 'hotspot', fields: [
        defineField({ name: 'name', title: 'Name', type: 'string' }),
        defineField({ name: 'position', title: 'Position', type: 'geopoint' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
      ] })],
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'id' } },
})

export const glossaryTerm = defineType({
  name: 'glossaryTerm',
  title: 'Glossary term',
  type: 'document',
  fields: [
    localeField,
    defineField({ name: 'term', title: 'Term', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'definition', title: 'Definition', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({
      name: 'chapter',
      title: 'Learn chapter',
      type: 'string',
      options: { list: ['who', 'evolution', 'anatomy', 'physiology', 'bioacoustics', 'ecology', 'behaviour', 'life-history', 'history', 'conservation', 'portugal', 'help'].map((value) => ({ title: value, value })) },
    }),
  ],
  orderings: [{ title: 'A–Z', name: 'termAsc', by: [{ field: 'term', direction: 'asc' }] }],
  preview: { select: { title: 'term', subtitle: 'locale' } },
})

// Created by the newsletter form. Personal data: export or delete on request.
export const subscriber = defineType({
  name: 'subscriber',
  title: 'Newsletter subscriber',
  type: 'document',
  fields: [
    defineField({ name: 'email', title: 'Email', type: 'string', readOnly: true }),
    defineField({ name: 'locale', title: 'Language', type: 'string', readOnly: true }),
    defineField({ name: 'consentAt', title: 'Consent given at', type: 'datetime', readOnly: true }),
    defineField({ name: 'unsubscribed', title: 'Unsubscribed', type: 'boolean' }),
  ],
  preview: { select: { title: 'email', subtitle: 'locale' } },
})
