export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'message', title: 'Message', type: 'text' },
    { name: 'image', title: 'Image', type: 'image' },
  ],
}
