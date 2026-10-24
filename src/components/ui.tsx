import React from 'react'

// Building blocks of the homepage design, shared so every page looks the same.

export const PINK = '#BE185D'
export const INK = '#0F172A'
export const MUTED = '#475569'

export const card: React.CSSProperties = {
  background: '#fff',
  border: '1px solid rgba(15,23,42,0.08)',
  borderRadius: '16px',
  boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.08)',
}

export const glass: React.CSSProperties = {
  background: 'rgba(255,255,255,0.55)',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  borderTop: '1px solid rgba(15,23,42,0.06)',
  borderBottom: '1px solid rgba(15,23,42,0.06)',
}

export function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 data-reveal style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.08, color: INK, marginBottom: '14px' }}>{children}</h2>
  )
}

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p data-reveal style={{ fontSize: '16px', fontWeight: 500, color: '#1E293B', lineHeight: 1.65, maxWidth: '560px', marginBottom: '40px' }}>{children}</p>
  )
}
