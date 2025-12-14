export default {
  name: "blog",
  title: "Blogs",
  type: "document",
  fields: [
    { name: "title", title: "Blog Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "author", title: "Author Name", type: "string" },
    { name: "excerpt", title: "Short Description", type: "text" },
    {
      name: "category",
      title: "Blog Category",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "details",
      title: "Detailed Info",
      description: "Use rich text here (headings, paragraphs, lists).",
      type: "blockContent",
    },
    { name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } },
    { name: "date", title: "Published Date", type: "datetime" },
    { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
  ],
};