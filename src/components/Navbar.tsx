import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { to: '/work', label: 'Work', match: (p: string) => p.startsWith('/work') },
  { to: '/services', label: 'Services', match: (p: string) => p.startsWith('/services') },
  { to: '/tech-stack', label: 'Tech Stack', match: (p: string) => p === '/tech-stack' },
  { to: '/team', label: 'The Team', match: (p: string) => p === '/team' },
  { to: '/contact', label: 'Contact', match: (p: string) => p === '/contact' },
]

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className="site-nav fixed top-0 left-0 right-0 z-50 border-b" style={{
      background: 'rgba(248, 250, 252, 0.97)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottomColor: '#E2E8F0',
    }}>
      <div className="site-container h-[72px] md:h-[96px] lg:h-[120px] flex items-center justify-between gap-4">
        <Link to="/" className="no-underline min-w-0" onClick={() => setOpen(false)}>
          <span className="hidden sm:block">
            <Logo size={72} variant="navy" />
          </span>
          <span className="block sm:hidden">
            <Logo size={44} variant="navy" />
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-9 list-none m-0 p-0">
          {links.map((l) => {
            const active = l.match(location.pathname)
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-[13px] font-medium no-underline transition-colors duration-200"
                  style={{ color: active ? '#0F172A' : '#64748B', fontWeight: active ? 600 : 500 }}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
          <li>
            <Link
              to="/contact"
              className="text-[13px] font-semibold no-underline px-5 py-2.5 rounded-full transition-all duration-200"
              style={{ background: '#1E3A8A', color: '#fff', letterSpacing: '0.01em' }}
            >
              Start a Project
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg border-0 cursor-pointer"
          style={{ background: open ? '#1E3A8A' : 'rgba(30,58,138,0.08)', color: open ? '#fff' : '#1E3A8A' }}
          onClick={() => setOpen((v) => !v)}
        >
          <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} style={{ fontSize: '18px' }} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden border-t absolute left-0 right-0 top-full shadow-xl"
          style={{ background: '#F8FAFC', borderTopColor: '#E2E8F0', maxHeight: 'calc(100vh - 72px)', overflowY: 'auto' }}
        >
          <ul className="list-none m-0 p-4 flex flex-col gap-1">
            {links.map((l) => {
              const active = l.match(location.pathname)
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="block no-underline rounded-xl px-4 py-3.5 text-[15px] font-semibold"
                    style={{
                      color: active ? '#1E3A8A' : '#0F172A',
                      background: active ? 'rgba(30,58,138,0.08)' : 'transparent',
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              )
            })}
            <li className="pt-2">
              <Link
                to="/contact"
                className="block text-center no-underline rounded-xl px-4 py-3.5 text-[15px] font-bold"
                style={{ background: '#1E3A8A', color: '#fff' }}
              >
                Start a Project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
