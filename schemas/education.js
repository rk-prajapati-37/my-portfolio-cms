export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    { name: 'degree', title: 'Degree / Title', type: 'string' },
    { name: 'institution', title: 'Institution', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'startDate', title: 'Start Date', type: 'date' },
    { name: 'endDate', title: 'End Date', type: 'date' },
    { name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] },
    { name: 'logo', title: 'Institution Logo', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Order', type: 'number', description: 'Lower numbers appear first' },
  ],
}
