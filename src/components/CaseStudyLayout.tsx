import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Seo from './Seo'
import Footer from './Footer'
import CTABanner from './CTABanner'
import AppShowcase from './AppShowcase'
import { MobileApp } from '../data/mobileApps'
import { projects } from '../data/projects'
import { PINK, INK, MUTED, card, glass, Eyebrow, Heading, Lead } from './ui'

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
  mobileApps?: MobileApp[]
  links?: { label: string; href: string; icon: string }[]
}

const isLive = (v: unknown) => String(v) === 'Live'

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  const long = String(value).replace(/\s/g, '').length > 8
  return (
    <div className="p-5 md:p-6 min-w-0" style={card}>
      <div style={{ fontSize: long ? 'clamp(16px, 2.2vw, 22px)' : 'clamp(26px, 4vw, 36px)', fontWeight: 900, letterSpacing: '-0.04em', color: INK, lineHeight: 1.1, marginBottom: '8px', overflowWrap: 'anywhere' }}>{value}</div>
      <div style={{ fontSize: '13px', fontWeight: 500, color: MUTED, lineHeight: 1.4 }}>{label}</div>
    </div>
  )
}

/** Right-hand side of the hero: phone screens for apps, a browser window for everything else. */
function HeroVisual({ app, image, url, alt }: { app?: MobileApp; image?: string; url?: string; alt: string }) {
  if (app) {
    const screens = app.screens.slice(0, 3)
    return (
      <div className="relative flex justify-center items-end gap-3 sm:gap-4 py-4">
        {screens.map((s, i) => (
          <img key={s.src} src={s.src} alt={s.alt}
            className={`block w-[28%] max-w-[190px] ${i === 1 ? '' : 'mb-8'}`}
            style={{ aspectRatio: app.framed ? '9 / 19.5' : '9 / 16', objectFit: 'cover', objectPosition: 'top', borderRadius: app.framed ? '22px' : '14px', border: app.framed ? '5px solid #0F172A' : 'none', background: '#fff', boxShadow: '0 24px 50px -20px rgba(15,23,42,0.45)' }} />
        ))}
      </div>
    )
  }
  return (
    <div className="overflow-hidden" style={{ ...card, boxShadow: '0 30px 60px -25px rgba(15,23,42,0.45)' }}>
      <div className="flex items-center gap-2" style={{ padding: '10px 14px', borderBottom: '1px solid #F1F5F9' }}>
        {['#FF5F56', '#FFBD2E', '#27C93F'].map((c) => <span key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, display: 'inline-block' }} />)}
        {url && <span className="truncate" style={{ marginLeft: '8px', fontSize: '12px', color: MUTED, background: '#F1F5F9', padding: '3px 12px', borderRadius: '100px' }}>{url}</span>}
      </div>
      {image && <img src={`/assets/${image}`} alt={alt} className="block w-full" style={{ aspectRatio: '16 / 10', objectFit: 'cover', objectPosition: 'top' }} />}
    </div>
  )
}

