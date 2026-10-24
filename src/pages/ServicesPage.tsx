import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'

const services = [
  {
    id: 'full-stack-architecture',
    icon: 'fa-layer-group',
    title: 'Full-Stack Architecture',
    desc: 'From the database to the buttons your users tap. I build codebases that are easy to grow, easy to change, and easy for the next developer to pick up.',
    details: 'I build every layer with real users in mind: how the data is stored, how the API talks to the frontend, and the screens people actually use. Typed code, careful reviews and modern tooling, so you end up with something your team can own and keep improving.',
    tags: ['Node.js', 'React', 'PostgreSQL', 'GraphQL', 'TypeScript', 'AWS'],
  },
  {
    id: 'fintech-systems',
    icon: 'fa-landmark',
    title: 'Fintech Systems',
    desc: 'Wallets, payments, ledgers and reports that reconcile down to the last cent. Built so your users trust it and your auditors don’t lose sleep.',
    details: 'Money software has to be exact. I build double-entry ledgers, reconcile payment providers, and make sure a payment can never go through twice, even when the network hiccups. Every integration follows PCI-DSS principles and is monitored in real time.',
    tags: ['PCI-DSS', 'Real-time Ledger', 'Stripe', 'Paystack', 'Idempotency'],
  },
  {
    id: 'healthcare-platforms',
    icon: 'fa-heart-pulse',
    title: 'Healthcare Platforms',
    desc: 'Tools clinicians actually want to open. Patient records and clinical workflows that keep data private by default, with a clear trail of who touched what.',
    details: 'In healthcare, mistakes cost more than money. I build systems where people only see what they’re meant to see, every change is logged and can’t be quietly edited, and patient data stays properly separated. From FHIR-compliant APIs to screens that keep working offline, the goal is software clinicians and regulators can both trust.',
    tags: ['HIPAA', 'HL7 FHIR', 'EHR', 'DICOM', 'Audit Trails'],
  },
  {
    id: 'ai-integration',
    icon: 'fa-brain',
    title: 'AI Integration',
    desc: 'AI features that do real work: LLM pipelines, search over your own data, and automation that saves people time. Shipped to production, not stuck in a demo.',
    details: 'There’s a big gap between an impressive AI demo and something you can rely on every day. I close it by combining models, writing and testing prompts, building embeddings pipelines and keeping costs down. Everything ships with monitoring, a plan B when a model fails, and a human in the loop where it matters.',
    tags: ['LLM', 'RAG', 'Claude API', 'Gemini', 'Embeddings', 'Observability'],
  },
]

