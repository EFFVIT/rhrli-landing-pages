import { Suspense } from 'react'
import GclidCapture from '@/components/GclidCapture'
import GhlForm from '@/components/GhlForm'
import ReviewCard from '@/components/ReviewCard'

const OG_IMAGE = 'https://vitalitymmg.com/wp-content/uploads/2026/06/rhrli-og-featured.png'

// TODO: replace with a dedicated hair-transplant GHL form ID once created in RHRLI sub-account
const FORM_ID = 'J6ay2uZfqGOONYO1yJon'

export const metadata = {
  title: 'Hair Transplant on Long Island | RHRLI',
  description:
    'RHRLI performs FUE, ARTAS robotic, and FUT hair transplants on Long Island. Schedule a consultation with Dr. Baiju Gohil.',
  robots: { index: false, follow: false },
  openGraph: {
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'RHRLI — Robotic Hair Restoration of Long Island' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
  },
}

const NAVY = '#0D1B35'
const GOLD = '#F0B429'
const CREAM = '#F4F0EB'
const BLUE = '#1B3498'

const LOGO = 'https://start.rhrli.com/wp-content/uploads/2025/12/Group-8-1.png'
const HERO_IMG = 'https://start.rhrli.com/wp-content/uploads/2025/12/Gemini_Generated_Image_njainnnjainnnjai-2-2.png'
const DR_IMG = 'https://start.rhrli.com/wp-content/uploads/2026/02/Rectangle-43.png'

export default function HairTransplantLP() {
  return (
    <>
      <Suspense><GclidCapture /></Suspense>

      {/* Nav */}
      <header style={{
        background: NAVY,
        padding: '14px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <img src={LOGO} alt="RHRLI — Robotic Hair Restoration of Long Island" height={44} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href="tel:5162102369" style={{ color: '#fff', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
            516-210-2369
          </a>
          <a href="#consult-form" style={{
            background: GOLD,
            color: NAVY,
            fontWeight: 700,
            fontSize: '0.85rem',
            padding: '10px 20px',
            borderRadius: 24,
            textDecoration: 'none',
            letterSpacing: '0.04em',
            whiteSpace: 'nowrap',
          }}>
            SCHEDULE A CONSULT
          </a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: NAVY }} className="hero-grid">
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 600 }}>
          <img
            src={HERO_IMG}
            alt="RHRLI hair transplant patient"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute',
            bottom: 24,
            left: 24,
            right: 24,
            background: 'rgba(255,255,255,0.95)',
            borderRadius: 8,
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12,
          }}>
            <div>
              <div style={{ color: GOLD, fontSize: '1.1rem', letterSpacing: 2, marginBottom: 4 }}>★★★★★</div>
              <div style={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>Long Island&apos;s Hair Transplant Specialists</div>
              <div style={{ color: '#555', fontSize: '0.82rem', marginTop: 2 }}>
                Serving patients across Long Island and the greater New York area.
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '60px 48px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(240,180,41,0.15)',
            color: GOLD,
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '5px 12px',
            borderRadius: 2,
            marginBottom: 20,
            alignSelf: 'flex-start',
          }}>
            Hair Transplant Surgery
          </div>
          <h1 style={{
            color: '#fff',
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            The Right Technique.<br />The Right Surgeon.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.65, marginBottom: 8 }}>
            RHRLI performs FUE, ARTAS&#174; robotic, and FUT hair transplants on Long Island.
            The technique that fits you depends on your donor density, hairline goals, and biology — not a sales pitch.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.93rem', lineHeight: 1.6, marginBottom: 32 }}>
            Schedule a consultation to discuss which approach is right for you.
          </p>

          <div id="consult-form" style={{
            background: '#122349',
            borderRadius: 12,
            padding: '28px 28px 16px',
          }}>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', textAlign: 'center', marginBottom: 4 }}>
              Schedule a Consultation
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textAlign: 'center', marginBottom: 16 }}>
              No obligation &nbsp;·&nbsp; Private &nbsp;·&nbsp; Doctor-led
            </p>
            <GhlForm formId={FORM_ID} height={380} />
          </div>
        </div>
      </section>

      {/* Methods */}
      <section style={{ background: '#fff', padding: '72px 40px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#111', marginBottom: 8 }}>
            Three Approaches. One Standard: Your Best Outcome.
          </h2>
          <p style={{ textAlign: 'center', color: '#777', marginBottom: 48, fontSize: '0.95rem' }}>
            RHRLI performs all three techniques so the recommendation is driven by your biology, not inventory.
          </p>
          <div className="steps-grid">
            {[
              {
                label: 'ARTAS® Robotic FUE',
                desc: 'Robotic precision for consistent graft extraction. RHRLI is an authorized ARTAS® center with extensive robotic FUE experience.',
              },
              {
                label: 'Manual FUE',
                desc: 'Follicular unit extraction performed by hand for candidates where manual precision matches or exceeds robotic outcomes.',
              },
              {
                label: 'FUT Strip',
                desc: 'Follicular unit transplantation — the gold standard for maximum graft yield in candidates with significant coverage needs.',
              },
            ].map(({ label, desc }, i) => (
              <div key={i} style={{
                background: CREAM,
                borderRadius: 8,
                padding: '28px 24px',
                borderTop: `3px solid ${GOLD}`,
              }}>
                <p style={{ fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.06em', color: NAVY, marginBottom: 10, textTransform: 'uppercase' }}>
                  {label}
                </p>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surgeon */}
      <section style={{ background: NAVY, padding: '64px 40px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 56, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>
              Your Surgeon
            </p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: '#fff', marginBottom: 18 }}>
              Dr. Baiju Gohil
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, marginBottom: 14, fontSize: '0.975rem' }}>
              Board-certified surgeon and founder of RHRLI. Dr. Gohil performs all hair transplant procedures personally — you meet the surgeon in consultation and the same surgeon operates.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, fontSize: '0.975rem' }}>
              His practice is dedicated exclusively to hair restoration, with thousands of procedures performed on Long Island patients.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
              {['Board Certified', 'ARTAS® Center', 'FUE Specialist', 'Long Island Native'].map(c => (
                <span key={c} style={{
                  background: 'rgba(240,180,41,0.15)',
                  border: '1px solid rgba(240,180,41,0.35)',
                  color: GOLD,
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  padding: '5px 12px',
                  borderRadius: 2,
                  textTransform: 'uppercase',
                }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 8,
            overflow: 'hidden',
          }}>
            <img src={DR_IMG} alt="Dr. Baiju Gohil — RHRLI" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section id="bottom-form" style={{ background: CREAM, padding: '72px 40px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: NAVY, marginBottom: 12 }}>
            Ready to Talk?
          </h2>
          <p style={{ color: '#666', marginBottom: 32, fontSize: '0.95rem' }}>
            One conversation with Dr. Gohil is worth more than a hundred searches. Schedule yours.
          </p>
          <div style={{ background: '#fff', borderRadius: 12, padding: '28px 28px 16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <GhlForm formId={FORM_ID} height={380} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: NAVY, padding: '28px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
          &copy; {new Date().getFullYear()} Robotic Hair Restoration of Long Island &nbsp;|&nbsp;
          <a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Privacy Policy</a>
          &nbsp;|&nbsp;
          <a href="/cookie-policy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Cookie Policy</a>
          <br />
          ARTAS&#174; is a registered trademark of Venus Concept. Results may vary.
        </p>
      </footer>
    </>
  )
}
