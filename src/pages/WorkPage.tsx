import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'

const projects = [
  { id: 1, cat: 'ai', catLabel: 'AI · Developer Tool', catColor: '#3B82F6', bg: '#0F172A', img: 'youextractor_llm_ai_pipeline_dark_dashboard.jpg', icon: 'fa-brain', topBar: 'linear-gradient(90deg, #3B82F6, #6366F1)', title: 'YouExtractor: Tutorial → Course & Code Generator', desc: 'Turns YouTube coding tutorials into structured guides and runnable code projects using AI (DeepSeek, Claude, Gemini, GPT-4).', tags: ['Laravel', 'PHP', 'Blade', 'TailwindCSS', 'Gemini', 'GPT-4'], link: '/work/youextractor', live: 'https://youextractor.me' },
  { id: 18, cat: 'marketplace', catLabel: 'Web3 · Marketplace', catColor: '#7C3AED', bg: '#1E1B4B', img: 'fintech_dashboard_dark_ui.jpg', icon: 'fa-globe', topBar: 'linear-gradient(90deg, #7C3AED, #A855F7)', title: 'Gigora Network: Web3 Freelance Marketplace', desc: 'Community-driven Web3 freelance marketplace. Vetted talent, secure on-chain escrow, and a global remote job board.', tags: ['React', 'Node.js', 'Web3', 'Blockchain', 'Escrow', 'Marketplace'], link: '/work/gigora-network', live: 'https://gigoranetwork.com' },
  { id: 11, cat: 'web', catLabel: 'Startup Accelerator · Operations', catColor: '#D97706', bg: '#1C1000', img: 'sparks_ventures_hub_startup_accelerator_saas_dashboard_amber.jpg', icon: 'fa-rocket', topBar: 'linear-gradient(90deg, #F59E0B, #FBBF24)', title: 'Sparks Ventures Hub: Accelerator Ops Platform', desc: 'Laravel operations platform: leads, QR applications, approvals, followup queue, onboarding programs, and vouchers.', tags: ['Laravel', 'PHP', 'Blade', 'PostgreSQL'], link: '/work/sparks-ventures', live: 'https://sparksventureshub.com' },
  { id: 19, cat: 'web', catLabel: 'Program Landing · EdTech', catColor: '#D97706', bg: '#1C1000', img: 'sparksefp.jpg', icon: 'fa-graduation-cap', topBar: 'linear-gradient(90deg, #F59E0B, #FBBF24)', title: 'Sparks EFP: 3-Day Foundation Program', desc: 'Laravel landing page for a three-day foundation program with validated seat reservations (Physical/Virtual/Reservation) and cancel-by-email.', tags: ['Laravel', 'Blade', 'PHP', 'MySQL/PostgreSQL'], link: '/work/sparks-efp', live: 'https://efp.sparksventureshub.com' },
  { id: 20, cat: 'web', catLabel: 'Marketing Funnel · SaaS', catColor: '#D97706', bg: '#1C1000', img: 'sparksfunnel.jpg', icon: 'fa-filter', topBar: 'linear-gradient(90deg, #F59E0B, #FBBF24)', title: 'Sparks Ventures Hub: Lead Funnel', desc: 'Laravel marketing funnel: service pages, lead capture, consultation bookings, Paystack payments, and an admin dashboard.', tags: ['Laravel', 'Blade', 'Paystack', 'PHP'], link: '/work/sparks-funnel', live: 'https://funnel.sparksventureshub.com' },
  { id: 13, cat: 'realestate', catLabel: 'Real Estate CRM · Founded', catColor: '#B45309', bg: '#1A0E00', img: 'sadar_properties_real_estate_wholesaling_crm_dashboard_warm_brown.jpg', icon: 'fa-house-chimney', topBar: 'linear-gradient(90deg, #B45309, #D97706)', title: 'Sadar Properties: Wholesaling Toolkit', desc: 'Real estate wholesaling toolkit: deal math (MAO, assignment fee), buyer matching, and CSV/Excel import-export. Founded.', tags: ['React', 'Vite', 'Tailwind', 'Express', 'PostgreSQL', 'OAuth 2.0'], link: '/work/sadar-properties' },
  { id: 14, cat: 'healthcare', catLabel: 'Healthcare · Management System', catColor: '#0D9488', bg: '#031917', img: 'unlimited_healthcare_uhc_clinical_ai_mobile_app_teal.jpg', icon: 'fa-stethoscope', topBar: 'linear-gradient(90deg, #0D9488, #2DD4BF)', title: 'Unlimited Healthcare: Management System', desc: 'Healthcare management system: appointments, recurring bookings and reminders, clinical modules, chat, and mobile apps.', tags: ['React', 'TypeScript', 'NestJS', 'Capacitor', 'Expo', 'TypeORM'], link: '/work/unlimited-healthcare', live: 'https://unlimitedhealthcares.com' },
  { id: 15, cat: 'fintech', catLabel: 'Fintech · Equity Management', catColor: '#4F46E5', bg: '#0D0B2E', img: 'zentrix_equity_cap_table_platform_realtime_fintech_indigo.jpg', icon: 'fa-chart-pie', topBar: 'linear-gradient(90deg, #4F46E5, #6366F1)', title: 'Zentrix Equity: Equity & Valuation Platform', desc: 'Real-time equity and valuation platform on a Socket.io WebSocket server with React 18 + TypeScript and MySQL.', tags: ['Node.js', 'Socket.io', 'Express', 'MySQL', 'React', 'TypeScript'], link: '/work/zentrix-equity', live: 'https://equityapp.zentrixinnovationlab.com' },
  { id: 16, cat: 'fintech', catLabel: 'Fintech · Membership Platform', catColor: '#B45309', bg: '#1A0800', img: 'discount_club_cayman_membership_savings_platform_dashboard_amber.jpg', icon: 'fa-tag', topBar: 'linear-gradient(90deg, #B45309, #D97706)', title: 'Discount Club Cayman: Membership Platform', desc: 'Membership discounts platform for the Cayman Islands: role-based dashboards, Stripe/PayPal billing, QR membership, certificates, and travel deals.', tags: ['React', 'Vite', 'Express', 'MongoDB', 'Stripe', 'PayPal', 'Flutter'], link: '/work/discount-club-cayman', live: 'https://discountclubcayman.com' },
]

