export default {
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Numbered', value: 'number' }],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' },
          { title: 'Code', value: 'code' }
        ],
        annotations: [
          {
            name: 'link',
            title: 'URL',
            type: 'object',
            fields: [{ name: 'href', title: 'URL', type: 'url' }]
          }
        ]
      }
    },
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'size',
          title: 'Image Size',
          type: 'string',
          options: {
            list: [
              { title: 'Small (300px)', value: 'small' },
              { title: 'Medium (500px)', value: 'medium' },
              { title: 'Large (800px)', value: 'large' },
              { title: 'Full Width', value: 'full' }
            ],
            layout: 'radio'
          }
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string'
        },
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string'
        }
      ]
    }
  ]
}