export default function CaseStudyLayout({
  eyebrow, headline, subhead, metrics, metaItems, breadcrumbLabel,
  overviewProblem, overviewRole, archTitle, archSubhead, archCards, codeFilename, codeLines,
  pullQuote, decisionCards, resultCards, resultBody, founderNote1, founderNote2,
  nextCaseTitle, nextCaseDesc, nextCaseLink, accentColor = PINK, codeBg = INK, mobileApps = [], links = [],
}: Props) {
  const { pathname } = useLocation()
  const pageUrl = typeof window !== 'undefined' ? window.location.origin + pathname : ''
  const project = projects.find((p) => p.link === pathname)
  const next = projects.find((p) => p.link === nextCaseLink)

  const liveMetric = metrics.find((m) => isLive(m.value))
  const liveHost = liveMetric?.label.includes('.') ? liveMetric.label : project?.live?.replace(/^https?:\/\//, '')
  const stats = metrics.filter((m) => !isLive(m.value))
  // Only show results that add something beyond the hero stats.
  const shownValues = new Set(stats.map((m) => String(m.value)))
  const extraResults = resultCards.filter((r) => !isLive(r.value) && !shownValues.has(String(r.value)))

  const category = eyebrow.replace(/^Case Study\s*·\s*/i, '')
  const stack = metaItems.find((m) => m.label.toLowerCase() === 'stack')
  const facts = metaItems.filter((m) => m !== stack)

  const heroLinks = [
    ...(liveHost && !links.some((l) => l.href.includes(liveHost)) ? [{ label: `Visit ${liveHost}`, href: `https://${liveHost}`, icon: 'fas fa-arrow-up-right-from-square' }] : []),
    ...links,
  ]

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: INK }}>
      <Seo
        title={`${breadcrumbLabel} | Case Study | DevOmogo`}
        description={subhead}
        keywords={`${breadcrumbLabel}, case study, DevOmogo, full-stack development`}
        jsonLd={{ "@context": 'https://schema.org', "@type": 'WebApplication', name: breadcrumbLabel, description: subhead, url: pageUrl, applicationCategory: 'BusinessApplication', provider: { "@type": 'Person', name: 'Omogo Peter Onyedika', url: 'https://devomogo.tech' } }}
      />
      <Navbar />

      {/* HERO */}
      <section className="site-container pt-28 md:pt-36 lg:pt-44 pb-12 md:pb-16">
        <Link to="/work" className="fade-in inline-flex items-center gap-2 no-underline mb-8" style={{ fontSize: '13px', fontWeight: 600, color: INK }}>
          <i className="fas fa-arrow-left" style={{ fontSize: '11px' }}></i> All work
        </Link>
        <div className="grid items-center gap-10 lg:gap-14 grid-cols-1 lg:grid-cols-2">
          <div className="min-w-0">
            <div className="fade-in inline-flex items-center gap-2 mb-6" style={{ fontSize: '12.5px', fontWeight: 600, color: '#334155', background: '#fff', border: '1px solid rgba(15,23,42,0.1)', padding: '6px 13px', borderRadius: '100px' }}>
              <span style={{ display: 'block', width: '7px', height: '7px', borderRadius: '50%', background: accentColor }}></span>
              {category}
            </div>
            <h1 className="fade-in-2" style={{ fontSize: 'clamp(34px, 5.5vw, 60px)', fontWeight: 900, lineHeight: 1.06, letterSpacing: '-0.04em', color: INK, marginBottom: '22px' }}>{headline}</h1>
            <p className="fade-in-3" style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', fontWeight: 500, color: '#1E293B', lineHeight: 1.7, marginBottom: '30px', maxWidth: '600px' }}>{subhead}</p>
            {heroLinks.length > 0 && (
              <div className="fade-in-4 flex flex-col sm:flex-row flex-wrap gap-3">
                {heroLinks.map((l, i) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 no-underline"
                    style={i === 0
                      ? { fontSize: '14px', fontWeight: 600, color: '#fff', background: INK, padding: '14px 26px', borderRadius: '100px' }
                      : { fontSize: '14px', fontWeight: 600, color: INK, background: '#fff', border: '1px solid rgba(15,23,42,0.12)', padding: '13px 26px', borderRadius: '100px' }}>
                    <i className={l.icon} style={{ fontSize: '13px' }}></i> {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="fade-in-3 min-w-0">
            <HeroVisual app={mobileApps[0]} image={project?.img} url={liveHost} alt={breadcrumbLabel} />
          </div>
        </div>

        {stats.length > 0 && (
          <div className={`fade-in-4 grid grid-cols-2 ${stats.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-3 md:gap-4 mt-12 md:mt-16`}>
            {stats.map((m, i) => <Stat key={i} value={m.value} label={m.label} />)}
          </div>
        )}
      </section>

      {/* QUICK FACTS */}
      <div style={{ ...glass, background: 'rgba(255,255,255,0.75)' }}>
        <div className="site-container py-6 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10">
          {facts.map((f) => (
            <div key={f.label} className="shrink-0">
              <div style={{ fontSize: '11px', fontWeight: 600, color: MUTED, marginBottom: '3px' }}>{f.label}</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: INK }}>{f.value}</div>
            </div>
          ))}
          {stack && (
            <div className="flex flex-wrap gap-1.5 lg:ml-auto">
              {stack.value.split(/\s*·\s*/).map((t) => (
                <span key={t} style={{ fontSize: '12px', fontWeight: 500, padding: '4px 11px', borderRadius: '100px', background: '#fff', border: '1px solid rgba(15,23,42,0.08)', color: '#334155' }}>{t}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* THE STORY */}
      <section className="site-container section-pad">
        <Eyebrow>The story</Eyebrow>
        <Heading>From problem to product.</Heading>
        <div data-reveal-group className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 mt-10">
          {[
            { title: 'The problem', body: overviewProblem },
            { title: 'What I did', body: overviewRole },
            { title: 'Where it is now', body: resultBody },
          ].map((s, i) => (
            <div key={s.title} data-reveal className="p-6 md:p-8" style={card}>
              <span style={{ display: 'grid', placeItems: 'center', width: '30px', height: '30px', borderRadius: '8px', background: accentColor, color: '#fff', fontSize: '13px', fontWeight: 800, marginBottom: '18px' }}>{i + 1}</span>
              <h3 style={{ fontSize: '19px', fontWeight: 800, letterSpacing: '-0.03em', color: INK, marginBottom: '10px' }}>{s.title}</h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: MUTED }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {mobileApps.length > 0 && (
        <section style={glass}>
          <div className="site-container section-pad">
            <Eyebrow>{mobileApps.length > 1 ? 'The mobile apps' : 'The mobile app'}</Eyebrow>
            <Heading>On the phone, too.</Heading>
            <Lead>Swipe through the screens.</Lead>
            <div className="flex flex-col gap-6">
              {mobileApps.map((app) => <AppShowcase key={app.slug} app={{ ...app, caseStudy: undefined }} />)}
            </div>
          </div>
        </section>
      )}

      {/* PULL QUOTE */}
      <section className="site-container section-pad text-center">
        <div data-reveal className="mx-auto" style={{ maxWidth: '900px' }}>
          <div style={{ fontSize: '72px', lineHeight: 0.6, fontWeight: 900, color: accentColor, fontFamily: 'Georgia, serif', marginBottom: '18px' }}>&ldquo;</div>
          <p style={{ fontSize: 'clamp(22px, 4vw, 40px)', fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1.2, color: INK }}>{pullQuote}</p>
        </div>
      </section>

      {/* UNDER THE HOOD */}
      <section style={glass}>
        <div className="site-container section-pad">
          <Eyebrow>Under the hood</Eyebrow>
          <Heading>{archTitle === 'Architecture' ? 'How it’s built.' : archTitle}</Heading>
          <Lead>{archSubhead}</Lead>
          <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {archCards.map((c) => (
              <div key={c.title} data-reveal className="p-6 md:p-8 flex gap-5" style={card}>
                <div className="shrink-0" style={{ width: '44px', height: '44px', background: `${accentColor}1A`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`fas ${c.icon}`} style={{ fontSize: '18px', color: accentColor }}></i>
                </div>
                <div className="min-w-0">
                  <h3 style={{ fontSize: '17px', fontWeight: 800, letterSpacing: '-0.02em', color: INK, marginBottom: '8px' }}>{c.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: MUTED }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {codeLines.length > 0 && (
            <details data-reveal className="mt-6 overflow-hidden group" style={{ background: codeBg, borderRadius: '16px' }}>
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4" style={{ padding: '18px 22px', color: '#fff' }}>
                <span className="flex items-center gap-3 min-w-0">
                  <i className="fas fa-code" style={{ fontSize: '13px', color: '#F9A8D4' }}></i>
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>Peek at the code</span>
                  <span className="truncate" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Courier New, monospace' }}>{codeFilename}</span>
                </span>
                <i className="fas fa-chevron-down transition-transform duration-200 group-open:rotate-180" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}></i>
              </summary>
              <div className="code-block code-scroll" style={{ color: 'rgba(255,255,255,0.85)', padding: '0 22px 22px' }}>
                {codeLines.map(([code, ln], i) => (
                  <div key={i} className="code-line">
                    <span className="ln">{ln}</span>
                    <span>{code}</span>
                  </div>
                ))}
              </div>
            </details>
          )}
        </div>
      </section>

      {/* DECISIONS */}
      <section className="site-container section-pad">
        <Eyebrow>Decisions</Eyebrow>
        <Heading>Choices that made the difference.</Heading>
        <div data-reveal-group className={`grid grid-cols-1 md:grid-cols-2 ${decisionCards.length % 3 === 0 ? 'lg:grid-cols-3' : ''} gap-4 md:gap-5 mt-10`}>
          {decisionCards.map((d, i) => (
            <div key={d.title} data-reveal className="p-6 md:p-8" style={card}>
              <div style={{ fontSize: '13px', fontWeight: 800, color: accentColor, marginBottom: '12px' }}>{String(i + 1).padStart(2, '0')}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', color: INK, marginBottom: '10px' }}>{d.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: MUTED }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {extraResults.length > 0 && (
        <section style={glass}>
          <div className="site-container section-pad">
            <Eyebrow>Results</Eyebrow>
            <Heading>What came out of it.</Heading>
            <div data-reveal-group className={`grid grid-cols-2 ${extraResults.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-3 md:gap-4 mt-10`}>
              {extraResults.map((r, i) => <div key={i} data-reveal><Stat value={r.value} label={r.label} /></div>)}
            </div>
          </div>
        </section>
      )}

      {/* LOOKING BACK */}
      <section className="site-container section-pad">
        <div data-reveal className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 p-6 sm:p-10 lg:p-12" style={card}>
          <div className="flex md:flex-col items-center md:items-start gap-4">
            <img src="/assets/peter_onyedika_founder_portrait.jpeg" alt="Omogo Peter Onyedika" style={{ width: '72px', height: '72px', borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: INK }}>Omogo Peter Onyedika</div>
              <div style={{ fontSize: '12.5px', color: MUTED }}>Software engineer</div>
            </div>
          </div>
          <div className="min-w-0">
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.04em', color: INK, marginBottom: '16px' }}>Looking back</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#334155', marginBottom: '14px', maxWidth: '720px' }}>{founderNote1}</p>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#334155', marginBottom: '26px', maxWidth: '720px' }}>{founderNote2}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 no-underline"
              style={{ fontSize: '14px', fontWeight: 600, color: '#fff', background: INK, padding: '13px 24px', borderRadius: '100px' }}>
              Building something similar? Let's talk <i className="fas fa-arrow-right" style={{ fontSize: '11px' }}></i>
            </Link>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section style={glass}>
        <div className="site-container py-14 md:py-20">
          <Eyebrow>Next project</Eyebrow>
          <Link to={nextCaseLink} data-reveal className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] overflow-hidden no-underline transition-all duration-300 hover:-translate-y-1" style={card}>
            {next && <img src={`/assets/${next.img}`} alt={nextCaseTitle} className="block w-full h-48 md:h-full" style={{ objectFit: 'cover', objectPosition: 'top' }} />}
            <div className="p-6 md:p-10 flex flex-col justify-center">
              {next && <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: next.catColor, marginBottom: '10px' }}>{next.catLabel}</div>}
              <h3 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 900, letterSpacing: '-0.035em', color: INK, marginBottom: '10px' }}>{nextCaseTitle}</h3>
              <p style={{ fontSize: '15px', color: MUTED, lineHeight: 1.6, marginBottom: '22px' }}>{nextCaseDesc}</p>
              <span className="inline-flex items-center gap-2 self-start" style={{ fontSize: '14px', fontWeight: 600, color: '#fff', background: INK, padding: '12px 22px', borderRadius: '100px' }}>
                Read the story <i className="fas fa-arrow-right" style={{ fontSize: '11px' }}></i>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  )
}
