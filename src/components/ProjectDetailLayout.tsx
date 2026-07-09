import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CTABanner from './CTABanner'

interface ProjectDetailProps {
  bg: string
  glow: string
  labelColor: string
  title: string
  subtitle: string
  description: string
  techs: string[]
  features: { icon: string; title: string; desc: string }[]
  live?: string
  github?: string
}

export default function ProjectDetailLayout({
  bg, glow, labelColor, title, subtitle, description, techs, features, live, github
}: ProjectDetailProps) {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', color: '#0F172A' }}>
      <Navbar />
      <section style={{ background: bg, position: 'relative', overflow: 'hidden', padding: '160px 0 100px' }}>
        <div className="absolute pointer-events-none" style={{ top: '-120px', right: '-80px', width: '600px', height: '600px', background: `radial-gradient(circle, ${glow} 0%, transparent 65%)` }} />
        <div className="max-w-[1600px] mx-auto px-14 relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 fade-in" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: labelColor }}>
            <Link to="/work" className="no-underline" style={{ color: labelColor }}>Work</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>{title}</span>
          </div>
          <h1 className="fade-in-2" style={{ fontSize: 'clamp(48px, 5vw, 76px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.04em', color: '#fff', marginBottom: '16px' }}>{title}</h1>
          <p className="fade-in-3" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, maxWidth: '640px', marginBottom: '36px' }}>{subtitle}</p>
          <div className="fade-in-4 flex flex-wrap gap-4">
            {live && <a href={live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 no-underline transition-all duration-200" style={{ fontSize: '14px', fontWeight: 600, color: '#fff', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', padding: '12px 24px', borderRadius: '8px' }}><i className="fas fa-external-link-alt"></i> Live Site</a>}
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 no-underline transition-all duration-200" style={{ fontSize: '14px', fontWeight: 600, color: '#fff', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', padding: '12px 24px', borderRadius: '8px' }}><i className="fab fa-github"></i> GitHub Repo</a>}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div className="max-w-[1600px] mx-auto px-14">
          <div className="grid gap-16" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(28px, 2.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '20px' }}>About this project</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B' }}>{description}</p>
            </div>
            <div style={{ background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '40px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '24px' }}>Technologies</h3>
              <div className="flex flex-wrap gap-2">{techs.map(t => <span key={t} style={{ fontSize: '12px', fontWeight: 500, padding: '5px 12px', borderRadius: '6px', background: `${bg}14`, color: bg }}>{t}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#F1F5F9', padding: '100px 0' }}>
        <div className="max-w-[1600px] mx-auto px-14">
          <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: bg }}><span style={{ display: 'block', width: '20px', height: '2px', background: bg }}></span>Key Features</div>
          <div className="grid gap-6 mt-12" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {features.map(f => (
              <div key={f.title} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '36px 32px' }}>
                <div style={{ width: '44px', height: '44px', background: `${bg}14`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}><i className={`fas ${f.icon}`} style={{ fontSize: '18px', color: bg }}></i></div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', color: '#0F172A', marginBottom: '10px' }}>{f.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#64748B' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner /><Footer />
    </div>
  )
}
