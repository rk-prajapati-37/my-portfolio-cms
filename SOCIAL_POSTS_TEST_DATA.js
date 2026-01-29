/**
 * SOCIAL POSTS - TEST DATA
 * 
 * Sanity में ये exact data add करके testing करो
 * फिर frontend पर beautiful design देखेगा!
 */

// ============================================
// TEST POST 1: IMAGE POST (Instagram)
// ============================================

export const testImagePost = {
  platform: "instagram", // Reference to socialMedia
  postType: "image",
  image: "आपकी photo", // Upload करो
  caption: "Golden hour never disappoints! 🌅 Nature's beauty at its finest.",
  content: "Captured this amazing sunset while exploring the local trails.",
  hashtags: ["sunset", "nature", "photography", "golden_hour", "travel"],
  status: "published",
  createdAt: new Date().toISOString()
};

/*
Expected Frontend Display:
┌──────────────────────────────────────┐
│  INSTAGRAM  📷 Image                 │
├──────────────────────────────────────┤
│   [Large Beautiful Image]            │
│   (600x400px, hover zoom)            │
├──────────────────────────────────────┤
│  Golden hour never disappoints! 🌅   │
│  Nature's beauty at its finest.      │
│                                      │
│  #sunset #nature #photography +2    │
│                                      │
│  📅 Jan 27, 2026       INSTAGRAM    │
│  ┌────────────────────────────────┐ │
│  │ View on Instagram →            │ │
│  └────────────────────────────────┘ │
└──────────────────────────────────────┘
*/

// ============================================
// TEST POST 2: LINK POST (Twitter)
// ============================================

export const testLinkPost = {
  platform: "twitter",
  postType: "link",
  linkUrl: "https://github.com/rkprajapati", // बदल सकते हो
  caption: "Check out my latest GitHub projects! 💻 Excited to share my work with you all.",
  content: "New projects added - React components library and Node.js utilities.",
  hashtags: ["github", "code", "development", "opensource"],
  status: "published",
  createdAt: new Date().toISOString()
};

/*
Expected Frontend Display:
┌──────────────────────────────────────┐
│  TWITTER  🔗 Link                    │
├──────────────────────────────────────┤
│  [Green Gradient Box]                │
│    🔗 SHARED LINK                    │
│    https://github.com/rkprajapati   │
├──────────────────────────────────────┤
│  Check out my latest GitHub          │
│  projects! 💻 Excited to share...   │
│                                      │
│  #github #code #development +1      │
│                                      │
│  📅 Jan 27, 2026         TWITTER    │
│  ┌────────────────────────────────┐ │
│  │ Open Link →                    │ │
│  └────────────────────────────────┘ │
└──────────────────────────────────────┘
*/

// ============================================
// TEST POST 3: VIDEO POST (YouTube)
// ============================================

export const testVideoPost = {
  platform: "youtube",
  postType: "video",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video
  caption: "Building a Complete React App from Scratch 🚀 Full Tutorial for Beginners",
  content: "In this video, I'll show you how to build a complete React application step by step.",
  hashtags: ["react", "javascript", "tutorial", "webdev", "coding"],
  status: "published",
  createdAt: new Date().toISOString()
};

/*
Expected Frontend Display:
┌──────────────────────────────────────┐
│  YOUTUBE  🎥 Video                   │
├──────────────────────────────────────┤
│  [Embedded Video Player]             │
│  (Click करके full screen मोड)        │
├──────────────────────────────────────┤
│  Building a Complete React App...   │
│                                      │
│  #react #javascript #tutorial +2    │
│                                      │
│  📅 Jan 27, 2026        YOUTUBE    │
│  ┌────────────────────────────────┐ │
│  │ View on YouTube →              │ │
│  └────────────────────────────────┘ │
└──────────────────────────────────────┘
*/

// ============================================
// TEST POST 4: TEXT POST (LinkedIn)
// ============================================

export const testTextPost = {
  platform: "linkedin",
  postType: "text",
  caption: "Excited to announce my new role! 🎉",
  content: "After months of learning and building, I'm thrilled to share that I've completed my web development certification and started my journey as a full-time developer. Grateful for all the support!",
  hashtags: ["career", "webdevelopment", "milestone", "learning", "growth"],
  status: "published",
  createdAt: new Date().toISOString()
};

/*
Expected Frontend Display:
┌──────────────────────────────────────┐
│  LINKEDIN  📝 Text                   │
├──────────────────────────────────────┤
│  [Purple Gradient Box]               │
│    📝 TEXT POST                      │
│    After months of learning...       │
│    Grateful for all the support!     │
├──────────────────────────────────────┤
│  Excited to announce my new role!    │
│                                      │
│  #career #webdevelopment #milestone  │
│                                      │
│  📅 Jan 27, 2026        LINKEDIN    │
│  ┌────────────────────────────────┐ │
│  │ View on LinkedIn →             │ │
│  └────────────────────────────────┘ │
└──────────────────────────────────────┘
*/

// ============================================
// TEST POST 5: STORY POST (Instagram)
// ============================================

