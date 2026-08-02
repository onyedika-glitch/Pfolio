import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'

export default function ChefAcademyCaseStudy() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · EdTech · Laravel Platform"
      headline={<>Chef Academy of London<br />Culinary Training Platform</>}
      subhead="A high-performance culinary training website for a London professional chef academy. Multi-language, course carousel, real-time enquiry system, and a custom Laravel architecture built to convert prospective students globally."
      metrics={[
        { value: 'London', label: 'Professional Culinary Academy' },
        { value: 'Multi-Language', label: 'Global Student Reach' },
        { value: 'Live', label: 'culinary.chefacademyoflondon.com' },
        { value: 'Laravel', label: 'Custom Architecture' },
      ]}
      metaItems={[
        { label: 'Category', value: 'EdTech · Laravel Platform' },
        { label: 'Role', value: 'Full-Stack Web Engineer' },
        { label: 'Stack', value: 'Laravel · Vite · Tailwind CSS · PHP · JavaScript · Blade' },
        { label: 'Live', value: 'culinary.chefacademyoflondon.com' },
      ]}
      projectDetails={[
        { label: 'Client', value: 'Chef Academy of London' },
        { label: 'Type', value: 'EdTech · Professional Training' },
        { label: 'Engagement', value: 'Full-Stack Web Engineer' },
        { label: 'Stack', value: 'Laravel · Vite · Tailwind · PHP' },
        { label: 'Status', value: 'live' },
      ]}
      breadcrumbLabel="Chef Academy of London: Culinary Training Platform"
      overviewProblem="The Chef Academy of London needed a flagship culinary training website that could serve a global audience of prospective students in multiple languages, showcase a rich course catalogue with pricing and durations, and communicate the prestige of a London-based professional chef academy."
      overviewRole="I engineered the full Laravel platform: custom Blade theme development, course carousel implementation, enquiry form system, multi-language support with flag-based switchers, and a full responsive layout."
      archTitle="Architecture Overview"
      archSubhead="A custom Laravel platform built for global reach, multi-language delivery, and high-intent student conversion."
      archCards={[
        { num: 'Layer 01', icon: 'fa-palette', title: 'Laravel Custom Theme', desc: 'Fully custom Laravel Blade theme development with component architecture. Separation of concerns between layout, styling, and content management.' },
        { num: 'Layer 02', icon: 'fa-grip', title: 'Course Carousel System', desc: 'Dynamic course showcase with cards displaying imagery, badges, duration, price, and booking links. Built to support multiple course types.' },
        { num: 'Layer 03', icon: 'fa-language', title: 'Multi-Language Infrastructure', desc: 'Flag-based language switcher supporting international prospective students. Content architecture designed to support translation at page and component level.' },
        { num: 'Layer 04', icon: 'fa-paper-plane', title: 'Lead Generation System', desc: 'Dedicated enquiry form with CSRF protection. Form data flows into CRM and email pipeline. GDPR-compliant cookie consent banner for the European student market.' },
      ]}
      codeFilename="resources/views/courses/index.blade.php"
      codeLines={[
        ['{{-- Chef Academy: Custom Course Loop Template --}}', '01'],
        ['', '02'],
        ['<section class="cal-courses-carousel">', '03'],
        ['  @foreach($courses as $course)', '04'],
        ['    <div class="cal-course-card">', '05'],
        ['      <h3>{{ $course->title }}</h3>', '06'],
        ['      <span>{{ $course->price }}</span>', '07'],
        ['    </div>', '08'],
        ['  @endforeach', '09'],
        ['</section>', '10'],
      ]}
      pullQuote='"A culinary academy in London competes against world-class institutions. The website has to look like it belongs in the same conversation: that means typography, imagery, and hierarchy working together."'
      decisionCards={[
        { num: '01', title: 'Serif Typography for Prestige', desc: 'Georgia and Cormorant Garamond for headings communicate academic and culinary prestige. The type system signals authority before the content is read.' },
        { num: '02', title: '#ffb703 Amber Accent', desc: 'The warm amber accent against dark backgrounds evokes premium culinary aesthetics: think Michelin-starred restaurant menus, not tech startup landing pages.' },
        { num: '03', title: 'Mobile-First Course Cards', desc: 'Course cards are the primary conversion surface. Built to lead with imagery, surface price and duration immediately, and include a direct booking path.' },
      ]}
      resultCards={[
        { value: 'Live', label: 'culinary.chefacademyoflondon.com' },
        { value: 'Multi-Language', label: 'International student reach' },
        { value: 'Laravel', label: 'Full-stack custom platform' },
        { value: 'Lead Gen', label: 'Active student enquiry pipeline' },
      ]}
      resultBody="The Chef Academy of London platform is live at culinary.chefacademyoflondon.com. The academy uses the platform to attract and convert international students for professional chef courses in London."
      founderNote1="I build Laravel platforms for clients who need more than a template. The Chef Academy of London needed a product that could represent a premium London institution to a global audience."
      founderNote2="The typography choices, the colour system, the course card architecture, the enquiry form: these were engineering and design decisions made with conversion and prestige in mind."
      nextCaseTitle="YouExtractor: LLM Extraction Engine"
      nextCaseDesc="Multi-model chained extraction pipeline processing 10M+ records monthly with sub-200ms p99 latency."
      nextCaseLink="/work/youextractor"
      accentColor="#3B82F6"
    />
  )
}
