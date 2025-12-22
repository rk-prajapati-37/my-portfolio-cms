export default {
  name: 'stats',
  title: 'Stats',
  type: 'document',
  fields: [
    {
      name: 'value',
      title: 'Value',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'suffix',
      title: 'Suffix',
      type: 'string',
      description: 'e.g., +, %, etc.'
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first'
    }
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'value'
    }
  }
}