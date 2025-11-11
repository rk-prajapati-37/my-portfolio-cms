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
      name: "video",
      title: "Demo Video (optional)",
      type: "url",
    },
  ],
};
