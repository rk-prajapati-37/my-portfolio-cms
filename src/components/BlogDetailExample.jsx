import React from 'react'
import { PortableText, PortableTextComponents } from '@portabletext/react'

// Custom components for Portable Text
const portableTextComponents = {
  types: {
    image: ({ value }) => {
      const { asset, alt, caption, size, alignment } = value
      const imageUrl = asset?.url

      if (!imageUrl) return null

      // Size classes
      const sizeClasses = {
        xs: 'w-1/4',
        small: 'w-1/3',
        medium: 'w-1/2',
        large: 'w-2/3',
        xl: 'w-5/6',
        full: 'w-full'
      }

      // Alignment classes
      const alignmentClasses = {
        left: 'float-left mr-4 mb-4',
        center: 'mx-auto block',
        right: 'float-right ml-4 mb-4',
        full: 'w-full',
        'inline-left': 'inline-block mr-4 align-middle',
        'inline-right': 'inline-block ml-4 align-middle'
      }

      // Position classes for text flow
      const positionClasses = {
        normal: '',
        wrap: 'clear-none',
        break: 'clear-both'
      }

      const sizeClass = sizeClasses[size] || 'w-full'
      const alignClass = alignmentClasses[alignment] || 'block'
      const positionClass = positionClasses[value.position] || ''

      return (
        <figure className={`${sizeClass} ${alignClass} ${positionClass} my-4`}>
          <img
            src={imageUrl}
            alt={alt || ''}
            className="rounded-lg shadow-md"
          />
          {caption && (
            <figcaption className="text-sm text-gray-600 mt-2 text-center italic">
              {caption}
            </figcaption>
          )}
        </figure>
      )
    }
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u className="underline">{children}</u>,
    'strike-through': ({ children }) => <s className="line-through">{children}</s>,
    code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>,
    sup: ({ children }) => <sup className="text-xs align-super">{children}</sup>,
    sub: ({ children }) => <sub className="text-xs align-sub">{children}</sub>,
    link: ({ value, children }) => (
      <a href={value.href} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    color: ({ value, children }) => (
      <span style={{ color: value.color }}>{children}</span>
    )
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-6 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-4 mb-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-semibold mt-4 mb-2">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-semibold mt-3 mb-2">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-semibold mt-3 mb-2">{children}</h6>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-700">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
        <code className="text-sm font-mono">{children}</code>
      </pre>
    )
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside mb-4 ml-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside mb-4 ml-4">{children}</ol>,
    square: ({ children }) => <ul className="list-square list-inside mb-4 ml-4">{children}</ul>,
    'lower-alpha': ({ children }) => <ol className="list-[lower-alpha] list-inside mb-4 ml-4">{children}</ol>,
    'upper-alpha': ({ children }) => <ol className="list-[upper-alpha] list-inside mb-4 ml-4">{children}</ol>,
    'lower-roman': ({ children }) => <ol className="list-[lower-roman] list-inside mb-4 ml-4">{children}</ol>,
    'upper-roman': ({ children }) => <ol className="list-[upper-roman] list-inside mb-4 ml-4">{children}</ol>
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
    square: ({ children }) => <li className="mb-1">{children}</li>,
    'lower-alpha': ({ children }) => <li className="mb-1">{children}</li>,
    'upper-alpha': ({ children }) => <li className="mb-1">{children}</li>,
    'lower-roman': ({ children }) => <li className="mb-1">{children}</li>,
    'upper-roman': ({ children }) => <li className="mb-1">{children}</li>
  }
}

// Example usage in your blog detail page
export default function BlogDetail({ blog }) {
  return (
    <div className="blog-detail max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      {/* Author */}
      {blog.author && (
        <p className="author text-gray-600 mb-2">By {blog.author}</p>
      )}

      {/* Cover image */}
      {blog.coverImage && blog.coverImage.asset && (
        <img
          src={blog.coverImage.asset.url}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}

      {/* Excerpt */}
      <p className="excerpt text-lg text-gray-700 mb-6">{blog.excerpt}</p>

      {/* Category */}
      {blog.category && blog.category.length > 0 && (
        <div className="blog-category mb-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Category:</h3>
          <div className="categories flex flex-wrap gap-2">
            {blog.category.map((cat, idx) => (
              <span key={idx} className="category-tag bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                {cat}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Detailed Info (Rich Text) */}
      {blog.details && (
        <div className="blog-details prose prose-lg max-w-none">
          <PortableText value={blog.details} components={portableTextComponents} />
        </div>
      )}

      {/* Rest of your content */}
      <div className="blog-meta mt-8 pt-8 border-t border-gray-200">
        <p className="text-gray-600">Published: {new Date(blog.date).toLocaleDateString()}</p>
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Tags:</h3>
            <ul className="flex flex-wrap gap-2">
              {blog.tags.map((tag, idx) => (
                <li key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {tag}
                </li>
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