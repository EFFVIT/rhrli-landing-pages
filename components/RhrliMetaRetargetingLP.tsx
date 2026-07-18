'use client'
import { Suspense } from 'react'
import GhlForm from '@/components/GhlForm'
import GclidCapture from '@/components/GclidCapture'
import { useReveal } from '@/lib/useReveal'

// Faithful recreation of the RHRLI Meta *retargeting* landing pages on the fleet:
//   start.rhrli.com/meta-retargeting/        -> variant "standard"
//   start.rhrli.com/meta-retargeting-artas/  -> variant "artas"
// These are the warm-audience (retargeting) variants and carry more sections
// than the cold /meta/ page: Best-For vs Not-ideal comparison, a "why now"
// 4-point block, three full patient testimonials, two objection blocks, a
// candidacy / Why-ARTAS block, a what-happens-next timeline, and a medical
// decision block. Copy is reproduced verbatim from source (Joe waived Meta
// ad-policy softening — Meta doesn't enforce it). The ONE carve-out kept is
// HIPAA: no browser Meta pixel on these health-intent form pages (attribution
// rides server-side CAPI). One shared component, variant-switched, so the two
// near-identical pages don't duplicate ~400 lines.

const PHONE = '(516) 357-5840'
const PHONE_HREF = 'tel:5163575840'
const NAVY = '#15274f'
const BLUE = '#003cb5'
const GOLD = '#fdc700'
const HEADING = '#0a0a0a'
const BODY = '#364153'
const NAV_BG = '#000'
const LIGHT_BTN_BG = '#e8f1fa'

const LOGO_ICON = '/rhrli-icon.png'
const LOGO_WORDMARK = '/rhrli-wordmark.svg'

interface Props {
  heroFormId: string
  bottomFormId: string
  variant?: 'standard' | 'artas'
}

