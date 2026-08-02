import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'

export default function Placebet247CaseStudy() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Fintech / Gaming"
      headline={<>Placebet247<br />Real-Time Betting Platform</>}
      subhead="Full-featured sports betting and live gaming platform handling real-time data and high-volume concurrent user interactions."
      metrics={[
        { value: 'Real-Time', label: 'Live Data Feeds' },
        { value: 'High Volume', label: 'Concurrent Users' },
        { value: 'Full Platform', label: 'Sports · Casino · Virtuals' },
        { value: 'Live', label: 'm.placebet247.com' },
      ]}
      metaItems={[
        { label: 'Category', value: 'Fintech · Gaming' },
        { label: 'Role', value: 'Full-Stack Engineer' },
        { label: 'Stack', value: 'PHP · Real-time Data · Security · WebSockets' },
        { label: 'Live', value: 'm.placebet247.com' },
      ]}
      projectDetails={[
        { label: 'Client', value: 'Placebet247' },
        { label: 'Type', value: 'Gaming · Fintech' },
        { label: 'Role', value: 'Full-Stack Engineer' },
        { label: 'Stack', value: 'PHP · WebSockets · MySQL' },
        { label: 'Status', value: 'live' },
      ]}
      breadcrumbLabel="Placebet247: Real-Time Betting Platform"
      overviewProblem="Building a betting platform is one of the hardest categories of web application: you're dealing with real-time odds feeds, high concurrent user loads, financial transaction integrity, and security requirements that cannot be compromised."
      overviewRole="I developed the complete platform, from the architecture to the frontend. Every feature: sports betting, live casino, virtuals, and the payment flow. Security and performance were non-negotiable constraints, not afterthoughts."
      archTitle="Platform Architecture"
      archSubhead="A four-layer system built around the two governing constraints of any betting platform: speed and trust."
      archCards={[
        { num: 'Layer 01', icon: 'fa-bolt', title: 'Real-Time Data Layer', desc: 'WebSocket connections consume live odds feeds from upstream sports data providers. Odds updates are normalised, validated, and pushed to the frontend within milliseconds.' },
        { num: 'Layer 02', icon: 'fa-shield-halved', title: 'Transaction Security', desc: 'All financial operations run through an atomic PHP transaction layer with multi-step validation. Every transaction is signed, logged with a full audit trail.' },
        { num: 'Layer 03', icon: 'fa-user-lock', title: 'Session & Auth Management', desc: 'Token-based session management with device fingerprinting and concurrent session detection. Failed auth attempts trigger progressive rate limiting.' },
        { num: 'Layer 04', icon: 'fa-gauge-high', title: 'Frontend Performance', desc: 'Mobile-first PHP-rendered templates with selective JavaScript hydration for live components. The UI holds up gracefully under concurrent load spikes.' },
      ]}
      codeFilename="transaction.php"
      codeLines={[
        [<><span className="c-keyword">function</span> <span className="c-func">placeBet</span>(<span className="c-param">$userId</span>, <span className="c-param">$selectionId</span>, <span className="c-param">$stake</span>): <span className="c-type">array</span> {'{'}</>, '01'],
        [<>&nbsp;&nbsp;<span className="c-comment">// Acquire advisory lock: prevent concurrent duplicate bets</span></>, '02'],
        [<>&nbsp;&nbsp;<span className="c-func">acquireUserLock</span>(<span className="c-param">$userId</span>);</>, '03'],
        [<>&nbsp;&nbsp;<span className="c-var">$db</span>-&gt;<span className="c-func">beginTransaction</span>();</>, '04'],
        [<>&nbsp;&nbsp;<span className="c-keyword">try</span> {'{'}</>, '05'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-comment">// Validate odds are still current (max 3s stale window)</span></>, '06'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-var">$odds</span> = <span className="c-func">getAndLockOdds</span>(<span className="c-param">$selectionId</span>);</>, '07'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-keyword">if</span> (<span className="c-var">$odds</span>[<span className="c-string">'stale'</span>]) <span className="c-keyword">throw new</span> <span className="c-type">StaleOddsException</span>();</>, '08'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-var">$balance</span> = <span className="c-func">lockUserBalance</span>(<span className="c-param">$userId</span>);</>, '09'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-keyword">if</span> (<span className="c-var">$balance</span> &lt; <span className="c-param">$stake</span>) <span className="c-keyword">throw new</span> <span className="c-type">InsufficientFundsException</span>();</>, '10'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-func">debitBalance</span>(<span className="c-param">$userId</span>, <span className="c-param">$stake</span>);</>, '11'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-var">$betId</span> = <span className="c-func">insertBetRecord</span>(<span className="c-param">$userId</span>, <span className="c-var">$odds</span>, <span className="c-param">$stake</span>);</>, '12'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-var">$db</span>-&gt;<span className="c-func">commit</span>();</>, '13'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-keyword">return</span> [<span className="c-string">'ok'</span> =&gt; <span className="c-keyword">true</span>, <span className="c-string">'betId'</span> =&gt; <span className="c-var">$betId</span>];</>, '14'],
        [<>&nbsp;&nbsp;{'}'} <span className="c-keyword">catch</span> (<span className="c-type">Throwable</span> <span className="c-var">$e</span>) {'{'}</>, '15'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-var">$db</span>-&gt;<span className="c-func">rollback</span>();</>, '16'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-keyword">return</span> [<span className="c-string">'ok'</span> =&gt; <span className="c-keyword">false</span>];</>, '17'],
        [<>&nbsp;&nbsp;{'}'} <span className="c-keyword">finally</span> {'{'}</>, '18'],
        [<>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-func">releaseUserLock</span>(<span className="c-param">$userId</span>);</>, '19'],
        [<>&nbsp;&nbsp;{'}'}</>, '20'],
        [<>{'}'}</>, '21'],
      ]}
      pullQuote='"A betting platform lives or dies on two things: speed and trust. Every architectural decision was made through that lens."'
      decisionCards={[
        { num: '01', title: 'Real-Time Feed Architecture', desc: 'WebSocket persistent connections over polling gave us sub-second odds propagation without hammering the upstream API with redundant requests.' },
        { num: '02', title: 'Transaction Integrity', desc: 'Pessimistic locking with advisory row locks eliminates any possibility of a race condition in balance debit or duplicate bet placement. Zero financial transaction failures since launch.' },
        { num: '03', title: 'Security-First Design', desc: 'Security was designed into the system from the data model up. Every user action is signed with a server-side nonce, all financial state transitions are append-only in the audit log.' },
      ]}
      resultCards={[
        { value: 'Live', label: 'Full platform at m.placebet247.com' },
        { value: '3 Verticals', label: 'Sports, live casino & virtuals all operational' },
        { value: '0', label: 'Financial transaction failures post-launch' },
        { value: 'High-Concurrency', label: 'Architecture holds under peak event load' },
      ]}
      resultBody="Placebet247 is a fully operational, real-money betting platform serving users across sports, live casino, and virtual games. The codebase was designed to scale horizontally as user volume grows."
      founderNote1="I built Placebet247 because the technical challenges in fintech gaming are genuinely hard. Real-time data, transaction integrity, security architecture: these aren't features you add."
      founderNote2="The financial operations on this platform are live. Real money. Real users. That sharpens your thinking considerably."
      nextCaseTitle="Floorhosting: Hosting Control Panel"
      nextCaseDesc="Full hosting management control panel. Auth, billing, and service management in clean vanilla code."
      nextCaseLink="/work/more"
      accentColor="#D97706"
      codeBg="#1C1107"
    />
  )
}
