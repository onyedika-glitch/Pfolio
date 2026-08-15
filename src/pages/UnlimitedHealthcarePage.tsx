import React from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'
export default function UnlimitedHealthcarePage() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study · Healthcare"
      headline={<>Unlimited Healthcare<br />Management System</>}
      subhead="A healthcare management system with a React + TypeScript web app, an Expo React Native mobile app, and a NestJS backend."
      metrics={[{ value:'3', label:'Apps: Web + Mobile' },{ value:'NestJS', label:'Backend' },{ value:'Appointments', label:'Booking API' },{ value:'Live', label:'unlimitedhealthcares.com' }]}
      metaItems={[{ label:'Category', value:'Healthcare · Management System' },{ label:'Role', value:'Full-Stack Engineer' },{ label:'Stack', value:'React (Vite) · TypeScript · Capacitor · Expo React Native · NestJS · TypeORM' }]}
      projectDetails={[{ label:'Type', value:'Healthcare Management System' },{ label:'Status', value:'live' }]}
      breadcrumbLabel="Unlimited Healthcare: Management System"
      overviewProblem="Healthcare teams needed a management system spanning web and mobile: appointments, providers, care tasks, and patient communication in one place."
      overviewRole="I built the full stack: a NestJS + TypeORM backend with appointments, recurring appointments, provider availability, reminders, audit logs, and notifications; a React + Vite + TypeScript frontend wrapped with Capacitor; and an Expo React Native mobile app."
      archTitle="Architecture" archSubhead="NestJS backend with React web and Expo mobile clients."
      archCards={[{ num:'Layer 01', icon:'fa-calendar-check', title:'Appointments', desc:'Appointment booking API with types, provider availability, recurring appointments, and a reminders cron.' },{ num:'Layer 02', icon:'fa-heart-pulse', title:'Clinical Modules', desc:'Care tasks, clinical records, centers, imaging, emergency, and blood-donation dashboards.' },{ num:'Layer 03', icon:'fa-comments', title:'Chat & Community', desc:'Chat module, community features, audit logging, and notifications across the system.' },{ num:'Layer 04', icon:'fa-mobile-screen-button', title:'Mobile Clients', desc:'React web app packaged with Capacitor plus a separate Expo React Native mobile app.' }]}
      codeFilename="src/appointments/appointments.service.ts" codeLines={[['import { Injectable, NotFoundException } from \'@nestjs/common\';', '01'],['import { InjectRepository } from \'@nestjs/typeorm\';', '02'],['import { Repository, Between } from \'typeorm\';', '03'],['import { Appointment } from \'./entities/appointment.entity\';', '04'],['import { CreateAppointmentDto } from \'./dto/create-appointment.dto\';', '05'],['import { RecurringAppointmentsService } from \'./recurring-appointments.service\';', '06'],['import { AuditLogService } from \'../audit/audit-log.service\';', '07'],['', '08'],['export interface PaginatedAppointments {', '09'],['  data: Appointment[];', '10'],['  pagination: {', '11'],['    total: number;', '12'],['    page: number;', '13'],['    limit: number;', '14'],['    totalPages: number;', '15'],['  };', '16'],['}', '17']]}
      pullQuote="Healthcare software only earns trust when records, appointments, and communications are auditable and never lost."
      decisionCards={[{ num:'01', title:'Recurring + Reminders', desc:'Recurring appointments and a reminders cron keep schedules and follow-ups on track automatically.' },{ num:'02', title:'One Codebase, Two Clients', desc:'Capacitor web wrapper and an Expo app let the same React/TypeScript logic reach both platforms.' }]}
      resultCards={[{ value:'NestJS', label:'Typed backend' },{ value:'3', label:'Web + mobile clients' },{ value:'Audit', label:'Logged changes' },{ value:'Live', label:'unlimitedhealthcares.com' }]}
      resultBody="Unlimited Healthcare is live at unlimitedhealthcares.com as a healthcare management system serving appointment booking, clinical modules, chat, and mobile access."
      founderNote1="Appointments and reminders were the system's backbone — the recurring-appointments and reminders-cron services run quietly in the background keeping everything scheduled."
      founderNote2="Audit logging everywhere was non-negotiable for a healthcare system: every change needs a trail."
      nextCaseTitle="Sparks Ventures Hub: Accelerator Platform" nextCaseDesc="Accelerator operations platform for leads, approvals, followups, and vouchers." nextCaseLink="/work/sparks-ventures"
      accentColor="#0D9488" codeBg="#031917"
    />
  )
}
