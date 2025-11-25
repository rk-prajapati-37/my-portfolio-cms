export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    { name: 'name', title: 'Skill Name', type: 'string' },
    { name: 'level', title: 'Level (1-100)', type: 'number' },
    { name: 'icon', title: 'Icon URL', type: 'url' },
  ],
}