const filters = [
  { key: 'all', label: 'All', count: 9 },
  { key: 'healthcare', label: 'Healthcare', count: 1 },
  { key: 'fintech', label: 'Fintech', count: 2 },
  { key: 'ai', label: 'AI / LLM', count: 1 },
  { key: 'web', label: 'Web Platforms', count: 3 },
  { key: 'marketplace', label: 'Marketplace', count: 1 },
  { key: 'realestate', label: 'Real Estate', count: 1 },
]

export default function WorkPage() {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('all')
  const [scrolled, setScrolled] = useState(false)
  const filterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const visible = activeFilter === 'all' ? projects : projects.filter(p => p.cat === activeFilter)

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', color: '#0F172A' }}>
      <Navbar />

      {/* PAGE HERO */}
      <section style={{ background: '#1E3A8A', position: 'relative', overflow: 'hidden' }} className="pt-28 md:pt-40 pb-12 md:pb-20">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute pointer-events-none hidden sm:block" style={{ top: '-120px', right: '-80px', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%)' }} />
        <div className="site-container relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 fade-in" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#3B82F6' }}></span>
            Selected Work
          </div>
          <h1 className="fade-in-2" style={{ fontSize: 'clamp(36px, 9vw, 80px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#fff', marginBottom: '20px' }}>All Work</h1>
          <p className="fade-in-3" style={{ fontSize: 'clamp(15px, 2.5vw, 17px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, maxWidth: '680px', marginBottom: '40px' }}>Production systems across AI, fintech, healthcare, edtech, and web platforms. Every project built with senior engineering judgment.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5 rounded-xl overflow-hidden fade-in-4" style={{ background: 'rgba(255,255,255,0.08)', maxWidth: '680px' }}>
            {[['9', 'Projects', 'Shipped to Production'], ['5+', 'Years', 'Engineering Experience'], ['6', 'Domains', 'Healthcare · Fintech · AI · Web · Marketplace · Real Estate']].map(([val, main, sub]) => (
              <div key={main} className="p-5 md:p-7" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <div style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1, marginBottom: '8px' }}>{val}</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.75)', marginBottom: '2px' }}>{main}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.02em' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div ref={filterRef} className="sticky top-[72px] md:top-[96px] lg:top-[120px] z-[100]" style={{ background: '#fff', borderBottom: '1px solid #E2E8F0', boxShadow: scrolled ? '0 4px 16px rgba(0,0,0,0.06)' : 'none' }}>
        <div className="site-container min-h-[56px] py-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginRight: '4px', whiteSpace: 'nowrap', flexShrink: 0 }}>Filter:</span>
          {filters.map(f => (
            <button key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className="inline-flex items-center gap-1.5 transition-all duration-200 whitespace-nowrap"
              style={{
                padding: '7px 16px',
                borderRadius: '100px',
                fontSize: '12.5px',
                fontWeight: 600,
                cursor: 'pointer',
                border: activeFilter === f.key ? 'none' : '1.5px solid #E2E8F0',
                background: activeFilter === f.key ? '#1E3A8A' : 'transparent',
                color: activeFilter === f.key ? '#fff' : '#64748B',
              }}
            >
              {f.label} <span style={{ fontSize: '10px', fontWeight: 700, opacity: 0.65 }}>{f.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <section style={{ background: '#F8FAFC', padding: '56px 0 100px' }}>
        <div className="site-container">
          <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64748B', marginBottom: '32px' }}>
            Showing {visible.length} project{visible.length !== 1 ? 's' : ''}{activeFilter !== 'all' ? ` in ${filters.find(f => f.key === activeFilter)?.label}` : ''}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {visible.map(p => (
              <div key={p.id} onClick={() => (p.live ? window.open(p.live, '_blank', 'noopener,noreferrer') : navigate(p.link))} className="rounded-xl overflow-hidden flex flex-col cursor-pointer transition-all duration-200 hover:-translate-y-1" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
                <div style={{ height: '4px', background: p.topBar }}></div>
                <div style={{ height: '200px', background: p.bg, position: 'relative', overflow: 'hidden' }}>
                  <img src={`/assets/${p.img}`} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
                  {p.live && (
                    <div className="absolute" style={{ top: '12px', right: '12px' }}>
                      <span style={{ display: 'inline-block', fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#059669', background: 'rgba(255,255,255,0.94)', padding: '5px 10px', borderRadius: '100px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                        Live
                      </span>
                    </div>
                  )}
                </div>
                <div style={{ padding: '24px 28px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.catColor, marginBottom: '10px' }}>{p.catLabel}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', color: '#0F172A', marginBottom: '8px', lineHeight: 1.2 }}>{p.title}</h3>
                  <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: '#64748B', marginBottom: '20px', flex: 1 }}>{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map(t => <span key={t} style={{ fontSize: '10.5px', fontWeight: 500, padding: '3px 9px', borderRadius: '4px', background: 'rgba(30,58,138,0.06)', color: '#1E3A8A' }}>{t}</span>)}
                  </div>
                  <Link to={p.link} onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1.5 no-underline transition-all duration-200"
                    style={{ fontSize: '12.5px', fontWeight: 700, color: '#fff', background: '#1E3A8A', padding: '10px 20px', borderRadius: '8px' }}>
                    View case study <i className="fas fa-arrow-right" style={{ fontSize: '11px' }}></i>
                  </Link>
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
