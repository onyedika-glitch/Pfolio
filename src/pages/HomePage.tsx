import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'

const projects = [
  { name: 'YouExtractor', link: '/work/youextractor' },
  { name: 'Gigora Network', link: '/work/gigora-network' },
  { name: 'Sparks Ventures', link: '/work/sparks-ventures' },
  { name: 'Sparks EFP', link: '/work/sparks-efp' },
  { name: 'Sparks Funnel', link: '/work/sparks-funnel' },
  { name: 'Sadar Properties', link: '/work/sadar-properties' },
  { name: 'Unlimited Healthcare', link: '/work/unlimited-healthcare' },
  { name: 'Zentrix Equity', link: '/work/zentrix-equity' },
  { name: 'Discount Club Cayman', link: '/work/discount-club-cayman' },
]

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', color: '#0F172A' }}>
      <Navbar />

      {/* HERO */}
      <section className="relative site-container pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-20 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 xl:gap-20 min-h-0 lg:min-h-[calc(100vh-2rem)]" style={{ isolation: 'isolate' }}>
        {/* Portrait background + overlay */}
        <div className="absolute inset-0 -z-10" style={{ overflow: 'hidden' }}>
          <img src="/assets/peter_onyedika_founder_portrait.jpeg" alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(15,23,42,0.94) 0%, rgba(15,23,42,0.86) 45%, rgba(15,23,42,0.62) 100%)' }} />
        </div>
        <div className="fade-in flex-1 max-w-[700px] relative min-w-0 w-full">
          <div className="absolute pointer-events-none hidden md:block" style={{ top: '50%', left: '-60px', transform: 'translateY(-55%)', opacity: 0.06, zIndex: 0 }}>
            <svg width="280" height="280" viewBox="0 0 56 56" fill="none">
              <rect x="0" y="0" width="56" height="56" rx="10" fill="#3B82F6" />
              <polygon points="17,16 26,28 17,40 22,40 31,28 22,16" fill="white" />
              <polygon points="25,16 34,28 25,40 30,40 39,28 30,16" fill="white" opacity="0.55" />
              <circle cx="40" cy="14" r="5" fill="#3B82F6" />
            </svg>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="fade-in inline-flex items-center gap-2 mb-5 md:mb-7" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#93C5FD' }}>
              <span style={{ display: 'block', width: '24px', height: '2px', background: '#3B82F6' }}></span>
              Senior Engineering Studio
            </div>
            <h1 className="fade-in-2" style={{ fontSize: 'clamp(36px, 9vw, 82px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#fff', marginBottom: '24px' }}>
              Enterprise Software.<br />
              <span className="headline-accent" style={{ color: '#fff' }}>Built to Last.</span>
            </h1>
            <div className="fade-in-3 flex flex-wrap gap-2 mb-6 md:mb-7">
              {['Full-Stack Architecture', 'Fintech', 'Healthcare Systems', 'AI Integration'].map(tag => (
                <span key={tag} style={{ fontSize: '11px', fontWeight: 500, color: '#DBEAFE', background: 'rgba(59,130,246,0.18)', padding: '6px 12px', borderRadius: '100px', letterSpacing: '0.02em', border: '1px solid rgba(147,197,253,0.2)' }}>{tag}</span>
              ))}
            </div>
            <p className="fade-in-3" style={{ fontSize: '15px', fontWeight: 400, color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, marginBottom: '32px', letterSpacing: '0.01em', maxWidth: '560px' }}>
              We design and engineer <span style={{ color: '#fff', fontWeight: 600 }}>complex, scalable systems</span> for ambitious companies. From backend architecture to production deployment: end-to-end, no shortcuts.
            </p>
            <div className="fade-in-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link to="/work" className="inline-flex items-center justify-center gap-2 no-underline transition-all duration-200" style={{ background: '#3B82F6', color: '#fff', padding: '15px 28px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, letterSpacing: '-0.01em' }}>
                Our Case Studies <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
              </Link>
              <a href="mailto:omogopeter@devomogo.tech" className="inline-flex items-center justify-center gap-2 no-underline transition-all duration-200" style={{ background: 'transparent', color: '#fff', padding: '14px 28px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, border: '1.5px solid rgba(255,255,255,0.4)', letterSpacing: '-0.01em' }}>
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT MARQUEE */}
      <div style={{ borderTop: '1px solid rgba(226,232,240,0.7)', borderBottom: '1px solid rgba(226,232,240,0.7)', background: '#fff', padding: '24px 0', overflow: 'hidden' }}>
        <div className="marquee">
          <div className="marquee-track">
            {[...projects, ...projects].map((p, i) => (
              <Link key={i} to={p.link} className="marquee-item no-underline" style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap', flexShrink: 0, margin: '0 26px' }}>
                <span style={{ color: '#3B82F6', opacity: 0.55, fontWeight: 400, fontSize: '14px', marginRight: '8px' }}>[</span>
                <span style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.02em', color: '#334155', opacity: 0.8 }}>{p.name}</span>
                <span style={{ color: '#3B82F6', opacity: 0.55, fontWeight: 400, fontSize: '14px', marginLeft: '8px' }}>]</span>
              </Link>
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
        <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.6, maxWidth: '520px', marginBottom: '40px' }}>We don't dabble. We go deep, building systems that handle millions of users and billions in transactions.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 rounded-xl overflow-hidden" style={{ background: '#E2E8F0' }}>
          {[
            { num: '01', icon: 'fa-layer-group', title: 'Full-Stack Architecture', desc: 'End-to-end system design from data models and API contracts to frontend interfaces. We build scalable, maintainable codebases with clean separation of concerns.', tags: ['Node.js', 'React', 'PostgreSQL', 'GraphQL'] },
            { num: '02', icon: 'fa-landmark', title: 'Fintech Systems', desc: 'Payment infrastructure, ledger systems, transaction processing, and compliance-grade reporting. Built for auditability, security, and regulatory requirements.', tags: ['PCI-DSS', 'Real-time Ledger', 'Stripe', 'Paystack'] },
            { num: '03', icon: 'fa-heart-pulse', title: 'Healthcare Platforms', desc: 'Clinical workflow tools, patient data systems, and interoperability solutions. HIPAA-aligned architecture with strict data governance and audit trails.', tags: ['HIPAA', 'HL7 FHIR', 'EHR', 'DICOM'] },
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
              { img: 'youextractor_llm_ai_pipeline_dark_dashboard.jpg', alt: 'YouExtractor AI developer tool dashboard', cat: 'AI · Developer Tool', title: 'YouExtractor: Tutorial → Course & Code Generator', desc: 'Turns YouTube coding tutorials into structured guides and runnable code projects using AI (DeepSeek, Claude, Gemini, GPT-4).', link: '/work/youextractor', live: 'https://youextractor.me' },
              { img: 'discount_club_cayman_membership_savings_platform_dashboard_amber.jpg', alt: 'Discount Club Cayman membership dashboard', cat: 'Fintech · Membership Platform', title: 'Discount Club Cayman: Membership Platform', desc: 'Membership discounts platform for the Cayman Islands with QR membership, certificates, and travel deals.', link: '/work/discount-club-cayman', live: 'https://discountclubcayman.com' },
            ].map((w) => (
              <div key={w.title} onClick={() => (w.live ? window.open(w.live, '_blank', 'noopener,noreferrer') : null)} className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ border: '1px solid #E2E8F0', background: '#F8FAFC', cursor: w.live ? 'pointer' : 'default' }}>
                <div className="h-44 sm:h-56 md:h-60 overflow-hidden">
                  <img src={`/assets/${w.img}`} alt={w.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="p-5 md:p-8">
                  <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B82F6', marginBottom: '10px' }}>{w.cat}</div>
                  <h3 style={{ fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0F172A', marginBottom: '10px' }}>{w.title}</h3>
                  <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.65, marginBottom: '20px' }}>{w.desc}</p>
                  <Link to={w.link} onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1.5 no-underline transition-all duration-200"
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
              { num: '01', title: 'Discovery', desc: 'A 60-minute technical deep-dive. We map your system requirements, constraints, and commercial goals before writing a single line of code.' },
              { num: '02', title: 'Architecture', desc: 'We produce a system design document: data models, API contracts, infrastructure topology, and a phased build roadmap.' },
              { num: '03', title: 'Engineering', desc: 'Iterative delivery in fortnightly sprints. You have visibility into every commit, every decision. No black boxes.' },
              { num: '04', title: 'Handover', desc: 'Full documentation, runbooks, and a knowledge transfer session. Your team should own the system from day one after launch.' },
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
          <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.6, maxWidth: '520px', marginBottom: '40px' }}>From frontend pixels to infrastructure topology: every layer, every tool, production-tested.</p>
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
                DevOmogo was founded by <strong>Omogo Peter Onyedika</strong>, a Senior Software Infrastructure Engineer with over 5 years building complex, production-grade systems for healthcare providers, fintech companies, and data platforms across Africa and beyond.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#64748B', marginBottom: 0 }}>
                This is a specialist firm, not an agency that takes any project that walks through the door. We work with a small number of clients at any time.
              </p>
              <div className="flex flex-wrap gap-8 pt-8 mt-8" style={{ borderTop: '1px solid #E2E8F0' }}>
                {[['5+', 'Years in practice'], ['9', 'Systems shipped'], ['4', 'Active clients']].map(([num, label]) => (
                  <div key={label}>
                    <div style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '-0.05em', color: '#1E3A8A' }}>{num}</div>
                    <div style={{ fontSize: '12px', fontWeight: 500, color: '#64748B', marginTop: '2px' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden relative">
                <img src="/assets/professional_portrait_senior_software_engineer.jpeg" alt="Omogo Peter Onyedika" className="w-full object-cover block h-72 sm:h-96 lg:h-[540px]" />
                <div className="absolute rounded-xl left-4 right-4 sm:right-auto bottom-4 sm:bottom-7 sm:left-7" style={{ background: '#fff', padding: '14px 18px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.03em', color: '#0F172A' }}>Omogo Peter Onyedika</div>
                  <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>Founder · Senior Software Infrastructure Engineer</div>
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
