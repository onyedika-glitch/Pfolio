import React from 'react'
import ServiceLayout from '../components/ServiceLayout'

export default function AIIntegrationPage() {
  return (
    <ServiceLayout
      seo={{
        title: 'AI Integration & LLM Pipelines | Laravel, DeepSeek, Claude, Gemini, GPT-4 | DevOmogo',
        description: 'AI-powered product development: pluggable LLM pipelines, tutorial-to-code generation, AI talent matching, and practical AI features in production (Laravel, DeepSeek, Claude, Gemini, GPT-4).',
        keywords: 'AI development, LLM integration, Laravel AI, DeepSeek, Claude, Gemini, GPT-4, AI matching',
      }}
      name="AI Integration"
      icon="fa-brain"
      headline={<>AI that works on a Monday morning.</>}
      intro="AI features that do real work: LLM pipelines, search over your own data, and automation that saves people time. Shipped to production, not stuck in a demo."
      whatYouGet={[
        'Multi-model LLM pipelines with fallback strategies',
        'Retrieval-augmented generation (RAG) with vector databases',
        'Structured data extraction from unstructured documents',
        'Cost-optimised inference: monitor and control spend',
        'Observability, logging, and performance monitoring',
        'Human-in-the-loop safeguards for critical workflows',
      ]}
      tools={['Claude API', 'OpenAI', 'Gemini', 'DeepSeek', 'Whisper', 'RAG', 'Embeddings', 'Vector DBs', 'Observability']}
      approachHeading="How I add AI to products."
      story={[
        "There's a big gap between an impressive AI demo and something you can rely on every day. I close it by combining models, writing and testing prompts, building embeddings pipelines and keeping costs down. Everything ships with monitoring, a plan B when a model fails, and a human in the loop where it matters.",
        'Maybe you need to pull clean data out of messy documents, let people search and ask questions across your own knowledge base, or hand repetitive work to an AI agent. Whatever it is, I build AI that works on a Monday morning, not just in a demo.',
      ]}
      approach={[
        { icon: 'fa-puzzle-piece', title: 'Practical pipelines', desc: 'I chain models together, one to pull out the facts, one to reason, one to write, and you can see what each step did. If a model fails, there’s always a fallback.' },
        { icon: 'fa-database', title: 'Grounded in your data', desc: 'Retrieval-augmented generation grounded in your data. Vector embeddings, hybrid search, and context window optimisation for accurate, relevant outputs.' },
        { icon: 'fa-chart-simple', title: 'Measure and optimise', desc: 'Token usage, latency, cost per query: every metric is tracked. I keep tuning which model and which prompt to use, so you get the most out of every dollar.' },
      ]}
      related={['/work/youextractor', '/work/japa-coach', '/work/gigora-network']}
    />
  )
}
