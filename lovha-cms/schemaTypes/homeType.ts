import {defineField, defineType} from 'sanity'

export const homeType = defineType({
  name: 'game',
  title: 'frontpage',
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
    defineField({
        name:'details',
        type:'array',
        of:[{type:'block'}]
    })
  ],
})
