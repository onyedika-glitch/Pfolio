import React from 'react'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#1E3A8A' }}>
      <div className="absolute pointer-events-none" style={{ top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: '-80px', left: '200px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)' }} />
      <div className="max-w-[1600px] mx-auto px-14 py-24 flex items-center justify-between relative z-10 flex-wrap gap-10">
        <div>
          <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6', marginBottom: '16px' }}>Start a conversation</div>
          <h2 style={{ fontSize: 'clamp(36px, 3.5vw, 56px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#fff', maxWidth: '600px' }}>Ready to build something exceptional?</h2>
        </div>
        <div className="flex flex-col items-end gap-4 flex-shrink-0">
          <a href="mailto:webdevelopment@discountclubcayman.com"
            className="inline-flex items-center gap-2 no-underline transition-all duration-200"
            style={{ background: '#fff', color: '#1E3A8A', padding: '16px 36px', borderRadius: '6px', fontSize: '15px', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Book a Discovery Call
            <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
          </a>
          <a href="mailto:webdevelopment@discountclubcayman.com"
            className="inline-flex items-center gap-2 no-underline transition-all duration-200"
            style={{ background: 'transparent', color: 'rgba(255,255,255,0.6)', padding: '14px 36px', borderRadius: '6px', fontSize: '14px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.2)' }}
          >
            webdevelopment@discountclubcayman.com
          </a>
        </div>
      </div>
    </section>
  )
}
