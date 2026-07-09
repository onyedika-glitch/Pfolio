import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function SPortalPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Government EdTech"
      headline={<>S-Portal —<br />Federal School Board</>}
      subhead="One-stop hub for official announcements, academic updates, and student information for federal schools."
      metrics={[{ value:'Federal', label:'School Hub' },{ value:'Central', label:'Communication' },{ value:'All Schools', label:'National Reach' },{ value:'Live', label:'s-portal.vercel.app' }]}
      metaItems={[{ label:'Category', value:'Government · EdTech' },{ label:'Stack', value:'HTML5 · CSS3 · JavaScript · Vercel' }]}
      projectDetails={[{ label:'Type', value:'School Board Portal' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="S-Portal — Federal School Board"
      overviewProblem="Federal schools lacked a centralized digital platform for announcements, academic updates, and student information."
      overviewRole="I developed the complete portal as a responsive, accessible hub for the federal school community."
      archTitle="Architecture" archSubhead="Simple, accessible portal focused on reach."
      archCards={[{ num:'Layer 01 —', icon:'fa-bullhorn', title:'Announcements', desc:'Centralized official announcements from school authorities.' },{ num:'Layer 02 —', icon:'fa-graduation-cap', title:'Academics', desc:'Curriculum updates, exam schedules, and student data.' },{ num:'Layer 03 —', icon:'fa-network-wired', title:'School Hub', desc:'Unified platform connecting schools and the community.' }]}
      codeFilename="index.html" codeLines={[['<nav class="main-nav">', '01'],['  <ul>', '02'],['    <li><a href="#announcements">Announcements</a></li>', '03'],['    <li><a href="#academics">Academics</a></li>', '04'],['    <li><a href="#resources">Resources</a></li>', '05'],['  </ul>', '06'],['</nav>', '07']]}
      pullQuote="A school portal has to work for everyone — from tech-savvy students to parents on basic phones."
      decisionCards={[{ num:'01 —', title:'Vanilla Stack', desc:'HTML, CSS, JS for maximum compatibility on all devices.' },{ num:'02 —', title:'Mobile-First', desc:'Prioritized mobile access for students and parents.' }]}
      resultCards={[{ value:'Federal', label:'School Hub' },{ value:'Central', label:'Communications' },{ value:'Responsive', label:'All Devices' },{ value:'Live', label:'Deployed on Vercel' }]}
      resultBody="S-Portal is live at s-portal.vercel.app, serving federal school communities."
      founderNote1="The best technology is the one that reaches the most people. Simple, accessible, reliable beats flashy."
      founderNote2="Not every problem needs a complex framework. Clean HTML and CSS, done with care, is often the right answer."
      nextCaseTitle="Student Board — Bulletin" nextCaseDesc="Digital bulletin board for student announcements." nextCaseLink="/work/student-board"
      accentColor="#6366F1" codeBg="#1E1B4B"
    />
  )
}
