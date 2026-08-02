import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function RestaurantUIPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · UI/UX Design"
      headline={<>Restaurant UI<br />Landing Page Design</>}
      subhead="A comprehensive restaurant landing page UI design showcasing modern design principles, visual hierarchy, and responsive layout."
      metrics={[{ value:'Figma', label:'Design Tool' },{ value:'Responsive', label:'Layout' },{ value:'Modern', label:'Visual Design' },{ value:'View', label:'Figma Project' }]}
      metaItems={[{ label:'Category', value:'UI/UX Design' },{ label:'Stack', value:'Figma · Visual Design' }]}
      projectDetails={[{ label:'Type', value:'UI/UX Design' },{ label:'Tool', value:'Figma' }]}
      breadcrumbLabel="Restaurant UI: Landing Page Design"
      overviewProblem="A restaurant needed a modern landing page design communicating brand identity and driving customer engagement."
      overviewRole="I designed the complete UI in Figma focusing on visual hierarchy, responsive layout, and conversion optimization."
      archTitle="Design System" archSubhead="Component-based Figma system for a premium restaurant brand."
      archCards={[{ num:'01', icon:'fa-utensils', title:'Navigation & Branding', desc:'Premium typography and color palette for restaurant identity.' },{ num:'02', icon:'fa-bullseye', title:'CTA Strategy', desc:'Strategic call-to-action placement for conversions.' },{ num:'03', icon:'fa-palette', title:'Visual Design', desc:'Strong visual hierarchy with balanced layouts.' }]}
      codeFilename="Restaurant_UI.fig" codeLines={[['// Design tokens', '01'],['const tokens = {', '02'],['  colors: { primary: "#1A1A2E", accent: "#C9A84C" },', '03'],['  typography: { heading: "Playfair Display", body: "Inter" },', '04'],['  spacing: { section: 120, gap: 24 }', '05'],['}', '06']]}
      pullQuote="A restaurant's digital presence should feel as premium as the dining experience."
      decisionCards={[{ num:'01', title:'Figma Design', desc:'Collaborative Figma workflow for easy iteration with stakeholders.' },{ num:'02', title:'Design System', desc:'Component-based system ensuring consistency across all pages.' }]}
      resultCards={[{ value:'Figma', label:'Full UI Design' },{ value:'Responsive', label:'Multi-Device' },{ value:'Design System', label:'Reusable' },{ value:'View', label:'figma.com/design/...' }]}
      resultBody="The Restaurant UI design is available on Figma, showcasing a complete landing page with modern design principles."
      founderNote1="Great UI design is about understanding the user journey: guiding visitors toward meaningful actions, not just making things beautiful."
      founderNote2="A design system approach means every component is reusable, consistent, and scalable: principles I carry into every frontend."
      nextCaseTitle="Floorhosting: Control Panel" nextCaseDesc="Professional hosting management platform." nextCaseLink="/work/floorhosting"
      accentColor="#DC2626" codeBg="#1C0A00" heroBg="#991B1B"
    />
  )
}
