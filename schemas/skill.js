export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Skill Name',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend Technologies', value: 'Frontend Technologies' },
          { title: 'CMS & Platforms', value: 'CMS & Platforms' },
          { title: 'Design & Tools', value: 'Design & Tools' },
          { title: 'Git & GitHub', value: 'Git & GitHub' },
          { title: 'Additional Skills', value: 'Additional Skills' }
        ]
      }
    },
    {
      name: 'level',
      title: 'Proficiency Level (0-100)',
      type: 'number',
      description: 'Enter a value between 0 and 100'
    },
    {
      name: 'showInHero',
      title: 'Show as floating badge on home page hero',
      type: 'boolean',
      description: 'Tick for the 3-6 skills you want floating around the profile photo on the home page.',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first (used for hero badges and skill lists).',
    },
    {
      name: 'icon',
      title: 'Skill Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
