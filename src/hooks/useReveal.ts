import { useEffect } from 'react'

// Blocks that get the entrance automatically on pages that don't tag their own.
// The first section is the hero, which already has its own fade-in.
const AUTO_TARGETS = [
  'section:not(:first-of-type) .site-container > *',
  'section:not(:first-of-type) .grid > *',
].join(', ')

/**
 * Fades [data-reveal] elements in as they scroll into view, and resets them
 * when they leave so the entrance plays again on the way back. Siblings
 * inside a [data-reveal-group] (or a grid) are staggered so rows arrive as a wave.
 *
 * Re-runs whenever `key` changes, so pass the route path to cover every page.
 */
export default function useReveal(key?: string) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    // Let the new route render before scanning it.
    let observer: IntersectionObserver | undefined
    const frame = requestAnimationFrame(() => {
      const root = document.documentElement
      root.classList.add('js-motion')

      document.querySelectorAll<HTMLElement>(AUTO_TARGETS).forEach((el) => {
        if (el.closest('[data-reveal]') || el.querySelector('[data-reveal]')) return
        // Wrappers around a grid stay put so the grid's cards can arrive one by one.
        if (!el.parentElement?.classList.contains('grid') && el.querySelector('.grid')) return
        el.setAttribute('data-reveal', '')
        if (el.parentElement?.classList.contains('grid')) el.parentElement.setAttribute('data-reveal-group', '')
      })

      const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
      targets.forEach((el) => {
        const group = el.closest('[data-reveal-group]')
        const index = group ? Array.from(group.querySelectorAll('[data-reveal]')).indexOf(el) : 0
        el.dataset.revealIndex = String(Math.max(index, 0))
      })

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target as HTMLElement
            if (!entry.isIntersecting) {
              el.classList.remove('is-visible')
              el.style.transitionDelay = ''
              return
            }
            el.style.transitionDelay = `${Math.min(Number(el.dataset.revealIndex ?? 0), 8) * 70}ms`
            el.classList.add('is-visible')
          })
        },
        { threshold: 0, rootMargin: '0px 0px -8% 0px' },
      )
      targets.forEach((el) => observer!.observe(el))
    })

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
    }
  }, [key])
}
