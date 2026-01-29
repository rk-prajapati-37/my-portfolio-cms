# 🚀 Quick Start Guide - Social Media Integration

## ⚡ 5-Minute Setup

### Step 1: Components Ready ✅
Ye 3 naye components add ho gaye:
- `SocialLinks.jsx` - Social media icons display
- `SocialPosts.jsx` - Social feed display  
- `ContactAndSocial.jsx` - Complete contact + social section (all-in-one)

### Step 2: Schemas Added ✅
- `socialMedia.js` - Social profiles manage karne ke liye
- `socialPost.js` - Posts/content manage karne ke liye

---

## 📱 Usage Kaise Kare?

### Option 1: Complete Component Use Karo (Recommended)

```jsx
// pages/contact.jsx ya index.jsx
import ContactAndSocial from '@/components/ContactAndSocial';

export default function ContactPage() {
  return (
    <div>
      <ContactAndSocial />
    </div>
  );
}
```

**Features included:**
- ✅ Contact form with validation
- ✅ Social media links display
- ✅ Social media feed with filters
- ✅ Tab navigation
- ✅ Responsive design

---

### Option 2: Individual Components Use Karo

```jsx
// pages/index.jsx
import SocialLinks from '@/components/SocialLinks';
import SocialPosts from '@/components/SocialPosts';

export default function Home() {
  return (
    <div>
      {/* Your existing content */}
      
      {/* Social Links Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8">Follow Me</h2>
        <SocialLinks />
      </section>

      {/* Social Feed Section */}
      <section className="py-12">
        <h2 className="text-center text-3xl font-bold mb-8">Latest Updates</h2>
        <SocialPosts />
      </section>
    </div>
  );
}
```

---

## 🎯 Sanity Studio Setup

### Step 1: Add Social Media Profile

1. **Sanity Studio** खोलो
2. Left sidebar → **Social Media** click करो
3. **Create** button → **Social Media** select करो
4. Form fill करो:

```
Platform:    Instagram
URL:         https://instagram.com/yourprofile
Icon Color:  Blue (या कोई और)
Display:     1
Active:      ✓ (checked)
```

5. **Publish** click करो

### Step 2: Add First Post

1. Left sidebar → **Social Media Posts** 
2. **Create** → **Social Media Posts**
3. Form fill करो:

```
Platform:        Instagram (select करो)
Post Type:       Image (या Text/Video)
Caption:         "My awesome photo! 📸"
Image:           Upload image
Hashtags:        #photography #portfolio
Status:          Published
Scheduled Date:  (Optional)
```

4. **Publish** click करो

---

## 🎨 Customization Examples

### Change Social Link Icon Style

**File:** `src/components/SocialLinks.jsx`

```javascript
// Line 41 - Change icon shape
className={`
  ${getColorClass(link.icon)}
  text-white text-2xl w-12 h-12 
  rounded-full   // Change to: rounded-lg for square
  flex items-center justify-center 
  transition-transform duration-200 hover:scale-110
  shadow-lg
`}
```

### Add More Social Platforms

**File:** `schemas/socialMedia.js` (Lines 5-18)

```javascript
options: {
  list: [
    { title: "Facebook", value: "facebook" },
    { title: "Twitter", value: "twitter" },
    { title: "Instagram", value: "instagram" },
    { title: "LinkedIn", value: "linkedin" },
    { title: "GitHub", value: "github" },
    // Add more here:
    { title: "Discord", value: "discord" },
    { title: "Twitch", value: "twitch" },
  ],
}
```

Then update `getIcon()` in `SocialLinks.jsx`:

```javascript
const getIcon = (platform) => {
  const icons = {
    // ... existing
    discord: "💬",
    twitch: "🎮",
  };
  return icons[platform] || '🔗';
};
```

---

## 📊 Data Flow

```
Sanity Studio
    ↓
socialMedia (Profile links)
    ↓
SocialLinks.jsx (Display with icons)
    ↓
Website

Sanity Studio
    ↓
socialPost (Content)
    ↓
SocialPosts.jsx (Grid + Filter)
    ↓
Website
```

---

## 🎬 Post Type Examples

### Text Post
```
Type:    Text
Content: "Just launched my new portfolio! 🚀"
Status:  Published
```

### Image Post
```
Type:    Image
Image:   [Upload photo]
Caption: "Check out my latest design work"
Tags:    #design #webdev
Status:  Published
```

### Video Post
```
Type:       Video
Video URL:  https://youtube.com/watch?v=xxxxx
Caption:    "Tutorial: How to build a portfolio"
Status:     Published
```

### Link Post
```
Type:     Link
Link URL: https://yoursite.com/article
Caption:  "New blog post: Tips for designers"
Status:   Published
```

### Scheduled Post
```
Type:            Image/Text/Video
Content:         [Your content]
Scheduled Date:  2024-02-15 10:00 AM
Status:          Scheduled
(Auto-publish होगा specified time पर)
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Social links not showing | Check `active: true` in Sanity |
| Images not loading | Verify image uploaded in Sanity |
| Videos not embedding | Check video URL format (YouTube/Vimeo) |
| Posts showing but no filter | Check `status: published` |
| Styling issues | Clear browser cache, restart dev server |

---

## 📁 Files Created

```
schemas/
  ├── socialMedia.js      (Profile schema)
  └── socialPost.js       (Content schema)

src/components/
  ├── SocialLinks.jsx     (Icon display)
  ├── SocialPosts.jsx     (Feed display)
  └── ContactAndSocial.jsx (Complete section)

Documentation/
  ├── SOCIAL_MEDIA_SETUP_GUIDE.md (Detailed guide)
  └── SOCIAL_MEDIA_QUICK_START.md (This file)
```

---

## ✅ Next Steps

1. **Add social profiles** in Sanity Studio
2. **Import component** in your page
3. **Add test posts** to see feed
4. **Customize colors** & styling if needed
5. **Deploy** and enjoy!

---

## 💡 Pro Tips

✅ **Pin important posts** - Set status to "Published"  
✅ **Schedule posts** - Automate content sharing  
✅ **Use hashtags** - Increase discoverability  
✅ **Vary content** - Mix text, images, videos  
✅ **Update regularly** - Keep feed fresh  

---

🎉 **All set!** आपका social media portfolio अब live है!

Need help? Check `SOCIAL_MEDIA_SETUP_GUIDE.md` for detailed info.
