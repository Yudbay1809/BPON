import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'id', title: 'Indonesian', type: 'string' },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'text' },
        { name: 'id', title: 'Indonesian', type: 'text' },
      ],
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'ogImage',
      title: 'Default Open Graph Image',
      type: 'image',
    }),
  ],
})
