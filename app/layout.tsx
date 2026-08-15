import Script from 'next/script'
import DniSwap from '@/components/DniSwap'
import Fab from '@/components/fab/Fab'
/* Lives under components/consult/ for historical reasons — it is now the
   fleet-wide analytics tag, not a consult-only one. Left in place so the two
   consult pages that already render it keep working; next/script dedupes on
   the `ga4-src` / `ga4-config` ids, so rendering it here and there is safe. */
import GaTag from '@/components/consult/GaTag'
import './globals.css'

const OG_IMAGE = 'https://vitalitymmg.com/wp-content/uploads/2026/06/rhrli-og-featured.png'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  openGraph: {
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'RHRLI — Robotic Hair Restoration of Long Island' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
  },
}

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
          {/* GTM-WP5S55H REMOVED FLEET-WIDE ON THE LANDING PAGES, 2026-08-15, at Joe's
              direction. Measured live the same day, that container delivered Microsoft
              Clarity session recording, the Meta pixel, Bing UET and a DoubleClick
              view-through remarketing beacon onto every route here, including
              /c/evaluation, which asks a prospective patient for their name, phone and
              hair-loss situation. Neither Microsoft nor Meta will sign a BAA.

              The container was NOT edited, and must not be: rhrli.com — the client's
              main website — serves the SAME GTM-WP5S55H. Stripping tags inside the
              container would have silently removed the client's own analytics and
              retargeting from their whole site. The landing pages are ours to change;
              the container is not. Scope is the LP fleet only.

              GA4 is retained per Joe, via <GaTag /> below, which loads it directly with
              allow_google_signals:false — so the pageview cannot be joined to a signed-in
              Google profile and turned back into a remarketing audience. Removing the
              beacon without that flag would have been cosmetic (H-32).

              Verified before removal: NO Google Ads conversion beacon fires anywhere on
              this fleet — every AW- hit was /pagead/viewthroughconversion (remarketing),
              never /pagead/conversion. Conversion tracking runs through GHL/RootLogic, so
              nothing here feeds Smart Bidding. The <noscript> iframe went with it. */}
          <Script
            id="ghl-chat-widget"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(){var s=document.createElement('script');s.src='https://widgets.leadconnectorhq.com/loader.js';s.setAttribute('data-resources-url','https://widgets.leadconnectorhq.com/chat-widget/loader.js');s.setAttribute('data-widget-id','668421b21123b130519a8f35');document.head.appendChild(s);})();`,
            }}
          />
        </head>
        <body>
          <GaTag />
          <DniSwap />
          <Fab client="rhrli" />
          {children}
        </body>
      </html>
    )
  }
