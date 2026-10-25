import { defineArrayMember, defineField, defineType } from 'sanity'

// Long-form /learn content: one `chapter` per page, plus a `learnSources`
// document per language with the references shown on /learn#sources.
// Text inside the custom blocks (facts, cards, timeline, callout) marks
// italics with *asterisks*, e.g. "*Orcinus orca*".

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

const ITALICS = 'Wrap scientific names and titles in *asterisks* for italics.'

const facts = defineArrayMember({
  name: 'facts',
  title: 'Stat tiles',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Tiles',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        name: 'fact',
        fields: [
          defineField({ name: 'value', title: 'Value', type: 'string', description: 'e.g. "~30 m"' }),
          defineField({ name: 'label', title: 'Label', type: 'string', description: ITALICS }),
        ],
        preview: { select: { title: 'value', subtitle: 'label' } },
      })],
    }),
  ],
  preview: { select: { first: 'items.0.value' }, prepare: ({ first }) => ({ title: 'Stat tiles', subtitle: first }) },
})

const cards = defineArrayMember({
  name: 'cards',
  title: 'Cards',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Cards',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        name: 'card',
        fields: [
          defineField({ name: 'icon', title: 'Icon', type: 'string', description: 'Iconify name, e.g. "lucide:waves". Optional.' }),
          defineField({ name: 'title', title: 'Title', type: 'string', description: ITALICS }),
          defineField({ name: 'text', title: 'Text', type: 'text', rows: 3, description: ITALICS }),
        ],
        preview: { select: { title: 'title', subtitle: 'text' } },
      })],
    }),
  ],
  preview: { select: { first: 'items.0.title' }, prepare: ({ first }) => ({ title: 'Cards', subtitle: first }) },
})

const timeline = defineArrayMember({
  name: 'timeline',
  title: 'Timeline',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Steps',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        name: 'step',
        fields: [
          defineField({ name: 'when', title: 'When', type: 'string', description: 'e.g. "~50 million years ago"' }),
          defineField({ name: 'title', title: 'Title', type: 'string', description: ITALICS }),
          defineField({ name: 'text', title: 'Text', type: 'text', rows: 3, description: ITALICS }),
        ],
        preview: { select: { title: 'title', subtitle: 'when' } },
      })],
    }),
  ],
  preview: { select: { first: 'items.0.when' }, prepare: ({ first }) => ({ title: 'Timeline', subtitle: first }) },
})

const callout = defineArrayMember({
  name: 'callout',
  title: '“Did you know” box',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', description: ITALICS }),
    defineField({ name: 'text', title: 'Text', type: 'text', rows: 3, description: ITALICS }),
  ],
  preview: { select: { title: 'title', subtitle: 'text' }, prepare: ({ title, subtitle }) => ({ title: `Did you know: ${title ?? ''}`, subtitle }) },
})

export const chapter = defineType({
  name: 'chapter',
  title: 'Learn chapter',
  type: 'document',
  fields: [
    localeField,
    defineField({ name: 'title', title: 'Title', type: 'string', description: ITALICS, validation: (rule) => rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The page address: /learn/<slug>. Use the same slug for every language of a chapter.',
      options: { source: 'nav' },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'order', title: 'Order', type: 'number', validation: (rule) => rule.required().integer().min(1) }),
    defineField({ name: 'nav', title: 'Short title', type: 'string', description: 'Used in menus and chapter lists.', validation: (rule) => rule.required() }),
    defineField({ name: 'icon', title: 'Icon', type: 'string', description: 'Iconify name, e.g. "lucide:footprints".', validation: (rule) => rule.required() }),
    defineField({ name: 'lede', title: 'Lede', type: 'text', rows: 3, description: ITALICS, validation: (rule) => rule.required() }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }, { title: 'Sub-heading', value: 'h3' }],
          lists: [{ title: 'Bullets', value: 'bullet' }],
          marks: { decorators: [{ title: 'Italic', value: 'em' }, { title: 'Bold', value: 'strong' }] },
        }),
        facts,
        cards,
        timeline,
        callout,
      ],
    }),
  ],
  orderings: [{ title: 'Chapter order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'nav', order: 'order', locale: 'locale' },
    prepare: ({ title, order, locale }) => ({ title: `${String(order ?? '').padStart(2, '0')} · ${title}`, subtitle: locale }),
  },
})

export const learnSources = defineType({
  name: 'learnSources',
  title: 'Learn sources',
  type: 'document',
  fields: [
    localeField,
    defineField({
      name: 'references',
      title: 'References',
      type: 'array',
      description: `One reference per entry. ${ITALICS}`,
      of: [defineArrayMember({ type: 'text', rows: 2 })],
    }),
  ],
  preview: { select: { locale: 'locale' }, prepare: ({ locale }) => ({ title: 'Sources and further reading', subtitle: locale }) },
})
