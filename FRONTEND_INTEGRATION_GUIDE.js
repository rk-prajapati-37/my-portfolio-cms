// ============================================
// FRONTEND INTEGRATION GUIDE
// Apne dusre frontend project me ye use karo
// ============================================

// Step 1: Install Sanity client (agar nahi hai)
// npm install @sanity/client
// npm install @sanity/react-portable-text  // Rich text ke liye

// ============================================
// Step 2: Sanity client setup
// ============================================

import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'i8n8hd39', // Apne portfolio CMS ka project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01', // ✅ FIXED: Past date, not future 2025-11-01
})

// ============================================
// Step 3: GROQ Query to fetch project with social links
// ============================================

export const PROJECT_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    details, // Rich text content - Portable Text
    clientName,
    date,
    category[],
    techStack[],
    github,
    demo,
    image {
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
    extraImages[] {
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
    socialLinks[] {
      platform,
      url
    }
  }
`

// Alternative: Fetch all projects
export const ALL_PROJECTS_QUERY = `
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    clientName,
    image {
      asset -> { url },
      hotspot,
      crop
    },
    socialLinks[] {
      platform,
      url
    }
  }
`

// ============================================
// Step 4: React Hook to fetch data
// ============================================

import { useState, useEffect } from 'react'

export function useProjectData(slug) {
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProject() {
      try {
        const data = await sanityClient.fetch(PROJECT_QUERY, { slug })
        setProject(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchProject()
    }
  }, [slug])

  return { project, loading, error }
}

// ============================================
// Step 5: Social Links Component (copy ye bhi)
// ============================================

export function ProjectSocialLinks({ socialLinks }) {
  if (!socialLinks || socialLinks.length === 0) {
    return null
  }

  const getPlatformIcon = (platform) => {
    const icons = {
      youtube: '▶️',
      facebook: 'f',
      linkedin: 'in',
      twitter: '𝕏',
      instagram: '📷',
      tiktok: '🎵',
      other: '🔗',
    }
    return icons[platform] || '🔗'
  }

  return (
    <div className="social-links-container">
      <h3>Project Links</h3>
      <div className="social-links-grid">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link social-link-${link.platform}`}
            title={link.platform}
          >
            <span className="icon">{getPlatformIcon(link.platform)}</span>
            <span className="label">
              {link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
            </span>
          </a>
        ))}
      </div>

      <style jsx>{`
        .social-links-container {
          margin: 20px 0;
        }
        .social-links-container h3 {
          margin-bottom: 15px;
          font-size: 18px;
          font-weight: 600;
        }
        .social-links-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 8px;
          text-decoration: none;
          color: white;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .social-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .social-link .icon {
          font-size: 18px;
        }
        .social-link-youtube { background-color: #ff0000; }
        .social-link-youtube:hover { background-color: #cc0000; }
        .social-link-facebook { background-color: #1877f2; }
        .social-link-facebook:hover { background-color: #165ac9; }
        .social-link-linkedin { background-color: #0a66c2; }
        .social-link-linkedin:hover { background-color: #084698; }
        .social-link-twitter { background-color: #000000; }
        .social-link-twitter:hover { background-color: #333333; }
        .social-link-instagram {
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
        }
        .social-link-tiktok { background-color: #000000; }
        .social-link-tiktok:hover { background-color: #333333; }
        .social-link-other { background-color: #666666; }
        .social-link-other:hover { background-color: #555555; }
        @media (max-width: 640px) {
          .social-link {
            padding: 8px 12px;
            font-size: 14px;
          }
          .social-link .icon {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  )
}

// ============================================
// Step 6: Example Project Detail Page
// ============================================

export function ProjectDetailPage({ slug }) {
  const { project, loading, error } = useProjectData(slug)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!project) return <div>Project not found</div>

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>

      {/* Main Image */}
      {project.image && (
        <img
          src={project.image.asset.url}
          alt={project.title}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}

      {/* Description */}
      <p>{project.description}</p>

      {/* Details (Rich Text) */}
      {project.details && (
        <div className="project-details">
          <h2>Project Details</h2>
          {/* Proper way with PortableText */}
          {/* import { PortableText } from '@sanity/react-portable-text'
              <PortableText value={project.details} /> */}
          {/* Temporary fallback - replace with PortableText */}
          <div dangerouslySetInnerHTML={{ __html: project.details }} />
        </div>
      )}

      {/* Social Links - YE IMPORTANT HAI! */}
      <ProjectSocialLinks socialLinks={project.socialLinks} />

      {/* Project Metadata */}
      <div className="project-meta">
        {project.clientName && <p>Client: {project.clientName}</p>}
        {project.date && <p>Date: {project.date}</p>}
      </div>

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <div className="tech-stack">
          <h3>Tech Stack</h3>
          <ul>
            {project.techStack.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      {/* GitHub & Demo Links */}
      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>

      {/* Details (Rich Text) */}
      {project.details && (
        <div className="project-details">
          {/* Agar details Portable Text hai to @sanity/react-portable-text use karo */}
          {/* import { PortableText } from '@sanity/react-portable-text'
              <PortableText value={project.details} /> */}
        </div>
      )}

      {/* Extra Images */}
      {project.extraImages && project.extraImages.length > 0 && (
        <div className="extra-images">
          <h3>More Images</h3>
          <div className="images-grid">
            {project.extraImages.map((img, idx) => (
              <img
                key={idx}
                src={img.asset.url}
                alt={`${project.title} ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .project-detail {
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
        }
        .project-meta {
          color: #666;
          font-size: 14px;
          margin: 20px 0;
        }
        .tech-stack {
          margin: 30px 0;
        }
        .project-links {
          display: flex;
          gap: 15px;
          margin: 20px 0;
        }
        .project-links a {
          padding: 10px 20px;
          background: #333;
          color: white;
          text-decoration: none;
          border-radius: 5px;
        }
        .project-links a:hover {
          background: #555;
        }
        .extra-images {
          margin: 30px 0;
        }
        .images-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }
        .images-grid img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
      `}</style>
    </div>
  )
}

// ============================================
// BLOG INTEGRATION
// ============================================

// GROQ Query to fetch blog with details
export const BLOG_QUERY = `
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    author, // Author name
    excerpt,
    category[], // Array of category strings
    details, // Rich text content - Portable Text
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
// CORRECTED BLOG QUERIES - Frontend me ye use karo
// ============================================

