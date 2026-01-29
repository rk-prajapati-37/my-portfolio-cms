# ✅ Fields Not Showing? - Quick Fix Guide

## 🎯 Problem: Fields Display का Verification

अगर fields नहीं दिख रहे हैं, तो ये कारण हो सकते हैं:

### Possible Reasons:
1. ❌ CMS में कोई data add नहीं है
2. ❌ Status "Published" नहीं है
3. ❌ Query में fields नहीं आ रहे
4. ❌ Component render नहीं हो रहा

---

## ✅ Step-by-Step Verification

### Step 1: Check CMS Data Exists
```
1. Open Sanity Studio (http://localhost:3333)
2. Go to "Social Posts" section
3. Check if कोई posts हैं
4. अगर नहीं हैं → Create करो (नीचे देखो)
```

### Step 2: Verify Status is "Published"
```
CMS में post के लिए:
  Status: "Published" ✅ (not Draft or Scheduled)
```

### Step 3: Check Frontend URL
```
Frontend app के लिए सही URL:
  http://localhost:3000 (or जो port आप use कर रहे हो)
```

### Step 4: Open DevTools
```
Browser में:
  F12 → Console tab
  देखो कि कोई error आ रहा है या नहीं
```

---

## 🆕 How to Add Test Data to CMS

### Method 1: Sanity Studio UI (Easiest)

#### Step 1: Open CMS
```
URL: http://localhost:3333
```

#### Step 2: Create New Post
```
1. Click "Social Posts" in sidebar
2. Click "Create New" button
3. Fill the form:

   PLATFORM: (select from dropdown)
   └─ Choose: Instagram, Facebook, Twitter, etc.

   TITLE: (fill this)
   └─ Example: "Amazing Photography! 📸"

   FEATURED IMAGE: (upload)
   └─ Upload any image

   POST TYPE: (select)
   └─ Choose: Text, Image, Video, Link, Story

   CONTENT: (write)
   └─ Example: "Beautiful sunset captured..."

   CAPTION: (write)
   └─ Example: "Golden hour magic!"

   HASHTAGS: (add tags)
   └─ Example: #sunset #photography #nature

   STATUS: (MUST BE "Published")
   └─ Select: "published" (NOT draft)

   SCHEDULED DATE/TIME: (optional)
   └─ Leave empty for now

4. Click "Save"
```

#### Step 3: View in Frontend
```
Go to: http://localhost:3000
Scroll to Social Media Feed section
देखो सभी fields display हो रहे हैं!
```

---

## 📊 All 10 Fields Display Checklist

जब post create करो, ये सभी fields दिखने चाहिए:

### Post Card में दिखना चाहिए:
```
✅ 1. Platform Badge         (Red badge - top left)
✅ 2. Post Type Badge        (Colored badge - top right)
✅ 3. Featured Image         (Main large image)
✅ 4. Title                  (Red text - NEW!)
✅ 5. Caption                (Bold text)
✅ 6. Content                (Gray description)
✅ 7. Hashtags               (Clickable tags)
✅ 8. Status                 (Color badge in grid)
✅ 9. Created At             (Date in grid)
✅ 10. Scheduled Date/Time   (If set - yellow box)
✅ 11. External Link         (If link post - blue box)
```

---

## 🎨 Visual Verification

जब सब कुछ ठीक हो, post कुछ ऐसा दिखेगा:

```
╔═══════════════════════════════════════╗
║                                       ║
║     [FEATURED IMAGE - LARGE]          ║
║                                       ║
║  [🔴 INSTAGRAM] [📷 IMAGE]           ║
║                                       ║
╠═══════════════════════════════════════╣
║                                       ║
║  📝 Amazing Photography! 📸 (RED)    ║ ← Field 4
║                                       ║
║  Golden hour magic!                   ║ ← Field 5
║  Beautiful sunset captured...         ║ ← Field 6
║                                       ║
║  #sunset #photography #nature        ║ ← Field 7
║                                       ║
╠═══════════════════════════════════════╣
║                                       ║
║  📱 Instagram  │ 📝 Image            ║ ← Field 1, 2
║  ✅ Published  │ 📅 Jan 29, 2026     ║ ← Field 8, 9
║                                       ║
║     [View on Instagram →]             ║
║                                       ║
╚═══════════════════════════════════════╝
```

