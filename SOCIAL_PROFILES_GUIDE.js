/**
 * SOCIAL PROFILES - Complete Integration Guide
 * 
 * ✅ Ye component display karega:
 *    - Profile Image (Avatar)
 *    - Username / Handle
 *    - Platform Name
 *    - Bio
 *    - Followers Count (formatted as K, M)
 *    - Posts Count
 *    - Engagement Rate (%)
 *    - Verified Badge
 *    - Beautiful cards with platform-specific colors
 * 
 * 📊 Features:
 *    ✓ Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
 *    ✓ Filter by platform (All, Instagram, YouTube, GitHub, etc.)
 *    ✓ Fetches from Sanity socialProfile schema
 *    ✓ Hover animations and gradients
 *    ✓ Click to visit profile directly
 */

// ===============================================
// STEP 1: Sanity Schema (Already Created)
// ===============================================
// File: schemaTypes/socialProfile.js
// 
// Contains fields:
// - platform (facebook, twitter, instagram, linkedin, github, youtube, etc.)
// - profileUsername (username/handle)
// - profileUrl (direct link to profile)
// - profileImage (avatar/profile picture)
// - bio (short description)
// - followers (count)
// - postsCount (total posts)
// - isVerified (boolean)
// - engagementRate (%)
// - lastUpdated (datetime)

// ===============================================
// STEP 2: Usage Examples
// ===============================================

// Example 1: In ContactAndSocial Component
// Already integrated! Check lines with:
// - Import: import SocialProfiles from './SocialProfiles';
// - Button: 👤 Social Profiles tab
// - Usage: <SocialProfiles />

// Example 2: Use as standalone component
import SocialProfiles from './components/SocialProfiles';

function MyPage() {
  return (
    <div>
      <SocialProfiles />
    </div>
  );
}

// Example 3: In different section of your site
function SocialHub() {
  return (
    <div>
      <h1>My Social Presence</h1>
      <SocialProfiles />
    </div>
  );
}

// ===============================================
// STEP 3: How to Add Profiles in Sanity CMS
// ===============================================
/*
1. Go to your Sanity Studio
2. Click on "Social Media Profile" (new document)
3. Fill in:
   - Platform: Select (Instagram, YouTube, GitHub, etc.)
   - Username: @yourhandle
   - Profile URL: https://instagram.com/yourhandle
   - Profile Picture: Upload image (square recommended)
   - Bio: "Sharing my journey in tech & design"
   - Followers: 1500 (manually enter or update from API)
   - Total Posts: 245
   - Verified Badge: Toggle if verified
   - Engagement Rate: 3.5
   - Last Updated: Auto-filled
   - Associated Posts: Link to socialPost documents
4. Click Publish

Example for Instagram:
- Platform: instagram
- Username: @johnsmith
- Profile URL: https://instagram.com/johnsmith
- Bio: "Developer | Designer | Content Creator"
- Followers: 5200
- Posts: 145
- Verified: Yes (if checkmark)
- Engagement: 4.2%
*/

// ===============================================
// STEP 4: Customization Options
// ===============================================

/*
Colors per Platform (edit in SocialProfiles.jsx):
- Facebook: from-blue-600 to-blue-700
- Instagram: from-pink-500 to-purple-600
- YouTube: from-red-600 to-red-700
- GitHub: from-gray-800 to-gray-900
- LinkedIn: from-blue-700 to-blue-800
- TikTok: from-black to-gray-800
- Twitter: from-blue-400 to-blue-500
- Twitch: from-purple-600 to-purple-700

To change colors:
1. Find platformColors object
2. Modify the gradient values
3. Test in browser
*/

// ===============================================
// STEP 5: Display Stats
// ===============================================

/*
Automatic formatting:
- 1500 followers → 1.5K
- 5200 followers → 5.2K
- 1000000 followers → 1M
- 5500000 followers → 5.5M

This is handled by formatNumber() function
No need to configure!
*/

// ===============================================
// STEP 6: Filter Functionality
// ===============================================

/*
Filters automatically created from Sanity data:
- All (shows all profiles)
- Each platform with emoji (📷 Instagram, 📺 YouTube, etc.)

User clicks filter → Shows only that platform's profiles
No configuration needed!
*/

// ===============================================
// STEP 7: Responsive Behavior
// ===============================================

/*
Mobile (< 768px):    1 column
Tablet (768-1024px): 2 columns
Desktop (> 1024px):  3 columns

Cards automatically scale and stack.
No CSS media query changes needed!
*/

