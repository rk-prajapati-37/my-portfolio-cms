export default {
  name: 'client',
  title: 'Clients (Trusted by)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client / Brand name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo (optional)',
      type: 'image',
      description: 'Small logo shown next to the name in the "Trusted by" strip on the home page.',
      options: { hotspot: true },
    },
    {
      name: 'website',
      title: 'Website (optional)',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first.',
    },
    {
      name: 'active',
      title: 'Show on website',
      type: 'boolean',
      initialValue: true,
    },
  ],
  orderings: [{ title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'name', media: 'logo', subtitle: 'website' },
  },
}
