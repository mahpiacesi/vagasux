import { useEffect, useRef } from 'react'
import guiaHeroSvg from '@/assets/illustrations/guia-hero.svg?raw'

type GuiaHeroIllustrationProps = {
  className?: string
  /** Keep motion even when the OS asks for reduced motion (dev QA). */
  forceMotion?: boolean
}

/** Glance: Figma (right) → Miro (up) → repeat — both eyes together */
const GLANCE = [
  { x: 4.2, y: 0.6 },
  { x: 0, y: -3.8 },
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

    const pupils = ['pupil-left', 'pupil-right']
      .map((id) => host.querySelector<SVGGElement>(`#${id}`))
      .filter(Boolean) as SVGGElement[]

    let glanceIndex = 0
    const applyGlance = () => {
      const { x, y } = GLANCE[glanceIndex]
      const transform = `translate(${x}px, ${y}px)`
      for (const el of pupils) {
        el.style.transform = transform
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
