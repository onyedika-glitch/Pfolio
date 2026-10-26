/**
 * Prerender static HTML per route with route-specific SEO head
 * (title, meta description/keywords, canonical, Open Graph, JSON-LD, and the
 * ai-summary meta + text/markdown alternate link for AI agents).
 *
 * Runs after `vite build`. Produces dist/<route>/index.html for every route,
 * so crawlers and social link previews (WhatsApp, LinkedIn, X, Facebook —
 * which don't execute JS) see the right head without running the SPA.
 *
 * The React app still loads and hydrates as usual on top of each file.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { BASE, routes, markdownPath } from './site.mjs'

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const template = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8')

function injectHead(html, route) {
  let out = html
  const url = BASE + (route.path === '/' ? '/' : route.path)
  const title = esc(route.title)
  const description = esc(route.description)
  const keywords = route.keywords ? esc(route.keywords) : route.keywords

  out = out.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
  out = out.replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
  if (keywords) {
    out = out.replace(/(<meta name="keywords" content=")[^"]*(")/, `$1${keywords}$2`)
  }
  out = out.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
  out = out.replace(/(<meta name="ai-summary" content=")[^"]*(")/, `$1${esc(route.aiSummary || route.description)}$2`)
  out = out.replace(/(<link rel="alternate" type="text\/markdown" href=")[^"]*(")/, `$1${markdownPath(route.path)}$2`)
  out = out.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
  out = out.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
  out = out.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`)
  out = out.replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${route.image}$2`)
  out = out.replace(/(<meta property="og:image:secure_url" content=")[^"]*(")/, `$1${route.image}$2`)
  if (route.jsonLd) {
    out = out.replace('</head>', `<script type="application/ld+json">${JSON.stringify(route.jsonLd)}</script>\n  </head>`)
  }
  return out
}

for (const route of routes) {
  const output = route.path === '/' ? 'dist/index.html' : join('dist', route.path, 'index.html')
  mkdirSync(dirname(output), { recursive: true })
  writeFileSync(output, injectHead(template, route))
  console.log(`prerendered ${route.path}`)
}
console.log(`\nDone — ${routes.length} routes prerendered.`)
