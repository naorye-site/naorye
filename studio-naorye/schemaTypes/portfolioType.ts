import {defineField, defineType} from 'sanity'

export const portfolioType = defineType({
  name: 'Portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'Upload Date',
      type: 'datetime',
    }),
    defineField({
      name: 'Theme name',
      type: 'string',
    }),
    defineField({
      name: 'Collection name',
      type: 'string',
    }),
    defineField({
      name: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'Portfolio cover',
      type: 'image',
    }),
    defineField({
      name: 'Portfolio images',
      type: 'array',
      of: [{ type: 'image'}],
      validation: (Rule) => Rule.max(20).required(),
    }),
    defineField({
      name: 'Version available',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(3).required(),
    }),
    defineField({
      name: 'Use cases',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(10).required(),
    }),
    defineField({
      name: 'Software',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(20).required(),
    }),
    defineField({
      name: 'Format available',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(20).required(),
    }),
    defineField({
      name: 'More information',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(20).required(),
    }),
  ],
})
