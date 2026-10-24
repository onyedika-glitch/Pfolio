import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { PINK, INK, MUTED, card } from '../components/ui'

const categories = [
  { key: 'all', label: 'All' },
  { key: 'ai', label: 'AI' },
  { key: 'fintech', label: 'Fintech' },
  { key: 'healthcare', label: 'Healthcare' },
  { key: 'web', label: 'Web platforms' },
  { key: 'marketplace', label: 'Marketplace' },
  { key: 'realestate', label: 'Real estate' },
]

const stats = [
  ['9', 'Products shipped to production'],
  ['5+', 'Years building software'],
  ['6', 'Industries, from healthcare to real estate'],
]

export default function WorkPage() {
  const [active, setActive] = useState('all')
  const count = (key: string) => (key === 'all' ? projects.length : projects.filter((p) => p.cat === key).length)
  const visible = active === 'all' ? projects : projects.filter((p) => p.cat === active)

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: INK }}>
      <Navbar />
      <Seo
        title="Work & Case Studies | DevOmogo | Fintech, Healthcare, AI, Marketplace, Real Estate"
        description="Production systems built by Omogo Peter Onyedika: AI developer tools, freelance marketplaces, fintech platforms, incubation hubs, and real estate tools, each with a live site and full case study."
        keywords="portfolio, case studies, fintech platform development, AI tool development, marketplace development, Laravel, React, NestJS"
        jsonLd={{ "@context": "https://schema.org", "@type": "ItemList", itemListElement: projects.map((p, i) => ({ "@type": 'ListItem', position: i + 1, name: p.title, url: 'https://devomogo.tech' + p.link })) }}
      />

      {/* HERO */}
      <section className="site-container pt-28 md:pt-36 lg:pt-44 pb-10 md:pb-14">
        <div className="fade-in inline-flex items-center gap-2 mb-6" style={{ fontSize: '12.5px', fontWeight: 600, color: '#334155', background: '#fff', border: '1px solid rgba(15,23,42,0.1)', padding: '6px 13px', borderRadius: '100px' }}>
          <span className="status-dot-green"></span>
          All live in production
        </div>
        <h1 className="fade-in-2" style={{ fontSize: 'clamp(34px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.06, letterSpacing: '-0.04em', color: INK, marginBottom: '22px', maxWidth: '820px' }}>
          Things I've <span style={{ color: PINK }}>shipped.</span>
        </h1>
        <p className="fade-in-3" style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', fontWeight: 500, color: '#1E293B', lineHeight: 1.7, maxWidth: '640px', marginBottom: '36px' }}>
          Everything I've shipped, from AI tools and fintech platforms to marketplaces and websites. Each one is live, with the full story behind it.
        </p>
        <div className="fade-in-4 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4" style={{ maxWidth: '900px' }}>
          {stats.map(([value, label]) => (
            <div key={label} className="p-5" style={card}>
              <div style={{ fontSize: 'clamp(26px, 4vw, 34px)', fontWeight: 900, letterSpacing: '-0.04em', color: INK, lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: '13px', color: MUTED, marginTop: '8px' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="site-container pb-16 md:pb-24">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-6">
          {categories.map((c) => {
            const on = active === c.key
            return (
              <button key={c.key} type="button" onClick={() => setActive(c.key)} className="inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-all duration-200"
                style={{ padding: '9px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, fontFamily: 'inherit', border: on ? '1px solid ' + INK : '1px solid rgba(15,23,42,0.12)', background: on ? INK : '#fff', color: on ? '#fff' : '#334155' }}>
                {c.label} <span style={{ fontSize: '11px', opacity: 0.6 }}>{count(c.key)}</span>
              </button>
            )
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {visible.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  )
}
