import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CTABanner from './CTABanner'

interface MetricCard {
  value: string | React.ReactNode
  label: string
}

interface MetaItem {
  label: string
  value: string
}

interface ProjectDetail {
  label: string
  value: string | 'live'
}

interface ArchCard {
  num: string
  icon: string
  title: string
  desc: string
}

interface DecisionCard {
  num: string
  title: string
  desc: string
}

interface ResultCard {
  value: string
  label: string
}

interface Props {
  eyebrow: string
  headline: React.ReactNode
  subhead: string
  metrics: MetricCard[]
  metaItems: MetaItem[]
  projectDetails: ProjectDetail[]
  breadcrumbLabel: string
  overviewProblem: string
  overviewRole: string
  archTitle: string
  archSubhead: string
  archCards: ArchCard[]
  codeFilename: string
  codeLines: [React.ReactNode, string][]
  pullQuote: string
  decisionCards: DecisionCard[]
  resultCards: ResultCard[]
  resultBody: string
  founderNote1: string
  founderNote2: string
  nextCaseTitle: string
  nextCaseDesc: string
  nextCaseLink: string
  accentColor?: string
  heroBg?: string
  codeBg?: string
}

export default function CaseStudyLayout({
  eyebrow, headline, subhead, metrics, metaItems, projectDetails, breadcrumbLabel,
  overviewProblem, overviewRole, archTitle, archSubhead, archCards, codeFilename, codeLines,
  pullQuote, decisionCards, resultCards, resultBody, founderNote1, founderNote2,
  nextCaseTitle, nextCaseDesc, nextCaseLink, accentColor = '#3B82F6', heroBg = '#1E3A8A', codeBg = '#1E3A8A'
}: Props) {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', color: '#0F172A' }}>
      <Navbar />

      {/* BREADCRUMB */}
      <div style={{ marginTop: '120px', background: '#fff', borderBottom: '1px solid #E2E8F0' }}>
        <div className="max-w-[1600px] mx-auto px-14 h-14 flex items-center gap-2">
          <Link to="/work" className="inline-flex items-center gap-1.5 no-underline transition-all duration-200"
            style={{ fontSize: '13px', fontWeight: 600, color: '#fff', background: '#3B82F6', padding: '8px 18px', borderRadius: '8px' }}>
            <i className="fas fa-arrow-left" style={{ fontSize: '11px' }}></i>
            Back to Work
          </Link>
          <span style={{ fontSize: '13px', color: '#64748B' }}>/</span>
          <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 500 }}>{breadcrumbLabel}</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ background: heroBg, position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
        <div className="absolute pointer-events-none" style={{ top: '-120px', right: '-80px', width: '600px', height: '600px', background: `radial-gradient(circle, ${accentColor}26 0%, transparent 65%)` }} />
        <div className="absolute pointer-events-none" style={{ bottom: '-80px', left: '200px', width: '400px', height: '400px', background: `radial-gradient(circle, ${accentColor}14 0%, transparent 65%)` }} />
        <div className="max-w-[1600px] mx-auto px-14 relative z-10">
          <div className="inline-flex items-center gap-2 mb-7 fade-in" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: accentColor }}>
            <span style={{ display: 'block', width: '24px', height: '2px', background: accentColor }}></span>
            {eyebrow}
          </div>
          <h1 className="fade-in-2" style={{ fontSize: 'clamp(48px, 5vw, 76px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.04em', color: '#fff', marginBottom: '28px', maxWidth: '1000px' }}>{headline}</h1>
          <p className="fade-in-3" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '720px', marginBottom: '64px' }}>{subhead}</p>

          {/* Metrics */}
          <div className="fade-in-3 grid gap-0.5 rounded-xl overflow-hidden mb-14" style={{ gridTemplateColumns: `repeat(${metrics.length}, 1fr)`, background: 'rgba(255,255,255,0.1)', maxWidth: '900px' }}>
            {metrics.map((m, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '28px 32px' }}>
                {'Live' === String(m.value) ? (
                  <a href={`https://${m.label}`} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '36px', fontWeight: 900, letterSpacing: '-0.04em', color: '#6EE7B7', lineHeight: 1, marginBottom: '8px', textDecoration: 'underline', textUnderlineOffset: '3px', display: 'inline-block' }}>
                    {m.value}
                  </a>
                ) : (
                  <div style={{ fontSize: '36px', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1, marginBottom: '8px' }}>{m.value}</div>
                )}
                <div style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{m.label}</div>
              </div>
            ))}
          </div>

          {/* Meta strip */}
          <div className="fade-in-4 flex items-center flex-wrap" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '28px' }}>
            {metaItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingRight: '40px', marginRight: '40px', borderRight: i < metaItems.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{item.label}</span>
                <span style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.75)', letterSpacing: '-0.01em' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div className="max-w-[1600px] mx-auto px-14 grid gap-20 items-start" style={{ gridTemplateColumns: '1fr 320px' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(28px, 2.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '20px' }}>The Problem</h2>
            <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', maxWidth: '680px', marginBottom: '56px' }}>{overviewProblem}</p>
            <h2 style={{ fontSize: 'clamp(28px, 2.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '20px' }}>My Role</h2>
            <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', maxWidth: '680px' }}>{overviewRole}</p>
          </div>
          <div style={{ position: 'sticky', top: '100px' }}>
            <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ background: '#1E3A8A', padding: '20px 24px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Project Details</span>
              </div>
              <div style={{ padding: '4px 0' }}>
                {projectDetails.map((d, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '3px', padding: '16px 24px', borderBottom: i < projectDetails.length - 1 ? '1px solid #E2E8F0' : 'none' }}>
                    <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B' }}>{d.label}</span>
                    {d.value === 'live' ? (
                      <span className="inline-flex items-center gap-1.5" style={{ fontSize: '13px', fontWeight: 600, color: '#059669' }}>
                        <span className="status-dot-green"></span>
                        Live in Production
                      </span>
                    ) : (
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#0F172A', letterSpacing: '-0.01em' }}>{d.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section style={{ background: '#F1F5F9', padding: '100px 0' }}>
        <div className="max-w-[1600px] mx-auto px-14">
          <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: accentColor }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: accentColor }}></span>
            Technical Architecture
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#0F172A', marginBottom: '16px' }}>{archTitle}</h2>
          <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.65, maxWidth: '580px', marginBottom: '64px' }}>{archSubhead}</p>
          <div className="grid gap-0.5 rounded-xl overflow-hidden mb-14" style={{ gridTemplateColumns: '1fr 1fr', background: '#E2E8F0' }}>
            {archCards.map((card, i) => (
              <div key={i} style={{ background: '#fff', padding: '48px 44px' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: accentColor, marginBottom: '20px', fontFamily: 'Courier New, monospace' }}>{card.num}</div>
                <div style={{ width: '48px', height: '48px', background: `${accentColor}14`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <i className={`fas ${card.icon}`} style={{ fontSize: '20px', color: '#1E3A8A' }}></i>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '-0.03em', color: '#1E3A8A', marginBottom: '14px' }}>{card.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.75, color: '#64748B' }}>{card.desc}</p>
              </div>
            ))}
          </div>
          {/* Code card */}
          <div className="rounded-2xl overflow-hidden" style={{ background: codeBg, padding: '36px', boxShadow: '0 32px 80px rgba(30,58,138,0.3)' }}>
            <div className="flex items-center gap-2 mb-7">
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F56', display: 'inline-block' }}></span>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }}></span>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27C93F', display: 'inline-block' }}></span>
              <span style={{ marginLeft: '8px', fontSize: '11px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Courier New, monospace', letterSpacing: '0.04em' }}>{codeFilename}</span>
            </div>
            <div className="code-block" style={{ color: 'rgba(255,255,255,0.85)' }}>
              {codeLines.map(([code, ln], i) => (
                <div key={i} className="code-line">
                  <span className="ln">{ln}</span>
                  <span>{code}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section style={{ background: '#fff', padding: '120px 0' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 56px', textAlign: 'center' }}>
          <svg style={{ marginBottom: '32px', display: 'block', margin: '0 auto 32px' }} width="64" height="48" viewBox="0 0 64 48" fill="none">
            <path d="M0 48V28C0 12.536 10.536 2 26 0L29 6C19.5 8 13.5 15.5 12 24H24V48H0ZM40 48V28C40 12.536 50.536 2 66 0L69 6C59.5 8 53.5 15.5 52 24H64V48H40Z" fill="#1E3A8A" opacity="0.12" />
          </svg>
          <p style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.15, color: '#1E3A8A', marginBottom: '40px' }}>{pullQuote}</p>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#64748B' }}>— <strong style={{ color: '#0F172A' }}>Peter Onyedika</strong>, Founder &amp; Lead Architect, DevOmogo</p>
        </div>
      </section>

      {/* DECISIONS */}
      <section style={{ background: '#F1F5F9', padding: '100px 0' }}>
        <div className="max-w-[1600px] mx-auto px-14">
          <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: accentColor }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: accentColor }}></span>
            Engineering
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#0F172A' }}>Key Engineering Decisions</h2>
          <div className="grid gap-6 mt-16" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {decisionCards.map((d, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '48px 40px' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: accentColor, marginBottom: '20px', fontFamily: 'Courier New, monospace' }}>{d.num}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '-0.03em', color: '#1E3A8A', marginBottom: '16px' }}>{d.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.75, color: '#64748B' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section style={{ background: '#1E3A8A', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute pointer-events-none" style={{ top: '-100px', right: '-100px', width: '500px', height: '500px', background: `radial-gradient(circle, ${accentColor}26 0%, transparent 65%)` }} />
        <div className="max-w-[1600px] mx-auto px-14 relative z-10">
          <h2 style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', marginBottom: '56px' }}>What We Shipped</h2>
          <div className="grid gap-0.5 rounded-xl overflow-hidden mb-14" style={{ gridTemplateColumns: 'repeat(4, 1fr)', background: 'rgba(255,255,255,0.08)' }}>
            {resultCards.map((r, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', padding: '40px 36px' }}>
                <div style={{ fontSize: '48px', fontWeight: 900, letterSpacing: '-0.05em', color: '#fff', lineHeight: 1, marginBottom: '10px' }}>{r.value}</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{r.label}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.65)', maxWidth: '820px' }}>{resultBody}</p>
        </div>
      </section>

      {/* FOUNDER NOTE */}
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div className="max-w-[1600px] mx-auto px-14 grid gap-20 items-start" style={{ gridTemplateColumns: '1fr 340px' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '28px' }}>A note from<br />the founder.</h2>
            <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '32px', maxWidth: '680px' }}>{founderNote1}</p>
            <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '32px', maxWidth: '680px' }}>{founderNote2}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 no-underline transition-all duration-200"
              style={{ fontSize: '14px', fontWeight: 600, color: '#fff', background: accentColor, padding: '12px 24px', borderRadius: '8px' }}>
              Interested in a similar system? Let's talk
              <i className="fas fa-arrow-right" style={{ fontSize: '11px' }}></i>
            </Link>
          </div>
          <div style={{ position: 'sticky', top: '100px' }}>
            <div style={{ background: '#1E3A8A', borderRadius: '16px', padding: '36px', color: '#fff' }}>
              <div style={{ width: '72px', height: '72px', borderRadius: '50%', overflow: 'hidden', marginBottom: '20px', border: '3px solid rgba(255,255,255,0.15)' }}>
                <img src="/src/assets/peter_onyedika_founder_portrait.jpg" alt="Peter Onyedika" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: '4px' }}>Peter Onyedika</div>
              <div style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>Founder &amp; Lead Architect</div>
              <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'rgba(255,255,255,0.6)', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>FUTO Software Engineering · 5+ years building production systems across fintech, healthcare, and AI infrastructure · Available for select engagements.</p>
              <a href="https://x.com/peteromogo2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 no-underline transition-all duration-200"
                style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.85)', background: 'rgba(255,255,255,0.1)', padding: '8px 18px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)' }}>
                <i className="fab fa-x-twitter"></i>
                Connect on X
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT CASE */}
      <section style={{ background: '#F1F5F9', padding: '80px 0', borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-[1600px] mx-auto px-14 flex items-center justify-between flex-wrap gap-8">
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: accentColor, marginBottom: '12px' }}>Next Case Study →</div>
            <h3 style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '8px' }}>{nextCaseTitle}</h3>
            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6 }}>{nextCaseDesc}</p>
          </div>
          <Link to={nextCaseLink} className="inline-flex items-center gap-2 no-underline transition-all duration-200" style={{ fontSize: '14px', fontWeight: 700, color: '#1E3A8A', padding: '14px 28px', border: '1.5px solid #1E3A8A', borderRadius: '6px', whiteSpace: 'nowrap', flexShrink: 0 }}>
            View Case Study <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
          </Link>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  )
}
