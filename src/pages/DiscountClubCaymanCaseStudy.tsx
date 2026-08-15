import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'

export default function DiscountClubCaymanCaseStudy() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Membership Platform · Fintech"
      headline={<>Discount Club Cayman<br />Membership Discounts Platform</>}
      subhead="A membership-based discount and benefits platform for the Cayman Islands: role-based dashboards, Stripe and PayPal billing, digital QR membership, certificates, and travel deals."
      metrics={[
        { value: '5', label: 'User roles' },
        { value: '$119.99/yr', label: 'Individual plan' },
        { value: 'Stripe', label: 'Card payments' },
        { value: 'QR', label: 'Digital membership' },
      ]}
      metaItems={[
        { label: 'Category', value: 'Membership Platform · Fintech' },
        { label: 'Role', value: 'Full-Stack Engineer' },
        { label: 'Stack', value: 'React 19 · Vite · Express 5 · MongoDB · Stripe · PayPal' },
        { label: 'Mobile', value: 'Flutter member & business apps' },
      ]}
      projectDetails={[
        { label: 'Client', value: 'Discount Club Cayman' },
        { label: 'Type', value: 'Membership Platform' },
        { label: 'Role', value: 'Full-Stack Engineer' },
        { label: 'Status', value: 'live' },
      ]}
      breadcrumbLabel="Discount Club Cayman: Membership Discounts Platform"
      overviewProblem="Businesses in the Cayman Islands had no single way to reach paying members with discount offers, and members had no easy, trusted way to redeem them in-store."
      overviewRole="I built the platform end-to-end: role-based sign-up and login, a Stripe membership sign-up flow plus PayPal subscriptions, a rotating digital QR membership card, certificate issuance with QR-scan redemption, a travel deals marketplace, a business directory, and an admin dashboard with stats."
      archTitle="Architecture Overview"
      archSubhead="An Express + MongoDB API with a React frontend and companion Flutter apps."
      archCards={[
        { num: 'Layer 01', icon: 'fa-user-shield', title: 'Role System', desc: 'Member, employer, business, association, B2B, and admin roles — each with its own sign-up path and dashboard.' },
        { num: 'Layer 02', icon: 'fa-credit-card', title: 'Membership & Payments', desc: 'Stripe PaymentIntent flow for individual/family plans ($119.99/yr and $300/yr) plus PayPal orders for post-signup subscriptions.' },
        { num: 'Layer 03', icon: 'fa-qrcode', title: 'Certificates & QR', desc: 'Auto-generated certificate codes and QR data; members present a rotating QR card in-store and businesses scan to verify and redeem.' },
        { num: 'Layer 04', icon: 'fa-plane', title: 'Travel & Directory', desc: 'Travel deals across hotels, flights, car rentals, activities, and packages, plus a searchable business directory and category pages.' },
      ]}
      codeFilename="Backend/models/Certificate.js"
      codeLines={[
        ['const certificateSchema = new mongoose.Schema({', '01'],
        ['  code: {', '02'],
        ['    type: String,', '03'],
        ['    unique: true,', '04'],
        ['    default: () => crypto.randomBytes(6).toString(\'hex\').toUpperCase(),', '05'],
        ['  },', '06'],
        ['  user: { type: mongoose.Schema.Types.ObjectId, ref: \'User\', required: true },', '07'],
        ['  business: { type: mongoose.Schema.Types.ObjectId, ref: \'Business\', required: true },', '08'],
        ['  discount: { type: mongoose.Schema.Types.ObjectId, ref: \'Discount\', required: true },', '09'],
        ['  qrData: { type: String },', '10'],
        ['  status: {', '11'],
        ['    type: String,', '12'],
        ['    enum: [\'active\', \'redeemed\', \'expired\'],', '13'],
        ['    default: \'active\',', '14'],
        ['  },', '15'],
        ['  expiresAt: { type: Date },', '16'],
        ['  redeemedAt: { type: Date },', '17'],
        ['});', '18'],
      ]}
      pullQuote="A membership card that lives on your phone and verifies in-store with a QR scan is what makes the discount actually usable."
      decisionCards={[
        { num: '01', title: 'Stripe at Sign-Up', desc: 'Membership payment happens during registration: create a PaymentIntent, confirm the card, verify it, then create the user and activate membership.' },
        { num: '02', title: 'QR-First Redemption', desc: 'Certificates carry unique codes and QR data; businesses verify and redeem by scanning, with expiry handled server-side.' },
      ]}
      resultCards={[
        { value: '5+', label: 'User roles & dashboards' },
        { value: 'QR', label: 'In-store redemption' },
        { value: 'Stripe+PayPal', label: 'Payment rails' },
        { value: 'Flutter', label: 'Member + business apps' },
      ]}
      resultBody="Discount Club Cayman is live at discountclubcayman.com — memberships, discount offers, certificates, travel deals, and a full admin dashboard."
      founderNote1="The platform had to work for five different audiences without becoming five different products — the role system kept it to one codebase."
      founderNote2="Certificate redemption was the feature that mattered most: an offline-friendly, scan-to-verify flow businesses actually use."
      nextCaseTitle="Zentrix Equity: Cap Table Platform"
      nextCaseDesc="Real-time equity and valuation platform on a WebSocket server."
      nextCaseLink="/work/zentrix-equity"
      accentColor="#B45309"
      codeBg="#1A0800"
    />
  )
}
