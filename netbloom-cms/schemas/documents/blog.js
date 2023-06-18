import {defineField, defineType} from 'sanity';

export default defineType({
  title: 'Blog',
  name: 'blog',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
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
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      title: 'Published at',
      name: 'publishedAt',
      type: 'date',
      options: {
        dateFormat: 'MMMM DD, YYYY',
        calendarTodayLabel: 'Today'
      },
      // hidden: true,
      readOnly: true,
    }),
    defineField({
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [{type: 'reference',to: {type: 'category'}}],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
          hotspot: true,
      },
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'array', 
      of: [
      {
        type: 'block'
      },
      {
        type: 'code'
      },
      {
        type: 'image'
      }]
    }),
    {
      name: 'seoTitle',
      title: 'SEO Title',
      group: 'seo',
      options: {
        source: 'title',
      },
      type: 'string',
      // validation: Rule => [
      //   Rule.required().min(40).max(50).error('SEO titles between 40 and 50 characters with commonly searched words have the best click-through-rates'),
      // ],
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      group: 'seo',
      // validation: Rule => [
      //   Rule.required().min(50).max(156).error('Good SEO descriptions utilize keywords, summarize the story and are between 140-156 characters long.'),
      // ],
      type: 'text',
    },
    {
      name: "ogTitle",
      title: "Open Graph Title",
      group: 'seo',
      // validation: Rule => [
      //   Rule.required().min(40).max(50).error('SEO titles between 40 and 50 characters with commonly searched words have the best click-through-rates'),
      // ],
      type: "string",
    },
    {
      name: "ogDescription",
      title: "Open Graph Description",
      group: 'seo',
      // validation: Rule => [
      //   Rule.required().min(50).max(156).error('Good SEO descriptions utilize keywords, summarize the story and are between 140-156 characters long.'),
      // ],
      type: "text",
    },
    {
      name: "ogImage",
      title: "Open Graph Image",
      group: 'seo',
      type: "image",
      options: {
        hotspot: true,
      },
    },
    defineField({
      title: 'If enabled, this will prevent indexing content by search engines that support the noindex rule, such as Google.', 
      name: 'noIndex',
      type: 'array',
      of: [{type: 'string'}],
      group: 'seo',
      options: {
        list: [ 
          {value: 'no-index', title: 'no-index'},
          ],
          layout: 'radio'
        },
    }),
  ],
  
  
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },

});