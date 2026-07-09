import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'
import CaseStudyLayout from '../components/CaseStudyLayout'

export default function YouExtractorCaseStudy() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · AI DevOps"
      headline={<>YouExtractor —<br />LLM Extraction Engine</>}
      subhead="Architecting a multi-model chained extraction pipeline capable of processing 10M+ records monthly with sub-200ms p99 latency."
      metrics={[
        { value: '10M+', label: 'Records / Month' },
        { value: '<200ms', label: 'P99 Latency' },
        { value: '99.97%', label: 'Uptime' },
        { value: 'Live', label: 'youextractor.me' },
      ]}
      metaItems={[
        { label: 'Category', value: 'AI DevOps · LLM Integration' },
        { label: 'Role', value: 'Founder & Lead Architect' },
        { label: 'Stack', value: 'Node.js · TypeScript · Claude API · Gemini · PostgreSQL · Redis · Docker · AWS' },
        { label: 'Year', value: '2024' },
      ]}
      projectDetails={[
        { label: 'Client', value: 'YouExtractor' },
        { label: 'Type', value: 'AI Infrastructure' },
        { label: 'Engagement', value: 'Full Architect' },
        { label: 'Duration', value: '4 months' },
        { label: 'Status', value: 'live' },
      ]}
      breadcrumbLabel="YouExtractor — LLM Extraction Engine"
      overviewProblem="YouExtractor needed to process massive volumes of unstructured data — product listings, job descriptions, financial filings, and web content — and return clean, structured JSON at scale. The existing approach relied on brittle regex pipelines and single-model calls that hallucinated under load, had no fallback strategy, and cost 4x more per extraction than necessary."
      overviewRole="I joined as Founder and Lead Architect. I owned the full system from infrastructure topology to model orchestration logic. This was not a feature build — it was a ground-up re-architecture of how the platform ingested and processed data."
      archTitle="Architecture Overview"
      archSubhead="A four-layer pipeline built for fault tolerance, cost efficiency, and model interoperability."
      archCards={[
        { num: 'Layer 01 —', icon: 'fa-layer-group', title: 'Ingestion Queue', desc: 'Redis-backed distributed queue with priority lanes. Incoming extraction jobs are fingerprinted, deduplicated, and routed by content type before model selection.' },
        { num: 'Layer 02 —', icon: 'fa-diagram-project', title: 'Model Orchestration', desc: 'A TypeScript orchestrator selects the optimal model per content type — Claude 3.5 Sonnet for reasoning-heavy extractions, Gemini Flash for speed-critical bulk runs.' },
        { num: 'Layer 03 —', icon: 'fa-shield-halved', title: 'Validation & Retry', desc: 'JSON Schema validation on every extraction output. Failed validations trigger a retry with an enriched prompt containing the failure reason. Maximum 3 retry hops.' },
        { num: 'Layer 04 —', icon: 'fa-database', title: 'Storage & Delivery', desc: 'PostgreSQL for structured results with full extraction audit trail. Redis for hot cache of recently extracted entities. Webhook delivery to downstream consumers.' },
      ]}
      codeFilename="orchestrator.ts"
      codeLines={[
        [<><span className="c-keyword">async function</span> <span className="c-func">orchestrateExtraction</span>(</>, '01'],
        [<>&nbsp;&nbsp;<span className="c-param">job</span>: <span className="c-type">ExtractionJob</span></>, '02'],
        [<>): <span className="c-type">Promise</span>&lt;<span className="c-type">ExtractionResult</span>&gt; {'{'}</>, '03'],
        [<>&nbsp;&nbsp;<span className="c-comment">// Route to optimal model based on content type + queue depth</span></>, '04'],
        [<>&nbsp;&nbsp;<span className="c-keyword">const</span> <span className="c-param">model</span> = <span className="c-func">selectModel</span>({'{'}</>, '05'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-param">contentType</span>: job.<span className="c-param">type</span>,</>, '06'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-param">queueDepth</span>: <span className="c-keyword">await</span> <span className="c-func">getQueueDepth</span>(),</>, '07'],
        [<>&nbsp;&nbsp;{'}'});</>, '08'],
        [<>&nbsp;</>, '09'],
        [<>&nbsp;&nbsp;<span className="c-keyword">let</span> <span className="c-param">result</span> = <span className="c-keyword">await</span> <span className="c-func">callModel</span>(<span className="c-param">model</span>, <span className="c-param">job</span>.<span className="c-param">payload</span>);</>, '10'],
        [<>&nbsp;&nbsp;<span className="c-keyword">let</span> <span className="c-param">retries</span> = <span className="c-num">0</span>;</>, '11'],
        [<>&nbsp;</>, '12'],
        [<>&nbsp;&nbsp;<span className="c-keyword">while</span> (<span className="c-param">retries</span> &lt; <span className="c-num">3</span>) {'{'}</>, '13'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-keyword">const</span> <span className="c-param">valid</span> = <span className="c-func">validateSchema</span>(<span className="c-param">result</span>);</>, '14'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-keyword">if</span> (<span className="c-param">valid</span>.<span className="c-param">ok</span>) <span className="c-keyword">break</span>;</>, '15'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-comment">// Stateful retry: pass failure reason as context</span></>, '16'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-param">result</span> = <span className="c-keyword">await</span> <span className="c-func">retryWithContext</span>({'{'}</>, '17'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-param">model</span>, <span className="c-param">prev</span>: <span className="c-param">result</span>,</>, '18'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-param">reason</span>: <span className="c-param">valid</span>.<span className="c-param">error</span>,</>, '19'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;{'}'});</>, '20'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-param">retries</span>++;</>, '21'],
        [<>&nbsp;&nbsp;{'}'}</>, '22'],
        [<>&nbsp;&nbsp;<span className="c-keyword">if</span> (<span className="c-param">retries</span> === <span className="c-num">3</span>) <span className="c-keyword">await</span> <span className="c-func">escalateToReview</span>(<span className="c-param">job</span>);</>, '23'],
        [<>&nbsp;&nbsp;<span className="c-keyword">return</span> <span className="c-func">persist</span>(<span className="c-param">result</span>, <span className="c-param">job</span>.<span className="c-param">id</span>);</>, '24'],
        [<>{'}'}</>, '25'],
      ]}
      pullQuote={"\"The retry architecture alone reduced hallucination-related failures by 94%. Chaining models with context wasn't just a performance win — it fundamentally changed what the system could extract.\""}
      decisionCards={[
        { num: '01 —', title: 'Model Selection Strategy', desc: 'Choosing between Claude and Gemini per extraction type was not arbitrary. Claude handles multi-step reasoning extractions. Gemini Flash handles high-volume, speed-sensitive bulk runs.' },
        { num: '02 —', title: 'Prompt Context Chaining', desc: 'Each model in the chain receives the output of the previous model plus a delta context explaining what changed and why. This dramatically reduced hallucination on complex nested extractions.' },
        { num: '03 —', title: 'Failure Escalation Protocol', desc: 'Rather than silently dropping failed extractions, I built a human review queue with Slack webhook alerts for records that exhausted retry budget.' },
      ]}
      resultCards={[
        { value: '10M+', label: 'Records processed monthly at launch' },
        { value: '94%', label: 'Reduction in hallucination failures' },
        { value: '3x', label: 'Cost reduction per extraction unit' },
        { value: '4 mo.', label: 'Architecture doc to production' },
      ]}
      resultBody="The YouExtractor pipeline is now the backbone of the platform's data layer. The system runs on AWS ECS with horizontal auto-scaling, zero-downtime deployments, and a full observability stack."
      founderNote1="I built YouExtractor's extraction engine because I understood the problem from first principles — not just as an engineer, but as someone who has worked with unstructured data at scale."
      founderNote2="When something breaks in production at 2am, I'm the one who gets paged. That's what it means to be a founding engineer, not a contractor."
      nextCaseTitle="CareMandate — Patient Operations Platform"
      nextCaseDesc="Enterprise monorepo for end-to-end clinical management. 50,000+ patients. HIPAA-aligned."
      nextCaseLink="/work/caremandate"
      accentColor="#3B82F6"
    />
  )
}
