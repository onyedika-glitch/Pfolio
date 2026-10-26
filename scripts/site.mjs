/**
 * Every public page on the site with its search-facing metadata. Read by the
 * HTML prerender (scripts/prerender.mjs), the markdown/llms.txt generator
 * (scripts/markdown/build.mjs) and checked against vercel.json, so a new page
 * only needs adding here (plus its route in src/App.tsx).
 */
export const BASE = 'https://devomogo.tech'
const img = (name) => `${BASE}/assets/${name}`

const projectItems = [
  ['Japa Coach: AI IELTS Practice', '/work/japa-coach'],
  ['YouExtractor: Tutorial to Course & Code Generator', '/work/youextractor'],
  ['Gigora Network: Freelance Marketplace', '/work/gigora-network'],
  ['Discount Club Cayman: Membership Platform', '/work/discount-club-cayman'],
  ['SSABHI: Brain Health Initiative', '/work/ssabhi'],
  ['Sparks Ventures Hub: Business Incubation Hub', '/work/sparks-ventures'],
  ['Sparks EFP: 4-Week Foundation Programme', '/work/sparks-efp'],
  ['Sparks Ventures Hub: Lead Funnel', '/work/sparks-funnel'],
  ['Sadar Properties: Wholesaling Toolkit', '/work/sadar-properties'],
]

const serviceItems = [
  ['Full-Stack Architecture', '/services/fullstackarchitecture'],
  ['Fintech Systems', '/services/fintechsystems'],
  ['Healthcare & Nonprofits', '/services/healthcareplatforms'],
  ['AI Integration', '/services/aiintegration'],
]

