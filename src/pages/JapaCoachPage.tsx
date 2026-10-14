import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function JapaCoachPage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · AI EdTech"
      headline={<>Japa Coach<br />AI IELTS Practice</>}
      subhead="An AI IELTS coach for Nigerians preparing to study, work or settle abroad. Speak your answers out loud, write essays, take full Reading and Listening tests, and get an estimated band with specific fixes in minutes. Web app plus a native Android app. Founded."
      metrics={[{ value:'4', label:'IELTS Modules' },{ value:'96', label:'Speaking Questions' },{ value:'160', label:'Practice Questions' },{ value:'Live', label:'japacoach.com' }]}
      metaItems={[{ label:'Category', value:'AI EdTech · Test Prep' },{ label:'Role', value:'Founder' },{ label:'Stack', value:'Laravel 13 · Vue 3 · Flutter · FastAPI · Whisper · PostgreSQL · Docker' }]}
      projectDetails={[{ label:'Company', value:'Japa Coach' },{ label:'Type', value:'AI IELTS Practice Platform' },{ label:'Platforms', value:'Web + Android (Flutter)' },{ label:'Role', value:'Founder' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Japa Coach: AI IELTS Practice"
      overviewProblem="IELTS prep classes in Nigeria are expensive and give little speaking practice, yet Speaking is the module most people fear. Most apps make you type your speaking answers, which is not the real test, and feedback from a human tutor takes days."
      overviewRole="As founder, I built the whole product: the Laravel API, the Vue web app, a self-hosted speech service for transcription and the examiner's voice, the AI marking pipeline, Naira payments, and a native Flutter Android app with Google Play Billing. I also deployed it on a single VPS with Docker and wrote the practice content pipeline."
      archTitle="Architecture" archSubhead="Laravel API at the centre, a self-hosted speech service, and two clients."
      archCards={[
        { num:'Layer 01', icon:'fa-microphone-lines', title:'Speech Service', desc:'FastAPI service running faster-whisper for transcription with word timings, and Kokoro text-to-speech for the examiner voice. Fluency metrics (words per minute, pauses, fillers) come from the timings.' },
        { num:'Layer 02', icon:'fa-brain', title:'AI Marking', desc:'Queued jobs score speaking and writing against the public IELTS band descriptors, returning a band per criterion, sentence-level corrections, stronger answers and model essays.' },
        { num:'Layer 03', icon:'fa-server', title:'Laravel API', desc:'Sanctum auth (cookies for web, tokens for mobile), usage limits per plan, mock exams across all four modules, study plans, referrals, reviews and an admin panel for content.' },
        { num:'Layer 04', icon:'fa-mobile-screen', title:'Web + Android', desc:'Vue 3 web app and a native Flutter Android app sharing one API: recording with upload retry, timed tests with autosave, and in-app purchases verified server-side.' },
      ]}
      codeFilename="PaymentFulfiller.php" codeLines={[
        ['DB::transaction(function () use ($payment): void {', '01'],
        ['    $locked = Payment::whereKey($payment->id)', '02'],
        ['        ->lockForUpdate()->firstOrFail();', '03'],
        ['', '04'],
        ['    if ($locked->status === \'completed\') {', '05'],
        ['        return; // webhook retries never grant twice', '06'],
        ['    }', '07'],
        ['', '08'],
        ['    $locked->forceFill([\'status\' => \'completed\', \'paid_at\' => now()])->save();', '09'],
        ['', '10'],
        ['    $user = User::whereKey($locked->user_id)->lockForUpdate()->firstOrFail();', '11'],
        ['    $user->grantPlan($locked->plan, $days);', '12'],
        ['});', '13'],
      ]}
      pullQuote="The real IELTS speaking test is a conversation. Practice should be spoken out loud too, not typed into a box."
      decisionCards={[
        { num:'01', title:'Self-Hosted Speech', desc:'Whisper and Kokoro run on the same small VPS instead of paid speech APIs, so each speaking mock costs almost nothing to mark. Examiner audio is rendered once and cached.' },
        { num:'02', title:'Verify Every Payment', desc:'Plans are granted only after the server confirms the payment with the provider (Bachs for Naira on the web, Google Play in the app), inside a locked transaction so retries never grant twice.' },
        { num:'03', title:'Passes, Not Subscriptions', desc:'Weekly, monthly and 90-day passes with no automatic debits, because many Nigerian cards fail on recurring billing. Days stack if you buy again.' },
        { num:'04', title:'Native App, Same API', desc:'The Android app is Flutter, not a web wrapper, so recording, audio and timers feel native. Mobile uses token auth while the website keeps secure cookie sessions.' },
      ]}
      resultCards={[{ value:'4', label:'IELTS modules + full mock exams' },{ value:'96', label:'Speaking questions with examiner voice' },{ value:'160', label:'Reading & listening questions' },{ value:'Live', label:'japacoach.com' }]}
      resultBody="Japa Coach is live at japacoach.com with Speaking, Writing, Reading and Listening practice, full mock exams and study plans, and real users taking speaking tests from the first day. The native Android app is built and launching on Google Play."
      founderNote1="I built Japa Coach for people like me and my friends: smart, ready to relocate, but held back by one exam and the cost of preparing for it."
      founderNote2="Running speech recognition myself instead of paying per minute is what makes a ₦1,500 weekly pass possible."
      nextCaseTitle="YouExtractor: Tutorial to Course & Code Generator" nextCaseDesc="Turns YouTube coding tutorials into structured guides and runnable code projects using AI." nextCaseLink="/work/youextractor"
      accentColor="#01B8C6" heroBg="#032A2E" codeBg="#021B1E"
    />
  )
}
