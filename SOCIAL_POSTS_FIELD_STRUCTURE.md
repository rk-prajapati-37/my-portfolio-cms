# 📊 Social Posts - Complete Field Structure & Display

## Schema Structure (Backend)

```
┌─────────────────────────────────────────────────────┐
│         SOCIAL MEDIA POST DOCUMENT                  │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ✅ Platform (Required)                            │
│     ↳ Reference → socialMedia collection           │
│     ↳ Examples: Instagram, Facebook, Twitter       │
│                                                     │
│  📝 Title (New Field!)                             │
│     ↳ String type                                   │
│     ↳ Optional, displayed in red                   │
│     ↳ Examples: "New Feature!", "Check This!"      │
│                                                     │
│  🖼️ Featured Image (Post Thumbnail)               │
│     ↳ Image with hotspot                           │
│     ↳ Works for ALL post types                     │
│     ↳ Displays in card preview                     │
│                                                     │
│  ✅ Post Type (Required)                           │
│     ├─ 📝 Text                                     │
│     ├─ 📷 Image                                    │
│     ├─ 🎥 Video                                    │
│     ├─ 🔗 Link                                     │
│     └─ ✨ Story                                    │
│                                                     │
│  📄 Content                                         │
│     ↳ Text area (4 rows)                           │
│     ↳ Main post description                        │
│     ↳ Shows in card                                │
│                                                     │
│  🔗 External Links (Conditional)                   │
│     ├─ Image URL (Image posts)                     │
│     ├─ Video URL (Video posts)                     │
│     └─ Link URL (Link posts)                       │
│                                                     │
│  📝 Caption                                         │
│     ↳ Text area (3 rows)                           │
│     ↳ Post caption/headline                        │
│     ↳ Shows in card                                │
│                                                     │
│  #️⃣ Hashtags                                       │
│     ↳ Array of strings (tag layout)                │
│     ↳ Auto-linked to search                        │
│     ↳ Shows as clickable tags                      │
│                                                     │
│  ⏰ Scheduled Date/Time                            │
│     ↳ DateTime picker                              │
│     ↳ For future scheduled posts                   │
│     ↳ Shows in yellow box if set                   │
│                                                     │
│  ✅ Status                                         │
│     ├─ 🟢 Published (Live)                        │
│     ├─ 🟡 Scheduled (Future)                      │
│     └─ ⚪ Draft (Not visible)                      │
│                                                     │
│  📅 Created At (Auto)                              │
│     ↳ DateTime (auto-filled)                       │
│     ↳ Current timestamp                            │
│     ↳ Shows formatted date                         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Frontend Display Layout

```
┌─────────────────────────────────────────────────────────────┐
│                    SOCIAL POSTS FEED                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Platform Filter:                                           │
│  [📊 All Posts] [Instagram] [Facebook] [Twitter] [YouTube] │
│                                                             │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │  POST CARD 1         │  │  POST CARD 2         │        │
│  ├──────────────────────┤  ├──────────────────────┤        │
│  │                      │  │                      │        │
│  │  [FEATURED IMAGE]    │  │  [FEATURED IMAGE]    │        │
│  │                      │  │                      │        │
│  │ [Platform] [Type]    │  │ [Platform] [Type]    │        │
│  ├──────────────────────┤  ├──────────────────────┤        │
│  │                      │  │                      │        │
│  │ Title (Red Text)     │  │ Title (Red Text)     │        │
│  │ Caption (Bold)       │  │ Caption (Bold)       │        │
│  │ Content (Gray)       │  │ Content (Gray)       │        │
│  │                      │  │                      │        │
│  │ 🔗 Link Section      │  │ 🔗 Link Section      │        │
│  │                      │  │                      │        │
│  │ #tag1 #tag2 #tag3   │  │ #tag1 #tag2 #tag3   │        │
│  │ +2 more              │  │ +2 more              │        │
│  │                      │  │                      │        │
│  │ ┌──────────────────┐ │  │ ┌──────────────────┐ │        │
│  │ │📱 Instagram │📝 │ │  │ │📱 Facebook  │🎥 │ │        │
│  │ │✅Published  │📅 │ │  │ │✅Scheduled  │📅 │ │        │
│  │ │             Jan29  │  │ │             Jan30 │        │
│  │ │                   │ │  │ │                  │ │        │
│  │ │⏰ Feb 15 10:30 AM  │ │  │ │No Scheduled Time  │ │        │
│  │ └──────────────────┘ │  │ └──────────────────┘ │        │
│  │                      │  │                      │        │
│  │ [View on Instagram]  │  │ [View on Facebook]  │        │
│  └──────────────────────┘  └──────────────────────┘        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Field Display Mapping

```
┌─────────────────────────────────────────────────────────┐
│  BACKEND FIELD              FRONTEND DISPLAY            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Platform ────────────→  [🔴 INSTAGRAM Badge]           │
│  PostType ────────────→  [📷 IMAGE Badge]               │
│  FeaturedImage ───────→  [Main Card Image]              │
│                                                         │
│  Title ───────────────→  📝 Red Subtitle               │
│  Caption ─────────────→  Bold Heading (Large)           │
│  Content ─────────────→  Description (Gray, Smaller)    │
│                                                         │
│  LinkUrl ─────────────→  [🔗 Blue Link Box]             │
│  Hashtags ────────────→  [#tag1] [#tag2] [#tag3]        │
│                                                         │
│  Status ──────────────→  [🟢 Published Badge]           │
│  CreatedAt ───────────→  📅 Date Grid                   │
│  ScheduledDate ───────→  [⏰ Yellow Schedule Box]       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Post Type-Specific Rendering

### 📷 IMAGE POST
```
┌──────────────────────────────┐
│                              │
│   Featured/Post Image        │
│   (Full Size with Hover)     │
│                              │
└──────────────────────────────┘
Fields Used:
  • featuredImage (priority)
  • image (fallback)
