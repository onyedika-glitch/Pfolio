import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'

export default function FloorhostingPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Web Hosting Platform"
      headline={<>Floorhosting —<br />Hosting Control Panel</>}
      subhead="A professional hosting management platform and control panel that allows users to manage hosting services, billing, and subscriptions with a clean, responsive interface."
      metrics={[
        { value: 'Multi-Page', label: 'Full Control Panel' },
        { value: '100%', label: 'Responsive Design' },
        { value: '6', label: 'Core Feature Modules' },
        { value: 'Live', label: 'floorhostings.vercel.app' },
      ]}
      metaItems={[
        { label: 'Category', value: 'Web Platform · SaaS UI' },
        { label: 'Role', value: 'Frontend Engineer' },
        { label: 'Stack', value: 'HTML5 · CSS3 · Vanilla JS · Tailwind CSS' },
        { label: 'Year', value: '2024' },
      ]}
      projectDetails={[
        { label: 'Client', value: 'Floorhosting' },
        { label: 'Type', value: 'Web Hosting Control Panel' },
        { label: 'Engagement', value: 'Frontend Engineer' },
        { label: 'Live', value: 'floorhostings.vercel.app' },
        { label: 'Status', value: 'live' },
      ]}
      breadcrumbLabel="Floorhosting — Hosting Control Panel"
      overviewProblem="Hosting customers needed a professional, intuitive control panel to manage their services, billing, and account settings. The goal was to build a fully responsive frontend that works seamlessly across devices while delivering a premium UI/UX."
      overviewRole="I built the complete frontend — a multi-page responsive control panel with authentication flows, service management, billing dashboards, and real-time user feedback."
      archTitle="Platform Architecture"
      archSubhead="A modular frontend architecture built with vanilla technologies."
      archCards={[
        { num: 'Layer 01 —', icon: 'fa-user-lock', title: 'Authentication Module', desc: 'User registration, secure login/logout flows, password management, and profile customization.' },
        { num: 'Layer 02 —', icon: 'fa-server', title: 'Service Management', desc: 'Dashboard for viewing active services, renewing subscriptions, and tracking real-time service status.' },
        { num: 'Layer 03 —', icon: 'fa-credit-card', title: 'Billing & Payments', desc: 'Billing history viewer with multiple payment methods and downloadable invoices.' },
        { num: 'Layer 04 —', icon: 'fa-mobile-screen', title: 'Responsive UI Layer', desc: 'Mobile, tablet, and desktop optimized interface with real-time form validation.' },
      ]}
      codeFilename="js/app.js"
      codeLines={[
        ['// Form validation — real-time user feedback', '01'],
        ['function validateField(input) {', '02'],
        ['  const value = input.value.trim();', '03'],
        ['  const error = getValidationError(input.name, value);', '04'],
        ['  if (error) {', '05'],
        ['    showError(input, error);', '06'],
        ['    return false;', '07'],
        ['  }', '08'],
        ['  clearError(input);', '09'],
        ['  return true;', '10'],
        ['}', '11'],
      ]}
      pullQuote="A hosting control panel has to inspire trust from the first click. Clean UI, fast feedback, and zero friction — that was the design principle for every screen."
      decisionCards={[
        { num: '01 —', title: 'Vanilla JS over Frameworks', desc: 'Chose vanilla JavaScript and Tailwind CSS to keep the bundle minimal and avoid framework overhead.' },
        { num: '02 —', title: 'Mobile-First Responsive', desc: 'Designed mobile-first to ensure hosting customers managing services on-the-go have a seamless experience.' },
        { num: '03 —', title: 'localStorage for Demo Mode', desc: 'Used localStorage API for demo data persistence, allowing users to explore features without backend setup.' },
      ]}
      resultCards={[
        { value: '100%', label: 'Responsive across all devices' },
        { value: '6', label: 'Feature modules delivered' },
        { value: '0', label: 'Third-party UI dependencies' },
        { value: 'Live', label: 'Deployed on Vercel' },
      ]}
      resultBody="Floorhosting is live at floorhostings.vercel.app, serving as a fully functional hosting management demo with authentication, service management, and billing."
      founderNote1="Building a hosting control panel from scratch with vanilla JavaScript taught me that you don't need a framework to build something professional."
      founderNote2="Every feature — authentication, billing, service management — was built with the same care I bring to enterprise React applications."
      nextCaseTitle="Handyman NG — Service Marketplace"
      nextCaseDesc="Service marketplace connecting skilled professionals with clients in Nigeria."
      nextCaseLink="/work/handyman-ng"
      accentColor="#0891B2"
      codeBg="#071923"
    />
  )
}
