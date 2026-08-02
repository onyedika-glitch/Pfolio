import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function SelfanyPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Web Development"
      headline={<>Selfany / LabileConsult:<br />Web Presence & UI</>}
      subhead="Dynamic React UI delivering 25% user engagement improvement through performance audits and API integration."
      metrics={[{ value:'25%', label:'Engagement Boost' },{ value:'React', label:'Dynamic UI' },{ value:'API', label:'Integration' },{ value:'Live', label:'selfany.com' }]}
      metaItems={[{ label:'Category', value:'Web Development' },{ label:'Stack', value:'React · PHP · API Integration · Performance' }]}
      projectDetails={[{ label:'Client', value:'Selfany / LabileConsult' },{ label:'Type', value:'UI Development' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Selfany: UI Development"
      overviewProblem="The client needed a dynamic, high-performance web presence to improve engagement and conversions."
      overviewRole="I built React interfaces that improved engagement by 25%, integrated backend APIs, and conducted performance audits."
      archTitle="Technical Approach" archSubhead="Performance-first React architecture."
      archCards={[{ num:'Layer 01', icon:'fa-code', title:'React Components', desc:'Dynamic, interactive components responding to user behavior.' },{ num:'Layer 02', icon:'fa-plug', title:'API Integration', desc:'Seamless REST API integration with backend services.' },{ num:'Layer 03', icon:'fa-gauge-high', title:'Performance Audits', desc:'Systematic Lighthouse analysis eliminating bottlenecks.' }]}
      codeFilename="src/hooks/usePerformance.js" codeLines={[['export function usePerformance() {', '01'],['  const [metrics, setMetrics] = useState(null);', '02'],['  useEffect(() => {', '03'],['    const observer = new PerformanceObserver((list) => {', '04'],['      setMetrics(list.getEntries());', '05'],['    });', '06'],['    observer.observe({ entryTypes: ["measure"] });', '07'],['  }, []);', '08'],['  return metrics;', '09'],['}', '10']]}
      pullQuote="A 25% engagement improvement comes from systematically finding and fixing every bottleneck, one by one."
      decisionCards={[{ num:'01', title:'React for UX', desc:'Component model enabling highly interactive, responsive interfaces.' },{ num:'02', title:'Performance Budget', desc:'Lighthouse CI to prevent regression in deployment pipeline.' }]}
      resultCards={[{ value:'25%', label:'Engagement' },{ value:'React', label:'Dynamic UI' },{ value:'API-First', label:'Integration' },{ value:'Live', label:'selfany.com' }]}
      resultBody="Selfany is live at selfany.com with 25% improved engagement through performance optimization."
      founderNote1="Performance optimization is a discipline, not a one-time task. Measure, fix, measure again."
      founderNote2="Great frontend performance means nothing if the API layer isn't optimized too."
      nextCaseTitle="S-Portal: School Board" nextCaseDesc="Federal school board announcement portal." nextCaseLink="/work/sportal"
      accentColor="#7C3AED" codeBg="#1A0A2E"
    />
  )
}
