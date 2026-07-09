const OG_IMAGE = 'https://vitalitymmg.com/wp-content/uploads/2026/06/rhrli-og-featured.png'

export const metadata = {
  title: 'Privacy Policy | RHRLI',
  description: 'RHRLI privacy policy — how we collect, use, and protect your personal information.',
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

export default function PrivacyPolicy() {
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
          Privacy Policy
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
          Thank you for choosing to be part of our community at RHRLI (&ldquo;company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regard to your personal information, please contact us at{' '}
          <a href="mailto:info@rhrli.com" style={{ color: BLUE }}>info@rhrli.com</a>.
        </div>

        <p style={p}>
          When you visit our website <a href="https://more.rhrli.com" style={{ color: BLUE }}>https://more.rhrli.com</a> and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our websites and services.
        </p>
        <p style={{ ...p, marginBottom: 40 }}>
          This privacy policy applies to all information collected through our website (such as <a href="https://more.rhrli.com" style={{ color: BLUE }}>https://more.rhrli.com</a>) and/or any related services, sales, marketing, or events (we refer to them collectively in this privacy policy as the &ldquo;Websites&rdquo;).
        </p>

        {/* TOC */}
        <div style={{
          background: '#f5f7fa',
          border: '1px solid #e2e8f0',
          borderRadius: 10,
          padding: '24px 28px',
          marginBottom: 52,
        }}>
          <p style={{ fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: NAVY, marginBottom: 14 }}>
            Table of Contents
          </p>
          <ol style={{ paddingLeft: 20, margin: 0 }}>
            {[
              'What Information Do We Collect?',
              'How Do We Use Your Information?',
              'Will Your Information Be Shared With Anyone?',
              'Do We Use Cookies and Other Tracking Technologies?',
              'How Long Do We Keep Your Information?',
              'How Do We Keep Your Information Safe?',
              'Do We Collect Information From Minors?',
              'What Are Your Privacy Rights?',
              'Do California Residents Have Specific Privacy Rights?',
              'Do We Make Updates to This Policy?',
              'How Can You Contact Us About This Policy?',
            ].map((item, i) => (
              <li key={i} style={{ marginBottom: 6 }}>
                <a href={`#section-${i + 1}`} style={{ color: BLUE, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                  {i + 1}. {item}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <Section id="section-1" title="1. What Information Do We Collect?">
          <h3 style={h3}>Personal information you disclose to us</h3>
          <p style={inShort}>In Short: We collect personal information that you provide to us such as name, address, contact information, passwords and security data, and payment information.</p>
          <p style={p}>We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Websites, or otherwise contacting us.</p>
          <p style={p}>The personal information that we collect depends on the context of your interactions with the Websites, the choices you make, and the products and features you use. The personal information we collect can include the following:</p>
          <ul style={ul}>
            <li style={li}><strong>Name and Contact Data.</strong> We may collect your first and last name, email address, postal address, phone number, and other similar contact data.</li>
            <li style={li}><strong>Credentials.</strong> When needed, we collect passwords, password hints, and similar security information used for authentication and account access.</li>
            <li style={li}><strong>Payment Data.</strong> We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number) and the security code associated with your payment instrument. All payment data is stored by the payment processor and you should review its privacy policies and contact the payment processor directly to respond to your questions.</li>
          </ul>
          <p style={p}>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

          <h3 style={h3}>Information collected from other sources</h3>
          <p style={inShort}>In Short: We may collect limited data from public databases, marketing partners, and other outside sources.</p>
          <p style={p}>We may obtain information about you from other sources, such as public databases, joint marketing partners, as well as from other third parties. Examples of the information we receive from other sources include: social media profile information; marketing leads and search results and links, including paid listings (such as sponsored links).</p>
        </Section>

        <Section id="section-2" title="2. How Do We Use Your Information?">
          <p style={inShort}>In Short: We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</p>
          <p style={p}>We use personal information collected via our Websites for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests (&ldquo;Business Purposes&rdquo;), in order to enter into or perform a contract with you (&ldquo;Contractual&rdquo;), with your consent (&ldquo;Consent&rdquo;), and/or for compliance with our legal obligations (&ldquo;Legal Reasons&rdquo;).</p>
          <p style={p}>We use the information we collect or receive:</p>
          <ul style={ul}>
            <li style={li}><strong>Fulfill and manage your orders</strong> for Contractual reasons. We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Websites.</li>
            <li style={li}><strong>For other Business Purposes.</strong> We may use your information for other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and to evaluate and improve our Websites, products, services, marketing, and your experience.</li>
          </ul>
        </Section>

        <Section id="section-3" title="3. Will Your Information Be Shared With Anyone?">
          <p style={inShort}>In Short: We only share information with your consent, to comply with laws, to protect your rights, or to fulfill business obligations.</p>
          <p style={p}>We only share and disclose your information in the following situations:</p>
          <ul style={ul}>
            <li style={li}><strong>Compliance with Laws.</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
            <li style={li}><strong>Vital Interests and Legal Rights.</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
            <li style={li}><strong>Vendors, Consultants and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service, and marketing efforts. We may allow selected third parties to use tracking technology on the Websites, which will enable them to collect data about how you interact with the Websites over time. Unless described in this Policy, we do not share, sell, rent, or trade any of your information with third parties for their promotional purposes.</li>
            <li style={li}><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            <li style={li}><strong>With your Consent.</strong> We may disclose your personal information for any other purpose with your consent.</li>
          </ul>
        </Section>

        <Section id="section-4" title="4. Do We Use Cookies and Other Tracking Technologies?">
          <p style={inShort}>In Short: We may use cookies and other tracking technologies to collect and store your information.</p>
          <p style={p}>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our{' '}
            <a href="/cookie-policy/" style={{ color: BLUE }}>Cookie Policy</a>.
          </p>
        </Section>

        <Section id="section-5" title="5. How Long Do We Keep Your Information?">
          <p style={inShort}>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.</p>
          <p style={p}>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
          <p style={p}>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
        </Section>

        <Section id="section-6" title="6. How Do We Keep Your Information Safe?">
          <p style={inShort}>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</p>
          <p style={p}>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the Internet itself is 100 percent secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Websites is at your own risk. You should only access the services within a secure environment.</p>
        </Section>

        <Section id="section-7" title="7. Do We Collect Information From Minors?">
          <p style={inShort}>In Short: We do not knowingly collect data from or market to children under 18 years of age.</p>
          <p style={p}>We do not knowingly solicit data from or market to children under 18 years of age. By using the Websites, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent&apos;s use of the Websites. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at <a href="mailto:info@rhrli.com" style={{ color: BLUE }}>info@rhrli.com</a>.</p>
        </Section>

        <Section id="section-8" title="8. What Are Your Privacy Rights?">
          <p style={inShort}>In Short: You may review, change, or terminate your account at any time.</p>
          <p style={p}>If you are a resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You also have the right to request access to your data, correction of your data, and for your data to be removed. In the event of a data breach, you will be notified within 72 hours of the time the data breach is detected. You can find European Economic Area contact details here:{' '}
            <a href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" target="_blank" rel="noopener noreferrer" style={{ color: BLUE }}>
              http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
            </a>
          </p>
          <p style={p}>
            <strong>Cookies and similar technologies:</strong> Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Websites. To opt out of interest-based advertising by advertisers on our Websites, visit{' '}
            <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" style={{ color: BLUE }}>http://www.aboutads.info/choices/</a>. For more details, see our <a href="/cookie-policy/" style={{ color: BLUE }}>Cookie Policy</a>.
          </p>
        </Section>

        <Section id="section-9" title="9. Do California Residents Have Specific Privacy Rights?">
          <p style={inShort}>In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
          <p style={p}>California Civil Code Section 1798.83, also known as the &ldquo;Shine The Light&rdquo; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>
          <p style={p}>If you are under 18 years of age, reside in California, and have a registered account with the Websites, you have the right to request removal of unwanted data that you publicly post on the Websites. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Websites, but please be aware that the data may not be completely or comprehensively removed from our systems.</p>
        </Section>

        <Section id="section-10" title="10. Do We Make Updates to This Policy?">
          <p style={inShort}>In Short: Yes, we will update this policy as necessary to stay compliant with relevant laws.</p>
          <p style={p}>We may update this privacy policy from time to time. The updated version will be indicated by an updated &ldquo;Revised&rdquo; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>
        </Section>

        <Section id="section-11" title="11. How Can You Contact Us About This Policy?">
          <p style={p}>If you have questions or comments about this policy, you may email us at <a href="mailto:info@rhrli.com" style={{ color: BLUE }}>info@rhrli.com</a> or contact us by post:</p>
          <div style={{
            background: CREAM,
            border: '1px solid #e2e8f0',
            borderRadius: 10,
            padding: '24px 28px',
            marginTop: 16,
            marginBottom: 24,
          }}>
            <p style={{ fontWeight: 700, color: NAVY, marginBottom: 4 }}>RHRLI</p>
            <p style={{ color: '#555', fontSize: '0.95rem' }}>167 Froehlich Farm Blvd</p>
            <p style={{ color: '#555', fontSize: '0.95rem' }}>Woodbury, NY 11797</p>
            <p style={{ color: '#555', fontSize: '0.95rem' }}><a href="tel:5162102369" style={{ color: BLUE }}>516-210-2369</a></p>
          </div>
          <p style={p}>According to this Privacy Policy, you agree to share your personal data with our service. However, you still have the right to update, transfer, or delete it from us at any time. If you need further management of your data, please contact us at <a href="mailto:info@rhrli.com" style={{ color: BLUE }}>info@rhrli.com</a>.</p>
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
const h3: React.CSSProperties = { fontSize: '0.95rem', fontWeight: 700, color: '#111', margin: '20px 0 8px' }
const inShort: React.CSSProperties = { fontStyle: 'italic', fontWeight: 600, color: '#1B3498', display: 'block', marginBottom: 10, fontSize: '0.9rem' }
const ul: React.CSSProperties = { paddingLeft: 22, marginBottom: 14 }
const li: React.CSSProperties = { marginBottom: 8, color: '#555', fontSize: '0.95rem', lineHeight: 1.65 }
