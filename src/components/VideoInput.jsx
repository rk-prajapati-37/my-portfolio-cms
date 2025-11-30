import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
// We avoid importing PatchEvent from the studio 'part' system to avoid build-resolution issues
// Avoid importing studio internal FormField to prevent Vite build resolving issues

function VideoInput({ type, value, onChange, readOnly }) {
  const handleChange = (ev) => {
    const url = ev.target.value
    if (url) {
      onChange({ patches: [{ type: 'set', path: [], value: url }] })
    } else {
      onChange({ patches: [{ type: 'unset', path: [] }] })
    }
  }

  return (
    <div style={{ marginBottom: '14px' }}>
      <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px' }}>{type.title}</label>
      {type.description && <div style={{ marginBottom: '8px', color: '#666' }}>{type.description}</div>}
      <div>
        <input
          type="url"
          value={value || ''}
          onChange={handleChange}
          placeholder={type.description}
          style={{ width: '100%', padding: '8px', marginBottom: '12px' }}
          readOnly={readOnly}
        />
        {value && (
          <div style={{ maxWidth: '100%', aspectRatio: '16/9' }}>
            <ReactPlayer url={value} controls width="100%" height="100%" />
          </div>
        )}
      </div>
    </div>
  )
}

VideoInput.propTypes = {
  type: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
}

export default VideoInput
