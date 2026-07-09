import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'

export default function FullStackArchitecturePage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', color: '#0F172A' }}>
      <Navbar />

      {/* HERO */}
      <section style={{ background: '#1E3A8A', position: 'relative', overflow: 'hidden', padding: '160px 0 100px' }}>
        <div className="absolute pointer-events-none" style={{ top: '-120px', right: '-80px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%)' }} />
        <div className="max-w-[1600px] mx-auto px-14 relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 fade-in" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <Link to="/services" className="no-underline transition-all duration-200"
              style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: 600 }}>Services</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>Full-Stack Architecture</span>
          </div>
          <h1 className="fade-in-2" style={{ fontSize: 'clamp(48px, 5vw, 76px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.04em', color: '#fff', marginBottom: '24px', maxWidth: '900px' }}>
            Full-Stack<br />Architecture
          </h1>
          <p className="fade-in-3" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, maxWidth: '640px', marginBottom: '48px' }}>
            End-to-end system design from data models and API contracts to frontend interfaces. We build scalable, maintainable codebases with clean separation of concerns.
          </p>
          <div className="fade-in-4 flex flex-wrap gap-2">
            {['Node.js', 'React', 'PostgreSQL', 'GraphQL', 'TypeScript', 'AWS', 'Docker', 'CI/CD'].map(t => (
              <span key={t} style={{ fontSize: '12px', fontWeight: 500, padding: '6px 14px', borderRadius: '100px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div className="max-w-[1600px] mx-auto px-14">
          <div className="grid gap-16" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(28px, 2.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '20px' }}>What we build</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '28px' }}>
                Every layer of the stack is engineered with production in mind — from database schema design and API gateway configuration through to responsive, accessible frontend components. We use modern tooling, typed languages, and rigorous code review to ship systems that teams can own and evolve.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '28px' }}>
                Whether you are building a new platform from scratch or scaling an existing system, we bring senior engineering judgment to every decision — from choosing the right database to structuring the frontend state management.
              </p>
            </div>
            <div style={{ background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '40px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '24px' }}>What you get</h3>
              <ul className="list-none flex flex-col gap-5" style={{ padding: 0, margin: 0 }}>
                {[
                  'Clean, typed codebases with full test coverage',
                  'API-first design with documented contracts',
                  'Database schema design optimised for your access patterns',
                  'Responsive, accessible frontend interfaces',
                  'CI/CD pipelines and infrastructure as code',
                  'Comprehensive documentation and runbooks',
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
      <section style={{ background: '#F1F5F9', padding: '100px 0' }}>
        <div className="max-w-[1600px] mx-auto px-14">
          <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#3B82F6' }}></span>
            Our Approach
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '56px' }}>How we architect systems.</h2>
          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              { num: '01', icon: 'fa-sitemap', title: 'System Design First', desc: 'We start with a system design document — data models, API contracts, infrastructure topology — before writing code. Every tradeoff is documented and discussed.' },
              { num: '02', icon: 'fa-code', title: 'Typed & Tested', desc: 'TypeScript end-to-end. Full test suites (unit, integration, E2E). Every PR is reviewed. We ship code that other engineers can read and own.' },
              { num: '03', icon: 'fa-cloud', title: 'Production-Ready Infrastructure', desc: 'Docker containers, infrastructure as code, automated deployments, monitoring, and alerting. Your system runs like a real product from day one.' },
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
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div className="max-w-[1600px] mx-auto px-14">
          <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#3B82F6' }}></span>
            Technologies
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '48px' }}>Tools we reach for.</h2>
          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {[
              { cat: 'Frontend', items: ['React', 'Next.js', 'Vue', 'Tailwind CSS', 'TypeScript', 'Redux/Zustand'] },
              { cat: 'Backend', items: ['Node.js', 'Express', 'Fastify', 'Python', 'Go', 'REST & GraphQL'] },
              { cat: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB'] },
              { cat: 'Infrastructure', items: ['AWS', 'Docker', 'Terraform', 'GitHub Actions', 'Vercel', 'Cloudflare'] },
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

      <CTABanner />
      <Footer />
    </div>
  )
}
