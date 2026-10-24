import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'

export default function FintechSystemsPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}>
      <Navbar />
      <Seo
        title="Fintech Systems Development | Payments, Ledgers, Stripe, Paystack | DevOmogo"
        description="Fintech platform development by Omogo Peter Onyedika: payment integration (Stripe, PayPal, Paystack), membership and billing platforms, real-time equity systems, and secure transaction flows."
        keywords="fintech development, payment integration, Stripe developer, Paystack, membership platform, real-time WebSocket, MongoDB, MySQL"
      />

      {/* HERO */}
      <section style={{ background: 'transparent', position: 'relative', overflow: 'hidden', padding: 'clamp(6.5rem, 14vw, 10rem) 0 clamp(3.5rem, 8vw, 6.25rem)' }}>
        <div className="site-container relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 fade-in" style={{ background: '#fff', border: '1px solid rgba(190,24,93,0.18)', padding: '6px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BE185D' }}>
            <Link to="/services" className="no-underline transition-all duration-200"
              style={{ color: '#0F172A', background: '#fff', padding: '6px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: 600 }}>Services</Link>
            <span style={{ color: '#475569' }}>/</span>
            <span style={{ color: '#475569' }}>Fintech Systems</span>
          </div>
          <h1 className="fade-in-2" style={{ fontSize: 'clamp(32px, 8vw, 76px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '24px', maxWidth: '900px' }}>
            Fintech<br />Systems
          </h1>
          <p className="fade-in-3" style={{ fontSize: '18px', color: '#1E293B', lineHeight: 1.6, maxWidth: '640px', marginBottom: '48px' }}>
            Wallets, payments, ledgers and reports that reconcile down to the last cent. Built so your users trust it and your auditors don't lose sleep.
          </p>
          <div className="fade-in-4 flex flex-wrap gap-2">
            {['PCI-DSS', 'Real-time Ledger', 'Stripe', 'Paystack', 'Idempotency', 'Double-Entry', 'Reconciliation', 'Fraud Detection'].map(t => (
              <span key={t} style={{ fontSize: '12px', fontWeight: 500, padding: '6px 14px', borderRadius: '100px', background: '#fff', border: '1px solid rgba(15,23,42,0.1)', color: '#1E293B' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', padding: 'clamp(3.5rem, 8vw, 6.25rem) 0' }}>
        <div className="site-container">
          <div className="grid gap-8 md:gap-16 grid-cols-1 md:grid-cols-2">
            <div>
              <h2 style={{ fontSize: 'clamp(28px, 2.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '20px' }}>What I build</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '28px' }}>
                Money software has to be exact. I build double-entry ledgers, reconcile payment providers, and make sure a payment can never go through twice, even when the network hiccups. Every integration follows PCI-DSS principles and is monitored in real time.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#64748B', marginBottom: '28px' }}>
                From plugging in payment providers to building custom finance dashboards, I make sure every number can be traced, every system is locked down, and nothing falls over as you grow. I've worked on systems handling millions in daily transaction volume across multiple African markets.
              </p>
            </div>
            <div style={{ background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '40px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '24px' }}>What you get</h3>
              <ul className="list-none flex flex-col gap-5" style={{ padding: 0, margin: 0 }}>
                {[
                  'Double-entry ledger systems with full audit trails',
                  'Idempotent transaction processing: no duplicates, no lost payments',
                  'Multi-rail payment integration (card, bank transfer, mobile money)',
                  'Real-time reconciliation and settlement reporting',
                  'Compliance-grade security architecture',
                  'Fraud detection and transaction monitoring',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3" style={{ fontSize: '15px', lineHeight: 1.5, color: '#334155' }}>
                    <span style={{ color: '#BE185D', flexShrink: 0, marginTop: '2px' }}><i className="fas fa-check-circle" style={{ fontSize: '16px' }}></i></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', padding: 'clamp(3.5rem, 8vw, 6.25rem) 0' }}>
        <div className="site-container">
          <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#BE185D' }}>
            <span style={{ display: 'block', width: '6px', height: '6px', borderRadius: '50%', background: '#BE185D' }}></span>
            My approach
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '56px' }}>How I build financial systems.</h2>
          <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: '01', icon: 'fa-book', title: 'Ledger-First Design', desc: 'I always start with the ledger. Double-entry accounting from day one means every transaction can be traced and every balance adds up.' },
              { num: '02', icon: 'fa-shield', title: 'Security & Compliance', desc: 'PCI-DSS alignment, encryption at rest and in transit, granular access controls, and immutable audit logs. Security is not a feature. It is the foundation.' },
              { num: '03', icon: 'fa-chart-line', title: 'Real-Time Operations', desc: 'Real-time balance checks, transaction status webhooks, instant reconciliation, and monitoring dashboards. You see what’s happening as it happens.' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '44px 36px' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: '#BE185D', marginBottom: '20px', fontFamily: 'Courier New, monospace' }}>{item.num}</div>
                <div style={{ width: '44px', height: '44px', background: 'rgba(190,24,93,0.07)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className={`fas ${item.icon}`} style={{ fontSize: '18px', color: '#BE185D' }}></i>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', color: '#BE185D', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#64748B' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY SNIPPET */}
      <section style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', padding: 'clamp(3.5rem, 8vw, 6.25rem) 0' }}>
        <div className="site-container">
          <div className="inline-flex items-center gap-2 mb-5" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#BE185D' }}>
            <span style={{ display: 'block', width: '6px', height: '6px', borderRadius: '50%', background: '#BE185D' }}></span>
            Related Work
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 2.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', marginBottom: '12px' }}>Discount Club Cayman: Membership Platform</h2>
          <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.65, maxWidth: '600px', marginBottom: '32px' }}>
            Membership discounts and benefits platform for the Cayman Islands featuring role-based dashboards, Stripe and PayPal billing, digital QR memberships, and travel deal catalogs.
          </p>
          <Link to="/work/discount-club-cayman" className="inline-flex items-center gap-2 no-underline transition-all duration-200"
            style={{ fontSize: '14px', fontWeight: 700, color: '#fff', background: '#BE185D', padding: '14px 28px', borderRadius: '8px' }}>
            View Case Study <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
          </Link>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  )
}
