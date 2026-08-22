import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function SparksEFPPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Program Landing"
      headline={<>Sparks EFP<br />4-Week Foundation Programme</>}
      subhead="A Laravel landing page for Sparks Entrepreneurship Foundation Programme: a four-week, hands-on virtual programme that turns a business idea into a validated model, budget, marketing plan, and live pitch."
      metrics={[{ value:'4', label:'Weeks' },{ value:'Virtual', label:'Format' },{ value:'Paystack', label:'Checkout' },{ value:'Live', label:'efp.sparksventureshub.com' }]}
      metaItems={[{ label:'Category', value:'Program Landing · EdTech' },{ label:'Role', value:'Full-Stack Engineer' },{ label:'Stack', value:'Laravel · Blade · Paystack · MySQL/PostgreSQL' }]}
      projectDetails={[{ label:'Company', value:'Sparks Ventures Hub' },{ label:'Type', value:'Program landing + checkout' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Sparks EFP: 4-Week Foundation Programme"
      overviewProblem="Sparks Ventures Hub needed a page that could sell the Entrepreneurship Foundation Programme as it actually runs: four weeks, virtual, 9:00am–4:00pm, starting October — validated by week one, budgeted by week two, pitched by week three, then a 30-day launch challenge. The old three-day / physical-or-virtual framing did not match the live programme."
      overviewRole="I built the Laravel landing page around the live curriculum: who it's for, week-by-week Discover / Build / Launch, learning outcomes, graduation package, fees, and a Virtual seat checkout through Paystack (₦53,750, VAT inclusive)."
      archTitle="What's live" archSubhead="The programme page as it ships on efp.sparksventureshub.com."
      archCards={[{ num:'Layer 01', icon:'fa-bullseye', title:'Programme pitch', desc:'Hero, duration, daily hours, virtual format, October start, and audience tags (aspiring founders, students, NYSC, graduates, side hustlers).' },{ num:'Layer 02', icon:'fa-list-check', title:'Curriculum', desc:'Three teaching weeks in order — Discover, Build, Launch — plus a week-four 30-day launch challenge after the programme.' },{ num:'Layer 03', icon:'fa-box-open', title:'Graduation package', desc:'Certificate, validation tool, Business Model Canvas, budget and pricing templates, registration guide, one-page plan, checklist, and 90-day roadmap.' },{ num:'Layer 04', icon:'fa-credit-card', title:'Virtual checkout', desc:'A single Virtual package with full 4-week live access, materials, certificate, and launch challenge — paid on Paystack.' }]}
      codeFilename="app/Http/Controllers/ReservationController.php" codeLines={[['$validated = $request->validate([', '01'],['    \'name\' => \'required|string|max:255\',', '02'],['    \'email\' => \'required|email|max:255\',', '03'],['    \'phone\' => \'required|string|max:30\',', '04'],['    \'package\' => \'required|in:Virtual,Reservation\',', '05'],[']);', '06'],['', '07'],['$reservation = Reservation::updateOrCreate(', '08'],['    [\'email\' => $validated[\'email\']],', '09'],['    [', '10'],['        \'name\' => $validated[\'name\'],', '11'],['        \'phone\' => $validated[\'phone\'],', '12'],['        \'package\' => $validated[\'package\'],', '13'],['    ]', '14'],[');', '15']]}
      pullQuote="The live programme is four weeks, virtual: discover, build, launch, then a 30-day challenge. The page has to sell that, not a three-day workshop."
      decisionCards={[{ num:'01', title:'Match the live programme', desc:'Copy, curriculum tabs, and fees follow the four-week virtual EFP — not a leftover three-day physical workshop.' },{ num:'02', title:'Paystack for the seat', desc:'Virtual registration goes to Paystack so fee, VAT, and seat payment stay on one checkout instead of a custom booking UI.' }]}
      resultCards={[{ value:'4', label:'Week programme' },{ value:'Virtual', label:'Live format' },{ value:'Paystack', label:'Seat checkout' },{ value:'Live', label:'efp.sparksventureshub.com' }]}
      resultBody="Sparks EFP is live at efp.sparksventureshub.com as a four-week virtual foundation programme: Discover, Build, Launch, a graduation toolkit, and Paystack checkout for the Virtual package."
      founderNote1="The curriculum is the product: week one validates the idea, week two builds budget and marketing, week three pitches, week four is the launch challenge. The landing page is just that sequence, sold clearly."
      founderNote2="Virtual-only pricing and Paystack meant we did not keep selling Physical or three-day packages the programme no longer runs."
      nextCaseTitle="Sparks Ventures Hub: Lead Funnel" nextCaseDesc="Marketing funnel with lead capture, consultation bookings, and Paystack payments." nextCaseLink="/work/sparks-funnel"
      accentColor="#D97706" codeBg="#1C1000"
    />
  )
}
