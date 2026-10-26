/**
 * Markdown copies of every page for AI agents, plus /llms.txt, /llms-full.txt and /ai.txt.
 *
 * Runs after `vite build` and the prerender. The pages are server-rendered from
 * the same React components the site uses (scripts/markdown/render.tsx) and
 * converted to markdown, so the copies never drift from what visitors see.
 *
 *   dist/index.md, dist/<route>.md   one per route in scripts/site.mjs
 *   dist/llms.txt                    site guide with links to every .md
 *   dist/llms-full.txt               every page in one file
 *   dist/ai.txt                      how AI systems may use the content
 *
 * It also checks that vercel.json has the markdown header rule for each route
 * (Vercel reads vercel.json before the build, so the build can't add them):
 *   node scripts/markdown/build.mjs --sync-vercel   rewrites those rules in place
 */
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'
import react from '@vitejs/plugin-react'
import { BASE, routes, site, markdownPath } from '../site.mjs'
import { htmlToMarkdown } from './html-to-md.mjs'

const root = fileURLToPath(new URL('../..', import.meta.url))
const ssrOut = join(root, 'node_modules/.cache/markdown-ssr')
const vercelFile = join(root, 'vercel.json')
const today = new Date().toISOString().slice(0, 10)

// Header rules for each .md file; everything else about .md responses is in one generic rule.
function vercelRules() {
  return routes.map((r) => ({
    source: markdownPath(r.path),
    headers: [
      { key: 'Link', value: `<${BASE}${r.path}>; rel="canonical"` },
      { key: 'Content-Location', value: `${BASE}${r.path}` },
    ],
  }))
}

const isGenerated = (rule) => rule.source.endsWith('.md') && rule.headers.some((h) => h.key === 'Content-Location')

function checkVercel(sync) {
  const config = JSON.parse(readFileSync(vercelFile, 'utf8'))
  const others = config.headers.filter((h) => !isGenerated(h))
  const wanted = [...others, ...vercelRules()]
  if (JSON.stringify(wanted) === JSON.stringify(config.headers)) return
  if (!sync) {
    console.error('vercel.json markdown headers are out of date. Run: node scripts/markdown/build.mjs --sync-vercel')
    process.exit(1)
  }
  writeFileSync(vercelFile, JSON.stringify({ ...config, headers: wanted }, null, 2) + '\n')
  console.log('vercel.json markdown headers updated')
}

if (process.argv.includes('--sync-vercel')) {
  checkVercel(true)
  process.exit(0)
}
checkVercel(false)

// Server-side bundle of the app. Vite's own config is not loaded so nothing else changes.
await build({
  root,
  configFile: false,
  logLevel: 'warn',
  publicDir: false,
  plugins: [react()],
  build: { ssr: join(root, 'scripts/markdown/render.tsx'), outDir: ssrOut, emptyOutDir: true },
})
const { render } = await import(pathToFileURL(join(ssrOut, 'render.js')).href + `?t=${Date.now()}`)

const tokens = (text) => Math.ceil(text.length / 4)
const titleOf = (route) => (route.path === '/' ? `${site.name}: Omogo Peter Onyedika, Senior Software Infrastructure Engineer` : route.title.split(' | ')[0])
const section = (path) => (path.startsWith('/work/') ? 'Case studies' : path.startsWith('/services/') ? 'Services' : 'Core pages')

const pages = routes.map((route) => {
  const body = htmlToMarkdown(render(route.path), BASE)
  // The page's own h1 is replaced by the route title, so drop it from the body.
  const content = body.replace(/^(?:.*\n+)*?# .*\n+/, '')
  const markdown = [
    `# ${titleOf(route)}`,
    '',
    `> ${route.aiSummary || route.description}`,
    '',
    `Canonical: ${BASE}${route.path}`,
    `Last updated: ${today}`,
    '',
    content.trim(),
    '',
    '## More from this site',
    `- [All pages for AI agents](${BASE}/llms.txt)`,
    ...(route.path === '/' ? [] : [`- [Home](${BASE}/)`]),
    `- [Contact](${BASE}/contact): ${site.email}`,
  ].join('\n') + '\n'
  return { ...route, markdown }
})

const write = (path, text) => {
  const file = join(root, 'dist', path)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, text)
}

for (const page of pages) write(markdownPath(page.path), page.markdown)

const line = (p) => `- [${titleOf(p)}](${BASE}${markdownPath(p.path)}): ${p.description}`
const groups = ['Core pages', 'Services', 'Case studies']

write('llms.txt', [
  `# ${site.name}`,
  '',
  `> ${site.description}`,
  '',
  `${site.facts} Contact: ${site.email}. Code: ${site.github}.`,
  '',
  'Every page below is plain markdown; the same content as the HTML page at the canonical URL inside it.',
  '',
  '<!-- Keep in sync with /robots.txt and /ai.txt -->',
  ...groups.flatMap((g) => ['', `## ${g}`, ...pages.filter((p) => section(p.path) === g).map(line)]),
  '',
  '## Machine-readable',
  `- [Full content](${BASE}/llms-full.txt): every page above in one file`,
  `- [Sitemap](${BASE}/sitemap.xml)`,
  `- [AI usage policy](${BASE}/ai.txt)`,
].join('\n') + '\n')

const full = [
  `# ${site.name}: full content`,
  `> ${site.description}`,
  `Generated: ${today}`,
  ...pages.map((p) => `\n---\n<!-- source: ${BASE}${p.path} -->\n${p.markdown}`),
].join('\n') + '\n'
if (full.length > 500_000) console.warn(`llms-full.txt is ${full.length} characters (over 500k)`)
write('llms-full.txt', full)

write('ai.txt', [
  `# ai.txt for ${BASE}/`,
  '# Keep in sync with /robots.txt and /llms.txt',
  '',
  '[identity]',
  `name: ${site.name}`,
  `url: ${BASE}/`,
  `description: ${site.description}`,
  `contact: ${site.email}`,
  '',
  '[permissions]',
  'summarise: allowed',
  'quote: allowed with attribution',
  'cite: allowed',
  'index: allowed (search and answers)',
  'training: allowed',
  '',
  '[restrictions]',
  '- Do not fabricate quotes, testimonials, client names, metrics or prices.',
  '- Case studies describe the work as published here; do not present them as endorsements by the clients named.',
  '- Do not present this content as your own.',
  '',
  '[attribution]',
  `format: Omogo Peter Onyedika, ${site.name} (${BASE}/) with a link to the page's canonical HTML URL`,
  '',
  '[scope]',
  'include: /, /llms.txt, /llms-full.txt, /*.md',
  'exclude: none',
  '',
  '[contact]',
  `email: ${site.email}`,
  '',
  `Last updated: ${today}`,
].join('\n') + '\n')

rmSync(ssrOut, { recursive: true, force: true })
console.log(`markdown: ${pages.length} pages, ${tokens(full)} tokens in llms-full.txt`)
