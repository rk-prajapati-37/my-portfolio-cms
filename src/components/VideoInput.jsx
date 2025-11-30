import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
// Note: Avoid importing `part:@sanity/form-builder/patch-event` directly because Vite build may fail to resolve it.
// We avoid importing PatchEvent from the studio 'part' system to avoid build-resolution issues
// Avoid importing studio internal FormField to prevent Vite build resolving issues

function VideoInput(props) {
  // Support `type` or `schemaType`, and guard against undefined.
  const { value, onChange, readOnly } = props
  if (process.env.NODE_ENV !== 'production') {
    console.info('VideoInput props:', { value, readOnly })
    try { console.info('VideoInput props.path:', props.path) } catch(e) {}
  }
  const [inputValue, setInputValue] = useState(value || '')
  const debounceRef = useRef(null)

  useEffect(() => {
    setInputValue(value || '')
  }, [value])
  const fieldType = props.type ?? props.schemaType ?? {}
  const label = fieldType?.title ?? 'Demo Video (optional)'
  const description = fieldType?.description ?? ''

  const detectProvider = (url) => {
    try {
      const u = new URL(url)
      const host = u.hostname.replace(/^www\./, '')
      if (host.includes('youtube.com') || host.includes('youtu.be')) return 'youtube'
      if (host.includes('vimeo.com')) return 'vimeo'
      if (host.includes('facebook.com') || host.includes('fb.watch')) return 'facebook'
      if (host.includes('tiktok.com')) return 'tiktok'
      if (host.includes('dailymotion.com')) return 'dailymotion'
      if (/\.(mp4|webm|ogg|mov)$/i.test(url)) return 'direct'
      return null
    } catch (e) {
      return null
    }
  }

  const extractYouTubeId = (url) => {
    try {
      const u = new URL(url)
      if (u.hostname.includes('youtu.be')) return u.pathname.slice(1)
      if (u.hostname.includes('youtube.com')) return u.searchParams.get('v')
    } catch (e) {}
  }

  const handleChange = (ev) => {
    const url = ev.target.value
    try {
      setInputValue(url)
      if (debounceRef.current) clearTimeout(debounceRef.current)
      debounceRef.current = setTimeout(() => sendPatch(url), 450)
    } catch (err) {
      console.error('VideoInput onChange error', err)
    }
  }

  const sendPatch = (url) => {
    try {
      if (typeof onChange === 'function') {
        if (readOnly) {
          if (process.env.NODE_ENV !== 'production') console.info('VideoInput: readOnly - skipping sendPatch')
          return
        }
        // If props.path exists, use it as the base path to avoid Studio needing to call prefixAll
        const basePath = Array.isArray(props.path) ? props.path : props.path != null ? [props.path] : []
        const patches = url
          ? [{ type: 'set', path: basePath, value: url }]
          : [{ type: 'unset', path: basePath }]

        const preparedPatches = patches.map((p) => {
          const normalizedPath = Array.isArray(p.path)
            ? p.path
            : p.path != null
            ? [p.path]
            : []
          return Object.freeze({ ...p, path: Object.freeze(normalizedPath) })
        })

        // Ensure every patch's path is an actual array (safety-net). Replace any non-array path.
        const safePreparedPatches = preparedPatches.map((p) => ({ ...p, path: Array.isArray(p.path) ? p.path : p.path != null ? [p.path] : [] }))

        // Debugging: show what we will send to Studio's onChange
        if (process.env.NODE_ENV !== 'production') {
          console.info('VideoInput prepared patches:', JSON.parse(JSON.stringify(safePreparedPatches)))
          safePreparedPatches.forEach((p, i) => {
            console.info(
              `VideoInput preparedPatches[${i}] path type:`,
              p.path,
              'isArray:',
              Array.isArray(p.path),
              'typeof:',
              typeof p.path,
            )
          })
        }

        const fakePatchEvent = {
          patches: safePreparedPatches,
          // Studio will call prefixAll to add the field path; implement prefixAll to return a new patch event-like object
          prefixAll(prefix) {
            const prefixed = safePreparedPatches.map((p) => {
              // Normalize path to an array. If path is undefined/null, treat as []
              const originalPath = Array.isArray(p.path)
                ? p.path
                : p.path != null
                ? [p.path]
                : []
              const prefixArray = Array.isArray(prefix) ? prefix : prefix != null ? [prefix] : []
              // If basePath exists and originalPath is empty, use basePath so that patch paths are explicit
              const newPath = originalPath.length === 0 ? [...basePath, ...prefixArray] : [...prefixArray, ...originalPath]
              return {
                ...p,
                path: newPath,
              }
            })

            const result = {
              patches: Object.freeze(prefixed.map((pp) => Object.freeze({ ...pp, path: Object.freeze(pp.path) }))),
              prefixAll() {
                // The Studio may call prefixAll again; ensure returned object stays stable and has patches as arrays
                return result
              },
            }

            if (process.env.NODE_ENV !== 'production') {
              console.info('VideoInput prefixAll called:', prefix, 'result.patches:', JSON.parse(JSON.stringify(result.patches)))
            }

            return result
          },
        }

        // Prefer to use Studio's PatchEvent if available (via `part:@sanity/form-builder/patch-event`).
        // Use dynamic import to avoid Vite build issues during SSR; if import fails, fall back to fakePatchEvent.
        ;(async () => {
          try {
            // Import using a variable so that Vite does not statically analyze the `'part:@sanity/...'` module id.
            const moduleId = 'part:@sanity/form-builder/patch-event'
            const patchModule = await import(/* @vite-ignore */ moduleId)
            const PatchEventModule = patchModule?.default ? patchModule.default : patchModule
            if (PatchEventModule && typeof PatchEventModule.from === 'function') {
              // Build array of simple patch shapes for PatchEvent
              const patchShapes = preparedPatches.map((pp) => ({ type: pp.type, path: pp.path, value: pp.value }))
              onChange(PatchEventModule.from(patchShapes))
              return
            }
          } catch (e) {
            // dynamic import may fail (local runtime), we'll fall back to fakePatchEvent
            if (process.env.NODE_ENV !== 'production') {
              console.warn('VideoInput: could not import PatchEvent, falling back to shim; error:', e.message)
            }
          }

          try {
            // If no PatchEvent module is available, create a local compatible shim that mirrors PatchEvent API.
            class LocalPatchEvent {
              constructor(patches) {
                this.patches = patches
              }
              prefixAll(prefix) {
                const prefixArray = Array.isArray(prefix) ? prefix : prefix != null ? [prefix] : []
                const prefixed = this.patches.map((p) => {
                  const originalPath = Array.isArray(p.path) ? p.path : p.path != null ? [p.path] : []
                  const newPath = originalPath.length === 0 ? [...basePath, ...prefixArray] : [...prefixArray, ...originalPath]
                  return { ...p, path: newPath }
                })
                return new LocalPatchEvent(prefixed)
              }
              static from(patches) { return new LocalPatchEvent(patches) }
            }

            // Use local shim to construct a patch event and send
            const ev = LocalPatchEvent.from(safePreparedPatches.map((pp) => ({ type: pp.type, path: pp.path, value: pp.value })))
            onChange(ev)
          } catch (err2) {
            // This is typically where Studio may throw; we log for diagnostics
            console.error('VideoInput fallback onChange error', err2)
          }
        })()
      }
    } catch (err) {
      console.error('VideoInput sendPatch error', err)
    }
  }
  const handleBlur = () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
      debounceRef.current = null
    }
    sendPatch(inputValue)
  }

  // The provider and ytId should be derived from the *current* input value (user-typed) or the persisted value
  const currentUrl = inputValue || value
  const provider = detectProvider(currentUrl)
  const ytId = provider === 'youtube' && currentUrl ? extractYouTubeId(currentUrl) : null

  // For YouTube, compute the thumbnail URL (hqdefault is typically a good quality preview)
  const previewImg = ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : null

  return (
    <div style={{ marginBottom: '14px' }}>
      <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px' }}>{label}</label>
      {description && <div style={{ marginBottom: '8px', color: '#666' }}>{description}</div>}
      <div>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
          type="url"
          value={inputValue || ''}
          onChange={handleChange}
          onPaste={(ev) => setTimeout(() => handleChange({ target: { value: ev.clipboardData.getData('text') } }), 0)}
          placeholder={description}
          style={{ width: '100%', padding: '8px', marginBottom: '12px' }}
          readOnly={readOnly}
          onBlur={handleBlur}
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); sendPatch(inputValue); } }}
        />
          <button
            type="button"
            onClick={() => sendPatch('')}
            style={{ padding: '8px 10px' }}
            title="Clear video"
          >
            Clear
          </button>
        </div>
        {(currentUrl) && (
          <div style={{ maxWidth: '100%', aspectRatio: '16/9' }}>
            <ReactPlayer
              url={currentUrl}
              controls
              width="100%"
              height="100%"
              // If we have a YouTube ID we show the thumbnail with the `light` prop.
              // For other providers or direct mp4, `light` can be false — they may not support remote thumbnails.
              light={previewImg || false}
            />
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
