import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';
import { urlFor } from '../lib/sanity';

/**
 * Enhanced Social Posts Component with Profile Details
 * 
 * Features:
 * ✅ Profile card with all details (followers, bio, verified badge)
 * ✅ Post statistics
 * ✅ Filter by platform
 * ✅ Multi-format posts (text, image, video)
 * ✅ Responsive grid layout
 */

const platformColors = {
  facebook: 'bg-blue-600 hover:bg-blue-700',
  twitter: 'bg-blue-400 hover:bg-blue-500',
  instagram: 'bg-pink-600 hover:bg-pink-700',
  linkedin: 'bg-blue-700 hover:bg-blue-800',
  github: 'bg-gray-800 hover:bg-gray-900',
  youtube: 'bg-red-600 hover:bg-red-700',
  tiktok: 'bg-black hover:bg-gray-900',
  whatsapp: 'bg-green-600 hover:bg-green-700',
  telegram: 'bg-blue-500 hover:bg-blue-600',
  pinterest: 'bg-red-700 hover:bg-red-800',
  snapchat: 'bg-yellow-400 hover:bg-yellow-500 text-black',
  discord: 'bg-indigo-600 hover:bg-indigo-700',
  twitch: 'bg-purple-600 hover:bg-purple-700',
  reddit: 'bg-orange-600 hover:bg-orange-700',
  medium: 'bg-gray-900 hover:bg-black',
  dribbble: 'bg-pink-500 hover:bg-pink-600',
  behance: 'bg-blue-600 hover:bg-blue-700',
  figma: 'bg-purple-500 hover:bg-purple-600',
};

