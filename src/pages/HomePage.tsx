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
      <section className="site-container pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-20 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 xl:gap-20 min-h-0 lg:min-h-[calc(100vh-2rem)]">
        <div className="fade-in flex-1 max-w-[700px] relative min-w-0 w-full">
          <div className="absolute pointer-events-none hidden md:block" style={{ top: '50%', left: '-60px', transform: 'translateY(-55%)', opacity: 0.04, zIndex: 0 }}>
            <svg width="280" height="280" viewBox="0 0 56 56" fill="none">
              <rect x="0" y="0" width="56" height="56" rx="10" fill="#1E3A8A" />
              <polygon points="17,16 26,28 17,40 22,40 31,28 22,16" fill="white" />
              <polygon points="25,16 34,28 25,40 30,40 39,28 30,16" fill="white" opacity="0.55" />
              <circle cx="40" cy="14" r="5" fill="#3B82F6" />
            </svg>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="fade-in inline-flex items-center gap-2 mb-5 md:mb-7" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6' }}>
              <span style={{ display: 'block', width: '24px', height: '2px', background: '#3B82F6' }}></span>
              Senior Engineering Studio
            </div>
            <h1 className="fade-in-2" style={{ fontSize: 'clamp(36px, 9vw, 82px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '24px' }}>
              Enterprise Software.<br />
              <span className="headline-accent">Built to Last.</span>
            </h1>
            <div className="fade-in-3 flex flex-wrap gap-2 mb-6 md:mb-7">
              {['Full-Stack Architecture', 'Fintech', 'Healthcare Systems', 'AI Integration'].map(tag => (
                <span key={tag} style={{ fontSize: '11px', fontWeight: 500, color: '#1E3A8A', background: 'rgba(30,58,138,0.07)', padding: '6px 12px', borderRadius: '100px', letterSpacing: '0.02em' }}>{tag}</span>
              ))}
            </div>
            <p className="fade-in-3" style={{ fontSize: '15px', fontWeight: 400, color: '#64748B', lineHeight: 1.65, marginBottom: '32px', letterSpacing: '0.01em', maxWidth: '560px' }}>
              We design and engineer <span style={{ color: '#0F172A', fontWeight: 600 }}>complex, scalable systems</span> for ambitious companies. From backend architecture to production deployment — end-to-end, no shortcuts.
            </p>
            <div className="fade-in-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link to="/work" className="inline-flex items-center justify-center gap-2 no-underline transition-all duration-200" style={{ background: '#1E3A8A', color: '#fff', padding: '15px 28px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, letterSpacing: '-0.01em' }}>
                Our Case Studies <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
              </Link>
              <a href="mailto:webdevelopment@discountclubcayman.com" className="inline-flex items-center justify-center gap-2 no-underline transition-all duration-200" style={{ background: 'transparent', color: '#1E3A8A', padding: '14px 28px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, border: '1.5px solid #1E3A8A', letterSpacing: '-0.01em' }}>
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>

        {/* Code Card */}
        <div className="fade-in-2 relative w-full lg:w-auto lg:flex-none lg:max-w-[480px] xl:max-w-[500px] min-w-0">
          <div className="relative overflow-hidden rounded-2xl code-scroll" style={{ background: '#1E3A8A', padding: '20px', boxShadow: '0 32px 80px rgba(30,58,138,0.35), 0 0 0 1px rgba(59,130,246,0.2)' }}>
            <div className="absolute pointer-events-none" style={{ top: '-60px', right: '-60px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)' }} />
            <div className="flex items-center gap-2 mb-5 md:mb-7">
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
            <div className="flex flex-col xs:flex-row gap-2 sm:items-center sm:justify-between" style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Production · Africa &amp; Beyond</span>
              <span className="inline-flex items-center gap-1.5" style={{ fontSize: '11px', fontWeight: 500, color: '#6EE7B7' }}>
                <span className="status-dot-pulse"></span>
                All Systems Operational
              </span>
            </div>
          </div>
          {/* Stat bubbles — hide on small screens to avoid overflow */}
          <div className="hidden md:block absolute rounded-xl" style={{ background: '#fff', padding: '16px 22px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid #E2E8F0', bottom: '-20px', left: '-24px' }}>
            <div style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '-0.04em', color: '#1E3A8A' }}>5+</div>
            <div style={{ fontSize: '10px', fontWeight: 500, color: '#64748B', letterSpacing: '0.04em', textTransform: 'uppercase', marginTop: '2px' }}>Years Building</div>
          </div>
          <div className="hidden md:block absolute rounded-xl" style={{ background: '#fff', padding: '16px 22px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid #E2E8F0', top: '40px', right: '-24px' }}>
            <div style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '-0.04em', color: '#1E3A8A' }}>99.9%</div>
            <div style={{ fontSize: '10px', fontWeight: 500, color: '#64748B', letterSpacing: '0.04em', textTransform: 'uppercase', marginTop: '2px' }}>Uptime SLA</div>
          </div>
          {/* Mobile stat row */}
          <div className="md:hidden grid grid-cols-2 gap-3 mt-4">
            <div className="rounded-xl p-4" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '22px', fontWeight: 900, color: '#1E3A8A' }}>5+</div>
              <div style={{ fontSize: '10px', fontWeight: 500, color: '#64748B', textTransform: 'uppercase' }}>Years Building</div>
            </div>
            <div className="rounded-xl p-4" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '22px', fontWeight: 900, color: '#1E3A8A' }}>99.9%</div>
              <div style={{ fontSize: '10px', fontWeight: 500, color: '#64748B', textTransform: 'uppercase' }}>Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT STRIP */}
      <div style={{ borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', background: '#fff', padding: '28px 0' }}>
        <div className="site-container flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B' }}>Trusted on platforms across Africa &amp; beyond</span>
          <div className="hidden md:block" style={{ width: '1px', height: '32px', background: '#E2E8F0', flexShrink: 0 }}></div>
          <div className="flex items-center gap-x-6 gap-y-3 flex-wrap">
            {['YouExtractor', 'Zentrix', 'CareMandate', 'UHC', 'iLearnova', 'Placebet247'].map(name => (
              <span key={name} style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '-0.02em', color: '#64748B', opacity: 0.7 }}>
                <span style={{ color: '#3B82F6', opacity: 0.7, fontWeight: 400 }}>[</span>&nbsp;{name}&nbsp;<span style={{ color: '#3B82F6', opacity: 0.7, fontWeight: 400 }}>]</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="site-container section-pad">
        <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6' }}>
          <span style={{ display: 'block', width: '20px', height: '2px', background: '#3B82F6' }}></span>
          What We Do
        </div>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.08, color: '#0F172A', marginBottom: '16px' }}>Precision engineering<br className="hidden sm:block" /> across every layer.</h2>
        <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.6, maxWidth: '520px', marginBottom: '40px' }}>We don't dabble. We go deep — building systems that handle millions of users and billions in transactions.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 rounded-xl overflow-hidden" style={{ background: '#E2E8F0' }}>
          {[
            { num: '01 —', icon: 'fa-layer-group', title: 'Full-Stack Architecture', desc: 'End-to-end system design from data models and API contracts to frontend interfaces. We build scalable, maintainable codebases with clean separation of concerns.', tags: ['Node.js', 'React', 'PostgreSQL', 'GraphQL'] },
            { num: '02 —', icon: 'fa-landmark', title: 'Fintech Systems', desc: 'Payment infrastructure, ledger systems, transaction processing, and compliance-grade reporting. Built for auditability, security, and regulatory requirements.', tags: ['PCI-DSS', 'Real-time Ledger', 'Stripe', 'Paystack'] },
            { num: '03 —', icon: 'fa-heart-pulse', title: 'Healthcare Platforms', desc: 'Clinical workflow tools, patient data systems, and interoperability solutions. HIPAA-aligned architecture with strict data governance and audit trails.', tags: ['HIPAA', 'HL7 FHIR', 'EHR', 'DICOM'] },
          ].map((s) => (
            <div key={s.title} className="p-6 md:p-10" style={{ background: '#fff' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: '#3B82F6', marginBottom: '20px', fontFamily: 'Courier New, monospace' }}>{s.num}</div>
              <div style={{ width: '48px', height: '48px', background: 'rgba(30,58,138,0.07)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <i className={`fas ${s.icon}`} style={{ fontSize: '20px', color: '#1E3A8A' }}></i>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', color: '#1E3A8A', marginBottom: '12px' }}>{s.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#64748B', marginBottom: '20px' }}>{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map(t => <span key={t} style={{ fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '4px', background: 'rgba(30,58,138,0.06)', color: '#1E3A8A' }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ background: '#fff', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="site-container pt-16 md:pt-24 pb-0">
          <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#3B82F6' }}></span>
            Selected Work
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.08, color: '#0F172A', marginBottom: '16px' }}>Systems that scale.</h2>
          <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.6, maxWidth: '520px', marginBottom: '40px' }}>A curated selection of engineering engagements across fintech, healthcare, and data platforms.</p>
        </div>
        <div className="site-container pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
            {[
              { img: 'fintech_dashboard_dark_ui.jpg', alt: 'Fintech dashboard dark UI', cat: 'Fintech · Payments Infrastructure', title: 'YouExtractor — Disbursement Engine', desc: 'Architected a high-throughput payout system processing $2M+ in daily transactions across 14 African markets.', link: '/work/youextractor' },
              { img: 'healthcare_platform_clinical_workflow.jpg', alt: 'Healthcare platform clinical workflow', cat: 'Healthcare · Clinical Systems', title: 'CareMandate — Patient Operations Platform', desc: 'End-to-end clinical workflow platform serving 50,000+ patients. HIPAA-aligned data architecture.', link: '/work/caremandate' },
            ].map((w) => (
              <div key={w.title} className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ border: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                <div className="h-44 sm:h-56 md:h-60 overflow-hidden">
                  <img src={`/assets/${w.img}`} alt={w.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="p-5 md:p-8">
                  <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B82F6', marginBottom: '10px' }}>{w.cat}</div>
                  <h3 style={{ fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0F172A', marginBottom: '10px' }}>{w.title}</h3>
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
        <div className="site-container section-pad">
          <div className="mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6' }}>
              <span style={{ display: 'block', width: '20px', height: '2px', background: '#3B82F6' }}></span>
              Our Process
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.08, color: '#fff' }}>How we engage.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
            {[
              { num: '01 —', title: 'Discovery', desc: 'A 60-minute technical deep-dive. We map your system requirements, constraints, and commercial goals before writing a single line of code.' },
              { num: '02 —', title: 'Architecture', desc: 'We produce a system design document: data models, API contracts, infrastructure topology, and a phased build roadmap.' },
              { num: '03 —', title: 'Engineering', desc: 'Iterative delivery in fortnightly sprints. You have visibility into every commit, every decision. No black boxes.' },
              { num: '04 —', title: 'Handover', desc: 'Full documentation, runbooks, and a knowledge transfer session. Your team should own the system from day one after launch.' },
            ].map((step) => (
              <div key={step.title} className="p-6 md:p-8" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: '#3B82F6', marginBottom: '16px', fontFamily: 'Courier New, monospace' }}>{step.num}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: 'rgba(255,255,255,0.5)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech" style={{ background: '#F1F5F9', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="site-container section-pad">
          <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#3B82F6' }}></span>
            What We Work With
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.08, color: '#0F172A', marginBottom: '16px' }}>The full technical stack.</h2>
          <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.6, maxWidth: '520px', marginBottom: '40px' }}>From frontend pixels to infrastructure topology — every layer, every tool, production-tested.</p>
          <div className="grid gap-4 mb-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[
              { icon: 'fa-display', title: 'Frontend & UI', tags: ['React.js', 'Next.js', 'React Native', 'Angular', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Figma', 'Framer Motion'] },
              { icon: 'fa-server', title: 'Backend & APIs', tags: ['Node.js', 'Express', 'Nest.js', 'Laravel', 'PHP', 'Python', 'REST APIs', 'GraphQL', 'WebSockets', 'Socket.io'] },
              { icon: 'fa-database', title: 'Databases & Caching', tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Redis', 'Mongoose', 'SQLite', 'Supabase'] },
              { icon: 'fa-cloud', title: 'DevOps & Cloud', tags: ['Docker', 'AWS', 'Git', 'GitHub', 'TurboRepo', 'Expo', 'Capacitor', 'Vercel', 'Render', 'Hostinger VPS', 'PM2', 'CI/CD'] },
              { icon: 'fa-brain', title: 'Integrations & AI', tags: ['Stripe', 'PayPal', 'Paystack', 'Mailchimp API', 'OpenAI', 'Claude API', 'Gemini API', 'OAuth 2.0', 'Google Play', 'Chrome Extensions'] },
            ].map(col => (
              <div key={col.title} className="transition-all p-5 md:p-6" style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px' }}>
                <div style={{ width: '44px', height: '44px', background: 'rgba(30,58,138,0.07)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <i className={`fas ${col.icon}`} style={{ fontSize: '18px', color: '#1E3A8A' }}></i>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '-0.02em', color: '#1E3A8A', marginBottom: '14px' }}>{col.title}</div>
                <div className="flex flex-wrap gap-1.5">
                  {col.tags.map(t => (
                    <span key={t} style={{ fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '4px', background: 'rgba(30,58,138,0.07)', color: '#1E3A8A' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-6 md:p-8 rounded-xl relative overflow-hidden" style={{ background: '#1E3A8A' }}>
            <div className="absolute pointer-events-none" style={{ top: '-40px', right: '-40px', width: '160px', height: '160px', background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)' }} />
            <div style={{ position: 'relative', zIndex: 1 }} className="min-w-0">
              <div style={{ fontSize: 'clamp(16px, 3vw, 20px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#fff', marginBottom: '6px' }}>Open source &amp; public work on GitHub</div>
              <div style={{ fontSize: '13.5px', color: '#94A3B8', lineHeight: 1.5, wordBreak: 'break-word' }}>
                Browse repositories, contributions, and code at{' '}
                <a href="https://github.com/onyedika-glitch" target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD', textDecoration: 'none' }}>github.com/onyedika-glitch</a>
              </div>
            </div>
            <a href="https://github.com/onyedika-glitch" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 no-underline transition-all duration-200 shrink-0"
              style={{ fontSize: '13px', fontWeight: 600, color: '#fff', background: 'transparent', border: '1.5px solid rgba(255,255,255,0.35)', padding: '13px 24px', borderRadius: '6px', position: 'relative', zIndex: 1 }}>
              <i className="fab fa-github" style={{ fontSize: '16px' }}></i>
              View GitHub Profile
              <i className="fas fa-arrow-right" style={{ fontSize: '11px' }}></i>
            </a>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="team" style={{ background: '#F8FAFC' }}>
        <div className="site-container section-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center">
            <div className="min-w-0 order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: '#1E3A8A', padding: '5px 12px', borderRadius: '4px' }}>About the Firm</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.08, color: '#0F172A', marginBottom: '20px' }}>Founded by an engineer, for engineers.</h2>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#64748B', marginBottom: '20px' }}>
                DevOmogo was founded by <strong>Peter Onyedika</strong>, a Senior Full-Stack Architect with over 5 years building complex, production-grade systems for healthcare providers, fintech companies, and data platforms across Africa and beyond.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#64748B', marginBottom: 0 }}>
                This is a specialist firm — not an agency that takes any project that walks through the door. We work with a small number of clients at any time.
              </p>
              <div className="flex flex-wrap gap-8 pt-8 mt-8" style={{ borderTop: '1px solid #E2E8F0' }}>
                {[['5+', 'Years in practice'], ['12', 'Systems shipped'], ['4', 'Active clients']].map(([num, label]) => (
                  <div key={label}>
                    <div style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '-0.05em', color: '#1E3A8A' }}>{num}</div>
                    <div style={{ fontSize: '12px', fontWeight: 500, color: '#64748B', marginTop: '2px' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden relative">
                <img src="/assets/professional_portrait_senior_software_engineer.jpg" alt="Peter Onyedika" className="w-full object-cover block h-72 sm:h-96 lg:h-[540px]" />
                <div className="absolute rounded-xl left-4 right-4 sm:right-auto bottom-4 sm:bottom-7 sm:left-7" style={{ background: '#fff', padding: '14px 18px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid #E2E8F0' }}>
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
