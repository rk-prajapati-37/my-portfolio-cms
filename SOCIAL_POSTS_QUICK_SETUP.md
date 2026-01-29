# 🚀 Social Posts - Quick Setup Reference

## Fields Summary (All 10 Fields)

| Field | Type | Required | Display | Icon |
|-------|------|----------|---------|------|
| Platform | Reference | ✅ | Badge | 📱 |
| Title | String | ❌ | Red Subtitle | 📝 |
| Featured Image | Image | ❌ | Main Visual | 🖼️ |
| Post Type | Select | ✅ | Color Badge | 📋 |
| Content | Text | ❌ | Description | 📄 |
| External Link/URL | URL | ❌ | Blue Box | 🔗 |
| Hashtags | Array | ❌ | Tags | #️⃣ |
| Scheduled Date/Time | DateTime | ❌ | Yellow Box | ⏰ |
| Status | Select | ❌ | Color Badge | ✅ |
| Created At | DateTime | 🤖 Auto | Grid | 📅 |

---

## How to Create a Perfect Post

### Step 1: Choose Platform
Select from: Instagram, Facebook, Twitter, LinkedIn, YouTube, etc.

### Step 2: Add Post Title (Optional)
```
Examples:
- "New React Course Available!"
- "My Latest Project Launch"
- "10 Tips for Web Developers"
```

### Step 3: Upload Featured Image
- Best size: 1200x800px
- Use for visual appeal
- Works for all post types

### Step 4: Select Post Type
- **📝 Text**: Text-only content
- **📷 Image**: Photo post
- **🎥 Video**: Video content
- **🔗 Link**: External link
- **✨ Story**: Story format

### Step 5: Write Content
- **Caption**: Catchy main text
- **Content**: Extended description

### Step 6: Add External Link (if applicable)
- For Link posts: External URL
- For Video posts: YouTube/Vimeo URL
- For Image posts: Optional link

### Step 7: Add Hashtags
- Use: ["react", "webdev", "javascript"]
- Max 3-5 recommended
- Auto-linked in frontend

### Step 8: Schedule (Optional)
- Pick date & time if posting later
- Leave empty for immediate posting
- Use for content calendar

### Step 9: Set Status
- **🟢 Published**: Live now
- **🟡 Scheduled**: For future posts
- **⚪ Draft**: Not visible yet

### Step 10: Create!
- Created At: Auto-filled with current time
- Ready to display in frontend

---

## Frontend Display Preview

### Post Card Example:

```
╔═══════════════════════════════════════╗
║     [Featured Image / Post Content]   ║
║     🔴 INSTAGRAM  📷 IMAGE           ║
╠═══════════════════════════════════════╣
║ 📝 Amazing New Feature Released! 🚀   ║
║ (Red, Bold Title)                     ║
║                                       ║
║ Check out our latest feature that     ║
║ will revolutionize your work!         ║
║                                       ║
║ 🔗 External Link:                     ║
║ https://example.com/feature           ║
║                                       ║
║ #react #webdev #coding +2 more       ║
╠═══════════════════════════════════════╣
║ 📱 Instagram  │  📝 Image             ║
║ ✅ Published  │  📅 Jan 29, 2024      ║
║                                       ║
║ ⏰ Scheduled: Feb 15, 2024 10:30 AM   ║
║                                       ║
║       [View on Instagram →]           ║
╚═══════════════════════════════════════╝
```

---

## Usage Tips

### For Maximum Engagement:
1. ✅ Always add a **Title** (stands out in feed)
2. ✅ Use **Featured Image** (visual appeal)
3. ✅ Write **Content** (tell your story)
4. ✅ Add **Hashtags** (3-5 max)
5. ✅ Set **Status** to Published (go live)
6. ✅ Use **External Links** (drive traffic)
7. ✅ Schedule strategically (best times)
8. ✅ Vary **Post Types** (keep fresh)

### For Content Planning:
- Use **Scheduled Date/Time** to plan ahead
- Keep **Status** as "Draft" while preparing
- Change to "Scheduled" for future posts
- Set to "Published" when ready

### For Better Organization:
- Use **Hashtags** to categorize content
- Choose **Post Type** based on content
- Set **Platform** appropriately
- Add **Created At** automatically

---

## Schema Fields in CMS

### Sanity Configuration:
```javascript
// All fields now available in Sanity Studio
fields: [
  platform,           // Reference to Social Media
  title,             // Post Title (NEW!)
  featuredImage,     // Post Thumbnail
  postType,          // Text/Image/Video/Link/Story
  content,           // Main content
  image/videoUrl/linkUrl,  // Type-specific
  caption,           // Post caption
  hashtags,          // Array of tags
  scheduledDate,     // Future publish date
  status,            // Draft/Scheduled/Published
  createdAt,         // Auto-timestamp
]
```

---

## Real-World Examples

### Example 1: Blog Post Share
```
Platform: Twitter
Title: "Check out my latest blog post!"
Content: "I wrote about React hooks and how to..."
External Link: https://myblog.com/react-hooks
Hashtags: ["react", "javascript", "webdev"]
Status: Published
```

### Example 2: Product Launch
```
Platform: Instagram
Title: "🚀 New Product Launch!"
Featured Image: [Product photo]
Content: "Excited to announce our new product..."
Hashtags: ["launch", "newproduct", "startup"]
Scheduled Date: Tomorrow at 10:00 AM
Status: Scheduled
```

### Example 3: Video Share
```
Platform: YouTube
Title: "10 React Tips & Tricks"
Featured Image: [Video thumbnail]
Video URL: https://youtube.com/video123
Content: "In this video I share 10 tips..."
Hashtags: ["react", "javascript", "tutorial"]
Status: Published
```

---

## Frontend Integration

The **SocialPosts** component automatically displays:
- ✅ All 10 fields
- ✅ Responsive design
- ✅ Platform filtering
- ✅ Status indicators
- ✅ Scheduled date display
- ✅ Clickable hashtags
- ✅ External link handling
- ✅ Post type icons

**No additional configuration needed!**

---

**Updated**: January 29, 2024
**Status**: ✅ Complete & Ready to Use
