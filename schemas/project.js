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
      name: "pages",
      title: "Website Preview (pages)",
      description:
        "One entry per page of the website (Home, About, Menu...). Upload a FULL-PAGE (tall) screenshot for Desktop and for Mobile. On the website visitors can switch Desktop/Mobile and hover to scroll through the page.",
      type: "array",
      of: [
        {
          type: "object",
          name: "previewPage",
          title: "Page",
          fields: [
            { name: "pageName", title: "Page name", type: "string", description: "e.g. Home, About, Menu" },
            { name: "description", title: "Short note (optional)", type: "text", rows: 2 },
            { name: "desktopImage", title: "Desktop screenshot (full page)", type: "image" },
            { name: "mobileImage", title: "Mobile screenshot (full page)", type: "image" },
          ],
          preview: {
            select: { title: "pageName", media: "desktopImage", subtitle: "description" },
            prepare: ({ title, media, subtitle }) => ({ title: title || "Page", media, subtitle }),
          },
        },
      ],
    },
    {
      name: "extraImages",
      title: "Extra Images (old - use Website Preview above)",
      description: "Old gallery. Images here still show as cards on the website, but new screenshots should go in Website Preview (pages). This field is hidden when empty.",
      type: "array",
      of: [{ type: "image" }],
      hidden: ({ value }) => !value || value.length === 0,
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

    // Auto-capture info (filled by `npm run add-project`)
    { name: "capturedAt", title: "Screenshot captured on", type: "string", readOnly: true },
    { name: "captureSource", title: "Captured from URL", type: "url", readOnly: true },

    // 🔥 SEO FIELDS
    { name: "seoTitle", title: "SEO Title", type: "string", description: "Meta title for Google" },
    { name: "seoDescription", title: "SEO Description", type: "text", description: "150–160 characters" },
    { name: "seoKeywords", title: "SEO Keywords", type: "array", of: [{ type: "string" }] },
  ],
};
