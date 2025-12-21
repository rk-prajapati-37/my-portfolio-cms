export default {
  name: "contact",
  title: "Contact Messages",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "mobile", title: "Mobile", type: "string" },
    { name: "message", title: "Message", type: "text" },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    },
    {
      name: "source",
      title: "Source",
      type: "string",
      initialValue: "contact-form",
    },
  ],
};
