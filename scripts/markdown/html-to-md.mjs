/**
 * Turns the server-rendered HTML of a page into Markdown.
 *
 * Built for this site's own markup (React output, Tailwind classes), not for
 * arbitrary HTML: navigation, footer, icons, images and buttons are dropped,
 * headings/paragraphs/lists/links/code keep their meaning, and the little
 * card patterns the pages use (a big number over a label, a row of tags)
 * collapse into one readable line.
 */

const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'])
const SKIP = new Set(['nav', 'footer', 'canvas', 'button', 'svg', 'i', 'img', 'script', 'style', 'form', 'input', 'textarea', 'select', 'iframe', 'video', 'audio'])
const INLINE = new Set(['a', 'span', 'strong', 'b', 'em', 'code', 'br', 'small', 'sup', 'sub', 'mark', 'abbr', 'time', 'label'])
// Mobile-only copies of content that also renders for desktop (`block sm:hidden`),
// and the looping project ticker (its items are listed elsewhere on the page).
const MOBILE_ONLY = /(^|\s)((sm|md|lg):hidden|marquee)(\s|$)/
// Decoration that reads as noise on its own: step numbers, quote marks.
const ORNAMENT = /^(\d{1,2}|[“”"'])$/

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', '#39': "'", '#x27': "'" }
const decode = (s) => s.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (m, e) => {
  if (ENTITIES[e] !== undefined) return ENTITIES[e]
  if (e[0] === '#') return String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10))
  return m
})

