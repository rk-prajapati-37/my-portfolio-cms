export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    { name: 'name', title: 'Skill Name', type: 'string' },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Frontend Technologies',
          'CMS & Platforms',
          'Design & Tools',
          'Git & GitHub',
          'Additional Skills'
        ]
      }
    },
    { 
      name: 'level', 
      title: 'Proficiency Level (0-100)', 
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(100),
    },
    { name: 'icon', title: 'Icon URL', type: 'url' },
  ],
}
