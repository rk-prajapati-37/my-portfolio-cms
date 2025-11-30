import VideoInput from '../src/components/VideoInput'

export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug (auto-generate from title)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    { name: "description", title: "Project Description", type: "text" },
    {
      name: "details",
      title: "Detailed Info",
      description: "Use rich text here (headings, paragraphs, lists).",
      type: "blockContent",
    },
    { name: "clientName", title: "Client Name", type: "string" },
    { name: "date", title: "Project Date", type: "string" },
    {
      name: "category",
      title: "Project Category",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "github", title: "GitHub Link", type: "url" },
    { name: "demo", title: "Live Demo Link", type: "url" },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "extraImages",
      title: "Extra Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "video",
      title: "Demo Video (optional)",
      type: "url",
      components: { input: VideoInput },
      description:
        "Paste a YouTube/Vimeo/Facebook/TikTok/Dailymotion share link OR a direct mp4/webm URL (public). Private links may not embed.",
      validation: (Rule) =>
        Rule.custom((url) => {
          if (!url) return true // optional
          try {
            const allowedHosts = [
              'youtube.com',
              'youtu.be',
              'vimeo.com',
              'facebook.com',
              'fb.watch',
              'tiktok.com',
              'dailymotion.com',
            ]
            const parsed = new URL(url)
            const host = parsed.hostname.replace(/^www\./, '')
            const isAllowedHost = allowedHosts.some((h) => host.includes(h))
            const isDirectVideo = /\.(mp4|webm|ogg|mov)$/i.test(url)
            return isAllowedHost || isDirectVideo
              ? true
              : 'Allowed: YouTube, Vimeo, Facebook, TikTok, Dailymotion or direct MP4/WebM links'
          } catch (e) {
            return 'Enter a valid URL'
          }
        }),
    },
  ],
};
