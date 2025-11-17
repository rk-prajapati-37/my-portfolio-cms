export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    { name: 'position', title: 'Position/Title', type: 'string' },
    { name: 'company', title: 'Company', type: 'string' },
    { name: 'companyUrl', title: 'Company Website', type: 'url' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'startDate', title: 'Start Date', type: 'date' },
    { name: 'endDate', title: 'End Date', type: 'date' },
    { name: 'isCurrent', title: 'Currently Working Here', type: 'boolean' },
    { name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] },
    { name: 'logo', title: 'Company Logo', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Order', type: 'number', description: 'Lower numbers appear first' },
  ],
}
