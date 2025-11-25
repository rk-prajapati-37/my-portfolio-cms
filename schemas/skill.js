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
      name: 'level',
      title: 'Proficiency Level',
      type: 'string',
      options: {
        list: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
      },
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
