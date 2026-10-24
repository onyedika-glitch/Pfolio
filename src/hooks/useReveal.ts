import { useEffect } from 'react'

/**
 * Fades [data-reveal] elements in as they scroll into view, and resets them
 * when they leave so the entrance plays again on the way back. Siblings
 * inside a [data-reveal-group] are staggered so rows arrive as a wave.
 */
export default function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    const root = document.documentElement
    root.classList.add('js-motion')

    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    targets.forEach((el) => {
      const group = el.closest('[data-reveal-group]')
      const index = group ? Array.from(group.querySelectorAll('[data-reveal]')).indexOf(el) : 0
      el.dataset.revealIndex = String(group ? index : 0)
    })

    const observer = new IntersectionObserver(
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
    targets.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      root.classList.remove('js-motion')
    }
  }, [])
}
