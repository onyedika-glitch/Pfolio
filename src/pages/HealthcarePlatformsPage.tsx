import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'

export default function HealthcarePlatformsPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', color: '#0F172A' }}>
      <Navbar />
      <Seo
        title="Healthcare Platform Development — Appointment Systems, NestJS, Mobile | DevOmogo"
        description="Healthcare management system development: appointment booking, recurring appointments and reminders, clinical modules, chat, and React web + Expo mobile apps on a NestJS backend."
        keywords="healthcare software development, appointment booking system, NestJS, TypeORM, React, Expo, mobile healthcare app"
      />

      {/* HERO */}
      <section style={{ background: '#0F172A', position: 'relative', overflow: 'hidden', padding: 'clamp(6.5rem, 14vw, 10rem) 0 clamp(3.5rem, 8vw, 6.25rem)' }}>
        <div className="absolute pointer-events-none" style={{ top: '-120px', right: '-80px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 65%)' }} />
        <div className="site-container relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 fade-in" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#818CF8' }}>
            <Link to="/services" className="no-underline transition-all duration-200"
              style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: 600 }}>Services</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>Healthcare Platforms</span>
          </div>
          <h1 className="fade-in-2" style={{ fontSize: 'clamp(32px, 8vw, 76px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.04em', color: '#fff', marginBottom: '24px', maxWidth: '900px' }}>
            Healthcare<br />Platforms
          </h1>
          <p className="fade-in-3" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, maxWidth: '640px', marginBottom: '48px' }}>
            Clinical workflow tools, patient data systems, and interoperability solutions. HIPAA-aligned architecture with strict data governance and audit trails.
          </p>
          <div className="fade-in-4 flex flex-wrap gap-2">
            {['HIPAA', 'HL7 FHIR', 'EHR', 'DICOM', 'Audit Trails', 'RBAC', 'Data Governance', 'Interoperability'].map(t => (
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
              <h2 style={{ fontSize: 'clamp(28px, 2.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '20px' }}>What I build</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '28px' }}>
                In healthcare, mistakes cost more than money. I build systems where people only see what they're meant to see, every change is logged and can't be quietly edited, and patient data stays properly separated. From FHIR-compliant APIs to screens that keep working offline, the goal is software clinicians and regulators can both trust.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '28px' }}>
                I've built patient management platforms, clinical workflow tools and systems that let different healthcare software talk to each other. In every one of them, keeping patient data private came first.
              </p>
            </div>
            <div style={{ background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '40px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '24px' }}>What you get</h3>
              <ul className="list-none flex flex-col gap-5" style={{ padding: 0, margin: 0 }}>
                {[
                  'HIPAA-aligned data architecture and access controls',
                  'Immutable audit trails for every data access and modification',
                  'Role-based access control with fine-grained permissions',
                  'FHIR-compliant APIs for interoperability',
                  'Offline-capable clinical interfaces for low-connectivity settings',
                  'Patient data systems with strict data segregation and encryption',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3" style={{ fontSize: '15px', lineHeight: 1.5, color: '#334155' }}>
                    <span style={{ color: '#818CF8', flexShrink: 0, marginTop: '2px' }}><i className="fas fa-check-circle" style={{ fontSize: '16px' }}></i></span>
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
          <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#818CF8' }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#818CF8' }}></span>
            My approach
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '56px' }}>How I build healthcare systems.</h2>
          <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: '01', icon: 'fa-shield-halved', title: 'Privacy by Design', desc: 'Privacy isn’t a feature I add at the end. Patient data is encrypted, kept separate, and only reachable by the right people, with every access logged.' },
              { num: '02', icon: 'fa-arrows-left-right', title: 'Interoperability First', desc: 'HL7 FHIR-compliant APIs ensure your system can communicate with existing healthcare infrastructure: labs, pharmacies, insurance, and national health systems.' },
              { num: '03', icon: 'fa-wifi', title: 'Offline-First Capability', desc: 'A clinic can’t stop because the Wi-Fi dropped. I build screens that keep working offline and quietly sync once the connection is back.' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '44px 36px' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: '#818CF8', marginBottom: '20px', fontFamily: 'Courier New, monospace' }}>{item.num}</div>
                <div style={{ width: '44px', height: '44px', background: 'rgba(99,102,241,0.07)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className={`fas ${item.icon}`} style={{ fontSize: '18px', color: '#6366F1' }}></i>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', color: '#6366F1', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#64748B' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY SNIPPET */}
      <section style={{ background: '#fff', padding: 'clamp(3.5rem, 8vw, 6.25rem) 0' }}>
        <div className="site-container">
          <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#818CF8' }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#818CF8' }}></span>
            Related Work
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div>
              <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '12px' }}>Unlimited Healthcare: Management System</h2>
              <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.65, maxWidth: '600px', marginBottom: '24px' }}>
                Healthcare management system with a React + TypeScript web app, an Expo React Native mobile app, and a NestJS backend — appointments, recurring bookings, reminders, clinical modules, and chat.
              </p>
              <Link to="/work/unlimited-healthcare" className="inline-flex items-center gap-2 no-underline transition-all duration-200"
                style={{ fontSize: '14px', fontWeight: 700, color: '#fff', background: '#6366F1', padding: '14px 28px', borderRadius: '8px' }}>
                View Case Study <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
              </Link>
            </div>
            <div>
              <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '12px' }}>SSABHI: Brain Health Initiative</h2>
              <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.65, maxWidth: '600px', marginBottom: '24px' }}>
                WordPress feature work on a live nonprofit: membership, programs, jobs, and Elementor pages for the Sub-Saharan Africa Brain Health Initiative.
              </p>
              <Link to="/work/ssabhi" className="inline-flex items-center gap-2 no-underline transition-all duration-200"
                style={{ fontSize: '14px', fontWeight: 700, color: '#fff', background: '#6366F1', padding: '14px 28px', borderRadius: '8px' }}>
                View Case Study <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  )
}
