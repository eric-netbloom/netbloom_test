import {defineField, defineType} from 'sanity';

export default defineType({
  title: 'Location',
  name: 'location',
  type: 'document',
  groups: [
    {
      name: 'banner',
      title: 'Banner',
    },
    {
      name: 'caseStudy',
      title: 'Case Study',
    },
    {
      name: 'aboutService',
      title: 'Service',
    },
    {
      name: 'features',
      title: 'Features',
    },
    {
      name: 'factors',
      title: 'Factors',
    },
    {
      name: 'importance',
      title: 'Importance',
    },
    {
      name: 'aboutLocation',
      title: 'Location',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string'
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
    // defineField({
    //   title: 'Author',
    //   name: 'author',
    //   type: 'reference',
    //   to: {type: 'author'},
    // }),
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
    // defineField({
    //   title: 'Categories',
    //   name: 'categories',
    //   type: 'array',
    //   of: [{type: 'reference',to: {type: 'category'}}],
    // }),

    //BANNER
    defineField({
      title: 'Hero Heading',
      name: 'heroHeading',
      type: 'string',
      group: 'banner',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero background image',
      type: 'image',
      options: {
          hotspot: true,
      },
    }),
    defineField({
      title: 'Hero Paragraph',
      name: 'heroParagraph',
      type: 'array',
      group: 'banner', 
      of: [
      {
        type: 'block'
      },
      {
        type: 'code'
      },
      {
        type: 'image'
      },],
    }),

    //CASESTUDY
    defineField({
      title: 'Case Study Heading',
      name: 'caseStudyHeading',
      type: 'string',
      group: 'caseStudy',
    }),
    defineField({
      title: 'Case Study Paragraph',
      name: 'caseStudyParagraph',
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
      },],
      group: 'caseStudy',
    }),
    defineField({
      name: 'csImage',
      title: 'Case Study image',
      type: 'image',
      group: 'caseStudy',
      options: {
          hotspot: true,
      },
    }),

    //ABOUT THE SERVICE
    defineField({
      title: 'About the Service Heading',
      name: 'aServiceHeading',
      type: 'string',
      group: 'aboutService',
    }),
    defineField({
      title: 'About the Service Paragraph',
      name: 'aServiceHeadingParagraph',
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
      },],
      group: 'aboutService',
    }),
    defineField({
      name: 'aServiceImg',
      title: 'About the Service image',
      type: 'image',
      group: 'aboutService',
      options: {
          hotspot: true,
      },
    }),

    //FEATURES
    defineField({
      title: 'Features',
      name: 'features',
      type: 'array', 
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { type: "image", name: "icon" },
            { type: "string", name: "heading" },
            { type: "string", name: "description" }
          ]
        }
      ],
      group: 'features',
    }),

    //FACTORS
    defineField({
      title: 'Factors',
      name: 'factors',
      type: 'array', 
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { type: "string", name: "heading" },
            { type: "string", name: "description" }
          ]
        }
      ],
      group: 'factors',
    }),

    //LOCATION
    defineField({
      title: 'About the Location Heading',
      name: 'aLocationHeading',
      type: 'string',
      group: 'aboutLocation',
    }),
    defineField({
      title: 'About the Location Description',
      name: 'aLocationDescription',
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
      },],
      group: 'aboutLocation',
    }),
    defineField({
      title: 'Location Map URL',
      name: 'aLocationMap',
      type: 'string',
      group: 'aboutLocation',
    }),
    
    //SEO
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
      media: 'heroImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },

});