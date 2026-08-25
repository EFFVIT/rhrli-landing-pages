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
import { usePathname } from 'next/navigation'
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

/* HEALTH-INTENT ROUTE GATE, added 2026-08-25 on Joe's explicit call.

   The layout note above says GA4 is retained per Joe, and that decision was
   made while RHRLI was an active client. RHRLI was lost 2026-08-21 and the
   property is still served from our infrastructure, so the exposure is still
   ours: this file was verified firing GA4 live on eight health-intent /c
   routes, /c/consult among them. Joe's call on 2026-08-25 was to kill the tag
   on the lost and inactive properties we still host.

   The privacy hardening below is careful and stays exactly as written; it just
   no longer runs on /c. Note this disables trackBookingComplete's virtual
   pageview on the consult funnel, which is intended: the account is in
   wind-down and no campaign should be optimising against it.

   Suppressing a tag on a medical page can only reduce exposure (H-26 / FM7,
   H-43). */
const HEALTH_INTENT_ROUTES = ['/c']
const isHealthIntent = (p: string) =>
  HEALTH_INTENT_ROUTES.some((r) => p === r || p.startsWith(r + '/'))

export default function GaTag() {
  const pathname = usePathname() || ''
  const suppressed = isHealthIntent(pathname)

  useEffect(() => {
    if (suppressed) return
    /* Belt and braces: if anything else on the page ever calls gtag('config'),
       these stay off for this measurement id. */
    const w = win()
    if (w && typeof w.gtag === 'function') {
      w.gtag('set', 'allow_google_signals', false)
      w.gtag('set', 'allow_ad_personalization_signals', false)
    }
  }, [suppressed])

  // Hooks are called unconditionally above, so this early return is safe.
  // Returning null is what actually stops the tag: guarding only the effect
  // would leave both <Script> tags rendering and GA4 still loading.
  if (suppressed) return null

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
