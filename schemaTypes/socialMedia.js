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
          { title: "Twitter/X", value: "twitter" },
          { title: "Instagram", value: "instagram" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "GitHub", value: "github" },
          { title: "YouTube", value: "youtube" },
          { title: "TikTok", value: "tiktok" },
          { title: "WhatsApp", value: "whatsapp" },
          { title: "Telegram", value: "telegram" },
          { title: "Pinterest", value: "pinterest" },
          { title: "Snapchat", value: "snapchat" },
          { title: "Discord", value: "discord" },
          { title: "Twitch", value: "twitch" },
          { title: "Reddit", value: "reddit" },
          { title: "Medium", value: "medium" },
          { title: "Dribbble", value: "dribbble" },
          { title: "Behance", value: "behance" },
          { title: "Figma", value: "figma" },
          { title: "Portfolio Website", value: "website" },
          { title: "Personal Blog", value: "blog" },
          { title: "Email", value: "email" },
          { title: "Phone", value: "phone" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "Profile URL / Contact",
      type: "url",
      validation: (Rule) => Rule.required(),
      description: "Link to your profile or contact method",
    },
    {
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      initialValue: 1,
      description: "Lower numbers appear first",
    },
    {
      name: "active",
      title: "Active",
      type: "boolean",
      initialValue: true,
      description: "Show/hide this profile link",
    },
    {
      name: "profileImage",
      title: "Profile Picture",
      type: "image",
      options: { hotspot: true },
      description: "Your profile picture on this platform",
    },
    {
      name: "profileUsername",
      title: "Username / Handle",
      type: "string",
      description: "Your username on this platform (e.g., @username)",
    },
    {
      name: "bio",
      title: "Bio / Description",
      type: "text",
      description: "Short bio or description for this profile",
    },
    {
      name: "followers",
      title: "Followers Count",
      type: "number",
      description: "Number of followers (update manually or via API)",
    },
    {
      name: "isVerified",
      title: "Verified Badge",
      type: "boolean",
      description: "Does this account have a verification badge?",
      initialValue: false,
    },
    {
      name: "engagementRate",
      title: "Engagement Rate (%)",
      type: "number",
      description: "Average engagement percentage",
    },
    {
      name: "posts",
      title: "Posts on This Platform",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "socialPost" }],
        }
      ],
      description: "All posts published to this platform will appear here",
    },
  ],
  preview: {
    select: {
      title: "platform",
      username: "profileUsername",
      followers: "followers",
    },
    prepare(selection) {
      const { title, username, followers } = selection;
      return {
        title: title,
        subtitle: `@${username || 'No username'} • ${followers ? followers.toLocaleString() : '0'} followers`,
      };
    },
  },
};

