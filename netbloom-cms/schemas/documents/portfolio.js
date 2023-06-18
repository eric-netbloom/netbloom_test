import {defineField, defineType} from 'sanity';

export default defineType({
  title: 'Portfolio',
  name: 'portfolio',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      }
    }),
    defineField({
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [{type: 'reference',to: {type: 'category'}}],
    }),
    defineField({
      title: 'Main image',
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      title: 'Website URL',
      name: 'websiteUrl',
      type: 'string'
    }),
  ],
});