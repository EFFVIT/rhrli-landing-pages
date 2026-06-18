import { Suspense } from 'react'
import GclidCapture from '@/components/GclidCapture'
import GhlForm from '@/components/GhlForm'

const OG_IMAGE = 'https://vitalitymmg.com/wp-content/uploads/2026/06/rhrli-og-featured.png'

// TODO: replace with a dedicated evaluation GHL form ID once created in RHRLI sub-account
const FORM_ID = 'J6ay2uZfqGOONYO1yJon'

export const metadata = {
  title: 'Hair Loss Evaluation | RHRLI — Long Island',
  description:
    'Not sure where to start? RHRLI offers doctor-led hair loss evaluations on Long Island. Understand your options before making any decision.',
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

export default function EvaluationLP() {
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
          <a href="#eval-form" style={{
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
            REQUEST EVALUATION
          </a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: NAVY }} className="hero-grid">
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 600 }}>
          <img
            src={HERO_IMG}
            alt="RHRLI patient evaluation"
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
            <div style={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>No Pressure. No Obligation.</div>
            <div style={{ color: '#555', fontSize: '0.82rem', marginTop: 2 }}>
              The evaluation is a medical assessment, not a sales conversation.
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
            Free Hair Loss Evaluation
          </div>
          <h1 style={{
            color: '#fff',
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            Start With a Medical Evaluation —<br />Not a Sales Pitch
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.65, marginBottom: 8 }}>
            Most people researching hair restoration aren&apos;t sure yet — and that&apos;s exactly the right time to come in.
            RHRLI&apos;s evaluation gives you a clear picture of your options before any decision is made.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.93rem', lineHeight: 1.6, marginBottom: 32 }}>
            A doctor-led conversation. No commitment required.
          </p>

          <div id="eval-form" style={{
            background: '#122349',
            borderRadius: 12,
            padding: '28px 28px 16px',
          }}>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', textAlign: 'center', marginBottom: 4 }}>
              Request Your Free Evaluation
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textAlign: 'center', marginBottom: 16 }}>
              No obligation &nbsp;·&nbsp; Private &nbsp;·&nbsp; Doctor-led
            </p>
            <GhlForm formId={FORM_ID} height={380} />
          </div>
        </div>
      </section>

      {/* What the evaluation covers */}
      <section style={{ background: '#fff', padding: '72px 40px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#111', marginBottom: 8 }}>
            What the Evaluation Covers
          </h2>
          <p style={{ textAlign: 'center', color: '#777', marginBottom: 48, fontSize: '0.95rem' }}>
            This is a medical assessment — not a tour of before-and-after photos.
          </p>
          <div className="steps-grid">
            {[
              {
                n: '1',
                title: 'CAUSE OF HAIR LOSS',
                desc: 'Dr. Gohil identifies whether your loss is genetic, hormonal, nutritional, or stress-related — because the answer changes the plan.',
              },
              {
                n: '2',
                title: 'STAGE & PATTERN',
                desc: 'Your loss is mapped using a clinical staging system to understand where you are and where you\'re likely headed.',
              },
              {
                n: '3',
                title: 'CANDIDACY ASSESSMENT',
                desc: 'Not every patient is a transplant candidate. The evaluation tells you honestly whether surgery, non-surgical treatment, or a combination is appropriate.',
              },
              {
                n: '4',
                title: 'YOUR OPTIONS',
                desc: 'You leave with a clear picture of what\'s available to you — and what each path realistically looks like.',
              },
            ].map(({ n, title, desc }) => (
              <div key={n} style={{ textAlign: 'center', padding: '0 8px' }}>
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: NAVY,
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
                <p style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.06em', color: NAVY, marginBottom: 8 }}>
                  {title}
                </p>
                <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.55 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy callout */}
      <section style={{ background: NAVY, padding: '64px 40px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 16 }}>
            Our Philosophy
          </p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', color: '#fff', lineHeight: 1.3, marginBottom: 20 }}>
            The Evaluation Is the Treatment
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.8 }}>
            A correct diagnosis changes outcomes more than any technique. At RHRLI, the evaluation isn&apos;t a funnel step —
            it&apos;s where the work begins. Patients who understand their own hair biology make better decisions and get better results.
          </p>
          <a href="#bottom-form" style={{
            display: 'inline-block',
            marginTop: 32,
            background: GOLD,
            color: NAVY,
            fontWeight: 700,
            fontSize: '0.88rem',
            letterSpacing: '0.06em',
            padding: '16px 40px',
            borderRadius: 32,
            textDecoration: 'none',
          }}>
            REQUEST YOUR EVALUATION
          </a>
        </div>
      </section>

      {/* Bottom form */}
      <section id="bottom-form" style={{ background: CREAM, padding: '72px 40px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: NAVY, marginBottom: 12 }}>
            Request Your Free Evaluation
          </h2>
          <p style={{ color: '#666', marginBottom: 32, fontSize: '0.95rem' }}>
            Dr. Gohil reviews every new patient personally. Takes two minutes to request.
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
