import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function ATOMGroupPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · AI Marketing"
      headline={<>ATOM Group:<br />AI Technology Landing Page</>}
      subhead="A modern, responsive landing page for an AI technology company with animated elements and service showcases."
      metrics={[{ value:'Vue', label:'Framework' },{ value:'Animated', label:'Interactive UI' },{ value:'Responsive', label:'All Devices' },{ value:'Live', label:'atom-landing-five.vercel.app' }]}
      metaItems={[{ label:'Category', value:'AI · Marketing' },{ label:'Stack', value:'Vue · TypeScript · JavaScript · Vercel' }]}
      projectDetails={[{ label:'Client', value:'ATOM Group' },{ label:'Type', value:'AI Landing Page' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="ATOM Group: AI Landing Page"
      overviewProblem="An AI technology company needed an engaging, professional online presence communicating their brand and services."
      overviewRole="I designed and developed the complete landing page using Vue and TypeScript with animated elements."
      archTitle="Page Architecture" archSubhead="A component-based Vue architecture for performance."
      archCards={[{ num:'Layer 01', icon:'fa-atom', title:'Hero & Branding', desc:'Impactful hero with animations communicating AI focus.' },{ num:'Layer 02', icon:'fa-layer-group', title:'Service Showcase', desc:'Detailed sections highlighting products and capabilities.' },{ num:'Layer 03', icon:'fa-mobile-screen', title:'Responsive Layout', desc:'Optimized for all devices with consistent experience.' },{ num:'Layer 04', icon:'fa-rocket', title:'Performance', desc:'Optimized assets and lazy loading for fast load times.' }]}
      codeFilename="src/components/HeroSection.vue"
      codeLines={[['<template>', '01'],['  <section class="hero">', '02'],['    <div class="hero-content">', '03'],['      <h1>{{ title }}</h1>', '04'],['      <p>{{ description }}</p>', '05'],['      <AnimatedOrb />', '06'],['    </div>', '07'],['  </section>', '08'],['</template>', '09']]}
      pullQuote="An AI company's landing page has to look like the future but load like the present."
      decisionCards={[{ num:'01', title:'Vue for Animation', desc:'Chose Vue for excellent animation support and gentle learning curve.' },{ num:'02', title:'Performance Budget', desc:'Set strict budget ensuring sub-2 second load times.' }]}
      resultCards={[{ value:'Vue + TS', label:'Modern Stack' },{ value:'Animated', label:'Interactive UI' },{ value:'Sub-2s', label:'Load Time' },{ value:'Live', label:'Deployed on Vercel' }]}
      resultBody="The ATOM Group landing page is live at atom-landing-five.vercel.app."
      founderNote1="Performance and beauty aren't tradeoffs. With disciplined engineering, you can deliver both."
      founderNote2="Vue's transition system made complex animations feel effortless."
      nextCaseTitle="Zentrix Equity: Cap Table"
      nextCaseDesc="Real-time equity distribution and cap table management."
      nextCaseLink="/work/zentrix-equity"
      accentColor="#64748B" codeBg="#0F172A"
    />
  )
}
