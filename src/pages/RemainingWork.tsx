import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'

const projects = [
  { bg: '#1A0A2E', img: 'selfany_labileconsult_web_ui_design_purple.jpg', icon: 'fa-palette', topBar: 'linear-gradient(90deg, #7C3AED, #A855F7)', catColor: '#7C3AED', cat: 'Web Platform · React Development', title: 'Selfany / LabileConsult — Web Presence', desc: 'Dynamic React UI delivering 25% improvement in user engagement. Performance audits, backend API integration. Live: labileconsults.com', tags: ['React', 'PHP', 'WordPress', 'Performance Audits'], status: 'live' },
  { bg: '#071923', img: 'floorhosting_control_panel_dashboard_cyan.jpg', icon: 'fa-server', topBar: 'linear-gradient(90deg, #0891B2, #06B6D4)', catColor: '#0891B2', cat: 'Web Platform · SaaS UI', title: 'Floorhosting — Hosting Control Panel', desc: 'Professional hosting management control panel. Full authentication flow, billing & payments, service management. Live: floorhostings.vercel.app', tags: ['HTML5', 'CSS3', 'Vanilla JS', 'Tailwind', 'localStorage'], status: 'live' },
  { bg: '#1C0A00', img: 'handyman_ng_service_marketplace_nigeria.jpg', icon: 'fa-toolbox', topBar: 'linear-gradient(90deg, #EA580C, #F97316)', catColor: '#EA580C', cat: 'Service Marketplace · React', title: 'Handyman NG — Service Marketplace', desc: 'Frontend for a service marketplace connecting skilled professionals with clients across Nigeria. Service categories, provider profiles, booking system.', tags: ['React', 'UI/UX', 'Booking Systems', 'Frontend'], status: 'live' },
  { bg: '#0F172A', img: 'atom_group_ai_technology_landing_page_slate.jpg', icon: 'fa-atom', topBar: 'linear-gradient(90deg, #475569, #64748B)', catColor: '#64748B', cat: 'AI · Frontend', title: 'ATOM Group — AI Technology Landing Page', desc: 'Modern responsive landing page for an AI technology company. Animated elements, service showcases, product highlights. Vue + TypeScript.', tags: ['Vue', 'TypeScript', 'JavaScript', 'Vercel'], status: 'live' },
  { bg: '#052912', img: 'eportal_enugu_school_board_education_platform.jpg', icon: 'fa-school', topBar: 'linear-gradient(90deg, #16A34A, #22C55E)', catColor: '#16A34A', cat: 'Government · EdTech', title: 'ePortal — Enugu School Board Hub', desc: 'Central hub for the Enugu State School Board. Announcements, events, results, and school resources for students, parents, and staff.', tags: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'], status: 'live' },
  { bg: '#071223', img: 'pension_fund_management_platform_dashboard_blue.jpg', icon: 'fa-piggy-bank', topBar: 'linear-gradient(90deg, #1E3A8A, #3B82F6)', catColor: '#3B82F6', cat: 'Fintech · Financial Management', title: 'Pension App — Fund Management Platform', desc: 'Pension fund management platform. Secure fund management tools, scalable architecture for growing user data, real-time dashboards.', tags: ['React', 'Node.js', 'Security', 'Scalable Architecture'], status: 'private' },
]

export default function RemainingWork() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', color: '#0F172A' }}>
      <Navbar />

      <section style={{ background: '#1E3A8A', position: 'relative', overflow: 'hidden', padding: '136px 0 64px' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="max-w-[1600px] mx-auto px-14 relative z-10">
          <div className="flex items-center gap-2 mb-7 fade-in">
            <Link to="/work" className="inline-flex items-center gap-1.5 no-underline transition-colors" style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.45)' }}>
              <i className="fas fa-arrow-left" style={{ fontSize: '11px' }}></i>
              All Work
            </Link>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>/</span>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>More Work</span>
          </div>
          <div className="inline-flex items-center gap-2 mb-5 fade-in-2" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3B82F6' }}>
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#3B82F6' }}></span>
            Selected Projects
          </div>
          <h1 className="fade-in-3" style={{ fontSize: 'clamp(52px, 5vw, 76px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', color: '#fff', marginBottom: '20px' }}>More Work</h1>
          <p className="fade-in-4" style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, maxWidth: '640px' }}>Additional selected projects across web platforms, government systems, marketplaces, and fintech.</p>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '72px 0 100px' }}>
        <div className="max-w-[1600px] mx-auto px-14">
          <div className="flex items-center justify-between mb-10">
            <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64748B' }}>6 Projects</div>
            <Link to="/work" className="inline-flex items-center gap-1.5 no-underline transition-all" style={{ fontSize: '13px', fontWeight: 600, color: '#1E3A8A' }}>
              <i className="fas fa-arrow-left" style={{ fontSize: '11px' }}></i>
              Back to all work
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }}>
            {projects.map((p, i) => (
              <div key={i} className="rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', minHeight: '380px' }}>
                <div style={{ height: '4px', background: p.topBar }}></div>
                <div style={{ height: '180px', background: p.bg, position: 'relative', overflow: 'hidden' }}>
                  <img src={`/assets/${p.img}`} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
                  <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
                  <div className="absolute flex items-end justify-between" style={{ bottom: '16px', left: '24px', right: '24px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', letterSpacing: '-0.01em' }}>{p.title.split(' —')[0]}</span>
                    <div className="flex items-center justify-center" style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)' }}>
                      <i className={`fas ${p.icon}`} style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)' }}></i>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '28px 32px 32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.catColor, marginBottom: '10px' }}>{p.cat}</div>
                  <h3 style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '-0.04em', color: '#1E3A8A', marginBottom: '12px', lineHeight: 1.15 }}>{p.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#64748B', marginBottom: '20px', flex: 1 }}>{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map(t => <span key={t} style={{ fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '5px', background: 'rgba(30,58,138,0.06)', color: '#1E3A8A' }}>{t}</span>)}
                  </div>
                  <div className="flex items-center justify-between" style={{ paddingTop: '18px', borderTop: '1px solid #E2E8F0', marginTop: 'auto' }}>
                    <a href="#" className="inline-flex items-center gap-1.5 no-underline" style={{ fontSize: '13px', fontWeight: 700, color: '#1E3A8A' }}>
                      View case study <i className="fas fa-arrow-right" style={{ fontSize: '11px' }}></i>
                    </a>
                    {p.status === 'live' ? (
                      <span className="inline-flex items-center gap-1.5" style={{ fontSize: '11px', fontWeight: 600, color: '#059669' }}>
                        <span className="status-dot-green"></span>
                        Live
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5" style={{ fontSize: '11px', fontWeight: 600, color: '#64748B' }}>
                        <i className="fas fa-lock" style={{ fontSize: '9px' }}></i>
                        Private
                      </span>
                    )}
                  </div>
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
