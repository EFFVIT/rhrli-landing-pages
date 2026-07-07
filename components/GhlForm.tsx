'use client'
import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

declare global {
  interface Window {
    iFrameResize?: (options: Record<string, unknown>, selector: string) => void
  }
}

export default function GhlForm({ formId, height = 620 }: { formId: string; height?: number }) {
  const [src, setSrc] = useState(`https://api.leadconnectorhq.com/widget/form/${formId}`)
  const iframeId = `inline-${formId}`
  const retries = useRef(0)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const out = new URLSearchParams()

    // GCLID — read from URL or sessionStorage fallback
    const gclid = urlParams.get('gclid') || sessionStorage.getItem('gclid')
    if (gclid) {
      sessionStorage.setItem('gclid', gclid)
      out.set('gclid', gclid)
    }

    // UTM params — read from URL, persist to sessionStorage, pass to form
    UTM_KEYS.forEach(key => {
      const val = urlParams.get(key) || sessionStorage.getItem(key)
      if (val) {
        sessionStorage.setItem(key, val)
        out.set(key, val)
      }
    })

    if (out.toString()) {
      setSrc(`https://api.leadconnectorhq.com/widget/form/${formId}?${out.toString()}`)
    }
  }, [formId])

  // GHL's form iframe ships the iframe-resizer "child" script and broadcasts
  // [iFrameResizerChild]Ready over postMessage, but never gets a reply because
  // this page never loaded the matching "parent" script — so the iframe was
  // stuck at whatever fixed `height` was passed in, clipping the submit
  // button whenever the form (fields, validation errors, legal copy) grew
  // taller than that guess. Loading the parent script completes the
  // handshake so the iframe is resized to its real content height.
  const initResize = () => {
    if (window.iFrameResize) {
      window.iFrameResize(
        { checkOrigin: false, log: false },
        `#${iframeId}`
      )
    } else if (retries.current < 25) {
      retries.current += 1
      setTimeout(initResize, 200)
    }
  }

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.9/js/iframeResizer.min.js"
        strategy="afterInteractive"
        onLoad={initResize}
      />
      <iframe
        src={src}
        style={{ width: '100%', height: `${height}px`, border: 'none', display: 'block' }}
        id={iframeId}
        onLoad={initResize}
      />
    </>
  )
}
