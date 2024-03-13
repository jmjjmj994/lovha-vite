import {defineField, defineType} from 'sanity'

export const specificGameType = defineType({
  name: 'specific',
  title: 'specific game',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
