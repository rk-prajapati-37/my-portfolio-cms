import React from 'react'

// Example usage in your blog detail page
export default function BlogDetail({ blog }) {
  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>

      {/* Author */}
      {blog.author && (
        <p className="author">By {blog.author}</p>
      )}

      {/* Cover image */}
      {blog.coverImage && (
        <img src={blog.coverImage} alt={blog.title} />
      )}

      {/* Excerpt */}
      <p className="excerpt">{blog.excerpt}</p>

      {/* Category */}
      {blog.category && blog.category.length > 0 && (
        <div className="blog-category">
          <h3>Category:</h3>
          <div className="categories">
            {blog.category.map((cat, idx) => (
              <span key={idx} className="category-tag">{cat}</span>
            ))}
          </div>
        </div>
      )}

      {/* Detailed Info (Rich Text) */}
      {blog.details && (
        <div className="blog-details">
          <h2>Additional Details</h2>
          {/* For Portable Text, you'll need @sanity/react-portable-text */}
          {/* <PortableText value={blog.details} /> */}
          {/* For now, showing as plain text - replace with PortableText component */}
          <div dangerouslySetInnerHTML={{ __html: blog.details }} />
        </div>
      )}

      {/* Rest of your content */}
      <div className="blog-meta">
        <p>Published: {new Date(blog.date).toLocaleDateString()}</p>
        {blog.tags && (
          <div>
            <h3>Tags:</h3>
            <ul>
              {blog.tags.map((tag, idx) => (
                <li key={idx}>{tag}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

// Sanity se fetch karte waqt ye query use karo:
// *[_type == "blog"]{
//   _id,
//   title,
//   slug,
//   author, // Author name
//   excerpt,
//   category[], // Array of category strings
//   details, // Rich text content
//   coverImage,
//   date,
//   tags
// }