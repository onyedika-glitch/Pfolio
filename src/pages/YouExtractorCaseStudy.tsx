import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'

export default function YouExtractorCaseStudy() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · AI Developer Tools"
      headline={<>YouExtractor<br />Tutorial → Course &amp; Code Generator</>}
      subhead="A Laravel platform that turns YouTube coding tutorials into structured written guides and complete, runnable code projects using AI."
      metrics={[
        { value: 'V2.0', label: 'Current Version' },
        { value: '4', label: 'AI Providers' },
        { value: '1-Click', label: 'Chrome Extension' },
        { value: 'ZIP', label: 'Runnable Projects' },
      ]}
      metaItems={[
        { label: 'Category', value: 'AI · Developer Tools' },
        { label: 'Role', value: 'Founder & Senior Software Infrastructure Engineer' },
        { label: 'Stack', value: 'Laravel 11 · PHP 8.2+ · Blade · TailwindCSS · Alpine.js · PostgreSQL/MySQL · Docker' },
        { label: 'AI', value: 'DeepSeek · Claude · Gemini · GPT-4' },
      ]}
      projectDetails={[
        { label: 'Company', value: 'YouExtractor' },
        { label: 'Type', value: 'AI Developer Tool' },
        { label: 'Role', value: 'Founder & Senior Software Infrastructure Engineer' },
        { label: 'Status', value: 'live' },
      ]}
      breadcrumbLabel="YouExtractor: Tutorial to Course & Code Generator"
      overviewProblem="Watching coding tutorials on YouTube is passive: you scrub through videos for the code that never ships as a working project. YouExtractor exists to change that."
      overviewRole="As Founder and Senior Software Infrastructure Engineer, I built the whole application: an AI service layer with pluggable LLM drivers, a transcript pipeline, a prompt factory, a project packager that generates ZIPs of runnable code, a Chrome extension, and the Laravel dashboard that ties it together."
      archTitle="Architecture"
      archSubhead="A Laravel app coordinated around pluggable AI providers."
      archCards={[
        { num: 'Layer 01', icon: 'fa-film', title: 'Video Intake', desc: 'Fetches YouTube metadata and transcripts for any tutorial video, storing extractions in PostgreSQL/MySQL.' },
        { num: 'Layer 02', icon: 'fa-brain', title: 'AI Extraction', desc: 'Pluggable LLM drivers with provider priority — DeepSeek default, then Claude, Gemini, and OpenAI — coordinated by a PromptFactory and CodeExtractorService.' },
        { num: 'Layer 03', icon: 'fa-file-zipper', title: 'Project Packaging', desc: 'ProjectPackager turns generated code into complete, downloadable ZIP projects instead of loose snippets.' },
        { num: 'Layer 04', icon: 'fa-magnifying-glass', title: 'Library & Search', desc: 'Dark-mode dashboard with search and filters over your previously extracted videos and guides.' },
      ]}
      codeFilename="app/Services/CodeExtractorService.php"
      codeLines={[
        ['<?php', '01'],
        ['', '02'],
        ['namespace App\\Services;', '03'],
        ['', '04'],
        ['use App\\Services\\AI\\LLMService;', '05'],
        ['use App\\Services\\AI\\DeepSeekDriver;', '06'],
        ['use App\\Services\\AI\\GeminiDriver;', '07'],
        ['', '08'],
        ['class CodeExtractorService', '09'],
        ['{', '10'],
        ['    private PromptFactory $prompts;', '11'],
        ['    private ProjectPackager $packager;', '12'],
        ['', '13'],
        ['    public function __construct()', '14'],
        ['    {', '15'],
        ['        $this->prompts  = new PromptFactory();', '16'],
        ['        $this->packager = new ProjectPackager();', '17'],
        ['    }', '18'],
        ['}', '19'],
      ]}
      pullQuote="Watching a tutorial isn't learning. YouExtractor turns a passive video into something you can actually run."
      decisionCards={[
        { num: '01', title: 'Pluggable AI Drivers', desc: 'DeepSeek, Claude, Gemini, and OpenAI behind one interface, with ordered fallback so extraction keeps working when a provider fails.' },
        { num: '02', title: 'Prompt Factory', desc: 'Prompts are built in one place instead of scattered through controllers, so the extraction logic stays consistent and testable.' },
        { num: '03', title: 'One-Click Extension', desc: 'A Chrome extension lets you start an extraction directly from the YouTube page you are watching.' },
      ]}
      resultCards={[
        { value: 'V2.0', label: 'Platform version' },
        { value: '4', label: 'AI providers supported' },
        { value: '1-Click', label: 'Extraction via Chrome extension' },
        { value: 'ZIP', label: 'Downloadable runnable projects' },
      ]}
      resultBody="YouExtractor is live at youextractor.me: extract video metadata, generate structured tutorials, and download complete runnable project files from any YouTube coding tutorial."
      founderNote1="I built YouExtractor because I wanted to learn faster: instead of scrubbing videos for code, the AI turns the tutorial into a course and a working project."
      founderNote2="Making the AI layer pluggable mattered — no single provider owns the product, and a provider outage shouldn't stop extractions."
      nextCaseTitle="Gigora Network: Web3 Freelance Marketplace"
      nextCaseDesc="Community-driven freelance marketplace with vetted talent and secure escrow."
      nextCaseLink="/work/gigora-network"
      accentColor="#3B82F6"
      codeBg="#0F172A"
    />
  )
}
