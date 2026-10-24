import React from 'react'
import ServiceLayout from '../components/ServiceLayout'
import { INK, PINK, card, glass, Heading } from '../components/ui'

const stack = [
  { cat: 'Frontend & mobile', icon: 'fa-display', items: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Blade + Alpine.js', 'Flutter', 'Expo React Native', 'Capacitor'] },
  { cat: 'Backend', icon: 'fa-server', items: ['Laravel (PHP 8)', 'WordPress', 'NestJS', 'Node.js (Express)', 'REST APIs', 'Socket.io (WebSockets)'] },
  { cat: 'Databases', icon: 'fa-database', items: ['PostgreSQL', 'MySQL', 'MongoDB (Mongoose)', 'TypeORM', 'Eloquent', 'Supabase'] },
  { cat: 'Auth & payments', icon: 'fa-lock', items: ['JWT', 'Laravel Sanctum', 'OAuth 2.0', 'Google + Facebook Login', 'Stripe', 'PayPal'] },
  { cat: 'Deployment', icon: 'fa-cloud', items: ['Docker', 'Docker Compose', 'Vercel', 'Render', 'Hostinger VPS', 'Cloudinary', 'Resend'] },
]

export default function FullStackArchitecturePage() {
  return (
    <ServiceLayout
      seo={{
        title: 'Full-Stack Architecture | Laravel, React, NestJS, Node.js Development | DevOmogo',
        description: 'End-to-end full-stack development with the stack Omogo Peter Onyedika actually ships: Laravel, NestJS, Node.js, React + TypeScript, Flutter, Expo, PostgreSQL, MySQL, MongoDB, Stripe, and Paystack.',
        keywords: 'full-stack developer, Laravel development, React development, NestJS, Node.js developer, PostgreSQL, web application development',
      }}
      name="Full-Stack Architecture"
      icon="fa-layer-group"
      headline={<>From the database to the buttons your users tap.</>}
      intro="Every project on this site I built end to end: Laravel and NestJS backends, React + TypeScript frontends, Flutter and Expo mobile apps, on PostgreSQL, MySQL and MongoDB."
      whatYouGet={[
        'Full-stack apps in the stacks I actually ship with',
        'Typed backends (NestJS/TypeScript) or structured PHP (Laravel) with migrations and seeders',
        'React + Vite + TypeScript frontends with Tailwind CSS',
        'Mobile apps with Flutter and Expo React Native, plus Capacitor web wrappers',
        'Payments (Stripe, PayPal), auth (JWT, Sanctum, OAuth 2.0), and real-time WebSockets',
        'Deployed on Docker, Vercel, Render, and Hostinger VPS',
      ]}
      tools={['Laravel', 'PHP', 'NestJS', 'Node.js', 'React', 'TypeScript', 'Flutter', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker']}
      approachHeading="How the shipped systems were built."
      story={[
        "The stack on this page isn't aspirational. It's what the projects in this portfolio actually run on. Laravel for structured, long-lived PHP applications. NestJS with TypeORM for typed, modular TypeScript backends. Express and Node.js for real-time WebSocket systems. React + Vite + TypeScript for the frontends, with Flutter and Expo for mobile.",
        'Data lives in PostgreSQL, MySQL, and MongoDB with real migrations, seeders, and connection pools tuned for production. Payments run through Stripe and PayPal, auth through JWT, Laravel Sanctum, and OAuth 2.0, and real-time features through Socket.io.',
      ]}
      approach={[
        { icon: 'fa-database', title: 'Schema and contracts first', desc: 'Migrations, data models, and API contracts are defined before the UI. From Mongoose schemas and TypeORM entities to Laravel migrations, the data layer drives the app.' },
        { icon: 'fa-lock', title: 'Auth and payments wired in', desc: 'JWT and Sanctum for sessions, OAuth 2.0 for social login, Stripe PaymentIntents and PayPal orders for money. Security decisions made at the start, not bolted on.' },
        { icon: 'fa-bolt', title: 'Real-time where it matters', desc: 'Socket.io WebSocket servers power live messaging (Gigora), replacing REST polling for the parts of the product that change constantly.' },
      ]}
      extra={
        <section style={glass}>
          <div className="site-container section-pad">
            <Heading>The stack the projects actually run on.</Heading>
            <div data-reveal-group className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-10">
              {stack.map((g) => (
                <div key={g.cat} data-reveal className="p-6" style={card}>
                  <div className="flex items-center gap-3 mb-4">
                    <div style={{ width: '36px', height: '36px', background: '#FDF2F8', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className={`fas ${g.icon}`} style={{ fontSize: '14px', color: PINK }}></i>
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: INK }}>{g.cat}</div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <span key={item} style={{ fontSize: '12px', fontWeight: 500, color: '#334155', background: '#F1F5F9', padding: '4px 10px', borderRadius: '100px' }}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
      related={['/work/youextractor', '/work/gigora-network', '/work/discount-club-cayman', '/work/sadar-properties', '/work/japa-coach']}
    />
  )
}
