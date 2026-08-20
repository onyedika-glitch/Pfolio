import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'

const shipped = [
  { title: 'YouExtractor', stack: 'Laravel 11 · PHP 8.2+ · Blade · TailwindCSS · Alpine.js · PostgreSQL/MySQL · DeepSeek / Claude / Gemini / GPT-4', link: '/work/youextractor', color: '#3B82F6', icon: 'fa-brain' },
  { title: 'Gigora Network', stack: 'Laravel 13 · PostgreSQL · Cloudinary · Resend · Sanctum · Alpine.js · AI matching · Escrow + disputes', link: '/work/gigora-network', color: '#7C3AED', icon: 'fa-globe' },
  { title: 'Discount Club Cayman', stack: 'React 19 · Vite · Express 5 · MongoDB · Stripe · PayPal · Flutter (member + business apps)', link: '/work/discount-club-cayman', color: '#B45309', icon: 'fa-tag' },
  { title: 'Unlimited Healthcare', stack: 'NestJS · TypeORM · PostgreSQL · React (Vite) · TypeScript · Capacitor · Expo React Native', link: '/work/unlimited-healthcare', color: '#0D9488', icon: 'fa-stethoscope' },
  { title: 'Sparks Ventures Hub', stack: 'Laravel 13 · PHP 8.3 · Blade · PostgreSQL / Supabase', link: '/work/sparks-ventures', color: '#D97706', icon: 'fa-rocket' },
  { title: 'Sparks EFP', stack: 'Laravel · Blade · MySQL/PostgreSQL · Seat reservations (register + cancel)', link: '/work/sparks-efp', color: '#D97706', icon: 'fa-graduation-cap' },
  { title: 'Sparks Funnel', stack: 'Laravel · Blade · Paystack · Lead capture · Bookings · Admin panel', link: '/work/sparks-funnel', color: '#D97706', icon: 'fa-filter' },
  { title: 'Sadar Properties', stack: 'React · Vite · Tailwind · Express · PostgreSQL · OAuth 2.0 (Google + Facebook) · CSV/Excel', link: '/work/sadar-properties', color: '#B45309', icon: 'fa-house-chimney' },
]

