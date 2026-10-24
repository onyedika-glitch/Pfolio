import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'
import DitherBackground from '../components/DitherBackground'
import useReveal from '../hooks/useReveal'
import AppShowcase from '../components/AppShowcase'
import { mobileApps } from '../data/mobileApps'

const PINK = '#BE185D'
const INK = '#0F172A'
const MUTED = '#475569'

const projects = [
  { name: 'Japa Coach', link: '/work/japa-coach' },
  { name: 'YouExtractor', link: '/work/youextractor' },
  { name: 'Gigora Network', link: '/work/gigora-network' },
  { name: 'Sparks Ventures', link: '/work/sparks-ventures' },
  { name: 'Sparks EFP', link: '/work/sparks-efp' },
  { name: 'Sparks Funnel', link: '/work/sparks-funnel' },
  { name: 'Sadar Properties', link: '/work/sadar-properties' },
  { name: 'Unlimited Healthcare', link: '/work/unlimited-healthcare' },
  { name: 'SSABHI', link: '/work/ssabhi' },
  { name: 'Discount Club Cayman', link: '/work/discount-club-cayman' },
]

const recent = [
  { name: 'Japa Coach', what: 'AI speaking & writing practice for IELTS', link: '/work/japa-coach' },
  { name: 'YouExtractor', what: 'Turns coding tutorials into courses and code', link: '/work/youextractor' },
  { name: 'Discount Club Cayman', what: 'Membership and savings platform', link: '/work/discount-club-cayman' },
  { name: 'Unlimited Healthcare', what: 'Clinical app for a care provider', link: '/work/unlimited-healthcare' },
]

const card: React.CSSProperties = {
  background: '#fff',
  border: '1px solid rgba(15,23,42,0.08)',
  borderRadius: '16px',
  boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.08)',
}

const glass: React.CSSProperties = {
  background: 'rgba(255,255,255,0.55)',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  borderTop: '1px solid rgba(15,23,42,0.06)',
  borderBottom: '1px solid rgba(15,23,42,0.06)',
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div data-reveal className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '12px', fontWeight: 600, color: PINK, background: '#fff', border: '1px solid rgba(190,24,93,0.18)', padding: '6px 12px', borderRadius: '100px' }}>
      <span style={{ display: 'block', width: '6px', height: '6px', borderRadius: '50%', background: PINK }}></span>
      {children}
    </div>
  )
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 data-reveal style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.08, color: INK, marginBottom: '14px' }}>{children}</h2>
  )
}

function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p data-reveal style={{ fontSize: '16px', fontWeight: 500, color: '#1E293B', lineHeight: 1.65, maxWidth: '560px', marginBottom: '40px' }}>{children}</p>
  )
}

