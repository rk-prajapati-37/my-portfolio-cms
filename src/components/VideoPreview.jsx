import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoPreview({ document }) {
  const url = document?.displayed?.video || document?.published?.video || document?.draft?.video
  if (!url) return <div>No video link provided</div>
  return (
    <div style={{ padding: 20 }}>
      <ReactPlayer url={url} controls width="100%" />
    </div>
  )
}
