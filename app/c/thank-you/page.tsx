import { Suspense } from 'react'
import ConversionEvent from '@/components/ConversionEvent'

const OG_IMAGE = 'https://more.rhrli.com/og/c-hair-restoration.webp'

export const metadata = {
  title: 'Thank You | RHRLI, Long Island',
  description: 'Your consultation request has been received. A RHRLI patient coordinator will be in touch shortly.',
  // A thank-you page must never be indexed: it is reachable only after a
  // submission, and an indexed one collects organic traffic that fires the
  // conversion without a lead behind it.
  robots: { index: false, follow: false },
  openGraph: {
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'RHRLI, Robotic Hair Restoration of Long Island' }],
  },
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
}

const NAVY = '#0D1B35'
const GOLD = '#F0B429'
const CREAM = '#F4F0EB'

const LOGO_WORDMARK = '/rhrli-wordmark.svg'
// Sourced from app/c/hair-restoration/page.tsx — do not retype from memory.
// DniSwap replaces this number on gclid sessions, same as every other LP.
const PHONE = '516-210-2369'

export default function ThankYouPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: CREAM,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 20px',
        textAlign: 'center',
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* useSearchParams inside ConversionEvent requires a Suspense boundary. */}
      <Suspense fallback={null}>
        <ConversionEvent />
      </Suspense>

      <img
        src={LOGO_WORDMARK}
        alt="RHRLI — Robotic Hair Restoration of Long Island"
        style={{ height: 44, width: 'auto', marginBottom: 40 }}
      />

      <div
        aria-hidden="true"
        style={{
          width: 64, height: 64, borderRadius: '50%', background: GOLD,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 28,
        }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="3"
             strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h1 style={{
        color: NAVY, fontSize: 'clamp(28px, 5vw, 40px)', lineHeight: 1.2,
        margin: '0 0 16px', fontWeight: 700, maxWidth: 620,
      }}>
        Thank you — we&rsquo;ve received your request
      </h1>

      <p style={{
        color: NAVY, opacity: 0.8, fontSize: 'clamp(16px, 2.2vw, 18px)',
        lineHeight: 1.6, margin: '0 0 32px', maxWidth: 560,
      }}>
        A RHRLI patient coordinator will reach out shortly to schedule your
        consultation with Dr.&nbsp;Raffi&nbsp;Barsoumian and answer any questions.
      </p>

      <p style={{ color: NAVY, opacity: 0.7, fontSize: 16, margin: '0 0 8px' }}>
        Prefer to speak with someone now?
      </p>
      <a
        href={`tel:${PHONE.replace(/\D/g, '')}`}
        style={{
          display: 'inline-block', background: NAVY, color: CREAM,
          padding: '14px 32px', borderRadius: 6, textDecoration: 'none',
          fontSize: 18, fontWeight: 600,
        }}
      >
        Call {PHONE}
      </a>
    </main>
  )
}
