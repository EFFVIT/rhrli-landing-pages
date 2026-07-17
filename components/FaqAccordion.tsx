'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'What is alopecia, and are there different types?',
    a: 'Alopecia is a medical term for hair loss. There are several types, including androgenetic alopecia (male or female pattern hair loss), alopecia areata (patchy loss related to immune activity), and others caused by hormonal changes, nutritional deficiencies, or scalp conditions. A medical evaluation is the only way to determine which type you have and what options may be appropriate.',
  },
  {
    q: 'Is hair loss always permanent?',
    a: 'Not always. Some forms of hair loss are temporary and may resolve with treatment of the underlying cause. Others, like androgenetic alopecia, are progressive. Determining whether hair loss is permanent requires a clinical assessment. Your evaluation will clarify what type of hair loss you have and what your options are.',
  },
  {
    q: 'How is hair loss typically evaluated by a medical professional?',
    a: 'A hair loss evaluation generally includes a review of your health history, an examination of your scalp and hair density, and an assessment of your hair loss pattern. Your provider will discuss your goals and explain what findings may indicate about cause and treatment options.',
  },
  {
    q: 'Can stress, hormones, or lifestyle factors affect hair loss?',
    a: 'Yes. Stress, hormonal changes, nutritional deficiencies, and certain medications can all contribute to or accelerate hair loss in some individuals. During your evaluation, your provider will review relevant personal history to understand any contributing factors.',
  },
  {
    q: 'Are there non-surgical options that may be discussed for hair loss conditions?',
    a: 'Yes. Depending on the type and cause of hair loss, a care plan may include non-surgical approaches. What is appropriate depends entirely on your evaluation findings, goals, and overall health. Your provider will explain all options suitable for your situation.',
  },
]

export default function FaqAccordion({ items = faqs }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: '1px solid #E5E7EB' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            style={{
              width: '100%',
              background: 'none',
              border: 'none',
              padding: '22px 0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              textAlign: 'left',
              fontSize: '1rem',
              fontWeight: 700,
              color: '#111',
              gap: 16,
            }}
          >
            <span>{item.q}</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 300, flexShrink: 0, color: '#555', lineHeight: 1 }}>
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <div style={{ paddingBottom: 24, color: '#555', lineHeight: 1.75, fontSize: '0.95rem' }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
