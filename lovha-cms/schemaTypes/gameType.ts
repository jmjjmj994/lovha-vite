import {defineField, defineType} from 'sanity'
export const gameType = defineType({
  name: 'grid',
  title: 'games',
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
