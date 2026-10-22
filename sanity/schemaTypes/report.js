import { defineArrayMember, defineField, defineType } from 'sanity'

// A sighting or stranding sent from /report. Created by the site's server
// action with status "pending"; a moderator verifies or rejects it here.
export const report = defineType({
  name: 'report',
  title: 'Field report',
  type: 'document',
  groups: [
    { name: 'record', title: 'Record', default: true },
    { name: 'observer', title: 'Observer' },
    { name: 'moderation', title: 'Moderation' },
  ],
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      group: 'record',
      options: { list: [{ title: 'Sighting', value: 'sighting' }, { title: 'Stranding', value: 'stranding' }], layout: 'radio' },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'species', title: 'Species', type: 'reference', to: [{ type: 'species' }], group: 'record' }),
    defineField({ name: 'speciesSlug', title: 'Species (as reported)', type: 'string', group: 'record', readOnly: true, description: 'Slug picked by the observer, or "unknown".' }),
    defineField({ name: 'date', title: 'Date and time', type: 'datetime', group: 'record', validation: (rule) => rule.required() }),
    defineField({ name: 'location', title: 'Location', type: 'string', group: 'record', validation: (rule) => rule.required() }),
    defineField({ name: 'position', title: 'Position', type: 'geopoint', group: 'record' }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      group: 'record',
      options: { list: [{ title: 'Mainland coast', value: 'mainland' }, { title: 'Azores', value: 'azores' }, { title: 'Madeira', value: 'madeira' }] },
    }),
    defineField({ name: 'count', title: 'Number of animals', type: 'number', group: 'record', validation: (rule) => rule.min(1).integer() }),
    defineField({ name: 'calves', title: 'Calves present', type: 'boolean', group: 'record' }),
    defineField({
      name: 'behaviour',
      title: 'Behaviour',
      type: 'array',
      group: 'record',
      of: [defineArrayMember({ type: 'string' })],
      options: { list: ['feeding', 'travelling', 'socialising', 'resting', 'breaching', 'bowriding'].map((value) => ({ title: value, value })) },
    }),
    defineField({
      name: 'platform',
      title: 'Observed from',
      type: 'string',
      group: 'record',
      options: { list: ['boat', 'shore', 'aircraft'].map((value) => ({ title: value, value })) },
    }),
    defineField({
      name: 'condition',
      title: 'Condition (strandings)',
      type: 'string',
      group: 'record',
      options: { list: [{ title: 'Alive', value: 'alive' }, { title: 'Dead', value: 'dead' }] },
      hidden: ({ document }) => document?.type !== 'stranding',
    }),
    defineField({ name: 'notes', title: 'Notes', type: 'text', rows: 4, group: 'record' }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      group: 'record',
      of: [defineArrayMember({ type: 'image' })],
      options: { layout: 'grid' },
    }),

    defineField({ name: 'observer', title: 'Observer name', type: 'string', group: 'observer' }),
    defineField({ name: 'email', title: 'Email (private)', type: 'string', group: 'observer', description: 'Only used to follow up on this report. Never published.' }),
    defineField({ name: 'consentAt', title: 'Consent given at', type: 'datetime', group: 'observer', readOnly: true }),
    defineField({ name: 'locale', title: 'Site language', type: 'string', group: 'observer', readOnly: true }),

    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'moderation',
      initialValue: 'pending',
      options: { list: [{ title: 'Under review', value: 'pending' }, { title: 'Verified', value: 'verified' }, { title: 'Rejected', value: 'rejected' }], layout: 'radio' },
    }),
    defineField({ name: 'moderatorNotes', title: 'Moderator notes', type: 'text', rows: 3, group: 'moderation' }),
  ],
  orderings: [{ title: 'Newest first', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] }],
  preview: {
    select: { type: 'type', species: 'species.commonName', slug: 'speciesSlug', location: 'location', status: 'status', media: 'photos.0' },
    prepare({ type, species, slug, location, status, media }) {
      return { title: `${species ?? slug ?? 'Unknown species'} · ${type}`, subtitle: [location, status].filter(Boolean).join(' · '), media }
    },
  },
})
