import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'
import { projectByLink } from '../components/ProjectCard'
import { PINK, INK, MUTED, card, glass, Eyebrow, Heading } from '../components/ui'

const socials = [
  { href: 'https://www.linkedin.com/in/webdev-omogo-5a6980345', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
  { href: 'https://github.com/onyedika-glitch', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'https://x.com/peteromogo2', icon: 'fab fa-x-twitter', label: 'X' },
]

const stats = [
  ['5+', 'Years building software'],
  ['9', 'Products shipped to production'],
  ['6', 'Industries, from healthcare to real estate'],
]

const founded = ['/work/japa-coach', '/work/youextractor', '/work/gigora-network', '/work/sadar-properties']

const beliefs = [
  { icon: 'fa-gem', title: 'Depth over breadth', desc: 'I focus on complex, high-stakes systems, and I only take on projects where I can make a real difference.' },
  { icon: 'fa-eye', title: 'Full transparency', desc: 'You see every commit, every decision and every trade-off. No black boxes, no surprises, no lock-in.' },
  { icon: 'fa-handshake', title: 'You own the system', desc: 'You should be able to run what I build without me. Docs, runbooks and a proper handover come with every project.' },
]

export default function TeamPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: INK }}>
      <Navbar />
      <Seo
        title="About | Omogo Peter Onyedika, Senior Software Infrastructure Engineer | DevOmogo"
        description="Omogo Peter Onyedika is a Senior Software Infrastructure Engineer and the founder of Japa Coach, YouExtractor, Gigora Network and Sadar Properties."
        keywords="Omogo Peter Onyedika, software engineer, founder, DevOmogo, senior software infrastructure engineer"
        jsonLd={{ "@context": "https://schema.org", "@type": "Person", name: 'Omogo Peter Onyedika', jobTitle: 'Senior Software Infrastructure Engineer', url: 'https://devomogo.tech/team', sameAs: socials.map((s) => s.href) }}
      />

      {/* HERO */}
      <section className="site-container pt-28 md:pt-36 lg:pt-44 pb-12 md:pb-16">
        <div className="grid items-center gap-10 lg:gap-16 grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
          <div className="min-w-0">
            <div className="fade-in inline-flex items-center gap-2 mb-6" style={{ fontSize: '12.5px', fontWeight: 600, color: '#334155', background: '#fff', border: '1px solid rgba(15,23,42,0.1)', padding: '6px 13px', borderRadius: '100px' }}>
              <span className="status-dot-green"></span>
              About me
            </div>
            <h1 className="fade-in-2" style={{ fontSize: 'clamp(34px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.06, letterSpacing: '-0.04em', color: INK, marginBottom: '22px' }}>
              Hi, I'm <span style={{ color: PINK }}>Omogo Peter Onyedika.</span>
            </h1>
            <p className="fade-in-3" style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', fontWeight: 500, color: '#1E293B', lineHeight: 1.7, marginBottom: '30px', maxWidth: '580px' }}>
              I'm a software engineer who builds the hard parts of products: payments, marketplaces, and AI that actually ships. I work with a few clients at a time, and I write the code myself.
            </p>
            <div className="fade-in-4 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 no-underline" style={{ background: INK, color: '#fff', padding: '14px 26px', borderRadius: '100px', fontSize: '14px', fontWeight: 600 }}>
                Say hello <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
              </Link>
              {socials.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="inline-flex items-center gap-2 no-underline"
                  style={{ background: '#fff', color: INK, padding: '13px 20px', borderRadius: '100px', fontSize: '14px', fontWeight: 600, border: '1px solid rgba(15,23,42,0.12)' }}>
                  <i className={s.icon} style={{ fontSize: '14px' }}></i> {s.label}
                </a>
              ))}
            </div>
          </div>
          <div className="fade-in-3 relative mx-auto w-full" style={{ maxWidth: '440px' }}>
            <div className="overflow-hidden" style={{ ...card, padding: '10px' }}>
              <img src="/assets/professional_portrait_senior_software_engineer.jpeg" alt="Omogo Peter Onyedika" className="block w-full" style={{ aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
            <div className="absolute left-4 right-4 sm:left-auto sm:-right-4 -bottom-5" style={{ ...card, padding: '12px 16px' }}>
              <div style={{ fontSize: '14px', fontWeight: 800, color: INK }}>Omogo Peter Onyedika</div>
              <div style={{ fontSize: '12px', color: MUTED }}>Senior Software Infrastructure Engineer</div>
            </div>
          </div>
        </div>

        <div className="fade-in-4 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-16 md:mt-20">
          {stats.map(([value, label]) => (
            <div key={label} className="p-5 md:p-6" style={card}>
              <div style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 900, letterSpacing: '-0.04em', color: INK, lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: '13.5px', color: MUTED, marginTop: '8px' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section style={glass}>
        <div className="site-container section-pad grid gap-10 lg:gap-16 grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-start">
          <div className="min-w-0">
            <Eyebrow>My story</Eyebrow>
            <Heading>Building the hard parts since day one.</Heading>
            <div className="flex flex-col gap-4 mt-6" style={{ maxWidth: '640px' }}>
              {[
                "For over 5 years I've been building production software for fintech companies, startups and data platforms, across Africa and beyond.",
                "I studied Software Engineering at FUTO, and I'm the founder of Japa Coach, YouExtractor, Gigora Network and Sadar Properties, so I know what it feels like to be the one waiting on software to ship.",
                "I believe good software comes from really understanding the problem, the people using it, and the trade-offs. That's why every project I take on gets my direct attention.",
              ].map((p) => <p key={p.slice(0, 20)} data-reveal style={{ fontSize: '16px', fontWeight: 500, lineHeight: 1.75, color: '#1E293B' }}>{p}</p>)}
            </div>
          </div>
          <div data-reveal className="p-6 md:p-8" style={card}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: INK, marginBottom: '16px' }}>Products I founded</div>
            <div className="flex flex-col gap-2">
              {founded.map(projectByLink).filter((p): p is NonNullable<typeof p> => Boolean(p)).map((p) => (
                <Link key={p.link} to={p.link} className="flex items-center gap-4 no-underline rounded-xl p-2 transition-colors duration-200 hover:bg-pink-50">
                  <img src={`/assets/${p.img}`} alt="" className="shrink-0" style={{ width: '72px', height: '48px', objectFit: 'cover', objectPosition: 'top', borderRadius: '8px', background: p.bg }} />
                  <div className="min-w-0 flex-1">
                    <div style={{ fontSize: '15px', fontWeight: 800, color: INK }}>{p.title.split(':')[0]}</div>
                    <div className="truncate" style={{ fontSize: '12.5px', color: MUTED }}>{p.title.split(':')[1]?.trim()}</div>
                  </div>
                  <i className="fas fa-arrow-right shrink-0" style={{ fontSize: '12px', color: PINK }}></i>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BELIEFS */}
      <section className="site-container section-pad">
        <Eyebrow>What I believe</Eyebrow>
        <Heading>How I like to work.</Heading>
        <div data-reveal-group className="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-3 mt-10">
          {beliefs.map((item) => (
            <div key={item.title} data-reveal className="p-6 md:p-8" style={card}>
              <div style={{ width: '44px', height: '44px', background: '#FDF2F8', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <i className={`fas ${item.icon}`} style={{ fontSize: '18px', color: PINK }}></i>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', color: INK, marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: MUTED }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  )
}
