// ============================================
// 🚨 BLOG ERROR FIX - IMMEDIATE SOLUTION
// ============================================

// The error shows your frontend is still using the OLD configuration!
// Update your frontend with these EXACT settings:

// 1. ✅ CORRECTED Sanity Client Configuration
import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'i8n8hd39',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01', // ❌ OLD: '2023-05-03' - ✅ NEW: '2024-01-01'
})

// 2. ✅ CORRECTED Blog Query (the main fix!)
export const ALL_BLOGS_QUERY = `
  *[_type == "blog"] | order(date desc) {
    _id,
    title,
    excerpt,
    "slug": slug.current,  // ❌ OLD: slug - ✅ NEW: "slug": slug.current
    date,
    coverImage {
      asset -> {
        url,
        metadata {
          dimensions {
            height,
            width
          }
        }
      },
      hotspot,
      crop
    },
    category[],  // ✅ Ensure arrays
    tags[],      // ✅ Ensure arrays
    author
  }
`

// 3. ✅ CORRECTED Single Blog Query
export const BLOG_QUERY = `
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    excerpt,
    "slug": slug.current,  // ❌ OLD: slug - ✅ NEW: "slug": slug.current
    date,
    details,
    coverImage {
      asset -> {
        url,
        metadata {
          dimensions {
            height,
            width
          }
        }
      },
      hotspot,
      crop
    },
    category[],
    tags[],
    author
  }
`

// ============================================
// 🚨 WHAT'S WRONG IN YOUR CURRENT SETUP
// ============================================

/*
❌ CURRENT (BROKEN):
- apiVersion: '2023-05-03' (might work but let's use newer)
- slug (returns object {current: "my-blog-slug"} instead of string "my-blog-slug")
- This causes routing and display issues

✅ FIXED:
- apiVersion: '2024-01-01' (recommended)
- "slug": slug.current (returns string "my-blog-slug")
- Proper array syntax for category[] and tags[]
*/

// ============================================
// 🔧 IMMEDIATE ACTION REQUIRED
// ============================================

/*
1. Copy the sanityClient configuration above to your frontend
2. Replace your current ALL_BLOGS_QUERY with the corrected one
3. Update apiVersion from '2023-05-03' to '2024-01-01'
4. Change 'slug,' to '"slug": slug.current,' in your queries
5. Redeploy your frontend
6. Test: https://r-k-prajapati-portfolio.vercel.app/blog
*/

// ============================================
// 🧪 TEST YOUR FIX
// ============================================

// Add this to your blog component to debug:
console.log('Blog data:', blogs) // Should show slug as string, not object

// Expected result for each blog:
// {
//   _id: "...",
//   title: "My Blog Post",
//   slug: "my-blog-post",  // ✅ String, not {current: "my-blog-post"}
//   excerpt: "...",
//   date: "2025-12-15",
//   coverImage: { asset: { url: "..." } },
//   category: ["tech", "web"], // ✅ Array
//   tags: ["react", "nextjs"], // ✅ Array
//   author: "Your Name"
// }

export { ALL_BLOGS_QUERY, BLOG_QUERY }