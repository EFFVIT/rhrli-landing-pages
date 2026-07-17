import type { Metadata } from 'next'
import RhrliMetaLP from '@/components/RhrliMetaLP'

export const metadata: Metadata = {
  title: 'Hair Restoration Consultation | See If You’re a Candidate | RHRLI',
  description: 'A private, personalized consultation to review your hair restoration options with RHRLI’s medical team on Long Island. Not a sales appointment.',
  robots: 'noindex, nofollow',
  openGraph: { images: [{ url: 'https://more.rhrli.com/og/m-meta.webp', width: 1200, height: 630, alt: 'Hair restoration consultation at RHRLI on Long Island' }] },
  twitter: { card: 'summary_large_image', images: ['https://more.rhrli.com/og/m-meta.webp'] },
}

export default function MMeta() {
  return (
    <RhrliMetaLP
      heroFormId="Pqntu5DaPJnPWLfTXI9n"
      bottomFormId="Do7oySjBYVV9t67fwiFv"
    />
  )
}
