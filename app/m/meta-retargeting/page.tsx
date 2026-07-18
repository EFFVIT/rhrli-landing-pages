import type { Metadata } from 'next'
import RhrliMetaRetargetingLP from '@/components/RhrliMetaRetargetingLP'

export const metadata: Metadata = {
  title: 'Still Considering Hair Restoration? | Questions Answered | RHRLI',
  description: 'Worried about surgery or shaving? Get answers in 60 seconds. A private evaluation with RHRLI’s medical team on Long Island—no pressure, no obligation.',
  robots: 'noindex, nofollow',
  openGraph: { images: [{ url: 'https://more.rhrli.com/og/m-meta-retargeting.webp', width: 1200, height: 630, alt: 'RHRLI hair restoration consultation on Long Island' }] },
  twitter: { card: 'summary_large_image', images: ['https://more.rhrli.com/og/m-meta-retargeting.webp'] },
}

export default function MMetaRetargeting() {
  return (
    <RhrliMetaRetargetingLP
      heroFormId="xSajONHxzJemzr47uT4Y"
      bottomFormId="4NPDLIvC6QWumboqRDIV"
      variant="standard"
    />
  )
}
