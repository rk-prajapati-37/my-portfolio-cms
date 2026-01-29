/**
 * Social Profile Schema
 * Stores complete profile information for each social media platform
 * 
 * Example:
 * - Instagram Profile: @username, followers, bio, profile pic
 * - YouTube: Channel, subscribers, description
 * - GitHub: User profile, repos count, followers
 */

export default {
  name: 'socialProfile',
  title: 'Social Media Profile',
  type: 'document',
  fields: [
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'Facebook', value: 'facebook' },
          { title: 'Twitter/X', value: 'twitter' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'GitHub', value: 'github' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Telegram', value: 'telegram' },
          { title: 'Pinterest', value: 'pinterest' },
          { title: 'Snapchat', value: 'snapchat' },
          { title: 'Discord', value: 'discord' },
          { title: 'Twitch', value: 'twitch' },
          { title: 'Reddit', value: 'reddit' },
          { title: 'Medium', value: 'medium' },
          { title: 'Dribbble', value: 'dribbble' },
          { title: 'Behance', value: 'behance' },
          { title: 'Figma', value: 'figma' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'profileUsername',
      title: 'Username / Handle',
      type: 'string',
      description: 'Username or handle on the platform (e.g., @username)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'profileUrl',
      title: 'Profile URL',
      type: 'url',
      description: 'Link to your profile on this platform',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'profileImage',
      title: 'Profile Picture',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'bio',
      title: 'Bio / Description',
      type: 'text',
      description: 'Short bio or description for this profile',
    },
    {
      name: 'followers',
      title: 'Followers Count',
      type: 'number',
      description: 'Number of followers (update manually or via API)',
    },
    {
      name: 'postsCount',
      title: 'Total Posts',
      type: 'number',
      description: 'Total number of posts on this platform',
    },
    {
      name: 'isVerified',
      title: 'Verified Badge',
      type: 'boolean',
      description: 'Does this account have a verification badge?',
      initialValue: false,
    },
    {
      name: 'engagementRate',
      title: 'Engagement Rate (%)',
      type: 'number',
      description: 'Average engagement percentage',
    },
    {
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'posts',
      title: 'Associated Posts',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'socialPost' } }],
      description: 'Posts from this platform',
    },
  ],
  preview: {
    select: {
      title: 'platform',
      username: 'profileUsername',
      followers: 'followers',
    },
    prepare(selection) {
      const { title, username, followers } = selection;
      return {
        title: `${title}`,
        subtitle: `@${username} • ${followers?.toLocaleString() || 0} followers`,
      };
    },
  },
};
