import type { Metadata } from 'next'
import AlmaTedLP from '@/components/AlmaTedLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.rhrli.com/og/c-alma-ted.webp", width: 1200, height: 630, alt: "Alma TED non-surgical hair restoration at RHRLI on Long Island" }] },
  twitter: { card: "summary_large_image", images: ["https://more.rhrli.com/og/c-alma-ted.webp"] },
  title: 'Non-Invasive Hair Loss Support with Alma TED | RHRLI',
  robots: 'noindex, nofollow',
}

export default function CAlmaTed() {
  return (
    <AlmaTedLP
      heroFormId="BQH9SncrF0njkv27mlOd"
      bottomFormId="Hoakkpjk5Jd9gO3NpIVt"
    />
  )
}
