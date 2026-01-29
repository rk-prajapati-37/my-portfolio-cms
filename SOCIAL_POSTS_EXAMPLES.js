/**
 * SOCIAL POSTS - IMAGE & LINK EXAMPLES
 * 
 * यह file दिखाती है कि Sanity में कैसे posts add करें
 * और Frontend पर कैसा दिखेगा
 */

// ============================================
// EXAMPLE 1: IMAGE POST (Instagram)
// ============================================

const imagePostExample = {
  platform: "instagram",
  postType: "image",
  image: "sunset.jpg", // Upload करो
  caption: "Golden hour never disappoints! 🌅",
  hashtags: ["sunset", "nature", "photography", "goldenhour"],
  status: "published",
  createdAt: "2026-01-27T16:30:00Z"
};

/*
Frontend पर दिखेगा:
┌──────────────────────────────────┐
│  INSTAGRAM  📷 Image             │
├──────────────────────────────────┤
│                                  │
│    [Sunset Image]                │
│    (Hover करने से zoom होगा)     │
│                                  │
├──────────────────────────────────┤
│ Golden hour never disappoints! 🌅│
│                                  │
│ #sunset #nature #photography     │ ← Clickable
│ #goldenhour                      │
│                                  │
│ Jan 27, 2026                     │
│ View on Instagram →              │
└──────────────────────────────────┘
*/

// ============================================
// EXAMPLE 2: LINK POST (Twitter)
// ============================================

const linkPostExample = {
  platform: "twitter",
  postType: "link",
  linkUrl: "https://myblog.com/react-tips",
  caption: "10 React Tips That Will Make You a Better Developer",
  hashtags: ["react", "javascript", "webdev"],
  status: "published",
  createdAt: "2026-01-27T12:00:00Z"
};

/*
Frontend पर दिखेगा:
┌──────────────────────────────────┐
│  TWITTER  🔗 Link                │
├──────────────────────────────────┤
│                                  │
│  ┌─────────────────────────────┐│
│  │ 🔗 SHARED LINK             ││
│  │                             ││
│  │ https://myblog.com/...      ││  [Visit →]
│  │ react-tips                  ││
│  └─────────────────────────────┘│
│                                  │
│ 10 React Tips That Will Make You │
│ a Better Developer               │
│                                  │
│ #react #javascript #webdev       │ ← Clickable
│                                  │
│ Jan 27, 2026                     │
│ View on Twitter →                │
└──────────────────────────────────┘
*/

// ============================================
// EXAMPLE 3: VIDEO POST (YouTube)
// ============================================

const videoPostExample = {
  platform: "youtube",
  postType: "video",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  caption: "Building a React Project from Scratch",
  hashtags: ["react", "javascript", "webdev", "tutorial"],
  status: "published",
  createdAt: "2026-01-27T14:20:00Z"
};

/*
Frontend पर दिखेगा:
┌──────────────────────────────────┐
│  YOUTUBE  🎥 Video               │
├──────────────────────────────────┤
│                                  │
│  ┌──────────────────────────────┐│
│  │                              ││
│  │   [Video Embedded Here]      ││
│  │   Full Screen Play Option    ││
│  │                              ││
│  └──────────────────────────────┘│
│                                  │
│ Building a React Project from    │
│ Scratch                          │
│                                  │
│ #react #javascript #webdev       │
│ #tutorial                        │
│                                  │
│ Jan 27, 2026                     │
│ View on YouTube →                │
└──────────────────────────────────┘
*/

// ============================================
// EXAMPLE 4: TEXT POST (LinkedIn)
// ============================================

const textPostExample = {
  platform: "linkedin",
  postType: "text",
  content: "Excited to announce that I've completed my web development certification! 🎓",
  caption: "Career milestone",
  hashtags: ["webdevelopment", "learning", "career", "milestone"],
  status: "published",
  createdAt: "2026-01-27T10:15:00Z"
};

/*
Frontend पर दिखेगा:
┌──────────────────────────────────┐
│  LINKEDIN  📝 Text               │
├──────────────────────────────────┤
│                                  │
│  ┌─────────────────────────────┐│
│  │ 📝 TEXT POST               ││
│  │                             ││
│  │ Excited to announce that    ││
│  │ I've completed my web       ││
│  │ development certification! 🎓││
│  └─────────────────────────────┘│
│                                  │
│ Career milestone                 │
│                                  │
│ #webdevelopment #learning        │
│ #career #milestone               │
│                                  │
│ Jan 27, 2026                     │
│ View on LinkedIn →               │
└──────────────────────────────────┘
*/

