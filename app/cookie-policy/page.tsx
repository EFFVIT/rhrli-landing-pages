const OG_IMAGE = 'https://vitalitymmg.com/wp-content/uploads/2026/06/rhrli-og-featured.png'

export const metadata = {
  title: 'Cookie Policy | RHRLI',
  description: 'RHRLI cookie policy — how we use cookies and similar technologies on our website.',
  robots: { index: false, follow: true },
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
const BLUE = '#1B3498'
const CREAM = '#F4F0EB'
const LOGO_ICON = '/rhrli-icon.png'
const LOGO_WORDMARK = '/rhrli-wordmark.svg'

export default function CookiePolicy() {
  return (
    <>
      {/* Nav */}
      <header className="site-header" style={{
        background: NAVY,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <a href="/" className="site-header-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={LOGO_ICON} alt="RHRLI" height={40} />
          <img className="logo-wordmark" src={LOGO_WORDMARK} alt="Robotic Hair Restoration of Long Island" />
        </a>
        <div className="site-header-actions" style={{ display: 'flex', alignItems: 'center' }}>
          <a className="phone-link" href="tel:5162102369" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>
            516-210-2369
          </a>
          <a className="header-cta" href="/hair-restoration-google#evaluation" style={{
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

      {/* Hero */}
      <section style={{ background: NAVY, padding: '48px 40px 40px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, marginBottom: 10 }}>
          Cookie Policy
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Last Updated: June 17, 2026</p>
      </section>

      {/* Content */}
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '52px 32px 80px' }}>

        {/* Intro */}
        <div style={{
          background: CREAM,
          borderLeft: `4px solid ${NAVY}`,
          padding: '20px 24px',
          borderRadius: '0 8px 8px 0',
          marginBottom: 40,
          fontSize: '0.95rem',
          color: '#444',
          lineHeight: 1.7,
        }}>
          This Cookie Policy explains how RHRLI (&ldquo;we,&rdquo; &ldquo;us,&rdquo; and &ldquo;ours&rdquo;) uses cookies and similar technologies to recognize you when you visit our website at{' '}
          <a href="https://more.rhrli.com" style={{ color: BLUE }}>https://more.rhrli.com</a>. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          <br /><br />
          In some cases, we may use cookies to collect personal information, or information that becomes personal information if we combine it with other information.
        </div>

        <Section id="what-are-cookies" title="What Are Cookies?">
          <p style={p}>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
          <p style={p}>Cookies set by the website owner (in this case, <a href="https://more.rhrli.com" style={{ color: BLUE }}>https://more.rhrli.com</a>) are called &ldquo;first party cookies.&rdquo; Cookies set by parties other than the website owner are called &ldquo;third party cookies.&rdquo; Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.</p>
        </Section>

        <Section id="why-cookies" title="Why Do We Use Cookies?">
          <p style={p}>We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as &ldquo;essential&rdquo; or &ldquo;strictly necessary&rdquo; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our websites. Third parties serve cookies through our Websites for advertising, analytics, and other purposes. This is described in more detail below.</p>
          <p style={p}>The specific types of first and third-party cookies served through our Websites and the purposes they perform are described below:</p>

          {/* Cookie type cards */}
          {[
            {
              title: 'Analytics and Customization Cookies',
              desc: 'These cookies collect information that is used either in aggregate form to help us understand how our Websites are being used or how effective our marketing campaigns are, or to help us customize our Websites for you.',
              who: 'Google Analytics',
            },
            {
              title: 'Advertising Cookies',
              desc: 'These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.',
              who: 'Google',
            },
          ].map(({ title, desc, who }) => (
            <div key={title} style={{
              background: '#f5f7fa',
              border: '1px solid #e2e8f0',
              borderRadius: 8,
              padding: '20px 22px',
              marginBottom: 16,
            }}>
              <p style={{ fontWeight: 700, color: NAVY, marginBottom: 8, fontSize: '0.95rem' }}>{title}</p>
              <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: 8 }}>{desc}</p>
              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: 4 }}><strong style={{ color: '#333' }}>Who serves these cookies:</strong> {who}</p>
              <p style={{ fontSize: '0.85rem', color: '#666' }}><strong style={{ color: '#333' }}>How to refuse:</strong> Follow the instructions below under &ldquo;How Can I Control Cookies?&rdquo;</p>
            </div>
          ))}
        </Section>

        <Section id="web-beacons" title="What About Other Tracking Technologies, Like Web Beacons?">
          <p style={p}>Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called &ldquo;tracking pixels&rdquo; or &ldquo;clear gifs&rdquo;). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Websites or opened an email that we have sent them. This allows us, for example, to monitor the traffic patterns of users from one page within our Websites to another, to deliver or communicate with cookies, to understand whether you have come to our Websites from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of email marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and hence declining cookies will impair their functioning.</p>
        </Section>

        <Section id="flash-cookies" title="Do You Use Flash Cookies or Local Shared Objects?">
          <p style={p}>Our Websites may also use so-called &ldquo;Flash Cookies&rdquo; (also known as Local Shared Objects or &ldquo;LSOs&rdquo;) to, among other things, collect and store information about your use of our services, fraud prevention, and for other site operations.</p>
          <p style={p}>If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the Website Storage Settings Panel. You can also control Flash Cookies by going to the Global Storage Settings Panel and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies, how to prevent Flash LSOs from being placed on your computer without you being asked, and how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).</p>
          <p style={p}>Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.</p>
        </Section>

        <Section id="targeted-advertising" title="Do You Serve Targeted Advertising?">
          <p style={p}>Third parties may serve cookies on your computer or mobile device to serve advertising through our Websites. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. This can be accomplished by them using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details, or other details that directly identify you unless you choose to provide these.</p>
        </Section>

        <Section id="control-cookies" title="How Can I Control Cookies?">
          <p style={p}>You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you refuse cookies through your web browser controls vary from browser to browser, you should visit your browser&apos;s help menu for more information.</p>
          <p style={p}>
            In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit{' '}
            <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" style={{ color: BLUE }}>http://www.aboutads.info/choices/</a> or{' '}
            <a href="http://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" style={{ color: BLUE }}>http://www.youronlinechoices.com</a>.
          </p>
        </Section>

        <Section id="updates" title="How Often Will You Update This Cookie Policy?">
          <p style={p}>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>
          <p style={p}>The date at the top of this Cookie Policy indicates when it was last updated.</p>
        </Section>

        <Section id="further-info" title="Where Can I Get Further Information?">
          <p style={p}>For more information on our data policies, see our <a href="/privacy-policy/" style={{ color: BLUE }}>Privacy Policy</a>.</p>
          <p style={p}>If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:info@rhrli.com" style={{ color: BLUE }}>info@rhrli.com</a> or contact us by post:</p>
          <div style={{
            background: CREAM,
            border: '1px solid #e2e8f0',
            borderRadius: 10,
            padding: '24px 28px',
            marginTop: 16,
          }}>
            <p style={{ fontWeight: 700, color: NAVY, marginBottom: 4 }}>RHRLI</p>
            <p style={{ color: '#555', fontSize: '0.95rem' }}>167 Froehlich Farm Blvd</p>
            <p style={{ color: '#555', fontSize: '0.95rem' }}>Woodbury, NY 11797</p>
            <p style={{ color: '#555', fontSize: '0.95rem' }}><a href="tel:5162102369" style={{ color: BLUE }}>516-210-2369</a></p>
          </div>
        </Section>

      </main>

      {/* Footer */}
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
        <span>&copy; 2026 RHRLI</span>
        <a href="/privacy-policy/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>PRIVACY POLICY</a>
        <a href="/cookie-policy/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>COOKIE POLICY</a>
      </footer>
    </>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: 44, scrollMarginTop: 24 }}>
      <h2 style={{
        fontSize: '1.1rem',
        fontWeight: 800,
        color: '#0D1B35',
        paddingBottom: 10,
        borderBottom: '2px solid #F4F0EB',
        marginBottom: 18,
        letterSpacing: '-0.01em',
      }}>
        {title}
      </h2>
      {children}
    </section>
  )
}

const p: React.CSSProperties = { marginBottom: 14, color: '#555', fontSize: '0.95rem', lineHeight: 1.75 }