```

### 🎥 VIDEO POST
```
┌──────────────────────────────┐
│                              │
│   Video Thumbnail            │
│   [▶️ Play Button Overlay]   │
│                              │
└──────────────────────────────┘
Fields Used:
  • featuredImage (priority)
  • videoUrl (embedded if available)
```

### 🔗 LINK POST
```
┌──────────────────────────────┐
│   Gradient Background        │
│   [🔗 Icon]                  │
│   Caption Text               │
│   External Link URL Display  │
└──────────────────────────────┘
Fields Used:
  • featuredImage (background opacity)
  • linkUrl (displayed and clickable)
  • caption
```

### 📝 TEXT POST
```
┌──────────────────────────────┐
│   Gradient Background        │
│   [📝 Icon]                  │
│   Content Text (Large)       │
│                              │
└──────────────────────────────┘
Fields Used:
  • featuredImage (background opacity)
  • content
```

### ✨ STORY POST
```
┌──────────────────────────────┐
│                              │
│   Featured Image             │
│   (Story Format)             │
│                              │
└──────────────────────────────┘
Fields Used:
  • featuredImage (priority)
```

---

## Query Fields Sent to Frontend

```javascript
{
  _id: string,
  postType: "image" | "video" | "link" | "text" | "story",
  content: string,
  caption: string,
  title: string,                    // NEW!
  featuredImage: image asset,
  image: image asset,
  videoUrl: string,
  linkUrl: string,
  hashtags: string[],
  status: "draft" | "scheduled" | "published",
  createdAt: datetime,
  scheduledDate: datetime,           // NEW in query!
  platform: {
    platform: string,
    url: string
  }
}
```

---

## Filter & Display Logic

```
┌─────────────────────────────────┐
│   Fetch Published Posts Only    │
│   (status == "published")       │
└─────────────────────────────────┘
                │
                ▼
┌─────────────────────────────────┐
│   Sort by CreatedAt (Newest)    │
└─────────────────────────────────┘
                │
                ▼
┌─────────────────────────────────┐
│   User Selects Platform Filter  │
├─────────────────────────────────┤
│   ✓ All Posts                   │
│   ✓ Filter by Platform          │
│   ✓ Show 2-Column Grid          │
└─────────────────────────────────┘
                │
                ▼
┌─────────────────────────────────┐
│   Render Post Cards             │
│   • All 10 Fields Displayed     │
│   • Responsive Layout           │
│   • Interactive Elements        │
└─────────────────────────────────┘
```

---

## Data Flow Visualization

```
CMS (Sanity Studio)
    │
    ├─ Input All Fields:
    │  ├─ Platform ✅
    │  ├─ Title 📝
    │  ├─ Featured Image 🖼️
    │  ├─ Post Type 📋
    │  ├─ Content 📄
    │  ├─ Link/URL 🔗
    │  ├─ Hashtags #️⃣
    │  ├─ Scheduled Date ⏰
    │  ├─ Status ✅
    │  └─ Created At 📅
    │
    ▼
Database (Sanity Backend)
    │
    ├─ Store All 10 Fields
    ├─ Auto-fill Created At
    ├─ Index by Platform
    └─ Index by CreatedAt
    │
    ▼
API Query
    │
    ├─ Fetch: status == "published"
    ├─ Order: createdAt DESC
    └─ Include: All fields
    │
    ▼
Frontend React Component
    │
    ├─ Display Grid Layout
    ├─ Render Each Field:
    │  ├─ Platform Badge
    │  ├─ Post Title (red)
    │  ├─ Caption (bold)
    │  ├─ Content (gray)
    │  ├─ External Link
    │  ├─ Hashtags (clickable)
    │  ├─ Post Type Icon
    │  ├─ Status Badge
    │  ├─ Created Date
    │  └─ Scheduled Date (if set)
    │
    ▼
User Views Complete Posts
```

---

## CSS Classes & Styling

```javascript
// Platform Badge
"bg-red-600 text-white text-xs px-3 py-1 rounded-full"

// Post Type Badge
"bg-{color}-600 text-white text-xs px-3 py-1 rounded-full"
// Colors: blue (image), purple (video), green (link), yellow (text), orange (story)

// Title (Red)
"text-lg font-bold text-red-600 mb-2 line-clamp-1"

// Caption (Bold)
"text-xl font-bold text-gray-900 mb-3 line-clamp-2"

// Content (Gray)
"text-gray-700 text-sm mb-4 line-clamp-3"

// Link Box
"mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200"

// Hashtag
"bg-gray-100 hover:bg-red-100 text-gray-700 hover:text-red-700"

// Status Badge
"bg-green-100 text-green-700" (Published)
"bg-yellow-100 text-yellow-700" (Scheduled)
"bg-gray-100 text-gray-700" (Draft)

// Details Grid
"grid grid-cols-2 gap-3 mb-4 py-4 border-t border-gray-200"

// Scheduled Box
"mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200"
```

---

**Complete Field Documentation**
**Version**: 2.0 - All 10 Fields
**Last Updated**: January 29, 2024
