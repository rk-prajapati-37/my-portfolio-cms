export default {
  name: "socialPost",
  title: "Social Media Posts",
  type: "document",
  fields: [
    {
      name: "platform",
      title: "Platform",
      type: "reference",
      to: [{ type: "socialMedia" }],
      validation: (Rule) => Rule.required(),
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
      title: "caption",
      media: "image",
      platform: "platform.platform",
      type: "postType",
    },
    prepare(selection) {
      const { title, platform, type } = selection;
      return {
        title: title || `${type} Post`,
        subtitle: platform,
      };
    },
  },
};
