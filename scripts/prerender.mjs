/**
 * Prerender static HTML per route with route-specific SEO head
 * (title, meta description/keywords, canonical, Open Graph, JSON-LD).
 *
 * Runs after `vite build`. Produces dist/<route>/index.html for every route,
 * so crawlers and social link previews (WhatsApp, LinkedIn, X, Facebook —
 * which don't execute JS) see the right head without running the SPA.
 *
 * The React app still loads and hydrates as usual on top of each file.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'

const BASE = 'https://devomogo.tech'
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const img = (name) => `${BASE}/assets/${name}`

const projectItems = [
  ['YouExtractor: Tutorial to Course & Code Generator', '/work/youextractor'],
  ['Gigora Network: Freelance Marketplace', '/work/gigora-network'],
  ['Discount Club Cayman: Membership Platform', '/work/discount-club-cayman'],
  ['Zentrix Equity: Equity & Valuation Platform', '/work/zentrix-equity'],
  ['Unlimited Healthcare: Management System', '/work/unlimited-healthcare'],
  ['Sparks Ventures Hub: Accelerator Ops Platform', '/work/sparks-ventures'],
  ['Sparks EFP: 3-Day Foundation Program', '/work/sparks-efp'],
  ['Sparks Ventures Hub: Lead Funnel', '/work/sparks-funnel'],
  ['Sadar Properties: Wholesaling Toolkit', '/work/sadar-properties'],
]

const serviceItems = [
  ['Full-Stack Architecture', '/services/fullstackarchitecture'],
  ['Fintech Systems', '/services/fintechsystems'],
  ['Healthcare Platforms', '/services/healthcareplatforms'],
  ['AI Integration', '/services/aiintegration'],
]

const routes = [
  {
    path: '/',
    title: 'DevOmogo — Senior Software Infrastructure Engineer | Fintech, Healthcare & AI Systems',
    description: 'DevOmogo is a senior engineering studio founded by Omogo Peter Onyedika, a Senior Software Infrastructure Engineer. Production systems across fintech, healthcare, AI, marketplaces, and web platforms — including YouExtractor, Gigora Network, and Sadar Properties.',
    keywords: 'software engineering, full-stack developer, fintech development, healthcare platform development, AI integration, Laravel developer, React developer, Nigeria software engineer, DevOmogo',
    image: `${BASE}/og-image.jpg`,
    jsonLd: { '@context': 'https://schema.org', '@type': 'WebSite', name: 'DevOmogo', url: BASE, description: 'Senior engineering studio building fintech, healthcare, AI, and web platforms.' },
  },
  {
    path: '/work',
    title: 'Work & Case Studies — DevOmogo | Fintech, Healthcare, AI, Marketplace, Real Estate',
    description: 'Production systems built by DevOmogo: AI developer tools, freelance marketplaces, fintech platforms, healthcare systems, accelerator operations, and real estate tools — each with a live site and full case study.',
    keywords: 'portfolio, case studies, fintech platform development, healthcare system development, AI tool development, marketplace development, Laravel, React, NestJS',
    image: `${BASE}/og-image.jpg`,
    jsonLd: { '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: projectItems.map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, url: BASE + p })) },
  },
  {
    path: '/services',
    title: 'Services — Full-Stack, Fintech, Healthcare & AI Development | DevOmogo',
    description: 'DevOmogo services: full-stack architecture (Laravel, React, NestJS), fintech systems (Stripe, Paystack, ledgers), healthcare platforms (appointments, HIPAA-aligned), and AI integration (LLM pipelines).',
    keywords: 'full-stack development services, fintech development, healthcare software development, AI integration, Laravel, React, NestJS, Node.js',
    image: `${BASE}/og-image.jpg`,
    jsonLd: { '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: serviceItems.map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, url: BASE + p })) },
  },
  {
    path: '/tech-stack',
    title: 'Tech Stack — Laravel, React, NestJS, Node.js, PostgreSQL, MySQL, MongoDB | DevOmogo',
    description: 'The technology stack DevOmogo ships with: Laravel, PHP, NestJS, Node.js/Express, React + Vite + TypeScript, Flutter, Expo, PostgreSQL, MySQL, MongoDB, Stripe, Paystack, Docker, Vercel, and Render.',
    keywords: 'tech stack, Laravel, React, NestJS, Node.js, TypeScript, Flutter, PostgreSQL, MySQL, MongoDB, Stripe, Paystack',
    image: `${BASE}/og-image.jpg`,
  },
  {
    path: '/team',
    title: 'The Team — Omogo Peter Onyedika, Founder & Senior Software Infrastructure Engineer | DevOmogo',
    description: 'DevOmogo was founded by Omogo Peter Onyedika, a Senior Software Infrastructure Engineer and founder of YouExtractor, Gigora Network, and Sadar Properties.',
    keywords: 'Omogo Peter Onyedika, software engineer, founder, DevOmogo, senior software infrastructure engineer',
    image: `${BASE}/og-image.jpg`,
    jsonLd: { '@context': 'https://schema.org', '@type': 'Person', name: 'Omogo Peter Onyedika', jobTitle: 'Senior Software Infrastructure Engineer', url: `${BASE}/team`, sameAs: ['https://github.com/onyedika-glitch', 'https://x.com/peteromogo2'] },
  },
  {
    path: '/contact',
    title: 'Contact DevOmogo — Start a Project | omogopeter@devomogo.tech',
    description: 'Contact DevOmogo to start a project: email omogopeter@devomogo.tech. Full-stack, fintech, healthcare, and AI development from a senior engineering studio.',
    keywords: 'contact DevOmogo, start a project, hire software engineer, omogopeter@devomogo.tech',
    image: `${BASE}/og-image.jpg`,
  },
  {
    path: '/services/fullstackarchitecture',
    title: 'Full-Stack Architecture — Laravel, React, NestJS, Node.js Development | DevOmogo',
    description: 'End-to-end full-stack development with the stack DevOmogo actually ships: Laravel, NestJS, Node.js, React + TypeScript, Flutter, Expo, PostgreSQL, MySQL, MongoDB, Stripe, and Paystack.',
    keywords: 'full-stack developer, Laravel development, React development, NestJS, Node.js developer, PostgreSQL, web application development',
    image: `${BASE}/og-image.jpg`,
  },
  {
    path: '/services/fintechsystems',
    title: 'Fintech Systems Development — Payments, Ledgers, Stripe, Paystack | DevOmogo',
    description: 'Fintech platform development by DevOmogo: payment integration (Stripe, PayPal, Paystack), membership and billing platforms, real-time equity systems, and secure transaction flows.',
    keywords: 'fintech development, payment integration, Stripe developer, Paystack, membership platform, real-time WebSocket, MongoDB, MySQL',
    image: `${BASE}/og-image.jpg`,
  },
  {
    path: '/services/healthcareplatforms',
    title: 'Healthcare Platform Development — Appointment Systems, NestJS, Mobile | DevOmogo',
    description: 'Healthcare management system development: appointment booking, recurring appointments and reminders, clinical modules, chat, and React web + Expo mobile apps on a NestJS backend.',
    keywords: 'healthcare software development, appointment booking system, NestJS, TypeORM, React, Expo, mobile healthcare app',
    image: `${BASE}/og-image.jpg`,
  },
  {
    path: '/services/aiintegration',
    title: 'AI Integration & LLM Pipelines — Laravel, DeepSeek, Claude, Gemini, GPT-4 | DevOmogo',
    description: 'AI-powered product development: pluggable LLM pipelines, tutorial-to-code generation, AI talent matching, and practical AI features in production (Laravel, DeepSeek, Claude, Gemini, GPT-4).',
    keywords: 'AI development, LLM integration, Laravel AI, DeepSeek, Claude, Gemini, GPT-4, AI matching',
    image: `${BASE}/og-image.jpg`,
  },
  {
    path: '/work/youextractor',
    title: 'YouExtractor: Tutorial to Course & Code Generator — Case Study | DevOmogo',
    description: 'A Laravel platform that turns YouTube coding tutorials into structured written guides and complete, runnable code projects using AI — DeepSeek, Claude, Gemini, and GPT-4.',
    keywords: 'YouExtractor, YouTube tutorial to code, AI course generator, Laravel AI, LLM extraction',
    image: img('youextractor_llm_ai_pipeline_dark_dashboard.jpg'),
  },
  {
    path: '/work/gigora-network',
    title: 'Gigora Network: Freelance Marketplace — Case Study | DevOmogo',
    description: 'A full-featured freelance marketplace built with Laravel 13, PostgreSQL, Cloudinary, and Resend: vetted talent, projects and proposals, real-time messaging, escrow, and AI talent matching.',
    keywords: 'freelance marketplace development, Gigora Network, Laravel marketplace, escrow platform, AI talent matching',
    image: img('fintech_dashboard_dark_ui.jpg'),
  },
  {
    path: '/work/discount-club-cayman',
    title: 'Discount Club Cayman: Membership Platform — Case Study | DevOmogo',
    description: 'Membership-based discount and benefits platform for the Cayman Islands: role-based dashboards, Stripe and PayPal billing, digital QR membership, certificates, and travel deals.',
    keywords: 'membership platform development, discount platform, Stripe developer, QR membership card, Flutter app',
    image: img('discount_club_cayman_membership_savings_platform_dashboard_amber.jpg'),
  },
  {
    path: '/work/zentrix-equity',
    title: 'Zentrix Equity: Equity & Valuation Platform — Case Study | DevOmogo',
    description: 'Real-time equity management and valuation platform on a Socket.io WebSocket server with a React 18 + TypeScript frontend and MySQL.',
    keywords: 'equity management platform, cap table, real-time WebSocket, Node.js developer, React TypeScript',
    image: img('zentrix_equity_cap_table_platform_realtime_fintech_indigo.jpg'),
  },
  {
    path: '/work/unlimited-healthcare',
    title: 'Unlimited Healthcare: Management System — Case Study | DevOmogo',
    description: 'Healthcare management system with a React + TypeScript web app, an Expo React Native mobile app, and a NestJS backend — appointments, recurring bookings, reminders, clinical modules, and chat.',
    keywords: 'healthcare management system, appointment booking system, NestJS developer, TypeORM, Expo mobile app',
    image: img('unlimited_healthcare_uhc_clinical_ai_mobile_app_teal.jpg'),
  },
  {
    path: '/work/sparks-ventures',
    title: 'Sparks Ventures Hub: Accelerator Ops Platform — Case Study | DevOmogo',
    description: 'A Laravel operations platform for an accelerator: leads, public applications, approvals, followups, onboarding programs, and vouchers.',
    keywords: 'accelerator platform, startup operations software, Laravel developer, lead management, application pipeline',
    image: img('sparks_ventures_hub_startup_accelerator_saas_dashboard_amber.jpg'),
  },
  {
    path: '/work/sparks-efp',
    title: 'Sparks EFP: 3-Day Foundation Program — Case Study | DevOmogo',
    description: 'A Laravel landing page for a three-day, hands-on foundation program that turns business ideas into validated, budgeted, pitched startups — with seat reservations.',
    keywords: 'program landing page, event registration, Laravel landing page, seat reservation, startup program',
    image: img('sparksefp.jpg'),
  },
  {
    path: '/work/sparks-funnel',
    title: 'Sparks Ventures Hub: Lead Funnel — Case Study | DevOmogo',
    description: 'A Laravel marketing funnel for Sparks Ventures Hub: service pages, lead capture, consultation bookings, Paystack payments, and an admin dashboard.',
    keywords: 'marketing funnel development, lead capture, Paystack developer, consultation booking, Laravel funnel',
    image: img('sparksfunnel.jpg'),
  },
  {
    path: '/work/sadar-properties',
    title: 'Sadar Properties: Wholesaling Toolkit — Case Study | DevOmogo',
    description: 'Real estate wholesaling toolkit with a React dashboard, Express + PostgreSQL backend, deal math, buyer matching, and CSV/Excel import-export. Founded.',
    keywords: 'real estate CRM, wholesaling software, React dashboard, Express PostgreSQL, deal calculator, buyer matching',
    image: img('sadar_properties_real_estate_wholesaling_crm_dashboard_warm_brown.jpg'),
  },
]

const template = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8')

function injectHead(html, route) {
  let out = html
  const url = BASE + (route.path === '/' ? '/' : route.path)
  const title = esc(route.title)
  const description = esc(route.description)
  const keywords = route.keywords ? esc(route.keywords) : route.keywords

  out = out.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
  out = out.replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
  if (keywords) {
    out = out.replace(/(<meta name="keywords" content=")[^"]*(")/, `$1${keywords}$2`)
  }
  out = out.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
  out = out.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
  out = out.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
  out = out.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`)
  out = out.replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${route.image}$2`)
  out = out.replace(/(<meta property="og:image:secure_url" content=")[^"]*(")/, `$1${route.image}$2`)
  if (route.jsonLd) {
    out = out.replace('</head>', `<script type="application/ld+json">${JSON.stringify(route.jsonLd)}</script>\n  </head>`)
  }
  return out
}

for (const route of routes) {
  const output = route.path === '/' ? 'dist/index.html' : join('dist', route.path, 'index.html')
  mkdirSync(dirname(output), { recursive: true })
  writeFileSync(output, injectHead(template, route))
  console.log(`prerendered ${route.path}`)
}
console.log(`\nDone — ${routes.length} routes prerendered.`)
