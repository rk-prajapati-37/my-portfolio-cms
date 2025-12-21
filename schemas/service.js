export default {
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Service Title",
      type: "string",
      validation: Rule => Rule.required(),
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: Rule => Rule.required(),
    },

    {
      name: "startingPrice",
      title: "Starting Price",
      type: "string",
      description: "Example: ₹8,000 / $99",
    },

    {
      name: "deliveryTime",
      title: "Delivery Time",
      type: "string",
      description: "Example: 5–7 Days",
    },

    {
      name: "shortDescription",
      title: "Short Description",
      type: "text",
    },

    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "relatedProjects",
      title: "Related Projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
      description: "Select projects related to this service",
    },

    {
      name: "whatsappText",
      title: "WhatsApp Auto Message",
      type: "string",
      description: "Example: Hi, I want to hire you for this service",
    },

    // 🔥 SEO FIELDS
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Meta title for Google",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      description: "150–160 characters",
    },
    {
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
