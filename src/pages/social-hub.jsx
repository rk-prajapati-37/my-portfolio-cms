import SocialLinks from '@/components/SocialLinks';
import SocialPostsWithProfile from '@/components/SocialPostsWithProfile';
import ContactAndSocial from '@/components/ContactAndSocial';

/**
 * Social Media Hub - Complete Profile & Posts Display
 * 
 * Shows:
 * 1️⃣ Social media profile card with followers, bio, engagement
 * 2️⃣ All posts from that platform
 * 3️⃣ Platform switching
 * 4️⃣ Detailed post information
 */

export default function SocialMediaHub() {
  return (
    <div className="bg-white">
      {/* ========== HERO SECTION ========== */}
      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center py-12">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My Social Media Hub
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            View all my social media profiles and latest posts in one place
          </p>
          <p className="text-gray-400 mb-12">
            Click on any platform to see my profile details and all posts from that channel
          </p>
          
          {/* Social Links */}
          <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg backdrop-blur">
            <p className="text-gray-300 mb-4">Connect with me:</p>
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* ========== SOCIAL POSTS WITH PROFILE ========== */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🎯 Explore by Platform
          </h2>
          <p className="text-gray-600">
            Select a platform to view the complete profile and all posts from that channel
          </p>
        </div>

        <SocialPostsWithProfile />
      </section>

      {/* ========== HOW TO USE SECTION ========== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Choose Platform</h3>
              <p className="text-gray-600">
                Click on any social media platform button to view that specific profile
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">View Profile Card</h3>
              <p className="text-gray-600">
                See complete profile info: bio, follower count, engagement rate, and more
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Browse Posts</h3>
              <p className="text-gray-600">
                See all posts from that platform with images, videos, captions, and stats
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mt-8 border-l-4 border-blue-600">
            <h3 className="text-lg font-bold mb-2 text-gray-900">📊 Profile Card Shows:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>✅ Profile picture with verification badge</li>
              <li>✅ Username and platform name</li>
              <li>✅ Bio/description</li>
              <li>✅ Total posts count</li>
              <li>✅ Total followers</li>
              <li>✅ Engagement rate</li>
              <li>✅ Link to visit the actual profile</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========== DATA STRUCTURE ========== */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">What Gets Displayed</h2>
          
          <div className="space-y-6">
            {/* Profile Details */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">📋 Profile Information</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="font-semibold">Left Side:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Profile Picture (32x32 or larger)</li>
                    <li>Username/Handle</li>
                    <li>Platform name</li>
                    <li>Verification badge</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Right Side:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Bio/Description</li>
                    <li>Total Posts count</li>
                    <li>Followers count</li>
                    <li>Engagement rate</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Post Details */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">📸 Post Information</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="font-semibold">Post Content:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Post type badge (Image/Video/Text)</li>
                    <li>Post status (Published/Scheduled)</li>
                    <li>Image/Video preview</li>
                    <li>Caption or text content</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Post Stats:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Hashtags (first 3 shown)</li>
                    <li>Likes count</li>
                    <li>Comments count</li>
                    <li>Shares count</li>
                    <li>Post date</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SANITY CMS GUIDE ========== */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">How to Add Data in Sanity</h2>
          
          <div className="bg-gray-800 p-6 rounded-lg space-y-6">
            {/* Step 1 */}
            <div>
              <h3 className="text-lg font-bold mb-2">Step 1: Create Social Profile</h3>
              <p className="text-gray-300 mb-2">Go to Sanity Studio → Social Media Profile</p>
              <div className="bg-gray-700 p-4 rounded text-sm text-gray-200">
                <p>Fill in:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Platform (dropdown)</li>
                  <li>Username</li>
                  <li>Profile URL</li>
                  <li>Profile Picture (upload)</li>
                  <li>Bio</li>
                  <li>Followers count</li>
                  <li>Posts count</li>
                  <li>Engagement rate (%)</li>
                  <li>Verification badge (toggle)</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <h3 className="text-lg font-bold mb-2">Step 2: Create Posts</h3>
              <p className="text-gray-300 mb-2">Go to Sanity Studio → Social Media Posts</p>
              <div className="bg-gray-700 p-4 rounded text-sm text-gray-200">
                <p>Fill in:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Select platform (reference to Social Profile)</li>
                  <li>Post type (Text/Image/Video/Link/Story)</li>
                  <li>Caption</li>
                  <li>Hashtags (array)</li>
                  <li>Status (Published/Scheduled/Draft)</li>
                  <li>Optional: Image, Video URL, Link URL</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <h3 className="text-lg font-bold mb-2">Step 3: See Results</h3>
              <p className="text-gray-300">
                Once you save, the data automatically appears on this page. 
                Profile card shows all details, and all posts display in a grid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <ContactAndSocial />
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-6">
            © 2026 My Social Media Hub. All rights reserved.
          </p>
          
          <p className="text-gray-500 mb-4">Follow me:</p>
          <SocialLinks />
          
          <p className="text-gray-600 text-sm mt-8">
            Built with Next.js, React, Tailwind CSS, and Sanity CMS
          </p>
        </div>
      </footer>
    </div>
  );
}
