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
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
        { title: 'Code Block', value: 'code' }
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
        { title: 'Square', value: 'square' },
        { title: 'Lowercase Letter', value: 'lower-alpha' },
        { title: 'Uppercase Letter', value: 'upper-alpha' },
        { title: 'Lowercase Roman', value: 'lower-roman' },
        { title: 'Uppercase Roman', value: 'upper-roman' }
      ],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strikethrough', value: 'strike-through' },
          { title: 'Code', value: 'code' },
          { title: 'Superscript', value: 'sup' },
          { title: 'Subscript', value: 'sub' }
        ],
        annotations: [
          {
            name: 'link',
            title: 'URL',
            type: 'object',
            fields: [
              { name: 'href', title: 'URL', type: 'url' },
              { name: 'target', title: 'Open in new tab', type: 'boolean', initialValue: true }
            ]
          },
          {
            name: 'color',
            title: 'Text Color',
            type: 'object',
            fields: [
              {
                name: 'color',
                title: 'Color',
                type: 'string',
                options: {
                  list: [
                    { title: 'Red', value: '#ef4444' },
                    { title: 'Blue', value: '#3b82f6' },
                    { title: 'Green', value: '#10b981' },
                    { title: 'Yellow', value: '#f59e0b' },
                    { title: 'Purple', value: '#8b5cf6' },
                    { title: 'Pink', value: '#ec4899' },
                    { title: 'Gray', value: '#6b7280' },
                    { title: 'Black', value: '#000000' }
                  ]
                }
              }
            ]
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
              { title: 'Extra Small (200px)', value: 'xs' },
              { title: 'Small (300px)', value: 'small' },
              { title: 'Medium (500px)', value: 'medium' },
              { title: 'Large (800px)', value: 'large' },
              { title: 'Extra Large (1000px)', value: 'xl' },
              { title: 'Full Width', value: 'full' }
            ],
            layout: 'radio'
          }
        },
        {
          name: 'alignment',
          title: 'Image Alignment',
          type: 'string',
          options: {
            list: [
              { title: 'Left (Float)', value: 'left' },
              { title: 'Center', value: 'center' },
              { title: 'Right (Float)', value: 'right' },
              { title: 'Full Width', value: 'full' },
              { title: 'Inline Left', value: 'inline-left' },
              { title: 'Inline Right', value: 'inline-right' }
            ],
            layout: 'radio'
          }
        },
        {
          name: 'position',
          title: 'Text Flow Position',
          type: 'string',
          options: {
            list: [
              { title: 'Normal Flow', value: 'normal' },
              { title: 'Text Wrap Around', value: 'wrap' },
              { title: 'Break Text Flow', value: 'break' }
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
