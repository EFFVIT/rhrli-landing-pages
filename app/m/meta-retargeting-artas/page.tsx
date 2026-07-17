import type { Metadata } from 'next'
import RhrliMetaLP from '@/components/RhrliMetaLP'

// ARTAS is a device trademark (compliance FM5). RHRLI is an authorized ARTAS
// robotic provider on Long Island; manufacturer attribution kept, no added
// device claims. Consult-first (Layer 1) framing preserved.
export const metadata: Metadata = {
  title: 'ARTAS® Robotic Hair Restoration | RHRLI Consultation',
  description: 'Considering robotic hair restoration? Request a private evaluation with RHRLI’s medical team on Long Island to review whether ARTAS® robotic FUE is right for you.',
  robots: 'noindex, nofollow',
  openGraph: { images: [{ url: 'https://more.rhrli.com/og/m-meta-retargeting-artas.webp', width: 1200, height: 630, alt: 'ARTAS robotic hair restoration consultation at RHRLI' }] },
  twitter: { card: 'summary_large_image', images: ['https://more.rhrli.com/og/m-meta-retargeting-artas.webp'] },
}

export default function MMetaRetargetingArtas() {
  return (
    <RhrliMetaLP
      heroFormId="QlkExECXagSsao5TAdii"
      bottomFormId="nfZjNY3jkoTyn0XfRDfx"
      eyebrow="ARTAS® Robotic Hair Restoration"
      heroHeadline="Considering Robotic Hair Restoration? Start With an Honest Evaluation"
      heroSub="RHRLI is a robotic hair restoration practice on Long Island using the ARTAS® system. The first step is a private consultation to review your options and whether you’re a candidate—guided by experienced medical professionals."
    />
  )
}
