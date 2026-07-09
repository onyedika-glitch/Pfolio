import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function ZentrixEquityPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Fintech"
      headline={<>Zentrix Equity —<br />Cap Table Platform</>}
      subhead="Real-time equity distribution and cap table management for startups and VCs via WebSocket sync."
      metrics={[{ value:'Real-Time', label:'Collaborative Ledger' },{ value:'Socket.io', label:'WebSocket Powered' },{ value:'Multi-User', label:'Startups & VCs' },{ value:'Live', label:'equityapp.zentrixinnovationlab.com' }]}
      metaItems={[{ label:'Category', value:'Fintech · Cap Table' },{ label:'Stack', value:'Node.js · Socket.io · PostgreSQL · React · TypeScript' }]}
      projectDetails={[{ label:'Client', value:'Zentrix' },{ label:'Type', value:'Cap Table Management' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Zentrix Equity — Cap Table Platform"
      overviewProblem="Startups and investors needed a real-time platform for collaborative equity and cap table management."
      overviewRole="I built the full-stack platform with Socket.io WebSocket sync and PostgreSQL-backed equity ledger."
      archTitle="Platform Architecture" archSubhead="Real-time collaborative architecture for equity management."
      archCards={[{ num:'Layer 01 —', icon:'fa-bolt', title:'Real-Time Sync', desc:'Socket.io WebSocket layer for instant updates across all clients.' },{ num:'Layer 02 —', icon:'fa-database', title:'Equity Ledger', desc:'PostgreSQL schema for cap table events and ownership tracking.' },{ num:'Layer 03 —', icon:'fa-chart-pie', title:'Visualization', desc:'React frontend with interactive cap table charts.' },{ num:'Layer 04 —', icon:'fa-users', title:'Access Control', desc:'Role-based access for founders, investors, and admins.' }]}
      codeFilename="server/services/sync-service.js"
      codeLines={[['class SyncService {', '01'],['  constructor(io) { this.io = io; this.rooms = new Map(); }', '02'],['  broadcastUpdate(capTableId, data) {', '03'],['    this.io.to(capTableId).emit("equity:updated", data);', '04'],['  }', '05'],['}', '06']]}
      pullQuote="Cap table management is about precision and trust. Every stakeholder needs to see the same numbers at the same time."
      decisionCards={[{ num:'01 —', title:'WebSocket-First', desc:'Socket.io for real-time bidirectional cap table updates.' },{ num:'02 —', title:'PostgreSQL Accuracy', desc:'Serializable transactions for equity data integrity.' }]}
      resultCards={[{ value:'Real-Time', label:'Collaborative Updates' },{ value:'Socket.io', label:'WebSocket' },{ value:'PostgreSQL', label:'Data Integrity' },{ value:'Live', label:'Production Deployed' }]}
      resultBody="Zentrix Equity is live at equityapp.zentrixinnovationlab.com."
      founderNote1="Real-time financial systems require both speed and accuracy. The sync layer has to feel instant and be trustworthy."
      founderNote2="The real engineering was in the database schema — designing for concurrent access without conflicts."
      nextCaseTitle="Unlimited Healthcare — Clinical AI"
      nextCaseDesc="High-scale clinical app with AI-driven diagnostics."
      nextCaseLink="/work/unlimited-healthcare"
      accentColor="#4F46E5" codeBg="#0D0B2E"
    />
  )
}
