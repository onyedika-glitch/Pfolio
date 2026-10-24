import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function SparksVenturesPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · WordPress · Incubation"
      headline={<>Sparks Ventures Hub<br />Business Incubation Hub</>}
      subhead="Feature work on an existing WordPress incubation platform: academy, courses, events, and store for entrepreneurs, especially women-led micro and small businesses."
      metrics={[{ value:'WordPress', label:'CMS' },{ value:'Tutor LMS', label:'Academy' },{ value:'WooCommerce', label:'Store' },{ value:'Live', label:'sparksventureshub.com' }]}
      metaItems={[{ label:'Category', value:'WordPress · Business Incubation' },{ label:'Role', value:'WordPress Engineer' },{ label:'Stack', value:'WordPress · Elementor · Tutor LMS · WooCommerce · The Events Calendar' }]}
      projectDetails={[{ label:'Company', value:'Sparks Ventures Hub' },{ label:'Type', value:'WordPress feature updates' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Sparks Ventures Hub: Business Incubation Hub"
      overviewProblem="Sparks Ventures Hub already had a live WordPress site: a business growth and incubation platform for entrepreneurs, especially women-led micro and small enterprises. The original site was not mine. They needed features updated on the stack they already ran: academy, programs, events, and a store."
      overviewRole="I came in after launch and updated features on WordPress: Tutor LMS academy and student dashboard, WooCommerce course sales, Elementor program pages, and The Events Calendar for workshops and meetups. This was not a greenfield build and not a custom Laravel operations platform."
      archTitle="What's live" archSubhead="The WordPress stack the hub actually runs on."
      archCards={[{ num:'Layer 01', icon:'fa-globe', title:'Public site', desc:'Elementor pages for the incubation story: services, accelerator, mentorship, and community, on the Tutor Starter theme.' },{ num:'Layer 02', icon:'fa-graduation-cap', title:'Academy', desc:'Tutor LMS courses, instructors, enrollment, and a student dashboard at /dashboard for the learning programs.' },{ num:'Layer 03', icon:'fa-store', title:'Store', desc:'WooCommerce handles paid courses and checkout (Virtual Assistant, Ventures Studio, and other programs).' },{ num:'Layer 04', icon:'fa-calendar', title:'Events & programs', desc:'The Events Calendar for workshops, meetups, and program dates, plus Sparks Accelerator as a highlighted program.' }]}
      codeFilename="wp-content/themes/child/functions.php" codeLines={[['add_action(\'wp_enqueue_scripts\', function () {', '01'],['    wp_enqueue_style(', '02'],['        \'svh-overrides\',', '03'],['        get_stylesheet_directory_uri() . \'/assets/svh.css\',', '04'],['        [\'tutor-frontend\'],', '05'],['        \'1.2.0\'', '06'],['    );', '07'],['});', '08'],['', '09'],['add_filter(\'tutor_student_register_url\', function () {', '10'],['    return home_url(\'/student-registration/\');', '11'],['});', '12'],['', '13'],['add_filter(\'login_redirect\', function ($redirect, $request, $user) {', '14'],['    if (in_array(\'subscriber\', (array) $user->roles, true)) {', '15'],['        return home_url(\'/dashboard/\');', '16'],['    }', '17'],['    return $redirect;', '18'],['}, 10, 3);', '19']]}
      pullQuote="The live site is a WordPress incubation hub. Feature work has to respect the stack that's already there, not replace it with a different product."
      decisionCards={[{ num:'01', title:'Stay on WordPress', desc:'The site was already WordPress + Elementor + Tutor LMS. Updates ship as theme, plugin, and page work, not a rewrite.' },{ num:'02', title:'Academy + store together', desc:'Tutor LMS for learning and WooCommerce for paid enrollment so courses, cart, and the student dashboard stay on one hub.' }]}
      resultCards={[{ value:'WordPress', label:'Live CMS' },{ value:'Academy', label:'Tutor LMS courses' },{ value:'Events', label:'Workshops + meetups' },{ value:'Live', label:'sparksventureshub.com' }]}
      resultBody="Sparks Ventures Hub is live at sparksventureshub.com as a WordPress business incubation hub: academy, store, events, and program pages. I didn't build the original site. I updated features on it."
      founderNote1="The original site was designed and launched by others. My job was to extend what was already live without pretending I owned the whole product."
      founderNote2="Incubation work on WordPress is page, LMS, and store work: academy enrollment, program pages, events, and the student dashboard."
      nextCaseTitle="Sparks EFP: 4-Week Foundation Programme" nextCaseDesc="Four-week virtual entrepreneurship programme landing page with Paystack checkout." nextCaseLink="/work/sparks-efp"
      accentColor="#D97706" codeBg="#1C1000"
    />
  )
}
