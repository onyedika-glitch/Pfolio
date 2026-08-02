import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function PensionAppPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Fintech"
      headline={<>Pension App:<br />Fund Management Platform</>}
      subhead="A comprehensive fintech platform for pension fund management with secure tools and real-time dashboards."
      metrics={[{ value:'Fintech', label:'Pension Management' },{ value:'Real-Time', label:'Dashboards' },{ value:'Secure', label:'Enterprise Grade' },{ value:'Scalable', label:'Growing User Base' }]}
      metaItems={[{ label:'Category', value:'Fintech · Finance' },{ label:'Stack', value:'React · Node.js · Security · Scalable Architecture' }]}
      projectDetails={[{ label:'Client', value:'Pension App' },{ label:'Type', value:'Fintech Platform' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Pension App: Fintech Platform"
      overviewProblem="Users needed a secure platform to manage pension funds with robust security and real-time financial dashboards."
      overviewRole="I developed secure fund management tools, real-time dashboards, and a scalable backend architecture."
      archTitle="Platform Architecture"
      archSubhead="A secure, scalable fintech architecture built for trust."
      archCards={[{ num:'Layer 01', icon:'fa-piggy-bank', title:'Fund Management', desc:'Secure pension contribution tracking and retirement planning tools.' },{ num:'Layer 02', icon:'fa-chart-line', title:'Real-Time Dashboards', desc:'Interactive visualizations of fund performance and growth projections.' },{ num:'Layer 03', icon:'fa-shield', title:'Security Layer', desc:'Encryption, secure auth, and audit logging for sensitive financial data.' },{ num:'Layer 04', icon:'fa-expand-arrows', title:'Scalable Backend', desc:'Node.js backend designed for horizontal scaling with growing user data.' }]}
      codeFilename="server/controllers/pension.js"
      codeLines={[['async function getPortfolio(req, res) {', '01'],['  const { userId } = req.user;', '02'],['  const portfolio = await Pension.findOne({ user: userId })', '03'],['    .populate("transactions");', '04'],['  if (!portfolio) {', '05'],['    return res.status(404).json({ error: "Portfolio not found" });', '06'],['  }', '07'],['  return res.status(200).json(portfolio);', '08'],['}', '09']]}
      pullQuote="Pension management is about trust. Every line of code, every security decision has to earn that trust."
      decisionCards={[{ num:'01', title:'Security-First', desc:'Encryption, secure auth, and audit logging as foundational architecture decisions.' },{ num:'02', title:'Real-Time Viz', desc:'Interactive charting for clear visibility into fund performance.' }]}
      resultCards={[{ value:'Secure', label:'Fund Management' },{ value:'Real-Time', label:'Dashboards' },{ value:'Scalable', label:'Architecture' },{ value:'Fintech', label:'Production Deployed' }]}
      resultBody="The Pension App is a production fintech platform serving users with secure pension fund management."
      founderNote1="Building a fintech platform taught me that security isn't a feature; it's the foundation."
      founderNote2="Real-time dashboards give users instant visibility into their retirement savings."
      nextCaseTitle="ATOM Group: AI Landing Page"
      nextCaseDesc="Modern responsive landing page for an AI technology company."
      nextCaseLink="/work/atom-group"
      accentColor="#1E3A8A"
      codeBg="#071223"
    />
  )
}
