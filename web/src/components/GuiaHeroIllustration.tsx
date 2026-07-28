import { useEffect, useRef } from 'react'
import guiaHeroSvg from '@/assets/illustrations/guia-hero.svg?raw'

type GuiaHeroIllustrationProps = {
  className?: string
  /** Keep motion even when the OS asks for reduced motion (dev QA). */
  forceMotion?: boolean
}

const GLANCE = [
  { x: 5.5, y: 1.2 },
  { x: 0, y: -5 },
  { x: -5.5, y: 0.6 },
] as const

const STEP_MS = 1600

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
    if (!host || host.querySelector('svg')) return

    // innerHTML keeps SVG CSS/SMIL wiring more reliably than importNode
    host.innerHTML = guiaHeroSvg
    const svg = host.querySelector('svg')
    if (!svg) {
      host.textContent = 'Falha ao carregar SVG'
      return
    }

    const reduceMotion =
      !forceMotion &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      svg.querySelectorAll('animateTransform').forEach((el) => el.remove())
      return
    }

    // Prefer CSS classes for blob/balloons (more reliable than SMIL after inject)
    svg.classList.add('guia-hero-svg--motion')

    const pupils = ['pupil-left', 'pupil-right']
      .map((id) => host.querySelector<SVGGElement>(`#${id}`))
      .filter(Boolean) as SVGGElement[]

    let glanceIndex = 0
    const applyGlance = () => {
      const { x, y } = GLANCE[glanceIndex]
      for (const el of pupils) {
        el.style.transform = `translate(${x}px, ${y}px)`
      }
    }
    applyGlance()

    const id = window.setInterval(() => {
      glanceIndex = (glanceIndex + 1) % GLANCE.length
      applyGlance()
    }, STEP_MS)

    return () => window.clearInterval(id)
  }, [forceMotion])

  return <div ref={hostRef} className={className} />
}
