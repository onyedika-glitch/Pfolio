import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const btnStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '8px 18px',
  borderRadius: '8px',
  fontSize: '13.5px',
  fontWeight: 500,
  background: 'rgba(255,255,255,0.06)',
  color: 'rgba(255,255,255,0.7)',
  border: '1px solid rgba(255,255,255,0.08)',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  wordBreak: 'break-word',
  maxWidth: '100%',
}

export default function Footer() {
  return (
    <footer style={{ background: '#0F172A', padding: '56px 0 32px' }}>
      <div className="site-container">
        <div className="grid gap-10 md:gap-12 mb-12 md:mb-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex no-underline mb-0">
              <Logo size={72} variant="blue" textColor="rgba(255,255,255,0.9)" subColor="rgba(59,130,246,0.8)" />
            </Link>
            <p style={{ fontSize: '13.5px', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', maxWidth: '320px', marginTop: '20px', marginBottom: '28px' }}>
              A senior engineering firm specialising in enterprise software, fintech, and healthcare systems. London-informed. Africa-built.
            </p>
            <div className="flex gap-3">
              {['linkedin-in', 'github', 'x-twitter'].map((icon) => (
                <a key={icon} href={icon === 'github' ? 'https://github.com/onyedika-glitch' : icon === 'x-twitter' ? 'https://x.com/peteromogo2' : '#'} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-lg no-underline transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '20px' }}>Studio</div>
            <ul className="list-none flex flex-col gap-2.5" style={{ padding: 0, margin: 0 }}>
              <li><Link to="/work" style={btnStyle}>Our Work</Link></li>
              <li><Link to="/services" style={btnStyle}>Services</Link></li>
              <li><Link to="/team" style={btnStyle}>The Team</Link></li>
              <li><Link to="/contact" style={btnStyle}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '20px' }}>Expertise</div>
            <ul className="list-none flex flex-col gap-2.5" style={{ padding: 0, margin: 0 }}>
              {[
                { label: 'Full-Stack Architecture', path: '/services/fullstackarchitecture' },
                { label: 'Fintech Systems', path: '/services/fintechsystems' },
                { label: 'Healthcare Platforms', path: '/services/healthcareplatforms' },
                { label: 'AI Integration', path: '/services/aiintegration' },
              ].map(item => (
                <li key={item.label}><Link to={item.path} style={btnStyle}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '20px' }}>Contact</div>
            <ul className="list-none flex flex-col gap-2.5" style={{ padding: 0, margin: 0 }}>
              <li><a href="mailto:webdevelopment@discountclubcayman.com" style={btnStyle}>webdevelopment@discountclubcayman.com</a></li>
              <li><Link to="/contact" style={btnStyle}>Book a Call</Link></li>
              <li><Link to="/contact" style={btnStyle}>Start a Project</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between" style={{ paddingTop: '28px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.01em' }}>© 2026 DevOmogo · devomogo.tech. All rights reserved.</div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.01em' }}>Enterprise Software · Built to Last</div>
        </div>
      </div>
    </footer>
  )
}
