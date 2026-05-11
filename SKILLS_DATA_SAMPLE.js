// Sample Skills Data - Copy and add to your database
// You can use this data to populate your Skills section

const skillsData = [
  // Frontend Technologies
  {
    name: 'HTML5',
    category: 'Frontend Technologies',
    level: 95,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS3',
    category: 'Frontend Technologies',
    level: 95,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'JavaScript',
    category: 'Frontend Technologies',
    level: 90,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'React.js',
    category: 'Frontend Technologies',
    level: 88,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend Technologies',
    level: 85,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
  },

  // CMS & Platforms
  {
    name: 'WordPress',
    category: 'CMS & Platforms',
    level: 92,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg'
  },
  {
    name: 'Elementor Pro',
    category: 'CMS & Platforms',
    level: 88,
    icon: 'https://via.placeholder.com/150?text=Elementor'
  },
  {
    name: 'WooCommerce',
    category: 'CMS & Platforms',
    level: 85,
    icon: 'https://via.placeholder.com/150?text=WooCommerce'
  },
  {
    name: 'Shopify Basics',
    category: 'CMS & Platforms',
    level: 70,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-plain.svg'
  },

  // Design & Tools
  {
    name: 'Figma',
    category: 'Design & Tools',
    level: 82,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
  },
  {
    name: 'Canva',
    category: 'Design & Tools',
    level: 80,
    icon: 'https://via.placeholder.com/150?text=Canva'
  },
  {
    name: 'Adobe Photoshop',
    category: 'Design & Tools',
    level: 75,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg'
  },

  // Git & GitHub
  {
    name: 'Git',
    category: 'Git & GitHub',
    level: 87,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  {
    name: 'GitHub',
    category: 'Git & GitHub',
    level: 85,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  },

  // Additional Skills
  {
    name: 'SEO Optimization',
    category: 'Additional Skills',
    level: 80,
    icon: 'https://via.placeholder.com/150?text=SEO'
  },
  {
    name: 'Website Speed Optimization',
    category: 'Additional Skills',
    level: 82,
    icon: 'https://via.placeholder.com/150?text=Performance'
  },
  {
    name: 'API Integration',
    category: 'Additional Skills',
    level: 83,
    icon: 'https://via.placeholder.com/150?text=API'
  },
  {
    name: 'Payment Gateway Integration',
    category: 'Additional Skills',
    level: 75,
    icon: 'https://via.placeholder.com/150?text=Payment'
  },
  {
    name: 'Responsive Design',
    category: 'Additional Skills',
    level: 92,
    icon: 'https://via.placeholder.com/150?text=Responsive'
  }
];

module.exports = skillsData;

// HOW TO USE:
// 1. Copy this data and add to your backend database via API or directly to MongoDB
// 2. Use the API endpoint: POST /api/skills
// 3. Or import in your seed/migration file

// EXAMPLE CURL COMMAND to add all skills:
/*
const axios = require('axios');
const skillsData = require('./SKILLS_DATA_SAMPLE');

async function addSkills() {
  try {
    for (const skill of skillsData) {
      await axios.post('http://localhost:5000/api/skills', skill);
    }
    console.log('All skills added successfully!');
  } catch (error) {
    console.error('Error adding skills:', error);
  }
}

addSkills();
*/
