import type { Metadata } from 'next'
import ConsultFunnel from '@/components/consult/ConsultFunnel'
import './consult.css'

/* Practice facts below are read from the GHL location record for
   8GEloxZleCEfdjQE1I2x on 2026-08-14, not typed from memory.
   The surgeon's credentials (board certification, years in practice) are NOT
   rendered: they are claims, no system of record here holds them, and a
   credential line is the first thing a visitor checks. Add them once the
   practice confirms them in writing. */
const PRACTICE = 'Robotic Hair Restoration of Long Island'
const ADDRESS = '366 North Broadway'
const CITY = 'Jericho, NY 11753'
const PHONE_DISPLAY = '(516) 605-1545'
const PHONE_RAW = '+15166051545'

export const metadata: Metadata = {
  title: `Book a consultation | ${PRACTICE}`,
  description:
    'Book a one-hour hair restoration evaluation in Jericho or by video. Density measured, photographed and written up the same day. Nothing is quoted, scheduled or sold at the appointment.',
  robots: { index: false, follow: false },
  openGraph: {},
  twitter: {},
}

export default function ConsultPage() {
  return (
    <div id="consult">
      <a className="skip" href="#consult-book">Skip to the booking form</a>

      <header className="masthead">
        <div className="mark">{PRACTICE}</div>
        <div className="mast-meta">
          <a className="home" href="https://rhrli.com/">Back to site</a>
          {/* DniSwap is already mounted in the root layout and rewrites this
              number and its tel: href when a gclid session is present. */}
          <a className="tel" href={`tel:${PHONE_RAW}`}>{PHONE_DISPLAY}</a>
        </div>
      </header>

      <main className="shell">
        <section className="pitch">
          <h1 className="statement" style={{ marginTop: 0 }}>
            One specialty. One surgeon. <em>One room.</em>
          </h1>
          <p className="saystill">
            An hour, in Jericho or by video. <b>Density measured across four zones</b>, photographed
            under standardised light, and written up the same day for you to take with you.
          </p>

          {/* Photo slots. Client supplies; an unset file falls back to a labelled
              frame rather than a broken image. No patient imagery on this page. */}
          <div className="photos three">
            {[
              ['exterior', 'Exterior'],
              ['consult-room', 'Consult room'],
              ['reception', 'Reception'],
            ].map(([file, slot]) => (
              /* The frame renders no image element until the practice supplies a
                 file. Pointing a source at a missing asset shows the same
                 placeholder but logs a 404 per slot, which fails the fleet's
                 console-clean verification gate for a non-defect. */
              <figure className="photo" data-slot={slot} data-empty="" key={file} />
            ))}
          </div>

          <dl className="visit">
            <div>
              <dt>Where</dt>
              <dd>{ADDRESS}<small>{CITY}</small></dd>
            </div>
            <div>
              <dt>The hour</dt>
              <dd>Examination, photographs, a written reading
                <small>Nothing is quoted, scheduled or sold at the evaluation.</small>
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
          <p className="smallprint">
            Photographs are of the practice. No patient imagery of any kind appears on this page.
          </p>
        </section>

        <section className="formwrap" id="consult-book">
          <ConsultFunnel />
        </section>
      </main>
    </div>
  )
}
