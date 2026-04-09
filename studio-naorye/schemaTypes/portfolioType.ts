import {defineField, defineType} from 'sanity'

export const portfolioType = defineType({
  name: 'Portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'uploadDate',
      type: 'date',
      options: {
        dateFormat: 'DD-MMMM-YY',
      },
    }),
    defineField({
      name: 'themeName',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Link name',
      type: 'slug',
      description: 'generate link name',
      options: {source: 'themeName'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'collectionName',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'portfolioCover',
      type: 'image',
    }),
    defineField({
      name: 'portfolioImages',
      type: 'array',
      of: [{type: 'image'}],
      validation: (Rule) => Rule.max(20).required(),
    }),
    defineField({
      name: 'versionAvailable',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(3).required(),
    }),
    defineField({
      name: 'useCases',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(10).required(),
    }),
    defineField({
      name: 'software',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(20).required(),
    }),
    defineField({
      name: 'formatAvailable',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(20).required(),
    }),
    defineField({
      name: 'moreInformation',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(20).required(),
    }),
  ],
})
