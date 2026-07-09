import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'

export default function CareMandateCaseStudy() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Healthcare"
      headline={<>CareMandate —<br />Clinical Management System</>}
      subhead="A TurboRepo monorepo delivering a unified SaaS dashboard + React Native mobile app for medical teams."
      metrics={[
        { value: 'Monorepo', label: 'Unified Architecture' },
        { value: '2', label: 'Platforms: Web + Mobile' },
        { value: '100%', label: 'Data Consistency' },
        { value: 'Live', label: 'caremandate.ai' },
      ]}
      metaItems={[
        { label: 'Category', value: 'Healthcare · Clinical Systems' },
        { label: 'Role', value: 'Lead Architect & Engineer' },
        { label: 'Stack', value: 'React (Vite) · React Native (Expo) · TurboRepo · TypeScript · Node.js · Express' },
        { label: 'Year', value: '2024' },
      ]}
      projectDetails={[
        { label: 'Client', value: 'CareMandate' },
        { label: 'Type', value: 'Healthcare SaaS' },
        { label: 'Engagement', value: 'Lead Architect' },
        { label: 'Duration', value: 'Ongoing' },
        { label: 'Status', value: 'live' },
      ]}
      breadcrumbLabel="CareMandate — Clinical Management System"
      overviewProblem="Medical teams needed tools for patient data management, staff coordination, and compliance tracking across both desktop and mobile environments. The challenge was building two separate products while maintaining 100% data consistency and avoiding duplicated logic."
      overviewRole="I architected the entire monorepo structure using TurboRepo. This meant designing shared packages for business logic, type definitions, and utilities that both the React web app and Expo mobile app consumed."
      archTitle="Architecture Overview"
      archSubhead="A monorepo-first design pattern built for code reuse, type safety, and shipping web and mobile in lockstep."
      archCards={[
        { num: 'Layer 01 —', icon: 'fa-cubes', title: 'Monorepo Structure', desc: 'TurboRepo orchestrates the workspace. Shared packages for types, utils, and API clients. Web and mobile apps are workspace consumers — not separate projects.' },
        { num: 'Layer 02 —', icon: 'fa-display', title: 'React (Vite) Web', desc: 'High-performance admin portal with complex data visualisation. Role-based access, patient records, staff coordination dashboards, compliance reporting.' },
        { num: 'Layer 03 —', icon: 'fa-mobile-screen-button', title: 'Expo React Native', desc: 'Companion mobile app for healthcare professionals. Shares core business logic and API layer with the web app.' },
        { num: 'Layer 04 —', icon: 'fa-server', title: 'Node.js Backend', desc: 'Secure TypeScript Express API. Handles patient data, staff management, compliance tracking. Shared type contracts with frontend via monorepo packages.' },
      ]}
      codeFilename="packages/api-client/index.ts"
      codeLines={[
        [<><span className="c-comment">// Shared API client — consumed by both web and mobile</span></>, '01'],
        [<><span className="c-keyword">import</span> <span className="c-plain">{'{ '}</span><span className="c-type">Patient</span><span className="c-plain">, </span><span className="c-type">ApiResponse</span><span className="c-plain"> {'}'}</span> <span className="c-keyword">from</span> <span className="c-string">'@caremandate/types'</span>;</>, '02'],
        [<>&nbsp;</>, '03'],
        [<><span className="c-keyword">export</span> <span className="c-keyword">async function</span> <span className="c-func">getPatient</span>(</>, '04'],
        [<>&nbsp;&nbsp;<span className="c-param">id</span>: <span className="c-type">string</span></>, '05'],
        [<>): <span className="c-type">Promise</span>&lt;<span className="c-type">ApiResponse</span>&lt;<span className="c-type">Patient</span>&gt;&gt; {'{'}</>, '06'],
        [<>&nbsp;&nbsp;<span className="c-comment">// Same function. Web app uses it. Mobile app uses it.</span></>, '07'],
        [<>&nbsp;&nbsp;<span className="c-keyword">const</span> <span className="c-param">res</span> = <span className="c-keyword">await</span> <span className="c-func">fetch</span>(<span className="c-string">`/api/patients/${'{'}<span className="c-param">id</span>{'}'}`</span>, {'{'}</>, '08'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-param">headers</span>: <span className="c-func">buildHeaders</span>(),</>, '09'],
        [<>&nbsp;&nbsp;{'}'});</>, '10'],
        [<>&nbsp;&nbsp;<span className="c-keyword">if</span> (!<span className="c-param">res</span>.<span className="c-func">ok</span>) <span className="c-keyword">return</span> <span className="c-func">handleError</span>(<span className="c-param">res</span>);</>, '11'],
        [<>&nbsp;&nbsp;<span className="c-keyword">return</span> {'{ '}<span className="c-param">data</span>: <span className="c-keyword">await</span> <span className="c-param">res</span>.<span className="c-func">json</span>(), <span className="c-param">ok</span>: <span className="c-keyword">true</span> {'}'};</>, '12'],
        [<>{'}'}</>, '13'],
      ]}
      pullQuote={"\"The monorepo decision meant that a bug fixed in the core business logic was fixed on both web and mobile simultaneously. That's the engineering discipline that separates systems that last from systems that don't.\""}
      decisionCards={[
        { num: '01 —', title: 'TurboRepo over Nx', desc: 'Chose TurboRepo for its speed and simplicity. Remote caching cut CI build times by 60% compared to running builds independently.' },
        { num: '02 —', title: 'Shared Type Contracts', desc: 'All API request/response shapes are defined once in a shared package. TypeScript enforces them across both apps. Zero type drift.' },
        { num: '03 —', title: 'Expo over Bare RN', desc: "Expo's managed workflow let us ship a production-grade mobile app without maintaining native build tooling. EAS Build handles distribution." },
      ]}
      resultCards={[
        { value: '2', label: 'Platforms shipped from a single codebase' },
        { value: '100%', label: 'Data consistency across web and mobile' },
        { value: '60%', label: 'Reduction in CI build time via remote caching' },
        { value: '0', label: 'Type drift incidents post-launch' },
      ]}
      resultBody="CareMandate is live at caremandate.ai. The platform serves medical teams with patient management, staff coordination, and compliance tracking. New features ship to both web and mobile in the same pull request."
      founderNote1="I built the CareMandate architecture because I've seen what happens when web and mobile are built as separate projects by separate teams — you get data inconsistencies, duplicated bugs, and a maintenance nightmare."
      founderNote2="The monorepo approach wasn't trendy engineering — it was the right call for a healthcare system where data integrity is non-negotiable."
      nextCaseTitle="iLearnova — E-Learning Platform"
      nextCaseDesc="Full-scale learning platform. 500+ users. 40% load time improvement through performance engineering."
      nextCaseLink="/work/ilearnova"
      accentColor="#0D9488"
      codeBg="#0F2E2A"
    />
  )
}
