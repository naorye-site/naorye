import {defineField, defineType} from 'sanity'

export const portfolioType = defineType({
  name: 'Portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'uploadDate',
      type: 'date',
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
      name: 'portfolioCover',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'portfolioImages',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
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
