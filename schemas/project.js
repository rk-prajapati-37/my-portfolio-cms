export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug (auto-generate from title)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    { name: "description", title: "Project Description", type: "text" },
    {
      name: "details",
      title: "Detailed Info",
      description: "Use rich text here (headings, paragraphs, lists).",
      type: "blockContent",
    },
    { name: "clientName", title: "Client Name", type: "string" },
    { name: "date", title: "Project Date", type: "string" },
    {
      name: "category",
      title: "Project Category",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "github", title: "GitHub Link", type: "url" },
    { name: "demo", title: "Live Demo Link", type: "url" },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "extraImages",
      title: "Extra Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "socialLinks",
      title: "Social Media & External Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "YouTube", value: "youtube" },
                  { title: "Facebook", value: "facebook" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Twitter", value: "twitter" },
                  { title: "Instagram", value: "instagram" },
                  { title: "TikTok", value: "tiktok" },
                  { title: "Other", value: "other" },
                ],
              },
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              platform: "platform",
              url: "url",
            },
            prepare(selection) {
              const { platform, url } = selection
              return {
                title: platform || "Link",
                subtitle: url,
              }
            },
          },
        },
      ],
    },
  ],
};
