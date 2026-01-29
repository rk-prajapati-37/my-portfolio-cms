# Social Media Integration Guide 🌐

## Overview
Aapke portfolio mein ab **Social Media Links** aur **Social Media Posts** manage karne ke liye complete setup hai.

---

## ✅ Features Added

### 1. **Social Media Links** (`SocialLinks.jsx`)
- Social media platform links display kare with icons
- 10+ platforms support (Facebook, Twitter, Instagram, LinkedIn, GitHub, YouTube, TikTok, WhatsApp, Telegram, Website)
- Customizable colors
- Display order control
- Enable/Disable toggle

### 2. **Social Media Posts** (`SocialPosts.jsx`)
- Different post types: Text, Image, Video, Link, Story
- Schedule posts for future publishing
- Add captions aur hashtags
- Filter by platform
- Track status (Draft, Scheduled, Published)

---

## 🛠️ Sanity CMS Setup

### Schema Added:

#### 1. **socialMedia** Schema
Apna social media profile manage karne ke liye

**Fields:**
- `platform`: Select karo - Facebook, Twitter, Instagram, etc.
- `url`: Profile URL (e.g., https://instagram.com/yourprofile)
- `icon`: Color select karo (Blue, Red, Purple, Pink, Green, Black, White)
- `displayOrder`: Sort order (1, 2, 3...)
- `active`: Enable/Disable toggle

#### 2. **socialPost** Schema
Posts manage karne ke liye (Images, Videos, Text, Links)

**Fields:**
- `platform`: Social media select karo (reference to socialMedia)
- `postType`: Choose - Text, Image, Video, Link, Story
- `content`: Text content
- `image`: Upload image for photo posts
- `videoUrl`: Embed video URL (YouTube, Vimeo, etc.)
- `linkUrl`: External link
- `caption`: Post ka caption
- `scheduledDate`: Publish karne ka time
- `hashtags`: Hashtags add karo
- `status`: Draft, Scheduled, ya Published

---

## 💻 React Components Usage

### 1. **SocialLinks Component** (Display Links with Icons)

```jsx
import SocialLinks from './components/SocialLinks';

export default function MyPortfolio() {
  return (
    <div>
      <h1>My Portfolio</h1>
      
      {/* Your content here */}
      
      {/* Social Media Links Display */}
      <SocialLinks />
    </div>
  );
}
```

**Output:**
- Colorful circular buttons with emojis
- Hover effect with scale animation
- Direct links to social media profiles

### 2. **SocialPosts Component** (Display Social Feed)

```jsx
import SocialPosts from './components/SocialPosts';

export default function MyPortfolio() {
  return (
    <div>
      <h1>My Portfolio</h1>
      
      {/* Your content here */}
      
      {/* Social Media Feed */}
      <SocialPosts />
    </div>
  );
}
```

**Features:**
- Platform-wise filter
- Grid layout (1 column mobile, 2 columns desktop)
- Auto-embed videos
- Hashtags clickable links
- "View on Platform" button

---

## 📝 How to Use in Sanity Studio

### Adding Social Media Links:

1. Sanity Studio mein jao → **Social Media**
2. Click **Create** → **Social Media**
3. Fill Details:
   - **Platform**: Instagram (example)
   - **URL**: `https://instagram.com/yourprofile`
   - **Icon**: Blue (color select karo)
   - **Display Order**: 1
   - **Active**: Toggle ON
4. **Publish** click karo

### Adding Social Media Posts:

1. Sanity Studio → **Social Media Posts**
2. Click **Create** → **Social Media Posts**
3. Fill Details:
   - **Platform**: Instagram (apna profile select karo)
   - **Post Type**: Image (ya Text, Video, Link)
   - **Content**: Optional text content
   - **Image**: Upload image (agar image post hai)
   - **Caption**: Apna caption likho
   - **Hashtags**: #photography #portfolio #webdev
   - **Scheduled Date**: Future date select karo (optional)
   - **Status**: 
     - **Draft** - Save karo, publish later
     - **Scheduled** - Auto-publish on scheduled date
     - **Published** - Immediately visible
4. **Publish** click karo

---

## 🎨 Customization

### Change Icon Colors:

File: `src/components/SocialLinks.jsx`

```javascript
const getColorClass = (color) => {
  const colors = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    red: 'bg-red-600 hover:bg-red-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
    pink: 'bg-pink-600 hover:bg-pink-700',
    green: 'bg-green-600 hover:bg-green-700',
    black: 'bg-black hover:bg-gray-800',
    white: 'bg-white hover:bg-gray-100 text-black',
  };
  return colors[color] || 'bg-gray-600 hover:bg-gray-700';
};
```

### Change Icons (Emoji):

```javascript
const getIcon = (platform) => {
  const icons = {
    facebook: '📘',      // Apna emoji change karo
    twitter: '𝕏',
    instagram: '📷',     // Ya customized icon use karo
    linkedin: '💼',
    // ... aur platforms
  };
  return icons[platform] || '🔗';
};
```

---

## 🎯 Advanced Features

### 1. **Story Posts**
Stories ke liye dedicated post type, temporary content ke liye ideal.

### 2. **Scheduled Publishing**
Future ka date set karo, automatically publish hoga scheduled time pe.

### 3. **Platform Filtering**
Users platform-wise posts filter kar sakte hain (Instagram, YouTube, etc.)

### 4. **Multiple Post Types**
- **Text Only**: Simple messages/announcements
- **Image**: Photo posts with captions
- **Video**: Embedded videos (YouTube, Vimeo, etc.)
- **Link**: External links share karo
- **Story**: Temporary content

### 5. **Hashtag Support**
Hashtags directly clickable, Instagram/Twitter search mein jayenge.

---

## 📊 Data Structure (Sanity)

```
Social Media Links:
├── Platform (String) - facebook, instagram, etc.
├── URL (URL) - Profile link
├── Icon Color (String) - Design preference
├── Display Order (Number) - Sorting
└── Active (Boolean) - Show/Hide

Social Media Posts:
├── Platform (Reference) - Linked social profile
├── Post Type (String) - text, image, video, link, story
├── Content (Text) - Body text
├── Image (Image) - Photo
├── Video URL (URL) - Embedded video
├── Caption (Text) - Post caption
├── Hashtags (Array) - Tag collection
├── Scheduled Date (DateTime) - Publishing schedule
└── Status (String) - draft, scheduled, published
```

---

## 🚀 Implementation Checklist

- [x] Schema created (Social Media + Social Posts)
- [x] React Components created
- [x] Data queries set up
- [ ] Add components to your main page
- [ ] Add test data in Sanity Studio
- [ ] Customize colors/icons as needed
- [ ] Deploy

---

## 🔗 Integration Example

```jsx
// pages/index.jsx (or App.jsx)
import SocialLinks from '@/components/SocialLinks';
import SocialPosts from '@/components/SocialPosts';

export default function Home() {
  return (
    <div>
      {/* Other sections */}
      
      <section id="social">
        <h2>Connect With Me</h2>
        <SocialLinks />
      </section>

      <section id="feed">
        <SocialPosts />
      </section>
      
      {/* Other sections */}
    </div>
  );
}
```

---

## 📞 Quick Support

**Error Messages:**
- "Loading social links..." - Check Sanity connection
- No posts showing - Check status is "Published" in Sanity
- Images not loading - Verify image is uploaded in Sanity
- Videos not embedding - Check video URL format (YouTube, Vimeo, etc.)

---

✅ **All set!** Apna social media portfolio ab fully functional hai! 🎉
