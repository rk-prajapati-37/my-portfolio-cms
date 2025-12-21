// ============================================
// BLOG ERROR FIX - Complete Solution
// ============================================

// ❌ PROBLEM: Your frontend is using WRONG GROQ syntax
// ✅ SOLUTION: Use the corrected queries below

// ============================================
// 1. CORRECT SANITY CLIENT SETUP
// ============================================

import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'i8n8hd39',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03', // ✅ Use this version, not 2025-11-01
})

// ============================================
// 2. CORRECTED BLOG QUERIES
// ============================================

// ✅ CORRECT: Fetch all blogs
export const ALL_BLOGS_QUERY = `
  *[_type == "blog"] | order(date desc) {
    _id,
    title,
    slug,
    author,
    excerpt,
    category[],
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
    date,
    tags[]
  }
`

// ✅ CORRECT: Fetch single blog
export const BLOG_QUERY = `
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    excerpt,
    category[],
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
    date,
    tags[]
  }
`

// ============================================
// 3. CORRECTED COMPONENT CODE
// ============================================

import { useState, useEffect } from 'react'
import { sanityClient } from './sanityClient'

export default function BlogList() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const data = await sanityClient.fetch(ALL_BLOGS_QUERY)
      console.log('✅ Blogs loaded successfully:', data)
      setBlogs(data)
    } catch (err) {
      console.error('❌ Error fetching blogs:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading blogs...</div>
  if (error) return <div>Error loading blogs: {error}</div>

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>My Blogs</h1>

      {blogs.length === 0 ? (
        <p>No blogs found. Create some in Sanity Studio!</p>
      ) : (
        blogs.map(blog => (
          <article key={blog._id} style={{
            margin: '30px 0',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px'
          }}>
            <h2>{blog.title}</h2>

            {/* ✅ CORRECT: Cover Image Display */}
            {blog.coverImage?.asset?.url && (
              <img
                src={blog.coverImage.asset.url}
                alt={blog.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  margin: '15px 0'
                }}
              />
            )}

            {/* Author */}
            {blog.author && (
              <p style={{ fontStyle: 'italic', color: '#666' }}>
                By {blog.author}
              </p>
            )}

            {/* Excerpt */}
            {blog.excerpt && (
              <p style={{ margin: '15px 0', lineHeight: '1.6' }}>
                {blog.excerpt}
              </p>
            )}

            {/* Categories */}
            {blog.category && blog.category.length > 0 && (
              <div style={{ margin: '15px 0' }}>
                <strong>Categories:</strong>
                <div style={{ marginTop: '5px' }}>
                  {blog.category.map((cat, index) => (
                    <span key={index} style={{
                      background: '#007acc',
                      color: 'white',
                      padding: '4px 8px',
                      margin: '2px 4px 2px 0',
                      borderRadius: '12px',
                      fontSize: '14px'
                    }}>
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Date */}
            <p style={{ color: '#666', fontSize: '14px' }}>
              Published: {new Date(blog.date).toLocaleDateString()}
            </p>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <p style={{ color: '#666', fontSize: '14px' }}>
                Tags: {blog.tags.join(', ')}
              </p>
            )}
          </article>
        ))
      )}
    </div>
  )
}

// ============================================
// 4. WHAT WAS WRONG IN YOUR CODE
// ============================================

/*
// ❌ WRONG: This syntax causes the error
"coverImage": coverImage.asset->url

// ✅ CORRECT: Use this syntax instead
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
}
*/

// ============================================
// 5. TESTING THE FIX
// ============================================

// 1. Replace your sanityClient with the correct API version
// 2. Replace your ALL_BLOGS_QUERY with the corrected one above
// 3. Update your image display code
// 4. Test in browser - error should be gone!

export { sanityClient, ALL_BLOGS_QUERY, BLOG_QUERY }