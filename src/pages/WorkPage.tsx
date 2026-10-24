import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'
import { projects } from '../data/projects'


const filters = [
  { key: 'all', label: 'All', count: 10 },
  { key: 'healthcare', label: 'Healthcare', count: 2 },
  { key: 'fintech', label: 'Fintech', count: 1 },
  { key: 'ai', label: 'AI / LLM', count: 2 },
  { key: 'web', label: 'Web Platforms', count: 3 },
  { key: 'marketplace', label: 'Marketplace', count: 1 },
  { key: 'realestate', label: 'Real Estate', count: 1 },
]

export default function WorkPage() {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('all')
  const [scrolled, setScrolled] = useState(false)
  const filterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const visible = activeFilter === 'all' ? projects : projects.filter(p => p.cat === activeFilter)

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}>
      <Navbar />
      <Seo
        title="Work & Case Studies | DevOmogo | Fintech, Healthcare, AI, Marketplace, Real Estate"
        description="Production systems built by Omogo Peter Onyedika: AI developer tools, freelance marketplaces, fintech platforms, healthcare systems, incubation hubs, and real estate tools, each with a live site and full case study."
        keywords="portfolio, case studies, fintech platform development, healthcare system development, AI tool development, marketplace development, Laravel, React, NestJS"
        jsonLd={{ "@context": "https://schema.org", "@type": "ItemList", itemListElement: projects.map((p, i) => ({ "@type": 'ListItem', position: i + 1, name: p.title, url: 'https://devomogo.tech' + p.link })) }}
      />

      {/* PAGE HERO */}
      <section style={{ background: 'transparent', position: 'relative', overflow: 'hidden' }} className="pt-28 md:pt-40 pb-12 md:pb-20">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(236,72,153,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="site-container relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 fade-in" style={{ background: '#fff', border: '1px solid rgba(190,24,93,0.18)', padding: '6px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BE185D' }}>
            <span style={{ display: 'block', width: '6px', height: '6px', borderRadius: '50%', background: '#BE185D' }}></span>
            Selected Work
          </div>
          <h1 className="fade-in-2" style={{ fontSize: 'clamp(36px, 9vw, 80px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '20px' }}>All Work</h1>
          <p className="fade-in-3" style={{ fontSize: 'clamp(15px, 2.5vw, 17px)', color: '#1E293B', lineHeight: 1.65, maxWidth: '680px', marginBottom: '40px' }}>Everything I've shipped, from AI tools and fintech platforms to healthcare apps and websites. Each one is live, with the full story behind it.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5 rounded-xl overflow-hidden fade-in-4" style={{ background: '#fff', maxWidth: '680px' }}>
            {[['10', 'Projects', 'Shipped to Production'], ['5+', 'Years', 'Engineering Experience'], ['6', 'Domains', 'Healthcare · Fintech · AI · Web · Marketplace · Real Estate']].map(([val, main, sub]) => (
              <div key={main} className="p-5 md:p-7" style={{ background: '#fff' }}>
                <div style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>{val}</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#1E293B', marginBottom: '2px' }}>{main}</div>
                <div style={{ fontSize: '11px', color: '#475569', letterSpacing: '0.02em' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div ref={filterRef} className="sticky top-[72px] md:top-[96px] lg:top-[120px] z-[100]" style={{ background: '#fff', borderBottom: '1px solid #E2E8F0', boxShadow: scrolled ? '0 4px 16px rgba(0,0,0,0.06)' : 'none' }}>
        <div className="site-container min-h-[56px] py-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginRight: '4px', whiteSpace: 'nowrap', flexShrink: 0 }}>Filter:</span>
          {filters.map(f => (
            <button key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className="inline-flex items-center gap-1.5 transition-all duration-200 whitespace-nowrap"
              style={{
                padding: '7px 16px',
                borderRadius: '100px',
                fontSize: '12.5px',
                fontWeight: 600,
                cursor: 'pointer',
                border: activeFilter === f.key ? 'none' : '1.5px solid #E2E8F0',
                background: activeFilter === f.key ? '#0F172A' : 'transparent',
                color: activeFilter === f.key ? '#fff' : '#64748B',
              }}
            >
              {f.label} <span style={{ fontSize: '10px', fontWeight: 700, opacity: 0.65 }}>{f.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <section style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', padding: '56px 0 100px' }}>
        <div className="site-container">
          <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64748B', marginBottom: '32px' }}>
            Showing {visible.length} project{visible.length !== 1 ? 's' : ''}{activeFilter !== 'all' ? ` in ${filters.find(f => f.key === activeFilter)?.label}` : ''}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {visible.map(p => (
              <div key={p.id} onClick={() => (p.live ? window.open(p.live, '_blank', 'noopener,noreferrer') : navigate(p.link))} className="rounded-xl overflow-hidden flex flex-col cursor-pointer transition-all duration-200 hover:-translate-y-1" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
                <div style={{ height: '4px', background: p.topBar }}></div>
                <div style={{ height: '200px', background: p.bg, position: 'relative', overflow: 'hidden' }}>
                  <img src={`/assets/${p.img}`} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
                  {p.live && (
                    <div className="absolute" style={{ top: '12px', right: '12px' }}>
                      <span style={{ display: 'inline-block', fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#059669', background: 'rgba(255,255,255,0.94)', padding: '5px 10px', borderRadius: '100px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                        Live
                      </span>
                    </div>
                  )}
                </div>
                <div style={{ padding: '24px 28px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.catColor, marginBottom: '10px' }}>{p.catLabel}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', color: '#0F172A', marginBottom: '8px', lineHeight: 1.2 }}>{p.title}</h3>
                  <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: '#64748B', marginBottom: '20px', flex: 1 }}>{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map(t => <span key={t} style={{ fontSize: '10.5px', fontWeight: 500, padding: '3px 9px', borderRadius: '4px', background: 'rgba(190,24,93,0.06)', color: '#0F172A' }}>{t}</span>)}
                  </div>
                  <Link to={p.link} onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1.5 no-underline transition-all duration-200"
                    style={{ fontSize: '12.5px', fontWeight: 700, color: '#fff', background: '#0F172A', padding: '10px 20px', borderRadius: '8px' }}>
                    View case study <i className="fas fa-arrow-right" style={{ fontSize: '11px' }}></i>
                  </Link>
                  {'extension' in p && (
                    <a href={p.extension} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1.5 no-underline mt-3"
                      style={{ fontSize: '12.5px', fontWeight: 600, color: '#BE185D' }}>
                      <i className="fab fa-chrome" style={{ fontSize: '13px' }}></i> Get the Chrome extension
                    </a>
                  )}
                </div>
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
