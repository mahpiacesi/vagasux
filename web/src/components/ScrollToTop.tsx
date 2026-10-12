import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import {
  prefersReducedMotion,
  resolveAnchorScroll,
  scrollToAnchor,
  stopAnchorScroll,
} from '@/lib/anchorScroll'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const previous = useRef<{ pathname: string; hash: string } | null>(null)

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    const prev = previous.current
    previous.current = { pathname, hash }

    const id = hash ? decodeURIComponent(hash.slice(1)) : ''
    const target = id ? document.getElementById(id) : null
    const decision = resolveAnchorScroll({
      hasSeenLocation: prev != null,
      samePathname: prev?.pathname === pathname,
      hashChanged: (prev?.hash ?? '') !== hash,
      hash,
      reducedMotion: prefersReducedMotion(),
      preferSmooth: Boolean(target?.closest('.guilda-page')),
    })

    if (decision.type === 'none') return

    if (decision.type === 'smooth-hash') {
      scrollToAnchor(decision.hash, 'smooth')
      return
    }

    if (decision.type === 'instant-top') {
      stopAnchorScroll()
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }

    const run = () => {
      if (!scrollToAnchor(decision.hash, 'instant')) {
        stopAnchorScroll()
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }
    }

    run()
    const timer = window.setTimeout(run, 0)
    return () => window.clearTimeout(timer)
  }, [pathname, hash])

  return null
}
