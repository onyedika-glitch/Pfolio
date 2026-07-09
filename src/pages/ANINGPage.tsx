import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function ANINGPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Marketplace"
      headline={<>ANING —<br />Community Marketplace</>}
      subhead="Lightweight marketplace for services, products, jobs, and events with real-time messaging and Paystack payments."
      metrics={[{ value:'Marketplace', label:'Multi-Vendor' },{ value:'Real-Time', label:'Messaging' },{ value:'Paystack', label:'Payments' },{ value:'Live', label:'aning.zentrixinnovationlab.com' }]}
      metaItems={[{ label:'Category', value:'Service Marketplace' },{ label:'Stack', value:'React · Node.js · Paystack · WebSockets' }]}
      projectDetails={[{ label:'Type', value:'Community Marketplace' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="ANING — Community Marketplace"
      overviewProblem="A community needed a marketplace platform for services, products, jobs, and events with real-time communication."
      overviewRole="I built the full marketplace engine with React, Node.js, real-time messaging, and Paystack payments."
      archTitle="Architecture" archSubhead="Modular marketplace with real-time features."
      archCards={[{ num:'Layer 01 —', icon:'fa-store', title:'Listing Engine', desc:'Multi-category listings with rich media support.' },{ num:'Layer 02 —', icon:'fa-comments', title:'Real-Time Messaging', desc:'Instant buyer-seller communication with notifications.' },{ num:'Layer 03 —', icon:'fa-credit-card', title:'Payment Integration', desc:'Secure Paystack processing for marketplace transactions.' },{ num:'Layer 04 —', icon:'fa-user-gear', title:'User Management', desc:'Profiles, seller verification, and review system.' }]}
      codeFilename="server/controllers/messaging.js" codeLines={[['io.on("connection", (socket) => {', '01'],['  socket.on("join:conversation", (convId) => {', '02'],['    socket.join(convId);', '03'],['  });', '04'],['  socket.on("message:send", async (data) => {', '05'],['    const msg = await Message.create(data);', '06'],['    socket.to(data.conversationId).emit("message:new", msg);', '07'],['  });', '08'],['});', '09']]}
      pullQuote="A community marketplace lives on trust between strangers. Every feature was designed to build that trust."
      decisionCards={[{ num:'01 —', title:'Node.js Backend', desc:'Non-blocking I/O ideal for real-time messaging and transactions.' },{ num:'02 —', title:'Paystack Integration', desc:'Reliable payment processing for African markets.' }]}
      resultCards={[{ value:'Multi-Vendor', label:'Marketplace' },{ value:'Real-Time', label:'Messaging' },{ value:'Paystack', label:'Payments' },{ value:'Live', label:'Production' }]}
      resultBody="ANING is live at aning.zentrixinnovationlab.com."
      founderNote1="Building a marketplace taught me the complexity of balancing buyer and seller experiences."
      founderNote2="WebSocket-based messaging made the platform feel alive and responsive."
      nextCaseTitle="Sadar Properties — CRM" nextCaseDesc="Real estate wholesaling CRM with lead parsing." nextCaseLink="/work/sadar-properties"
      accentColor="#059669" codeBg="#022B1A"
    />
  )
}