// ===============================================
// STEP 8: Features Breakdown
// ===============================================

/*
✅ Profile Card Content:
   1. Platform emoji (📷 for Instagram)
   2. Verified checkmark (if verified)
   3. Profile picture (circular with border)
   4. Username (@handle)
   5. Platform name
   6. Bio/description (max 2 lines)
   7. Stats grid (Followers + Posts, or Engagement)
   8. "Visit Profile →" button

✅ Hover Effects:
   - Card scales up 105%
   - Shadow increases
   - Smooth transition

✅ Click Behavior:
   - Entire card is clickable
   - Opens profile in new tab
   - No page navigation
*/

// ===============================================
// STEP 9: API Integration with External APIs
// ===============================================

/*
To auto-update followers count from real APIs:

Instagram API:
- Get access token from Meta
- Fetch @yourhandle metrics
- Update followers field in Sanity

YouTube API:
- Get API key
- Fetch channel stats
- Update subscribers in followers field

GitHub API:
- Simple fetch to github.com/api/users/{username}
- Get followers count
- Update in Sanity

See SOCIAL_MEDIA_SETUP_GUIDE.md for detailed steps
*/

// ===============================================
// STEP 10: Troubleshooting
// ===============================================

/*
Issue: Profiles not showing
→ Check: Sanity CMS has documents published

Issue: Images not loading
→ Check: profileImage field has images uploaded
→ Check: Sanity image URL builder is working

Issue: Stats showing 0
→ Check: followers and postsCount fields have values

Issue: Filter not working
→ This is automatic - no setup needed

Issue: Styling looks off
→ Clear browser cache and reload
→ Check Tailwind CSS is loaded
*/

// ===============================================
// STEP 11: Complete Integration Checklist
// ===============================================

/*
☑ Schema exists: schemaTypes/socialProfile.js
☑ Component created: src/components/SocialProfiles.jsx
☑ Imported in ContactAndSocial.jsx
☑ Tab added: "👤 Social Profiles"
☑ At least one profile added in Sanity CMS
☑ Profile has image uploaded
☑ Profile has username and URL filled
☑ Try clicking the Social Profiles tab!
*/

// ===============================================
// DETAILED FIELD GUIDE
// ===============================================

const fieldGuide = {
  platform: {
    type: "string (dropdown)",
    examples: ["instagram", "youtube", "github", "linkedin", "twitter"],
    required: true,
    description: "Which social platform this profile is on"
  },
  
  profileUsername: {
    type: "string",
    examples: ["@johnsmith", "john_smith", "johnsmith"],
    required: true,
    tip: "Include @ symbol if platform uses it",
    description: "Your handle/username on the platform"
  },
  
  profileUrl: {
    type: "URL",
    examples: [
      "https://instagram.com/johnsmith",
      "https://youtube.com/@johnsmith",
      "https://github.com/johnsmith",
      "https://linkedin.com/in/johnsmith"
    ],
    required: true,
    tip: "Must be full URL including https://",
    description: "Direct link to your profile (what gets clicked)"
  },
  
  profileImage: {
    type: "image",
    examples: "Your profile picture/avatar",
    required: false,
    tip: "Square image works best (1:1 ratio)",
    description: "Profile picture shown in card"
  },
  
  bio: {
    type: "text",
    examples: [
      "Developer | Designer | Coffee Enthusiast",
      "🎬 Content Creator | 💻 Web Developer",
      "Tech tips and tutorials"
    ],
    required: false,
    tip: "Keep it short (under 50 chars for best display)",
    description: "Short description of your profile"
  },
  
  followers: {
    type: "number",
    examples: ["1500", "5200", "1000000"],
    required: false,
    tip: "Leave empty if you don't want to show follower count",
    description: "Number of followers (update manually or via API)"
  },
  
  postsCount: {
    type: "number",
    examples: ["145", "500", "2300"],
    required: false,
    tip: "Total posts on that platform",
    description: "Number of posts on the platform"
  },
  
  isVerified: {
    type: "boolean (toggle)",
    examples: ["true/false"],
    required: false,
    tip: "Shows a ✓ badge on the card",
    description: "Does this account have verification badge?"
  },
  
  engagementRate: {
    type: "number (percentage)",
    examples: ["3.5", "4.2", "5"],
    required: false,
    tip: "Enter just the number (e.g., 3.5 for 3.5%)",
    description: "Average engagement percentage"
  }
};

export default fieldGuide;
