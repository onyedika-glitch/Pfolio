import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function SparksVenturesPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Startup Accelerator"
      headline={<>Sparks Ventures Hub —<br />Accelerator Platform</>}
      subhead="Unified platform for accelerators and founders with KPI tracking and funding round management."
      metrics={[{ value:'Accelerator', label:'Founder Platform' },{ value:'KPI', label:'Real-Time Tracking' },{ value:'Secure', label:'Pitch Decks' },{ value:'Live', label:'sparksventureshub.com' }]}
      metaItems={[{ label:'Category', value:'Startup Accelerator' },{ label:'Stack', value:'WordPress · Custom Theme · PHP · JavaScript' }]}
      projectDetails={[{ label:'Type', value:'Accelerator Platform' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Sparks Ventures Hub — Accelerator"
      overviewProblem="Accelerators and founders needed a unified platform for managing the startup lifecycle."
      overviewRole="I built the full platform on WordPress with a custom theme, KPI dashboards, pitch deck management, and funding round analytics."
      archTitle="Architecture" archSubhead="Custom WordPress platform for accelerator management."
      archCards={[{ num:'Layer 01 —', icon:'fa-rocket', title:'Founder Portal', desc:'Milestone tracking and communication for startups.' },{ num:'Layer 02 —', icon:'fa-chart-simple', title:'KPI Dashboard', desc:'Real-time performance indicators for portfolio companies.' },{ num:'Layer 03 —', icon:'fa-file-shield', title:'Data Room', desc:'Encrypted pitch deck and document management.' },{ num:'Layer 04 —', icon:'fa-chart-pie', title:'Funding Analytics', desc:'Investment tracking and funding round analytics.' }]}
      codeFilename="wp-content/themes/sparks-ventures/functions.php" codeLines={[['// Register custom post types for accelerator portfolio', '01'],["add_action('init', function() {", '02'],["  register_post_type('portfolio_company', [", '03'],["    'labels' => ['name' => 'Portfolio Companies'],", '04'],["    'public' => true,", '05'],["    'supports' => ['title', 'editor', 'thumbnail']", '06'],["  ]);", '07'],['});', '08']]}
      pullQuote="An accelerator platform has to serve both founders who need guidance and managers who need visibility."
      decisionCards={[{ num:'01 —', title:'WordPress + Custom Post Types', desc:'Leveraged WordPress custom post types and Advanced Custom Fields for flexible portfolio management.' },{ num:'02 —', title:'KPI-First Design', desc:'Data model designed around key metrics first for real-time dashboards.' }]}
      resultCards={[{ value:'WordPress', label:'Custom Platform' },{ value:'KPI', label:'Real-Time' },{ value:'Secure', label:'Data Rooms' },{ value:'Live', label:'sparksventureshub.com' }]}
      resultBody="Sparks Ventures Hub is live at sparksventureshub.com, powered by a custom WordPress theme."
      founderNote1="Building a platform for both accelerator managers and founders taught me to design with empathy for both perspectives."
      founderNote2="The KPI tracking system using WordPress custom fields made it easy for non-technical staff to update metrics."
      nextCaseTitle="ANING — Community Marketplace" nextCaseDesc="Multi-vendor marketplace for services and products." nextCaseLink="/work/aning"
      accentColor="#D97706" codeBg="#1C1000"
    />
  )
}
