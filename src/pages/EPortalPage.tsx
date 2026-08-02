import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'

export default function EPortalPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Government EdTech"
      headline={<>ePortal:<br />School Board Hub</>}
      subhead="A central communication hub for the Enugu State School Board."
      metrics={[{ value:'Central', label:'School Hub' },{ value:'All Schools', label:'Enugu District' },{ value:'Responsive', label:'Mobile & Desktop' },{ value:'Live', label:'e-portal-seven.vercel.app' }]}
      metaItems={[{ label:'Category', value:'Government · EdTech' },{ label:'Stack', value:'HTML5 · CSS3 · JavaScript · Vercel' }]}
      projectDetails={[{ label:'Client', value:'Enugu State School Board' },{ label:'Type', value:'Government Portal' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="ePortal: School Board Hub"
      overviewProblem="The Enugu State School Board needed a centralized digital hub for announcements, events, and results across all schools."
      overviewRole="I developed a responsive, accessible portal serving as the central communication channel for the school community."
      archTitle="Platform Architecture"
      archSubhead="A clean, accessible portal built for simplicity and reach."
      archCards={[{ num:'Layer 01', icon:'fa-bullhorn', title:'Announcements', desc:'Centralized broadcasting of school news and policy updates.' },{ num:'Layer 02', icon:'fa-calendar', title:'Events & Results', desc:'Academic calendars, exam results, and activity schedules.' },{ num:'Layer 03', icon:'fa-chart-bar', title:'Results Portal', desc:'Exam results accessible to students and parents.' },{ num:'Layer 04', icon:'fa-globe', title:'Responsive Hub', desc:'Mobile-first design for low-bandwidth environments.' }]}
      codeFilename="index.html"
      codeLines={[['<!-- School announcement card component -->', '01'],['<div class="announcement-card">', '02'],['  <h3>{title}</h3>', '03'],['  <p class="date">{date}</p>', '04'],['  <p>{excerpt}</p>', '05'],['  <a href="#" class="read-more">Read More</a>', '06'],['</div>', '07']]}
      pullQuote="A school portal has to be simple enough for a parent checking results on a phone and comprehensive enough for administrators."
      decisionCards={[{ num:'01', title:'Simple Tech Stack', desc:'Chose vanilla HTML/CSS/JS for maximum compatibility on older devices.' },{ num:'02', title:'Mobile-First', desc:'Designed mobile-first since most users access via smartphones.' }]}
      resultCards={[{ value:'Central', label:'Communication Hub' },{ value:'All Schools', label:'Enugu District' },{ value:'Responsive', label:'Mobile & Desktop' },{ value:'Live', label:'Deployed on Vercel' }]}
      resultBody="The ePortal is live at e-portal-seven.vercel.app, serving the Enugu State School Board community."
      founderNote1="Building a government education portal taught me that simplicity and accessibility matter more than flashy features."
      founderNote2="Clean HTML and CSS, done right, can be more powerful than a complex framework when universal access is the goal."
      nextCaseTitle="Pension App: Fintech Platform"
      nextCaseDesc="Comprehensive fintech platform for pension fund management."
      nextCaseLink="/work/pension-app"
      accentColor="#16A34A"
      codeBg="#052912"
    />
  )
}
