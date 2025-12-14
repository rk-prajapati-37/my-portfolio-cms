// ============================================
// CORRECTED BLOG QUERIES FOR YOUR FRONTEND
// ============================================

// Replace your current queries with these corrected ones

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
// USAGE IN YOUR FRONTEND COMPONENT
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
      console.log('Blogs data:', data) // Check console
      setBlogs(data)
    } catch (err) {
      console.error('Error fetching blogs:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading blogs...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      {blogs.map(blog => (
        <article key={blog._id}>
          <h2>{blog.title}</h2>

          {/* Cover Image - Corrected */}
          {blog.coverImage?.asset?.url && (
            <img
              src={blog.coverImage.asset.url}
              alt={blog.title}
              style={{ width: '100%', height: 'auto' }}
            />
          )}

          {/* Author */}
          {blog.author && <p>By {blog.author}</p>}

          {/* Excerpt */}
          <p>{blog.excerpt}</p>

          {/* Categories */}
          {blog.category && blog.category.length > 0 && (
            <div>
              <strong>Categories:</strong>
              {blog.category.map(cat => (
                <span key={cat} style={{
                  background: '#007acc',
                  color: 'white',
                  padding: '4px 8px',
                  margin: '2px'
                }}>
                  {cat}
                </span>
              ))}
            </div>
          )}

          {/* Date */}
          <p>Published: {new Date(blog.date).toLocaleDateString()}</p>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <p>Tags: {blog.tags.join(', ')}</p>
          )}
        </article>
      ))}
    </div>
  )
}