// ✅ CORRECT: Fetch all blogs (ye syntax use karo)
export const ALL_BLOGS_QUERY = `
  *[_type == "blog"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
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

// React Hook to fetch blog data
export function useBlogData(slug) {
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchBlog() {
      try {
        const data = await sanityClient.fetch(BLOG_QUERY, { slug })
        setBlog(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchBlog()
    }
  }, [slug])

  return { blog, loading, error }
}

// Blog Detail Page Component
export function BlogDetailPage({ slug }) {
  const { blog, loading, error } = useBlogData(slug)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!blog) return <div>Blog not found</div>

  return (
    <div className="blog-detail-page">
      <h1>{blog.title}</h1>

      {/* Author */}
      {blog.author && (
        <p className="author">By {blog.author}</p>
      )}

      {blog.coverImage && (
        <img
          src={blog.coverImage.asset.url}
          alt={blog.title}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}

      <p className="excerpt">{blog.excerpt}</p>

      {/* Category */}
      {blog.category && blog.category.length > 0 && (
        <div className="blog-category">
          <h3>Category:</h3>
          <div className="categories">
            {blog.category.map((cat, index) => (
              <span key={index} className="category-tag">
                {cat}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Detailed Info - Portable Text */}
      {blog.details && (
        <div className="blog-details">
          <h2>Additional Details</h2>
          {/* Replace with your PortableText component */}
          <PortableText value={blog.details} />
        </div>
      )}

      <div className="blog-meta">
        <p>Published: {new Date(blog.date).toLocaleDateString()}</p>
        {blog.tags && blog.tags.length > 0 && (
          <div>
            <h3>Tags:</h3>
            <div className="tags">
              {blog.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .blog-detail-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .author {
          font-size: 16px;
          color: #666;
          margin: 10px 0;
          font-style: italic;
        }
        .excerpt {
          font-size: 18px;
          color: #666;
          margin: 20px 0;
          font-style: italic;
        }
        .blog-category {
          margin: 20px 0;
        }
        .categories {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }
        .category-tag {
          background: #007acc;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
        }
        .blog-details {
          margin: 30px 0;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 8px;
        }
        .blog-meta {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }
        .tag {
          background: #007acc;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
        }
      `}</style>
    </div>
  )
}

// ============================================
// USAGE IN YOUR FRONTEND
// ============================================

// Example: pages/projects/[slug].js (Next.js)
//
// import { ProjectDetailPage } from '@/lib/sanity'
// import { useRouter } from 'next/router'
//
// export default function ProjectPage() {
//   const router = useRouter()
//   const { slug } = router.query
//   return <ProjectDetailPage slug={slug} />
// }

// Example: pages/blog/[slug].js (Next.js)
//
// import { BlogDetailPage } from '@/lib/sanity'
// import { useRouter } from 'next/router'
//
// export default function BlogPage() {
//   const router = useRouter()
//   const { slug } = router.query
//   return <BlogDetailPage slug={slug} />
// }
