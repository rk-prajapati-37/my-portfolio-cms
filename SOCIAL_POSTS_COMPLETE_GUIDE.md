# 📱 Social Media Posts - Complete Guide

## 🎯 क्या दिख रहा है Frontend में?

### **4 Types के Posts:**

1. **📷 IMAGE POST**
   - आपकी photo दिखेगी
   - Hover करने से zoom होगी
   - Beautiful card design

2. **🎥 VIDEO POST**
   - Video embed होगी
   - Full screen play option
   - Aspect ratio maintained

3. **🔗 LINK POST**
   - Link का blue box में display
   - "Visit →" button से direct खुलेगा
   - Link preview दिखेगी

4. **📝 TEXT POST**
   - Purple box में text
   - Caption दिखेगा

5. **✨ STORY**
   - Yellow/orange box
   - Image + text together

---

## 🚀 **Sanity CMS में POST कैसे Add करें?**

### **Step 1: Sanity Studio खोलो**
```
URL: http://localhost:3333
या आपका Sanity URL
```

### **Step 2: "Social Media Posts" पर क्लिक करो**

### **Step 3: "Create" बटन दबाओ**

---

## 📋 **IMAGE POST कैसे Add करें?**

```
✓ Platform: Instagram (या कोई भी)
✓ Post Type: Image
✓ Image: अपनी photo upload करो
✓ Caption: "Beautiful sunset! 🌅 #photography"
✓ Hashtags: photography, sunset, nature
✓ Status: Published
✓ Create Date: आज की date
```

### Result:
- Frontend पर photo दिखेगी
- नीचे caption
- Hashtags link होंगे
- "📷 Image" badge दिखेगा

---

## 🔗 **LINK POST कैसे Add करें?**

```
✓ Platform: Twitter (या कोई भी)
✓ Post Type: Link
✓ Link URL: https://example.com/my-article
✓ Caption: "Check out my new blog post!"
✓ Hashtags: blog, tech, programming
✓ Status: Published
```

### Result:
- Blue box में link दिखेगा
- "Visit →" button होगा
- Click करने से नया tab खुलेगा
- "🔗 Link" badge दिखेगा

---

## 🎥 **VIDEO POST कैसे Add करें?**

```
✓ Platform: YouTube (या कोई भी)
✓ Post Type: Video
✓ Video URL: https://youtube.com/embed/VIDEO_ID
✓ Caption: "My latest video tutorial!"
✓ Hashtags: tutorial, coding, learning
✓ Status: Published
```

### Video URL Format:
```
YouTube: https://www.youtube.com/embed/dQw4w9WgXcQ
Vimeo: https://vimeo.com/123456789
```

### Result:
- Embedded video player दिखेगा
- Full screen option होगा
- "🎥 Video" badge

---

## 📝 **TEXT POST कैसे Add करें?**

```
✓ Platform: Twitter/X
✓ Post Type: Text
✓ Content: "Just finished an amazing project! 🎉"
✓ Caption: "Excited to share my progress"
✓ Hashtags: achievement, coding, success
✓ Status: Published
```

### Result:
- Purple box में text दिखेगा
- Nice formatting
- "📝 Text" badge

---

## ✨ **STORY POST कैसे Add करें?**

```
✓ Platform: Instagram
✓ Post Type: Story
✓ Image: अपनी story image
✓ Content: "Behind the scenes! 📸"
✓ Caption: "Day in my life"
✓ Hashtags: behindthescenes, dailylife
✓ Status: Published
```

### Result:
- Orange/yellow box
- Image + text together
- "✨ Story" badge

---

## 🎨 **Complete Example Posts**

### Post 1: Instagram Image
```
Platform:        Instagram
Post Type:       Image
Image:           sunset.jpg (upload करो)
Caption:         "Golden hour never disappoints! 🌅"
Hashtags:        sunset, nature, photography, golden hour
Status:          Published
Created:         2026-01-27
```

