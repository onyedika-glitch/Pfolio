import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'

export default function TeamPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', color: '#0F172A' }}>
      <Navbar />

      {/* HERO */}
      <section style={{ background: '#1E3A8A', position: 'relative', overflow: 'hidden', padding: 'clamp(6.5rem, 14vw, 10rem) 0 clamp(3.5rem, 8vw, 6.25rem)' }}>
        <div className="absolute pointer-events-none" style={{ top: '-120px', right: '-80px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%)' }} />
        <div className="site-container relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 fade-in" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#3B82F6' }}></span>
            About the Firm
          </div>
          <h1 className="fade-in-2" style={{ fontSize: 'clamp(32px, 8vw, 76px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.04em', color: '#fff', marginBottom: '24px', maxWidth: '900px' }}>
            Founded by an engineer,<br />for engineers.
          </h1>
          <p className="fade-in-3" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, maxWidth: '640px', marginBottom: '48px' }}>
            DevOmogo is a specialist firm — not an agency that takes any project that walks through the door. We work with a small number of clients at any time, and every engagement is led by the founder.
          </p>
          <div className="fade-in-4 flex items-stretch gap-0.5 rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)', maxWidth: '600px' }}>
            {[['5+', 'Years', 'in practice'], ['12', 'Systems', 'shipped to production'], ['4', 'Domains', 'Healthcare · Fintech · AI · Web']].map(([val, main, sub]) => (
              <div key={main} style={{ background: 'rgba(255,255,255,0.04)', padding: '28px 36px', flex: 1 }}>
                <div style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1, marginBottom: '8px' }}>{val}</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.75)', marginBottom: '2px' }}>{main}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.02em' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section style={{ background: '#fff', padding: 'clamp(3.5rem, 8vw, 6.25rem) 0' }}>
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#0F172A', marginBottom: '24px' }}>
                Peter Onyedika<br />
                <span style={{ color: '#3B82F6', fontSize: 'clamp(20px, 1.5vw, 28px)' }}>Founder · Senior Full-Stack Architect</span>
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '24px' }}>
                DevOmogo was founded by <strong>Peter Onyedika</strong>, a Senior Full-Stack Architect with over 5 years building complex, production-grade systems for healthcare providers, fintech companies, and data platforms across Africa and beyond.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '24px' }}>
                Peter holds a degree in Software Engineering from FUTO and has architected systems handling millions in daily transaction volume, 50,000+ patient records, and AI pipelines processing 10M+ records per month.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '32px' }}>
                He believes that great software comes from deep understanding — of the problem, the user, and the tradeoffs. Every project at DevOmogo gets his direct attention.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://x.com/peteromogo2" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 no-underline transition-all duration-200"
                  style={{ fontSize: '14px', fontWeight: 600, color: '#fff', background: '#1E3A8A', padding: '12px 24px', borderRadius: '8px' }}>
                  <i className="fab fa-x-twitter"></i>
                  Follow on X
                </a>
                <a href="https://github.com/onyedika-glitch" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 no-underline transition-all duration-200"
                  style={{ fontSize: '14px', fontWeight: 600, color: '#fff', background: '#1E3A8A', padding: '12px 24px', borderRadius: '8px' }}>
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden relative">
                <img src="/assets/professional_portrait_senior_software_engineer.jpg" alt="Peter Onyedika"
                  style={{ width: '100%', height: '540px', objectFit: 'cover', display: 'block' }} />
                <div className="absolute rounded-xl" style={{ bottom: '28px', left: '28px', background: '#fff', padding: '16px 20px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.03em', color: '#0F172A' }}>Peter Onyedika</div>
                  <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>Founder · Senior Full-Stack Architect</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ background: '#F1F5F9', padding: 'clamp(3.5rem, 8vw, 6.25rem) 0' }}>
        <div className="site-container">
          <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#3B82F6' }}></span>
            Our Philosophy
          </div>
          <div className="grid gap-5 md:gap-6 mt-10 md:mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: 'fa-gem', title: 'Depth over breadth', desc: 'We specialise in complex, high-stakes systems. We do not take every project — only the ones where our expertise makes a measurable difference.' },
              { icon: 'fa-eye', title: 'Full transparency', desc: 'Every commit, every decision, every tradeoff is visible to you. No black boxes, no surprises, no vendor lock-in.' },
              { icon: 'fa-handshake', title: 'You own the system', desc: 'We build systems your team can own from day one. Full documentation, runbooks, and knowledge transfer are part of every engagement.' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '48px 40px' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(30,58,138,0.07)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <i className={`fas ${item.icon}`} style={{ fontSize: '20px', color: '#1E3A8A' }}></i>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '-0.03em', color: '#1E3A8A', marginBottom: '14px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.75, color: '#64748B' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  )
}
