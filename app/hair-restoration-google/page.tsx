import { Suspense, type ReactNode } from 'react'
import GclidCapture from '@/components/GclidCapture'
import GhlForm from '@/components/GhlForm'
import FaqAccordion from '@/components/FaqAccordion'
import ReviewCard from '@/components/ReviewCard'

const OG_IMAGE = 'https://vitalitymmg.com/wp-content/uploads/2026/06/rhrli-og-featured.png'

export const metadata = {
  title: 'Medical Evaluation for Hair Loss | RHRLI, Long Island',
  description:
    'Schedule a doctor-led hair loss evaluation at RHRLI. Discover the cause of hair loss and learn which treatment options fit your goals.',
  openGraph: {
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'RHRLI, Robotic Hair Restoration of Long Island' }],
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

const LOGO_ICON = '/rhrli-icon.png'
const LOGO_WORDMARK = '/rhrli-wordmark.svg'
const HERO_IMG = '/rhrli-doctor-hero.jpg'
const DR_IMG = 'https://start.rhrli.com/wp-content/uploads/2026/02/Rectangle-43.png'
const FINANCE_IMG = '/rhrli-finance.jpg'

export default function HairRestorationGoogle() {
  return (
    <>
      <Suspense><GclidCapture /></Suspense>

      {/* ── Nav ── */}
      <header className="site-header" style={{
        background: NAVY,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div className="site-header-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={LOGO_ICON} alt="RHRLI" height={40} />
          <img className="logo-wordmark" src={LOGO_WORDMARK} alt="Robotic Hair Restoration of Long Island" />
        </div>
        <div className="site-header-actions" style={{ display: 'flex', alignItems: 'center' }}>
          <a className="phone-link" href="tel:5162102369" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>
            516-210-2369
          </a>
          <a className="header-cta" href="#evaluation" style={{
            background: GOLD,
            color: NAVY,
            fontWeight: 700,
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
      <section style={{ background: '#09101f' }} className="hero-section">
        <div className="hero-grid">
        {/* Left: photo + badge */}
        <div className="hero-image-card" style={{ position: 'relative', overflow: 'hidden', borderRadius: 20, background: '#15274f' }}>
          <img
            src={HERO_IMG}
            alt="Patient at RHRLI"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '35% 30%', display: 'block' }}
          />
          <div className="hero-badge" style={{
            position: 'absolute',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
          }}>
            <div style={{ color: '#ddb13f', fontSize: '0.75rem', letterSpacing: 2, whiteSpace: 'nowrap' }}>★★★★★</div>
            <div>
              <div className="hero-badge-title" style={{ fontWeight: 700, color: '#fff' }}>Patient-Centered Care</div>
              <div className="hero-badge-desc" style={{ color: 'rgba(255,255,255,0.85)', marginTop: 2 }}>
                Patients appreciate our personalized, doctor-led approach.
              </div>
            </div>
          </div>
        </div>

        {/* Right: headline + form */}
        <div className="hero-content-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
            Discover the cause of hair loss and learn which treatment options fit your goals and hair biology.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.93rem', lineHeight: 1.6, marginBottom: 32 }}>
            Request your consultation to speak with a licensed medical professional about your options.
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
        </div>
      </section>

      {/* ── 4 Steps ── */}
      <section style={{ background: '#fff', padding: '72px 40px 0' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 800, color: '#111', marginBottom: 8 }}>
            Your Evaluation Is Just Four Steps Away
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
            Why Patients Feel Confident Choosing Our<br />Team, and Why You Can Too
          </h2>
          <p style={{ textAlign: 'center', color: '#777', marginBottom: 48, fontSize: '0.93rem' }}>
            Real care. Real support. Real patient-first focus.
          </p>
          <div className="trust-grid">
            {([
              {
                title: 'Designed for Your Pattern and Stage',
                desc: 'Personalized plans based on your stage, evaluation findings, and goals.',
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 0C8.685 0 6 2.685 6 6C6 9.315 8.685 12 12 12C15.315 12 18 9.315 18 6C18 2.685 15.315 0 12 0ZM0 21V24H24V21C24 17.01 16.005 15 12 15C7.995 15 0 17.01 0 21Z" fill="white"/></svg>),
              },
              {
                title: 'Visible, Measurable Progress',
                desc: 'Track changes over time through follow-up assessments.',
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M0 10.2857V24H6V10.2857H0ZM9 0V24H15V0H9ZM18 5.14286V24H24V5.14286H18Z" fill="white"/></svg>),
              },
              {
                title: 'Guidance Focused on Healthy-Looking Hair Over Time',
                desc: 'Recommendations based on proven medical and appearance-supporting approaches.',
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M8.72727 3.78947L6 10.7368L0 13.8947L6 17.0526L8.72727 24L11.4545 17.0526L17.4545 13.8947L11.4545 10.7368L8.72727 3.78947ZM19.6364 10.1053L21 6.63158L24 5.05263L21 3.47368L19.6364 0L18.2727 3.47368L15.2727 5.05263L18.2727 6.63158L19.6364 10.1053Z" fill="white"/></svg>),
              },
              {
                title: 'Safe Care. Established Protocols.',
                desc: 'Strict standards for consistent, high-quality patient care.',
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0L0 4.36364V10.9091C0 16.9636 5.12 22.6255 12 24C18.88 22.6255 24 16.9636 24 10.9091V4.36364L12 0ZM8.66667 16.5491L4 12.7309L5.45333 11.5418L8.66667 14.1818L18.5467 6.09818L20 7.28727L8.66667 16.5491Z" fill="white"/></svg>),
              },
              {
                title: 'Tailored to You',
                desc: 'Your plan is based on your evaluation, goals, and long-term hair needs.',
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M0 20.5714V24H8V20.5714H0ZM10.6667 20.5714V24H24V20.5714H10.6667ZM0 10.2857V13.7143H13.3333V10.2857H0ZM16 10.2857V13.7143H24V10.2857H16ZM0 0V3.42857H8V0H0ZM10.6667 0V3.42857H24V0H10.6667Z" fill="white"/></svg>),
              },
              {
                title: 'Highly Rated by Patients',
                desc: 'Real patients. Real reviews. Real experiences.',
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 0L15.4484 8.75229L24 8.86239L17.3811 14.7248L19.7811 24L12 19.211L4.21895 24L6.61895 14.7248L0 8.86239L8.55158 8.75229L12 0Z" fill="white"/></svg>),
              },
              {
                title: 'Step-by-Step Guidance',
                desc: 'Know what to expect during your evaluation and throughout your care plan.',
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M1.94595 9.6C0.869189 9.6 0 10.672 0 12C0 13.328 0.869189 14.4 1.94595 14.4C3.0227 14.4 3.89189 13.328 3.89189 12C3.89189 10.672 3.0227 9.6 1.94595 9.6ZM1.94595 0C0.869189 0 0 1.072 0 2.4C0 3.728 0.869189 4.8 1.94595 4.8C3.0227 4.8 3.89189 3.728 3.89189 2.4C3.89189 1.072 3.0227 0 1.94595 0ZM1.94595 19.2C0.869189 19.2 0 20.272 0 21.6C0 22.928 0.869189 24 1.94595 24C3.0227 24 3.89189 22.928 3.89189 21.6C3.89189 20.272 3.0227 19.2 1.94595 19.2ZM5.83784 0.8V4H24V0.8H5.83784ZM5.83784 10.4V13.6H24V10.4H5.83784ZM5.83784 20V23.2H24V20H5.83784Z" fill="white"/></svg>),
              },
              {
                title: 'Built for Real-Life Confidence',
                desc: 'Feel prepared and confident in your everyday life again.',
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM9.384 18.864L4.824 14.304L6.6 12.528L9.384 15.324L16.404 8.292L18.18 10.068L9.384 18.864Z" fill="white"/></svg>),
              },
              {
                title: 'Support When You Need It Most',
                desc: 'Real guidance through your evaluation, recommendations, and every step of your journey.',
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22.6667 16.6667C21 16.6667 19.4 16.4 17.9067 15.9067C17.44 15.76 16.92 15.8667 16.5467 16.2267L13.6133 19.16C9.84 17.24 6.74667 14.16 4.82667 10.3867L7.76 7.44C8.13333 7.09333 8.24 6.57333 8.09333 6.09333C7.6 4.6 7.33333 3 7.33333 1.33333C7.33333 0.6 6.73333 0 6 0H1.33333C0.6 0 0 0.6 0 1.33333C0 13.8533 10.1467 24 22.6667 24C23.4 24 24 23.4 24 22.6667V18C24 17.2667 23.4 16.6667 22.6667 16.6667Z" fill="white"/></svg>),
              },
              {
                title: 'Start with a Free Consultation',
                desc: 'Get answers, options, and a personalized plan, no pressure.',
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M21.6 2.18182H20.4V0H18V2.18182H6V0H3.6V2.18182H2.4C1.08 2.18182 0 3.16364 0 4.36364V21.8182C0 23.0182 1.08 24 2.4 24H21.6C22.92 24 24 23.0182 24 21.8182V4.36364C24 3.16364 22.92 2.18182 21.6 2.18182ZM21.6 21.8182H2.4V7.63636H21.6V21.8182Z" fill="white"/></svg>),
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

          {/* CTAs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 52, flexWrap: 'wrap' }}>
            <a href="#evaluation" style={{
              background: BLUE, color: '#fff', fontWeight: 700, fontSize: '0.85rem',
              letterSpacing: '0.06em', padding: '14px 32px', borderRadius: 32, textDecoration: 'none',
            }}>
              REQUEST YOUR CONSULTATION
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
                alt="Dr. Raffi Barsoumian, MD, Medical Director at RHRLI"
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
                Dr. Barsoumian&apos;s approach is candid: he&apos;ll tell you if you&apos;re a candidate, what a realistic result looks like for your donor supply, and what the full investment (time, recovery, budget) will be before you book.
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
          <p style={{ textAlign: 'center', color: '#777', marginBottom: 8, fontSize: '0.93rem' }}>
            Verified patient experiences shared after their visit.
          </p>
          <p style={{ textAlign: 'center', color: '#999', marginBottom: 48, fontSize: '0.78rem' }}>
            Individual results may vary.
          </p>
          <div className="reviews-grid">
            <ReviewCard
              name="Robert T."
              text="I recently completed treatment for bladder cancer and noticed significant thinning on the back of my head, so I scheduled a consultation with Dr. Raffi Barsoumian. From the moment I arrived, he was professional, kind, and incredibly honest. He provided a complimentary evaluation and, rather than recommending a service that wasn't appropriate for me, explained that I was not a candidate for the treatments he offers. He then took the time to write down several practical steps I could consider to support my hair health. His honesty, compassion, and genuine desire to help meant a great deal to me. During a time when I felt vulnerable, he made me feel heard and supported. I truly appreciate his integrity and the care he showed throughout my visit."
            />
            <ReviewCard
              name="Anthony O."
              text="I wanted to share my experience after giving myself time to go through the full recovery process. I had my hair restoration procedure in December, and it is now August. Over time, I've been very pleased with the progress and feel more confident again. Dr. Barsoumian and his staff were outstanding throughout the entire experience, and the care and communication were excellent from start to finish. Friends and family have noticed the change, and I'm grateful for the professionalism and attention I received. I've been documenting my progress monthly and plan to share another update at the one-year mark."
            />
            <ReviewCard
              name="Luke M."
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
                  'Comprehensive evaluation of hair loss patterns',
                  'Personalized care plans built around your goals',
                  'Options that may include medical or appearance-supporting approaches',
                  'Support for complex cases requiring multi-factor planning',
                ],
              },
              {
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L3.5 5V9.5C3.5 13.4 6.3 17 10 17.9C13.7 17 16.5 13.4 16.5 9.5V5L10 2Z" stroke={NAVY} strokeWidth="1.5"/><path d="M7 10l2 2 4-4" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
                title: 'Safety Standards',
                bullets: [
                  'Evidence-based approaches reviewed by licensed medical providers',
                  'Clean, professional clinical environment with medical-grade protocols',
                  'Clear discussions about expectations, and next steps in your care plan',
                ],
              },
              {
                icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 16.5C10 16.5 2.5 12 2.5 7A4 4 0 0110 5a4 4 0 017.5 2C17.5 12 10 16.5 10 16.5z" stroke={NAVY} strokeWidth="1.5"/></svg>),
                title: 'Patient-First Philosophy',
                bullets: [
                  'Honest assessments: we provide recommendations only when appropriate',
                  'Direct communication with your doctor at every step of your care journey',
                  'Focus on long-term hair health',
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
              <GhlForm formId="aoRhRqF9g0OrWyz6y6iY" height={500} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        background: '#080f1e',
        color: 'rgba(255,255,255,0.5)',
        textAlign: 'center',
        padding: '32px 20px 20px',
        fontSize: '0.8rem',
      }}>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, marginBottom: 4 }}>
          Robotic Hair Restoration of Long Island
        </p>
        <p style={{ marginBottom: 16 }}>
          167 Froehlich Farm Blvd, Woodbury, NY 11797 &nbsp;·&nbsp; 516-210-2369
        </p>
        <p style={{ maxWidth: 640, margin: '0 auto 20px', fontSize: '0.72rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.4)' }}>
          Individual results vary. This content is for educational purposes only and is not medical advice. Consult a qualified physician before pursuing any medical procedure.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span>© 2026 Robotic Hair Restoration of Long Island</span>
          <a href="/privacy-policy/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>PRIVACY POLICY</a>
          <a href="/cookie-policy/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>COOKIE POLICY</a>
        </div>
      </footer>
    </>
  )
}
