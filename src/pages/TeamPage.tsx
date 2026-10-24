import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'

export default function TeamPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', color: '#0F172A' }}>
      <Navbar />
      <Seo
        title="About — Omogo Peter Onyedika, Senior Software Infrastructure Engineer | DevOmogo"
        description="Omogo Peter Onyedika is a Senior Software Infrastructure Engineer and the founder of Japa Coach, YouExtractor, Gigora Network and Sadar Properties."
        keywords="Omogo Peter Onyedika, software engineer, founder, DevOmogo, senior software infrastructure engineer"
        jsonLd={{ "@context": "https://schema.org", "@type": "Person", name: 'Omogo Peter Onyedika', jobTitle: 'Senior Software Infrastructure Engineer', url: 'https://devomogo.tech/team', sameAs: ['https://github.com/onyedika-glitch', 'https://x.com/peteromogo2'] }}
      />

      {/* HERO */}
      <section style={{ background: '#1E3A8A', position: 'relative', overflow: 'hidden', padding: 'clamp(6.5rem, 14vw, 10rem) 0 clamp(3.5rem, 8vw, 6.25rem)' }}>
        <div className="absolute pointer-events-none" style={{ top: '-120px', right: '-80px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%)' }} />
        <div className="site-container relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 fade-in" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#3B82F6' }}></span>
            About me
          </div>
          <h1 className="fade-in-2" style={{ fontSize: 'clamp(32px, 8vw, 76px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.04em', color: '#fff', marginBottom: '24px', maxWidth: '900px' }}>
            Hi, I'm<br />Omogo Peter Onyedika.
          </h1>
          <p className="fade-in-3" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, maxWidth: '640px', marginBottom: '48px' }}>
            I'm a software engineer who builds the hard parts of products: payments, patient data, and AI that actually ships. I work with a few clients at a time, and I write the code myself.
          </p>
          <div className="fade-in-4 flex items-stretch gap-0.5 rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)', maxWidth: '600px' }}>
            {[['5+', 'Years', 'in practice'], ['10', 'Systems', 'shipped to production'], ['6', 'Domains', 'Healthcare · Fintech · AI · Web · Marketplace · Real Estate']].map(([val, main, sub]) => (
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
                Omogo Peter Onyedika<br />
                <span style={{ color: '#3B82F6', fontSize: 'clamp(20px, 1.5vw, 28px)' }}>Founder · Senior Software Infrastructure Engineer</span>
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '24px' }}>
                For over 5 years I've been building production software for healthcare providers, fintech companies and data platforms, across Africa and beyond.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '24px' }}>
                I studied Software Engineering at FUTO, and I'm the founder of Japa Coach, YouExtractor, Gigora Network and Sadar Properties, so I know what it feels like to be the one waiting on software to ship.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '32px' }}>
                I believe good software comes from really understanding the problem, the people using it, and the trade-offs. That's why every project I take on gets my direct attention.
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
                <img src="/assets/professional_portrait_senior_software_engineer.jpeg" alt="Omogo Peter Onyedika"
                  style={{ width: '100%', height: '540px', objectFit: 'cover', display: 'block' }} />
                <div className="absolute rounded-xl" style={{ bottom: '28px', left: '28px', background: '#fff', padding: '16px 20px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.03em', color: '#0F172A' }}>Omogo Peter Onyedika</div>
                  <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>Founder · Senior Software Infrastructure Engineer</div>
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
            What I believe
          </div>
          <div className="grid gap-5 md:gap-6 mt-10 md:mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: 'fa-gem', title: 'Depth over breadth', desc: 'I focus on complex, high-stakes systems, and I only take on projects where I can make a real difference.' },
              { icon: 'fa-eye', title: 'Full transparency', desc: 'You see every commit, every decision and every trade-off. No black boxes, no surprises, no lock-in.' },
              { icon: 'fa-handshake', title: 'You own the system', desc: 'You should be able to run what I build without me. Docs, runbooks and a proper handover come with every project.' },
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
