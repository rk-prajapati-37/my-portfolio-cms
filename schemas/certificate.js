export default {
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'issuer', title: 'Issuer', type: 'string' },
    { name: 'date', title: 'Date', type: 'date' },
    { name: 'certificateImage', title: 'Certificate Image', type: 'image', options: { hotspot: true } },
    { name: 'url', title: 'Certificate URL', type: 'url' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'order', title: 'Order', type: 'number', description: 'Lower numbers appear first' },
  ],
}