export default function FullStackArchitecturePage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', color: '#0F172A' }}>
      <Navbar />
      <Seo
        title="Full-Stack Architecture — Laravel, React, NestJS, Node.js Development | DevOmogo"
        description="End-to-end full-stack development with the stack DevOmogo actually ships: Laravel, NestJS, Node.js, React + TypeScript, Flutter, Expo, PostgreSQL, MySQL, MongoDB, Stripe, and Paystack."
        keywords="full-stack developer, Laravel development, React development, NestJS, Node.js developer, PostgreSQL, web application development"
      />

      {/* HERO */}
      <section style={{ background: '#1E3A8A', position: 'relative', overflow: 'hidden', padding: 'clamp(6.5rem, 14vw, 10rem) 0 clamp(3.5rem, 8vw, 6.25rem)' }}>
        <div className="absolute pointer-events-none" style={{ top: '-120px', right: '-80px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%)' }} />
        <div className="site-container relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 fade-in" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <Link to="/services" className="no-underline transition-all duration-200"
              style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: 600 }}>Services</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>Full-Stack Architecture</span>
          </div>
          <h1 className="fade-in-2" style={{ fontSize: 'clamp(32px, 8vw, 76px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.04em', color: '#fff', marginBottom: '24px', maxWidth: '900px' }}>
            Full-Stack<br />Architecture
          </h1>
          <p className="fade-in-3" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, maxWidth: '640px', marginBottom: '48px' }}>
            Every project on this site was engineered end-to-end: Laravel and NestJS backends, React + Vite + TypeScript frontends, Flutter and Expo mobile apps, on PostgreSQL, MySQL, and MongoDB.
          </p>
          <div className="fade-in-4 flex flex-wrap gap-2">
            {['Laravel', 'PHP', 'NestJS', 'Node.js', 'React', 'TypeScript', 'Flutter', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker'].map(t => (
              <span key={t} style={{ fontSize: '12px', fontWeight: 500, padding: '6px 14px', borderRadius: '100px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section style={{ background: '#fff', padding: 'clamp(3.5rem, 8vw, 6.25rem) 0' }}>
        <div className="site-container">
          <div className="grid gap-8 md:gap-16 grid-cols-1 md:grid-cols-2">
            <div>
              <h2 style={{ fontSize: 'clamp(28px, 2.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '20px' }}>What we build</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '28px' }}>
                The stack below isn't aspirational — it's the stack the shipped projects in this portfolio actually run on. Laravel for structured, long-lived PHP applications. NestJS with TypeORM for typed, modular TypeScript backends. Express and Node.js for real-time WebSocket systems. React + Vite + TypeScript for the frontends, with Flutter and Expo for mobile.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '28px' }}>
                Data lives in PostgreSQL, MySQL, and MongoDB with real migrations, seeders, and connection pools tuned for production. Payments run through Stripe and PayPal, auth through JWT, Laravel Sanctum, and OAuth 2.0, and real-time features through Socket.io.
              </p>
            </div>
            <div style={{ background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '40px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '24px' }}>What you get</h3>
              <ul className="list-none flex flex-col gap-5" style={{ padding: 0, margin: 0 }}>
                {[
                  'Full-stack apps in the stacks this studio actually ships',
                  'Typed backends (NestJS/TypeScript) or structured PHP (Laravel) with migrations and seeders',
                  'React + Vite + TypeScript frontends with Tailwind CSS',
                  'Mobile apps with Flutter and Expo React Native, plus Capacitor web wrappers',
                  'Payments (Stripe, PayPal), auth (JWT, Sanctum, OAuth 2.0), and real-time WebSockets',
                  'Deployed on Docker, Vercel, Render, and Hostinger VPS',
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

      {/* APPROACH */}
      <section style={{ background: '#F1F5F9', padding: 'clamp(3.5rem, 8vw, 6.25rem) 0' }}>
        <div className="site-container">
          <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#3B82F6' }}></span>
            How We Work
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '56px' }}>How the shipped systems were built.</h2>
          <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: '01', icon: 'fa-database', title: 'Schema & Contracts First', desc: 'Migrations, data models, and API contracts are defined before the UI. From Mongoose schemas and TypeORM entities to Laravel migrations — the data layer drives the app.' },
              { num: '02', icon: 'fa-lock', title: 'Auth & Payments Wired In', desc: 'JWT and Sanctum for sessions, OAuth 2.0 for social login, Stripe PaymentIntents and PayPal orders for money — security decisions made at the start, not bolted on.' },
              { num: '03', icon: 'fa-bolt', title: 'Real-Time Where It Matters', desc: 'Socket.io WebSocket servers power live messaging (Gigora), replacing REST polling for the parts of the product that change constantly.' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '44px 36px' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: '#3B82F6', marginBottom: '20px', fontFamily: 'Courier New, monospace' }}>{item.num}</div>
                <div style={{ width: '44px', height: '44px', background: 'rgba(30,58,138,0.07)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className={`fas ${item.icon}`} style={{ fontSize: '18px', color: '#1E3A8A' }}></i>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', color: '#1E3A8A', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#64748B' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section style={{ background: '#fff', padding: 'clamp(3.5rem, 8vw, 6.25rem) 0' }}>
        <div className="site-container">
          <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#3B82F6' }}></span>
            Technologies
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '48px' }}>The stack the projects actually run on.</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[
              { cat: 'Frontend & Mobile', items: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Blade + Alpine.js', 'Flutter', 'Expo React Native', 'Capacitor'] },
              { cat: 'Backend', items: ['Laravel (PHP 8)', 'NestJS', 'Node.js (Express)', 'REST APIs', 'Socket.io (WebSockets)'] },
              { cat: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB (Mongoose)', 'TypeORM', 'Eloquent', 'Supabase'] },
              { cat: 'Auth & Payments', items: ['JWT', 'Laravel Sanctum', 'OAuth 2.0', 'Google + Facebook Login', 'Stripe', 'PayPal'] },
              { cat: 'Deployment', items: ['Docker', 'Docker Compose', 'Vercel', 'Render', 'Hostinger VPS', 'Cloudinary', 'Resend'] },
            ].map(group => (
              <div key={group.cat} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '28px 24px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B82F6', marginBottom: '16px' }}>{group.cat}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span key={item} style={{ fontSize: '12px', fontWeight: 500, color: '#334155', background: '#fff', border: '1px solid #E2E8F0', padding: '4px 10px', borderRadius: '4px' }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVEN IN PRODUCTION */}
      <section style={{ background: '#F1F5F9', padding: 'clamp(3.5rem, 8vw, 6.25rem) 0' }}>
        <div className="site-container">
          <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#3B82F6' }}></span>
            Proven in Production
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '48px' }}>Shipped with this stack.</h2>
          <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {shipped.map(p => (
              <Link key={p.title} to={p.link} className="no-underline transition-all duration-200 hover:-translate-y-1" style={{ display: 'block', background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '32px 28px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', background: `${p.color}14` }}>
                  <i className={`fas ${p.icon}`} style={{ fontSize: '18px', color: p.color }}></i>
                </div>
                <div style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', color: '#0F172A', marginBottom: '8px' }}>{p.title}</div>
                <div style={{ fontSize: '13px', lineHeight: 1.65, color: '#64748B' }}>{p.stack}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  )
}
