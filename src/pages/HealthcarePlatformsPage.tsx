import React from 'react'
import ServiceLayout from '../components/ServiceLayout'

export default function HealthcarePlatformsPage() {
  return (
    <ServiceLayout
      seo={{
        title: 'Healthcare & Nonprofit Websites | WordPress, Membership, Programmes | DevOmogo',
        description: 'Websites for health organisations and nonprofits by Omogo Peter Onyedika: membership and registration, programme and webinar pages, forms, jobs and content your team can edit.',
        keywords: 'healthcare website development, nonprofit website, WordPress developer, Elementor, membership website, Fluent Forms',
      }}
      name="Healthcare & Nonprofits"
      icon="fa-heart-pulse"
      headline={<>Websites health organisations can run themselves.</>}
      intro="Membership, programmes, events and content for health organisations and nonprofits, on a stack your team can update without calling a developer."
      whatYouGet={[
        'Membership and registration flows that land straight with your team',
        'Programme, event and webinar pages that are easy to publish',
        'Forms for enquiries, join requests and applications',
        'Job listings, blog and news your staff can update themselves',
        'Careful handling of member and contact details',
        'New features on the site you already have, without a rewrite',
      ]}
      tools={['WordPress', 'Elementor Pro', 'Fluent Forms', 'Membership', 'Laravel', 'React']}
      approachHeading="How I work with health organisations."
      story={[
        'Health organisations and nonprofits run on small teams. The website has to let people join, sign up for programmes and get in touch, and staff need to be able to update it themselves without waiting on a developer.',
        'For SSABHI, a brain-health nonprofit across Sub-Saharan Africa, I joined after launch and kept shipping on the WordPress site they already had: membership and registration, programme pages like the Africa Brain Health Webinar Series, job listings and forms.',
      ]}
      approach={[
        { icon: 'fa-screwdriver-wrench', title: 'Build on what you have', desc: 'If your site already works, I improve it instead of replacing it. New features ship as page, form and theme work on the stack you already run.' },
        { icon: 'fa-pen-to-square', title: 'Easy for your team to edit', desc: 'Content, programmes and jobs stay in one place your staff can update, so the site keeps up with the organisation.' },
        { icon: 'fa-user-shield', title: 'Care with personal data', desc: 'Member and enquiry details only go where they’re needed, and only the right people can see them.' },
      ]}
      related={['/work/ssabhi']}
    />
  )
}
