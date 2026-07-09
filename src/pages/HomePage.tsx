import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', color: '#0F172A' }}>
      <Navbar />

      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        paddingTop: '120px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '120px 56px 80px',
        gap: '80px',
      }}>
        <div className="fade-in flex-1 max-w-[700px] relative">
          {/* Watermark */}
          <div className="absolute pointer-events-none" style={{ top: '50%', left: '-60px', transform: 'translateY(-55%)', opacity: 0.04, zIndex: 0 }}>
            <svg width="280" height="280" viewBox="0 0 56 56" fill="none">
              <rect x="0" y="0" width="56" height="56" rx="10" fill="#1E3A8A" />
              <polygon points="17,16 26,28 17,40 22,40 31,28 22,16" fill="white" />
              <polygon points="25,16 34,28 25,40 30,40 39,28 30,16" fill="white" opacity="0.55" />
              <circle cx="40" cy="14" r="5" fill="#3B82F6" />
            </svg>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="fade-in inline-flex items-center gap-2 mb-7" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6' }}>
              <span style={{ display: 'block', width: '24px', height: '2px', background: '#3B82F6' }}></span>
              Senior Engineering Studio
            </div>
            <h1 className="fade-in-2" style={{ fontSize: 'clamp(52px, 5.5vw, 82px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '32px' }}>
              Enterprise Software.<br />
              <span className="headline-accent">Built to Last.</span>
            </h1>
            <div className="fade-in-3 flex flex-wrap gap-2 mb-7">
              {['Full-Stack Architecture', 'Fintech', 'Healthcare Systems', 'AI Integration'].map(tag => (
                <span key={tag} style={{ fontSize: '12px', fontWeight: 500, color: '#1E3A8A', background: 'rgba(30,58,138,0.07)', padding: '6px 14px', borderRadius: '100px', letterSpacing: '0.02em' }}>{tag}</span>
              ))}
            </div>
            <p className="fade-in-3" style={{ fontSize: '16px', fontWeight: 400, color: '#64748B', lineHeight: 1.65, marginBottom: '48px', letterSpacing: '0.01em', maxWidth: '560px' }}>
              We design and engineer <span style={{ color: '#0F172A', fontWeight: 600 }}>complex, scalable systems</span> for ambitious companies. From backend architecture to production deployment — end-to-end, no shortcuts.
            </p>
            <div className="fade-in-4 flex items-center gap-4 flex-wrap">
              <Link to="/work" className="inline-flex items-center gap-2 no-underline transition-all duration-200" style={{ background: '#1E3A8A', color: '#fff', padding: '15px 32px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, letterSpacing: '-0.01em' }}>
                Our Case Studies <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
              </Link>
              <a href="mailto:webdevelopment@discountclubcayman.com" className="inline-flex items-center gap-2 no-underline transition-all duration-200" style={{ background: 'transparent', color: '#1E3A8A', padding: '14px 32px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, border: '1.5px solid #1E3A8A', letterSpacing: '-0.01em' }}>
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>

        {/* Code Card */}
        <div className="fade-in-2 relative" style={{ flex: '0 0 500px' }}>
          <div className="relative overflow-hidden rounded-2xl" style={{ background: '#1E3A8A', padding: '36px', boxShadow: '0 32px 80px rgba(30,58,138,0.35), 0 0 0 1px rgba(59,130,246,0.2)' }}>
            <div className="absolute pointer-events-none" style={{ top: '-60px', right: '-60px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)' }} />
            <div className="flex items-center gap-2 mb-7">
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F56', display: 'inline-block' }}></span>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }}></span>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27C93F', display: 'inline-block' }}></span>
              <span style={{ marginLeft: '8px', fontSize: '11px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Courier New, monospace', letterSpacing: '0.04em' }}>architecture.ts</span>
            </div>
            <div className="code-block" style={{ color: 'rgba(255,255,255,0.85)' }}>
              {[
                ['01', <><span className="c-keyword">interface</span> <span className="c-type">SystemArchitecture</span> {'{'}</>],
                ['02', <>&nbsp;&nbsp;<span className="c-param">layers</span>: <span className="c-type">ServiceLayer</span>[];</>],
                ['03', <>&nbsp;&nbsp;<span className="c-param">resilience</span>: <span className="c-string">'enterprise'</span>;</>],
                ['04', <>&nbsp;&nbsp;<span className="c-param">uptime</span>: <span className="c-num">99.99</span>;</>],
                ['05', <>{'}'}</>],
                ['06', <></>],
                ['07', <><span className="c-keyword">async function</span> <span className="c-func">deploySystem</span>(</>],
                ['08', <>&nbsp;&nbsp;<span className="c-param">config</span>: <span className="c-type">SystemArchitecture</span></>],
                ['09', <>) {'{'}</>],
                ['10', <>&nbsp;&nbsp;<span className="c-keyword">const</span> pipeline = <span className="c-keyword">await</span></>],
                ['11', <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-func">build</span>(<span className="c-param">config</span>)</>],
                ['12', <>&nbsp;&nbsp;&nbsp;&nbsp;.<span className="c-func">test</span>(<span className="c-string">'E2E'</span>)</>],
                ['13', <>&nbsp;&nbsp;&nbsp;&nbsp;.<span className="c-func">scale</span>(<span className="c-string">'horizontal'</span>)</>],
                ['14', <>&nbsp;&nbsp;&nbsp;&nbsp;.<span className="c-func">deploy</span>(<span className="c-string">'production'</span>);</>],
                ['15', <>&nbsp;&nbsp;<span className="c-comment">// Zero-downtime. Always.</span></>],
                ['16', <>&nbsp;&nbsp;<span className="c-keyword">return</span> pipeline.<span className="c-param">status</span>;</>],
                ['17', <>{'}'}</>],
              ].map(([ln, code], i) => (
                <div key={i} className="code-line">
                  <span className="ln">{ln}</span>
                  <span>{code}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Production · Africa &amp; Beyond</span>
              <span className="inline-flex items-center gap-1.5" style={{ fontSize: '11px', fontWeight: 500, color: '#6EE7B7' }}>
                <span className="status-dot-pulse"></span>
                All Systems Operational
              </span>
            </div>
          </div>
          {/* Stat bubbles */}
          <div className="absolute rounded-xl" style={{ background: '#fff', padding: '16px 22px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid #E2E8F0', bottom: '-20px', left: '-44px' }}>
            <div style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '-0.04em', color: '#1E3A8A' }}>5+</div>
            <div style={{ fontSize: '10px', fontWeight: 500, color: '#64748B', letterSpacing: '0.04em', textTransform: 'uppercase', marginTop: '2px' }}>Years Building</div>
          </div>
          <div className="absolute rounded-xl" style={{ background: '#fff', padding: '16px 22px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid #E2E8F0', top: '40px', right: '-44px' }}>
            <div style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '-0.04em', color: '#1E3A8A' }}>99.9%</div>
            <div style={{ fontSize: '10px', fontWeight: 500, color: '#64748B', letterSpacing: '0.04em', textTransform: 'uppercase', marginTop: '2px' }}>Uptime SLA</div>
          </div>
        </div>
      </section>

      {/* CLIENT STRIP */}
      <div style={{ borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', background: '#fff', padding: '36px 0' }}>
        <div className="max-w-[1600px] mx-auto px-14 flex items-center gap-12 flex-wrap">
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', whiteSpace: 'nowrap', flexShrink: 0 }}>Trusted on platforms across Africa &amp; beyond</span>
          <div style={{ width: '1px', height: '32px', background: '#E2E8F0', flexShrink: 0 }}></div>
          <div className="flex items-center gap-11 flex-wrap">
            {['YouExtractor', 'Zentrix', 'CareMandate', 'UHC', 'iLearnova', 'Placebet247'].map(name => (
              <span key={name} style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '-0.02em', color: '#64748B', opacity: 0.6 }}>
                <span style={{ color: '#3B82F6', opacity: 0.7, fontWeight: 400, fontSize: '16px' }}>[</span>&nbsp;{name}&nbsp;<span style={{ color: '#3B82F6', opacity: 0.7, fontWeight: 400, fontSize: '16px' }}>]</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" style={{ maxWidth: '1600px', margin: '0 auto', padding: '120px 56px' }}>
        <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6' }}>
          <span style={{ display: 'block', width: '20px', height: '2px', background: '#3B82F6' }}></span>
          What We Do
        </div>
        <h2 style={{ fontSize: 'clamp(36px, 3vw, 52px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#0F172A', marginBottom: '16px' }}>Precision engineering<br />across every layer.</h2>
        <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.6, maxWidth: '520px', marginBottom: '72px' }}>We don't dabble. We go deep — building systems that handle millions of users and billions in transactions.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: '#E2E8F0', borderRadius: '12px', overflow: 'hidden' }}>
          {[
            { num: '01 —', icon: 'fa-layer-group', title: 'Full-Stack Architecture', desc: 'End-to-end system design from data models and API contracts to frontend interfaces. We build scalable, maintainable codebases with clean separation of concerns.', tags: ['Node.js', 'React', 'PostgreSQL', 'GraphQL'] },
            { num: '02 —', icon: 'fa-landmark', title: 'Fintech Systems', desc: 'Payment infrastructure, ledger systems, transaction processing, and compliance-grade reporting. Built for auditability, security, and regulatory requirements.', tags: ['PCI-DSS', 'Real-time Ledger', 'Stripe', 'Paystack'] },
            { num: '03 —', icon: 'fa-heart-pulse', title: 'Healthcare Platforms', desc: 'Clinical workflow tools, patient data systems, and interoperability solutions. HIPAA-aligned architecture with strict data governance and audit trails.', tags: ['HIPAA', 'HL7 FHIR', 'EHR', 'DICOM'] },
          ].map((s) => (
            <div key={s.title} style={{ background: '#fff', padding: '48px 40px' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: '#3B82F6', marginBottom: '24px', fontFamily: 'Courier New, monospace' }}>{s.num}</div>
              <div style={{ width: '48px', height: '48px', background: 'rgba(30,58,138,0.07)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <i className={`fas ${s.icon}`} style={{ fontSize: '20px', color: '#1E3A8A' }}></i>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '-0.03em', color: '#1E3A8A', marginBottom: '14px' }}>{s.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#64748B', marginBottom: '28px' }}>{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map(t => <span key={t} style={{ fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '4px', background: 'rgba(30,58,138,0.06)', color: '#1E3A8A' }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ background: '#fff', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '120px 56px 0' }}>
          <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#3B82F6' }}></span>
            Selected Work
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 3vw, 52px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#0F172A', marginBottom: '16px' }}>Systems that scale.</h2>
          <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.6, maxWidth: '520px', marginBottom: '72px' }}>A curated selection of engineering engagements across fintech, healthcare, and data platforms.</p>
        </div>
        <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '40px 56px 120px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
            {[
              { img: 'fintech_dashboard_dark_ui.jpg', alt: 'Fintech dashboard dark UI', cat: 'Fintech · Payments Infrastructure', title: 'YouExtractor — Disbursement Engine', desc: 'Architected a high-throughput payout system processing $2M+ in daily transactions across 14 African markets.', link: '/work/youextractor' },
              { img: 'healthcare_platform_clinical_workflow.jpg', alt: 'Healthcare platform clinical workflow', cat: 'Healthcare · Clinical Systems', title: 'CareMandate — Patient Operations Platform', desc: 'End-to-end clinical workflow platform serving 50,000+ patients. HIPAA-aligned data architecture.', link: '/work/caremandate' },
            ].map((w) => (
              <div key={w.title} className="rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1" style={{ border: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img src={`/assets/${w.img}`} alt={w.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '28px 32px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B82F6', marginBottom: '10px' }}>{w.cat}</div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', color: '#0F172A', marginBottom: '10px' }}>{w.title}</h3>
                  <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.65, marginBottom: '20px' }}>{w.desc}</p>
                  <Link to={w.link} className="inline-flex items-center gap-1.5 no-underline transition-all duration-200"
                    style={{ fontSize: '13px', fontWeight: 600, color: '#fff', background: '#1E3A8A', padding: '10px 20px', borderRadius: '8px', letterSpacing: '-0.01em' }}>
                    View case study <i className="fas fa-arrow-right" style={{ fontSize: '11px' }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: '#1E3A8A' }}>
        <div className="max-w-[1600px] mx-auto px-14 py-24">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="inline-flex items-center gap-2 mb-4" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6' }}>
                <span style={{ display: 'block', width: '20px', height: '2px', background: '#3B82F6' }}></span>
                Our Process
              </div>
              <h2 style={{ fontSize: 'clamp(36px, 3vw, 52px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#fff' }}>How we engage.</h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px', background: 'rgba(255,255,255,0.08)', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { num: '01 —', title: 'Discovery', desc: 'A 60-minute technical deep-dive. We map your system requirements, constraints, and commercial goals before writing a single line of code.' },
              { num: '02 —', title: 'Architecture', desc: 'We produce a system design document: data models, API contracts, infrastructure topology, and a phased build roadmap.' },
              { num: '03 —', title: 'Engineering', desc: 'Iterative delivery in fortnightly sprints. You have visibility into every commit, every decision. No black boxes.' },
              { num: '04 —', title: 'Handover', desc: 'Full documentation, runbooks, and a knowledge transfer session. Your team should own the system from day one after launch.' },
            ].map((step) => (
              <div key={step.title} style={{ background: 'rgba(255,255,255,0.03)', padding: '40px 32px' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: '#3B82F6', marginBottom: '20px', fontFamily: 'Courier New, monospace' }}>{step.num}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: 'rgba(255,255,255,0.5)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech" style={{ background: '#F1F5F9', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="max-w-[1600px] mx-auto px-14" style={{ padding: '100px 56px' }}>
          <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#3B82F6' }}></span>
            What We Work With
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 3vw, 52px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#0F172A', marginBottom: '16px' }}>The full technical stack.</h2>
          <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.6, maxWidth: '520px', marginBottom: '72px' }}>From frontend pixels to infrastructure topology — every layer, every tool, production-tested.</p>
          <div className="grid gap-4 mb-7" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {[
              { icon: 'fa-display', title: 'Frontend & UI', tags: ['React.js', 'Next.js', 'React Native', 'Angular', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Figma', 'Framer Motion'] },
              { icon: 'fa-server', title: 'Backend & APIs', tags: ['Node.js', 'Express', 'Nest.js', 'Laravel', 'PHP', 'Python', 'REST APIs', 'GraphQL', 'WebSockets', 'Socket.io'] },
              { icon: 'fa-database', title: 'Databases & Caching', tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Redis', 'Mongoose', 'SQLite', 'Supabase'] },
              { icon: 'fa-cloud', title: 'DevOps & Cloud', tags: ['Docker', 'AWS', 'Git', 'GitHub', 'TurboRepo', 'Expo', 'Capacitor', 'Vercel', 'Render', 'Hostinger VPS', 'PM2', 'CI/CD'] },
              { icon: 'fa-brain', title: 'Integrations & AI', tags: ['Stripe', 'PayPal', 'Paystack', 'Mailchimp API', 'OpenAI', 'Claude API', 'Gemini API', 'OAuth 2.0', 'Google Play', 'Chrome Extensions'] },
            ].map(col => (
              <div key={col.title} className="transition-all" style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '28px 24px' }}>
                <div style={{ width: '44px', height: '44px', background: 'rgba(30,58,138,0.07)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                  <i className={`fas ${col.icon}`} style={{ fontSize: '18px', color: '#1E3A8A' }}></i>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '-0.02em', color: '#1E3A8A', marginBottom: '16px' }}>{col.title}</div>
                <div className="flex flex-wrap gap-1.5">
                  {col.tags.map(t => (
                    <span key={t} style={{ fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '4px', background: 'rgba(30,58,138,0.07)', color: '#1E3A8A' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: '#1E3A8A', borderRadius: '12px', padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', position: 'relative', overflow: 'hidden', flexWrap: 'wrap' }}>
            <div className="absolute pointer-events-none" style={{ top: '-40px', right: '-40px', width: '160px', height: '160px', background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.03em', color: '#fff', marginBottom: '6px' }}>Open source &amp; public work on GitHub</div>
              <div style={{ fontSize: '13.5px', color: '#94A3B8', lineHeight: 1.5 }}>
                Browse repositories, contributions, and code at{' '}
                <a href="https://github.com/onyedika-glitch" target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD', textDecoration: 'none' }}>github.com/onyedika-glitch</a>
              </div>
            </div>
            <a href="https://github.com/onyedika-glitch" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 no-underline transition-all duration-200"
              style={{ fontSize: '13px', fontWeight: 600, color: '#fff', background: 'transparent', border: '1.5px solid rgba(255,255,255,0.35)', padding: '13px 28px', borderRadius: '6px', whiteSpace: 'nowrap', flexShrink: 0, position: 'relative', zIndex: 1 }}>
              <i className="fab fa-github" style={{ fontSize: '16px' }}></i>
              View GitHub Profile
              <i className="fas fa-arrow-right" style={{ fontSize: '11px' }}></i>
            </a>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="team" style={{ background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '120px 56px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
            <div>
              <div className="flex items-center gap-4 mb-7">
                <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: '#1E3A8A', padding: '5px 12px', borderRadius: '4px' }}>About the Firm</span>
              </div>
              <h2 style={{ fontSize: 'clamp(36px, 3vw, 52px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#0F172A', marginBottom: '24px' }}>Founded by an<br />engineer, for<br />engineers.</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#64748B', marginBottom: '24px' }}>
                DevOmogo was founded by <strong>Peter Onyedika</strong>, a Senior Full-Stack Architect with over 5 years building complex, production-grade systems for healthcare providers, fintech companies, and data platforms across Africa and beyond.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#64748B', marginBottom: 0 }}>
                This is a specialist firm — not an agency that takes any project that walks through the door. We work with a small number of clients at any time.
              </p>
              <div className="flex gap-10 pt-8" style={{ borderTop: '1px solid #E2E8F0' }}>
                {[['5+', 'Years in practice'], ['12', 'Systems shipped'], ['4', 'Active clients']].map(([num, label]) => (
                  <div key={label}>
                    <div style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-0.05em', color: '#1E3A8A' }}>{num}</div>
                    <div style={{ fontSize: '12px', fontWeight: 500, color: '#64748B', marginTop: '2px' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden relative">
                <img src="/assets/professional_portrait_senior_software_engineer.jpg" alt="Peter Onyedika" style={{ width: '100%', height: '540px', objectFit: 'cover', display: 'block' }} />
                <div className="absolute rounded-xl" style={{ bottom: '28px', left: '28px', background: '#fff', padding: '16px 20px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.03em', color: '#0F172A' }}>Peter Onyedika</div>
                  <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>Founder · Senior Full-Stack Architect</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <CTABanner />
      </section>
      <Footer />
    </div>
  )
}
