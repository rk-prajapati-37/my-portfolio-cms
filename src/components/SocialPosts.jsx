import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const postsQuery = `*[_type == "socialPost" && status == "published"] | order(createdAt desc) {
  _id,
  postType,
  content,
  caption,
  title,
  // include nested asset refs for debugging
  featuredImage{..., asset->{_id, _ref, url}},
  image{..., asset->{_id, _ref, url}},
  videoUrl,
  linkUrl,
  hashtags,
  status,
  createdAt,
  scheduledDate,
  platform -> {
    platform,
    url
  }
}`;

const builder = imageUrlBuilder(client);

const urlFor = (source) => {
  return builder.image(source);
};

export default function SocialPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    client.fetch(postsQuery).then((data) => {
      console.debug('Fetched social posts:', data);
      setPosts(data);
      setLoading(false);
    }).catch((error) => {
      console.error('Error fetching social posts:', error);
      setLoading(false);
    });
  }, []);

  const platforms = ['all', ...new Set(posts.map(p => p.platform?.platform))];

  const filteredPosts = selectedFilter === 'all' 
    ? posts 
    : posts.filter(p => p.platform?.platform === selectedFilter);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const renderPostContent = (post) => {
    // Priority: featuredImage > any post image field (use image even if postType != 'image')
    const displayImage = post.featuredImage || post.image || (post.postType === 'story' && post.image);

    // Resolve a safe image URL (guard against different shapes from Sanity)
    let displayImageUrl = null;
    try {
      if (displayImage) {
        // If Sanity returned an asset ref shape, build using that explicit ref
        const assetRef = displayImage?.asset?._ref || displayImage?.asset?._id;
        if (assetRef) {
          displayImageUrl = urlFor({ asset: { _ref: assetRef } }).width(1200).height(800).url();
        } else {
          // otherwise, try passing the whole image object
          displayImageUrl = urlFor(displayImage).width(1200).height(800).url();
        }
      }
    } catch (err) {
      console.debug('Could not build image URL for post (first attempt)', post._id, err);
      displayImageUrl = null;
    }

    // If Sanity returned an explicit asset URL, prefer it (e.g., asset.url)
    if (!displayImageUrl && displayImage?.asset?.url) {
      displayImageUrl = displayImage.asset.url;
    }

    // Debug output to inspect the image shape when images don't render
    console.debug('SocialPosts image debug', { id: post._id, postType: post.postType, displayImage, displayImageUrl });

    switch (post.postType) {
      case 'image':
        return (
          <div className="w-full h-full">
            {displayImageUrl && (
              <img 
                src={displayImageUrl} 
                alt={post.caption || "Post"}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            )}
            {!displayImageUrl && (
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">📷</span>
              </div>
            )}
          </div>
        );

      case 'video':
        return (
          <div className="w-full h-full bg-black flex items-center justify-center relative">
              {displayImageUrl ? (
              <div className="relative w-full h-full">
                <img 
                  src={displayImageUrl} 
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <span className="text-6xl">▶️</span>
                </div>
              </div>
            ) : post.videoUrl ? (
              <iframe
                src={post.videoUrl}
                title="Social media video"
                className="w-full h-full"
                allowFullScreen
              />
            ) : (
              <div className="text-center text-white">
                <span className="text-6xl mb-4 block">🎥</span>
                <p>Video Content</p>
              </div>
            )}
          </div>
        );

      case 'link':
        return (
          <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center p-8">
            {displayImageUrl && (
              <div className="absolute inset-0">
                <img 
                  src={displayImageUrl} 
                  alt="Link preview"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
            )}
            <div className="text-center text-white relative z-10">
              <span className="text-6xl mb-4 block">🔗</span>
              <p className="font-bold text-lg line-clamp-2">{post.caption || "Shared Link"}</p>
              {post.linkUrl && (
                <p className="text-xs mt-3 opacity-90 line-clamp-1">{post.linkUrl}</p>
              )}
            </div>
          </div>
        );

      case 'text':
        return (
          <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center p-8">
            {displayImageUrl && (
              <div className="absolute inset-0">
                <img 
                  src={displayImageUrl} 
                  alt="Text background"
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
            )}
            <div className="text-center text-white relative z-10">
              <span className="text-6xl mb-4 block">📝</span>
              <p className="font-bold text-lg line-clamp-3">{post.content || post.caption}</p>
            </div>
          </div>
        );

      case 'story':
        return (
          <div className="w-full h-full">
            {displayImageUrl ? (
              <img 
                src={displayImageUrl} 
                alt="Story"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center">
                <span className="text-6xl">✨</span>
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
            {displayImageUrl && (
              <img 
                src={displayImageUrl} 
                alt="Post"
                className="w-full h-full object-cover opacity-40"
              />
            )}
            <span className="text-6xl relative z-10">📱</span>
          </div>
        );
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading posts...</div>;
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-900">Social Media Feed</h2>
        <p className="text-center text-gray-600 mb-8">Latest updates from all my social platforms</p>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-12 flex-wrap justify-center">
          {platforms.map((platform) => (
            <button
              key={platform}
              onClick={() => setSelectedFilter(platform)}
              className={`px-4 py-2 rounded-full transition-all font-semibold ${
                selectedFilter === platform
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-red-600'
              }`}
            >
              {platform === 'all' ? '📊 All Posts' : platform.charAt(0).toUpperCase() + platform.slice(1)}
            </button>
          ))}
        </div>

        {/* Posts Grid - Like Blog */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">No posts found for this platform.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200"
              >
                {/* Image/Content Area */}
                <div className="relative bg-gray-900 aspect-video overflow-hidden">
                  {renderPostContent(post)}
                  
                  {/* Platform Badge - Overlay */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                      {post.platform?.platform.toUpperCase()}
                    </span>
                    <span className={`inline-block text-xs px-3 py-1 rounded-full font-bold text-white ${
                      post.postType === 'image' ? 'bg-blue-600' :
                      post.postType === 'video' ? 'bg-purple-600' :
                      post.postType === 'link' ? 'bg-green-600' :
                      post.postType === 'text' ? 'bg-yellow-600' :
                      'bg-orange-600'
                    }`}>
                      {post.postType === 'image' ? '📷' :
                       post.postType === 'video' ? '🎥' :
                       post.postType === 'link' ? '🔗' :
                       post.postType === 'text' ? '📝' :
                       '✨'}
                    </span>
                  </div>
                </div>

                {/* Content Area - Like Blog */}
                <div className="p-6">
                  {/* Title - अगर Title है */}
                  {post.title && (
                    <h2 className="text-lg font-bold text-red-600 mb-2 line-clamp-1">
                      {post.title}
                    </h2>
                  )}

                  {/* Caption/Main Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-red-600 transition-colors">
                    {post.caption || post.content || `${post.postType} Post`}
                  </h3>

                  {/* Description/Content */}
                  {post.content && post.content !== post.caption && (
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      {post.content}
                    </p>
                  )}

                  {/* External Link - अगर Link URL है */}
                  {post.linkUrl && post.postType === 'link' && (
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-xs text-gray-600 font-semibold mb-1">🔗 External Link</p>
                      <a 
                        href={post.linkUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-xs break-all font-mono"
                      >
                        {post.linkUrl}
                      </a>
                    </div>
                  )}

                  {/* Hashtags - Like Blog Tags */}
                  {post.hashtags && post.hashtags.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {post.hashtags.slice(0, 3).map((tag, idx) => (
                        <a
                          key={idx}
                          href={`https://instagram.com/explore/tags/${tag.replace('#', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-gray-100 hover:bg-red-100 text-gray-700 hover:text-red-700 text-xs px-3 py-1 rounded-full transition-colors"
                        >
                          #{tag.replace('#', '')}
                        </a>
                      ))}
                      {post.hashtags.length > 3 && (
                        <span className="text-xs text-gray-500 px-3 py-1">+{post.hashtags.length - 3} more</span>
                      )}
                    </div>
                  )}

                  {/* Post Details Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4 py-4 border-t border-gray-200">
                    {/* Platform */}
                    <div className="flex flex-col">
                      <p className="text-xs text-gray-600 font-semibold uppercase">📱 Platform</p>
                      <p className="text-sm font-bold text-gray-900">{post.platform?.platform}</p>
                    </div>

                    {/* Post Type */}
                    <div className="flex flex-col">
                      <p className="text-xs text-gray-600 font-semibold uppercase">📝 Post Type</p>
                      <p className="text-sm font-bold text-gray-900 capitalize">{post.postType}</p>
                    </div>

                    {/* Status */}
                    <div className="flex flex-col">
                      <p className="text-xs text-gray-600 font-semibold uppercase">✅ Status</p>
                      <span className={`text-sm font-bold w-fit rounded px-2 py-1 ${
                        post.status === 'published' ? 'bg-green-100 text-green-700' :
                        post.status === 'scheduled' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {post.status === 'published' ? '🟢 Published' :
                         post.status === 'scheduled' ? '🟡 Scheduled' :
                         '⚪ Draft'}
                      </span>
                    </div>

                    {/* Created At */}
                    <div className="flex flex-col">
                      <p className="text-xs text-gray-600 font-semibold uppercase">📅 Created At</p>
                      <p className="text-sm font-bold text-gray-900">{formatDate(post.createdAt)}</p>
                    </div>
                  </div>

                  {/* Scheduled Date - अगर Scheduled है */}
                  {post.scheduledDate && (
                    <div className="mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-xs text-gray-600 font-semibold mb-1">⏰ Scheduled Date/Time</p>
                      <p className="text-sm font-bold text-gray-900">
                        {new Date(post.scheduledDate).toLocaleString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  )}

                  {/* Action Button - Visit Post */}
                  <a
                    href={
                      post.postType === 'link' ? post.linkUrl : 
                      post.platform?.url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors w-full justify-center"
                  >
                    {post.postType === 'link' ? '🔗 Open Link' : `View on ${post.platform?.platform} →`}
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