---

## 🔧 Troubleshooting

### Issue 1: "No Posts Found"
```
✓ Check: CMS में posts हैं?
✓ Check: Status = "Published"?
✓ Check: Server चल रहा है?
✓ Solution: Refresh browser (Ctrl+R)
```

### Issue 2: Fields Partially Showing
```
✓ Check: Featured image uploaded है?
✓ Check: Post title filled है?
✓ Check: Hashtags added हैं?
✓ Solution: Complete करके re-save करो
```

### Issue 3: No Data At All
```
✓ Solution 1: CMS में नया post add करो
✓ Solution 2: npm run dev को restart करो
✓ Solution 3: Browser cache clear करो (Ctrl+Shift+Del)
```

---

## 📝 Complete Test Post Example

### Copy-Paste Format:

```javascript
{
  // Required Fields
  platform: "instagram",           // Choice
  postType: "image",              // Choice: text/image/video/link/story
  status: "published",             // MUST BE THIS!

  // Main Fields
  title: "My Amazing Photography! 📸",
  caption: "Golden hour never disappoints!",
  content: "Captured this beautiful sunset while exploring nature trails.",
  
  // Media
  featuredImage: "[Upload image]",
  image: "[Upload image]",
  
  // Optional
  hashtags: ["photography", "sunset", "nature"],
  linkUrl: null,                   // For link posts only
  
  // Automatic
  createdAt: "[Auto-filled]",
  scheduledDate: null              // Optional
}
```

---

## ✅ Verification Steps (हिंदी में)

### Step 1: CMS Open करो
```
1. Browser में जाओ: http://localhost:3333
2. देखो "Social Posts" section
```

### Step 2: Post Create करो
```
1. Click: "Create New"
2. Fill: सभी fields
3. Status: "Published" करो
4. Save करो
```

### Step 3: Frontend Check करो
```
1. Browser में जाओ: http://localhost:3000
2. Social feed section देखो
3. सभी fields visible हैं?
```

### Step 4: Fields Verify करो
```
✅ Red title दिखा?
✅ Image दिख रही है?
✅ Hashtags clickable हैं?
✅ Status badge दिख रहा है?
✅ Date format सही है?
✅ Link दिख रहा है?
```

---

## 🎯 Quick Checklist

```
CMS Setup:
  ☐ Sanity Studio खुला है
  ☐ Social Posts section आ रहा है
  ☐ Create New button काम कर रहा है

Post Creation:
  ☐ Platform select किया
  ☐ Post Type select किया
  ☐ Title fill किया
  ☐ Featured Image upload किया
  ☐ Content लिखा
  ☐ Hashtags add किए
  ☐ Status = "Published" set किया
  ☐ Save किया

Frontend Display:
  ☐ Post card visible है
  ☐ सभी fields दिख रहे हैं
  ☐ Images load हो रही हैं
  ☐ Colors सही हैं
  ☐ Mobile पर भी काम कर रहा है
```

---

## 📞 Still Not Working?

अगर अभी भी fields नहीं दिख रहे:

### Option 1: Check Console Errors
```
1. Press: F12
2. Go to: Console tab
3. देखो कोई red error है?
4. Error को fix करो
```

### Option 2: Restart Everything
```
1. Kill dev server: Ctrl+C
2. Clear cache: npm cache clean --force
3. Restart: npm run dev
4. Try again
```

### Option 3: Check Data Query
```
Query file: src/lib/sanity.js
Check: सभी fields query में आ रहे हैं?
```

---

## ✨ Expected Result

सब कुछ ठीक होने पर:

```
✅ Post card दिख रहा है
✅ All 10 fields visible हैं
✅ Design professional लग रहा है
✅ Mobile responsive काम कर रहा है
✅ Links काम कर रहे हैं
✅ Colors सही हैं
✅ No errors in console
✅ Everything working perfectly!
```

---

**Quick Fix Guide**
**Version**: 2.0
**Last Updated**: January 29, 2026
