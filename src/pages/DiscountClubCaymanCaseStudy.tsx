import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'

export default function DiscountClubCaymanCaseStudy() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Membership Platform · Fintech"
      headline={<>Discount Club Cayman —<br />Membership Savings Platform</>}
      subhead="A full-stack membership platform delivering up to 70% travel savings, 10–25% local merchant discounts, and redeemable certificates to Cayman Island residents."
      metrics={[
        { value: 'US$119.99', label: 'Membership that pays for itself' },
        { value: '$2,600–$3,900+', label: 'Annual member savings' },
        { value: '70%', label: 'Hotel savings vs public rates' },
        { value: '$1,000', label: 'Annual certificate value' },
      ]}
      metaItems={[
        { label: 'Category', value: 'Membership Platform · Fintech' },
        { label: 'Role', value: 'Lead Full-Stack Engineer' },
        { label: 'Stack', value: 'React · Node.js · TypeScript · Tailwind CSS' },
        { label: 'Status', value: 'Live · discountclubcayman.com' },
      ]}
      projectDetails={[
        { label: 'Client', value: 'Discount Club Cayman' },
        { label: 'Type', value: 'Membership · Fintech' },
        { label: 'Engagement', value: 'Full-Stack Engineer' },
        { label: 'Stack', value: 'React · Node.js · TypeScript' },
        { label: 'Status', value: 'live' },
      ]}
      breadcrumbLabel="Discount Club Cayman — Membership Savings Platform"
      overviewProblem="Discount Club Cayman needed a premium, conversion-focused membership platform that could handle three distinct savings verticals — global hotel rates, local Cayman merchant discounts, and redeemable certificates — all within a single authenticated member experience."
      overviewRole="I engineered the full platform — from the marketing site through to the authenticated member dashboard. I designed the information architecture to support three distinct savings categories with clear value communication at every stage of the funnel."
      archTitle="Architecture Overview"
      archSubhead="A secure, conversion-optimised membership platform with three savings verticals and a fully authenticated member area."
      archCards={[
        { num: 'Layer 01 —', icon: 'fa-palette', title: 'Marketing Funnel', desc: 'Dark premium marketing site built with React and Tailwind. Playfair Display serif headings, DM Sans body, gold accent. Animated entrance effects and savings calculators built to convert.' },
        { num: 'Layer 02 —', icon: 'fa-lock', title: 'Authentication System', desc: 'Secure login and signup flow with protected member routes. JWT-based session management. Members access exclusive hotel rates and local deals only after authenticated entry.' },
        { num: 'Layer 03 —', icon: 'fa-tags', title: 'Savings Engine', desc: 'Three savings verticals: global hotel rates API integration, local merchant discount catalogue, and redeemable certificate management.' },
        { num: 'Layer 04 —', icon: 'fa-mobile-screen-button', title: 'Digital Redemption', desc: 'Swipe-to-redeem digital flow for local merchants. No physical card required. Certificate management with $25/$50/$100 tiers and merchant partner tracking.' },
      ]}
      codeFilename="savings-engine.ts"
      codeLines={[
        [<><span className="c-keyword">interface</span> <span className="c-type">MemberSavingsProfile</span> {'{'}</>, '01'],
        [<>&nbsp;&nbsp;<span className="c-param">memberId</span>: <span className="c-type">string</span>;</>, '02'],
        [<>&nbsp;&nbsp;<span className="c-param">tier</span>: <span className="c-string">'standard'</span> | <span className="c-string">'premium'</span>;</>, '03'],
        [<>&nbsp;&nbsp;<span className="c-param">certificateBalance</span>: <span className="c-type">number</span>;</>, '04'],
        [<>{'}'}</>, '05'],
        [<>&nbsp;</>, '06'],
        [<><span className="c-keyword">async function</span> <span className="c-func">calculateMemberSavings</span>(</>, '07'],
        [<>&nbsp;&nbsp;<span className="c-param">member</span>: <span className="c-type">MemberSavingsProfile</span>,</>, '08'],
        [<>&nbsp;&nbsp;<span className="c-param">vertical</span>: <span className="c-string">'hotel'</span> | <span className="c-string">'local'</span> | <span className="c-string">'certificate'</span></>, '09'],
        [<>): <span className="c-type">Promise</span>&lt;<span className="c-type">SavingsResult</span>&gt; {'{'}</>, '10'],
        [<>&nbsp;&nbsp;<span className="c-keyword">const</span> <span className="c-param">discountMap</span> = {'{'}</>, '11'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-param">hotel</span>: {'{ '}<span className="c-param">standard</span>: <span className="c-num">0.50</span>, <span className="c-param">premium</span>: <span className="c-num">0.70</span> {'}'},</>, '12'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-param">local</span>: {'{ '}<span className="c-param">standard</span>: <span className="c-num">0.10</span>, <span className="c-param">premium</span>: <span className="c-num">0.25</span> {'}'},</>, '13'],
        [<>&nbsp;&nbsp;{'}'};</>, '14'],
        [<>&nbsp;&nbsp;<span className="c-keyword">const</span> <span className="c-param">rate</span> = <span className="c-param">discountMap</span>[<span className="c-param">vertical</span>][<span className="c-param">member</span>.<span className="c-param">tier</span>];</>, '15'],
        [<>&nbsp;&nbsp;<span className="c-keyword">return</span> {'{ '}<span className="c-param">rate</span>, <span className="c-gold">computeAnnualSavings</span>(<span className="c-param">rate</span>) {'}'};</>, '16'],
        [<>{'}'}</>, '17'],
      ]}
      pullQuote='"The design had to work as hard as the engineering. A membership that saves you $3,900 a year has to feel premium before you hand over your credit card."'
      decisionCards={[
        { num: '01 —', title: 'Premium Dark Aesthetic', desc: 'Playfair Display serif headings, a deep navy background, and gold accents was a conversion decision. Members paying ~$120/year need to feel they are buying something premium.' },
        { num: '02 —', title: 'Three-Vertical Data Architecture', desc: 'Travel, local discounts, and certificates are modelled as separate services with a unified member API layer — letting each vertical scale independently.' },
        { num: '03 —', title: 'Digital-First Redemption', desc: 'Eliminating physical cards and building a swipe-to-redeem digital flow reduced onboarding friction and made the product work globally for travel savings.' },
      ]}
      resultCards={[
        { value: 'Live', label: 'Full platform in production' },
        { value: '3 Verticals', label: 'Travel + Local + Certificates' },
        { value: 'US$3,900+', label: 'Annual savings per member' },
        { value: 'Secure Auth', label: 'Full member area + protected routes' },
      ]}
      resultBody="Discount Club Cayman is live at discountclubcayman.com. The platform serves Cayman Island residents with a complete savings ecosystem — global hotel rates up to 70% off, local merchant discounts, and $1,000 in annual redeemable certificates."
      founderNote1="Discount Club Cayman is not a simple discount site — it is a financial product with a value proposition that has to be communicated clearly and trusted immediately."
      founderNote2="The gold premium aesthetic, the savings number front and centre, the certificate tiers — every decision was engineered for conversion and retention."
      nextCaseTitle="Chef Academy of London — Culinary Platform"
      nextCaseDesc="A full-stack culinary education platform for professional chef training and course management."
      nextCaseLink="/work/chef-academy"
      accentColor="#3B82F6"
    />
  )
}
