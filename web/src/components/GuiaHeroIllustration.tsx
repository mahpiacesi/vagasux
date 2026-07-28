import { useEffect, useRef } from 'react'
import guiaHeroSvg from '@/assets/illustrations/guia-hero.svg?raw'

type GuiaHeroIllustrationProps = {
  className?: string
  /** Keep SMIL motion even when the OS asks for reduced motion (dev QA). */
  forceMotion?: boolean
}

/**
 * Guia SVG with reconstructed circular pupils (clipped to eye openings)
 * and SMIL motion on pupils, blob, and tool balloons.
 */
export function GuiaHeroIllustration({
  className,
  forceMotion = false,
}: GuiaHeroIllustrationProps) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host || host.querySelector('svg')) return

    const parsed = new DOMParser().parseFromString(guiaHeroSvg, 'image/svg+xml')
    const svg = parsed.documentElement
    if (svg.querySelector('parsererror')) {
      host.textContent = 'Falha ao carregar SVG'
      return
    }

    const reduceMotion =
      !forceMotion &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      svg.querySelectorAll('animateTransform').forEach((el) => el.remove())
    }

    host.appendChild(document.importNode(svg, true))
  }, [forceMotion])

  return <div ref={hostRef} className={className} />
}
