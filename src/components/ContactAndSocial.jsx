import { useState, useEffect } from 'react';
import SocialLinks from './SocialLinks';
import SocialPosts from './SocialPosts';
import SocialProfiles from './SocialProfiles';
import SocialPostEditor from './SocialPostEditor';

/**
 * Complete Contact & Social Media Section
 * 
 * Features:
 * ✅ Contact form
 * ✅ Social media links with icons
 * ✅ Social media feed (Images, Videos, Posts)
 * ✅ Responsive design
 * ✅ Tab navigation
 */

export default function ContactAndSocial() {
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send to Sanity
      const doc = {
        _type: 'contact',
        ...formData,
        source: 'contact-form',
        createdAt: new Date().toISOString(),
      };
      
      // Uncomment when sanity client is configured
      // const response = await client.create(doc);
      
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', mobile: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-gray-300 text-lg">
            Contact me directly or follow my social media for updates
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 justify-center flex-wrap">
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'contact'
                ? 'bg-red-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            📧 Contact Form
          </button>
          <button
            onClick={() => setActiveTab('profiles')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'profiles'
                ? 'bg-red-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            👤 Social Profiles
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'social'
                ? 'bg-red-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            🔗 Social Links
          </button>
          <button
            onClick={() => setActiveTab('feed')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'feed'
                ? 'bg-red-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            📰 Social Feed
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Contact Form Tab */}
          {activeTab === 'contact' && (
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">Send me a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-600 text-white rounded-lg">
                  ✅ Thank you! Your message has been received. I'll get back to you soon!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-600 focus:outline-none transition text-white placeholder-gray-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-600 focus:outline-none transition text-white placeholder-gray-400"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Mobile Number (Optional)</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-600 focus:outline-none transition text-white placeholder-gray-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Write your message here..."
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-600 focus:outline-none transition text-white placeholder-gray-400 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Send Message ✉️
                </button>
              </form>

              {/* Additional Contact Info */}
              <div className="mt-12 pt-8 border-t border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Other Ways to Reach Me</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <p className="font-semibold">contact@yoursite.com</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <p className="font-semibold">+1 (555) 123-4567</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="font-semibold">Your City, Country</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Social Profiles Tab */}
          {activeTab === 'profiles' && (
            <div className="p-8 md:p-12 bg-gray-900">
              <SocialProfiles />
            </div>
          )}

          {/* Social Links Tab */}
          {activeTab === 'social' && (
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-8">Follow Me On Social Media</h2>
              <div className="flex justify-center">
                <SocialLinks />
              </div>
              <p className="text-center text-gray-400 mt-8">
                Click any icon to visit my profile on that platform
              </p>
            </div>
          )}

          {/* Social Feed Tab */}
          {activeTab === 'feed' && (
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-8">Latest Updates</h2>
              <SocialPosts />
              <SocialPostEditor />
            </div>
          )}

        </div>

        {/* Social Links Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Or connect via social media:</p>
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </div>

      </div>
    </div>
  );
}
