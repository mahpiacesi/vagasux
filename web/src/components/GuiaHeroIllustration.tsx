import { useEffect, useRef } from 'react'
import guiaHeroSvg from '@/assets/illustrations/guia-hero.svg?raw'

type GuiaHeroIllustrationProps = {
  className?: string
  /** Keep motion even when the OS asks for reduced motion (dev QA). */
  forceMotion?: boolean
}

/** Minimal glance: Figma (right) → Miro (up) → Notion (left) */
const GLANCE_LEFT = [
  { x: 2.4, y: 0.4 },
  { x: 0, y: -2.2 },
  { x: -2.4, y: 0.3 },
] as const

/**
 * Right orbit is tight. Resting pose is already toward the outer (right)
 * corner in the SVG; motion stays small so gaze stays conjugate.
 */
const GLANCE_RIGHT = [
  { x: 0.35, y: 0.15 },
  { x: -0.5, y: -0.9 },
  { x: -1.2, y: 0.1 },
] as const

const STEP_MS = 2200

/**
 * Guia SVG: circular pupils clipped to eye openings; JS/CSS motion for
 * glance, blob, and tool balloons.
 */
export function GuiaHeroIllustration({
  className,
  forceMotion = false,
}: GuiaHeroIllustrationProps) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    if (!host.querySelector('svg')) {
      host.innerHTML = guiaHeroSvg
    }

    const svg = host.querySelector('svg')
    if (!svg) {
      host.textContent = 'Falha ao carregar SVG'
      return
    }

    // Avoid intrinsic 818px width blowing CSS grid (min-width: auto)
    svg.removeAttribute('width')
    svg.removeAttribute('height')
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
    svg.style.width = '100%'
    svg.style.height = 'auto'
    svg.style.maxWidth = '100%'
    svg.style.overflow = 'visible'

    const reduceMotion =
      !forceMotion &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      svg.classList.remove('guia-hero-svg--motion')
      return
    }

    svg.classList.add('guia-hero-svg--motion')

    const left = host.querySelector<SVGGElement>('#pupil-left')
    const right = host.querySelector<SVGGElement>('#pupil-right')

    let glanceIndex = 0
    const applyGlance = () => {
      const l = GLANCE_LEFT[glanceIndex]
      const r = GLANCE_RIGHT[glanceIndex]
      if (left) left.style.transform = `translate(${l.x}px, ${l.y}px)`
      if (right) right.style.transform = `translate(${r.x}px, ${r.y}px)`
    }
    applyGlance()

    const id = window.setInterval(() => {
      glanceIndex = (glanceIndex + 1) % GLANCE_LEFT.length
      applyGlance()
    }, STEP_MS)

    return () => window.clearInterval(id)
  }, [forceMotion])

  return <div ref={hostRef} className={className} />
}
