import { Suspense, type ReactNode } from 'react'
import GclidCapture from '@/components/GclidCapture'
import GhlForm from '@/components/GhlForm'
import FaqAccordion from '@/components/FaqAccordion'
import ReviewCard from '@/components/ReviewCard'

const OG_IMAGE = 'https://vitalitymmg.com/wp-content/uploads/2026/06/rhrli-og-featured.png'

export const metadata = {
  title: 'Hair Restoration Options | RHRLI — Long Island',
  description:
    'Explore hair restoration options at RHRLI. Doctor-led evaluations, robotic FUE technology, and personalized treatment plans — Long Island, NY.',
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
const FINANCE_IMG = 'https://start.rhrli.com/wp-content/uploads/2025/12/Gemini_Generated_Image_njainnnjainnnjai-2-2.png'

// TODO: replace with dedicated RHRLI hair-restoration form IDs in GHL for proper attribution
const HERO_FORM_ID = 'J6ay2uZfqGOONYO1yJon'
const BOTTOM_FORM_ID = 'aoRhRqF9g0OrWyz6y6iY'

export default function HairRestorationLP() {
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
                Personalized plans built around your goals and hair biology.
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '60px 48px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{
            color: '#fff',
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            Hair Restoration Options for Thinning Hair &amp; Hair Loss
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.65, marginBottom: 8 }}>
            Understand the full range of hair restoration options available — from medical approaches to robotic surgical procedures — and find out which ones fit your goals and hair biology.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.93rem', lineHeight: 1.6, marginBottom: 32 }}>
            Request a consultation to speak with Dr. Barsoumian about your options and what a realistic outcome looks like for you.
          </p>

          <div id="evaluation" style={{
            background: '#122349',
            borderRadius: 12,
            padding: '28px 28px 16px',
          }}>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', textAlign: 'center', marginBottom: 4 }}>
              Request Your Restoration Consultation
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textAlign: 'center', marginBottom: 16 }}>
              No obligation &nbsp;·&nbsp; Private &nbsp;·&nbsp; Doctor-led
            </p>
            <GhlForm formId={HERO_FORM_ID} height={380} />
          </div>
        </div>
      </section>

      {/* ── 4 Steps ── */}
      <section style={{ background: '#fff', padding: '72px 40px 0' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 800, color: '#111', marginBottom: 8 }}>
            Your Consultation Is Just Four Steps Away
          </h2>
          <p style={{ textAlign: 'center', color: '#777', marginBottom: 48, fontSize: '0.95rem' }}>
            It&apos;s simpler than you think, and it all starts with a conversation.
          </p>

          <div className="steps-grid">
            {[
              { n: '1', title: 'SCHEDULE YOUR CONSULTATION', desc: 'Pick a time that works best for you.' },
              { n: '2', title: 'SHARE YOUR GOALS', desc: 'Tell us what you want to improve and what concerns you most.' },
              { n: '3', title: 'HAIR LOSS ASSESSMENT', desc: 'Dr. Barsoumian examines your thinning pattern and explores your options.' },
              { n: '4', title: 'PERSONALIZED TREATMENT PLAN', desc: 'Walk away with a clear plan — options, timeline, and investment.' },
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
              REQUEST YOUR CONSULTATION
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Patients Trust Us ── */}
      <section style={{ background: CREAM, padding: '72px 40px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#111', lineHeight: 1.25, marginBottom: 10 }}>
            Why Patients Feel Confident Choosing Our<br />Team — and Why You Can Too
          </h2>
          <p style={{ textAlign: 'center', color: '#777', marginBottom: 48, fontSize: '0.93rem' }}>
            Real care. Real support. Real patient-first focus.
          </p>
          <div className="trust-grid">
            {([
              {
                title: 'Designed for Your Pattern and Stage',
                desc: 'Personalized plans based on your evaluation findings, stage, and goals.',
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3.5" fill="white"/><path d="M3 18c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>),
              },
              {
                title: 'Visible, Measurable Progress',
                desc: 'Track changes over time through follow-up assessments.',
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="white"><rect x="2" y="12" width="4" height="6" rx="0.5"/><rect x="8" y="7" width="4" height="11" rx="0.5"/><rect x="14" y="3" width="4" height="15" rx="0.5"/></svg>),
              },
              {
                title: 'Guidance Focused on Healthy-Looking Hair',
                desc: 'Recommendations based on proven medical and appearance-supporting approaches.',
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="white"><path d="M10 2.5L11.7 8.3L17.5 10L11.7 11.7L10 17.5L8.3 11.7L2.5 10L8.3 8.3L10 2.5Z"/></svg>),
              },
              {
                title: 'Safe Care. Proven Protocols.',
                desc: 'Strict standards for consistent, high-quality patient care.',
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L3.5 5V9.5C3.5 13.4 6.3 17 10 17.9C13.7 17 16.5 13.4 16.5 9.5V5L10 2Z" fill="white"/><path d="M7 10l2 2 4-4" stroke="#0D1B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
              },
              {
                title: 'Tailored to You',
                desc: 'Your plan is based on your evaluation, goals, and long-term hair needs.',
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 6h14M3 10h14M3 14h10" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>),
              },
              {
                title: 'Trusted by Thousands',
                desc: 'Real patients. Real reviews. Real experiences.',
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="white"><path d="M10 2l2.5 6H19l-5.2 3.7 2 6.3L10 14.2 4.2 18l2-6.3L1 8h6.5L10 2Z"/></svg>),
              },
              {
                title: 'Step-by-Step Guidance',
                desc: 'Know what to expect during your evaluation and throughout your care plan.',
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 6h14M3 10h14M3 14h10" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>),
              },
              {
                title: 'ARTAS® iX Robotic Technology Available',
                desc: 'Robotic FUE precision for surgical candidates — discussed during your consultation.',
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5"/><path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
              },
              {
                title: 'Support When You Need It Most',
                desc: 'Real guidance through your evaluation, recommendations, and every step of your journey.',
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="5.5" y="1.5" width="9" height="17" rx="1.5" stroke="white" strokeWidth="1.5"/><circle cx="10" cy="15.5" r="1" fill="white"/></svg>),
              },
              {
                title: 'Start with a Free Consultation',
                desc: 'Get answers, options, and a personalized plan — no pressure.',
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="14" rx="1.5" stroke="white" strokeWidth="1.5"/><path d="M2 9h16" stroke="white" strokeWidth="1.5"/><path d="M7 2v4M13 2v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><circle cx="7" cy="13" r="1" fill="white"/><circle cx="13" cy="13" r="1" fill="white"/></svg>),
              },
            ] as Array<{ title: string; desc: string; icon: ReactNode }>).map(({ title, desc, icon }, i) => (
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
                }}>
                  {icon}
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: '#111', marginBottom: 4, fontSize: '0.95rem' }}>{title}</p>
                  <p style={{ color: '#555', fontSize: '0.87rem', lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

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
                Dr. Barsoumian&apos;s approach is candid: he&apos;ll tell you if you&apos;re a candidate, what a realistic result looks like for your donor supply, and what the full investment — time, recovery, budget — will be before you book.
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
            <ReviewCard
              name="Robert Tessoni"
              text="I recently completed treatment for bladder cancer and noticed significant thinning on the back of my head, so I scheduled a consultation with Dr. Raffi Barsoumian. From the moment I arrived, he was professional, kind, and incredibly honest. He provided a complimentary evaluation and, rather than recommending a service that wasn't appropriate for me, explained that I was not a candidate for the treatments he offers. He then took the time to write down several practical steps I could consider to support my hair health. His honesty, compassion, and genuine desire to help meant a great deal to me. During a time when I felt vulnerable, he made me feel heard and supported. I truly appreciate his integrity and the care he showed throughout my visit."
            />
            <ReviewCard
              name="Anthony O'Connell"
              text="I wanted to share my experience after giving myself time to go through the full recovery process. I had my hair restoration procedure in December, and it is now August. Over time, I've been very pleased with the progress and feel more confident again. Dr. Barsoumian and his staff were outstanding throughout the entire experience, and the care and communication were excellent from start to finish. Friends and family have noticed the change, and I'm grateful for the professionalism and attention I received. I've been documenting my progress monthly and plan to share another update at the one-year mark."
            />
            <ReviewCard
              name="Luke Martin"
              text="Robotic Hair Restoration of Long Island provided a very positive experience from start to finish. The team was reassuring in the weeks leading up to my procedure, and a quick call before the appointment helped put me at ease. On the day of the procedure, everything went exactly as it had been explained beforehand. The staff made sure I was comfortable throughout the day, with regular breaks and clear communication. Lunch was provided, and post-procedure instructions were reviewed thoroughly before I went home with the necessary care materials. After the procedure, any questions or concerns I had were answered promptly and in detail. Everyone on the team was attentive and supportive, and I felt well cared for throughout the process. I'm looking forward to continuing to track my progress over the coming months."
            />
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
            {([
              {
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="2" stroke={NAVY} strokeWidth="1.5"/><path d="M6.5 10l2.5 2.5 5-5" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
                title: 'Capabilities',
                bullets: [
                  'Comprehensive evaluation of hair loss patterns and causes',
                  'Personalized care plans built around your goals',
                  'Medical and appearance-supporting options discussed based on your evaluation',
                  'ARTAS® iX robotic FUE for qualified surgical candidates',
                ],
              },
              {
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L3.5 5V9.5C3.5 13.4 6.3 17 10 17.9C13.7 17 16.5 13.4 16.5 9.5V5L10 2Z" stroke={NAVY} strokeWidth="1.5"/><path d="M7 10l2 2 4-4" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
                title: 'Safety Standards',
                bullets: [
                  'Evidence-based approaches reviewed by licensed medical providers',
                  'Clean, professional clinical environment with medical-grade protocols',
                  'Clear discussions about expectations and next steps in your care plan',
                ],
              },
              {
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 16.5C10 16.5 2.5 12 2.5 7A4 4 0 0110 5a4 4 0 017.5 2C17.5 12 10 16.5 10 16.5z" stroke={NAVY} strokeWidth="1.5"/></svg>),
                title: 'Patient-First Philosophy',
                bullets: [
                  'Honest assessments — we provide recommendations only when appropriate',
                  'Direct communication with Dr. Barsoumian at every step',
                  'Focus on long-term hair health and natural-looking outcomes',
                ],
              },
            ] as Array<{ title: string; bullets: string[]; icon: ReactNode }>).map(({ title, bullets, icon }) => (
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
                  {icon}
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

            <div style={{ background: '#122349', borderRadius: 12, padding: '32px' }}>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', textAlign: 'center', marginBottom: 4 }}>
                Request Your Evaluation
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textAlign: 'center', marginBottom: 20 }}>
                No obligation &nbsp;·&nbsp; Private &nbsp;·&nbsp; Doctor-led
              </p>
              <GhlForm formId={BOTTOM_FORM_ID} height={500} />
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
