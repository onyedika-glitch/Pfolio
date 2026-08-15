import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function SparksVenturesPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Startup Accelerator"
      headline={<>Sparks Ventures Hub<br />Accelerator Ops Platform</>}
      subhead="A Laravel operations platform for an accelerator: leads, public applications, approvals, followups, onboarding programs, and vouchers."
      metrics={[{ value:'Leads', label:'Pipeline' },{ value:'QR', label:'Apply Form' },{ value:'Followups', label:'Queue' },{ value:'Live', label:'sparksventureshub.com' }]}
      metaItems={[{ label:'Category', value:'Startup Accelerator · Operations' },{ label:'Role', value:'Full-Stack Engineer' },{ label:'Stack', value:'Laravel 13 · PHP 8.3 · Blade · PostgreSQL/Supabase' }]}
      projectDetails={[{ label:'Type', value:'Accelerator Ops Platform' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Sparks Ventures Hub: Accelerator Ops Platform"
      overviewProblem="An accelerator runs on process: applications come in, need approvals, followups, onboarding steps, and vouchers — all tracked across the team. Spreadsheets couldn't keep up."
      overviewRole="I built the platform in Laravel: a lead pipeline with assignment, a public QR landing page for applications, an approval flow, a followup processing queue, multi-step onboarding programs, voucher management, team, settings, and stats."
      archTitle="Architecture" archSubhead="Laravel controllers and routes organizing the full accelerator workflow."
      archCards={[{ num:'Layer 01', icon:'fa-users', title:'Leads & Applications', desc:'Lead capture and assignment, plus a public QR-code landing page that turns printed flyers into applications.' },{ num:'Layer 02', icon:'fa-list-check', title:'Approvals & Onboarding', desc:'Approval requests with decide actions and multi-step onboarding programs tracked per lead.' },{ num:'Layer 03', icon:'fa-bell', title:'Followup Queue', desc:'A processable followup queue so no applicant falls through the cracks.' },{ num:'Layer 04', icon:'fa-ticket', title:'Vouchers & Team', desc:'Voucher creation, assignment, and lifecycle plus team management, settings, and stats.' }]}
      codeFilename="routes/web.php" codeLines={[['Route::get(\'/\', [PageController::class, \'dashboard\'])->name(\'dashboard\');', '01'],['Route::get(\'/leads\', [PageController::class, \'leads\'])->name(\'leads\');', '02'],['Route::get(\'/onboarding\', [PageController::class, \'onboarding\'])->name(\'onboarding\');', '03'],['Route::get(\'/approvals\', [PageController::class, \'approvals\'])->name(\'approvals\');', '04'],['Route::get(\'/followups\', [PageController::class, \'followups\'])->name(\'followups\');', '05'],['Route::get(\'/vouchers\', [PageController::class, \'vouchers\'])->name(\'vouchers\');', '06'],['Route::post(\'/leads\', [PageController::class, \'leadsStore\'])->name(\'leads.store\');', '07'],['Route::post(\'/leads/{id}/assign\', [PageController::class, \'leadsAssign\'])->name(\'leads.assign\');', '08'],['Route::post(\'/approvals/{id}/decide\', [PageController::class, \'approvalsDecide\'])->name(\'approvals.decide\');', '09'],['Route::post(\'/followups/process\', [PageController::class, \'followupsProcess\'])->name(\'followups.process\');', '10'],['Route::get(\'/apply\', [PageController::class, \'showForm\'])->name(\'form\');', '11']]}
      pullQuote="An accelerator's edge is its process: every lead tracked, every followup queued, every onboarding step counted."
      decisionCards={[{ num:'01', title:'QR-to-Application', desc:'A public apply page reachable by QR code turns offline outreach into a tracked lead pipeline.' },{ num:'02', title:'Followup Queue', desc:'A queue with a processing route means followups happen on schedule, not from memory.' }]}
      resultCards={[{ value:'Leads', label:'Assignable pipeline' },{ value:'QR', label:'Public apply page' },{ value:'Onboarding', label:'Multi-step programs' },{ value:'Live', label:'sparksventureshub.com' }]}
      resultBody="Sparks Ventures Hub is live at sparksventureshub.com, running the accelerator's applications, approvals, followups, onboarding, and vouchers in one Laravel app."
      founderNote1="The QR apply page was the smallest feature with the biggest impact — it turned physical flyers into a lead pipeline."
      founderNote2="Followups and approvals are the heart of an accelerator: if those queues are empty, the process is working."
      nextCaseTitle="Sparks EFP: 3-Day Foundation Program" nextCaseDesc="Program landing page with seat reservations for a three-day foundation program." nextCaseLink="/work/sparks-efp"
      accentColor="#D97706" codeBg="#1C1000"
    />
  )
}
