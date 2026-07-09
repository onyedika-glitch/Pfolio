import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'

export default function ILearnovaCaseStudy() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · E-Learning"
      headline={<>iLearnova —<br />E-Learning Platform</>}
      subhead="Full-scale e-learning platform built for 500+ users. Led the development team, architected the REST API backend, and optimised frontend performance by 40%."
      metrics={[
        { value: '500+', label: 'Active Users' },
        { value: '40%', label: 'Load Time Improvement' },
        { value: 'Full-Stack', label: 'Backend + Frontend' },
        { value: 'Live', label: 'ilearnovafrontend.vercel.app' },
      ]}
      metaItems={[
        { label: 'Category', value: 'EdTech · E-Learning' },
        { label: 'Role', value: 'Lead Developer & Team Lead' },
        { label: 'Stack', value: 'React · Node.js · REST APIs · Performance Optimisation' },
        { label: 'Year', value: '2023' },
      ]}
      projectDetails={[
        { label: 'Client', value: 'iLearnova' },
        { label: 'Type', value: 'EdTech SaaS' },
        { label: 'Role', value: 'Lead Developer' },
        { label: 'Users', value: '500+' },
        { label: 'Status', value: 'live' },
      ]}
      breadcrumbLabel="iLearnova — E-Learning Platform"
      overviewProblem="iLearnova needed a scalable e-learning platform capable of serving hundreds of concurrent users with a smooth, responsive experience. The existing prototype had performance issues and no clear API architecture."
      overviewRole="I led the development team end-to-end. I architected the REST APIs — defining the contract between frontend and backend before a line of code was written. I then took ownership of frontend performance, running audits and eliminating bottlenecks until we hit a 40% improvement in load times."
      archTitle="Architecture Overview"
      archSubhead="A contract-first full-stack build designed for performance, maintainability, and team clarity from day one."
      archCards={[
        { num: 'Layer 01 —', icon: 'fa-plug', title: 'REST API Design', desc: 'API contract defined before implementation began. Endpoints, response shapes, error codes, and pagination patterns were all agreed upfront.' },
        { num: 'Layer 02 —', icon: 'fa-layer-group', title: 'Frontend Architecture', desc: 'React component hierarchy designed around data ownership, not UI hierarchy. State co-located with the components that own it.' },
        { num: 'Layer 03 —', icon: 'fa-gauge-high', title: 'Performance Optimisation', desc: 'Systematic Lighthouse and bundle analysis to identify bottlenecks. Code splitting, lazy loading of course modules, image optimisation.' },
        { num: 'Layer 04 —', icon: 'fa-users-gear', title: 'Team Coordination', desc: 'Weekly architecture reviews to keep the team aligned. PR review standards enforced from day one. Shared coding conventions documented.' },
      ]}
      codeFilename="routes/courses.js"
      codeLines={[
        [<><span className="c-keyword">const</span> <span className="c-param">express</span> = <span className="c-func">require</span>(<span className="c-string">'express'</span>);</>, '01'],
        [<><span className="c-keyword">const</span> <span className="c-param">router</span> = <span className="c-param">express</span>.<span className="c-func">Router</span>();</>, '02'],
        [<><span className="c-comment">// GET /api/courses — paginated course catalogue</span></>, '03'],
        [<><span className="c-param">router</span>.<span className="c-func">get</span>(<span className="c-string">'/'</span>, <span className="c-param">authenticate</span>, <span className="c-param">paginate</span>, <span className="c-keyword">async</span> (<span className="c-param">req</span>, <span className="c-param">res</span>) =&gt; {'{'}</>, '04'],
        [<>&nbsp;&nbsp;<span className="c-keyword">try</span> {'{'}</>, '05'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-keyword">const</span> {'{ '}<span className="c-param">page</span>, <span className="c-param">limit</span>, <span className="c-param">offset</span> {'}'} = <span className="c-param">req</span>.<span className="c-prop">pagination</span>;</>, '06'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-keyword">const</span> <span className="c-param">courses</span> = <span className="c-keyword">await</span> <span className="c-func">Course</span>.<span className="c-func">findAll</span>({'{'}</>, '07'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-param">limit</span>, <span className="c-param">offset</span>,</>, '08'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">where</span>: {'{ '}<span className="c-param">published</span>: <span className="c-keyword">true</span> {'}'},</>, '09'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">include</span>: [<span className="c-string">'instructor'</span>, <span className="c-string">'modules'</span>],</>, '10'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;{'}'});</>, '11'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-param">res</span>.<span className="c-func">json</span>({'{'}</>, '12'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">data</span>: <span className="c-param">courses</span>,</>, '13'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;{'}'});</>, '14'],
        [<>&nbsp;&nbsp;{'}'} <span className="c-keyword">catch</span> (<span className="c-param">err</span>) {'{'}</>, '15'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-param">res</span>.<span className="c-func">status</span>(<span className="c-num">500</span>).<span className="c-func">json</span>({'{ '}<span className="c-prop">error</span>: <span className="c-param">err</span>.<span className="c-prop">message</span> {'}'});</>, '16'],
        [<>&nbsp;&nbsp;{'}'}</>, '17'],
        [<>{'}'});</>, '18'],
        [<><span className="c-keyword">module</span>.<span className="c-prop">exports</span> = <span className="c-param">router</span>;</>, '19'],
      ]}
      pullQuote={"\"A 40% improvement in load times isn't a lucky number — it's the result of running systematic performance audits, identifying the bottlenecks, and having the discipline to fix them before shipping.\""}
      decisionCards={[
        { num: '01 —', title: 'API Contract First', desc: 'Before any backend code was written, I produced a full API specification — every route, request shape, response envelope, pagination model, and error code.' },
        { num: '02 —', title: 'React Performance Patterns', desc: 'I introduced code splitting at the route level, lazy-loaded course video modules, memoised expensive component subtrees, and moved API caching to the network layer.' },
        { num: '03 —', title: 'Team Architecture Reviews', desc: 'Running weekly architecture reviews ensured every significant technical decision was discussed as a team, documented with rationale, and agreed before implementation.' },
      ]}
      resultCards={[
        { value: '500+', label: 'Active users served at platform launch' },
        { value: '40%', label: 'Load time improvement through performance engineering' },
        { value: 'Full REST', label: 'API architecture built from scratch, contract-first' },
        { value: 'Team Lead', label: 'Led full development cycle from architecture to delivery' },
      ]}
      resultBody="iLearnova launched as a production-grade platform with measurably better performance than its prototype predecessor. The REST API architecture continues to serve as the backbone of the platform's data layer."
      founderNote1="I built iLearnova's platform because I understood that performance is not a polish layer — it's an architectural decision made on day one."
      founderNote2="Leading a development team means more than writing good code. It means setting the engineering culture, owning the decisions, and being accountable for the outcome."
      nextCaseTitle="Placebet247 — Betting Platform"
      nextCaseDesc="Comprehensive betting platform with real-time data feeds, high-volume user interactions, and transaction processing."
      nextCaseLink="/work/placebet247"
      accentColor="#4F46E5"
      codeBg="#1E1B4B"
    />
  )
}