export default function HomePage() {
  useReveal()

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: INK, position: 'relative' }}>
      <DitherBackground />
      <Navbar />
      <Seo
        title="DevOmogo — Senior Software Infrastructure Engineer | Fintech, Healthcare & AI Systems"
        description="Omogo Peter Onyedika is a Senior Software Infrastructure Engineer building production systems across fintech, healthcare, AI, marketplaces and web platforms, including YouExtractor, Gigora Network and Sadar Properties."
        keywords="software engineering, full-stack developer, fintech development, healthcare platform development, AI integration, Laravel developer, React developer, Nigeria software engineer, DevOmogo"
        jsonLd={{ "@context": "https://schema.org", "@type": "WebSite", name: 'DevOmogo', url: 'https://devomogo.tech/', description: 'Portfolio of Omogo Peter Onyedika, a software engineer building fintech, healthcare, AI and web platforms.' }}
      />

      {/* INTRO */}
      <section className="site-container pt-28 md:pt-36 lg:pt-44 pb-16 md:pb-20">
        <div className="grid items-center gap-10 lg:gap-14 grid-cols-1 lg:grid-cols-2">
          <div className="min-w-0">
            <div className="fade-in inline-flex items-center gap-2 mb-6" style={{ fontSize: '12.5px', fontWeight: 600, color: '#334155', background: '#fff', border: '1px solid rgba(15,23,42,0.1)', padding: '6px 13px', borderRadius: '100px' }}>
              <span className="status-dot-green"></span>
              Hi, I'm Omogo Peter Onyedika, a software engineer
            </div>
            <h1 className="fade-in-2" style={{ fontSize: 'clamp(34px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.06, letterSpacing: '-0.04em', color: INK, marginBottom: '22px' }}>
              You bring the idea.<br />
              I build the software <span style={{ color: PINK }}>that holds it up.</span>
            </h1>
            <p className="fade-in-3" style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', fontWeight: 500, color: '#1E293B', lineHeight: 1.7, marginBottom: '30px', maxWidth: '560px' }}>
              Payments that need to add up. Patient records that can't go missing. AI features people actually use. That's the kind of work I love. I only take on a few projects at a time, so you get my full attention from the first call to launch day, and after.
            </p>
            <div className="fade-in-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link to="/work" className="inline-flex items-center justify-center gap-2 no-underline transition-all duration-200" style={{ background: INK, color: '#fff', padding: '15px 28px', borderRadius: '100px', fontSize: '14px', fontWeight: 600 }}>
                See what I've built <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
              </Link>
              <a href="mailto:omogopeter@devomogo.tech" className="inline-flex items-center justify-center gap-2 no-underline transition-all duration-200" style={{ background: '#fff', color: INK, padding: '14px 28px', borderRadius: '100px', fontSize: '14px', fontWeight: 600, border: '1px solid rgba(15,23,42,0.12)' }}>
                Book a quick call
              </a>
            </div>
          </div>

          {/* Recently shipped */}
          <div className="fade-in-3 w-full max-w-md lg:ml-auto overflow-hidden" style={card}>
            <div className="flex items-center justify-between gap-3" style={{ padding: '14px 20px', borderBottom: '1px solid #F1F5F9' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: INK }}>Recently shipped</div>
              <span className="inline-flex items-center gap-1.5" style={{ fontSize: '11.5px', fontWeight: 500, color: '#64748B' }}>
                <span className="status-dot-green"></span> Live in production
              </span>
            </div>
            <ul className="list-none m-0 p-0">
              {recent.map((r, i) => (
                <li key={r.name} style={{ borderTop: i ? '1px solid #F1F5F9' : 'none' }}>
                  <Link to={r.link} className="flex items-center justify-between gap-4 no-underline transition-colors duration-200 hover:bg-pink-50" style={{ padding: '16px 20px' }}>
                    <div className="min-w-0">
                      <div style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.02em', color: INK }}>{r.name}</div>
                      <div style={{ fontSize: '13px', color: '#64748B', marginTop: '2px' }}>{r.what}</div>
                    </div>
                    <i className="fas fa-arrow-right shrink-0" style={{ fontSize: '12px', color: PINK }}></i>
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ padding: '12px 20px', background: '#FDF2F8', fontSize: '12.5px', color: '#9D174D', fontWeight: 500 }}>
              Fintech · Healthcare · AI · Full-stack web &amp; mobile
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT MARQUEE */}
      <div style={{ ...glass, background: 'rgba(255,255,255,0.75)', padding: '22px 0', overflow: 'hidden' }}>
        <div className="marquee">
          <div className="marquee-track">
            {[...projects, ...projects].map((p, i) => (
              <Link key={i} to={p.link} className="marquee-item no-underline" style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap', flexShrink: 0, margin: '0 26px' }}>
                <span style={{ color: PINK, opacity: 0.6, fontWeight: 400, fontSize: '14px', marginRight: '8px' }}>[</span>
                <span style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.02em', color: '#334155' }}>{p.name}</span>
                <span style={{ color: PINK, opacity: 0.6, fontWeight: 400, fontSize: '14px', marginLeft: '8px' }}>]</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="site-container section-pad">
        <Eyebrow>What I do</Eyebrow>
        <Heading>The hard parts, handled.</Heading>
        <Lead>Most products don't stall at the idea stage. They stall when the system underneath can't keep up. That's where I come in.</Lead>
        <div data-reveal-group className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {[
            { num: '01', icon: 'fa-layer-group', title: 'Full-Stack Architecture', desc: 'From the database to the buttons your users tap. I plan the whole thing so it’s easy to grow, easy to change, and easy for your next developer to pick up.', tags: ['Node.js', 'React', 'PostgreSQL', 'GraphQL'] },
            { num: '02', icon: 'fa-landmark', title: 'Fintech Systems', desc: 'Wallets, payments, ledgers and reports that reconcile down to the last cent. Built so your users trust it and your auditors don’t lose sleep.', tags: ['PCI-DSS', 'Real-time Ledger', 'Stripe', 'Paystack'] },
            { num: '03', icon: 'fa-heart-pulse', title: 'Healthcare Platforms', desc: 'Tools clinicians actually want to open. Patient records and clinical workflows that keep data private by default, with a clear trail of who touched what.', tags: ['HIPAA', 'HL7 FHIR', 'EHR', 'DICOM'] },
          ].map((s) => (
            <div key={s.title} data-reveal className="p-6 md:p-8" style={card}>
              <div className="flex items-center justify-between mb-5">
                <div style={{ width: '44px', height: '44px', background: '#FDF2F8', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`fas ${s.icon}`} style={{ fontSize: '18px', color: PINK }}></i>
                </div>
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: '#94A3B8', fontFamily: 'Courier New, monospace' }}>{s.num}</div>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', color: INK, marginBottom: '10px' }}>{s.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: MUTED, marginBottom: '20px' }}>{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map(t => <span key={t} style={{ fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '100px', background: '#F1F5F9', color: '#334155' }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={glass}>
        <div className="site-container section-pad">
          <Eyebrow>Selected work</Eyebrow>
          <Heading>Things I've shipped.</Heading>
          <Lead>A couple of recent favourites. There's plenty more on the work page.</Lead>
          <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
            {[
              { img: 'youextractor_llm_ai_pipeline_dark_dashboard.jpg', alt: 'YouExtractor AI developer tool dashboard', cat: 'AI · Developer Tool', title: 'YouExtractor', desc: 'Paste a YouTube coding tutorial, get back a structured course and a runnable code project. Powered by DeepSeek, Claude, Gemini and GPT-4.', link: '/work/youextractor', live: 'https://youextractor.me' },
              { img: 'discount_club_cayman_membership_savings_platform_dashboard_amber.jpg', alt: 'Discount Club Cayman membership dashboard', cat: 'Fintech · Membership Platform', title: 'Discount Club Cayman', desc: 'Members across the Cayman Islands flash a QR code and save at local businesses, plus certificates and travel deals in one place.', link: '/work/discount-club-cayman', live: 'https://discountclubcayman.com' },
            ].map((w) => (
              <div key={w.title} data-reveal onClick={() => (w.live ? window.open(w.live, '_blank', 'noopener,noreferrer') : null)} className="overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ ...card, cursor: w.live ? 'pointer' : 'default' }}>
                <div className="h-44 sm:h-56 md:h-60 overflow-hidden">
                  <img src={`/assets/${w.img}`} alt={w.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="p-5 md:p-8">
                  <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: PINK, marginBottom: '10px' }}>{w.cat}</div>
                  <h3 style={{ fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 800, letterSpacing: '-0.03em', color: INK, marginBottom: '10px' }}>{w.title}</h3>
                  <p style={{ fontSize: '14px', color: MUTED, lineHeight: 1.65, marginBottom: '20px' }}>{w.desc}</p>
                  <Link to={w.link} onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1.5 no-underline transition-all duration-200"
                    style={{ fontSize: '13px', fontWeight: 600, color: '#fff', background: INK, padding: '10px 20px', borderRadius: '100px' }}>
                    Read the story <i className="fas fa-arrow-right" style={{ fontSize: '11px' }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE APPS */}
      <section id="apps" className="site-container section-pad">
        <Eyebrow>Mobile apps</Eyebrow>
        <Heading>Apps people carry in their pocket.</Heading>
        <Lead>I build for phones too, mostly in Flutter. Swipe through a few of the screens.</Lead>
        <div data-reveal-group className="flex flex-col gap-6">
          {mobileApps.map((app) => (
            <div key={app.slug} data-reveal>
              <AppShowcase app={app} />
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="site-container section-pad">
        <Eyebrow>How it works</Eyebrow>
        <Heading>Working with me, step by step.</Heading>
        <Lead>No mystery, no disappearing for three months. Here's what to expect.</Lead>
        <ol data-reveal-group className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none m-0 p-0">
          {[
            { title: 'We talk', desc: 'An hour on a call. You tell me what you’re building and what’s worrying you, and I ask a lot of questions before writing any code.' },
            { title: 'I plan it out', desc: 'You get a clear plan: how the pieces fit together, what gets built first, and roughly how long each part will take.' },
            { title: 'I build, you watch', desc: 'New work lands every two weeks. You can see every change and every decision as it happens. No surprises.' },
            { title: 'It’s yours', desc: 'Docs, walkthroughs and a proper handover, so your team can run it confidently without needing to call me.' },
          ].map((step, i) => (
            <li key={step.title} data-reveal className="p-6" style={card}>
              <span style={{ display: 'grid', placeItems: 'center', width: '30px', height: '30px', borderRadius: '8px', background: PINK, color: '#fff', fontSize: '13px', fontWeight: 800, marginBottom: '16px' }}>{i + 1}</span>
              <h3 style={{ fontSize: '17px', fontWeight: 800, letterSpacing: '-0.03em', color: INK, marginBottom: '8px' }}>{step.title}</h3>
              <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: MUTED }}>{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* TECH STACK */}
      <section id="tech" style={glass}>
        <div className="site-container section-pad">
          <Eyebrow>What I work with</Eyebrow>
          <Heading>Tools I reach for.</Heading>
          <Lead>I pick what fits the job, not what's trending. These are the ones I use most, all of them tested in production.</Lead>
          <div data-reveal-group className="grid gap-4 mb-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[
              { icon: 'fa-display', title: 'Frontend & UI', tags: ['React.js', 'Next.js', 'React Native', 'Angular', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Figma', 'Framer Motion'] },
              { icon: 'fa-server', title: 'Backend & APIs', tags: ['Node.js', 'Express', 'Nest.js', 'Laravel', 'PHP', 'Python', 'REST APIs', 'GraphQL', 'WebSockets', 'Socket.io'] },
              { icon: 'fa-database', title: 'Databases & Caching', tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Redis', 'Mongoose', 'SQLite', 'Supabase'] },
              { icon: 'fa-cloud', title: 'DevOps & Cloud', tags: ['Docker', 'AWS', 'Git', 'GitHub', 'TurboRepo', 'Expo', 'Capacitor', 'Vercel', 'Render', 'Hostinger VPS', 'PM2', 'CI/CD'] },
              { icon: 'fa-brain', title: 'Integrations & AI', tags: ['Stripe', 'PayPal', 'Paystack', 'Mailchimp API', 'OpenAI', 'Claude API', 'Gemini API', 'OAuth 2.0', 'Google Play', 'Chrome Extensions'] },
            ].map(col => (
              <div key={col.title} data-reveal className="p-5 md:p-6" style={card}>
                <div style={{ width: '40px', height: '40px', background: '#FDF2F8', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <i className={`fas ${col.icon}`} style={{ fontSize: '16px', color: PINK }}></i>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '-0.02em', color: INK, marginBottom: '14px' }}>{col.title}</div>
                <div className="flex flex-wrap gap-1.5">
                  {col.tags.map(t => (
                    <span key={t} style={{ fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '100px', background: '#F1F5F9', color: '#334155' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div data-reveal className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-6 md:p-8 relative overflow-hidden" style={{ background: INK, borderRadius: '16px' }}>
            <div className="absolute pointer-events-none" style={{ top: '-60px', right: '-40px', width: '220px', height: '220px', background: 'radial-gradient(circle, rgba(236,72,153,0.35) 0%, transparent 70%)' }} />
            <div style={{ position: 'relative', zIndex: 1 }} className="min-w-0">
              <div style={{ fontSize: 'clamp(16px, 3vw, 20px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#fff', marginBottom: '6px' }}>Want to see the code?</div>
              <div style={{ fontSize: '13.5px', color: '#94A3B8', lineHeight: 1.5, wordBreak: 'break-word' }}>
                My public repos and side projects live at{' '}
                <a href="https://github.com/onyedika-glitch" target="_blank" rel="noopener noreferrer" style={{ color: '#F9A8D4', textDecoration: 'none' }}>github.com/onyedika-glitch</a>
              </div>
            </div>
            <a href="https://github.com/onyedika-glitch" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 no-underline transition-all duration-200 shrink-0"
              style={{ fontSize: '13px', fontWeight: 600, color: INK, background: '#fff', padding: '13px 24px', borderRadius: '100px', position: 'relative', zIndex: 1 }}>
              <i className="fab fa-github" style={{ fontSize: '16px' }}></i>
              Browse on GitHub
              <i className="fas fa-arrow-right" style={{ fontSize: '11px' }}></i>
            </a>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="team" className="site-container section-pad">
        <div data-reveal className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden" style={card}>
          <div className="min-w-0 order-2 lg:order-1 p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
            <Eyebrow>About me</Eyebrow>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.08, color: INK, marginBottom: '20px' }}>Hi, I'm Peter.</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.75, color: MUTED, marginBottom: '18px' }}>
              I'm <strong style={{ color: INK }}>Omogo Peter Onyedika</strong>. I've spent 5+ years building software for healthcare providers, fintech companies and data platforms across Africa and beyond, and I'm the founder of Japa Coach, YouExtractor, Gigora Network and Sadar Properties.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.75, color: MUTED, marginBottom: 0 }}>
              I don't say yes to everything. I take on a few projects at a time, so each one gets the focus it deserves, and I write the code myself.
            </p>
            <div className="flex flex-wrap gap-8 pt-8 mt-8" style={{ borderTop: '1px solid #F1F5F9' }}>
              {[['5+', 'Years building'], ['10', 'Products shipped'], ['4', 'Clients right now']].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '-0.05em', color: PINK }}>{num}</div>
                  <div style={{ fontSize: '12px', fontWeight: 500, color: '#64748B', marginTop: '2px' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 lg:order-2 min-h-[18rem] sm:min-h-[24rem]">
            <img src="/assets/professional_portrait_senior_software_engineer.jpeg" alt="Omogo Peter Onyedika" className="absolute inset-0 w-full h-full object-cover block" />
            <div className="absolute rounded-xl left-4 right-4 sm:right-auto bottom-4 sm:bottom-7 sm:left-7" style={{ background: '#fff', padding: '14px 18px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
              <div style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.03em', color: INK }}>Omogo Peter Onyedika</div>
              <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>Senior Software Infrastructure Engineer</div>
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