function parse(html) {
  const root = { tag: '#root', attrs: {}, children: [] }
  const stack = [root]
  const re = /<!--[\s\S]*?-->|<\/([a-zA-Z0-9]+)\s*>|<([a-zA-Z0-9]+)((?:\s+[^\s=>/]+(?:="[^"]*")?)*)\s*(\/?)>|([^<]+)/g
  let m
  while ((m = re.exec(html))) {
    const top = stack[stack.length - 1]
    if (m[1]) {
      const tag = m[1].toLowerCase()
      const i = stack.map((n) => n.tag).lastIndexOf(tag)
      if (i > 0) stack.length = i
    } else if (m[2]) {
      const tag = m[2].toLowerCase()
      const attrs = {}
      for (const a of m[3].matchAll(/([^\s=]+)(?:="([^"]*)")?/g)) attrs[a[1]] = a[2] === undefined ? '' : decode(a[2])
      const node = { tag, attrs, children: [] }
      top.children.push(node)
      if (!VOID.has(tag) && !m[4]) stack.push(node)
    } else if (m[5]) {
      top.children.push(decode(m[5]))
    }
  }
  return root
}

const hasClass = (n, name) => (n.attrs.class || '').split(/\s+/).includes(name)
const skipped = (n) => typeof n !== 'string' && (
  SKIP.has(n.tag) || n.attrs['aria-hidden'] === 'true' || MOBILE_ONLY.test(n.attrs.class || '') || hasClass(n, 'ln')
)
const isInline = (n) => typeof n === 'string' || INLINE.has(n.tag)
const leaf = (n) => n.children.filter((c) => !skipped(c)).every(isInline)

function absolute(href, base) {
  if (!href || href.startsWith('#')) return null
  if (href.startsWith('/')) return base + (href === '/' ? '/' : href)
  return href
}

function inline(nodes, base) {
  const parts = nodes.filter((c) => !skipped(c))
  // A row of tags/pills with no text between them reads as a list.
  const tagRow = parts.length > 1 && parts.every((c) => typeof c !== 'string' || !c.trim()) && parts.filter((c) => typeof c !== 'string').length > 1
  if (tagRow) return parts.filter((c) => typeof c !== 'string').map((c) => inline([c], base)).filter(Boolean).join(' · ')

  let out = ''
  for (const c of parts) {
    if (typeof c === 'string') { out += c; continue }
    const text = inline(c.children, base)
    if (c.tag === 'br') out += '\n'
    else if (c.tag === 'a') {
      const href = absolute(c.attrs.href, base)
      out += href && text.trim() ? `[${text.trim()}](${href})` : text
    } else if (c.tag === 'strong' || c.tag === 'b') out += text.trim() ? `**${text.trim()}**` : ''
    else if (c.tag === 'em') out += text.trim() ? `*${text.trim()}*` : ''
    else if (c.tag === 'code') out += text.trim() ? `\`${text}\`` : ''
    else out += text
  }
  return out
}

const clean = (s) => s.replace(/[ \t ]+/g, ' ').replace(/ *\n */g, '\n').trim()

const textOf = (n) => typeof n === 'string' ? n : n.tag === 'br' ? '\n' : n.children.map(textOf).join('')
const pre = (node) => node.children.map(textOf).join('')

/** Rows of a `.code-block` whose lines are rendered as separate `.code-line` elements. */
function codeRows(node) {
  const rows = []
  const walk = (n) => {
    if (typeof n === 'string' || skipped(n)) return
    if (hasClass(n, 'code-line')) { rows.push(n.children.filter((c) => !skipped(c)).map(textOf).join('')); return }
    n.children.forEach(walk)
  }
  walk(node)
  return rows
}

function blocks(node, base, out) {
  for (const c of node.children) {
    if (skipped(c)) continue
    if (typeof c === 'string') {
      if (c.trim()) out.push(clean(c))
      continue
    }
    const tag = c.tag
    if (/^h[1-6]$/.test(tag)) {
      const text = clean(inline(c.children, base)).replace(/\n/g, ' ')
      if (text) out.push(`${'#'.repeat(Number(tag[1]))} ${text}`)
    } else if (tag === 'pre') {
      out.push('```\n' + pre(c).replace(/\n+$/, '') + '\n```')
    } else if (hasClass(c, 'code-block')) {
      out.push('```\n' + codeRows(c).join('\n') + '\n```')
    } else if (tag === 'ul' || tag === 'ol') {
      const items = c.children.filter((li) => typeof li !== 'string' && !skipped(li))
      out.push(items.map((li, i) => `${tag === 'ol' ? `${i + 1}.` : '-'} ${listItem(li, base)}`).join('\n'))
    } else if (tag === 'blockquote') {
      const inner = []
      blocks(c, base, inner)
      if (inner.length) out.push(inner.join('\n\n').split('\n').map((l) => `> ${l}`).join('\n'))
    } else if (tag === 'table') {
      out.push(table(c, base))
    } else if (leaf(c)) {
      const text = clean(inline(c.children, base))
      if (text && !ORNAMENT.test(text)) out.push(text)
    } else if (pair(c, base)) {
      out.push(pair(c, base))
    } else {
      blocks(c, base, out)
    }
  }
  return out
}

/** A card holding exactly two short text blocks: a value and its label. */
function pair(node, base) {
  const kids = node.children.filter((c) => !skipped(c) && (typeof c !== 'string' || c.trim()))
  if (kids.length !== 2 || !kids.every((k) => typeof k !== 'string' && !INLINE.has(k.tag) && !/^h[1-6]$|^p$|^ul$|^ol$/.test(k.tag) && leaf(k))) return null
  const [a, b] = kids.map((k) => clean(inline(k.children, base)).replace(/\n/g, ' '))
  if (!a || !b || a.length > 40) return null
  return `**${a}**: ${b}`
}

function listItem(li, base) {
  if (leaf(li)) return clean(inline(li.children, base)).replace(/\n/g, ' ')
  const inner = []
  blocks(li, base, inner)
  return inner.map((s) => s.replace(/^#+ /, '**').replace(/^(\*\*.*)$/, (m) => (m.endsWith('**') ? m : m + '**'))).join(': ').replace(/\n/g, ' ')
}

function table(node, base) {
  const rows = []
  const walk = (n) => {
    if (typeof n === 'string') return
    if (n.tag === 'tr') rows.push(n.children.filter((c) => typeof c !== 'string').map((td) => clean(inline(td.children, base)).replace(/\|/g, '\\|')))
    else n.children.forEach(walk)
  }
  walk(node)
  if (!rows.length) return ''
  const head = `| ${rows[0].join(' | ')} |\n|${rows[0].map(() => ' --- ').join('|')}|`
  return [head, ...rows.slice(1).map((r) => `| ${r.join(' | ')} |`)].join('\n')
}

export function htmlToMarkdown(html, base) {
  const out = blocks(parse(html), base, [])
  // Drop exact repeats of short lines (desktop/mobile variants of one label).
  const seen = new Set()
  return out.filter((b) => {
    if (b.length > 120 || b.startsWith('#') || b.startsWith('```')) return true
    if (seen.has(b)) return false
    seen.add(b)
    return true
  }).join('\n\n').replace(/\n{3,}/g, '\n\n').trim() + '\n'
}