export default function ServicesPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}>
      <Navbar />
      <Seo
        title="Services | Full-Stack, Fintech, Healthcare & AI Development | DevOmogo"
        description="What Omogo Peter Onyedika builds: full-stack architecture (Laravel, React, NestJS), fintech systems (Stripe, Paystack, ledgers), healthcare platforms (appointments, HIPAA-aligned), and AI integration (LLM pipelines)."
        keywords="full-stack development services, fintech development, healthcare software development, AI integration, Laravel, React, NestJS, Node.js"
        jsonLd={{ "@context": "https://schema.org", "@type": "ItemList", itemListElement: services.map((s, i) => ({ "@type": 'ListItem', position: i + 1, name: s.title, description: s.desc })) }}
      />

      {/* HERO */}
      <section style={{ background: 'transparent', position: 'relative', overflow: 'hidden', padding: 'clamp(6.5rem, 14vw, 10rem) 0 clamp(3.5rem, 8vw, 6.25rem)' }}>
        <div className="site-container relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 fade-in" style={{ background: '#fff', border: '1px solid rgba(190,24,93,0.18)', padding: '6px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BE185D' }}>
            <span style={{ display: 'block', width: '6px', height: '6px', borderRadius: '50%', background: '#BE185D' }}></span>
            What I do
          </div>
          <h1 className="fade-in-2" style={{ fontSize: 'clamp(32px, 8vw, 76px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '24px', maxWidth: '900px' }}>
            The hard parts,<br />handled.
          </h1>
          <p className="fade-in-3" style={{ fontSize: '18px', color: '#1E293B', lineHeight: 1.6, maxWidth: '640px', marginBottom: '56px' }}>
            I don't dabble. I go deep on a few things: software that moves money, software that looks after patient data, and AI that actually ships. Here's what that looks like.
          </p>
          <div className="fade-in-4 flex flex-wrap gap-3">
            {[
              { icon: 'fa-layer-group', title: 'Full-Stack Architecture', path: '/services/fullstackarchitecture' },
              { icon: 'fa-landmark', title: 'Fintech Systems', path: '/services/fintechsystems' },
              { icon: 'fa-heart-pulse', title: 'Healthcare Platforms', path: '/services/healthcareplatforms' },
              { icon: 'fa-brain', title: 'AI Integration', path: '/services/aiintegration' },
            ].map(s => (
              <Link key={s.title} to={s.path} className="no-underline inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ fontSize: '13.5px', fontWeight: 700, letterSpacing: '0.01em', color: '#0F172A', background: '#fff', border: '1px solid #fff', padding: '12px 22px', borderRadius: '10px', boxShadow: '0 4px 14px rgba(0,0,0,0.18)' }}>
                <i className={`fas ${s.icon}`} style={{ fontSize: '13px', color: '#BE185D' }}></i>
                {s.title}
                <i className="fas fa-arrow-right" style={{ fontSize: '11px', opacity: 0.65 }}></i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      {services.map((s, idx) => (
        <section key={s.id} id={s.id} style={{ ...(idx % 2 === 0 ? { background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' } : { background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }), padding: 'clamp(3.5rem, 8vw, 6.25rem) 0', scrollMarginTop: '80px' }}>
          <div className="site-container">
            <div className="grid gap-8 md:gap-16 items-start grid-cols-1 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#BE185D' }}>
                  <span style={{ display: 'block', width: '6px', height: '6px', borderRadius: '50%', background: '#BE185D' }}></span>
                  Expertise
                </div>
                <div style={{ width: '56px', height: '56px', background: 'rgba(190,24,93,0.07)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <i className={`fas ${s.icon}`} style={{ fontSize: '24px', color: '#0F172A' }}></i>
                </div>
                <h2 style={{ fontSize: 'clamp(32px, 3vw, 44px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#0F172A', marginBottom: '20px' }}>{s.title}</h2>
                <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '24px' }}>{s.details}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map(t => (
                    <span key={t} style={{ fontSize: '12px', fontWeight: 500, padding: '5px 12px', borderRadius: '6px', background: 'rgba(190,24,93,0.06)', color: '#0F172A' }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '40px' }}>
                <h3 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '24px' }}>What this means for you</h3>
                <ul className="list-none flex flex-col gap-5" style={{ padding: 0, margin: 0 }}>
                  {[
                    'Real, production-ready code from day one. No throwaway prototypes.',
                    'Built to grow, stay secure, and be easy to look after.',
                    'A demo every two weeks, so you always know where things stand.',
                    'Docs, walkthroughs and a proper handover when the project wraps up.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3" style={{ fontSize: '15px', lineHeight: 1.5, color: '#334155' }}>
                      <span style={{ color: '#BE185D', flexShrink: 0, marginTop: '2px' }}><i className="fas fa-check-circle" style={{ fontSize: '16px' }}></i></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* HOW TO ENGAGE */}
      <section style={{ background: '#0F172A', padding: 'clamp(3.5rem, 8vw, 6.25rem) 0' }}>
        <div className="site-container">
          <h2 style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', marginBottom: '20px' }}>Ready to get started?</h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, maxWidth: '580px', marginBottom: '48px' }}>
            Every project starts with an hour-long call. No pitch decks, no sales pressure, just an honest take on what you're building.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 no-underline transition-all duration-200"
            style={{ background: '#fff', color: '#0F172A', padding: '16px 36px', borderRadius: '6px', fontSize: '15px', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Book a call
            <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
