import {defineField, defineType} from 'sanity'

export const specificType = defineType({
  name: 'specific',
  title: 'specific',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
