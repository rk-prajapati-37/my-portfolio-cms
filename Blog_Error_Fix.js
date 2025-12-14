// ============================================
// QUICK FIX FOR YOUR BLOG ERROR
// ============================================

// Your current query (WRONG):
/*
const ALL_BLOGS_QUERY = `
  *[_type == "blog"] | order(date desc) {
    _id,
    title,
    excerpt,
    slug,
    date,
    "coverImage": coverImage.asset->url,  // ❌ WRONG SYNTAX
    category,
    tags,
    author
  }
`
*/

// ✅ CORRECTED QUERY - Replace with this:
export const ALL_BLOGS_QUERY = `
  *[_type == "blog"] | order(date desc) {
    _id,
    title,
    excerpt,
    slug,
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
    category,
    tags,
    author
  }
`

// ============================================
// HOW TO USE IN YOUR COMPONENT
// ============================================

// Replace your current fetchBlogs function with this:

const fetchBlogs = async () => {
  try {
    const data = await sanityClient.fetch(ALL_BLOGS_QUERY)
    setBlogs(data)
  } catch (error) {
    console.error('Error fetching blogs:', error)
    setError(error.message)
  }
}

// ============================================
// HOW TO DISPLAY COVER IMAGE
// ============================================

// Replace your current image display with this:

{blog.coverImage?.asset?.url && (
  <img
    src={blog.coverImage.asset.url}
    alt={blog.title}
    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
  />
)}

// ============================================
// FULL CORRECTED COMPONENT EXAMPLE
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
      setBlogs(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading blogs...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div style={{ padding: '20px' }}>
      {blogs.map(blog => (
        <div key={blog._id} style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd' }}>
          <h2>{blog.title}</h2>

          {/* FIXED: Correct image display */}
          {blog.coverImage?.asset?.url && (
            <img
              src={blog.coverImage.asset.url}
              alt={blog.title}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          )}

          <p><strong>Author:</strong> {blog.author || 'Unknown'}</p>
          <p><strong>Excerpt:</strong> {blog.excerpt}</p>

          {blog.category && blog.category.length > 0 && (
            <p><strong>Categories:</strong> {blog.category.join(', ')}</p>
          )}

          <p><strong>Date:</strong> {new Date(blog.date).toLocaleDateString()}</p>

          {blog.tags && blog.tags.length > 0 && (
            <p><strong>Tags:</strong> {blog.tags.join(', ')}</p>
          )}
        </div>
      ))}
    </div>
  )
}