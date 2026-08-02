import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'

export default function HandymanNGPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Service Marketplace"
      headline={<>Handyman NG<br />Service Marketplace</>}
      subhead="A frontend for connecting skilled professionals with clients across Nigeria."
      metrics={[{ value:'React', label:'Frontend Framework' },{ value:'Responsive', label:'Mobile & Desktop' },{ value:'Marketplace', label:'Service Categories' },{ value:'Live', label:'handymanng.com' }]}
      metaItems={[{ label:'Category', value:'Marketplace · Services' },{ label:'Role', value:'Frontend Developer' },{ label:'Stack', value:'React · UI/UX · Booking Systems' },{ label:'Year', value:'2024' }]}
      projectDetails={[{ label:'Client', value:'Handyman NG' },{ label:'Type', value:'Service Marketplace' },{ label:'Engagement', value:'Frontend Developer' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Handyman NG: Service Marketplace"
      overviewProblem="A service marketplace needed a responsive frontend connecting skilled professionals with clients across Nigeria."
      overviewRole="I developed the complete frontend using React with service discovery, provider profiles, and a streamlined booking flow."
      archTitle="Frontend Architecture"
      archSubhead="A React-based modular frontend designed for discovery and conversion."
      archCards={[{ num:'Layer 01', icon:'fa-search', title:'Service Discovery', desc:'Categorized listings with search, filter, and sort to find the right professional.' },{ num:'Layer 02', icon:'fa-user-check', title:'Provider Profiles', desc:'Professional profiles with reviews, ratings, and service history.' },{ num:'Layer 03', icon:'fa-calendar-check', title:'Booking Flow', desc:'Streamlined multi-step booking designed for maximum conversion.' },{ num:'Layer 04', icon:'fa-mobile-screen', title:'Responsive UI', desc:'Optimized for mobile users who make up the majority of the Nigerian market.' }]}
      codeFilename="src/pages/Services.jsx"
      codeLines={[['const ServicesPage = () => {', '01'],['  const [filters, setFilters] = useState({ category: "all" });', '02'],['  const filtered = useMemo(() => {', '03'],['    return services.filter(s => {', '04'],['      return s.category === filters.category;', '05'],['    });', '06'],['  }, [filters, services]);', '07'],['  return <ServiceGrid items={filtered} />;', '08'],['}', '09']]}
      pullQuote="A service marketplace lives or dies on trust. Every design decision was made to help clients hire with confidence."
      decisionCards={[{ num:'01', title:'React for Dynamic UI', desc:'Chose React for interactive service discovery and booking experience.' },{ num:'02', title:'Mobile-First Approach', desc:'Designed mobile-first for the Nigerian market where most users access via smartphones.' }]}
      resultCards={[{ value:'React', label:'Frontend Delivered' },{ value:'Responsive', label:'Mobile & Desktop' },{ value:'Streamlined', label:'Booking Flow' },{ value:'Live', label:'handymanng.com' }]}
      resultBody="Handyman NG is live at handymanng.com, connecting skilled professionals with clients across Nigeria."
      founderNote1="Building Handyman NG's frontend reinforced that great UX is the differentiator in marketplace platforms."
      founderNote2="React made it possible to build a highly interactive experience that feels native even on slow connections."
      nextCaseTitle="ePortal: Enugu School Board"
      nextCaseDesc="Central hub for the Enugu State School Board community."
      nextCaseLink="/work/eportal"
      accentColor="#EA580C"
      codeBg="#1C0A00"
    />
  )
}
