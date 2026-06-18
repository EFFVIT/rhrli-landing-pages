import { Suspense } from 'react'
import GclidCapture from '@/components/GclidCapture'
import GhlForm from '@/components/GhlForm'
import ReviewCard from '@/components/ReviewCard'

const OG_IMAGE = 'https://vitalitymmg.com/wp-content/uploads/2026/06/rhrli-og-featured.png'

// TODO: replace with a dedicated hair-restoration GHL form ID once created in RHRLI sub-account
const FORM_ID = 'J6ay2uZfqGOONYO1yJon'

export const metadata = {
  title: 'Hair Restoration on Long Island | RHRLI',
  description:
    'RHRLI offers hair restoration options for men and women on Long Island. Learn about surgical and non-surgical approaches from Dr. Baiju Gohil.',
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

export default function HairRestorationLP() {
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
            REQUEST A CONSULT
          </a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: NAVY }} className="hero-grid">
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 600 }}>
          <img
            src={HERO_IMG}
            alt="RHRLI hair restoration patient"
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
          }}>
            <div style={{ color: GOLD, fontSize: '1.1rem', letterSpacing: 2, marginBottom: 4 }}>★★★★★</div>
            <div style={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>Exclusively Hair Restoration</div>
            <div style={{ color: '#555', fontSize: '0.82rem', marginTop: 2 }}>
              Dr. Gohil&apos;s practice focuses entirely on hair restoration — nothing else.
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
            Long Island Hair Restoration
          </div>
          <h1 style={{
            color: '#fff',
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            Hair Restoration on Long Island — From One of New York&apos;s Most Experienced Surgeons
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.65, marginBottom: 8 }}>
            RHRLI provides surgical and non-surgical hair restoration for men and women.
            The right approach depends on your hair biology, goals, and stage of loss — and starts with a conversation.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.93rem', lineHeight: 1.6, marginBottom: 32 }}>
            Request a consultation to discuss your options with Dr. Gohil directly.
          </p>

          <div id="consult-form" style={{
            background: '#122349',
            borderRadius: 12,
            padding: '28px 28px 16px',
          }}>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', textAlign: 'center', marginBottom: 4 }}>
              Request a Consultation
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textAlign: 'center', marginBottom: 16 }}>
              No obligation &nbsp;·&nbsp; Private &nbsp;·&nbsp; Doctor-led
            </p>
            <GhlForm formId={FORM_ID} height={380} />
          </div>
        </div>
      </section>

      {/* Options */}
      <section style={{ background: '#fff', padding: '72px 40px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#111', marginBottom: 8 }}>
            Every Patient Is Different. Every Plan Reflects That.
          </h2>
          <p style={{ textAlign: 'center', color: '#777', marginBottom: 48, fontSize: '0.95rem' }}>
            RHRLI offers surgical and non-surgical approaches. What&apos;s right for you depends on what we find in your evaluation.
          </p>
          <div className="steps-grid">
            {[
              {
                label: 'Surgical Transplant',
                desc: 'FUE (robotic or manual) and FUT for permanent follicle transfer. The only approach that moves your own living hair.',
              },
              {
                label: 'Non-Surgical Treatment',
                desc: 'PRP therapy, low-level laser, and medical management for candidates in earlier stages of loss.',
              },
              {
                label: 'Combination Plans',
                desc: 'For many patients, the best outcome combines a surgical procedure with ongoing medical maintenance.',
              },
              {
                label: 'Women\'s Hair Restoration',
                desc: 'Specialized protocols for female pattern loss, which requires different evaluation criteria and techniques.',
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

      {/* Process */}
      <section style={{ background: NAVY, padding: '72px 40px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 8 }}>
            Your Restoration Plan in Four Steps
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.65)', marginBottom: 48, fontSize: '0.95rem' }}>
            From first conversation to completed procedure, the process is straightforward.
          </p>
          <div className="steps-grid">
            {[
              { n: '1', title: 'SCHEDULE A CONSULTATION', desc: 'Meet with Dr. Gohil directly — not a sales coordinator.' },
              { n: '2', title: 'HAIR LOSS ASSESSMENT', desc: 'Dr. Gohil evaluates your donor density, pattern, and candidacy.' },
              { n: '3', title: 'PERSONALIZED PLAN', desc: 'A treatment plan built around your biology and goals, not a menu.' },
              { n: '4', title: 'PROCEDURE & FOLLOW-UP', desc: 'RHRLI handles everything from pre-op to post-procedure care.' },
            ].map(({ n, title, desc }) => (
              <div key={n} style={{ textAlign: 'center', padding: '0 8px' }}>
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: BLUE,
                  color: '#fff',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  {n}
                </div>
                <p style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.06em', color: GOLD, marginBottom: 8 }}>
                  {title}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', lineHeight: 1.55 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section id="bottom-form" style={{ background: CREAM, padding: '72px 40px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: NAVY, marginBottom: 12 }}>
            Start the Conversation
          </h2>
          <p style={{ color: '#666', marginBottom: 32, fontSize: '0.95rem' }}>
            Dr. Gohil reviews every new patient consultation personally. One visit clarifies more than months of searching.
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
        </p>
      </footer>
    </>
  )
}
