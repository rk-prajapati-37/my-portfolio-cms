import SocialLinks from '@/components/SocialLinks';
import SocialPosts from '@/components/SocialPosts';
import ContactAndSocial from '@/components/ContactAndSocial';

/**
 * Frontend Example Page
 * यह एक complete example है जो सब कुछ दिखाता है
 */

export default function SocialMediaPage() {
  return (
    <div className="bg-white">
      {/* ========== HERO SECTION ========== */}
      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center py-12">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hello, I'm Creative Developer
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Designer • Developer • Content Creator
          </p>
          <p className="text-gray-400 mb-12">
            Follow me on social media for updates, tutorials, and behind-the-scenes content
          </p>
          
          {/* Social Links in Hero */}
          <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg backdrop-blur">
            <p className="text-gray-300 mb-4">Connect with me:</p>
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
        <p className="text-gray-700 mb-6">
          I'm passionate about creating beautiful and functional digital experiences. 
          With expertise in web design and development, I help brands and individuals 
          establish a strong online presence.
        </p>
        
        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Follow My Journey</h3>
          <p className="text-gray-700 mb-4">
            I regularly share my work, tutorials, and insights on social media. 
            Stay connected to get the latest updates!
          </p>
          <SocialLinks />
        </div>
      </section>

      {/* ========== SOCIAL FEED SECTION ========== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Latest Updates</h2>
            <p className="text-gray-600">
              Check out my recent posts from all social media platforms
            </p>
          </div>
          
          <SocialPosts />
        </div>
      </section>

      {/* ========== PORTFOLIO SECTION (Example) ========== */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Work</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Project 1 Image</p>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-2">Amazing Project</h3>
            <p className="text-gray-700 mb-4">
              A beautiful portfolio website built with React and Next.js, 
              featuring smooth animations and responsive design.
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION (Example) ========== */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Quick Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-400 mb-2">50+</p>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-400 mb-2">100+</p>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-400 mb-2">5+</p>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-400 mb-2">10K+</p>
              <p className="text-gray-300">Social Followers</p>
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
            © 2026 My Portfolio. All rights reserved.
          </p>
          
          <p className="text-gray-500 mb-4">Follow me:</p>
          <SocialLinks />
          
          <p className="text-gray-600 text-sm mt-8">
            Built with Next.js, React, and Sanity CMS
          </p>
        </div>
      </footer>
    </div>
  );
}
