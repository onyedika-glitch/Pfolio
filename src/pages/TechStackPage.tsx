import React from 'react'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'
import { PINK, INK, MUTED, card, glass, Heading, Lead } from '../components/ui'

const techCategories = [
  {
    icon: 'fa-display',
    title: 'Frontend & UI',
    desc: 'Fast, responsive screens that work for everyone, on any device. From reusable components to pixel-perfect pages, I build frontends people actually enjoy using.',
    tags: ['React.js', 'Next.js', 'React Native', 'Angular', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Figma', 'Framer Motion', 'Vue'],
  },
  {
    icon: 'fa-server',
    title: 'Backend & APIs',
    desc: 'Typed, well-documented APIs that stay calm when traffic spikes. REST or GraphQL, I build backends that are easy to reason about and hard to break.',
    tags: ['Node.js', 'Express', 'Nest.js', 'Laravel', 'PHP', 'WordPress', 'Python', 'REST APIs', 'GraphQL', 'WebSockets', 'Socket.io', 'Postman'],
  },
  {
    icon: 'fa-database',
    title: 'Databases & Caching',
    desc: 'SQL, NoSQL or in-memory, chosen for how your app actually reads and writes data. I design schemas that grow with you and queries that stay quick.',
    tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Redis', 'Mongoose', 'SQLite', 'Supabase', 'Elasticsearch'],
  },
  {
    icon: 'fa-cloud',
    title: 'DevOps & Cloud',
    desc: 'Containers, automated deploys and repeatable environments. Shipping should be boring: push, deploy, and roll back in seconds if something looks off.',
    tags: ['Docker', 'AWS', 'Git', 'GitHub', 'GitHub Actions', 'TurboRepo', 'Expo', 'Capacitor', 'Vercel', 'Render', 'Hostinger VPS', 'PM2', 'CI/CD'],
  },
  {
    icon: 'fa-brain',
    title: 'Integrations & AI',
    desc: 'Payments, third-party APIs, LLMs and automation. I connect the services you rely on and add AI where it genuinely saves time or money.',
    tags: ['Stripe', 'PayPal', 'Paystack', 'Mailchimp API', 'OpenAI', 'Claude API', 'Gemini API', 'OAuth 2.0', 'Google Play Console', 'Chrome Extensions'],
  },
]

export default function TechStackPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: INK }}>
      <Navbar />
      <Seo
        title="Tech Stack | Laravel, React, NestJS, Node.js, PostgreSQL, MySQL, MongoDB | DevOmogo"
        description="The tools Omogo Peter Onyedika builds with: Laravel, PHP, NestJS, Node.js/Express, React + Vite + TypeScript, Flutter, Expo, PostgreSQL, MySQL, MongoDB, Stripe, Paystack, Docker, Vercel, and Render."
        keywords="tech stack, Laravel, React, NestJS, Node.js, TypeScript, Flutter, PostgreSQL, MySQL, MongoDB, Stripe, Paystack"
      />

      {/* HERO */}
      <section className="site-container pt-28 md:pt-36 lg:pt-44 pb-12 md:pb-16">
        <h1 className="fade-in-2" style={{ fontSize: 'clamp(34px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.06, letterSpacing: '-0.04em', color: INK, marginBottom: '22px', maxWidth: '820px' }}>
          The tools I <span style={{ color: PINK }}>reach for.</span>
        </h1>
        <p className="fade-in-3" style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', fontWeight: 500, color: '#1E293B', lineHeight: 1.7, maxWidth: '640px' }}>
          I pick what fits the job, not what's trending. Here's everything I use, from the screens people tap to the servers underneath, and all of it has run in production.
        </p>
      </section>

      {/* STACK */}
      <section className="site-container pb-16 md:pb-24">
        <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
          {techCategories.map((cat, i) => (
            <div key={cat.title} data-reveal className={`p-6 md:p-8 ${i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}`} style={card}>
              <div className="flex items-center gap-3 mb-4">
                <div className="shrink-0" style={{ width: '44px', height: '44px', background: '#FDF2F8', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`fas ${cat.icon}`} style={{ fontSize: '18px', color: PINK }}></i>
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.03em', color: INK }}>{cat.title}</h2>
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: MUTED, marginBottom: '18px' }}>{cat.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {cat.tags.map((t) => (
                  <span key={t} style={{ fontSize: '12px', fontWeight: 500, padding: '4px 11px', borderRadius: '100px', background: '#F1F5F9', color: '#334155' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GITHUB */}
      <section style={glass}>
        <div className="site-container section-pad">
          <Heading>Want to see the code?</Heading>
          <Lead>My public repos and side projects are on GitHub. It's a good way to see how I write code.</Lead>
          <div data-reveal className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-6 md:p-8 relative overflow-hidden" style={{ background: INK, borderRadius: '16px' }}>
            <div className="absolute pointer-events-none" style={{ top: '-60px', right: '-40px', width: '220px', height: '220px', background: 'radial-gradient(circle, rgba(236,72,153,0.35) 0%, transparent 70%)' }} />
            <div className="flex items-center gap-4 relative min-w-0">
              <i className="fab fa-github" style={{ fontSize: '36px', color: '#fff' }}></i>
              <div className="min-w-0">
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#fff' }}>onyedika-glitch</div>
                <div style={{ fontSize: '13.5px', color: '#94A3B8' }}>github.com/onyedika-glitch</div>
              </div>
            </div>
            <a href="https://github.com/onyedika-glitch" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 no-underline shrink-0 relative"
              style={{ fontSize: '13px', fontWeight: 600, color: INK, background: '#fff', padding: '13px 24px', borderRadius: '100px' }}>
              Browse on GitHub <i className="fas fa-arrow-right" style={{ fontSize: '11px' }}></i>
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  )
}
