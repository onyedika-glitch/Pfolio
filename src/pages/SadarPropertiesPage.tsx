import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function SadarPropertiesPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Real Estate Tech"
      headline={<>Sadar Properties:<br />Wholesaling CRM</>}
      subhead="Real estate wholesaling CRM with automated lead parsing, MAO calculation, and regional property crawling. Co-founded."
      metrics={[{ value:'CRM', label:'Wholesaling Platform' },{ value:'Automated', label:'Lead Parsing' },{ value:'Web Crawler', label:'Listings' },{ value:'Live', label:'sadarproperties.onrender.com' }]}
      metaItems={[{ label:'Category', value:'Real Estate CRM' },{ label:'Stack', value:'React · Express · PostgreSQL · Web Scrapers' }]}
      projectDetails={[{ label:'Type', value:'Wholesaling CRM' },{ label:'Role', value:'Co-Founder' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Sadar Properties: Wholesaling CRM"
      overviewProblem="Wholesalers needed a CRM to automate lead parsing, calculate MAO, match buyers, and crawl listings."
      overviewRole="As co-founder, I built the complete platform with React/Vite, Express/PostgreSQL, and automated web scrapers."
      archTitle="Architecture" archSubhead="Automated wholesaling powered by data pipelines."
      archCards={[{ num:'Layer 01', icon:'fa-house-chimney', title:'Lead Parsing', desc:'Automated extraction from multiple lead sources.' },{ num:'Layer 02', icon:'fa-calculator', title:'MAO Calculator', desc:'Intelligent offer calculation based on ARV and profit targets.' },{ num:'Layer 03', icon:'fa-robot', title:'Web Crawler', desc:'Automated crawler for regional property listings.' },{ num:'Layer 04', icon:'fa-user-check', title:'Buyer Matching', desc:'Algorithm matching properties to buyer buy boxes.' }]}
      codeFilename="services/crawler/index.js" codeLines={[['const crawlListings = async (region) => {', '01'],['  const browser = await puppeteer.launch();', '02'],['  const page = await browser.newPage();', '03'],['  const listings = [];', '04'],['  for (const url of getSourceUrls(region)) {', '05'],['    await page.goto(url);', '06'],['    listings.push(...await page.evaluate(extractData));', '07'],['  }', '08'],['  await browser.close();', '09'],['  return listings;', '10'],['}', '11']]}
      pullQuote="Wholesaling is a numbers game. Better data, faster calculations, smarter buyer matches win."
      decisionCards={[{ num:'01', title:'Puppeteer Crawler', desc:'Headless browser automation for property data extraction.' },{ num:'02', title:'PostgreSQL Data', desc:'Structured schema enabling complex buyer matching queries.' }]}
      resultCards={[{ value:'CRM', label:'Wholesaling' },{ value:'Automated', label:'Lead & Crawl' },{ value:'Smart', label:'MAO Calculator' },{ value:'Live', label:'Production' }]}
      resultBody="Sadar Properties is live at sadarproperties.onrender.com."
      founderNote1="Co-founding taught me that the best software solves a real, painful problem. We automated spreadsheet-based workflows."
      founderNote2="The web crawler was the most technically challenging: building reliable scrapers from diverse listing sites."
      nextCaseTitle="Selfany: UI Development" nextCaseDesc="Dynamic React UI with 25% engagement boost." nextCaseLink="/work/selfany"
      accentColor="#B45309" codeBg="#1A0E00"
    />
  )
}
