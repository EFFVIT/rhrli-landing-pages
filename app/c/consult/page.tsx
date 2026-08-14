import type { Metadata } from 'next'
import ConsultFunnel from '@/components/consult/ConsultFunnel'
import Wordmark from '@/components/consult/Wordmark'
import './consult.css'

/* Practice facts below are read from the GHL location record for
   8GEloxZleCEfdjQE1I2x on 2026-08-14, not typed from memory.
   The surgeon's credentials (board certification, years in practice) are NOT
   rendered: they are claims, no system of record here holds them, and a
   credential line is the first thing a visitor checks. Add them once the
   practice confirms them in writing. */
const PRACTICE = 'Robotic Hair Restoration of Long Island'
/* Verified 2026-08-14 from RHRLI's own schema.org markup on rhrli.com, which
   agrees with the live sibling LP footer. The GHL location record still says
   366 North Broadway, Jericho NY 11753 -- that record is WRONG and anything
   else reading it inherits the error. */
const ADDRESS = '167 Froehlich Farm Blvd'
const CITY = 'Woodbury, NY 11797'
/* DNI pool default. DniSwap only rewrites numbers matching 5162102369, so the
   practice's static GHL line would display untracked and never swap. Verified
   live: no gclid -> 516-210-2369; with a gclid -> a leased pool number. */
const PHONE_DISPLAY = '(516) 210-2369'
const PHONE_RAW = '+15162102369'

export const metadata: Metadata = {
  title: `Book a consultation | ${PRACTICE}`,
  description:
    'Book a one-hour consultation at Robotic Hair Restoration of Long Island. In person in Woodbury or by video, Monday to Friday and select Saturdays.',
  robots: { index: false, follow: false },
  openGraph: {},
  twitter: {},
}

export default function ConsultPage() {
  return (
    <div id="consult">
      <a className="skip" href="#consult-book">Skip to the booking form</a>

      <header className="masthead">
        <a className="mark" href="https://www.rhrli.com/" aria-label={PRACTICE}>
          <Wordmark className="wordmark" />
        </a>
        <div className="mast-meta">
          {/* DniSwap is already mounted in the root layout and rewrites this
              number and its tel: href when a gclid session is present. */}
          <a className="tel" href={`tel:${PHONE_RAW}`}>{PHONE_DISPLAY}</a>
        </div>
      </header>

      <main className="shell">
        <section className="pitch">
          <h1 className="statement" style={{ marginTop: 0 }}>
            A practice with one tool has <em>one answer for everyone.</em>
          </h1>
          <p className="saystill">
            Dr. Barsoumian keeps six. <b>Your plan gets built around the person you’re becoming</b>,
            not around the one machine in the room.
          </p>

          {/* Practice photographs supplied by RHRLI 2026-08-14. No before/after
              and no identifiable patient: reception, the ARTAS suite in use
              (patient fully draped, face not in frame), and the lounge. */}
          <div className="photos three">
            {[
              ['practice-reception', 'The reception desk at 366 North Broadway'],
              ['practice-procedure', 'The ARTAS iXi suite during a procedure'],
              ['practice-lounge', 'The patient lounge'],
            ].map(([file, alt]) => (
              <figure className="photo" key={file}>
                <img src={`/consult/${file}.webp`} alt={alt} width={900} height={675}
                     loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>

          <dl className="visit">
            <div>
              <dt><svg className="vicon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 18s6-5.2 6-9.4A6 6 0 0 0 4 8.6C4 12.8 10 18 10 18Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><circle cx="10" cy="8.4" r="2.2" stroke="currentColor" strokeWidth="1.6"/></svg>Where</dt>
              <dd>{ADDRESS}<small>{CITY}</small></dd>
            </div>
            <div>
              <dt><svg className="vicon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.2" stroke="currentColor" strokeWidth="1.6"/><path d="M10 5.8V10l3 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>When</dt>
              <dd>Monday to Friday, and select Saturdays
                <small>One hour, in person or by video.</small>
              </dd>
            </div>
          </dl>

          <div className="callnote">
            <p>Would you rather talk to a person?</p>
            <a href={`tel:${PHONE_RAW}`}>
              <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M5.2 2.6 7 6l-1.7 1.6a10 10 0 0 0 5.1 5.1L12 11l3.4 1.8v3a1.6 1.6 0 0 1-1.8 1.6C7.3 16.9 1.1 10.7.6 4.4A1.6 1.6 0 0 1 2.2 2.6h3Z"
                      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              {PHONE_DISPLAY}
            </a>
          </div>
        </section>

        <section className="formwrap" id="consult-book">
          <ConsultFunnel />
        </section>
      </main>

      <footer className="consult-footer">
        <p className="cf-name">{PRACTICE}</p>
        <p className="cf-line">
          {ADDRESS}, {CITY} &nbsp;·&nbsp; <a href={`tel:${PHONE_RAW}`}>{PHONE_DISPLAY}</a>
        </p>
        <p className="cf-disc">
          Individual results vary. This content is for educational purposes only and is not medical
          advice. Consult a qualified physician before pursuing any medical procedure.
        </p>
        <nav className="cf-links">
          <span>© {new Date().getFullYear()} {PRACTICE}</span>
          <a href="/privacy-policy/">Privacy Policy</a>
          <a href="/cookie-policy/">Cookie Policy</a>
          <a href="https://www.rhrli.com/terms-of-service/">Terms of Service</a>
        </nav>
      </footer>
    </div>
  )
}
