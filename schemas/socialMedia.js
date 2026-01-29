export default {
  name: "socialMedia",
  title: "Social Media",
  type: "document",
  fields: [
    {
      name: "platform",
      title: "Platform",
      type: "string",
      options: {
        list: [
          { title: "Facebook", value: "facebook" },
          { title: "Twitter", value: "twitter" },
          { title: "Instagram", value: "instagram" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "GitHub", value: "github" },
          { title: "YouTube", value: "youtube" },
          { title: "TikTok", value: "tiktok" },
          { title: "WhatsApp", value: "whatsapp" },
          { title: "Telegram", value: "telegram" },
          { title: "Website", value: "website" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "Profile URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "icon",
      title: "Icon Color",
      type: "string",
      options: {
        list: [
          { title: "Blue", value: "blue" },
          { title: "Red", value: "red" },
          { title: "Purple", value: "purple" },
          { title: "Pink", value: "pink" },
          { title: "Green", value: "green" },
          { title: "Black", value: "black" },
          { title: "White", value: "white" },
        ],
      },
      initialValue: "blue",
    },
    {
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    },
    {
      name: "active",
      title: "Active",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "platform",
      url: "url",
    },
    prepare(selection) {
      const { title, url } = selection;
      return {
        title: title,
        subtitle: url,
      };
    },
  },
};
