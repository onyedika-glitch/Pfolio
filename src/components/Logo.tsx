import React from 'react'

interface LogoProps {
  size?: number
  variant?: 'navy' | 'blue'
  textColor?: string
  subColor?: string
}

export default function Logo({ size = 44, variant = 'navy', textColor, subColor }: LogoProps) {
  return (
    <div className="flex items-center gap-4 no-underline flex-shrink-0">
      <img
        src="/assets/logo.png"
        alt="DevOmogo"
        width={size}
        height={size}
        style={{ borderRadius: '12px', objectFit: 'contain' }}
      />
      <div className="flex flex-col gap-1 justify-center">
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: Math.round(size * 0.42),
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: textColor || '#0F172A',
          lineHeight: 1,
        }}>DevOmogo</span>
        <span style={{
          fontSize: Math.round(size * 0.22),
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: subColor || '#3B82F6',
          lineHeight: 1,
        }}>Engineering Studio</span>
      </div>
    </div>
  )
}
