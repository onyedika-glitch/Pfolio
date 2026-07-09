import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar() {
  const location = useLocation()
  const isWork = location.pathname.startsWith('/work')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{
      background: 'rgba(248, 250, 252, 0.95)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottomColor: '#E2E8F0',
    }}>
      <div className="max-w-[1600px] mx-auto px-14 h-[120px] flex items-center justify-between">
        <Link to="/" className="no-underline">
          <Logo size={96} variant="navy" />
        </Link>
        <ul className="hidden md:flex items-center gap-9 list-none">
          <li>
            <Link to="/work" className="text-[13px] font-medium no-underline transition-colors duration-200"
              style={{ color: isWork ? '#0F172A' : '#64748B', fontWeight: isWork ? 600 : 500 }}
            >Work</Link>
          </li>
          <li>
            <Link to="/services" className="text-[13px] font-medium no-underline transition-colors duration-200" style={{ color: '#64748B' }}>Services</Link>
          </li>
          <li>
            <Link to="/tech-stack" className="text-[13px] font-medium no-underline transition-colors duration-200" style={{ color: '#64748B' }}>Tech Stack</Link>
          </li>
          <li>
            <Link to="/team" className="text-[13px] font-medium no-underline transition-colors duration-200" style={{ color: '#64748B' }}>The Team</Link>
          </li>
          <li>
            <Link to="/contact" className="text-[13px] font-medium no-underline transition-colors duration-200" style={{ color: '#64748B' }}>Contact</Link>
          </li>
          <li>
            <Link to="/contact"
              className="text-[13px] font-semibold no-underline px-5 py-2.5 rounded-full transition-all duration-200"
              style={{ background: '#1E3A8A', color: '#fff', letterSpacing: '0.01em' }}
            >Start a Project</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