export default function SocialPostsWithProfile() {
  const [profiles, setProfiles] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  // Fetch profiles and posts
  useEffect(() => {
    const profileQuery = `*[_type == "socialMedia" && active == true] | order(displayOrder asc) {
      _id,
      platform,
      profileUsername,
      url,
      profileImage,
      bio,
      followers,
      isVerified,
      engagementRate,
      "postCount": count(posts[])
    }`;

    const postsQuery = `*[_type == "socialPost" && (status == "Published" || status == "Scheduled")] | order(createdAt desc) {
      _id,
      platform,
      postType,
      content,
      caption,
      image,
      videoUrl,
      linkUrl,
      hashtags,
      createdAt,
      status,
      "likes": likes,
      "comments": comments,
      "shares": shares,
      "platformDetails": platform->{
        platform,
        profileUsername,
        profileImage,
        url
      }
    }`;

    Promise.all([
      client.fetch(profileQuery),
      client.fetch(postsQuery),
    ])
      .then(([profileData, postsData]) => {
        setProfiles(profileData);
        setPosts(postsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Filter posts by selected platform
  const filteredPosts = selectedPlatform === 'all'
    ? posts
    : posts.filter(post => post.platform === selectedPlatform);

  const selectedProfile = selectedPlatform === 'all'
    ? null
    : profiles.find(p => p.platform === selectedPlatform);

  if (loading) {
    return <div className="text-center py-8 text-gray-600">Loading profiles and posts...</div>;
  }

  return (
    <div className="space-y-8">
      {/* Platform Selector */}
      <div className="flex gap-2 overflow-x-auto pb-4">
        <button
          onClick={() => setSelectedPlatform('all')}
          className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
            selectedPlatform === 'all'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          All Platforms
        </button>
        {profiles.map(profile => (
          <button
            key={profile._id}
            onClick={() => setSelectedPlatform(profile.platform)}
            className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
              selectedPlatform === profile.platform
                ? `${platformColors[profile.platform]} text-white`
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {profile.platform.charAt(0).toUpperCase() + profile.platform.slice(1)}
          </button>
        ))}
      </div>

      {/* Selected Profile Card (Only show when not "All") */}
      {selectedProfile && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header Background */}
          <div className={`h-32 ${platformColors[selectedProfile.platform]}`} />
          
          {/* Profile Info */}
          <div className="px-6 pb-6 -mt-16 relative">
            {/* Profile Picture */}
            <div className="mb-4">
              {selectedProfile.profileImage ? (
                <img
                  src={urlFor(selectedProfile.profileImage).url()}
                  alt={selectedProfile.profileUsername}
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
              ) : (
                <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center text-gray-600">
                  No Image
                </div>
              )}
            </div>

            {/* Username and Verified */}
            <div className="mb-2">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                @{selectedProfile.profileUsername}
                {selectedProfile.isVerified && (
                  <span className="text-blue-600">✅</span>
                )}
              </h2>
              <p className="text-gray-600 capitalize">{selectedProfile.platform}</p>
            </div>

            {/* Bio */}
            {selectedProfile.bio && (
              <p className="text-gray-700 mb-4 max-w-2xl">{selectedProfile.bio}</p>
            )}

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4 my-6 pb-6 border-b border-gray-200">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {selectedProfile.postsCount || selectedProfile.postCount || 0}
                </p>
                <p className="text-sm text-gray-600">Posts</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {selectedProfile.followers ? Math.floor(selectedProfile.followers / 1000) : 0}K
                </p>
                <p className="text-sm text-gray-600">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {selectedProfile.engagementRate || 0}%
                </p>
                <p className="text-sm text-gray-600">Engagement</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {filteredPosts.length}
                </p>
                <p className="text-sm text-gray-600">Posts Here</p>
              </div>
            </div>

            {/* Visit Profile Button */}
            <a
              href={selectedProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-8 py-2 ${platformColors[selectedProfile.platform]} text-white rounded-full font-semibold transition`}
            >
              Visit Profile →
            </a>
          </div>
        </div>
      )}

      {/* Posts Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          {selectedPlatform === 'all' ? 'All Posts' : `${selectedProfile?.platform} Posts`}
          <span className="text-gray-600 ml-2">({filteredPosts.length})</span>
        </h2>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600">No posts yet for this platform</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                {/* Post Image */}
                {post.postType === 'image' && post.image && (
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={urlFor(post.image).url()}
                      alt="Post"
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                )}

                {/* Video Post */}
                {post.postType === 'video' && post.videoUrl && (
                  <div className="h-48 bg-black flex items-center justify-center">
                    <a
                      href={post.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-4xl"
                    >
                      ▶️
                    </a>
                  </div>
                )}

                {/* Post Content */}
                <div className="p-4">
                  {/* Post Type Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-semibold capitalize">
                      {post.postType}
                    </span>
                    {post.status && (
                      <span className={`inline-block ml-2 px-3 py-1 text-sm rounded-full font-semibold ${
                        post.status === 'Published'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {post.status}
                      </span>
                    )}
                    
                    {/* Link URL Badge - Show for Link type posts */}
                    {post.postType === 'link' && post.linkUrl && (
                      <a
                        href={post.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block ml-2 px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold hover:bg-blue-200 transition"
                      >
                        🔗 Open Link
                      </a>
                    )}
                  </div>

                  {/* Caption/Content */}
                  <p className="text-gray-800 mb-3 line-clamp-3">
                    {post.caption || post.content}
                  </p>

                  {/* Hashtags */}
                  {post.hashtags && post.hashtags.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.hashtags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-blue-600 text-sm hover:underline cursor-pointer">
                          #{tag}
                        </span>
                      ))}
                      {post.hashtags.length > 3 && (
                        <span className="text-gray-500 text-sm">+{post.hashtags.length - 3} more</span>
                      )}
                    </div>
                  )}

                  {/* Stats */}
                  <div className="flex gap-4 text-sm text-gray-600 pt-3 border-t border-gray-100">
                    <span>👍 {post.likes || 0}</span>
                    <span>💬 {post.comments || 0}</span>
                    <span>↗️ {post.shares || 0}</span>
                  </div>

                  {/* Date */}
                  <p className="text-xs text-gray-500 mt-3">
                    {new Date(post.createdAt).toLocaleDateString('en-IN')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
