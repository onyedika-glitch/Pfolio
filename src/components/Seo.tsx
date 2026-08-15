import { useEffect } from 'react'

interface SeoProps {
  title: string
  description: string
  keywords?: string
  jsonLd?: object | object[]
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Sets per-page <title>, meta description/keywords, canonical URL, and JSON-LD
 * structured data. Runs client-side on route change (SPA), so every route gets
 * its own search-facing head without extra dependencies.
 */
export default function Seo({ title, description, keywords, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title
    upsertMeta('name', 'description', description)
    if (keywords) {
      upsertMeta('name', 'keywords', keywords)
    }

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = window.location.origin + window.location.pathname

    // Replace previously injected JSON-LD blocks with this page's data
    document.head.querySelectorAll('script[data-seo-jsonld]').forEach(el => el.remove())
    if (jsonLd) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-seo-jsonld', 'true')
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
  }, [title, description, keywords, JSON.stringify(jsonLd)])

  return null
}
