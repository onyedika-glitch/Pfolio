import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function GigoraNetworkPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Web3 Marketplace"
      headline={<>Gigora Network<br />Freelance Marketplace</>}
      subhead="A full-featured freelance marketplace connecting freelancers and clients, built with Laravel 13, PostgreSQL, Cloudinary, and Resend."
      metrics={[{ value:'3', label:'User Roles' },{ value:'8', label:'Languages' },{ value:'Real-Time', label:'Messaging' },{ value:'Live', label:'gigoranetwork.com' }]}
      metaItems={[{ label:'Category', value:'Web3 · Freelance Marketplace' },{ label:'Role', value:'Founder & Senior Software Infrastructure Engineer' },{ label:'Stack', value:'Laravel 13 · PHP 8.5 · PostgreSQL · Cloudinary · Resend · Sanctum · Alpine.js' }]}
      projectDetails={[{ label:'Company', value:'Gigora Network' },{ label:'Type', value:'Freelance Marketplace' },{ label:'Role', value:'Founder & Senior Software Infrastructure Engineer' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Gigora Network: Freelance Marketplace"
      overviewProblem="Freelance marketplaces suffer from the same trust gap: clients can't verify talent, and freelancers worry about getting paid. Gigora needed a platform where profiles are vetted, projects are tracked, and payments are protected by escrow."
      overviewRole="As Founder and Senior Software Infrastructure Engineer, I built the platform end-to-end: role-based user system, project and proposal flows, reviews, real-time messaging, notifications via Resend, an AI talent-matching service, simulated smart-contract escrow with a dispute system, DAO governance voting, and a full admin panel."
      archTitle="Architecture" archSubhead="A Laravel platform organized around trust, matching, and payments."
      archCards={[{ num:'Layer 01', icon:'fa-users', title:'Users & Profiles', desc:'Registration with freelancer/client/admin roles, email verification, profile management, portfolio uploads, and admin-approved verification badges.' },{ num:'Layer 02', icon:'fa-briefcase', title:'Projects & Proposals', desc:'Project CRUD with attachments (Cloudinary), budgets and deadlines, proposal submission with duplicate prevention, and accept/reject hiring flow.' },{ num:'Layer 03', icon:'fa-hand-holding-dollar', title:'Escrow & Disputes', desc:'Simulated smart-contract escrow: funds release on completion, refund to client on cancellation, with a dispute system for conflict resolution.' },{ num:'Layer 04', icon:'fa-robot', title:'Matching & Messaging', desc:'Skill-based MatchingService recommending freelancers for projects, real-time messaging with read tracking, Resend email notifications, and DAO proposal voting.' }]}
      codeFilename="app/Services/MatchingService.php" codeLines={[['public function recommendFreelancersForProject(Project $project, int $limit = 6): Collection', '01'],['{', '02'],['    $projectSkills = $this->extractKeywords(', '03'],['        $project->name . \' \' . ($project->category ?? \'\') . \' \' . $project->description', '04'],['    );', '05'],['    return Freelancer::with(\'skills\')', '06'],['        ->where(\'id\', \'!=\', $project->hired_freelancer_id)', '07'],['        ->get()', '08'],['        ->map(function ($freelancer) use ($projectSkills) {', '09'],['            $freelancerSkills = $freelancer->skills->pluck(\'name\')->map(fn($s) => strtolower($s))->toArray();', '10'],['            $matchCount = count(array_intersect($projectSkills, $freelancerSkills));', '11'],['            $freelancer->match_score = $matchCount * 20 + $freelancer->rating * 10;', '12'],['            return $freelancer;', '13'],['        })', '14'],['        ->sortByDesc(\'match_score\')', '15'],['        ->take($limit)', '16'],['        ->values();', '17'],['}', '18']]}
      pullQuote="A marketplace lives or dies on trust: vetted profiles, tracked work, and escrow-backed payments are how Gigora earns it."
      decisionCards={[{ num:'01', title:'Skill-Based Matching', desc:'Match score from keyword overlap plus freelancer rating, so clients see the most relevant talent first.' },{ num:'02', title:'Escrow + Dispute Flow', desc:'Funds release on completion and refund on cancellation, with a dispute path so neither side loses by default.' }]}
      resultCards={[{ value:'3', label:'User roles' },{ value:'8', label:'Languages' },{ value:'Real-Time', label:'Messaging + notifications' },{ value:'Live', label:'gigoranetwork.com' }]}
      resultBody="Gigora Network is live at gigoranetwork.com: browse and filter freelancers, post projects, review proposals, chat in real time, and get paid through escrow-protected flows."
      founderNote1="I built Gigora because the freelance economy has a trust problem. When profiles are vetted and payments are escrowed, both sides finally have something to lose by not delivering."
      founderNote2="The escrow and dispute system was the hardest part to get right — it's what separates a marketplace people use from one people abandon."
      nextCaseTitle="Discount Club Cayman: Membership Platform" nextCaseDesc="Membership discounts and benefits platform for the Cayman Islands." nextCaseLink="/work/discount-club-cayman"
      accentColor="#7C3AED" codeBg="#1E1B4B"
    />
  )
}
