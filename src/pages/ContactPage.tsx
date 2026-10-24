import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}>
      <Navbar />
      <Seo
        title="Contact Omogo Peter Onyedika — Start a Project | DevOmogo"
        description="Get in touch with Omogo Peter Onyedika to start a project: email omogopeter@devomogo.tech. Full-stack, fintech, healthcare and AI development."
        keywords="contact DevOmogo, start a project, hire software engineer, omogopeter@devomogo.tech"
      />

      {/* HERO */}
      <section style={{ background: 'transparent', position: 'relative', overflow: 'hidden', padding: 'clamp(6.5rem, 14vw, 10rem) 0 clamp(3.5rem, 8vw, 6.25rem)' }}>
        <div className="site-container relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 fade-in" style={{ background: '#fff', border: '1px solid rgba(190,24,93,0.18)', padding: '6px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BE185D' }}>
            <span style={{ display: 'block', width: '6px', height: '6px', borderRadius: '50%', background: '#BE185D' }}></span>
            Say hello
          </div>
          <h1 className="fade-in-2" style={{ fontSize: 'clamp(32px, 8vw, 76px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '24px', maxWidth: '900px' }}>
            Got an idea?<br />Let's talk it through.
          </h1>
          <p className="fade-in-3" style={{ fontSize: '18px', color: '#1E293B', lineHeight: 1.6, maxWidth: '640px', marginBottom: '48px' }}>
            It all starts with an hour-long call. No pitch decks, no sales pressure, just an honest conversation with someone who has shipped real products to real users.
          </p>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', padding: 'clamp(3.5rem, 8vw, 6.25rem) 0' }}>
        <div className="site-container">
          <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2">
            <div>
              <h2 style={{ fontSize: 'clamp(28px, 2.5vw, 36px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '20px' }}>Get in touch</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#64748B', marginBottom: '40px', maxWidth: '480px' }}>
                Tell me about your project. I'll get back to you within 24 hours to set up a call.
              </p>

              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div style={{ width: '48px', height: '48px', background: 'rgba(190,24,93,0.07)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fas fa-envelope" style={{ fontSize: '18px', color: '#0F172A' }}></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Email</div>
                    <a href="mailto:omogopeter@devomogo.tech" className="no-underline inline-flex items-center gap-1.5 transition-all duration-200 max-w-full"
                      style={{ fontSize: '12px', fontWeight: 600, color: '#fff', background: '#BE185D', padding: '8px 12px', borderRadius: '8px', wordBreak: 'break-all' }}>
                      omogopeter@devomogo.tech
                    </a>
                    <p style={{ fontSize: '13px', color: '#64748B', marginTop: '4px' }}>I usually reply within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div style={{ width: '48px', height: '48px', background: 'rgba(190,24,93,0.07)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fas fa-calendar" style={{ fontSize: '18px', color: '#0F172A' }}></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Intro call</div>
                    <p style={{ fontSize: '15px', color: '#64748B', margin: 0 }}>
                      An hour together. You walk me through what you're building, and I ask about your goals, your users and what's getting in the way.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div style={{ width: '48px', height: '48px', background: 'rgba(190,24,93,0.07)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fas fa-globe" style={{ fontSize: '18px', color: '#0F172A' }}></i>
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

            <div className="p-6 md:p-10" style={{ background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '24px' }}>Send me a message</h3>
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
                  <textarea rows={5} placeholder="Tell me about your project..."
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '14px', background: '#fff', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }} />
                </div>
                <a href="mailto:omogopeter@devomogo.tech"
                  className="inline-flex items-center justify-center gap-2 no-underline transition-all duration-200"
                  style={{ background: '#0F172A', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontSize: '15px', fontWeight: 700, letterSpacing: '-0.01em' }}>
                  Send Message <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', padding: '80px 0' }}>
        <div className="site-container flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap gap-6">
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '8px' }}>Follow along</h2>
            <p style={{ fontSize: '15px', color: '#64748B' }}>See what I'm building and sharing.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://x.com/peteromogo2" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 no-underline transition-all duration-200"
              style={{ fontSize: '14px', fontWeight: 600, color: '#fff', background: '#0F172A', padding: '12px 24px', borderRadius: '8px' }}>
              <i className="fab fa-x-twitter"></i>
              X (Twitter)
            </a>
            <a href="https://github.com/onyedika-glitch" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 no-underline transition-all duration-200"
              style={{ fontSize: '14px', fontWeight: 600, color: '#fff', background: '#0F172A', padding: '12px 24px', borderRadius: '8px' }}>
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
