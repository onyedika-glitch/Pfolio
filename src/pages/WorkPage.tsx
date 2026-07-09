import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'

const projects = [
  { id: 1, cat: 'ai', catLabel: 'AI / LLM · Data Infrastructure', catColor: '#3B82F6', bg: '#0F172A', img: 'youextractor_llm_ai_pipeline_dark_dashboard.jpg', icon: 'fa-brain', topBar: 'linear-gradient(90deg, #3B82F6, #6366F1)', title: 'YouExtractor — LLM Extraction Engine', desc: 'Multi-model chained extraction pipeline. 10M+ records/month at sub-200ms p99 latency. 3x cost reduction.', tags: ['Node.js', 'TypeScript', 'Claude API', 'Gemini', 'Redis', 'AWS'], link: '/work/youextractor' },
  { id: 2, cat: 'healthcare', catLabel: 'Healthcare · Clinical Systems', catColor: '#0D9488', bg: '#0F2E2A', img: 'caremandate_clinical_healthcare_platform_ui.jpg', icon: 'fa-heart-pulse', topBar: 'linear-gradient(90deg, #0D9488, #14B8A6)', title: 'CareMandate — Patient Operations Platform', desc: 'Enterprise monorepo clinical management system. Web + mobile. 50,000+ patients. HIPAA-aligned.', tags: ['React', 'React Native', 'Expo', 'TurboRepo', 'TypeScript', 'Node.js'], link: '/work/caremandate' },
  { id: 3, cat: 'elearning', catLabel: 'E-Learning · EdTech', catColor: '#4F46E5', bg: '#1E1B4B', img: 'ilearnova_elearning_platform_course_dashboard.jpg', icon: 'fa-graduation-cap', topBar: 'linear-gradient(90deg, #4F46E5, #7C3AED)', title: 'iLearnova — Learning Platform', desc: 'Full-scale e-learning platform. 500+ users. 40% load time improvement through performance engineering.', tags: ['React', 'Node.js', 'REST APIs'], link: '/work/ilearnova' },
  { id: 4, cat: 'fintech', catLabel: 'Fintech · Gaming', catColor: '#D97706', bg: '#1C1107', img: 'placebet247_betting_platform_dashboard_amber.jpg', icon: 'fa-landmark', topBar: 'linear-gradient(90deg, #D97706, #F59E0B)', title: 'Placebet247 — Betting Platform', desc: 'Comprehensive betting platform. Real-time data feeds. High-volume user interactions and transaction processing.', tags: ['PHP', 'Real-time', 'Security'], link: '/work/placebet247' },
  { id: 5, cat: 'web', catLabel: 'Web · UI Development', catColor: '#7C3AED', bg: '#1A0A2E', img: 'selfany_labileconsult_web_ui_design_purple.jpg', icon: 'fa-palette', topBar: 'linear-gradient(90deg, #7C3AED, #A855F7)', title: 'Selfany / LabileConsult — Web Presence', desc: 'UI development and redesign. 25% improvement in user engagement. Modern, conversion-focused interfaces.', tags: ['React', 'PHP', 'WordPress'], link: '/work/selfany' },
  { id: 6, cat: 'web', catLabel: 'Web Platform · Infrastructure', catColor: '#0891B2', bg: '#071923', img: 'floorhosting_control_panel_dashboard_cyan.jpg', icon: 'fa-server', topBar: 'linear-gradient(90deg, #0891B2, #06B6D4)', title: 'Floorhosting — Hosting Control Panel', desc: 'Hosting management control panel. Full auth, billing, and service management. Clean vanilla implementation.', tags: ['HTML5', 'CSS3', 'Vanilla JS', 'Tailwind'], link: '/work/floorhosting' },
  { id: 7, cat: 'marketplace', catLabel: 'Marketplace · Services', catColor: '#EA580C', bg: '#1C0A00', img: 'handyman_ng_service_marketplace_nigeria.jpg', icon: 'fa-toolbox', topBar: 'linear-gradient(90deg, #EA580C, #F97316)', title: 'Handyman NG — Service Marketplace', desc: 'Service marketplace connecting skilled professionals with clients in Nigeria. Discovery, booking, and review flows.', tags: ['React', 'UI/UX'], link: '/work/handyman-ng' },
  { id: 8, cat: 'ai', catLabel: 'AI · Marketing · Landing Page', catColor: '#64748B', bg: '#0F172A', img: 'atom_group_ai_technology_landing_page_slate.jpg', icon: 'fa-atom', topBar: 'linear-gradient(90deg, #475569, #64748B)', title: 'ATOM Group — AI Technology Landing Page', desc: 'AI technology company landing page with animated elements, modern interactions, and deployed to Vercel.', tags: ['Vue', 'TypeScript', 'JavaScript', 'Vercel'], link: '/work/atom-group' },
  { id: 9, cat: 'web', catLabel: 'Gov / Education · Portal', catColor: '#16A34A', bg: '#052912', img: 'eportal_enugu_school_board_education_platform.jpg', icon: 'fa-school', topBar: 'linear-gradient(90deg, #16A34A, #22C55E)', title: 'ePortal — Enugu School Board Hub', desc: 'Enugu State School Board central hub for students, parents, and staff.', tags: ['HTML5', 'CSS3', 'JavaScript'], link: '/work/eportal' },
  { id: 10, cat: 'fintech', catLabel: 'Fintech · Finance', catColor: '#3B82F6', bg: '#071223', img: 'pension_fund_management_platform_dashboard_blue.jpg', icon: 'fa-piggy-bank', topBar: 'linear-gradient(90deg, #1E3A8A, #3B82F6)', title: 'Pension App — Fund Management Platform', desc: 'Pension fund management platform. Real-time dashboards, secure data architecture, and scalable backend infrastructure.', tags: ['React', 'Node.js', 'Security'], link: '/work/pension-app' },
  { id: 11, cat: 'web', catLabel: 'Startup Accelerator · SaaS', catColor: '#D97706', bg: '#1C1000', img: 'sparks_ventures_hub_startup_accelerator_saas_dashboard_amber.jpg', icon: 'fa-rocket', topBar: 'linear-gradient(90deg, #F59E0B, #FBBF24)', title: 'Sparks Ventures Hub — Startup Accelerator', desc: 'Unified platform for accelerators and founders. KPI tracking, funding round management, secure pitch deck sharing, and investment analytics.', tags: ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB'], link: '/work/sparks-ventures' },
  { id: 12, cat: 'marketplace', catLabel: 'Service Marketplace · Payments', catColor: '#059669', bg: '#022B1A', img: 'aning_community_marketplace_services_products_jobs_emerald.jpg', icon: 'fa-store', topBar: 'linear-gradient(90deg, #059669, #10B981)', title: 'ANING — Community Marketplace Engine', desc: 'Lightweight marketplace for services, products, jobs, and events. Real-time messaging, service ordering, job application flows, and Paystack payment integration.', tags: ['React', 'Tailwind', 'Node.js', 'Paystack API', 'PM2', 'Hostinger'], link: '/work/aning' },
  { id: 13, cat: 'realestate', catLabel: 'Real Estate CRM · Co-Founded', catColor: '#B45309', bg: '#1A0E00', img: 'sadar_properties_real_estate_wholesaling_crm_dashboard_warm_brown.jpg', icon: 'fa-house-chimney', topBar: 'linear-gradient(90deg, #B45309, #D97706)', title: 'Sadar Properties — Wholesaling Toolkit', desc: 'Real estate wholesaling CRM. Parses property leads, calculates MAO and assignment fees, matches buyers to buy boxes, and crawls regional listings. Co-Founded.', tags: ['React', 'Vite', 'Tailwind', 'Express', 'PostgreSQL', 'Web Scrapers', 'OAuth 2.0'], link: '/work/sadar-properties' },
  { id: 14, cat: 'healthcare', catLabel: 'Healthcare · Mobile + Web', catColor: '#0D9488', bg: '#031917', img: 'unlimited_healthcare_uhc_clinical_ai_mobile_app_teal.jpg', icon: 'fa-stethoscope', topBar: 'linear-gradient(90deg, #0D9488, #2DD4BF)', title: 'Unlimited Healthcare — Clinical AI App', desc: 'High-scale clinical app. Real-time patient consultations via WebSockets, AI-driven symptom diagnostics, scheduling, and Google Play Store release.', tags: ['React', 'Capacitor', 'WebSockets', 'Node.js', 'Python AI', 'Google Play'], link: '/work/unlimited-healthcare' },
  { id: 15, cat: 'fintech', catLabel: 'Fintech · Cap Table Management', catColor: '#4F46E5', bg: '#0D0B2E', img: 'zentrix_equity_cap_table_platform_realtime_fintech_indigo.jpg', icon: 'fa-chart-pie', topBar: 'linear-gradient(90deg, #4F46E5, #6366F1)', title: 'Zentrix Equity — Cap Table Platform', desc: 'Real-time equity distribution and cap table management for startups and VCs. Low-latency collaborative ledger via Socket.io.', tags: ['Node.js', 'Socket.io', 'PostgreSQL', 'React', 'TypeScript', 'WebSockets'], link: '/work/zentrix-equity' },
  { id: 16, cat: 'fintech', catLabel: 'Fintech · Membership Platform', catColor: '#B45309', bg: '#1A0800', img: 'discount_club_cayman_membership_savings_platform_dashboard_amber.jpg', icon: 'fa-tag', topBar: 'linear-gradient(90deg, #B45309, #D97706)', title: 'Discount Club Cayman — Savings Platform', desc: 'Premium membership platform delivering up to 70% hotel savings and US$3,900+ annual value. Full-stack auth, savings engine, digital redemption.', tags: ['React', 'Node.js', 'TypeScript', 'Tailwind', 'Goober CSS-in-JS'], link: '/work/discount-club-cayman' },
  { id: 17, cat: 'web', catLabel: 'EdTech · WordPress Platform', catColor: '#92400E', bg: '#1A0D00', img: 'chef_academy_london_culinary_wordpress_platform_warm_brown.jpg', icon: 'fa-utensils', topBar: 'linear-gradient(90deg, #92400E, #B45309)', title: 'Chef Academy of London — Culinary Platform', desc: 'Custom WordPress culinary training platform for a London academy. Multi-language, course carousel, student enquiry system.', tags: ['WordPress', 'PHP', 'Custom Theme', 'JavaScript', 'Playfair Display'], link: '/work/chef-academy' },
]

const filters = [
  { key: 'all', label: 'All', count: 17 },
  { key: 'healthcare', label: 'Healthcare', count: 2 },
  { key: 'fintech', label: 'Fintech', count: 5 },
  { key: 'ai', label: 'AI / LLM', count: 2 },
  { key: 'elearning', label: 'E-Learning', count: 1 },
  { key: 'web', label: 'Web Platforms', count: 5 },
  { key: 'marketplace', label: 'Marketplace', count: 2 },
  { key: 'realestate', label: 'Real Estate', count: 1 },
]

export default function WorkPage() {
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
      <section style={{ background: '#1E3A8A', position: 'relative', overflow: 'hidden', padding: '160px 0 80px' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute pointer-events-none" style={{ top: '-120px', right: '-80px', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%)' }} />
        <div className="max-w-[1600px] mx-auto px-14 relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 fade-in" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#3B82F6' }}></span>
            Selected Work
          </div>
          <h1 className="fade-in-2" style={{ fontSize: 'clamp(52px, 5.5vw, 80px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', color: '#fff', marginBottom: '24px' }}>All Work</h1>
          <p className="fade-in-3" style={{ fontSize: '17px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, maxWidth: '680px', marginBottom: '64px' }}>Production systems across AI, fintech, healthcare, edtech, and web platforms. Every project built with senior engineering judgment.</p>
          <div className="flex items-stretch gap-0.5 rounded-xl overflow-hidden fade-in-4" style={{ background: 'rgba(255,255,255,0.08)', maxWidth: '680px' }}>
            {[['10', 'Projects', 'Shipped to Production'], ['5+', 'Years', 'Engineering Experience'], ['4', 'Domains', 'Healthcare · Fintech · AI · Web']].map(([val, main, sub]) => (
              <div key={main} style={{ background: 'rgba(255,255,255,0.04)', padding: '28px 36px', flex: 1 }}>
                <div style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1, marginBottom: '8px' }}>{val}</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.75)', marginBottom: '2px' }}>{main}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.02em' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div ref={filterRef} style={{ position: 'sticky', top: '120px', zIndex: 100, background: '#fff', borderBottom: '1px solid #E2E8F0', boxShadow: scrolled ? '0 4px 16px rgba(0,0,0,0.06)' : 'none' }}>
        <div className="max-w-[1600px] mx-auto px-14 h-[60px] flex items-center gap-2.5 overflow-x-auto">
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginRight: '6px', whiteSpace: 'nowrap' }}>Filter:</span>
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
        <div className="max-w-[1600px] mx-auto px-14">
          <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64748B', marginBottom: '32px' }}>
            Showing {visible.length} project{visible.length !== 1 ? 's' : ''}{activeFilter !== 'all' ? ` in ${filters.find(f => f.key === activeFilter)?.label}` : ''}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {visible.map(p => (
              <div key={p.id} className="rounded-xl overflow-hidden flex flex-col cursor-pointer transition-all duration-200 hover:-translate-y-1" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
                <div style={{ height: '4px', background: p.topBar }}></div>
                <div style={{ height: '200px', background: p.bg, position: 'relative', overflow: 'hidden' }}>
                  <img src={`/src/assets/${p.img}`} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
                  <div className="absolute flex items-center justify-center" style={{ inset: 0 }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className={`fas ${p.icon}`} style={{ fontSize: '22px', color: 'rgba(255,255,255,0.85)' }}></i>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '24px 28px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.catColor, marginBottom: '10px' }}>{p.catLabel}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', color: '#0F172A', marginBottom: '8px', lineHeight: 1.2 }}>{p.title}</h3>
                  <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: '#64748B', marginBottom: '20px', flex: 1 }}>{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map(t => <span key={t} style={{ fontSize: '10.5px', fontWeight: 500, padding: '3px 9px', borderRadius: '4px', background: 'rgba(30,58,138,0.06)', color: '#1E3A8A' }}>{t}</span>)}
                  </div>
                  <Link to={p.link} className="inline-flex items-center gap-1.5 no-underline transition-all duration-200"
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
