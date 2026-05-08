import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'id', title: 'Indonesian', type: 'string' },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name.en',
        maxLength: 96,
      },
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
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'text' },
        { name: 'id', title: 'Indonesian', type: 'text' },
      ],
    }),
    defineField({
      name: 'specifications',
      title: 'Specifications',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'array', of: [{ type: 'block' }] },
        { name: 'id', title: 'Indonesian', type: 'array', of: [{ type: 'block' }] },
      ],
    }),
    defineField({
      name: 'pdfCatalog',
      title: 'PDF Catalog',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: 'name.en',
      media: 'mainImage',
    },
  },
})
