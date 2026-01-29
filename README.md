# Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open-source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the Sanity community](https://www.sanity.io/community/join?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
 
## Video link guidance (Demo Video field)

Your project schema contains a `video` field (`type: url`) for demo videos. It accepts common social links such as YouTube, Vimeo, Facebook, TikTok, Dailymotion or direct MP4/WebM URLs.

If you want to embed the videos on a website, use a front-end player like `react-player` or an HTML5 `<video>` element for direct files. See `static/react-player-example.md` for a usage snippet.

If a video link is private (e.g., restricted or requires login) it will not embed; use server-side streaming or pre-signed URLs for private cloud-hosted files.