### Post 2: YouTube Video
```
Platform:        YouTube
Post Type:       Video
Video URL:       https://www.youtube.com/embed/dQw4w9WgXcQ
Caption:         "Building a React Project from Scratch"
Hashtags:        react, javascript, webdev, tutorial
Status:          Published
Created:         2026-01-27
```

### Post 3: Blog Link
```
Platform:        Twitter
Post Type:       Link
Link URL:        https://myblog.com/react-tips
Caption:         "10 React Tips That Will Make You a Better Developer"
Hashtags:        react, javascript, webdevelopment, tips
Status:          Published
Created:         2026-01-27
```

### Post 4: LinkedIn Text
```
Platform:        LinkedIn
Post Type:       Text
Content:         "Excited to announce that I've completed my web development certification!"
Caption:         "New Chapter"
Hashtags:        webdevelopment, learning, career, milestone
Status:          Published
Created:         2026-01-27
```

---

## 🖼️ **Frontend में कैसा दिखेगा?**

```
┌─────────────────────────────────┐
│  Instagram  📷 Image            │
├─────────────────────────────────┤
│                                 │
│    [Beautiful Image]            │
│    (जब hover करो तो zoom)       │
│                                 │
├─────────────────────────────────┤
│ Golden hour never disappoints! 🌅│
│                                 │
│ #sunset #nature #photography    │ ← Clickable
│ #goldenhour                     │
│                                 │
│ Jan 27, 2026                    │
│ View on Instagram →             │
└─────────────────────────────────┘
```

---

## 📌 **Important Tips**

### ✅ **Image Posts के लिए:**
- Square या landscape image best है
- Minimum 500px width
- JPG या PNG file format

### ✅ **Link Posts के लिए:**
- Full URL with https://
- Valid URL होना ज़रूरी है
- काम कर रहा link डालो

### ✅ **Video Posts के लिए:**
- YouTube embed URL format: `https://www.youtube.com/embed/VIDEO_ID`
- Direct video URL नहीं, embed URL
- Autoplay disabled

### ✅ **Hashtags:**
- Space से separate करो (# की ज़रूरत नहीं)
- Frontend पर automatically link बन जाएगा
- Instagram tag search खुलेगा

### ✅ **Caption:**
- यह main content है
- Emojis add कर सकते हो
- 1-2 lines में brief रखो

---

## 🔄 **Post Status**

```
Draft      → Save करो पर public नहीं दिखेगा
Scheduled  → Future date दो, उस दिन दिखेगा
Published  → फौरन frontend पर दिख जाएगा
```

---

## 🎯 **Quick Checklist**

अपने social post add करते समय:

- [ ] Platform select किया?
- [ ] Post Type select किया? (Image/Video/Link/Text/Story)
- [ ] Content add किया?
- [ ] Image/Video/Link URL add किया? (agar required ho)
- [ ] Caption लिखा?
- [ ] Hashtags add किए?
- [ ] Status = "Published"?
- [ ] "Publish" button दबाया?

---

## 🚀 **अब Frontend पर देखो:**

1. अपनी website खोलो
2. **"📰 Social Feed"** tab पर क्लिक करो
3. Filter करो platform से
4. Posts दिखेंगे! 🎉

---

## ⚠️ **Troubleshooting**

### Posts नहीं दिख रहे?
- ✓ Status "Published" है?
- ✓ Platform exists है?
- ✓ Browser cache clear किया?

### Images नहीं दिख रहे?
- ✓ Image upload हुई?
- ✓ File size बहुत बड़ी तो नहीं?
- ✓ Image format correct है?

### Links काम नहीं कर रहे?
- ✓ URL proper format में है?
- ✓ Link actual काम करता है?
- ✓ https:// लगाया?

---

## 💡 **Pro Tips**

1. **Multiple posts एक साथ add करो** - बेहतर feed
2. **Different platforms use करो** - variety दिखेगी
3. **Regular update करो** - feed alive रहेगा
4. **Hashtags wisely use करो** - discoverability बढ़ेगी
5. **Emojis add करो** - ज्यादा engaging दिखेगा

---

**Happy Posting! 🎉📱**
