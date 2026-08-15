import React from 'react'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#1E3A8A' }}>
      <div className="absolute pointer-events-none" style={{ top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)' }} />
      <div className="absolute pointer-events-none hidden sm:block" style={{ bottom: '-80px', left: '200px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)' }} />
      <div className="site-container py-16 md:py-24 flex flex-col lg:flex-row lg:items-center lg:justify-between relative z-10 gap-8 md:gap-10">
        <div className="min-w-0">
          <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6', marginBottom: '16px' }}>Start a conversation</div>
          <h2 style={{ fontSize: 'clamp(28px, 6vw, 56px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, color: '#fff', maxWidth: '600px' }}>Ready to build something exceptional?</h2>
        </div>
        <div className="flex flex-col items-stretch sm:items-start lg:items-end gap-3 w-full lg:w-auto shrink-0">
          <a href="mailto:omogopeter@devomogo.tech"
            className="inline-flex items-center justify-center gap-2 no-underline transition-all duration-200 w-full sm:w-auto"
            style={{ background: '#fff', color: '#1E3A8A', padding: '16px 28px', borderRadius: '6px', fontSize: '15px', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Book a Discovery Call
            <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
          </a>
          <a href="mailto:omogopeter@devomogo.tech"
            className="inline-flex items-center justify-center gap-2 no-underline transition-all duration-200 w-full sm:w-auto text-center"
            style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', padding: '14px 20px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.2)', wordBreak: 'break-all' }}
          >
            omogopeter@devomogo.tech
          </a>
        </div>
      </div>
    </section>
  )
}
