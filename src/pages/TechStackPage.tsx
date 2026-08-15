import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'

const techCategories = [
  {
    icon: 'fa-display',
    title: 'Frontend & UI',
    color: '#3B82F6',
    bg: '#0F172A',
    tags: ['React.js', 'Next.js', 'React Native', 'Angular', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Figma', 'Framer Motion', 'Vue'],
  },
  {
    icon: 'fa-server',
    title: 'Backend & APIs',
    color: '#0D9488',
    bg: '#0F2E2A',
    tags: ['Node.js', 'Express', 'Nest.js', 'Laravel', 'PHP', 'Python', 'REST APIs', 'GraphQL', 'WebSockets', 'Socket.io', 'Postman'],
  },
  {
    icon: 'fa-database',
    title: 'Databases & Caching',
    color: '#6366F1',
    bg: '#1E1B4B',
    tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Redis', 'Mongoose', 'SQLite', 'Supabase', 'Elasticsearch'],
  },
  {
    icon: 'fa-cloud',
    title: 'DevOps & Cloud',
    color: '#D97706',
    bg: '#1C1107',
    tags: ['Docker', 'AWS', 'Git', 'GitHub', 'GitHub Actions', 'TurboRepo', 'Expo', 'Capacitor', 'Vercel', 'Render', 'Hostinger VPS', 'PM2', 'CI/CD'],
  },
  {
    icon: 'fa-brain',
    title: 'Integrations & AI',
    color: '#7C3AED',
    bg: '#1A0A2E',
    tags: ['Stripe', 'PayPal', 'Paystack', 'Mailchimp API', 'OpenAI', 'Claude API', 'Gemini API', 'OAuth 2.0', 'Google Play Console', 'Chrome Extensions'],
  },
]

export default function TechStackPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', color: '#0F172A' }}>
      <Navbar />
      <Seo
        title="Tech Stack — Laravel, React, NestJS, Node.js, PostgreSQL, MySQL, MongoDB | DevOmogo"
        description="The technology stack DevOmogo ships with: Laravel, PHP, NestJS, Node.js/Express, React + Vite + TypeScript, Flutter, Expo, PostgreSQL, MySQL, MongoDB, Stripe, Paystack, Docker, Vercel, and Render."
        keywords="tech stack, Laravel, React, NestJS, Node.js, TypeScript, Flutter, PostgreSQL, MySQL, MongoDB, Stripe, Paystack"
      />

      {/* HERO */}
      <section style={{ background: '#1E3A8A', position: 'relative', overflow: 'hidden', padding: 'clamp(6.5rem, 14vw, 10rem) 0 clamp(3.5rem, 8vw, 6.25rem)' }}>
        <div className="absolute pointer-events-none" style={{ top: '-120px', right: '-80px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%)' }} />
        <div className="site-container relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 fade-in" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#3B82F6' }}></span>
            Full Technical Stack
          </div>
          <h1 className="fade-in-2" style={{ fontSize: 'clamp(32px, 8vw, 76px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.04em', color: '#fff', marginBottom: '24px', maxWidth: '900px' }}>
            The tools we<br />reach for.
          </h1>
          <p className="fade-in-3" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, maxWidth: '640px', marginBottom: '48px' }}>
            From frontend pixels to infrastructure topology: every layer, every tool, production-tested. Here is the full technical stack we use to ship enterprise-grade systems.
          </p>
          <div className="fade-in-4 flex flex-wrap gap-3">
            {techCategories.map(c => (
              <a key={c.title} href={`#${c.title.toLowerCase().replace(/[\s&]+/g, '-')}`} className="no-underline transition-all duration-200"
                style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '100px' }}>
                <i className={`fas ${c.icon}`} style={{ marginRight: '8px', fontSize: '12px' }}></i>
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      {techCategories.map((cat, idx) => (
        <section key={cat.title} id={cat.title.toLowerCase().replace(/[\s&]+/g, '-')} style={{ background: idx % 2 === 0 ? '#fff' : '#F1F5F9', padding: 'clamp(3.5rem, 8vw, 6.25rem) 0', scrollMarginTop: '120px' }}>
          <div className="site-container">
            <div className="grid gap-8 md:gap-16 items-start grid-cols-1 lg:grid-cols-2">
              <div>
                <div style={{ width: '56px', height: '56px', background: `${cat.color}14`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <i className={`fas ${cat.icon}`} style={{ fontSize: '24px', color: cat.color }}></i>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 2.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '16px' }}>{cat.title}</h2>
                <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#64748B', marginBottom: '32px' }}>
                  {cat.title === 'Frontend & UI' && 'Modern, responsive, and accessible interfaces built with the latest frameworks. From component design systems to pixel-perfect implementations, we ship frontends that users love.'}
                  {cat.title === 'Backend & APIs' && 'Scalable, type-safe server architectures with well-documented APIs. REST or GraphQL, we design backends that handle millions of requests with grace.'}
                  {cat.title === 'Databases & Caching' && 'Relational, document, and in-memory data stores optimised for your access patterns. We design schemas that scale and queries that perform.'}
                  {cat.title === 'DevOps & Cloud' && 'Infrastructure as code, automated deployments, and containerised environments. We build pipelines that ship reliably and roll back safely.'}
                  {cat.title === 'Integrations & AI' && 'Payment gateways, third-party APIs, LLM pipelines, and intelligent automation. We connect systems and embed AI where it delivers measurable value.'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map(t => (
                    <span key={t} style={{ fontSize: '12px', fontWeight: 500, padding: '5px 12px', borderRadius: '6px', background: `${cat.color}12`, color: cat.color }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ background: cat.bg, borderRadius: '12px', padding: '40px', minHeight: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div className="absolute pointer-events-none" style={{ top: '-60px', right: '-60px', width: '200px', height: '200px', background: `radial-gradient(circle, ${cat.color}20 0%, transparent 70%)` }} />
                <div className="flex flex-wrap gap-3 justify-center relative z-10">
                  {cat.tags.slice(0, 6).map(t => (
                    <span key={t} style={{ fontSize: '13px', fontWeight: 600, color: '#fff', background: 'rgba(255,255,255,0.08)', border: `1px solid ${cat.color}40`, padding: '10px 20px', borderRadius: '100px', letterSpacing: '0.01em' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* OPEN SOURCE */}
      <section style={{ background: '#1E3A8A', padding: 'clamp(3.5rem, 8vw, 6.25rem) 0', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute pointer-events-none" style={{ top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)' }} />
        <div className="site-container relative z-10">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', marginBottom: '12px' }}>Open source &amp; public work</h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: '520px' }}>
                Browse repositories, contributions, and public code on GitHub. Every project reflects our engineering standards.
              </p>
            </div>
            <a href="https://github.com/onyedika-glitch" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 no-underline transition-all duration-200"
              style={{ fontSize: '15px', fontWeight: 700, color: '#fff', background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.3)', padding: '16px 36px', borderRadius: '8px', whiteSpace: 'nowrap' }}>
              <i className="fab fa-github" style={{ fontSize: '20px' }}></i>
              View GitHub Profile
              <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  )
}
