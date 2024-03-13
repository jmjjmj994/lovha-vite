import {defineField, defineType} from 'sanity'
export const gridType = defineType({
  name: 'grid',
  title: 'grid',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
