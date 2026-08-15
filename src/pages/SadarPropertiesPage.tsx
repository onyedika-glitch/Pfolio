import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function SadarPropertiesPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Real Estate Tech"
      headline={<>Sadar Properties<br />Wholesaling Toolkit</>}
      subhead="A real estate wholesaling toolkit with a React dashboard, Express + PostgreSQL backend, deal math, buyer matching, and CSV/Excel import-export. Founded."
      metrics={[{ value:'3', label:'Directories' },{ value:'MAO', label:'Deal Math' },{ value:'CSV', label:'Import / Excel Export' },{ value:'Live', label:'Production' }]}
      metaItems={[{ label:'Category', value:'Real Estate CRM' },{ label:'Role', value:'Founder' },{ label:'Stack', value:'React · Vite · Tailwind · Express · PostgreSQL · OAuth 2.0' }]}
      projectDetails={[{ label:'Company', value:'Sadar Properties' },{ label:'Type', value:'Wholesaling CRM' },{ label:'Role', value:'Founder' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Sadar Properties: Wholesaling Toolkit"
      overviewProblem="Wholesalers tracked sellers, buyers, and properties in spreadsheets: manual, error-prone, and impossible to act on quickly."
      overviewRole="As founder, I built the full stack. The first version ran on browser localStorage; it was then rebuilt with a real Express + PostgreSQL backend (migrated from SQLite), full authentication with Google/Facebook social login, and the React dashboard."
      archTitle="Architecture" archSubhead="React dashboard over an Express + PostgreSQL API."
      archCards={[{ num:'Layer 01', icon:'fa-house-chimney', title:'Deal Board', desc:'Filter by property type and lead category, price brackets, and urgency toggles like "under $10k in 4 hours" or "new in 24 hours".' },{ num:'Layer 02', icon:'fa-calculator', title:'Deal Math', desc:'MAO calculation, offer range, assignment fee, and deal score computed for every property.' },{ num:'Layer 03', icon:'fa-user-check', title:'Buyer Matching', desc:'Buyer and investor matching by buy box on each property, with inline-editable sellers, buyers, and investors directories.' },{ num:'Layer 04', icon:'fa-file-import', title:'Import / Export', desc:'CSV import, Excel/CSV export, and sample-data seeding for fast onboarding.' }]}
      codeFilename="get_buyers.js" codeLines={[['import { query } from \'./server/db.js\';', '01'],['', '02'],['async function run() {', '03'],['  try {', '04'],['    const rows = await query(\'SELECT * FROM buyers\');', '05'],['    console.log(JSON.stringify(rows, null, 2));', '06'],['  } catch (e) {', '07'],['    console.error(e);', '08'],['  }', '09'],['  process.exit(0);', '10'],['}', '11'],['', '12'],['run();', '13']]}
      pullQuote="Wholesaling is a numbers game. Better data, faster calculations, and smarter buyer matches win."
      decisionCards={[{ num:'01', title:'Backend from Day One', desc:'Rebuilt from localStorage to a real Express + PostgreSQL API with social login before adding the heavier features.' },{ num:'02', title:'CSV-First Workflow', desc:'Manual CSV upload is the primary workflow — scrapers stay optional for anyone who wants them.' }]}
      resultCards={[{ value:'3', label:'Sellers · Buyers · Investors' },{ value:'MAO', label:'Deal math built in' },{ value:'CSV/Excel', label:'Import & export' },{ value:'OAuth', label:'Google + Facebook login' }]}
      resultBody="Sadar Properties is live in production, giving the team one place to track sellers, buyers, properties, and deals instead of spreadsheets."
      founderNote1="Founding taught me that the best software solves a real, painful problem. We automated spreadsheet-based workflows."
      founderNote2="The buy-box matching and deal-score math are the features the team actually reaches for every day."
      nextCaseTitle="YouExtractor: Tutorial to Course & Code Generator" nextCaseDesc="Turns YouTube coding tutorials into structured guides and runnable code projects using AI." nextCaseLink="/work/youextractor"
      accentColor="#B45309" codeBg="#1A0E00"
    />
  )
}
