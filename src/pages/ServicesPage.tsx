import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'

const services = [
  {
    id: 'full-stack-architecture',
    icon: 'fa-layer-group',
    title: 'Full-Stack Architecture',
    desc: 'End-to-end system design from data models and API contracts to frontend interfaces. We build scalable, maintainable codebases with clean separation of concerns.',
    details: 'Every layer of the stack is engineered with production in mind, from database schema design and API gateway configuration through to responsive, accessible frontend components. We use modern tooling, typed languages, and rigorous code review to ship systems that teams can own and evolve.',
    tags: ['Node.js', 'React', 'PostgreSQL', 'GraphQL', 'TypeScript', 'AWS'],
  },
  {
    id: 'fintech-systems',
    icon: 'fa-landmark',
    title: 'Fintech Systems',
    desc: 'Payment infrastructure, ledger systems, transaction processing, and compliance-grade reporting. Built for auditability, security, and regulatory requirements.',
    details: 'Financial systems demand precision. We build double-entry ledgers, reconcile payment rails, and implement idempotent transaction flows that prevent duplication. Every integration is designed with PCI-DSS principles and real-time monitoring.',
    tags: ['PCI-DSS', 'Real-time Ledger', 'Stripe', 'Paystack', 'Idempotency'],
  },
  {
    id: 'healthcare-platforms',
    icon: 'fa-heart-pulse',
    title: 'Healthcare Platforms',
    desc: 'Clinical workflow tools, patient data systems, and interoperability solutions. HIPAA-aligned architecture with strict data governance and audit trails.',
    details: 'Healthcare software has zero margin for error. We design systems with granular access controls, immutable audit logs, and strict data segregation. From FHIR-compliant APIs to offline-capable clinical interfaces, we build for reliability and regulatory confidence.',
    tags: ['HIPAA', 'HL7 FHIR', 'EHR', 'DICOM', 'Audit Trails'],
  },
  {
    id: 'ai-integration',
    icon: 'fa-brain',
    title: 'AI Integration',
    desc: 'LLM pipelines, retrieval-augmented generation, and intelligent automation. Practical AI deployed in production with measurable outcomes.',
    details: 'We bridge the gap between AI research and production deployment. Multi-model orchestration, prompt engineering, embeddings pipelines, and cost-optimised inference. Every AI integration is built with observability, fallback strategies, and human-in-the-loop safeguards.',
    tags: ['LLM', 'RAG', 'Claude API', 'Gemini', 'Embeddings', 'Observability'],
  },
]

export default function ServicesPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', color: '#0F172A' }}>
      <Navbar />

      {/* HERO */}
      <section style={{ background: '#1E3A8A', position: 'relative', overflow: 'hidden', padding: 'clamp(6.5rem, 14vw, 10rem) 0 clamp(3.5rem, 8vw, 6.25rem)' }}>
        <div className="absolute pointer-events-none" style={{ top: '-120px', right: '-80px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%)' }} />
        <div className="site-container relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 fade-in" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#3B82F6' }}></span>
            What We Do
          </div>
          <h1 className="fade-in-2" style={{ fontSize: 'clamp(32px, 8vw, 76px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.04em', color: '#fff', marginBottom: '24px', maxWidth: '900px' }}>
            Precision engineering<br />across every layer.
          </h1>
          <p className="fade-in-3" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, maxWidth: '640px', marginBottom: '56px' }}>
            We don't dabble. We go deep, building systems that handle millions of users and billions in transactions. Here is how we do it.
          </p>
          <div className="fade-in-4 flex flex-wrap gap-3">
            {[
              { icon: 'fa-layer-group', title: 'Full-Stack Architecture', path: '/services/fullstackarchitecture' },
              { icon: 'fa-landmark', title: 'Fintech Systems', path: '/services/fintechsystems' },
              { icon: 'fa-heart-pulse', title: 'Healthcare Platforms', path: '/services/healthcareplatforms' },
              { icon: 'fa-brain', title: 'AI Integration', path: '/services/aiintegration' },
            ].map(s => (
              <Link key={s.title} to={s.path} className="no-underline transition-all duration-200"
                style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 22px', borderRadius: '100px' }}>
                <i className={`fas ${s.icon}`} style={{ marginRight: '8px', fontSize: '12px' }}></i>
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      {services.map((s, idx) => (
        <section key={s.id} id={s.id} style={{ background: idx % 2 === 0 ? '#fff' : '#F1F5F9', padding: 'clamp(3.5rem, 8vw, 6.25rem) 0', scrollMarginTop: '80px' }}>
          <div className="site-container">
            <div className="grid gap-8 md:gap-16 items-start grid-cols-1 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6' }}>
                  <span style={{ display: 'block', width: '20px', height: '2px', background: '#3B82F6' }}></span>
                  Expertise
                </div>
                <div style={{ width: '56px', height: '56px', background: 'rgba(30,58,138,0.07)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <i className={`fas ${s.icon}`} style={{ fontSize: '24px', color: '#1E3A8A' }}></i>
                </div>
                <h2 style={{ fontSize: 'clamp(32px, 3vw, 44px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#0F172A', marginBottom: '20px' }}>{s.title}</h2>
                <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '24px' }}>{s.details}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map(t => (
                    <span key={t} style={{ fontSize: '12px', fontWeight: 500, padding: '5px 12px', borderRadius: '6px', background: 'rgba(30,58,138,0.06)', color: '#1E3A8A' }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '40px' }}>
                <h3 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '24px' }}>What this means for you</h3>
                <ul className="list-none flex flex-col gap-5" style={{ padding: 0, margin: 0 }}>
                  {[
                    'Production-grade code from day one: no prototypes, no throwaway work.',
                    'Systems designed for scale, security, and maintainability.',
                    'Transparent delivery with fortnightly sprint reviews.',
                    'Full documentation, runbooks, and knowledge transfer included.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3" style={{ fontSize: '15px', lineHeight: 1.5, color: '#334155' }}>
                      <span style={{ color: '#3B82F6', flexShrink: 0, marginTop: '2px' }}><i className="fas fa-check-circle" style={{ fontSize: '16px' }}></i></span>
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
      <section style={{ background: '#1E3A8A', padding: 'clamp(3.5rem, 8vw, 6.25rem) 0' }}>
        <div className="site-container">
          <h2 style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', marginBottom: '20px' }}>Ready to get started?</h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, maxWidth: '580px', marginBottom: '48px' }}>
            Every engagement begins with a 60-minute technical deep-dive. No pitch decks. No sales pressure. Just honest engineering judgment.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 no-underline transition-all duration-200"
            style={{ background: '#fff', color: '#1E3A8A', padding: '16px 36px', borderRadius: '6px', fontSize: '15px', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Book a Discovery Call
            <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
