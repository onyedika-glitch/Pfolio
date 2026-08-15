import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function SparksEFPPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Program Landing"
      headline={<>Sparks EFP<br />3-Day Foundation Program</>}
      subhead="A Laravel landing page for a three-day, hands-on foundation program that turns business ideas into validated, budgeted, pitched startups — with seat reservations."
      metrics={[{ value:'3', label:'Days' },{ value:'2', label:'Formats: Physical + Virtual' },{ value:'1', label:'Click Registration' },{ value:'Live', label:'efp.sparksventureshub.com' }]}
      metaItems={[{ label:'Category', value:'Program Landing · Reservations' },{ label:'Role', value:'Full-Stack Engineer' },{ label:'Stack', value:'Laravel · Blade · MySQL/PostgreSQL' }]}
      projectDetails={[{ label:'Company', value:'Sparks Ventures Hub' },{ label:'Type', value:'Program Landing + Seat Reservations' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Sparks EFP: 3-Day Foundation Program"
      overviewProblem="The Sparks EFP program needed a page that could sell a three-day foundation program — validated by Day One, budgeted by Day Two, pitched by Day Three — and capture seat reservations without a booking system."
      overviewRole="I built the Laravel landing page with the full program pitch (hero, curriculum, fees, format) plus a server-side validated reservation flow: register with name, email, phone, and a Physical, Virtual, or Reservation package; cancel by email."
      archTitle="Architecture" archSubhead="A single-page landing backed by a reservations table."
      archCards={[{ num:'Layer 01', icon:'fa-rocket', title:'Program Page', desc:'Hero, curriculum, and fees sections presenting the three-day foundation program with clear format and schedule info.' },{ num:'Layer 02', icon:'fa-clipboard-check', title:'Reservation Flow', desc:'Server-side validated registration with package selection, upserted by email so a returning visitor updates instead of duplicating.' },{ num:'Layer 03', icon:'fa-envelope', title:'Cancel by Email', desc:'A cancel route that removes the active reservation for an email address, with clear success and not-found responses.' },{ num:'Layer 04', icon:'fa-database', title:'Persistence', desc:'Reservations table via Laravel migration, storing name, email, phone, and package.' }]}
      codeFilename="app/Http/Controllers/ReservationController.php" codeLines={[['$validated = $request->validate([', '01'],['    \'name\' => \'required|string|max:255\',', '02'],['    \'email\' => \'required|email|max:255\',', '03'],['    \'phone\' => \'required|string|max:30\',', '04'],['    \'package\' => \'required|in:Physical,Virtual,Reservation\',', '05'],[']);', '06'],['', '07'],['$reservation = Reservation::updateOrCreate(', '08'],['    [\'email\' => $validated[\'email\']],', '09'],['    [', '10'],['        \'name\' => $validated[\'name\'],', '11'],['        \'phone\' => $validated[\'phone\'],', '12'],['        \'package\' => $validated[\'package\'],', '13'],['    ]', '14'],[');', '15']]}
      pullQuote="A program page is a sales page: three days of content has to sell itself before the first slide."
      decisionCards={[{ num:'01', title:'Email-Keyed Upserts', desc:'updateOrCreate on email means one seat per visitor, no duplicate reservations.' },{ num:'02', title:'Validated Packages', desc:'Package choices are constrained server-side to Physical, Virtual, or Reservation.' }]}
      resultCards={[{ value:'3', label:'Day program' },{ value:'Physical+Virtual', label:'Formats' },{ value:'2', label:'Actions: reserve + cancel' },{ value:'Live', label:'efp.sparksventureshub.com' }]}
      resultBody="Sparks EFP is live at efp.sparksventureshub.com, converting program visitors into seat reservations through a simple Laravel page and reservation API."
      founderNote1="The reservation endpoint had to be boring and reliable: validate, upsert, respond. A program page shouldn't lose a seat to a crash."
      founderNote2="Keeping it to two routes — register and cancel — meant the whole thing stays easy to run and easy to extend."
      nextCaseTitle="Sparks Ventures Hub: Lead Funnel" nextCaseDesc="Marketing funnel with lead capture, consultation bookings, and Paystack payments." nextCaseLink="/work/sparks-funnel"
      accentColor="#D97706" codeBg="#1C1000"
    />
  )
}
