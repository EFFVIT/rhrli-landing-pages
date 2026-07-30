'use client'
import { useEffect, useRef } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// The post-submit conversion signal, raised on OUR host.
//
// Why this exists (2026-07-30). The GHL form redirects to
// `start.rhrli.com/thank-you/` — a different host, a WordPress install behind
// WP Rocket delay-JS. Before the June 2026 landing-page migration that was the
// SAME host the ad click landed on, so the GA4 session carrying the gclid ran
// straight through and `Thank_You_View` credited Google Ads. Since the
// migration the click lands on more.rhrli.com and the conversion is measured
// somewhere that never saw it. This route moves the signal back.
//
// HARD — this pushes to dataLayer; it does NOT call gtag. Measured on the live
// page 2026-07-30: GTM initialises the container and configures both
// G-6WKP6Q9PBX and AW-923509165, but `typeof window.gtag` is **undefined**.
// The gtag() helper is defined by the inline gtag snippet, which this app does
// not use — it loads GTM. An earlier version of this file called
// `window.gtag('event', …)` behind a typeof guard and was therefore a silent
// no-op that fired nothing at all. Do not reintroduce it. dataLayer is the
// only interface GTM actually listens on.
//
// THIS COMPONENT IS INERT UNTIL GTM IS CONFIGURED. Required, once, in
// GTM-WP5S55H:
//   1. Trigger — Custom Event, event name `rl_conversion`.
//   2. Tag — GA4 Event on that trigger, event name `Thank_You_View`, using the
//      existing G-6WKP6Q9PBX configuration. That name is what the already
//      enabled Google Ads action `RHRLI - GA4 (web) Thank_You_View` imports, so
//      nothing is created account-side and no historical series is split.
//   3. Do NOT also map this trigger to `RL_Form_Submit`. If any existing GTM
//      trigger already fires that event on a form submit, mapping it here too
//      double-counts every lead. One push, one conversion.
// ─────────────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const PASSTHROUGH = [
  'gclid', 'gbraid', 'wbraid', 'fbclid',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
] as const

export default function ConversionEvent() {
  // Guards a double push within one mount (React StrictMode runs effects twice
  // in dev). The sessionStorage key below guards the reload/back-forward case.
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current) return
    pushed.current = true

    const params = new URLSearchParams(window.location.search)

    // The GHL redirect carries the click ids through from the form. Fall back
    // to sessionStorage so an internal navigation still reports the click that
    // started the session.
    const payload: Record<string, string> = {}
    for (const key of PASSTHROUGH) {
      let val = params.get(key) ?? ''
      if (!val) {
        try { val = sessionStorage.getItem(key) ?? '' } catch { /* private mode */ }
      }
      // GHL has been seen to hand back a space-joined value when the inbound
      // URL was malformed. A click id never contains whitespace, so anything
      // past the first token is not part of it.
      if (val) payload[key] = val.split(/\s+/)[0]
    }

    // One conversion per submission. A refresh, or back-then-forward onto the
    // thank-you page, must not book a second lead.
    const dedupeKey = `rl_conv_${payload.gclid || payload.fbclid || 'direct'}`
    try {
      if (sessionStorage.getItem(dedupeKey)) return
      sessionStorage.setItem(dedupeKey, String(Date.now()))
    } catch {
      // Private mode: no persistence available. The useRef guard still holds
      // for this mount, so we fire once rather than not at all.
    }

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'rl_conversion', ...payload })
  }, [])

  return null
}
