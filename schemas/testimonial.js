export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'text',
    },
    {
      name: 'company',
      title: 'Company / Role',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Client Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
