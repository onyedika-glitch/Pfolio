// Vercel serverless function: POST /api/contact
// Sends the contact form to my inbox through Resend's REST API.
//
// Environment variables (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY  required
//   CONTACT_TO      optional, defaults to omogopeter@devomogo.tech
//   CONTACT_FROM    optional, defaults to Resend's test sender. Once devomogo.tech is
//                   verified in Resend, set it to e.g. "Portfolio <hello@devomogo.tech>".

const LIMITS = { name: 120, email: 200, message: 5000 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const clean = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { body = {} }
  }
  body = body || {}

  // Honeypot: a field real visitors never see. Bots fill it in; pretend it worked.
  if (clean(body.company, 200)) return res.status(200).json({ ok: true })

  const name = clean(body.name, LIMITS.name)
  const email = clean(body.email, LIMITS.email)
  const message = clean(body.message, LIMITS.message)

  if (!name || !message) return res.status(400).json({ error: 'Please add your name and a message.' })
  if (email && !EMAIL_RE.test(email)) return res.status(400).json({ error: 'That email address doesn’t look right.' })

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('contact: RESEND_API_KEY is not set')
    return res.status(500).json({ error: 'The form isn’t set up yet.' })
  }

  const payload = {
    from: process.env.CONTACT_FROM || 'Portfolio contact form <onboarding@resend.dev>',
    to: [process.env.CONTACT_TO || 'omogopeter@devomogo.tech'],
    subject: `Project enquiry from ${name}`,
    text: `${message}\n\n${name}${email ? ` <${email}>` : ''}\nSent from devomogo.tech/contact`,
    ...(email ? { reply_to: email } : {}),
  }

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!r.ok) {
      console.error('contact: Resend responded', r.status, await r.text())
      return res.status(502).json({ error: 'Couldn’t send right now.' })
    }
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('contact: request to Resend failed', err)
    return res.status(502).json({ error: 'Couldn’t send right now.' })
  }
}
