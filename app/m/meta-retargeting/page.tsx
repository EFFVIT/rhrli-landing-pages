import type { Metadata } from 'next'
import RhrliMetaLP from '@/components/RhrliMetaLP'

export const metadata: Metadata = {
  title: 'Still Considering Hair Restoration? | RHRLI Consultation',
  description: 'You’ve looked into hair restoration. The honest next step is a private evaluation with RHRLI’s medical team on Long Island—no pressure, no obligation.',
  robots: 'noindex, nofollow',
  openGraph: { images: [{ url: 'https://more.rhrli.com/og/m-meta-retargeting.webp', width: 1200, height: 630, alt: 'RHRLI hair restoration consultation on Long Island' }] },
  twitter: { card: 'summary_large_image', images: ['https://more.rhrli.com/og/m-meta-retargeting.webp'] },
}

export default function MMetaRetargeting() {
  return (
    <RhrliMetaLP
      heroFormId="xSajONHxzJemzr47uT4Y"
      bottomFormId="4NPDLIvC6QWumboqRDIV"
      eyebrow="Still Considering Hair Restoration?"
      heroHeadline="You Looked Into Hair Restoration—Here’s the Honest Next Step"
      heroSub="No pressure, no obligation. A private, personalized consultation to review your goals, treatment options, and expected results—guided by experienced medical professionals."
    />
  )
}