// ============================================
// EXAMPLE 5: STORY POST (Instagram)
// ============================================

const storyPostExample = {
  platform: "instagram",
  postType: "story",
  image: "behind-the-scenes.jpg", // Upload करो
  content: "Behind the scenes! 📸",
  caption: "Day in my life",
  hashtags: ["behindthescenes", "dailylife", "insta"],
  status: "published",
  createdAt: "2026-01-27T18:45:00Z"
};

/*
Frontend पर दिखेगा:
┌──────────────────────────────────┐
│  INSTAGRAM  ✨ Story             │
├──────────────────────────────────┤
│                                  │
│    [Story Image]                 │
│    (Orange/Yellow background)    │
│                                  │
│ Behind the scenes! 📸            │
│                                  │
│ Day in my life                   │
│                                  │
│ #behindthescenes #dailylife      │
│ #insta                           │
│                                  │
│ Jan 27, 2026                     │
│ View on Instagram →              │
└──────────────────────────────────┘
*/

// ============================================
// SANITY में STEP-BY-STEP ADD करना
// ============================================

/*

📋 IMAGE POST ADD करने के Steps:

1. Sanity Studio खोलो: http://localhost:3333
2. "Social Media Posts" पर क्लिक करो
3. "Create" बटन दबाओ
4. Fill करो:
   - Platform: "Instagram" (dropdown से select)
   - Post Type: "Image" (dropdown से)
   - Image: Click करके अपनी photo upload करो
   - Caption: "Golden hour never disappoints! 🌅"
   - Hashtags: "sunset" + "nature" + "photography" (add करते जा)
   - Status: "Published"
5. "Publish" बटन दबाओ ✅
6. Frontend पर automatic दिख जाएगा!

---

📋 LINK POST ADD करने के Steps:

1. Sanity Studio खोलो
2. "Social Media Posts" पर क्लिक करो
3. "Create" बटन दबाओ
4. Fill करो:
   - Platform: "Twitter" (dropdown से)
   - Post Type: "Link" (dropdown से)
   - Link URL: "https://myblog.com/react-tips"
   - Caption: "10 React Tips That Will Make You a Better Developer"
   - Hashtags: "react", "javascript", "webdev"
   - Status: "Published"
5. "Publish" बटन दबाओ ✅
6. Link blue box में दिख जाएगी!

---

📋 VIDEO POST ADD करने के Steps:

1. Sanity Studio खोलो
2. "Social Media Posts" पर क्लिक करो
3. "Create" बटन दबाओ
4. Fill करो:
   - Platform: "YouTube"
   - Post Type: "Video"
   - Video URL: "https://www.youtube.com/embed/VIDEO_ID"
   - Caption: "Building a React Project from Scratch"
   - Hashtags: "react", "javascript", "tutorial"
   - Status: "Published"
5. "Publish" बटन दबाओ ✅
6. Video player दिख जाएगा!

*/

// ============================================
// FRONTEND में DISPLAY कैसा होगा
// ============================================

/*

📱 RESPONSIVE GRID:
- Mobile:  1 column
- Tablet:  2 columns
- Desktop: 2 columns

📝 हर Post में दिखेगा:
1. Post Content (Image/Video/Link/Text)
2. Platform Badge (Red)
3. Post Type Badge (Color coded)
4. Caption/Content
5. Hashtags (Clickable)
6. Date
7. "View on [Platform]" Link

🎨 COLORS:
- Image:  Blue badge + zoom hover
- Video:  Purple badge + aspect ratio
- Link:   Green badge + blue box
- Text:   Yellow badge + purple box
- Story:  Orange badge + gradient

*/

// ============================================
// IMPORTANT NOTES
// ============================================

/*

✅ MUST DO:
- Image/Video/Link URL properly format करो
- Status को "Published" set करो
- अलग-अलग platforms use करो
- Hashtags add करो (ज्यादा search होगी)

❌ AVOID:
- Broken links add न करो
- Invalid image formats use न करो
- Status "Draft" पर publish न करो
- Too long captions लिखो (truncate होंगी)

🔄 BEST PRACTICES:
- Regular posts add करो
- Mix of content types रखो
- Hashtags 3-5 रखो
- Emojis use करो (engaging बनेगा)

*/

export default {
  imagePostExample,
  linkPostExample,
  videoPostExample,
  textPostExample,
  storyPostExample
};
