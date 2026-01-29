// ============================================
// 📸 IMAGE POSITIONING GUIDE FOR BLOG EDITOR
// ============================================

// Since Sanity doesn't support drag-and-drop like Word,
// here are the positioning options available:

// 🎯 SIZE OPTIONS:
// - Extra Small (200px) - w-1/4
// - Small (300px) - w-1/3
// - Medium (500px) - w-1/2
// - Large (800px) - w-2/3
// - Extra Large (1000px) - w-5/6
// - Full Width - w-full

// 📍 ALIGNMENT OPTIONS:
// - Left (Float) - Image floats left, text wraps around
// - Center - Image centered, breaks text flow
// - Right (Float) - Image floats right, text wraps around
// - Full Width - Image spans full width
// - Inline Left - Image inline with text on left
// - Inline Right - Image inline with text on right

// 🌊 TEXT FLOW OPTIONS:
// - Normal Flow - Default text flow
// - Text Wrap Around - Text wraps around floating images
// - Break Text Flow - Text starts below image

// 💡 HOW TO USE:
// 1. Add image in blog content
// 2. Click on image to open settings panel
// 3. Choose Size, Alignment, and Position
// 4. Preview changes in the editor

// 📝 PRO TIP:
// For Word-like drag and drop experience, consider using:
// - @sanity/desk-tool (for better media management)
// - Custom image plugins
// - Or switch to a different CMS with drag-and-drop

export const IMAGE_POSITIONING_GUIDE = {
  sizes: ['xs', 'small', 'medium', 'large', 'xl', 'full'],
  alignments: ['left', 'center', 'right', 'full', 'inline-left', 'inline-right'],
  positions: ['normal', 'wrap', 'break']
}