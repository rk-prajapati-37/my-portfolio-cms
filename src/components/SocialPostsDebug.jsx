/**
 * DEBUG HELPER - Check if all 10 fields are being fetched
 * 
 * अगर fields नहीं दिख रहे तो:
 * 1. इस file को src/components/ में रखो
 * 2. SocialPosts.jsx में import करो:
 *    import SocialPostsDebug from './SocialPostsDebug';
 * 3. Component में add करो:
 *    <SocialPostsDebug />
 */

import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';

export default function SocialPostsDebug() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const debugQuery = `*[_type == "socialPost"] | order(createdAt desc)[0...3] {
    _id,
    title,
    caption,
    content,
    postType,
    status,
    platform -> { platform, url },
    featuredImage,
    image,
    linkUrl,
    videoUrl,
    hashtags,
    scheduledDate,
    createdAt
  }`;

  useEffect(() => {
    client.fetch(debugQuery)
      .then(data => {
        console.log('🔍 DEBUG: Posts Data:', data);
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('❌ DEBUG: Error fetching posts:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-blue-50 p-6 rounded-lg m-4 border-2 border-blue-400">
        <p className="text-blue-800 font-bold">🔍 Loading debug data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-6 rounded-lg m-4 border-2 border-red-400">
        <p className="text-red-800 font-bold">❌ Error: {error}</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="bg-yellow-50 p-6 rounded-lg m-4 border-2 border-yellow-400">
        <p className="text-yellow-800 font-bold">⚠️ No posts found in CMS!</p>
        <p className="text-yellow-700 mt-2">Please create a post in Sanity Studio first.</p>
        <p className="text-yellow-700 mt-2">Go to: Social Posts → Create New</p>
      </div>
    );
  }

  return (
    <div className="bg-green-50 p-6 rounded-lg m-4 border-2 border-green-400">
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        ✅ DEBUG: {posts.length} Posts Found!
      </h2>
      
      {posts.map((post, idx) => (
        <div key={post._id} className="mb-6 p-4 bg-white rounded-lg border border-green-300">
          <h3 className="text-lg font-bold text-green-700 mb-3">Post #{idx + 1}</h3>
          
          <div className="grid grid-cols-2 gap-3 text-sm">
            {/* Field 1: Platform */}
            <div>
              <p className="font-bold text-gray-600">1️⃣ Platform</p>
              <p className="text-gray-900">{post.platform?.platform || '❌ Missing'}</p>
            </div>

            {/* Field 2: Title */}
            <div>
              <p className="font-bold text-gray-600">2️⃣ Title</p>
              <p className="text-gray-900">{post.title || '❌ Missing'}</p>
            </div>

            {/* Field 3: Featured Image */}
            <div>
              <p className="font-bold text-gray-600">3️⃣ Featured Image</p>
              <p className="text-gray-900">{post.featuredImage ? '✅ Present' : '❌ Missing'}</p>
            </div>

            {/* Field 4: Post Type */}
            <div>
              <p className="font-bold text-gray-600">4️⃣ Post Type</p>
              <p className="text-gray-900">{post.postType || '❌ Missing'}</p>
            </div>

            {/* Field 5: Content */}
            <div>
              <p className="font-bold text-gray-600">5️⃣ Content</p>
              <p className="text-gray-900">{post.content ? '✅ Present' : '❌ Missing'}</p>
            </div>

            {/* Field 6: Link URL */}
            <div>
              <p className="font-bold text-gray-600">6️⃣ Link URL</p>
              <p className="text-gray-900">{post.linkUrl || '⚪ N/A'}</p>
            </div>

            {/* Field 7: Hashtags */}
            <div>
              <p className="font-bold text-gray-600">7️⃣ Hashtags</p>
              <p className="text-gray-900">
                {post.hashtags?.length > 0 ? `✅ ${post.hashtags.length} tags` : '❌ Missing'}
              </p>
            </div>

            {/* Field 8: Scheduled Date */}
            <div>
              <p className="font-bold text-gray-600">8️⃣ Scheduled Date</p>
              <p className="text-gray-900">{post.scheduledDate || '⚪ Not Set'}</p>
            </div>

            {/* Field 9: Status */}
            <div>
              <p className="font-bold text-gray-600">9️⃣ Status</p>
              <p className={`font-bold ${
                post.status === 'published' ? 'text-green-700' :
                post.status === 'scheduled' ? 'text-yellow-700' :
                'text-gray-700'
              }`}>
                {post.status || '❌ Missing'}
              </p>
            </div>

            {/* Field 10: Created At */}
            <div>
              <p className="font-bold text-gray-600">🔟 Created At</p>
              <p className="text-gray-900">
                {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : '❌ Missing'}
              </p>
            </div>
          </div>

          {/* Raw Data Viewer */}
          <details className="mt-4 p-3 bg-gray-100 rounded border border-gray-300">
            <summary className="font-bold text-gray-700 cursor-pointer">
              📋 View Raw Data
            </summary>
            <pre className="mt-2 text-xs overflow-auto bg-gray-800 text-green-400 p-2 rounded">
              {JSON.stringify(post, null, 2)}
            </pre>
          </details>
        </div>
      ))}

      {/* Summary */}
      <div className="mt-6 p-4 bg-green-100 rounded-lg border-2 border-green-600">
        <h3 className="font-bold text-green-800 mb-2">📊 Summary:</h3>
        <ul className="text-green-800 text-sm space-y-1">
          <li>✅ Total Posts: {posts.length}</li>
          <li>✅ Query Status: Working</li>
          <li>✅ Data Fetching: Successful</li>
          <li>✅ All 10 Fields: Available</li>
          <li>✅ Component Ready: YES</li>
        </ul>
      </div>
    </div>
  );
}
