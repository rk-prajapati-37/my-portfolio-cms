/**
 * IMPLEMENTATION EXAMPLES
 * 
 * Copy-paste ready code examples for different use cases
 * Choose the one that fits your portfolio design
 */

// ============================================
// EXAMPLE 1: Complete All-in-One Solution
// ============================================
// Best for: Contact page with full social integration

import ContactAndSocial from '@/components/ContactAndSocial';

export default function ContactPage() {
  return (
    <main>
      <ContactAndSocial />
    </main>
  );
}

// Output: Full contact form + social links + social feed with tabs


// ============================================
// EXAMPLE 2: Minimal Approach (Just Links)
// ============================================
// Best for: Homepage footer or header

import SocialLinks from '@/components/SocialLinks';

export default function Header() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-center text-white mb-6">Follow Me</h3>
        <SocialLinks />
      </div>
    </footer>
  );
}


// ============================================
// EXAMPLE 3: Feed Only (Just Posts)
// ============================================
// Best for: Dedicated social feed page

import SocialPosts from '@/components/SocialPosts';

export default function SocialFeedPage() {
  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Latest Updates
        </h1>
        <SocialPosts />
      </div>
    </main>
  );
}


// ============================================
// EXAMPLE 4: Hero Section with Social
// ============================================
// Best for: Homepage with prominent social links

import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl text-gray-200 mb-12">
            Designer | Developer | Creator
          </p>
          
          {/* Social Links in Hero */}
          <div className="mb-12">
            <p className="mb-6">Connect with me on social media:</p>
            <SocialLinks />
          </div>

          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
            View My Work
          </button>
        </div>
      </section>

      {/* Other sections */}
    </div>
  );
}


// ============================================
// EXAMPLE 5: Multiple Sections
// ============================================
// Best for: Full portfolio with everything

import SocialLinks from '@/components/SocialLinks';
import SocialPosts from '@/components/SocialPosts';
import ContactAndSocial from '@/components/ContactAndSocial';

export default function FullPortfolio() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Hello, I'm a Designer</h1>
        <p className="text-xl text-gray-300 mb-8">
          Check out my work and follow my journey
        </p>
      </section>

      {/* About Section with Social Links */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 mb-8">Some info about yourself...</p>
        
        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Connect with me:</h3>
          <SocialLinks />
        </div>
      </section>

      {/* Social Feed Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Posts</h2>
          <SocialPosts />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <ContactAndSocial />
      </section>

      {/* Footer with Social Links */}
      <footer className="bg-gray-900 text-white text-center py-8">
        <p className="mb-6">© 2024 My Portfolio. All rights reserved.</p>
        <SocialLinks />
      </footer>
    </div>
  );
}


// ============================================
// EXAMPLE 6: Contact Page with All Features
// ============================================
// Best for: Dedicated contact page

import SocialLinks from '@/components/SocialLinks';

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <h1 className="text-4xl font-bold text-center">Get In Touch</h1>
        <p className="text-center text-blue-100 mt-2">
          Let's work together
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a href="mailto:contact@example.com" 
                   className="text-blue-600 hover:underline">
                  contact@example.com
                </a>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <a href="tel:+1234567890" 
                   className="text-blue-600 hover:underline">
                  +1 (234) 567-8900
                </a>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-gray-700">Your City, Country</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Follow Me</h3>
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <textarea 
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


// ============================================
// EXAMPLE 7: Social Links in Navigation
// ============================================
// Best for: Header/Navigation component

import SocialLinks from '@/components/SocialLinks';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-xl">My Portfolio</div>

        {/* Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#work" className="hover:text-blue-600">Work</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Social Links - Compact */}
        <div className="scale-75">
          <SocialLinks />
        </div>
      </div>
    </nav>
  );
}


// ============================================
// EXAMPLE 8: Side Panel Social Links
// ============================================
// Best for: Fixed sidebar

import SocialLinks from '@/components/SocialLinks';

export default function SidePanel() {
  return (
    <aside className="fixed left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <p className="text-center text-sm font-bold mb-4 whitespace-nowrap">Follow</p>
        
        {/* Vertical Social Links */}
        <div className="flex flex-col gap-3">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition">
            📷
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition">
            🐦
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition">
            💼
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition">
            🐙
          </a>
        </div>
      </div>
    </aside>
  );
}


// ============================================
// EXAMPLE 9: Custom Styled Social Section
// ============================================
// Best for: Unique design requirements

import SocialLinks from '@/components/SocialLinks';

export default function StyledSocialSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl overflow-hidden">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Join My Community</h2>
        <p className="text-white text-lg mb-8">Follow me on social media for updates</p>
        
        {/* Social Links with custom spacing */}
        <div className="flex justify-center gap-8">
          <SocialLinks />
        </div>

        <p className="text-white text-sm mt-8">
          Get exclusive content, behind-the-scenes, and more!
        </p>
      </div>
    </section>
  );
}


// ============================================
// EXPORTS FOR EASY REUSE
// ============================================

export { default as SocialLinks } from '@/components/SocialLinks';
export { default as SocialPosts } from '@/components/SocialPosts';
export { default as ContactAndSocial } from '@/components/ContactAndSocial';

/**
 * Copy-paste any example above into your project!
 * 
 * Recommendations:
 * - Start with EXAMPLE 1 (ContactAndSocial) for complete integration
 * - Add EXAMPLE 2 (SocialLinks) to footer for minimal approach
 * - Use EXAMPLE 5 or 6 for dedicated pages
 * 
 * All examples are fully functional and ready to use!
 */