const Check = ({ bg = GOLD }: { bg?: string }) => (
  <span style={{
    flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 24, height: 24, background: bg, borderRadius: '50%',
  }}>
    <svg width="11" height="9" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 1L5 9L1 5" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

const Cross = () => (
  <span style={{
    flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 24, height: 24, background: '#e5e7eb', borderRadius: '50%',
  }}>
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L11 11M11 1L1 11" stroke="#6a7282" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  </span>
)

const Chevron = ({ color = NAVY }: { color?: string }) => (
  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: 4 }}>
    <path d="M4 2L8 6L4 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function RhrliMetaRetargetingLP({ heroFormId, bottomFormId, variant = 'standard' }: Props) {
  const artas = variant === 'artas'

  const heroReveal = useReveal<HTMLElement>()
  const doctorReveal = useReveal<HTMLElement>()
  const compareReveal = useReveal<HTMLElement>()
  const waitingReveal = useReveal<HTMLElement>()
  const testimonialsReveal = useReveal<HTMLElement>()
  const cheaperReveal = useReveal<HTMLElement>()
  const shavingReveal = useReveal<HTMLElement>()
  const candidateReveal = useReveal<HTMLElement>()
  const nextReveal = useReveal<HTMLElement>()
  const decisionReveal = useReveal<HTMLElement>()
  const finalReveal = useReveal<HTMLElement>()

  const heroHeadline = artas
    ? 'Worried about surgery or shaving? Get clarity in 60 seconds.'
    : 'Worried about surgery or shaving? Get answers in 60 seconds.'
  const heroSub = artas
    ? 'ARTAS-assisted precision helps protect your donor area and plan for natural-looking results—based on your hair loss pattern.'
    : 'Robotic Hair Restoration of LI protects your donor area and plans for natural-looking results—based on your hair loss pattern.'

  const testimonials = [
    {
      name: 'Robert Tessoni',
      text: 'I recently completed treatment for bladder cancer and noticed significant thinning on the back of my head, so I scheduled a consultation with Dr. Raffi Barsoumian. From the moment I arrived, he was professional, kind, and incredibly honest. He provided a complimentary evaluation and, rather than recommending a service that wasn’t appropriate for me, explained that I was not a candidate for the treatments he offers. He then took the time to write down several practical steps I could consider to support my hair health. His honesty, compassion, and genuine desire to help meant a great deal to me. During a time when I felt vulnerable, he made me feel heard and supported. I truly appreciate his integrity and the care he showed throughout my visit.',
    },
    {
      name: 'Anthony O’Connell',
      text: 'I wanted to share my experience after giving myself time to go through the full recovery process. I had my hair restoration procedure in December, and it is now August. Over time, I’ve been very pleased with the progress and feel more confident again. Dr. Barsoumian and his staff were outstanding throughout the entire experience, and the care and communication were excellent from start to finish. Friends and family have noticed the change, and I’m grateful for the professionalism and attention I received. I’ve been documenting my progress monthly and plan to share another update at the one-year mark.',
    },
    {
      name: 'Luke Martin',
      text: 'Robotic Hair Restoration of Long Island provided a very positive experience from start to finish. The team was reassuring in the weeks leading up to my procedure, and a quick call before the appointment helped put me at ease. On the day of the procedure, everything went exactly as it had been explained beforehand. The staff made sure I was comfortable throughout the day, with regular breaks and clear communication. Lunch was provided, and post-procedure instructions were reviewed thoroughly before I went home with the necessary care materials. After the procedure, any questions or concerns I had were answered promptly and in detail. Everyone on the team was attentive and supportive, and I felt well cared for throughout the process. I’m looking forward to continuing to track my progress over the coming months.',
    },
  ]

  return (
    <>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      {/* Nav */}
      <header className="site-header" style={{
        background: NAV_BG, display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div className="site-header-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={LOGO_ICON} alt="RHRLI" height={40} />
          <img className="logo-wordmark" src={LOGO_WORDMARK} alt="Robotic Hair Restoration of Long Island" />
        </div>
        <div className="site-header-actions" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <a href="#hero-form" className="header-cta" style={{
              background: LIGHT_BTN_BG, color: '#000', fontWeight: 700, borderRadius: 24,
              textDecoration: 'none', letterSpacing: '0.04em', whiteSpace: 'nowrap',
            }}>
              BOOK A CONSULT
            </a>
            {artas && (
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, marginTop: 6, maxWidth: 180, textAlign: 'right', lineHeight: 1.35 }}>
                We&rsquo;ll confirm if ARTAS&reg; or another method is best for your goals.
              </span>
            )}
          </div>
          <a className="phone-link" href={PHONE_HREF} style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>
            {PHONE}
          </a>
        </div>
      </header>

      {/* Hero — navy split */}
      <section ref={heroReveal.ref} className={heroReveal.className} style={{ background: NAVY, padding: '56px 24px 56px' }}>
        <div className="two-col" style={{ maxWidth: 1200, margin: '0 auto', alignItems: 'start', gap: 48 }}>
          <div>
            <h1 style={{ fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, margin: '0 0 18px', textTransform: 'uppercase' }}>
              {heroHeadline}
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', margin: '0 0 26px', lineHeight: 1.65 }}>
              {heroSub}
            </p>
            <a href="#hero-form" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: GOLD, color: NAVY, padding: '15px 30px', borderRadius: 40, fontSize: 14, fontWeight: 800, textDecoration: 'none', letterSpacing: '0.04em', marginBottom: 28 }}>
              CHECK ELIGIBILITY
            </a>
            <img src="/img/m/rt-beforeafter.webp" alt="RHRLI hair restoration before and after" style={{ width: '100%', borderRadius: 16, display: 'block', marginBottom: 8 }} />
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', margin: 0 }}>Individual results vary</p>
          </div>

          <div id="hero-form" style={{ background: '#fff', borderRadius: 16, padding: '24px', boxShadow: '0 20px 45px rgba(0,0,0,0.28)' }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: HEADING, margin: '0 0 4px' }}>Check Your Eligibility</p>
            <p style={{ fontSize: 13, color: BODY, margin: '0 0 12px' }}>Answer a few quick questions&mdash;private and confidential.</p>
            <GhlForm formId={heroFormId} height={440} />
          </div>
        </div>
      </section>

      {/* Doctor credential strip */}
      <section ref={doctorReveal.ref} className={doctorReveal.className} style={{ background: '#eef0f3', padding: '20px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <img src="/img/m/doctor.webp" alt="Dr. Raffi Barsoumian, MD" style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover' }} />
          <p style={{ fontSize: 16, fontWeight: 700, color: HEADING, margin: 0 }}>
            Dr. Raffi Barsoumian, MD <span style={{ color: '#9aa3af', fontWeight: 400 }}>|</span> Member, ISHRS <span style={{ color: '#9aa3af', fontWeight: 400 }}>|</span> Long Island, NY
          </p>
        </div>
      </section>

      {/* Best For vs Not ideal if */}
      <section ref={compareReveal.ref} className={compareReveal.className} style={{ background: '#eee', padding: '56px 24px' }}>
        <div className="two-col" style={{ maxWidth: 900, margin: '0 auto', gap: 20 }}>
          <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '28px 26px', textAlign: 'center' }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: HEADING, margin: '0 0 18px' }}>Best For</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'left' }}>
              {['Early to moderate loss', 'Want natural density', 'Prefer physician planning'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Check />
                  <span style={{ fontSize: 14, color: BODY }}>&ldquo;{t}&rdquo;</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '28px 26px', textAlign: 'center' }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: HEADING, margin: '0 0 18px' }}>Not ideal if:</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'left' }}>
              {['Seeking the cheapest option', 'Expect guaranteed density', 'Unwilling to follow long-term plan'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Cross />
                  <span style={{ fontSize: 14, color: BODY }}>&ldquo;{t}&rdquo;</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p style={{ textAlign: 'center', fontSize: 14, color: '#6a7282', margin: '24px 0 0' }}>
          Not sure? <a href="#final-form" style={{ color: BLUE, fontWeight: 600, textDecoration: 'none' }}>Check candidacy &gt;</a>
        </p>
      </section>

      {/* If You've Been Waiting to "Think About It" */}
      <section ref={waitingReveal.ref} className={waitingReveal.className} style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: HEADING, textAlign: 'center', margin: '0 0 40px', lineHeight: 1.2, textTransform: 'uppercase' }}>
            If You&rsquo;ve Been Waiting to &ldquo;Think About It&rdquo;&mdash;This Is Why
          </h2>
          <div className="two-col" style={{ gap: 20, marginBottom: 36 }}>
            {[
              'Hair Loss Doesn’t Pause While You Decide',
              'Donor Hair Quality Declines Over Time',
              'Earlier Intervention = More Natural Outcomes',
              'Waiting Limits Future Options',
            ].map(t => (
              <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'center', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: '20px 22px' }}>
                <Check />
                <p style={{ fontSize: 16, fontWeight: 600, color: HEADING, margin: 0, lineHeight: 1.45 }}>{t}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="#final-form" style={{ display: 'inline-block', background: BLUE, color: '#fff', padding: '15px 32px', borderRadius: 40, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
              See If I&rsquo;m a Candidate
            </a>
          </div>
        </div>
      </section>

      {/* Real Patients. Real Experiences. */}
      <section ref={testimonialsReveal.ref} className={testimonialsReveal.className} style={{ background: '#f5f6f8', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 800, color: HEADING, textAlign: 'center', margin: '0 0 8px' }}>
            Real Patients. Real Experiences.
          </h2>
          <p style={{ fontSize: 15, color: BODY, textAlign: 'center', margin: '0 auto 40px', maxWidth: 560 }}>
            Verified patient experiences shared after their visit.
          </p>
          <div className="three-col" style={{ alignItems: 'stretch' }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: '28px 26px', display: 'flex', flexDirection: 'column' }}>
                <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 16 }}>
                  <path d="M0 26V14.6L7 0h6l-4.8 12H14v14H0Zm20 0V14.6L27 0h6l-4.8 12H34v14H20Z" fill={GOLD} />
                </svg>
                <p style={{ fontSize: 14, color: BODY, margin: '0 0 20px', lineHeight: 1.7, flex: 1 }}>{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderTop: '1px solid #eef0f3', paddingTop: 16 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: HEADING }}>{t.name}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#15803d', background: '#dcfce7', borderRadius: 20, padding: '3px 10px' }}>Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Isn't It Cheaper Somewhere Else? */}
      <section ref={cheaperReveal.ref} className={cheaperReveal.className} style={{ background: NAVY, padding: '64px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 800, color: '#fff', margin: '0 0 28px', lineHeight: 1.2 }}>
            Isn&rsquo;t It Cheaper Somewhere Else?&rdquo;
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'flex', gap: 12 }}>
              <Chevron color={GOLD} />
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.9)', margin: 0, lineHeight: 1.55 }}>Hair restoration is not a commodity</p>
            </div>
            <div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
                <Chevron color={GOLD} />
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.9)', margin: 0, fontWeight: 600 }}>Cost reflects:</p>
              </div>
              <ul style={{ margin: '0 0 0 34px', padding: 0, listStyle: 'disc', color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7 }}>
                <li>The surgeon&rsquo;s experience</li>
                <li>Technique selection (FUE vs FUT)</li>
                <li>Planning and long-term outcome</li>
              </ul>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <Chevron color={GOLD} />
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.9)', margin: 0, lineHeight: 1.55 }}>One procedure done right &gt; multiple corrections later</p>
            </div>
          </div>
          <p style={{ fontSize: 17, color: '#fff', fontWeight: 700, margin: '28px 0 0', lineHeight: 1.6 }}>
            The real cost is choosing wrong&mdash;not choosing carefully.
          </p>
        </div>
      </section>

      {/* Concerned about shaving or downtime? */}
      <section ref={shavingReveal.ref} className={shavingReveal.className} style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 800, color: HEADING, margin: '0 0 28px', lineHeight: 1.2 }}>
            Concerned about shaving or downtime?
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'flex', gap: 12 }}>
              <Chevron />
              <p style={{ fontSize: 16, color: BODY, margin: 0, lineHeight: 1.55 }}>Not every procedure requires full shaving</p>
            </div>
            <div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
                <Chevron />
                <p style={{ fontSize: 16, color: HEADING, margin: 0, fontWeight: 600 }}>Modern techniques prioritize:</p>
              </div>
              <ul style={{ margin: '0 0 0 34px', padding: 0, listStyle: 'disc', color: BODY, fontSize: 15, lineHeight: 1.7 }}>
                <li>{artas ? 'ARTAS-assisted graft selection consistency (when appropriate)' : 'Precise graft selection consistency (when appropriate)'}</li>
                <li>Donor preservation-focused planning</li>
                <li>Natural growth pattern placement strategy</li>
              </ul>
            </div>
            <div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
                <Chevron />
                <p style={{ fontSize: 16, color: HEADING, margin: 0, fontWeight: 600 }}>Consultation determines:</p>
              </div>
              <ul style={{ margin: '0 0 0 34px', padding: 0, listStyle: 'disc', color: BODY, fontSize: 15, lineHeight: 1.7 }}>
                <li>Technique</li>
                <li>Shaving requirements</li>
                <li>Expected outcome</li>
              </ul>
            </div>
          </div>
          <p style={{ fontSize: 15, color: BODY, margin: '26px 0 24px', lineHeight: 1.7 }}>
            {artas
              ? 'Your consultation determines whether ARTAS, manual FUE, or a hybrid approach best fits your pattern.'
              : 'Your consultation determines the best type of hair restoration procedure for your needs and whether a hybrid approach combining a surgical procedure with a non-surgical treatment would be best, all designed specifically for your hair loss pattern.'}
          </p>
          <a href="#final-form" style={{ display: 'inline-block', background: BLUE, color: '#fff', padding: '14px 30px', borderRadius: 40, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Find Out What Applies To Me
          </a>
        </div>
      </section>

      {/* Are You a Candidate / Why ARTAS */}
      <section ref={candidateReveal.ref} className={candidateReveal.className} style={{ background: '#000', padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1050, margin: '0 auto', gap: 48, alignItems: 'center' }}>
          <div>
            <img
              src={artas ? '/img/m/artas-device.webp' : '/img/m/rt-consult.webp'}
              alt={artas ? 'ARTAS® iX robotic hair restoration system' : 'Hair restoration consultation'}
              style={{ width: '100%', borderRadius: 16, display: 'block', background: artas ? '#fff' : 'transparent' }}
            />
            {artas && (
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', margin: '10px 0 0' }}>
                ARTAS&reg; is a registered trademark of Venus Concept. Device image shown for reference.
              </p>
            )}
          </div>
          <div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 800, color: '#fff', margin: '0 0 6px', lineHeight: 1.2 }}>
              {artas ? 'Why ARTAS®' : 'Are You a Candidate For Hair Restoration?'}
            </h2>
            {artas && (
              <p style={{ fontSize: 15, color: GOLD, fontWeight: 600, margin: '0 0 18px' }}>(when you&rsquo;re a match)</p>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, margin: artas ? '0 0 20px' : '18px 0 20px' }}>
              {(artas
                ? [
                    'Assists with consistent extraction patterns',
                    'Supports donor-area preservation planning',
                    'Helps reduce human fatigue variability',
                  ]
                : [
                    'Your specific type of hair loss will be diagnosed',
                    'The extent of your current hair loss',
                    'The amount and quality of your donor hair region',
                  ]
              ).map(t => (
                <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Chevron color={GOLD} />
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.88)', margin: 0, lineHeight: 1.55 }}>{t}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', margin: '0 0 24px', lineHeight: 1.6 }}>
              {artas
                ? 'ARTAS® isn’t for everyone—your candidacy determines the best method.'
                : 'Hair restoration isn’t for everyone—your candidacy determines the best method.'}
            </p>
            <a href="#final-form" style={{ display: 'inline-block', background: GOLD, color: NAVY, padding: '14px 30px', borderRadius: 40, fontSize: 14, fontWeight: 800, textDecoration: 'none' }}>
              See If I&rsquo;m a Candidate
            </a>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section ref={nextReveal.ref} className={nextReveal.className} style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: HEADING, textAlign: 'center', margin: '0 0 40px', textTransform: 'uppercase' }}>
            What happens next
          </h2>
          <div className="three-col" style={{ marginBottom: 28 }}>
            {[
              ['1', 'Review your hair loss pattern + donor supply'],
              ['2', artas ? 'Confirm best approach (ARTAS®/manual/hybrid)' : 'Confirm the treatment method, alone or hybrid, for your needs'],
              ['3', 'Leave with a realistic plan + timeline (no commitment)'],
            ].map(([n, t]) => (
              <div key={n} style={{ textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, margin: '0 auto 16px', borderRadius: '50%', background: NAVY, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 800 }}>
                  {n}
                </div>
                <p style={{ fontSize: 16, color: HEADING, fontWeight: 600, margin: 0, lineHeight: 1.5 }}>{t}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 14, color: '#6a7282', fontStyle: 'italic', margin: 0 }}>
            Consult: ~30 minutes &bull; Plan delivered same day
          </p>
        </div>
      </section>

      {/* Hair Restoration Is a Medical Decision */}
      <section ref={decisionReveal.ref} className={decisionReveal.className} style={{ background: NAVY, padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: '#fff', margin: '0 0 24px', textTransform: 'uppercase' }}>
            Hair Restoration Is a Medical Decision
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.9)', fontWeight: 600, margin: '0 0 16px' }}>Results depend on:</p>
          <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 12, textAlign: 'left', marginBottom: 24 }}>
            {['Proper diagnosis', 'Long-term planning', 'Ethical candidacy screening'].map(t => (
              <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Check />
                <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.9)' }}>{t}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', margin: '0 auto 28px', maxWidth: 560, lineHeight: 1.7 }}>
            Not everyone is an ideal candidate for hair restoration treatment. Consultations exist to protect the patient first.
          </p>
          <a href="#final-form" style={{ display: 'inline-block', background: GOLD, color: NAVY, padding: '15px 32px', borderRadius: 40, fontSize: 14, fontWeight: 800, textDecoration: 'none' }}>
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Final CTA + form */}
      <section ref={finalReveal.ref} className={finalReveal.className} style={{ background: '#fff', padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1050, margin: '0 auto', gap: 48, alignItems: 'center' }}>
          <div id="final-form" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: '24px' }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: HEADING, margin: '0 0 4px' }}>Schedule your Consultation Today</p>
            <p style={{ fontSize: 13, color: BODY, margin: '0 0 12px' }}>See If I&rsquo;m a Candidate</p>
            <GhlForm formId={bottomFormId} height={440} />
            <p style={{ fontSize: 12, color: '#6a7282', margin: '12px 0 0', textAlign: 'center' }}>Confidential &bull; No obligation &bull; Personalized</p>
          </div>
          <div>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: HEADING, margin: '0 0 20px', lineHeight: 1.25 }}>
              Hair loss changes over time&mdash;planning earlier preserves options.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 26 }}>
              {['Donor supply is finite', 'Earlier planning can improve natural coverage strategy', 'A consult clarifies what’s realistic now'].map(t => (
                <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <Check />
                  <span style={{ fontSize: 15, color: BODY }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={PHONE_HREF} style={{ color: HEADING, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>{PHONE}</a>
              <a href="mailto:info@rhrli.com" style={{ color: HEADING, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>info@rhrli.com</a>
              <span style={{ color: BODY, fontSize: 15 }}>167 Froehlich Farm Blvd, Woodbury, NY 11797</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#000', color: 'rgba(255,255,255,0.7)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 20 }}>
            <a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/cookie-policy" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, textDecoration: 'none' }}>Cookie Policy</a>
          </div>
          <p style={{ fontSize: 12, lineHeight: 1.7, margin: '0 0 16px' }}>
            <strong style={{ color: '#fff' }}>Medical Disclaimer:</strong> This website provides general information
            about hair restoration procedures. It is not intended to be a substitute for professional medical advice,
            diagnosis, or treatment. Individual results may vary. Not all candidates are eligible for treatment. A
            medical consultation is required to determine candidacy.
          </p>
          <p style={{ fontSize: 12, margin: 0 }}>&copy; 2026 RHRLI. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
