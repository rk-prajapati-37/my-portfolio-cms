import VideoInput from '../src/components/VideoInput'

export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    { name: "title", title: "Project Title", type: "string", validation: Rule => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "category", title: "Category", type: "array", of: [{ type: "string" }], description: "One or multiple categories" },
    { name: "description", title: "Project Description", type: "text" },
    { name: "details", title: "Detailed Info", type: "blockContent" },
    { name: "date", title: "Date", type: "date" },
    { name: "client", title: "Client", type: "string" },
    { name: "tools", title: "Tools", type: "array", of: [{ type: "string" }] },
    { name: "plugins", title: "Plugins", type: "array", of: [{ type: "string" }] },
    { name: "github", title: "GitHub Link", type: "url" },
    { name: "demo", title: "Live Demo Link", type: "url" },
    {
      name: "images",
      title: "Project Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "video",
      title: "Project Video (optional)",
      type: "url",
      description:
        "Paste a YouTube/Vimeo/Facebook/TikTok/Dailymotion share link OR a direct mp4/webm URL (public). Private links may not embed.",
      validation: Rule => Rule.custom(url => {
        if (!url) return true
        try {
          const allowedHosts = ['youtube.com', 'youtu.be', 'vimeo.com', 'facebook.com', 'fb.watch', 'tiktok.com', 'dailymotion.com']
          const parsed = new URL(url)
          const host = parsed.hostname.replace(/^www\./, '')
          const isAllowedHost = allowedHosts.some(h => host.includes(h))
          const isDirectVideo = /\.(mp4|webm|ogg|mov)$/i.test(url)
          return isAllowedHost || isDirectVideo ? true : 'Allowed: YouTube, Vimeo, Facebook, TikTok, Dailymotion or direct MP4/WebM links'
        } catch (e) {
          return 'Enter a valid URL'
        {
          name: "video",
          title: "Project Video (optional)",
          type: "url",
          components: { input: VideoInput },
          description: "Paste a YouTube/Vimeo/Facebook/TikTok/Dailymotion share link OR a direct mp4/webm URL (public). Private links may not embed.",
          validation: Rule => Rule.custom(url => {
            if (!url) return true
            try {
              const allowedHosts = ['youtube.com', 'youtu.be', 'vimeo.com', 'facebook.com', 'fb.watch', 'tiktok.com', 'dailymotion.com']
              const parsed = new URL(url)
              const host = parsed.hostname.replace(/^www\./, '')
              const isAllowedHost = allowedHosts.some(h => host.includes(h))
              const isDirectVideo = /\.(mp4|webm|ogg|mov)$/i.test(url)
              return isAllowedHost || isDirectVideo ? true : 'Allowed: YouTube, Vimeo, Facebook, TikTok, Dailymotion or direct MP4/WebM links'
            } catch (e) {
              return 'Enter a valid URL'
            }
          })
        },
