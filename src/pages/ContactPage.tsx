import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', color: '#0F172A' }}>
      <Navbar />

      {/* HERO */}
      <section style={{ background: '#1E3A8A', position: 'relative', overflow: 'hidden', padding: '160px 0 100px' }}>
        <div className="absolute pointer-events-none" style={{ top: '-120px', right: '-80px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%)' }} />
        <div className="max-w-[1600px] mx-auto px-14 relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 fade-in" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#3B82F6' }}></span>
            Start a Conversation
          </div>
          <h1 className="fade-in-2" style={{ fontSize: 'clamp(48px, 5vw, 76px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.04em', color: '#fff', marginBottom: '24px', maxWidth: '900px' }}>
            Let's build something<br />exceptional.
          </h1>
          <p className="fade-in-3" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, maxWidth: '640px', marginBottom: '48px' }}>
            Every engagement starts with a 60-minute technical deep-dive. No pitch decks. No sales pressure. Just honest engineering judgment from someone who has built production systems at scale.
          </p>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div className="max-w-[1600px] mx-auto px-14">
          <div className="grid gap-12" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(28px, 2.5vw, 36px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '20px' }}>Get in touch</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#64748B', marginBottom: '40px', maxWidth: '480px' }}>
                Tell us about your project. We will respond within 24 hours to schedule a discovery call.
              </p>

              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div style={{ width: '48px', height: '48px', background: 'rgba(30,58,138,0.07)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fas fa-envelope" style={{ fontSize: '18px', color: '#1E3A8A' }}></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Email</div>
                    <a href="mailto:webdevelopment@discountclubcayman.com" className="no-underline inline-flex items-center gap-1.5 transition-all duration-200"
                      style={{ fontSize: '14px', fontWeight: 600, color: '#fff', background: '#3B82F6', padding: '8px 18px', borderRadius: '8px' }}>
                      webdevelopment@discountclubcayman.com
                    </a>
                    <p style={{ fontSize: '13px', color: '#64748B', marginTop: '4px' }}>We aim to respond within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div style={{ width: '48px', height: '48px', background: 'rgba(30,58,138,0.07)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fas fa-calendar" style={{ fontSize: '18px', color: '#1E3A8A' }}></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Discovery Call</div>
                    <p style={{ fontSize: '15px', color: '#64748B', margin: 0 }}>
                      A 60-minute technical deep-dive. We map your system requirements, constraints, and commercial goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div style={{ width: '48px', height: '48px', background: 'rgba(30,58,138,0.07)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fas fa-globe" style={{ fontSize: '18px', color: '#1E3A8A' }}></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Based in</div>
                    <p style={{ fontSize: '15px', color: '#64748B', margin: 0 }}>
                      London-informed. Africa-built. Working with clients across the UK, Europe, and Africa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '48px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '24px' }}>Send us a message</h3>
              <form className="flex flex-col gap-6" onSubmit={e => e.preventDefault()}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '6px', display: 'block' }}>Name</label>
                  <input type="text" placeholder="Your name"
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '14px', background: '#fff', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '6px', display: 'block' }}>Email</label>
                  <input type="email" placeholder="you@example.com"
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '14px', background: '#fff', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '6px', display: 'block' }}>Message</label>
                  <textarea rows={5} placeholder="Tell us about your project..."
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '14px', background: '#fff', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }} />
                </div>
                <a href="mailto:webdevelopment@discountclubcayman.com"
                  className="inline-flex items-center justify-center gap-2 no-underline transition-all duration-200"
                  style={{ background: '#1E3A8A', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontSize: '15px', fontWeight: 700, letterSpacing: '-0.01em' }}>
                  Send Message <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section style={{ background: '#F1F5F9', padding: '80px 0' }}>
        <div className="max-w-[1600px] mx-auto px-14 flex items-center justify-between flex-wrap gap-8">
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '8px' }}>Follow our work</h2>
            <p style={{ fontSize: '15px', color: '#64748B' }}>See what we are building and sharing.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://x.com/peteromogo2" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 no-underline transition-all duration-200"
              style={{ fontSize: '14px', fontWeight: 600, color: '#fff', background: '#1E3A8A', padding: '12px 24px', borderRadius: '8px' }}>
              <i className="fab fa-x-twitter"></i>
              X (Twitter)
            </a>
            <a href="https://github.com/onyedika-glitch" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 no-underline transition-all duration-200"
              style={{ fontSize: '14px', fontWeight: 600, color: '#fff', background: '#1E3A8A', padding: '12px 24px', borderRadius: '8px' }}>
              <i className="fab fa-github"></i>
              GitHub
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
