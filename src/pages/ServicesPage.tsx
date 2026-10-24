import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'
import { projectByLink } from '../components/ProjectCard'
import { PINK, INK, MUTED, card, glass, Eyebrow, Heading, Lead } from '../components/ui'

const services = [
  {
    path: '/services/fullstackarchitecture',
    icon: 'fa-layer-group',
    title: 'Full-Stack Architecture',
    desc: 'From the database to the buttons your users tap. I build codebases that are easy to grow, easy to change, and easy for the next developer to pick up.',
    tags: ['Laravel', 'NestJS', 'React', 'Flutter', 'PostgreSQL'],
    work: ['/work/youextractor', '/work/sadar-properties', '/work/gigora-network'],
  },
  {
    path: '/services/fintechsystems',
    icon: 'fa-landmark',
    title: 'Fintech Systems',
    desc: 'Wallets, payments, ledgers and reports that reconcile down to the last cent. Built so your users trust it and your auditors don’t lose sleep.',
    tags: ['Stripe', 'Paystack', 'PayPal', 'Ledgers', 'Reconciliation'],
    work: ['/work/discount-club-cayman', '/work/gigora-network', '/work/japa-coach'],
  },
  {
    path: '/services/healthcareplatforms',
    icon: 'fa-heart-pulse',
    title: 'Healthcare & Nonprofits',
    desc: 'Websites health organisations can run themselves: membership, programmes, forms and content your staff can update without calling a developer.',
    tags: ['WordPress', 'Elementor', 'Fluent Forms', 'Membership'],
    work: ['/work/ssabhi'],
  },
  {
    path: '/services/aiintegration',
    icon: 'fa-brain',
    title: 'AI Integration',
    desc: 'AI features that do real work: LLM pipelines, search over your own data, and automation that saves people time. Shipped to production, not stuck in a demo.',
    tags: ['Claude', 'OpenAI', 'Gemini', 'Whisper', 'RAG'],
    work: ['/work/youextractor', '/work/japa-coach', '/work/gigora-network'],
  },
]

const included = [
  { icon: 'fa-code', title: 'Production-ready from day one', desc: 'Real, production-ready code from the start. No throwaway prototypes.' },
  { icon: 'fa-shield-halved', title: 'Built to last', desc: 'Built to grow, stay secure, and be easy to look after.' },
  { icon: 'fa-calendar-check', title: 'A demo every two weeks', desc: 'You always know where things stand, and you can steer as we go.' },
  { icon: 'fa-book-open', title: 'A proper handover', desc: 'Docs and walkthroughs when the project wraps up, so your team can run it.' },
]

export default function ServicesPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: INK }}>
      <Navbar />
      <Seo
        title="Services | Full-Stack, Fintech, Healthcare & AI Development | DevOmogo"
        description="What Omogo Peter Onyedika builds: full-stack architecture (Laravel, React, NestJS), fintech systems (Stripe, Paystack, ledgers), healthcare and nonprofit websites, and AI integration (LLM pipelines)."
        keywords="full-stack development services, fintech development, AI integration, Laravel, React, NestJS, Node.js"
        jsonLd={{ "@context": "https://schema.org", "@type": "ItemList", itemListElement: services.map((s, i) => ({ "@type": 'ListItem', position: i + 1, name: s.title, description: s.desc })) }}
      />

      {/* HERO */}
      <section className="site-container pt-28 md:pt-36 lg:pt-44 pb-12 md:pb-16">
        <div className="fade-in inline-flex items-center gap-2 mb-6" style={{ fontSize: '12.5px', fontWeight: 600, color: '#334155', background: '#fff', border: '1px solid rgba(15,23,42,0.1)', padding: '6px 13px', borderRadius: '100px' }}>
          <span style={{ display: 'block', width: '7px', height: '7px', borderRadius: '50%', background: PINK }}></span>
          What I do
        </div>
        <h1 className="fade-in-2" style={{ fontSize: 'clamp(34px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.06, letterSpacing: '-0.04em', color: INK, marginBottom: '22px', maxWidth: '820px' }}>
          The hard parts, <span style={{ color: PINK }}>handled.</span>
        </h1>
        <p className="fade-in-3" style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', fontWeight: 500, color: '#1E293B', lineHeight: 1.7, maxWidth: '640px' }}>
          I don't dabble. I go deep on a few things: software that moves money, AI that actually ships, and whole products built end to end. Pick the one closest to what you're building.
        </p>
      </section>

      {/* SERVICES */}
      <section className="site-container pb-16 md:pb-24">
        <div data-reveal-group className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {services.map((s) => {
            const work = s.work.map(projectByLink).filter((p): p is NonNullable<typeof p> => Boolean(p))
            return (
              <Link key={s.path} to={s.path} data-reveal className="flex flex-col no-underline transition-all duration-300 hover:-translate-y-1 p-6 md:p-8" style={card}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="shrink-0" style={{ width: '48px', height: '48px', background: '#FDF2F8', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fas ${s.icon}`} style={{ fontSize: '20px', color: PINK }}></i>
                  </div>
                  <h2 style={{ fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, letterSpacing: '-0.035em', color: INK }}>{s.title}</h2>
                </div>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: MUTED, marginBottom: '18px' }}>{s.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {s.tags.map((t) => <span key={t} style={{ fontSize: '12px', fontWeight: 500, padding: '4px 10px', borderRadius: '100px', background: '#F1F5F9', color: '#334155' }}>{t}</span>)}
                </div>
                <div className="grid grid-cols-3 gap-2 mb-6 mt-auto">
                  {work.map((p) => (
                    <div key={p.link} className="overflow-hidden" style={{ borderRadius: '10px', background: p.bg, aspectRatio: '16 / 10' }}>
                      <img src={`/assets/${p.img}`} alt={p.title} loading="lazy" className="block w-full h-full" style={{ objectFit: 'cover', objectPosition: 'top' }} />
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5" style={{ fontSize: '14px', fontWeight: 600, color: INK }}>
                  How I approach it <i className="fas fa-arrow-right" style={{ fontSize: '11px' }}></i>
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* INCLUDED */}
      <section style={glass}>
        <div className="site-container section-pad">
          <Eyebrow>Every project</Eyebrow>
          <Heading>What comes with it, whichever you pick.</Heading>
          <Lead>Same standards on every project, big or small.</Lead>
          <div data-reveal-group className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {included.map((item) => (
              <div key={item.title} data-reveal className="p-6" style={card}>
                <div style={{ width: '40px', height: '40px', background: '#FDF2F8', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <i className={`fas ${item.icon}`} style={{ fontSize: '16px', color: PINK }}></i>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '-0.02em', color: INK, marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: MUTED }}>{item.desc}</p>
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
