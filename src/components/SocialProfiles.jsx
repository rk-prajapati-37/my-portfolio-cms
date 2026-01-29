import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const profilesQuery = `*[_type == "socialProfile"] | order(followers desc) {
  _id,
  platform,
  profileUsername,
  profileUrl,
  profileImage,
  bio,
  followers,
  postsCount,
  isVerified,
  engagementRate
}`;

const builder = imageUrlBuilder(client);

const urlFor = (source) => {
  return builder.image(source);
};

const platformEmojis = {
  facebook: '📘',
  twitter: '𝕏',
  instagram: '📷',
  linkedin: '💼',
  github: '🐙',
  youtube: '📺',
  tiktok: '♪',
  whatsapp: '💬',
  telegram: '✈️',
  pinterest: '📌',
  snapchat: '👻',
  discord: '💬',
  twitch: '🎮',
  reddit: '🔗',
  medium: '📝',
  dribbble: '🎨',
  behance: '🎭',
  figma: '🎨',
};

const platformColors = {
  facebook: 'from-blue-600 to-blue-700',
  twitter: 'from-blue-400 to-blue-500',
  instagram: 'from-pink-500 to-purple-600',
  linkedin: 'from-blue-700 to-blue-800',
  github: 'from-gray-800 to-gray-900',
  youtube: 'from-red-600 to-red-700',
  tiktok: 'from-black to-gray-800',
  whatsapp: 'from-green-600 to-green-700',
  telegram: 'from-blue-500 to-cyan-600',
  pinterest: 'from-red-700 to-red-800',
  snapchat: 'from-yellow-400 to-yellow-500',
  discord: 'from-indigo-600 to-indigo-700',
  twitch: 'from-purple-600 to-purple-700',
  reddit: 'from-orange-600 to-orange-700',
  medium: 'from-gray-900 to-black',
  dribbble: 'from-pink-500 to-pink-600',
  behance: 'from-blue-600 to-blue-700',
  figma: 'from-purple-500 to-purple-600',
};

export default function SocialProfiles() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  useEffect(() => {
    client.fetch(profilesQuery).then((data) => {
      setProfiles(data);
      setLoading(false);
    }).catch((error) => {
      console.error('Error fetching social profiles:', error);
      setLoading(false);
    });
  }, []);

  const platforms = ['all', ...new Set(profiles.map(p => p.platform))];
  
  const filteredProfiles = selectedPlatform === 'all' 
    ? profiles 
    : profiles.filter(p => p.platform === selectedPlatform);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };

  if (loading) {
    return <div className="text-center py-12 text-gray-400">Loading profiles...</div>;
  }

  if (profiles.length === 0) {
    return <div className="text-center py-12 text-gray-400">No social profiles added yet.</div>;
  }

  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-white">
          My Social Profiles
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Connect with me across different platforms
        </p>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-12 flex-wrap justify-center">
          {platforms.map((platform) => (
            <button
              key={platform}
              onClick={() => setSelectedPlatform(platform)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedPlatform === platform
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {platform === 'all' ? '📊 All' : platformEmojis[platform] + ' ' + platform.charAt(0).toUpperCase() + platform.slice(1)}
            </button>
          ))}
        </div>

        {/* Profiles Grid */}
        {filteredProfiles.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            No profiles found for this platform.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfiles.map((profile) => (
              <a
                key={profile._id}
                href={profile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className={`
                  bg-gradient-to-br ${platformColors[profile.platform] || 'from-gray-700 to-gray-800'}
                  rounded-xl overflow-hidden shadow-lg hover:shadow-2xl 
                  transition-all duration-300 transform hover:scale-105
                  h-full flex flex-col
                `}>
                  
                  {/* Header with Platform Info */}
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-3xl">{platformEmojis[profile.platform] || '🔗'}</span>
                    {profile.isVerified && (
                      <span className="text-blue-400" title="Verified">✓</span>
                    )}
                  </div>

                  {/* Profile Image */}
                  {profile.profileImage && (
                    <div className="px-4 mb-4 flex justify-center">
                      <img
                        src={urlFor(profile.profileImage).width(120).height(120).url()}
                        alt={profile.profileUsername}
                        className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                      />
                    </div>
                  )}

                  {/* Profile Info */}
                  <div className="px-6 pb-6 text-center flex-1 flex flex-col justify-center">
                    {/* Username */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {profile.profileUsername}
                    </h3>
                    
                    {/* Platform Name */}
                    <p className="text-sm text-gray-200 mb-3 opacity-90">
                      {profile.platform.charAt(0).toUpperCase() + profile.platform.slice(1)}
                    </p>

                    {/* Bio */}
                    {profile.bio && (
                      <p className="text-sm text-gray-100 mb-4 line-clamp-2">
                        {profile.bio}
                      </p>
                    )}

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {profile.followers !== null && (
                        <div className="bg-white bg-opacity-20 rounded-lg p-2">
                          <p className="text-xs text-gray-200">Followers</p>
                          <p className="text-lg font-bold text-white">
                            {formatNumber(profile.followers)}
                          </p>
                        </div>
                      )}
                      {profile.postsCount !== null && (
                        <div className="bg-white bg-opacity-20 rounded-lg p-2">
                          <p className="text-xs text-gray-200">Posts</p>
                          <p className="text-lg font-bold text-white">
                            {formatNumber(profile.postsCount)}
                          </p>
                        </div>
                      )}
                      {!profile.followers && !profile.postsCount && (
                        <div className="col-span-2 bg-white bg-opacity-20 rounded-lg p-2">
                          <p className="text-xs text-gray-200">Active Profile</p>
                        </div>
                      )}
                    </div>

                    {/* Engagement Rate */}
                    {profile.engagementRate && (
                      <div className="bg-white bg-opacity-10 rounded-lg p-2 mb-4">
                        <p className="text-xs text-gray-200">Engagement</p>
                        <p className="text-lg font-bold text-white">
                          {profile.engagementRate}%
                        </p>
                      </div>
                    )}

                    {/* Visit Button */}
                    <button className="
                      w-full bg-white text-gray-900 font-semibold py-2 rounded-lg
                      hover:bg-gray-100 transition-colors duration-200
                      group-hover:shadow-lg
                    ">
                      Visit Profile →
                    </button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
