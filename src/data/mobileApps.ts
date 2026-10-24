export type MobileApp = {
  slug: string
  name: string
  platform: string
  blurb: string
  caseStudy?: string
  // Store graphics already include a device frame and caption; raw captures need one drawn around them.
  framed: boolean
  screens: { src: string; alt: string }[]
}

const dir = (slug: string) => `/assets/apps/${slug}`

export const mobileApps: MobileApp[] = [
  {
    slug: 'japa-coach',
    name: 'Japa Coach',
    platform: 'Flutter · Android',
    blurb: 'IELTS practice with an AI examiner. You speak your answers out loud and get a band score with specific fixes in minutes.',
    caseStudy: '/work/japa-coach',
    framed: false,
    screens: [
      { src: `${dir('japa-coach')}/01-speaking-test.jpg`, alt: 'Japa Coach speaking test question' },
      { src: `${dir('japa-coach')}/02-speaking-report.jpg`, alt: 'Japa Coach speaking band report' },
      { src: `${dir('japa-coach')}/03-corrections.jpg`, alt: 'Japa Coach sentence corrections' },
      { src: `${dir('japa-coach')}/04-writing.jpg`, alt: 'Japa Coach timed essay writing' },
      { src: `${dir('japa-coach')}/05-reading.jpg`, alt: 'Japa Coach reading test' },
      { src: `${dir('japa-coach')}/06-dashboard.jpg`, alt: 'Japa Coach progress dashboard' },
    ],
  },
  {
    slug: 'dcc-member',
    name: 'Discount Club Cayman: Member App',
    platform: 'Flutter · Android & iOS',
    blurb: 'Members find local deals across the Cayman Islands, buy gift certificates, book travel, and show a QR membership card at the till.',
    caseStudy: '/work/discount-club-cayman',
    framed: true,
    screens: [
      ['01-onboarding', 'onboarding'],
      ['02-home', 'home screen with categories and featured businesses'],
      ['03-business', 'business page with its offers'],
      ['04-offers', 'offers and discounts list'],
      ['05-certificates', 'purchased gift certificates'],
      ['06-travel', 'travel deals'],
      ['07-membership-card', 'digital membership card with QR code'],
      ['08-savings', 'savings analytics'],
    ].map(([file, label]) => ({ src: `${dir('dcc-member')}/${file}.jpg`, alt: `Discount Club Cayman member app: ${label}` })),
  },
  {
    slug: 'dcc-business',
    name: 'Discount Club Cayman: Business App',
    platform: 'Flutter · Android & iOS',
    blurb: 'The partner side: businesses scan member QR codes, create offers, and see their sales and redemptions in real time.',
    caseStudy: '/work/discount-club-cayman',
    framed: true,
    screens: [
      ['01-onboarding', 'onboarding'],
      ['02-dashboard', 'business dashboard'],
      ['03-offers', 'managing offers'],
      ['04-analytics', 'performance analytics'],
      ['05-profile', 'business profile'],
    ].map(([file, label]) => ({ src: `${dir('dcc-business')}/${file}.jpg`, alt: `Discount Club Cayman business app: ${label}` })),
  },
  {
    slug: 'gigora-network',
    name: 'Gigora Network',
    platform: 'Flutter · Android',
    blurb: 'Find remote work or hire vetted freelancers, then get paid milestone by milestone with the money held safely in escrow.',
    caseStudy: '/work/gigora-network',
    framed: false,
    screens: [
      'Remote jobs feed',
      'Tracking a job application',
      'All applications in one place',
      'Browsing verified freelancers',
      'Delivering a project milestone',
      'Approving delivered work',
      'Escrow-protected payments',
      'Chatting with a client',
    ].map((label, i) => ({ src: `${dir('gigora-network')}/screenshot-${i + 1}.jpg`, alt: `Gigora Network: ${label.toLowerCase()}` })),
  },
]
