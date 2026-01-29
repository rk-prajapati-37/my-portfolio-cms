import { useEffect, useState } from 'react';
import { client } from '@/lib/sanity';

/**
 * Structure Page - Display Portfolio Data Structure
 * Shows all content types and their counts
 */

export default function Structure() {
  const [data, setData] = useState({
    projects: 0,
    blogs: 0,
    skills: 0,
    experience: 0,
    education: 0,
    certificates: 0,
    testimonials: 0,
    services: 0,
    stats: 0,
    socialMediaProfiles: 0,
    socialPosts: 0,
    contacts: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        // Fetch all counts in parallel
        const [
          projects,
          blogs,
          skills,
          experience,
          education,
          certificates,
          testimonials,
          services,
          stats,
          socialMediaProfiles,
          socialPosts,
          contacts,
        ] = await Promise.all([
          client.fetch(`count(project)`),
          client.fetch(`count(blog)`),
          client.fetch(`count(skill)`),
          client.fetch(`count(experience)`),
          client.fetch(`count(education)`),
          client.fetch(`count(certificate)`),
          client.fetch(`count(testimonial)`),
          client.fetch(`count(service)`),
          client.fetch(`count(stats)`),
          client.fetch(`count(socialMedia)`),
          client.fetch(`count(socialPost)`),
          client.fetch(`count(contact)`),
        ]);

        setData({
          projects,
          blogs,
          skills,
          experience,
          education,
          certificates,
          testimonials,
          services,
          stats,
          socialMediaProfiles,
          socialPosts,
          contacts,
        });
      } catch (err) {
        console.error('Error fetching structure:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* ========== HEADER ========== */}
      <section className="text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Portfolio Structure</h1>
          <p className="text-xl text-gray-300">
            Overview of all content in your portfolio CMS
          </p>
        </div>
      </section>

      {/* ========== CONTENT ========== */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              <p className="text-white mt-4">Loading structure data...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-500/20 border border-red-500 rounded-lg p-6 text-white">
              <h3 className="font-bold mb-2">Error Loading Structure</h3>
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* PROJECTS */}
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 transition">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Projects</h3>
                  <span className="text-3xl font-bold text-blue-400">{data.projects}</span>
                </div>
                <p className="text-gray-300 text-sm">Total projects in portfolio</p>
              </div>

              {/* BLOGS */}
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 transition">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Blog Posts</h3>
                  <span className="text-3xl font-bold text-green-400">{data.blogs}</span>
                </div>
                <p className="text-gray-300 text-sm">Total blog articles</p>
              </div>

              {/* SKILLS */}
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 transition">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Skills</h3>
                  <span className="text-3xl font-bold text-purple-400">{data.skills}</span>
                </div>
                <p className="text-gray-300 text-sm">Technical skills</p>
              </div>

              {/* EXPERIENCE */}
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 transition">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Experience</h3>
                  <span className="text-3xl font-bold text-yellow-400">{data.experience}</span>
                </div>
                <p className="text-gray-300 text-sm">Work experiences</p>
              </div>

              {/* EDUCATION */}
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 transition">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Education</h3>
                  <span className="text-3xl font-bold text-cyan-400">{data.education}</span>
                </div>
                <p className="text-gray-300 text-sm">Educational qualifications</p>
              </div>

              {/* CERTIFICATES */}
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 transition">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Certificates</h3>
                  <span className="text-3xl font-bold text-red-400">{data.certificates}</span>
                </div>
                <p className="text-gray-300 text-sm">Professional certificates</p>
              </div>

              {/* TESTIMONIALS */}
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 transition">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Testimonials</h3>
                  <span className="text-3xl font-bold text-pink-400">{data.testimonials}</span>
                </div>
                <p className="text-gray-300 text-sm">Client testimonials</p>
              </div>

              {/* SERVICES */}
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 transition">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Services</h3>
                  <span className="text-3xl font-bold text-indigo-400">{data.services}</span>
                </div>
                <p className="text-gray-300 text-sm">Services offered</p>
              </div>

              {/* STATS */}
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 transition">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Stats</h3>
                  <span className="text-3xl font-bold text-orange-400">{data.stats}</span>
                </div>
                <p className="text-gray-300 text-sm">Portfolio statistics</p>
              </div>

              {/* SOCIAL MEDIA PROFILES */}
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 transition">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Social Profiles</h3>
                  <span className="text-3xl font-bold text-blue-300">{data.socialMediaProfiles}</span>
                </div>
                <p className="text-gray-300 text-sm">Social media profiles</p>
              </div>

              {/* SOCIAL POSTS */}
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 transition">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Social Posts</h3>
                  <span className="text-3xl font-bold text-green-300">{data.socialPosts}</span>
                </div>
                <p className="text-gray-300 text-sm">Social media posts</p>
              </div>

              {/* CONTACT MESSAGES */}
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 transition">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Messages</h3>
                  <span className="text-3xl font-bold text-yellow-300">{data.contacts}</span>
                </div>
                <p className="text-gray-300 text-sm">Contact messages</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========== SUMMARY ========== */}
      {!loading && !error && (
        <section className="py-12 px-4 border-t border-white/20">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 border border-white/20 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Structure Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-2">Total Content Items</p>
                  <p className="text-4xl font-bold text-blue-400">
                    {Object.values(data).reduce((a, b) => a + b, 0)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">Content Types</p>
                  <p className="text-4xl font-bold text-green-400">
                    {Object.keys(data).length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
