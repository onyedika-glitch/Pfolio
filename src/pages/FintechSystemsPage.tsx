import React from 'react'
import ServiceLayout from '../components/ServiceLayout'

export default function FintechSystemsPage() {
  return (
    <ServiceLayout
      seo={{
        title: 'Fintech Systems Development | Payments, Ledgers, Stripe, Paystack | DevOmogo',
        description: 'Fintech platform development by Omogo Peter Onyedika: payment integration (Stripe, PayPal, Paystack), membership and billing platforms, real-time equity systems, and secure transaction flows.',
        keywords: 'fintech development, payment integration, Stripe developer, Paystack, membership platform, real-time WebSocket, MongoDB, MySQL',
      }}
      name="Fintech Systems"
      icon="fa-landmark"
      headline={<>Money software that adds up.</>}
      intro="Wallets, payments, ledgers and reports that reconcile down to the last cent. Built so your users trust it and your auditors don't lose sleep."
      whatYouGet={[
        'Double-entry ledger systems with full audit trails',
        'Idempotent transaction processing: no duplicates, no lost payments',
        'Multi-rail payment integration (card, bank transfer, mobile money)',
        'Real-time reconciliation and settlement reporting',
        'Compliance-grade security architecture',
        'Fraud detection and transaction monitoring',
      ]}
      tools={['Stripe', 'Paystack', 'PayPal', 'Real-time Ledger', 'Double-Entry', 'Idempotency', 'Reconciliation', 'PCI-DSS', 'Fraud Detection']}
      approachHeading="How I build financial systems."
      story={[
        'Money software has to be exact. I build double-entry ledgers, reconcile payment providers, and make sure a payment can never go through twice, even when the network hiccups. Every integration follows PCI-DSS principles and is monitored in real time.',
        "From plugging in payment providers to building custom finance dashboards, I make sure every number can be traced, every system is locked down, and nothing falls over as you grow. I've worked on systems handling millions in daily transaction volume across multiple African markets.",
      ]}
      approach={[
        { icon: 'fa-book', title: 'Ledger-first design', desc: 'I always start with the ledger. Double-entry accounting from day one means every transaction can be traced and every balance adds up.' },
        { icon: 'fa-shield', title: 'Security and compliance', desc: 'PCI-DSS alignment, encryption at rest and in transit, granular access controls, and immutable audit logs. Security is not a feature. It is the foundation.' },
        { icon: 'fa-chart-line', title: 'Real-time operations', desc: 'Real-time balance checks, transaction status webhooks, instant reconciliation, and monitoring dashboards. You see what’s happening as it happens.' },
      ]}
      related={['/work/discount-club-cayman', '/work/gigora-network', '/work/japa-coach']}
    />
  )
}
