/**
 * Social Posts - Complete Implementation Guide
 * 
 * Features:
 * ✅ Post Type badges (Text, Image, Video, Link, Story)
 * ✅ Post Status badges (Draft, Scheduled, Published)
 * ✅ Link URL button (shows only for Link type posts)
 * ✅ Image preview
 * ✅ Video player
 * ✅ Hashtags
 * ✅ Timestamps
 * ✅ Platform filters
 */

export const POST_TYPE_EXAMPLES = {
  text: {
    name: "Text Post",
    description: "Simple text content",
    fields: {
      postType: "text",
      caption: "Check out my latest thoughts on web design!",
      hashtags: ["webdesign", "frontend", "react"],
      // NO image, video, or link fields
    }
  },

  image: {
    name: "Image Post",
    description: "Text with image",
    fields: {
      postType: "image",
      caption: "Beautiful sunset at the beach 🌅",
      image: "[upload image file]",
      hashtags: ["sunset", "photography", "beach"],
      // NO video or link fields
    }
  },

  video: {
    name: "Video Post",
    description: "Text with video URL",
    fields: {
      postType: "video",
      caption: "Check out my latest tutorial on React hooks",
      videoUrl: "https://youtube.com/watch?v=...",
      hashtags: ["react", "javascript", "tutorial"],
      // NO image or link fields
    }
  },

  link: {
    name: "Link Post",
    description: "Text with clickable link button",
    fields: {
      postType: "link",
      caption: "Read my full article on responsive design",
      linkUrl: "https://mywebsite.com/article/responsive-design",
      hashtags: ["design", "responsive", "css"],
      // Will show "🔗 Open Link" button
    }
  },

  story: {
    name: "Story Post",
    description: "Temporary post (24 hours)",
    fields: {
      postType: "story",
      caption: "Join my live Q&A session tonight at 8 PM!",
      image: "[upload image file]",
      hashtags: ["liveqa", "community"],
      // NO video or link fields
    }
  }
};

export const DISPLAY_LAYOUT = `
┌────────────────────────────────────────┐
│          POST CARD LAYOUT               │
├────────────────────────────────────────┤
│                                        │
│  [IMAGE] or [VIDEO] or [CONTENT]      │
│                                        │
│  Badges: [Text] [Published] [Link]    │
│           ↑          ↑          ↑      │
│        PostType    Status    Link BTN  │
│                                        │
│  "Caption text here..."                │
│                                        │
│  🔗 Open Link                          │
│  (only for Link type)                  │
│                                        │
│  #hashtag1 #hashtag2 #hashtag3         │
│                                        │
│  Jan 26, 2026                          │
│                                        │
│  View on Instagram →                   │
│                                        │
└────────────────────────────────────────┘
`;

export const SANITY_GUIDE = `
STEPS TO CREATE POSTS IN SANITY:

1. Go to Social Media Posts section
2. Click "Create" button
3. Fill in:
   
   Platform: (Select from dropdown)
   ├─ Instagram
   ├─ YouTube
   ├─ Twitter/X
   ├─ LinkedIn
   └─ ... etc

   Post Type: (Choose one)
   ├─ Text      → Shows caption only
   ├─ Image     → Shows image + caption
   ├─ Video     → Shows video + caption
   ├─ Link      → Shows "🔗 Open Link" button
   └─ Story     → Temporary post

   Caption: (Write your message)
   Example: "Check out my portfolio! 🚀"

   Fields that appear BASED ON POST TYPE:
   
   For Image:
   └─ Image: [Upload image]
   
   For Video:
   └─ Video URL: https://youtube.com/...
   
   For Link:
   └─ Link URL: https://mywebsite.com/...
   
   Hashtags: (Add tags)
   ├─ webdesign
   ├─ react
   └─ portfolio

   Status:
   ├─ Draft      → Private, not shown
   ├─ Scheduled  → Will publish later
   └─ Published  → Visible to everyone

4. Click "Publish"
5. It will appear on website automatically!
`;

export const LINK_POST_EXAMPLE = {
  title: "How to Create a Link Post",
  steps: [
    {
      step: 1,
      title: "Select Platform",
      description: "Choose Instagram, LinkedIn, or any platform",
    },
    {
      step: 2,
      title: "Choose 'Link' as Post Type",
      description: "This enables the linkUrl field",
    },
    {
      step: 3,
      title: "Write Caption",
      description: 'Example: "Read my article on web design"',
    },
    {
      step: 4,
      title: "Add Link URL",
      description: "Paste the full URL where you want people to go",
      example: "https://mywebsite.com/blog/web-design-tips",
    },
    {
      step: 5,
      title: "Add Hashtags (Optional)",
      description: "Add relevant hashtags for discoverability",
    },
    {
      step: 6,
      title: "Set Status to Published",
      description: "Make the post visible to everyone",
    },
    {
      step: 7,
      title: "Frontend Result",
      description: "Users see: Caption + '🔗 Open Link' button",
      result: `
        [Link Post Badge]
        "Read my article on web design"
        🔗 Open Link  ← Clickable button
        #webdesign #design
      `,
    },
  ],
};

export const COMPONENT_LOCATION = {
  withProfile: "src/components/SocialPostsWithProfile.jsx",
  simple: "src/components/SocialPosts.jsx",
};

export const CODE_SNIPPET_LINK_BUTTON = `
// Shows only for Link type posts
{post.postType === 'link' && post.linkUrl && (
  <a
    href={post.linkUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-lg hover:bg-blue-200 transition"
  >
    🔗 Open Link
  </a>
)}
`;

export const QUICK_CHECKLIST = [
  "✅ Create post in Sanity",
  "✅ Select 'Link' as postType",
  "✅ Enter Link URL",
  "✅ Set status to 'Published'",
  "✅ Website automatically shows '🔗 Open Link' button",
  "✅ Users click button → goes to your link",
];
