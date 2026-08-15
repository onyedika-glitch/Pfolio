import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function ZentrixEquityPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Fintech"
      headline={<>Zentrix Equity<br />Equity &amp; Valuation Platform</>}
      subhead="A real-time equity management and valuation platform built on a WebSocket server with a React 18 + TypeScript frontend and MySQL."
      metrics={[{ value:'Real-Time', label:'WebSocket Updates' },{ value:'10-50ms', label:'Socket Latency' },{ value:'Google', label:'OAuth Login' },{ value:'Live', label:'equityapp.zentrixinnovationlab.com' }]}
      metaItems={[{ label:'Category', value:'Fintech · Equity Management' },{ label:'Role', value:'Full-Stack Engineer' },{ label:'Stack', value:'Node.js · Express · Socket.io · MySQL · React 18 · TypeScript' }]}
      projectDetails={[{ label:'Company', value:'Zentrix Lab' },{ label:'Type', value:'Equity & Valuation Platform' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Zentrix Equity: Equity & Valuation Platform"
      overviewProblem="The original app used a REST API, which meant the frontend had to poll for changes and data could be stale. Equity data changes constantly, so the platform needed live updates without page refreshes."
      overviewRole="I built the platform: a Socket.io WebSocket server replacing the REST API for real-time bidirectional updates, a MySQL data layer with connection pooling, Google OAuth plus JWT and session auth, Resend-based emails, and the React frontend with a useWebSocket hook."
      archTitle="Architecture" archSubhead="Frontend and database connected through a real-time WebSocket server."
      archCards={[{ num:'Layer 01', icon:'fa-bolt', title:'WebSocket Server', desc:'Socket.io server handling real-time bidirectional updates between the React frontend and the database, replacing the older REST polling.' },{ num:'Layer 02', icon:'fa-database', title:'Data Layer', desc:'MySQL connection pool with keep-alive and a connection limit tuned for stability in production.' },{ num:'Layer 03', icon:'fa-shield-halved', title:'Auth', desc:'Google OAuth via Passport, JWT + session handling, bcrypt password hashing, and Resend for transactional emails.' },{ num:'Layer 04', icon:'fa-chart-line', title:'React Frontend', desc:'React 18 + TypeScript with an AuthContext and a useWebSocket hook keeping the UI in sync with server events.' }]}
      codeFilename="websocket-server.js" codeLines={[['// websocket-server.js - Real-time WebSocket Server', '01'],['const http = require(\'http\');', '02'],['const socketIo = require(\'socket.io\');', '03'],['const jwt = require(\'jsonwebtoken\');', '04'],['const bcrypt = require(\'bcryptjs\');', '05'],['const { v4: uuidv4 } = require(\'uuid\');', '06'],['const passport = require(\'passport\');', '07'],['const GoogleStrategy = require(\'passport-google-oauth20\').Strategy;', '08'],['', '09'],['const { pool, getRow, getRows, query } = require(\'./src/config/database\');', '10'],['const { Resend } = require(\'resend\');', '11']]}
      pullQuote="Equity data shouldn't be stale. A WebSocket server means every screen updates the moment something changes."
      decisionCards={[{ num:'01', title:'WebSocket over REST', desc:'Switched from polling a REST API to a persistent Socket.io connection for real-time updates.' },{ num:'02', title:'Keep-Alive Data Layer', desc:'MySQL pool with keep-alive and tuned connection limits so the server survives long sessions.' }]}
      resultCards={[{ value:'10-50ms', label:'Socket latency' },{ value:'Real-Time', label:'Bidirectional updates' },{ value:'Google OAuth', label:'Plus JWT + sessions' },{ value:'Live', label:'equityapp.zentrixinnovationlab.com' }]}
      resultBody="Zentrix Equity is live at equityapp.zentrixinnovationlab.com, serving real-time equity data through a WebSocket-backed full-stack platform."
      founderNote1="The WebSocket architecture wasn't for show: equity and valuation data changes constantly, and stale dashboards are worse than no dashboard."
      founderNote2="Tuning the MySQL pool for keep-alive and connection limits is the kind of detail that keeps a real-time app from falling over under load."
      nextCaseTitle="Unlimited Healthcare: Management System" nextCaseDesc="Healthcare management system with appointments, clinical modules, and mobile apps." nextCaseLink="/work/unlimited-healthcare"
      accentColor="#4F46E5" codeBg="#0D0B2E"
    />
  )
}
