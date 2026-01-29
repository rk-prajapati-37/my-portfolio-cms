export default {
  name: "socialPost",
  title: "Social Media Posts",
  type: "document",
  fieldsets: [
    {
      name: 'base',
      title: 'Base Title & Featured Image',
      options: { collapsible: true, collapsed: false }
    }
  ],
  fields: [
    {
      name: "platform",
      title: "Platform",
      type: "reference",
      to: [{ type: "socialMedia" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Post Title",
      type: "string",
      description: "Main title for the social media post",
      fieldset: 'base',
    },
    {
      name: "featuredImage",
      title: "Featured Image (Post Thumbnail)",
      type: "image",
      description: "Add a featured/thumbnail image for the post card (सभी post types के लिए)",
      options: {
        hotspot: true,
      },
      fieldset: 'base',
    },
    {
      name: "postType",
      title: "Post Type",
      type: "string",
      options: {
        list: [
          { title: "Text", value: "text" },
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
          { title: "Link", value: "link" },
          { title: "Story", value: "story" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "text",
      rows: 4,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      hidden: ({ document }) => document?.postType !== "image",
    },
    {
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      hidden: ({ document }) => document?.postType !== "video",
    },
    {
      name: "linkUrl",
      title: "Link URL",
      type: "url",
      hidden: ({ document }) => document?.postType !== "link",
    },
    {
      name: "externalLink",
      title: "External Link",
      type: "url",
      description: "External link to share in the post",
    },
    {
      name: "caption",
      title: "Caption",
      type: "text",
      rows: 3,
    },
    {
      name: "scheduledDate",
      title: "Scheduled Date/Time",
      type: "datetime",
    },
    {
      name: "hashtags",
      title: "Hashtags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Scheduled", value: "scheduled" },
          { title: "Published", value: "published" },
        ],
      },
      initialValue: "draft",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "caption",
      media: "image",
      platform: "platform.platform",
      type: "postType",
    },
    prepare(selection) {
      const { title, subtitle, platform, type } = selection;
      return {
        title: title || subtitle || `${type} Post`,
        subtitle: `${platform} • ${type}`,
      };
    },
  },
};
