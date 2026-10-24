import React from 'react'
import { Link } from 'react-router-dom'
import { MobileApp } from '../data/mobileApps'

function Phone({ src, alt, framed }: { src: string; alt: string; framed: boolean }) {
  if (!framed) {
    return (
      <img src={src} alt={alt} loading="lazy" className="block shrink-0 w-[150px] sm:w-[180px]"
        style={{ aspectRatio: '9 / 16', objectFit: 'cover', borderRadius: '14px', boxShadow: '0 10px 30px -12px rgba(0,0,0,0.35)' }} />
    )
  }
  return (
    <div className="shrink-0 w-[150px] sm:w-[180px]" style={{ background: '#0F172A', padding: '6px', borderRadius: '26px', boxShadow: '0 10px 30px -12px rgba(0,0,0,0.45)' }}>
      <img src={src} alt={alt} loading="lazy" className="block w-full"
        style={{ aspectRatio: '9 / 19.5', objectFit: 'cover', objectPosition: 'top', borderRadius: '20px', background: '#fff' }} />
    </div>
  )
}

export default function AppShowcase({ app }: { app: MobileApp }) {
  return (
    <div style={{ background: '#fff', border: '1px solid rgba(15,23,42,0.08)', borderRadius: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.08)' }} className="overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 p-5 md:p-7 pb-0 md:pb-0">
        <div className="min-w-0">
          <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#BE185D', marginBottom: '8px' }}>{app.platform}</div>
          <h3 style={{ fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0F172A', marginBottom: '6px' }}>{app.name}</h3>
          <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, maxWidth: '560px' }}>{app.blurb}</p>
        </div>
        {app.caseStudy && (
          <Link to={app.caseStudy} className="inline-flex items-center gap-1.5 no-underline shrink-0 self-start sm:self-auto"
            style={{ fontSize: '13px', fontWeight: 600, color: '#fff', background: '#0F172A', padding: '10px 20px', borderRadius: '100px' }}>
            Read the story <i className="fas fa-arrow-right" style={{ fontSize: '11px' }}></i>
          </Link>
        )}
      </div>
      <div className="flex gap-4 overflow-x-auto no-scrollbar p-5 md:p-7" style={{ scrollSnapType: 'x mandatory' }}>
        {app.screens.map((s) => (
          <div key={s.src} className="shrink-0" style={{ scrollSnapAlign: 'start' }}>
            <Phone src={s.src} alt={s.alt} framed={app.framed} />
          </div>
        ))}
      </div>
    </div>
  )
}
