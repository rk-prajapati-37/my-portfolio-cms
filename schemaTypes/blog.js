export default {
  name: "blog",
  title: "Blogs",
  type: "document",
  fields: [
    { name: "title", title: "Blog Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "excerpt", title: "Short Description", type: "text" },
    { name: "content", title: "Content", type: "array", of: [{ type: "block" }] },
    { name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } },
    { name: "date", title: "Published Date", type: "datetime" },
    { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
  ],
};
