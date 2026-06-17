import { Suspense } from 'react'
import GclidCapture from '@/components/GclidCapture'
import GhlForm from '@/components/GhlForm'
import FaqAccordion from '@/components/FaqAccordion'

const OG_IMAGE = 'https://vitalitymmg.com/wp-content/uploads/2026/06/rhrli-og-featured.png'

export const metadata = {
  title: 'Medical Evaluation for Hair Loss | RHRLI — Long Island',
  description:
    'Schedule a doctor-led hair loss evaluation at RHRLI. Discover the cause of your hair loss and learn which treatment options fit your goals.',
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
const FINANCE_IMG = 'https://start.rhrli.com/wp-content/uploads/2025/12/Gemini_Generated_Image_njainnnjainnnjai-2-2.png'

export default function HairRestorationGoogle() {
  return (
    <>
      <Suspense><GclidCapture /></Suspense>

      {/* ── Nav ── */}
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
          <a href="#evaluation" style={{
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

      {/* ── Hero ── */}
      <section style={{ background: NAVY }} className="hero-grid">
        {/* Left: photo + badge */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 600 }}>
          <img
            src={HERO_IMG}
            alt="Patient at RHRLI"
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
              <div style={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>Patient-Centered Care</div>
              <div style={{ color: '#555', fontSize: '0.82rem', marginTop: 2 }}>
                Patients appreciate our personalized, doctor-led approach.
              </div>
            </div>
          </div>
        </div>

        {/* Right: headline + form */}
        <div style={{ padding: '60px 48px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{
            color: '#fff',
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            Medical Evaluation for Thinning Hair &amp; Hair Loss Conditions
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.65, marginBottom: 8 }}>
            Discover the cause of your hair loss and learn which treatment options fit your goals and hair biology.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.93rem', lineHeight: 1.6, marginBottom: 32 }}>
            Request your consultation to discuss your hair loss concerns with a licensed medical professional.
          </p>

          {/* Form card */}
          <div id="evaluation" style={{
            background: '#122349',
            borderRadius: 12,
            padding: '28px 28px 16px',
          }}>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', textAlign: 'center', marginBottom: 4 }}>
              Request Your Evaluation
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textAlign: 'center', marginBottom: 16 }}>
              No obligation &nbsp;·&nbsp; Private &nbsp;·&nbsp; Doctor-led
            </p>
            <GhlForm formId="J6ay2uZfqGOONYO1yJon" height={380} />
          </div>
        </div>
      </section>

      {/* ── 4 Steps ── */}
      <section style={{ background: '#fff', padding: '72px 40px 0' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 800, color: '#111', marginBottom: 8 }}>
            Your Hair Loss Plan Is Just Four Steps Away
          </h2>
          <p style={{ textAlign: 'center', color: '#777', marginBottom: 48, fontSize: '0.95rem' }}>
            It&apos;s simpler than you think, and it all starts with a conversation.
          </p>

          <div className="steps-grid">
            {[
              { n: '1', title: 'SCHEDULE YOUR EVALUATION', desc: 'Pick a time that works best for you.' },
              { n: '2', title: 'SHARE YOUR GOALS', desc: 'Tell us what you want to improve.' },
              { n: '3', title: 'HAIR LOSS ASSESSMENT', desc: 'Your provider examines thinning patterns.' },
              { n: '4', title: 'PERSONALIZED TREATMENT PLAN', desc: 'Get a plan tailored to your needs.' },
            ].map(({ n, title, desc }) => (
              <div key={n} style={{ textAlign: 'center', padding: '0 8px' }}>
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  border: `3px solid ${NAVY}`,
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

          {/* No pressure callout */}
          <div style={{ borderTop: '1px solid #E5E7EB', marginTop: 56, padding: '60px 0 72px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#111', lineHeight: 1.25, marginBottom: 12 }}>
              No pressure. No obligation. Just honest<br />answers about your options.
            </h2>
            <p style={{ color: '#777', marginBottom: 32, fontSize: '0.95rem' }}>
              You&apos;re in the right place — thousands start here every week.
            </p>
            <a href="#bottom-form" style={{
              display: 'inline-block',
              background: BLUE,
              color: '#fff',
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
        </div>
      </section>

      {/* ── Why Patients Trust Us ── */}
      <section style={{ background: CREAM, padding: '72px 40px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#111', lineHeight: 1.25, marginBottom: 10 }}>
            Why Patients Feel Confident Choosing Our<br />Team—and Why You Can Too
          </h2>
          <p style={{ textAlign: 'center', color: '#777', marginBottom: 48, fontSize: '0.93rem' }}>
            Real care. Real support. Real patient-first focus.
          </p>
          <div className="trust-grid">
            {[
              { icon: '👤', title: 'Designed for Your Hair Loss Pattern', desc: 'Personalized plans based on your stage, evaluation findings, and goals.' },
              { icon: '📊', title: 'Visible, Measurable Progress', desc: 'Track changes over time through follow-up assessments.' },
              { icon: '✨', title: 'Guidance Focused on Healthy-Looking Hair Over Time', desc: 'Recommendations based on proven medical and appearance-supporting approaches.' },
              { icon: '✅', title: 'Safe Care. Proven Protocols.', desc: 'Strict standards for consistent, high-quality patient care.' },
              { icon: '📋', title: 'Tailored to You', desc: 'Your plan is based on your evaluation, goals, and long-term hair needs.' },
              { icon: '⭐', title: 'Trusted by Thousands', desc: 'Real patients. Real reviews. Real experiences.' },
              { icon: '📋', title: 'Step-by-Step Guidance', desc: 'Know what to expect during your evaluation and throughout your care plan.' },
              { icon: '✅', title: 'Built for Real-Life Confidence', desc: 'Feel prepared and confident in your everyday life again.' },
              { icon: '📞', title: 'Support When You Need It Most', desc: 'Real guidance through your evaluation, recommendations, and every step of your journey.' },
              { icon: '📅', title: 'Start with a Free Consultation', desc: 'Get answers, options, and a personalized plan—no pressure.' },
            ].map(({ title, desc }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: NAVY,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: '#111', marginBottom: 4, fontSize: '0.95rem' }}>{title}</p>
                  <p style={{ color: '#555', fontSize: '0.87rem', lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 52, flexWrap: 'wrap' }}>
            <a href="#evaluation" style={{
              background: BLUE, color: '#fff', fontWeight: 700, fontSize: '0.85rem',
              letterSpacing: '0.06em', padding: '14px 32px', borderRadius: 32, textDecoration: 'none',
            }}>
              REQUEST YOUR CONSULTATION
            </a>
            <a href="#evaluation" style={{
              background: 'transparent', color: NAVY, fontWeight: 700, fontSize: '0.85rem',
              letterSpacing: '0.06em', padding: '14px 32px', borderRadius: 32, textDecoration: 'none',
              border: `2px solid ${NAVY}`,
            }}>
              REQUEST YOUR EVALUATION
            </a>
          </div>
        </div>
      </section>

      {/* ── Doctor Bio ── */}
      <section style={{ background: NAVY, padding: '72px 40px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div className="two-col">
            <div style={{ position: 'relative' }}>
              <img
                src={DR_IMG}
                alt="Dr. Raffi Barsoumian, MD — Medical Director at RHRLI"
                style={{ width: '100%', borderRadius: 8, objectFit: 'cover', maxHeight: 500 }}
              />
              <div style={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                right: 16,
                background: 'rgba(13,27,53,0.9)',
                borderRadius: 6,
                padding: '10px 14px',
              }}>
                <p style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600 }}>Dr. Raffi Barsoumian</p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem' }}>Surgeon &nbsp;·&nbsp; Medical Director</p>
              </div>
            </div>
            <div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', fontWeight: 800, marginBottom: 14 }}>
                Dr. Raffi Barsoumian, MD
              </h2>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: 24,
                padding: '6px 16px',
                marginBottom: 24,
              }}>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>Member, ISHRS &nbsp;·&nbsp; Long Island, NY</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 16, fontSize: '0.95rem' }}>
                Dr. Raffi Barsoumian, MD, is the medical director at RHRLI and a Member of the International Society of Hair Restoration Surgery (ISHRS). He leads every hair restoration consultation personally and performs each procedure alongside his clinical team.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 16, fontSize: '0.95rem' }}>
                His training includes a residency completed at Nassau University Medical Center. He has spent his career focused on restoring natural-looking density for men and women across Long Island.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 32, fontSize: '0.95rem' }}>
                Dr. Barsoumian&apos;s approach is candid: he&apos;ll tell you if you&apos;re a candidate, what a realistic result looks like for your donor supply, and what the full investment—time, recovery, budget—will be before you book.
              </p>
              <a href="#bottom-form" style={{
                display: 'inline-block',
                background: GOLD,
                color: NAVY,
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.06em',
                padding: '14px 32px',
                borderRadius: 32,
                textDecoration: 'none',
              }}>
                REQUEST YOUR EVALUATION
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Financing ── */}
      <section style={{ background: NAVY, padding: '0 40px 72px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div className="two-col">
            <div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: 12 }}>
                Getting Help for Hair Loss Can Be More Affordable Than You Think
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 28, fontSize: '0.95rem' }}>
                Flexible monthly plans built for real patients.
              </p>
              <div style={{
                background: '#122349',
                borderRadius: 12,
                padding: '28px',
                maxWidth: 360,
              }}>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem', letterSpacing: '0.08em', textAlign: 'center', marginBottom: 8 }}>
                  AS LOW AS
                </p>
                <div style={{ textAlign: 'center', marginBottom: 8 }}>
                  <span style={{ color: GOLD, fontSize: '3.6rem', fontWeight: 800, lineHeight: 1 }}>$188</span>
                  <span style={{ color: GOLD, fontSize: '1.2rem', fontWeight: 600 }}>/mo</span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', fontSize: '0.85rem', marginBottom: 20 }}>
                  Fast, simple payment plans
                </p>
                <a href="#bottom-form" style={{
                  display: 'block',
                  background: GOLD,
                  color: NAVY,
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  letterSpacing: '0.06em',
                  padding: '14px',
                  borderRadius: 32,
                  textDecoration: 'none',
                  textAlign: 'center',
                }}>
                  REQUEST YOUR EVALUATION
                </a>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', maxWidth: 380, marginTop: 16, lineHeight: 1.5 }}>
                The above payment was calculated at 21.90% APR over 60 months. This purchase would have a total cost of $11,453. A down payment in the amount of the monthly payment amount is due at the time of purchase. Payment amount rounded up to nearest whole number. 0% APR and other promotional rates subject to eligibility. Payment options through Cherry Technologies, Inc. are issued by the following lending partners: withcherry.com/lending-partners. See withcherry.com/terms for details.
              </p>
            </div>
            <div style={{
              background: '#1a2f58',
              borderRadius: 12,
              minHeight: 400,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
              <img
                src={FINANCE_IMG}
                alt="Patient considering hair restoration options"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12, minHeight: 400 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ background: '#fff', padding: '72px 40px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#111', marginBottom: 8 }}>
            Real Patients. Real Experiences.
          </h2>
          <p style={{ textAlign: 'center', color: '#777', marginBottom: 48, fontSize: '0.93rem' }}>
            Verified patient experiences shared after their visit.
          </p>
          <div className="reviews-grid">
            {['Joey P.', 'Joey P.', 'Joey P.'].map((name, i) => (
              <div key={i} style={{
                background: '#F4F4F4',
                borderRadius: 8,
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}>
                <div style={{ color: NAVY, fontSize: '2rem', marginBottom: 8, lineHeight: 1 }}>&ldquo;</div>
                <div style={{ color: GOLD, fontSize: '1rem', letterSpacing: 3, marginBottom: 16 }}>★★★★★</div>
                <p style={{ color: '#444', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et blandit ipsum. Vestibulum sed tincidunt arcu. Proin sed purus eu enim elementum bibendum. Lorem ipsum dolor sit amet, consectet..
                </p>
                <a href="https://www.google.com/search?q=RHRLI+reviews" target="_blank" rel="noopener noreferrer" style={{
                  background: BLUE, color: '#fff', fontWeight: 700, fontSize: '0.78rem',
                  letterSpacing: '0.06em', padding: '10px 24px', borderRadius: 24,
                  textDecoration: 'none', marginBottom: 16,
                }}>
                  READ MORE
                </a>
                <p style={{ color: BLUE, fontWeight: 700, fontSize: '0.9rem' }}>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practice Built Around You ── */}
      <section style={{ background: CREAM, padding: '72px 40px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#111', marginBottom: 8 }}>
            A Practice Built Around You
          </h2>
          <p style={{ textAlign: 'center', color: '#777', marginBottom: 48, fontSize: '0.93rem' }}>
            Real capabilities. Real safety. Real patient-first care.
          </p>
          <div className="practice-cards">
            {[
              {
                icon: '🏆',
                title: 'Capabilities',
                bullets: [
                  'Comprehensive evaluation of hair loss patterns',
                  'Personalized care plans built around your goals',
                  'Options that may include medical or appearance-supporting approaches',
                  'Support for complex cases requiring multi-factor planning',
                ],
              },
              {
                icon: '🛡️',
                title: 'Safety Standards',
                bullets: [
                  'Evidence-based approaches reviewed by licensed medical providers',
                  'Clean, professional clinical environment with medical-grade protocols',
                  'Clear discussions about expectations, and next steps in your care plan',
                ],
              },
              {
                icon: '🤝',
                title: 'Patient-First Philosophy',
                bullets: [
                  'Honest assessments — we provide recommendations only when appropriate',
                  'Direct communication with your doctor at every step of your care journey',
                  'Focus on long-term hair health',
                ],
              },
            ].map(({ title, bullets }) => (
              <div key={title} style={{
                background: '#fff',
                borderRadius: 12,
                padding: '28px 32px',
                display: 'flex',
                gap: 20,
                alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: '#EEF0FF',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill={NAVY}>
                    <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 1.5a6.5 6.5 0 110 13 6.5 6.5 0 010-13z" opacity=".3"/>
                    <path d="M10 3a7 7 0 100 14A7 7 0 0010 3z"/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 800, color: '#111', fontSize: '1rem', marginBottom: 14 }}>{title}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {bullets.map((b, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#444', fontSize: '0.9rem', lineHeight: 1.55 }}>
                        <span style={{ color: BLUE, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#fff', padding: '72px 40px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#111', marginBottom: 48 }}>
            Frequently Asked Questions
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ── Bottom Form + Map ── */}
      <section id="bottom-form" style={{ background: NAVY, padding: '72px 40px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div className="map-form-grid">
            {/* Map + contact */}
            <div>
              <div style={{ borderRadius: 10, overflow: 'hidden', marginBottom: 28 }}>
                <iframe
                  src="https://maps.google.com/maps?q=167+Froehlich+Farm+Blvd+Woodbury+NY+11797&output=embed&z=15"
                  width="100%"
                  height="320"
                  style={{ border: 'none', display: 'block' }}
                  loading="lazy"
                  title="RHRLI Location"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: '#122349', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: '1rem' }}>📞</span>
                  </div>
                  <div>
                    <p style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>516-210-2369</p>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Call or text for immediate assistance</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: '#122349', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: '1rem' }}>📍</span>
                  </div>
                  <div>
                    <p style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>Long Island, NY</p>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Doctor-led consultations, every time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form card */}
            <div style={{ background: '#122349', borderRadius: 12, padding: '32px' }}>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', textAlign: 'center', marginBottom: 4 }}>
                Request Your Evaluation
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textAlign: 'center', marginBottom: 20 }}>
                No obligation &nbsp;·&nbsp; Private &nbsp;·&nbsp; Doctor-led
              </p>
              <GhlForm formId="aoRhRqF9g0OrWyz6y6iY" height={380} />
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textAlign: 'center', marginTop: 12 }}>
                🔒 Your information is private and never shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        background: '#080f1e',
        color: 'rgba(255,255,255,0.5)',
        textAlign: 'center',
        padding: '20px',
        fontSize: '0.8rem',
        display: 'flex',
        justifyContent: 'center',
        gap: 16,
        flexWrap: 'wrap',
      }}>
        <span>© 2026 RHRLI</span>
        <a href="/privacy-policy/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>PRIVACY POLICY</a>
        <a href="/cookie-policy/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>COOKIE POLICY</a>
      </footer>
    </>
  )
}
