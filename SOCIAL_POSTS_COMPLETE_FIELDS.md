# 📱 Social Media Posts - Complete Fields Guide

## All Available Fields in Social Posts

### 1. **Platform** 🌐
- **Type**: Reference to Social Media Profile
- **Required**: Yes ✅
- **Description**: Select which social media platform this post is for (Instagram, Facebook, Twitter, LinkedIn, etc.)
- **Display**: Shows platform icon and name in the feed

---

### 2. **Post Title** 📝
- **Type**: String (Text)
- **Required**: No
- **Max Length**: Unlimited
- **Description**: Main title/headline for the post
- **Use Case**: 
  - Blog-like titles for your posts
  - Important announcements or highlights
  - Stand out in the social feed
- **Display**: Shows as red subtitle in the post card
- **Example**: "New Portfolio Project Launched!", "10 React Tips"

---

### 3. **Featured Image** 🖼️
- **Type**: Image with Hotspot
- **Required**: No
- **Description**: Post thumbnail/featured image (works for all post types)
- **Features**:
  - Hotspot support for image optimization
  - Displays as main visual in the post card
  - Used as fallback for all post types
- **Best For**: All post types (Text, Image, Video, Link, Story)

---

### 4. **Post Type** 📋
- **Type**: String (Select)
- **Required**: Yes ✅
- **Options**:
  - **Text** 📝 - Text-only posts
  - **Image** 📷 - Image posts with caption
  - **Video** 🎥 - Video content with thumbnail
  - **Link** 🔗 - External link sharing
  - **Story** ✨ - Story format posts
- **Display**: Shows as colored badge on the post (Blue, Purple, Green, Yellow, Orange)

---

### 5. **Content** 📄
- **Type**: Long Text (4 rows)
- **Required**: No
- **Description**: Main content/description of the post
- **Use Case**: Detailed post caption or description
- **Display**: Shows below the title in the post card
- **Example**: Full post description, lengthy captions

---

### 6. **External Link/URL** 🔗
- **Type**: URL
- **Field Names**:
  - `linkUrl` - For "Link" post type
  - `videoUrl` - For "Video" post type
  - `image` - For "Image" post type
- **Required**: Depends on post type
- **Visibility**: 
  - `linkUrl` shows only for "Link" post type
  - `videoUrl` shows only for "Video" post type
  - `image` shows only for "Image" post type
- **Display**: Shows in a highlighted blue box for link posts

---

### 7. **Hashtags** #️⃣
- **Type**: Array of Strings (Tag Layout)
- **Required**: No
- **Max Display**: First 3 shown, rest counted
- **Format**: Automatically adds `#` prefix if not included
- **Use Case**: 
  - Help with discoverability
  - Organize related posts
  - SEO benefits
- **Display**: Shows as clickable tags below content
- **Example**: ["react", "webdev", "javascript"]

---

### 8. **Scheduled Date/Time** ⏰
- **Type**: DateTime
- **Required**: No
- **Format**: YYYY-MM-DD HH:MM (24-hour format)
- **Description**: When this post should be published
- **Use Case**: 
  - Schedule future posts
  - Automate publishing
  - Plan content calendar
- **Display**: Shows in yellow box if scheduled
- **Example**: "2024-02-15 10:30 AM"

---

### 9. **Status** ✅
- **Type**: String (Select)
- **Required**: No
- **Default**: "draft"
- **Options**:
  - 🟢 **Published** - Post is live
  - 🟡 **Scheduled** - Post is scheduled for future
  - ⚪ **Draft** - Post is in draft mode (not visible)
- **Display**: Shows as colored status badge (Green, Yellow, Gray)
- **Note**: Only "Published" posts show in the frontend feed

---

### 10. **Created At** 📅
- **Type**: DateTime
- **Auto-filled**: Yes (Current timestamp)
- **Format**: ISO 8601
- **Description**: When the post was created
- **Display**: Shows formatted date in post card
- **Cannot Edit**: Set automatically on creation
- **Example**: "Jan 29, 2024"

---

## Complete Post Structure Example

```javascript
{
  _type: "socialPost",
  platform: "reference_to_instagram",
  title: "Amazing New Feature Released! 🚀",
  featuredImage: { /* image asset */ },
  postType: "image",
  content: "Check out our latest feature that will revolutionize how you work. Built with React and Node.js!",
  image: { /* post specific image */ },
  caption: "Amazing New Feature Released! 🚀",
  linkUrl: null,
  videoUrl: null,
  hashtags: ["react", "webdev", "coding"],
  scheduledDate: "2024-02-15T10:30:00Z",
  status: "published",
  createdAt: "2024-01-29T15:45:00Z"
}
```

---

## Display Layout in Frontend

### Post Card Structure:
```
┌─────────────────────────────────────┐
│     Featured Image / Content        │
│  [Instagram Badge] [Image Badge]   │
├─────────────────────────────────────┤
│ 📝 Post Title (if added)            │
│ Caption/Main Text (Bold, Large)     │
│ Content Description (Smaller text)  │
│                                     │
│ 🔗 External Link (if added)         │
│                                     │
│ #hashtag1  #hashtag2  #hashtag3     │
│ +2 more                             │
├─────────────────────────────────────┤
│ Details Grid (2x2):                 │
│ 📱 Platform: Instagram │ 📝 Type: Image  │
│ ✅ Status: Published   │ 📅 Created: Jan 29 │
│                                     │
│ ⏰ Scheduled: Feb 15 2024 10:30 AM  │
│                                     │
│ [View on Instagram →] (Button)      │
└─────────────────────────────────────┘
```

---

## Best Practices

### For Each Post Type:

#### 📝 Text Posts
- Use **Title** for the main message
- Use **Content** for extended thoughts
- Add **Hashtags** for reach
- Set **Featured Image** for visual appeal

#### 📷 Image Posts
- Upload **Image** for post type
- Use **Featured Image** as thumbnail
- Write compelling **Caption**
- Add **Content** for additional context

#### 🎥 Video Posts
- Provide **Video URL** (YouTube, Vimeo, etc.)
- Use **Featured Image** as video thumbnail
- Write **Caption** and **Content**
- Add **Hashtags** relevant to video

#### 🔗 Link Posts
- Provide **External Link**
- Write catchy **Caption**
- Use **Featured Image** to represent link
- Add **Content** describing what to expect

#### ✨ Story Posts
- Use **Featured Image** for story visual
- Keep **Caption** short and punchy
- Set **Status** to "Scheduled" if posting later

---

## Tips for Maximum Engagement

1. **Always add a Title** - Makes posts stand out
2. **Use Featured Images** - Visual appeal matters
3. **Strategic Hashtags** - Max 3-5 per post
4. **Schedule Posts** - Plan your content calendar
5. **Consistent Status** - Keep published posts current
6. **Add External Links** - Drive traffic to your site
7. **Write Compelling Content** - Engage your audience
8. **Use All Post Types** - Keep content varied

---

## Frontend Display Features

✅ **Responsive Design** - Works on all devices
✅ **Platform Filtering** - Filter by social platform
✅ **Post Type Icons** - Visual identification
✅ **Status Indicators** - See post status at a glance
✅ **Clickable Hashtags** - Link to hashtag searches
✅ **Date Formatting** - Human-readable dates
✅ **Direct Links** - One-click to social post
✅ **Beautiful Layout** - Like blog posts display

---

**Last Updated**: January 29, 2024
**Version**: 2.0 - Complete Fields Edition