export const testStoryPost = {
  platform: "instagram",
  postType: "story",
  image: "आपकी story image", // Upload करो
  caption: "Behind the scenes! 📸 Day in my life",
  content: "Working on exciting new projects and collaborating with amazing people!",
  hashtags: ["behindthescenes", "dailylife", "instagram", "contentcreator"],
  status: "published",
  createdAt: new Date().toISOString()
};

/*
Expected Frontend Display:
┌──────────────────────────────────────┐
│  INSTAGRAM  ✨ Story                 │
├──────────────────────────────────────┤
│  [Orange/Yellow Gradient]            │
│  [Story Image - Full Size]           │
│  (600x400px)                         │
├──────────────────────────────────────┤
│  Behind the scenes! 📸 Day in my...│
│                                      │
│  #behindthescenes #dailylife +2     │
│                                      │
│  📅 Jan 27, 2026       INSTAGRAM    │
│  ┌────────────────────────────────┐ │
│  │ View on Instagram →            │ │
│  └────────────────────────────────┘ │
└──────────────────────────────────────┘
*/

// ============================================
// HOW TO ADD IN SANITY CMS
// ============================================

/*

📋 STEP-BY-STEP GUIDE:

1. Sanity Studio खोलो: http://localhost:3333

2. "Social Media Posts" पर क्लिक करो

3. "Create" button दबाओ

4. यह fill करो (किसी भी post type के लिए):

   📌 BASIC FIELDS:
   - Platform: Dropdown से "Instagram" / "Twitter" / etc select करो
   - Post Type: Dropdown से "Image" / "Link" / "Video" / "Text" / "Story"

   📌 CONTENT FIELDS (Post Type के हिसाब से):
   
   IMAGE/STORY के लिए:
   - Image: Upload button से अपनी photo upload करो
   
   LINK के लिए:
   - Link URL: अपना link paste करो (https://... से शुरू करो)
   
   VIDEO के लिए:
   - Video URL: YouTube/Vimeo embed URL
     Format: https://www.youtube.com/embed/VIDEO_ID
   
   TEXT के लिए:
   - Content: अपना text type करो
   
   📌 COMMON FIELDS (सब के लिए):
   - Caption: Post का title/headline
   - Content: Extra description (optional)
   - Hashtags: 
     * "react" + "javascript" + "coding" (space से separate करो)
     * # symbol की ज़रूरत नहीं, auto लग जाएगा
   - Status: "Published" select करो
   - Created At: Auto-fill होगी, leave it
   
5. Screen के right side में "Publish" बटन दबाओ

6. Done! ✅

   Frontend पर automatically दिख जाएगा!

*/

// ============================================
// QUICK VALIDATION CHECKLIST
// ============================================

export const validationChecklist = {
  imagePost: {
    required: ["platform", "postType", "image", "caption", "status"],
    optional: ["content", "hashtags"],
    status: "Image post के लिए सब fields भरे हैं?"
  },
  linkPost: {
    required: ["platform", "postType", "linkUrl", "caption", "status"],
    optional: ["content", "hashtags"],
    status: "Link post के लिए valid URL है?"
  },
  videoPost: {
    required: ["platform", "postType", "videoUrl", "caption", "status"],
    optional: ["content", "hashtags"],
    status: "Video URL proper embed format में है?"
  },
  textPost: {
    required: ["platform", "postType", "caption", "content", "status"],
    optional: ["hashtags"],
    status: "Text content 2-3 lines से ज्यादा तो नहीं?"
  },
  storyPost: {
    required: ["platform", "postType", "image", "caption", "status"],
    optional: ["content", "hashtags"],
    status: "Story image square (1:1) format में है?"
  }
};

// ============================================
// TIPS FOR BEST RESULTS
// ============================================

export const tips = {
  images: {
    size: "Minimum 600x400px",
    format: "JPG, PNG, WebP",
    ratio: "3:2 aspect ratio best है"
  },
  captions: {
    length: "1-2 lines ideal",
    emoji: "Emojis add करो बेहतर look के लिए",
    clarity: "Short aur catchy रखो"
  },
  hashtags: {
    count: "3-5 hashtags ideal हैं",
    relevant: "Post से related hashtags use करो",
    popular: "Trending hashtags use करो ज्यादा visibility के लिए"
  },
  links: {
    format: "https:// से शुरू होना ज़रूरी है",
    working: "Link काम कर रहा है confirm करो",
    preview: "Title यानी caption अच्छा होना चाहिए"
  },
  videos: {
    embed: "YouTube का embed URL use करो",
    format: "https://www.youtube.com/embed/VIDEO_ID",
    autoplay: "Autoplay disabled रहेगा"
  }
};

export default {
  testImagePost,
  testLinkPost,
  testVideoPost,
  testTextPost,
  testStoryPost,
  validationChecklist,
  tips
};

/**
 * 
 * 🎉 READY TO TEST?
 * 
 * ✅ Sanity Studio में एक post add करो
 * ✅ Status को "Published" करो
 * ✅ "Publish" button दबाओ
 * ✅ अपनी website refresh करो
 * ✅ "📰 Social Feed" tab पर देखो
 * ✅ Beautiful design दिखेगी! 🚀
 * 
 */
