import { defineArrayMember, defineField, defineType } from 'sanity'

const IUCN_STATUS = [
  { title: 'Not Evaluated (NE)', value: 'NE' },
  { title: 'Data Deficient (DD)', value: 'DD' },
  { title: 'Least Concern (LC)', value: 'LC' },
  { title: 'Near Threatened (NT)', value: 'NT' },
  { title: 'Vulnerable (VU)', value: 'VU' },
  { title: 'Endangered (EN)', value: 'EN' },
  { title: 'Critically Endangered (CR)', value: 'CR' },
  { title: 'Extinct in the Wild (EW)', value: 'EW' },
  { title: 'Extinct (EX)', value: 'EX' },
]

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
].map((month) => ({ title: month, value: month.toLowerCase() }))

// Reusable min/max field, e.g. length 2–4 m, weight 150–650 kg
const rangeField = ({ name, title, unit, group, description }) =>
  defineField({
    name,
    title: `${title} (${unit})`,
    type: 'object',
    group,
    description,
    options: { columns: 2 },
    fields: [
      defineField({ name: 'min', title: 'Min', type: 'number', validation: (rule) => rule.min(0) }),
      defineField({ name: 'max', title: 'Max', type: 'number', validation: (rule) => rule.min(0) }),
    ],
    validation: (rule) =>
      rule.custom((value) => {
        if (value?.min != null && value?.max != null && value.min > value.max) {
          return 'Min cannot be greater than max'
        }
        return true
      }),
  })

