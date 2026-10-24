import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function SsabhiPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · WordPress · Brain Health"
      headline={<>SSABHI<br />Brain Health Initiative</>}
      subhead="Feature work on an existing WordPress site for the Sub-Saharan Africa Brain Health Initiative, a nonprofit advancing brain health through education, advocacy, research, and membership."
      metrics={[{ value:'WordPress', label:'CMS' },{ value:'Members', label:'Join flow' },{ value:'Programs', label:'Live pages' },{ value:'Live', label:'ssabhi.org' }]}
      metaItems={[{ label:'Category', value:'WordPress · Nonprofit · Brain Health' },{ label:'Role', value:'Full-Stack Developer' },{ label:'Stack', value:'WordPress · Hello Elementor · Elementor Pro · Fluent Forms' }]}
      projectDetails={[{ label:'Organisation', value:'SSABHI' },{ label:'Type', value:'WordPress feature updates' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="SSABHI: Brain Health Initiative"
      overviewProblem="SSABHI already had a live WordPress site for a Sub-Saharan Africa nonprofit: team, members, programs, jobs, blog, and a join flow. The original site was not mine. They needed a fullstack developer to keep shipping features and changes on the stack they already ran."
      overviewRole="I joined as a fullstack developer after launch and have been updating features on WordPress: Elementor pages, membership and registration, program pages (Art Alive, Africa Brain Health Webinar Series), jobs listings, and Fluent Forms. This was not a greenfield build."
      archTitle="What's live" archSubhead="The WordPress stack the initiative actually runs on."
      archCards={[{ num:'Layer 01', icon:'fa-globe', title:'Public site', desc:'Hello Elementor + Elementor Pro pages for vision, mission, objectives, and the brain-health story.' },{ num:'Layer 02', icon:'fa-users', title:'Community', desc:'Join/register, team, and members: the membership side of a regional nonprofit network.' },{ num:'Layer 03', icon:'fa-hands-holding-heart', title:'Programs', desc:'Program pages including the Art Alive Project and the Africa Brain Health Webinar Series.' },{ num:'Layer 04', icon:'fa-newspaper', title:'Content & jobs', desc:'Blog, job posts, contact, and Fluent Forms for inquiries and join requests.' }]}
      codeFilename="wp-content/themes/child/functions.php" codeLines={[['add_action(\'wp_enqueue_scripts\', function () {', '01'],['    wp_enqueue_style(', '02'],['        \'ssabhi-overrides\',', '03'],['        get_stylesheet_directory_uri() . \'/assets/ssabhi.css\',', '04'],['        [\'hello-elementor\'],', '05'],['        \'1.1.0\'', '06'],['    );', '07'],['});', '08'],['', '09'],['add_filter(\'fluentform/rendering_field_data_input_text\', function ($data) {', '10'],['    if (!empty($data[\'attributes\'][\'name\']) && $data[\'attributes\'][\'name\'] === \'phone\') {', '11'],['        $data[\'attributes\'][\'placeholder\'] = \'+234 \u2026\';', '12'],['    }', '13'],['    return $data;', '14'],['});', '15']]}
      pullQuote="A nonprofit site is already live when you join. Feature work means shipping changes on WordPress without pretending you built the original."
      decisionCards={[{ num:'01', title:'Stay on WordPress', desc:'The site was already Hello Elementor + Elementor Pro. Updates ship as theme, form, and page work, not a rewrite.' },{ num:'02', title:'Membership + programs', desc:'Join flow, team, members, and program pages stay in one CMS so the nonprofit can publish without a new stack.' }]}
      resultCards={[{ value:'WordPress', label:'Live CMS' },{ value:'Members', label:'Join + directory' },{ value:'Programs', label:'Webinars + Art Alive' },{ value:'Live', label:'ssabhi.org' }]}
      resultBody="SSABHI is live at ssabhi.org as a WordPress brain-health nonprofit: membership, programs, jobs, and content. I didn't build the original site. I joined as a fullstack developer and have been updating features on it."
      founderNote1="Joining a live nonprofit WordPress site is different from founding a product. The work is features and changes that respect what is already in production."
      founderNote2="Brain health content, membership, and program pages all have to stay easy for the organisation to edit. That is the point of staying on WordPress."
      nextCaseTitle="Sparks Ventures Hub: Business Incubation Hub" nextCaseDesc="WordPress feature work on a live incubation hub: academy, courses, events, and store." nextCaseLink="/work/sparks-ventures"
      accentColor="#0D9488" codeBg="#031917"
    />
  )
}
