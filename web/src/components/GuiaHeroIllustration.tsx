import { useEffect, useRef, useState } from 'react'
import guiaHeroSvg from '@/assets/illustrations/guia-hero.svg?raw'

type GuiaHeroIllustrationProps = {
  className?: string
}

/** Glance: Figma (right) → Miro (up) → Notion (left) — kept small so balls stay in orbit */
const GLANCE = [
  { x: 3.2, y: 0.8 },
  { x: 0, y: -3.2 },
  { x: -3.5, y: 0.4 },
] as const

const STEP_MS = 1800
const PUPIL_IDS = ['pupil-left', 'pupil-right'] as const

/**
 * Guia SVG: reconstructed circular pupils clipped to the eye openings,
 * plus CSS motion on the blob and tool balloons.
 */
export function GuiaHeroIllustration({ className }: GuiaHeroIllustrationProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const [glanceIndex, setGlanceIndex] = useState(0)

  useEffect(() => {
    const host = hostRef.current
    if (!host || host.querySelector('svg')) return

    const parsed = new DOMParser().parseFromString(guiaHeroSvg, 'image/svg+xml')
    const svg = parsed.documentElement
    if (svg.querySelector('parsererror')) {
      host.textContent = 'Falha ao carregar SVG'
      return
    }
    host.appendChild(document.importNode(svg, true))
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      setGlanceIndex((i) => (i + 1) % GLANCE.length)
    }, STEP_MS)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    const { x, y } = GLANCE[glanceIndex]
    for (const id of PUPIL_IDS) {
      const el = host.querySelector(`#${id}`) as HTMLElement | null
      if (!el) continue
      el.style.transform = `translate(${x}px, ${y}px)`
    }
  }, [glanceIndex])

  return <div ref={hostRef} className={className} />
}