export const species = defineType({
  name: 'species',
  title: 'Species',
  type: 'document',
  groups: [
    { name: 'overview', title: 'Overview', default: true },
    { name: 'taxonomy', title: 'Taxonomy' },
    { name: 'physical', title: 'Physical traits' },
    { name: 'ecology', title: 'Ecology' },
    { name: 'distribution', title: 'Distribution' },
    { name: 'conservation', title: 'Conservation' },
    { name: 'media', title: 'Media' },
  ],
  fields: [
    // ---------- Overview ----------
    defineField({
      name: 'commonName',
      title: 'Common name',
      type: 'string',
      group: 'overview',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alternativeNames',
      title: 'Other common names',
      type: 'array',
      group: 'overview',
      description: 'Other names the species is known by, including local Portuguese names.',
      of: [defineArrayMember({ type: 'string' })],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'overview',
      options: { source: 'commonName', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      group: 'overview',
      description: 'Short intro used on cards and listings.',
      validation: (rule) => rule.max(280),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      group: 'overview',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
        }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alternative text', type: 'string' }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'funFacts',
      title: 'Fun facts',
      type: 'array',
      group: 'overview',
      of: [defineArrayMember({ type: 'string' })],
    }),

    // ---------- Taxonomy ----------
    defineField({
      name: 'scientificName',
      title: 'Scientific name',
      type: 'string',
      group: ['overview', 'taxonomy'],
      description: 'Binomial name, e.g. Delphinus delphis',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'taxonomy',
      options: {
        list: [
          { title: 'Baleen whale', value: 'baleen-whale' },
          { title: 'Toothed whale', value: 'toothed-whale' },
          { title: 'Dolphin', value: 'dolphin' },
          { title: 'Porpoise', value: 'porpoise' },
          { title: 'Seal', value: 'seal' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'suborder',
      title: 'Suborder / clade',
      type: 'string',
      group: 'taxonomy',
      options: {
        list: [
          { title: 'Mysticeti (baleen whales)', value: 'mysticeti' },
          { title: 'Odontoceti (toothed whales)', value: 'odontoceti' },
          { title: 'Pinnipedia (seals)', value: 'pinnipedia' },
        ],
      },
    }),
    defineField({
      name: 'family',
      title: 'Family',
      type: 'string',
      group: 'taxonomy',
      description: 'e.g. Delphinidae, Balaenopteridae, Physeteridae',
    }),

    // ---------- Physical traits ----------
    rangeField({ name: 'length', title: 'Adult length', unit: 'm', group: 'physical' }),
    rangeField({ name: 'weight', title: 'Adult weight', unit: 'kg', group: 'physical' }),
    rangeField({ name: 'lifespan', title: 'Lifespan', unit: 'years', group: 'physical' }),
    rangeField({ name: 'lengthAtBirth', title: 'Length at birth', unit: 'm', group: 'physical' }),
    defineField({
      name: 'sexualDimorphism',
      title: 'Sexual dimorphism',
      type: 'text',
      rows: 2,
      group: 'physical',
      description: 'Differences between males and females, if relevant.',
    }),
    defineField({
      name: 'identification',
      title: 'Identification tips',
      type: 'array',
      group: 'physical',
      description: 'Key features to recognise it at sea (dorsal fin, blow, colouring…).',
      of: [defineArrayMember({ type: 'string' })],
    }),

    // ---------- Ecology ----------
    defineField({
      name: 'diet',
      title: 'Diet',
      type: 'array',
      group: 'ecology',
      description: 'Main prey, e.g. sardine, squid, krill.',
      of: [defineArrayMember({ type: 'string' })],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'feedingStrategy',
      title: 'Feeding strategy',
      type: 'string',
      group: 'ecology',
      options: {
        list: [
          { title: 'Filter feeder', value: 'filter-feeder' },
          { title: 'Hunter (fish)', value: 'piscivore' },
          { title: 'Hunter (squid / cephalopods)', value: 'teuthophage' },
          { title: 'Generalist', value: 'generalist' },
        ],
      },
    }),
    defineField({
      name: 'habitat',
      title: 'Habitat',
      type: 'array',
      group: 'ecology',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        list: [
          { title: 'Coastal', value: 'coastal' },
          { title: 'Continental shelf', value: 'shelf' },
          { title: 'Oceanic / open sea', value: 'oceanic' },
          { title: 'Deep water / canyons', value: 'deep' },
          { title: 'Estuaries', value: 'estuarine' },
        ],
      },
    }),
    rangeField({ name: 'diveDepth', title: 'Dive depth', unit: 'm', group: 'ecology' }),
    rangeField({ name: 'groupSize', title: 'Typical group size', unit: 'individuals', group: 'ecology' }),
    defineField({
      name: 'socialStructure',
      title: 'Social structure',
      type: 'string',
      group: 'ecology',
      options: {
        list: [
          { title: 'Solitary', value: 'solitary' },
          { title: 'Small groups', value: 'small-groups' },
          { title: 'Large pods', value: 'large-pods' },
          { title: 'Variable', value: 'variable' },
        ],
      },
    }),
    defineField({
      name: 'gestationMonths',
      title: 'Gestation (months)',
      type: 'number',
      group: 'ecology',
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: 'behaviour',
      title: 'Behaviour',
      type: 'text',
      rows: 4,
      group: 'ecology',
      description: 'Notable behaviour: breaching, bow-riding, migration, vocalisations…',
    }),

    // ---------- Distribution ----------
    defineField({
      name: 'globalDistribution',
      title: 'Global distribution',
      type: 'text',
      rows: 3,
      group: 'distribution',
    }),
    defineField({
      name: 'regionsInPortugal',
      title: 'Regions in Portugal',
      type: 'array',
      group: 'distribution',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        list: [
          { title: 'Mainland — North', value: 'mainland-north' },
          { title: 'Mainland — Centre', value: 'mainland-centre' },
          { title: 'Mainland — Lisbon / Setúbal', value: 'mainland-lisbon' },
          { title: 'Mainland — Alentejo', value: 'mainland-alentejo' },
          { title: 'Mainland — Algarve', value: 'mainland-algarve' },
          { title: 'Azores', value: 'azores' },
          { title: 'Madeira', value: 'madeira' },
        ],
      },
    }),
    defineField({
      name: 'distributionInPortugal',
      title: 'Distribution in Portugal',
      type: 'text',
      rows: 3,
      group: 'distribution',
    }),
    defineField({
      name: 'residency',
      title: 'Presence in Portuguese waters',
      type: 'string',
      group: 'distribution',
      options: {
        list: [
          { title: 'Resident (year-round)', value: 'resident' },
          { title: 'Seasonal / migratory', value: 'migratory' },
          { title: 'Occasional visitor', value: 'occasional' },
          { title: 'Rare / vagrant', value: 'rare' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'bestMonths',
      title: 'Best months to spot',
      type: 'array',
      group: 'distribution',
      of: [defineArrayMember({ type: 'string' })],
      options: { list: MONTHS, layout: 'grid' },
    }),
    defineField({
      name: 'sightingFrequency',
      title: 'Sighting frequency',
      type: 'string',
      group: 'distribution',
      options: {
        list: [
          { title: 'Very common', value: 'very-common' },
          { title: 'Common', value: 'common' },
          { title: 'Uncommon', value: 'uncommon' },
          { title: 'Rare', value: 'rare' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'populationPortugal',
      title: 'Estimated population in Portugal',
      type: 'object',
      group: ['distribution', 'conservation'],
      fields: [
        rangeField({ name: 'estimate', title: 'Estimate', unit: 'individuals' }),
        defineField({
          name: 'year',
          title: 'Year of estimate',
          type: 'number',
          validation: (rule) => rule.integer().min(1900).max(2100),
        }),
        defineField({
          name: 'notes',
          title: 'Notes',
          type: 'text',
          rows: 2,
          description: 'Survey area, method or caveats (e.g. "mainland continental shelf only").',
        }),
        defineField({ name: 'source', title: 'Source', type: 'url' }),
      ],
    }),

    // ---------- Conservation ----------
    defineField({
      name: 'iucnStatus',
      title: 'IUCN Red List status (global)',
      type: 'string',
      group: ['overview', 'conservation'],
      options: { list: IUCN_STATUS },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'nationalStatus',
      title: 'National status (Livro Vermelho, Portugal)',
      type: 'string',
      group: 'conservation',
      options: { list: IUCN_STATUS },
    }),
    defineField({
      name: 'populationTrend',
      title: 'Population trend',
      type: 'string',
      group: 'conservation',
      options: {
        list: [
          { title: 'Increasing', value: 'increasing' },
          { title: 'Stable', value: 'stable' },
          { title: 'Decreasing', value: 'decreasing' },
          { title: 'Unknown', value: 'unknown' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'threats',
      title: 'Main threats',
      type: 'array',
      group: 'conservation',
      of: [defineArrayMember({ type: 'string' })],
      options: { layout: 'tags' },
      description: 'e.g. bycatch, ship strikes, noise pollution, plastic, prey depletion.',
    }),
    defineField({
      name: 'legalProtection',
      title: 'Legal protection',
      type: 'text',
      rows: 2,
      group: 'conservation',
      description: 'Relevant legislation, e.g. EU Habitats Directive Annex IV, CITES Appendix.',
    }),

    // ---------- Media ----------
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      group: ['overview', 'media'],
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({ name: 'credit', title: 'Photo credit', type: 'string' }),
      ],
    }),
    defineField({
      name: 'thumbnail',
      title: 'Card thumbnail',
      type: 'image',
      group: 'media',
      description: 'Generic image used on species cards (e.g. a photo at sea). Falls back to the group illustration if empty.',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alternative text', type: 'string' }),
        defineField({ name: 'credit', title: 'Photo credit', type: 'string' }),
        defineField({
          name: 'license',
          title: 'Licence',
          type: 'string',
          description: 'Required for Creative Commons images, e.g. "CC BY 4.0".',
        }),
        defineField({ name: 'sourceUrl', title: 'Source URL', type: 'url' }),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      group: 'media',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alternative text', type: 'string' }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
            defineField({ name: 'credit', title: 'Photo credit', type: 'string' }),
          ],
        }),
      ],
      options: { layout: 'grid' },
    }),
    defineField({
      name: 'sources',
      title: 'Sources / references',
      type: 'array',
      group: 'media',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'source',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'url', title: 'URL', type: 'url' }),
          ],
          preview: { select: { title: 'title', subtitle: 'url' } },
        }),
      ],
    }),
    defineField({
      name: 'sound',
      title: 'Sound recording',
      type: 'file',
      group: 'media',
      options: { accept: 'audio/*' },
      fields: [
        defineField({ name: 'description', title: 'What you can hear', type: 'string' }),
        defineField({ name: 'credit', title: 'Recording credit', type: 'string' }),
        defineField({ name: 'license', title: 'Licence', type: 'string' }),
      ],
    }),
    defineField({
      name: 'reviewedBy',
      title: 'Reviewed by',
      type: 'string',
      group: 'media',
      description: 'Scientist who last checked this profile, shown on the page as a credibility marker.',
    }),
    defineField({ name: 'lastReviewed', title: 'Last reviewed', type: 'date', group: 'media' }),

    // ---------- Identification ----------
    defineField({
      name: 'similarSpecies',
      title: 'Similar species',
      type: 'array',
      group: 'ecology',
      description: 'Species most often confused with this one at sea.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'similar',
          fields: [
            defineField({ name: 'species', title: 'Species', type: 'reference', to: [{ type: 'species' }], validation: (rule) => rule.required() }),
            defineField({ name: 'howToTellApart', title: 'How to tell them apart', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'species.commonName', subtitle: 'howToTellApart' } },
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Common name, A–Z',
      name: 'commonNameAsc',
      by: [{ field: 'commonName', direction: 'asc' }],
    },
    {
      title: 'Scientific name, A–Z',
      name: 'scientificNameAsc',
      by: [{ field: 'scientificName', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'commonName',
      scientificName: 'scientificName',
      iucnStatus: 'iucnStatus',
      media: 'mainImage',
    },
    prepare({ title, scientificName, iucnStatus, media }) {
      return {
        title,
        subtitle: [scientificName, iucnStatus].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
