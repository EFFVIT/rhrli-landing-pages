'use client'
import { useEffect, useState } from 'react'

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

export default function GhlForm({ formId, height = 620 }: { formId: string; height?: number }) {
  const [src, setSrc] = useState(`https://api.leadconnectorhq.com/widget/form/${formId}`)

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

  return (
    <iframe
      src={src}
      style={{ width: '100%', height: `${height}px`, border: 'none', display: 'block' }}
      scrolling="no"
      id={`inline-${formId}`}
    />
  )
}
