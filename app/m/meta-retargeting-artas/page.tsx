import type { Metadata } from 'next'
import RhrliMetaRetargetingLP from '@/components/RhrliMetaRetargetingLP'

// ARTAS is a device trademark (compliance FM5). Manufacturer attribution kept
// (ARTAS® is a registered trademark of Venus Concept); no added device claims.
// Consult-first (Layer 1) framing preserved. Copy reproduced verbatim from
// start.rhrli.com/meta-retargeting-artas/ per Joe's Meta-softening waiver.
export const metadata: Metadata = {
  title: 'ARTAS® iX Robotic Hair Restoration | Minimally Invasive | RHRLI',
  description: 'Worried about surgery or shaving? Get clarity in 60 seconds. Request a private evaluation with RHRLI’s medical team on Long Island to confirm if ARTAS® or another method is right for you.',
  robots: 'noindex, nofollow',
  openGraph: { images: [{ url: 'https://more.rhrli.com/og/m-meta-retargeting-artas.webp', width: 1200, height: 630, alt: 'ARTAS robotic hair restoration consultation at RHRLI' }] },
  twitter: { card: 'summary_large_image', images: ['https://more.rhrli.com/og/m-meta-retargeting-artas.webp'] },
}

export default function MMetaRetargetingArtas() {
  return (
    <RhrliMetaRetargetingLP
      heroFormId="QlkExECXagSsao5TAdii"
      bottomFormId="nfZjNY3jkoTyn0XfRDfx"
      variant="artas"
    />
  )
}
