React Player Example

Install react-player in your front-end project (not required in the studio):

```powershell
npm install react-player
```

Example (React/Next.js):

```jsx
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export default function ProjectPlayer({ url }) {
  if (!url) return null

  // For direct file links you can still use react-player or the <video> tag
  return (
    <div className='project-player'>
      <ReactPlayer url={url} controls width='100%' />
    </div>
  )
}
```

Fallback (pure HTML5 for direct mp4 links):

```jsx
export default function ProjectPlayerFallback({ url }) {
  if (!url) return null
  const isDirectVideo = /\.(mp4|webm|ogg|mov)$/i.test(url)
  if (isDirectVideo) {
    return (
      <video controls width='100%'>
        <source src={url} />
        Your browser does not support the video tag.
      </video>
    )
  }
  // else show link or react-player
  return <a href={url} target='_blank' rel='noopener noreferrer'>{url}</a>
}
```

Notes:
- A public or unlisted YouTube/Vimeo link will embed.
- Private videos may not embedd; for private cloud files use pre-signed URLs or server-side streaming solution.
- If using `react-player`, it handles many providers (YouTube, Vimeo, Facebook, etc.) out of the box.
