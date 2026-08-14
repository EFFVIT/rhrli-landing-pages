'use client'

/* ============================================================================
   GA4 on /c/consult — added at Joe's explicit direction, 2026-08-14.

   OVERRIDE ON THE RECORD. The LP contract calls a browser analytics tag on a
   health-intent form page non-waivable (H-26 / §6 failure mode 7). This page
   asks the visitor to select a Norwood or Ludwig stage and whether they have
   had a prior procedure, and RHRLI is BAA-covered. Joe was told twice and
   directed it anyway; §0 gives him that authority and this comment is the log.

   Built to the narrowest shape that still delivers what was asked:

   - GA4 ONLY, loaded directly. NOT the GTM container: GTM-WP5S55H also carries
     DoubleClick remarketing and Microsoft Clarity session recording, and
     Clarity can read first-party form input. Restoring the container would ship
     three tags under cover of a request for one.
   - allow_google_signals: false. This is the load-bearing setting. It stops the
     visit being joined to a signed-in Google profile, which is what turns a
     page view into a remarketing audience member.
   - allow_ad_personalization_signals: false.
   - No field value is ever sent. No pattern, no prior_procedure, no name,
     phone or email reaches an event parameter, ever.
   - The step machine never changes the URL, so the automatic page_view cannot
     leak which step or which stage the visitor selected.

   The one deliberate event is a virtual page_view on a completed booking, so a
   destination conversion can be configured without a real thank-you route.
   ========================================================================== */
import Script from 'next/script'
import { useEffect } from 'react'

export const GA_ID = 'G-6WKP6Q9PBX'

/* No `declare global` here: Next ships its own Window.dataLayer type and a
   second declaration collides. A local cast keeps this file self-contained. */
type Gtag = (...args: unknown[]) => void
const win = () => (typeof window === 'undefined' ? null : (window as unknown as { gtag?: Gtag }))

/** Virtual pageview for the in-page confirmation state. Carries no lead data. */
export function trackBookingComplete() {
  const w = win()
  if (!w || typeof w.gtag !== 'function') return
  w.gtag('event', 'page_view', {
    page_title: 'Consult booked',
    page_path: '/c/consult/thank-you',
    page_location: `${window.location.origin}/c/consult/thank-you`,
  })
}

export default function GaTag() {
  useEffect(() => {
    /* Belt and braces: if anything else on the page ever calls gtag('config'),
       these stay off for this measurement id. */
    const w = win()
    if (w && typeof w.gtag === 'function') {
      w.gtag('set', 'allow_google_signals', false)
      w.gtag('set', 'allow_ad_personalization_signals', false)
    }
  }, [])

  return (
    <>
      <Script
        id="ga4-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
gtag('js', new Date());
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});
gtag('config','${GA_ID}',{
  allow_google_signals:false,
  allow_ad_personalization_signals:false,
  anonymize_ip:true
});`}
      </Script>
    </>
  )
}
