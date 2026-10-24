import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import { PINK, INK, MUTED, card, glass } from '../components/ui'

const EMAIL = 'omogopeter@devomogo.tech'

const ways = [
  { icon: 'fa-envelope', title: 'Email', body: 'I usually reply within 24 hours.', action: { label: EMAIL, href: `mailto:${EMAIL}` } },
  { icon: 'fa-video', title: 'Intro call', body: "An hour together. You walk me through what you're building, and I ask about your goals, your users and what's getting in the way." },
  { icon: 'fa-globe', title: 'Where I work', body: 'London-informed. Africa-built. Working with clients across the UK, Europe, and Africa.' },
]

const socials = [
  { href: 'https://www.linkedin.com/in/webdev-omogo-5a6980345', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
  { href: 'https://github.com/onyedika-glitch', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'https://x.com/peteromogo2', icon: 'fab fa-x-twitter', label: 'X' },
]

const field: React.CSSProperties = { width: '100%', padding: '13px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', fontSize: '14px', background: '#F8FAFC', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', color: INK }
const label: React.CSSProperties = { fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px', display: 'block' }

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '', company: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value })

  // Posts to the Vercel function in /api/contact, which emails it to me through Resend.
  const send = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json().catch(() => ({}))
      // Only trust an explicit ok from the function, never just a 200 (a misrouted request returns the HTML page).
      if (!res.ok || data.ok !== true) throw new Error(data.error || 'Couldn’t send right now.')
      setStatus('sent')
      setForm({ name: '', email: '', message: '', company: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Couldn’t send right now.')
      setStatus('error')
    }
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: INK }}>
      <Navbar />
      <Seo
        title="Contact Omogo Peter Onyedika | Start a Project | DevOmogo"
        description="Get in touch with Omogo Peter Onyedika to start a project: email omogopeter@devomogo.tech. Full-stack, fintech and AI development."
        keywords="contact DevOmogo, start a project, hire software engineer, omogopeter@devomogo.tech"
      />

      {/* HERO + FORM */}
      <section className="site-container pt-28 md:pt-36 lg:pt-44 pb-16 md:pb-24">
        <div className="grid gap-10 lg:gap-14 grid-cols-1 lg:grid-cols-2 items-start">
          <div className="min-w-0">
            <div className="fade-in inline-flex items-center gap-2 mb-6" style={{ fontSize: '12.5px', fontWeight: 600, color: '#334155', background: '#fff', border: '1px solid rgba(15,23,42,0.1)', padding: '6px 13px', borderRadius: '100px' }}>
              <span style={{ display: 'block', width: '7px', height: '7px', borderRadius: '50%', background: PINK }}></span>
              Say hello
            </div>
            <h1 className="fade-in-2" style={{ fontSize: 'clamp(34px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.06, letterSpacing: '-0.04em', color: INK, marginBottom: '22px' }}>
              Got an idea? <span style={{ color: PINK }}>Let's talk it through.</span>
            </h1>
            <p className="fade-in-3" style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', fontWeight: 500, color: '#1E293B', lineHeight: 1.7, marginBottom: '32px', maxWidth: '560px' }}>
              It all starts with an hour-long call. No pitch decks, no sales pressure, just an honest conversation with someone who has shipped real products to real users.
            </p>
            <div className="fade-in-4 flex flex-col gap-3">
              {ways.map((w) => (
                <div key={w.title} className="flex items-start gap-4 p-5" style={card}>
                  <div className="shrink-0" style={{ width: '42px', height: '42px', background: '#FDF2F8', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fas ${w.icon}`} style={{ fontSize: '16px', color: PINK }}></i>
                  </div>
                  <div className="min-w-0">
                    <div style={{ fontSize: '15px', fontWeight: 800, color: INK, marginBottom: '3px' }}>{w.title}</div>
                    {w.action && (
                      <a href={w.action.href} className="no-underline" style={{ fontSize: '14px', fontWeight: 700, color: PINK, wordBreak: 'break-all' }}>{w.action.label}</a>
                    )}
                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: MUTED, marginTop: w.action ? '2px' : 0 }}>{w.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={send} className="fade-in-3 relative p-6 sm:p-8 lg:p-10 flex flex-col gap-5" style={card}>
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '-0.03em', color: INK, marginBottom: '6px' }}>Send me a message</h2>
              <p style={{ fontSize: '14px', color: MUTED }}>It lands straight in my inbox. I usually reply within 24 hours.</p>
            </div>
            <div>
              <label htmlFor="c-name" style={label}>Your name</label>
              <input id="c-name" type="text" required placeholder="Ada Obi" value={form.name} onChange={set('name')} style={field} />
            </div>
            <div>
              <label htmlFor="c-email" style={label}>Your email</label>
              <input id="c-email" type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} style={field} />
            </div>
            <div>
              <label htmlFor="c-msg" style={label}>What are you building?</label>
              <textarea id="c-msg" rows={6} required placeholder="A few lines about the project, your timeline and anything that's worrying you." value={form.message} onChange={set('message')} style={{ ...field, resize: 'vertical' }} />
            </div>
            {/* Honeypot: hidden from people, tempting to bots. */}
            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.company} onChange={set('company')}
              style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }} />
            {status === 'sent' && (
              <div role="status" className="flex items-start gap-3 p-4" style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '12px', fontSize: '14px', color: '#065F46' }}>
                <i className="fas fa-circle-check" style={{ marginTop: '2px' }}></i>
                <span>Thanks, your message is on its way. I'll get back to you within 24 hours.</span>
              </div>
            )}
            {status === 'error' && (
              <div role="alert" className="flex items-start gap-3 p-4" style={{ background: '#FDF2F8', border: '1px solid rgba(190,24,93,0.25)', borderRadius: '12px', fontSize: '14px', color: '#9D174D' }}>
                <i className="fas fa-circle-exclamation" style={{ marginTop: '2px' }}></i>
                <span>{error} You can also email me directly at <a href={`mailto:${EMAIL}`} style={{ color: PINK, fontWeight: 700 }}>{EMAIL}</a>.</span>
              </div>
            )}
            <button type="submit" disabled={status === 'sending'} className="inline-flex items-center justify-center gap-2 border-0 cursor-pointer disabled:opacity-60 disabled:cursor-wait"
              style={{ background: INK, color: '#fff', padding: '15px 28px', borderRadius: '100px', fontSize: '15px', fontWeight: 700, fontFamily: 'inherit' }}>
              {status === 'sending' ? 'Sending…' : 'Send message'} {status !== 'sending' && <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>}
            </button>
          </form>
        </div>
      </section>

      {/* SOCIAL */}
      <section style={glass}>
        <div className="site-container py-12 md:py-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 900, letterSpacing: '-0.04em', color: INK, marginBottom: '6px' }}>Follow along</h2>
            <p style={{ fontSize: '15px', color: MUTED }}>See what I'm building and sharing.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 no-underline"
                style={{ fontSize: '14px', fontWeight: 600, color: INK, background: '#fff', border: '1px solid rgba(15,23,42,0.12)', padding: '12px 22px', borderRadius: '100px' }}>
                <i className={s.icon}></i> {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
