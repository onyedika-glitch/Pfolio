import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function UnlimitedHealthcarePage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Healthcare AI"
      headline={<>Unlimited Healthcare —<br />Clinical AI App</>}
      subhead="High-scale clinical app with real-time consultations via WebSockets and AI-driven diagnostics on Google Play."
      metrics={[{ value:'AI-Powered', label:'Diagnostics' },{ value:'Real-Time', label:'Consultations' },{ value:'Google Play', label:'Mobile App' },{ value:'Live', label:'unlimitedhealthcares.com' }]}
      metaItems={[{ label:'Category', value:'Healthcare · Mobile + Web' },{ label:'Stack', value:'React · Capacitor · WebSockets · Node.js · Python AI' }]}
      projectDetails={[{ label:'Type', value:'Clinical Healthcare AI' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Unlimited Healthcare — Clinical AI App"
      overviewProblem="Patients needed accessible healthcare with AI triage, real-time consultations, and mobile access."
      overviewRole="I built the full-stack clinical app with WebSocket consultations, Python AI diagnostics, and Google Play mobile app."
      archTitle="Platform Architecture" archSubhead="Multi-layered clinical architecture combining AI and real-time comms."
      archCards={[{ num:'Layer 01 —', icon:'fa-stethoscope', title:'AI Diagnostics', desc:'Python-based symptom analysis for preliminary assessments.' },{ num:'Layer 02 —', icon:'fa-video', title:'Real-Time Consults', desc:'WebSocket live communication between patients and providers.' },{ num:'Layer 03 —', icon:'fa-calendar', title:'Scheduling', desc:'Appointment scheduling with provider availability management.' },{ num:'Layer 04 —', icon:'fa-google-play', title:'Mobile App', desc:'Capacitor React app published on Google Play Store.' }]}
      codeFilename="services/ai-diagnostics/main.py"
      codeLines={[['def analyze_symptoms(symptoms):', '01'],['  processed = preprocess_symptoms(symptoms)', '02'],['  matches = model.predict(processed)', '03'],['  severity = assess_urgency(matches)', '04'],['  return {', '05'],['    "diagnoses": matches,', '06'],['    "severity": severity,', '07'],['    "recommendation": get_recommendation(severity)', '08'],['  }', '09']]}
      pullQuote="Healthcare is the one domain where 'move fast and break things' doesn't apply. People's health depends on it."
      decisionCards={[{ num:'01 —', title:'Python AI Engine', desc:'Built symptom analysis using Python ML libraries for preliminary diagnostics.' },{ num:'02 —', title:'WebSocket Comms', desc:'WebSockets for instant bidirectional patient-provider communication.' }]}
      resultCards={[{ value:'AI-Powered', label:'Diagnostics' },{ value:'Real-Time', label:'Consultations' },{ value:'Google Play', label:'Mobile' },{ value:'Full-Stack', label:'Web + Mobile + AI' }]}
      resultBody="Unlimited Healthcare is live at unlimitedhealthcares.com and on Google Play."
      founderNote1="Building healthcare AI is the most technically and ethically challenging work. Every diagnostic suggestion must be responsible."
      founderNote2="The WebSocket consultation layer required designing for reliable, low-latency connections patients can depend on."
      nextCaseTitle="Sparks Ventures Hub"
      nextCaseDesc="Unified platform for accelerators and founders."
      nextCaseLink="/work/sparks-ventures"
      accentColor="#0D9488" codeBg="#031917"
    />
  )
}
