export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    { name: "title", title: "Project Title", type: "string", validation: Rule => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "category", title: "Category", type: "array", of: [{ type: "string" }], description: "One or multiple categories" },
    { name: "description", title: "Project Description", type: "text" },
    { name: "details", title: "Detailed Info", type: "blockContent" },
    { name: "date", title: "Date", type: "date" },
    { name: "client", title: "Client", type: "string" },
    { name: "tools", title: "Tools", type: "array", of: [{ type: "string" }] },
    { name: "plugins", title: "Plugins", type: "array", of: [{ type: "string" }] },
    { name: "github", title: "GitHub Link", type: "url" },
    { name: "demo", title: "Live Demo Link", type: "url" },
    {
      name: "images",
      title: "Project Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
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

    // 🔥 SEO FIELDS
    { name: "seoTitle", title: "SEO Title", type: "string", description: "Meta title for Google" },
    { name: "seoDescription", title: "SEO Description", type: "text", description: "150–160 characters" },
    { name: "seoKeywords", title: "SEO Keywords", type: "array", of: [{ type: "string" }] },
  ],
};
