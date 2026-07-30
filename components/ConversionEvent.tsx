'use client'
import { useEffect, useRef } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// The post-submit conversion event, fired on OUR host.
//
// Why this exists (2026-07-30). The GHL form redirects to
// `start.rhrli.com/thank-you/` — a different host, a WordPress install behind
// WP Rocket delay-JS. Before the June 2026 landing-page migration that was the
// SAME host the ad click landed on, so the GA4 session carrying the gclid
// continued straight through and `Thank_You_View` credited Google Ads. After
// the migration the ad lands on more.rhrli.com and the conversion is measured
// on a host that never saw the click. This route puts the event back on the
// host that received the click, which is how it worked before.
//
// Event names deliberately match conversion actions ALREADY imported into the
// Google Ads account — `RHRLI - GA4 (web) Thank_You_View` and
// `RHRLI - GA4 (web) RL_Form_Submit` — so nothing has to be created account
// side and no historical series is split.
//
// HARD — do NOT add a GTM trigger that fires a GA4 tag on the `rl_conversion`
// dataLayer push below. This component sends the GA4 events itself. A GTM tag
// on the same push double-counts every lead. The push is there for visibility
// in Tag Assistant and for non-GA4 tags (e.g. a Meta lead event), nothing more.
// ─────────────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

// Both actions are enabled and importing into Google Ads today.
const GA4_EVENTS = ['Thank_You_View', 'RL_Form_Submit'] as const

const PASSTHROUGH = [
  'gclid', 'gbraid', 'wbraid', 'fbclid',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
] as const

export default function ConversionEvent() {
  // Guards a double fire inside one mount (React 18 StrictMode runs effects
  // twice in dev). The sessionStorage key below guards the reload case.
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    fired.current = true

    const params = new URLSearchParams(window.location.search)

    // The redirect carries the click ids through from the form. Fall back to
    // sessionStorage for the case where GHL drops them, so an internal
    // navigation still reports the click that started the session.
    const payload: Record<string, string> = {}
    for (const key of PASSTHROUGH) {
      let val = params.get(key) ?? ''
      if (!val) {
        try { val = sessionStorage.getItem(key) ?? '' } catch { /* private mode */ }
      }
      // GHL has been seen to hand back a space-joined value when the inbound
      // URL was malformed. A gclid never contains whitespace, so anything after
      // the first token is not part of it — send the token, not the noise.
      if (val) payload[key] = val.split(/\s+/)[0]
    }

    // One conversion per submission. A refresh or a back-then-forward on the
    // thank-you page must not book a second lead.
    const dedupeKey = `rl_conv_${payload.gclid || payload.fbclid || 'direct'}`
    try {
      if (sessionStorage.getItem(dedupeKey)) return
      sessionStorage.setItem(dedupeKey, String(Date.now()))
    } catch { /* private mode — fall through and fire once for this mount */ }

    // GA4 events. GTM's GA4 configuration tag defines window.gtag, so this
    // reaches the same property the imported conversion actions read.
    if (typeof window.gtag === 'function') {
      for (const name of GA4_EVENTS) {
        window.gtag('event', name, { ...payload, send_to: 'default' })
      }
    }

    // Visibility only. See the HARD note above before attaching anything.
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'rl_conversion', ...payload })
  }, [])

  return null
}
