import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Seo from './Seo'
import Footer from './Footer'
import CTABanner from './CTABanner'
import ProjectCard, { projectByLink } from './ProjectCard'
import { PINK, INK, MUTED, card, glass, Heading } from './ui'

interface Props {
  seo: { title: string; description: string; keywords: string }
  name: string
  icon: string
  headline: React.ReactNode
  intro: string
  whatYouGet: string[]
  tools: string[]
  approachHeading: string
  story: string[]
  approach: { icon: string; title: string; desc: string }[]
  related: string[]
  /** Optional page-specific section, shown before the related work. */
  extra?: React.ReactNode
}

export default function ServiceLayout({ seo, name, icon, headline, intro, whatYouGet, tools, approachHeading, story, approach, related, extra }: Props) {
  const relatedProjects = related.map(projectByLink).filter((p): p is NonNullable<typeof p> => Boolean(p))

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: INK }}>
      <Navbar />
      <Seo {...seo} />

      {/* HERO */}
      <section className="site-container pt-28 md:pt-36 lg:pt-44 pb-14 md:pb-20">
        <Link to="/services" className="fade-in inline-flex items-center gap-2 no-underline mb-8" style={{ fontSize: '13px', fontWeight: 600, color: INK }}>
          <i className="fas fa-arrow-left" style={{ fontSize: '11px' }}></i> All services
        </Link>
        <div className="grid items-center gap-10 lg:gap-14 grid-cols-1 lg:grid-cols-2">
          <div className="min-w-0">
            <h1 className="fade-in-2" style={{ fontSize: 'clamp(34px, 5.5vw, 60px)', fontWeight: 900, lineHeight: 1.06, letterSpacing: '-0.04em', color: INK, marginBottom: '22px' }}>{headline}</h1>
            <p className="fade-in-3" style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', fontWeight: 500, color: '#1E293B', lineHeight: 1.7, marginBottom: '30px', maxWidth: '580px' }}>{intro}</p>
            <div className="fade-in-4 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 no-underline" style={{ background: INK, color: '#fff', padding: '15px 28px', borderRadius: '100px', fontSize: '14px', fontWeight: 600 }}>
                Book a quick call <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
              </Link>
              {relatedProjects.length > 0 && (
                <a href="#related" className="inline-flex items-center justify-center gap-2 no-underline" style={{ background: '#fff', color: INK, padding: '14px 28px', borderRadius: '100px', fontSize: '14px', fontWeight: 600, border: '1px solid rgba(15,23,42,0.12)' }}>
                  See related work
                </a>
              )}
            </div>
          </div>

          <div className="fade-in-3 min-w-0 p-6 sm:p-8" style={card}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: INK, marginBottom: '18px' }}>What you get</div>
            <ul className="list-none m-0 p-0 flex flex-col gap-4">
              {whatYouGet.map((item) => (
                <li key={item} className="flex gap-3" style={{ fontSize: '15px', lineHeight: 1.5, color: '#334155' }}>
                  <i className="fas fa-circle-check shrink-0" style={{ fontSize: '16px', color: PINK, marginTop: '2px' }}></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <div style={{ ...glass, background: 'rgba(255,255,255,0.75)' }}>
        <div className="site-container py-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="shrink-0" style={{ fontSize: '12px', fontWeight: 600, color: MUTED }}>Tools I use for this</div>
          <div className="flex flex-wrap gap-1.5">
            {tools.map((t) => (
              <span key={t} style={{ fontSize: '12px', fontWeight: 500, padding: '4px 11px', borderRadius: '100px', background: '#fff', border: '1px solid rgba(15,23,42,0.08)', color: '#334155' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* APPROACH */}
      <section className="site-container section-pad">
        <Heading>{approachHeading}</Heading>
        <div className="flex flex-col gap-4 mb-10" style={{ maxWidth: '760px' }}>
          {story.map((p) => (
            <p key={p.slice(0, 24)} data-reveal style={{ fontSize: '16px', fontWeight: 500, lineHeight: 1.75, color: '#1E293B' }}>{p}</p>
          ))}
        </div>
        <div data-reveal-group className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {approach.map((a, i) => (
            <div key={a.title} data-reveal className="p-6 md:p-8" style={card}>
              <div className="flex items-center justify-between mb-5">
                <div style={{ width: '44px', height: '44px', background: '#FDF2F8', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`fas ${a.icon}`} style={{ fontSize: '18px', color: PINK }}></i>
                </div>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#CBD5E1' }}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', color: INK, marginBottom: '10px' }}>{a.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: MUTED }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {extra}

      {relatedProjects.length > 0 && (
        <section id="related" style={{ ...glass, scrollMarginTop: '100px' }}>
          <div className="site-container section-pad">
            <Heading>Where I’ve done this before.</Heading>
            <div data-reveal-group className={`grid grid-cols-1 sm:grid-cols-2 ${relatedProjects.length >= 3 ? 'lg:grid-cols-3' : ''} gap-5 md:gap-6 mt-10`}>
              {relatedProjects.map((p) => <div key={p.link} data-reveal><ProjectCard project={p} /></div>)}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
      <Footer />
    </div>
  )
}
