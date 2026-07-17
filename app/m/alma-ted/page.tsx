import type { Metadata } from 'next'
import AlmaTedMetaLP from '@/components/AlmaTedMetaLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.rhrli.com/og/m-alma-ted.webp", width: 1200, height: 630, alt: "Alma TED non-invasive hair treatment at RHRLI on Long Island" }] },
  twitter: { card: "summary_large_image", images: ["https://more.rhrli.com/og/m-alma-ted.webp"] },
  title: 'Alma TED Hair Restoration | Non-Surgical, No Needles | RHRLI',
  robots: 'noindex, nofollow',
}

export default function MAlmaTed() {
  return (
    <AlmaTedMetaLP
      heroFormId="MiZw7ApuI3zrO8VBfCeg"
      bottomFormId="a7L3NQ3oKeSFqA82He1O"
    />
  )
}
