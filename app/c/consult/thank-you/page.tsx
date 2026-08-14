import type { Metadata } from 'next'
import Wordmark from '@/components/consult/Wordmark'
import GaTag from '@/components/consult/GaTag'
import BookingSummary from '@/components/consult/BookingSummary'
import '../consult.css'
import './thanks.css'

const PRACTICE = 'Robotic Hair Restoration of Long Island'
const ADDRESS = '167 Froehlich Farm Blvd'
const CITY = 'Woodbury, NY 11797'
const PHONE_DISPLAY = '(516) 210-2369'
const PHONE_RAW = '+15162102369'

export const metadata: Metadata = {
  title: `You're booked | ${PRACTICE}`,
  robots: { index: false, follow: false },
}

/* Posts are read live from the practice's own WordPress rather than curated
   here, so the list cannot go stale or misattribute a title. Revalidated hourly.
   A failed read renders nothing at all: an empty list and an unreachable API are
   different claims, and inventing filler for either is how a wrong fact ships. */
type Post = { id: number; link: string; date: string; title: { rendered: string } }

async function recentPosts(): Promise<Post[]> {
  try {
    const res = await fetch(
      'https://www.rhrli.com/wp-json/wp/v2/posts?per_page=3&_fields=id,link,date,title',
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    return (await res.json()) as Post[]
  } catch {
    return []
  }
}

const decode = (s: string) =>
  s.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
   .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ')
   .replace(/&#8217;|&rsquo;/g, '’').replace(/&#8216;|&lsquo;/g, '‘')

export default async function ThankYou() {
  const posts = await recentPosts()

  return (
    <div id="consult">
      <GaTag />

      <header className="masthead">
        <a className="mark" href="https://www.rhrli.com/" aria-label={PRACTICE}>
          <Wordmark className="wordmark" />
        </a>
        <div className="mast-meta">
          <a className="tel" href={`tel:${PHONE_RAW}`}>{PHONE_DISPLAY}</a>
        </div>
      </header>

      <main className="thanks">
        <section className="thanks-head">
          <h1 className="statement">You're booked.</h1>
          <BookingSummary address={ADDRESS} city={CITY} />
        </section>

        {/* ---------------------------------------------------------------
            WHAT TO EXPECT — INTENTIONALLY EMPTY.

            The practice has to write this. Describing a consultation we have
            not been told the shape of is exactly how an "instrument reading"
            RHRLI does not offer ended up on the live page earlier today.
            Replace this block with their words, then delete the notice.
            --------------------------------------------------------------- */}
        <section className="tsec" data-awaiting-copy>
          <h2>What to expect</h2>
          <p className="tsec-empty">
            Awaiting copy from the practice. This section stays empty until RHRLI
            describes the consultation in their own words.
          </p>
        </section>

        {/* ---------------------------------------------------------------
            TESTIMONIALS — INTENTIONALLY EMPTY.

            Needs real, attributable, release-covered patient words. Not
            writable here, and Google review text needs a working Places key
            plus Google's attribution requirements honoured.
            --------------------------------------------------------------- */}
        <section className="tsec" data-awaiting-copy>
          <h2>What patients say</h2>
          <p className="tsec-empty">
            Awaiting real testimonials with marketing releases on file.
          </p>
        </section>

        {posts.length > 0 && (
          <section className="tsec">
            <h2>While you wait</h2>
            <ul className="posts">
              {posts.map((p) => (
                <li key={p.id}>
                  <a href={p.link}>
                    <span className="pt">{decode(p.title.rendered)}</span>
                    <time dateTime={p.date}>
                      {new Date(p.date).toLocaleDateString('en-US', {
                        month: 'long', day: 'numeric', year: 'numeric',
                      })}
                    </time>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="callnote">
          <p>Need to change it, or have a question first?</p>
          <a href={`tel:${PHONE_RAW}`}>
            <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M5.2 2.6 7 6l-1.7 1.6a10 10 0 0 0 5.1 5.1L12 11l3.4 1.8v3a1.6 1.6 0 0 1-1.8 1.6C7.3 16.9 1.1 10.7.6 4.4A1.6 1.6 0 0 1 2.2 2.6h3Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            {PHONE_DISPLAY}
          </a>
        </div>
      </main>

      <footer className="consult-footer">
        <p className="cf-name">{PRACTICE}</p>
        <p className="cf-line">{ADDRESS}, {CITY} &nbsp;·&nbsp; <a href={`tel:${PHONE_RAW}`}>{PHONE_DISPLAY}</a></p>
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
