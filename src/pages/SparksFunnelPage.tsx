import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function SparksFunnelPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Marketing Funnel"
      headline={<>Sparks Ventures Hub<br />Lead Funnel</>}
      subhead="A Laravel marketing funnel for Sparks Ventures Hub: service pages, lead capture, consultation bookings, Paystack payments, and an admin dashboard."
      metrics={[{ value:'Opt-In', label:'Lead Capture' },{ value:'Paystack', label:'Payments' },{ value:'Admin', label:'Dashboard' },{ value:'Live', label:'funnel.sparksventureshub.com' }]}
      metaItems={[{ label:'Category', value:'Marketing Funnel · SaaS' },{ label:'Role', value:'Full-Stack Engineer' },{ label:'Stack', value:'Laravel · Blade · Paystack · MySQL/PostgreSQL' }]}
      projectDetails={[{ label:'Company', value:'Sparks Ventures Hub' },{ label:'Type', value:'Lead Funnel Platform' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Sparks Ventures Hub: Lead Funnel"
      overviewProblem="The funnel needed to move visitors through a full journey: understand the services, opt in with their details, book a consultation, and pay — while the team could see every lead, booking, and payment in one place."
      overviewRole="I built the Laravel funnel end-to-end: home, about, and slugged service pages; lead opt-in and store endpoints; consultation bookings with a confirmation page; a Paystack flow with initialize, callback, success, and webhook routes; a contact form; and an authenticated admin panel managing leads, bookings, payments, and messages."
      archTitle="Architecture" archSubhead="A Laravel funnel from first visit to paid booking."
      archCards={[{ num:'Layer 01', icon:'fa-magnifying-glass', title:'Marketing Pages', desc:'Home, about, and service pages keyed by slug that present the offer before any conversion ask.' },{ num:'Layer 02', icon:'fa-user-plus', title:'Lead Capture', desc:'Opt-in and lead store endpoints persist visitor details the moment they engage.' },{ num:'Layer 03', icon:'fa-calendar-check', title:'Bookings & Payments', desc:'Consultation booking flow with a confirmation page, plus Paystack initialize, callback, success, and webhook routes for payments.' },{ num:'Layer 04', icon:'fa-shield-halved', title:'Admin Panel', desc:'Authenticated admin area with dashboards for leads, bookings (updatable), payments, and messages with read tracking.' }]}
      codeFilename="routes/web.php" codeLines={[['Route::post(\'/optin\', [LeadController::class, \'optin\'])->name(\'lead.optin\');', '01'],['Route::post(\'/lead/store\', [LeadController::class, \'store\'])->name(\'lead.store\');', '02'],['Route::post(\'/booking/store\', [BookingController::class, \'store\'])->name(\'booking.store\');', '03'],['Route::get(\'/booking-confirmed\', [BookingController::class, \'confirmed\'])->name(\'booking.confirmed\');', '04'],['Route::post(\'/pay/initialize\', [PaymentController::class, \'initialize\'])->name(\'payment.initialize\');', '05'],['Route::get(\'/pay/callback\', [PaymentController::class, \'callback\'])->name(\'payment.callback\');', '06'],['Route::post(\'/pay/webhook\', [PaymentController::class, \'webhook\'])->name(\'payment.webhook\');', '07'],['Route::post(\'/contact/store\', [ContactController::class, \'store\'])->name(\'contact.store\');', '08']]}
      pullQuote="A funnel's job is simple: turn a visitor into a lead, a lead into a booking, a booking into a payment."
      decisionCards={[{ num:'01', title:'Paystack Webhooks', desc:'Payment status arrives through a webhook, so orders reconcile even if the visitor never returns to the success page.' },{ num:'02', title:'Admin Over the Funnel', desc:'A logged-in admin panel keeps leads, bookings, payments, and messages manageable without touching the database.' }]}
      resultCards={[{ value:'Leads', label:'Captured + stored' },{ value:'Bookings', label:'Consultations' },{ value:'Paystack', label:'Payments + webhooks' },{ value:'Live', label:'funnel.sparksventureshub.com' }]}
      resultBody="The Sparks Ventures Hub funnel is live at funnel.sparksventureshub.com, taking visitors from marketing page to lead to paid consultation booking."
      founderNote1="The webhook route is the piece that makes payments trustworthy — the funnel can't claim success it never saw confirmed."
      founderNote2="Every stage of the funnel writes to its own table, which is what makes the admin dashboard so easy to build and read."
      nextCaseTitle="Sadar Properties: Wholesaling Toolkit" nextCaseDesc="Real estate wholesaling toolkit with deal math and buyer matching." nextCaseLink="/work/sadar-properties"
      accentColor="#D97706" codeBg="#1C1000"
    />
  )
}
