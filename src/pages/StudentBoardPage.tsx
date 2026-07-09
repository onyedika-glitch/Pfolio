import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function StudentBoardPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · EdTech"
      headline={<>Student Board —<br />Bulletin Platform</>}
      subhead="A digital bulletin board for students to share announcements, resources, and information within educational institutions."
      metrics={[{ value:'Digital', label:'Bulletin Board' },{ value:'PHP + Blade', label:'Full-Stack' },{ value:'PostgreSQL', label:'Database' },{ value:'Live', label:'student-board.onrender.com' }]}
      metaItems={[{ label:'Category', value:'EdTech · Student Platform' },{ label:'Stack', value:'PHP · Blade · PostgreSQL · Docker' }]}
      projectDetails={[{ label:'Type', value:'Digital Bulletin Board' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Student Board — Bulletin Platform"
      overviewProblem="Students needed a centralized digital platform for sharing announcements, resources, and information within their institution."
      overviewRole="I built the full-stack application with PHP, Blade templating, and PostgreSQL."
      archTitle="Architecture" archSubhead="PHP-based full-stack for student communication."
      archCards={[{ num:'Layer 01 —', icon:'fa-chalkboard', title:'Bulletin Board', desc:'Centralized board for student announcements and events.' },{ num:'Layer 02 —', icon:'fa-share-nodes', title:'Resource Sharing', desc:'Document and file sharing for educational resources.' },{ num:'Layer 03 —', icon:'fa-bell', title:'Notifications', desc:'Timely updates for new announcements and deadlines.' }]}
      codeFilename="resources/views/announcements/index.blade.php" codeLines={[['@extends("layouts.app")', '01'],['@section("content")', '02'],['<div class="announcements">', '03'],['  @foreach($announcements as $announcement)', '04'],['  <div class="card">', '05'],['    <h3>{{ $announcement->title }}</h3>', '06'],['    <p>{{ $announcement->excerpt }}</p>', '07'],['  </div>', '08'],['  @endforeach', '09'],['</div>', '10'],['@endsection', '11']]}
      pullQuote="A student bulletin board should be as simple as a physical corkboard — just digital. Post, share, read."
      decisionCards={[{ num:'01 —', title:'PHP + Blade', desc:'Leveraged Laravel Blade for rapid, maintainable development.' },{ num:'02 —', title:'PostgreSQL Data', desc:'Reliable storage with complex query support for filtering.' }]}
      resultCards={[{ value:'Digital', label:'Bulletin Board' },{ value:'PHP', label:'Full-Stack' },{ value:'PostgreSQL', label:'Database' },{ value:'Live', label:'student-board.onrender.com' }]}
      resultBody="Student Board is live at student-board.onrender.com."
      founderNote1="Sometimes the simplest ideas are the most impactful. A digital bulletin board solves a real communication problem."
      founderNote2="Laravel and Blade are still incredibly productive for building data-driven web applications quickly."
      nextCaseTitle="Restaurant UI — Design" nextCaseDesc="Restaurant landing page UI/UX design on Figma." nextCaseLink="/work/restaurant-ui"
      accentColor="#0D9488" codeBg="#031917"
    />
  )
}