export const routes = [
  {
    path: '/',
    title: 'DevOmogo | Senior Software Infrastructure Engineer | Fintech, Healthcare & AI Systems',
    description: 'Omogo Peter Onyedika is a Senior Software Infrastructure Engineer building production systems across fintech, healthcare, AI, marketplaces and web platforms, including YouExtractor, Gigora Network and Sadar Properties.',
    keywords: 'software engineering, full-stack developer, fintech development, healthcare platform development, AI integration, Laravel developer, React developer, Nigeria software engineer, DevOmogo',
    image: `${BASE}/og-image.jpg`,
    jsonLd: { '@context': 'https://schema.org', '@type': 'WebSite', name: 'DevOmogo', url: BASE, description: 'Portfolio of Omogo Peter Onyedika, a software engineer building fintech, healthcare, AI and web platforms.' },
  },
  {
    path: '/work',
    title: 'Work & Case Studies | DevOmogo | Fintech, Healthcare, AI, Marketplace, Real Estate',
    description: 'Production systems built by Omogo Peter Onyedika: AI developer tools, freelance marketplaces, fintech platforms, healthcare systems, incubation hubs, and real estate tools, each with a live site and full case study.',
    keywords: 'portfolio, case studies, fintech platform development, healthcare system development, AI tool development, marketplace development, Laravel, React, NestJS',
    image: `${BASE}/og-image.jpg`,
    jsonLd: { '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: projectItems.map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, url: BASE + p })) },
  },
  {
    path: '/services',
    title: 'Services | Full-Stack, Fintech, Healthcare & AI Development | DevOmogo',
    description: 'What Omogo Peter Onyedika builds: full-stack architecture (Laravel, React, NestJS), fintech systems (Stripe, Paystack, ledgers), healthcare and nonprofit websites, and AI integration (LLM pipelines).',
    keywords: 'full-stack development services, fintech development, healthcare software development, AI integration, Laravel, React, NestJS, Node.js',
    image: `${BASE}/og-image.jpg`,
    jsonLd: { '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: serviceItems.map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, url: BASE + p })) },
  },
  {
    path: '/tech-stack',
    title: 'Tech Stack | Laravel, React, NestJS, Node.js, PostgreSQL, MySQL, MongoDB | DevOmogo',
    description: 'The tools Omogo Peter Onyedika builds with: Laravel, PHP, NestJS, Node.js/Express, React + Vite + TypeScript, Flutter, Expo, PostgreSQL, MySQL, MongoDB, Stripe, Paystack, Docker, Vercel, and Render.',
    keywords: 'tech stack, Laravel, React, NestJS, Node.js, TypeScript, Flutter, PostgreSQL, MySQL, MongoDB, Stripe, Paystack',
    image: `${BASE}/og-image.jpg`,
  },
  {
    path: '/team',
    title: 'About | Omogo Peter Onyedika, Senior Software Infrastructure Engineer | DevOmogo',
    description: 'Omogo Peter Onyedika is a Senior Software Infrastructure Engineer and the founder of Japa Coach, YouExtractor, Gigora Network and Sadar Properties.',
    keywords: 'Omogo Peter Onyedika, software engineer, founder, DevOmogo, senior software infrastructure engineer',
    image: `${BASE}/og-image.jpg`,
    jsonLd: { '@context': 'https://schema.org', '@type': 'Person', name: 'Omogo Peter Onyedika', jobTitle: 'Senior Software Infrastructure Engineer', url: `${BASE}/team`, sameAs: ['https://github.com/onyedika-glitch', 'https://x.com/peteromogo2'] },
  },
  {
    path: '/contact',
    title: 'Contact Omogo Peter Onyedika | Start a Project | DevOmogo',
    description: 'Get in touch with Omogo Peter Onyedika to start a project: email omogopeter@devomogo.tech. Full-stack, fintech, healthcare and AI development.',
    keywords: 'contact DevOmogo, start a project, hire software engineer, omogopeter@devomogo.tech',
    image: `${BASE}/og-image.jpg`,
  },
  {
    path: '/services/fullstackarchitecture',
    title: 'Full-Stack Architecture | Laravel, React, NestJS, Node.js Development | DevOmogo',
    description: 'End-to-end full-stack development with the stack Omogo Peter Onyedika actually ships: Laravel, NestJS, Node.js, React + TypeScript, Flutter, Expo, PostgreSQL, MySQL, MongoDB, Stripe, and Paystack.',
    keywords: 'full-stack developer, Laravel development, React development, NestJS, Node.js developer, PostgreSQL, web application development',
    image: `${BASE}/og-image.jpg`,
  },
  {
    path: '/services/fintechsystems',
    title: 'Fintech Systems Development | Payments, Ledgers, Stripe, Paystack | DevOmogo',
    description: 'Fintech platform development by Omogo Peter Onyedika: payment integration (Stripe, PayPal, Paystack), membership and billing platforms, real-time equity systems, and secure transaction flows.',
    keywords: 'fintech development, payment integration, Stripe developer, Paystack, membership platform, real-time WebSocket, MongoDB, MySQL',
    image: `${BASE}/og-image.jpg`,
  },
  {
    path: '/services/healthcareplatforms',
    title: 'Healthcare & Nonprofit Websites | WordPress, Membership, Programmes | DevOmogo',
    description: 'Websites for health organisations and nonprofits by Omogo Peter Onyedika: membership and registration, programme and webinar pages, forms, jobs and content your team can edit.',
    keywords: 'healthcare website development, nonprofit website, WordPress developer, Elementor, membership website, Fluent Forms',
    image: `${BASE}/og-image.jpg`,
  },
  {
    path: '/services/aiintegration',
    title: 'AI Integration & LLM Pipelines | Laravel, DeepSeek, Claude, Gemini, GPT-4 | DevOmogo',
    description: 'AI-powered product development: pluggable LLM pipelines, tutorial-to-code generation, AI talent matching, and practical AI features in production (Laravel, DeepSeek, Claude, Gemini, GPT-4).',
    keywords: 'AI development, LLM integration, Laravel AI, DeepSeek, Claude, Gemini, GPT-4, AI matching',
    image: `${BASE}/og-image.jpg`,
  },
  {
    path: '/work/youextractor',
    title: 'YouExtractor: Tutorial to Course & Code Generator | Case Study | DevOmogo',
    description: 'A Laravel platform that turns YouTube coding tutorials into structured written guides and complete, runnable code projects using AI: DeepSeek, Claude, Gemini, and GPT-4.',
    keywords: 'YouExtractor, YouTube tutorial to code, AI course generator, Laravel AI, LLM extraction',
    image: img('youextractor_llm_ai_pipeline_dark_dashboard.jpg'),
  },
  {
    path: '/work/gigora-network',
    title: 'Gigora Network: Freelance Marketplace | Case Study | DevOmogo',
    description: 'A full-featured freelance marketplace built with Laravel 13, PostgreSQL, Cloudinary, and Resend: vetted talent, projects and proposals, real-time messaging, escrow, and AI talent matching.',
    keywords: 'freelance marketplace development, Gigora Network, Laravel marketplace, escrow platform, AI talent matching',
    image: img('fintech_dashboard_dark_ui.jpg'),
  },
  {
    path: '/work/discount-club-cayman',
    title: 'Discount Club Cayman: Membership Platform | Case Study | DevOmogo',
    description: 'Membership-based discount and benefits platform for the Cayman Islands: role-based dashboards, Stripe and PayPal billing, digital QR membership, certificates, and travel deals.',
    keywords: 'membership platform development, discount platform, Stripe developer, QR membership card, Flutter app',
    image: img('discount_club_cayman_membership_savings_platform_dashboard_amber.jpg'),
  },
  {
    path: '/work/ssabhi',
    title: 'SSABHI: Brain Health Initiative | Case Study | DevOmogo',
    description: 'WordPress feature work on a live nonprofit: membership, programs, jobs, and Elementor pages for the Sub-Saharan Africa Brain Health Initiative.',
    keywords: 'WordPress nonprofit, SSABHI, brain health, Elementor, Fluent Forms, fullstack WordPress developer',
    image: img('ssabhi_brain_health_initiative_wordpress_teal.jpg'),
  },
  {
    path: '/work/sparks-ventures',
    title: 'Sparks Ventures Hub: Business Incubation Hub | Case Study | DevOmogo',
    description: 'WordPress feature work on a live business incubation hub: Tutor LMS academy, WooCommerce courses, Elementor program pages, and events.',
    keywords: 'WordPress incubation hub, Tutor LMS, WooCommerce, Elementor, business incubation, Sparks Ventures Hub',
    image: img('sparks_ventures_hub_startup_accelerator_saas_dashboard_amber.jpg'),
  },
  {
    path: '/work/sparks-efp',
    title: 'Sparks EFP: 4-Week Foundation Programme | Case Study | DevOmogo',
    description: 'A Laravel landing page for Sparks Entrepreneurship Foundation Programme: four-week virtual curriculum (Discover, Build, Launch), graduation package, and Paystack checkout.',
    keywords: 'Sparks EFP, four-week entrepreneurship programme, Laravel landing page, Paystack, virtual foundation programme',
    image: img('sparksefp.jpg'),
  },
  {
    path: '/work/sparks-funnel',
    title: 'Sparks Ventures Hub: Lead Funnel | Case Study | DevOmogo',
    description: 'A Laravel marketing funnel for Sparks Ventures Hub: service pages, lead capture, consultation bookings, Paystack payments, and an admin dashboard.',
    keywords: 'marketing funnel development, lead capture, Paystack developer, consultation booking, Laravel funnel',
    image: img('sparksfunnel.jpg'),
  },
  {
    path: '/work/sadar-properties',
    title: 'Sadar Properties: Wholesaling Toolkit | Case Study | DevOmogo',
    description: 'Real estate wholesaling toolkit with a React dashboard, Express + PostgreSQL backend, deal math, buyer matching, and CSV/Excel import-export. Founded.',
    keywords: 'real estate CRM, wholesaling software, React dashboard, Express PostgreSQL, deal calculator, buyer matching',
    image: img('sadar_properties_real_estate_wholesaling_crm_dashboard_warm_brown.jpg'),
  },
  {
    path: '/work/japa-coach',
    title: 'Japa Coach: AI IELTS Practice | Case Study | DevOmogo',
    description: 'AI IELTS practice platform for Nigerians: spoken speaking tests marked by AI, writing feedback, full reading and listening tests. Laravel, Vue, Flutter Android app, self-hosted Whisper speech service. Founded.',
    keywords: 'AI IELTS app, speech recognition, Whisper, Laravel, Vue, Flutter, EdTech, Nigeria, Google Play Billing',
    image: img('japa_coach_ai_ielts_practice_app_teal.jpg'),
  },
]

/** Who runs the site; used in llms.txt and ai.txt. */
export const site = {
  name: 'DevOmogo',
  description: 'Portfolio of Omogo Peter Onyedika, a Senior Software Infrastructure Engineer building fintech, healthcare, AI, marketplace and web platforms, and founder of Japa Coach, YouExtractor, Gigora Network and Sadar Properties.',
  facts: 'Based in Nigeria and works with clients worldwide. Takes on a few projects at a time and writes the code himself.',
  email: 'omogopeter@devomogo.tech',
  github: 'https://github.com/onyedika-glitch',
}

/** URL of the markdown version of a page: /index.md for the home page, /<path>.md otherwise. */
export const markdownPath = (path) => (path === '/' ? '/index.md' : `${path}.md`)
