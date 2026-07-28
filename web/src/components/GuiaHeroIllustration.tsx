import { useEffect, useRef, useState } from 'react'
import guiaHeroSvg from '@/assets/illustrations/guia-hero.svg?raw'

type GuiaHeroIllustrationProps = {
  className?: string
}

/** Glance: Figma (right) → Miro (up) → Notion (left) */
const GLANCE = [
  { x: 4, y: 1 },
  { x: 0, y: -4 },
  { x: -5, y: 0 },
] as const

const STEP_MS = 1800
const PUPIL_IDS = ['pupil-left', 'pupil-right'] as const

/**
 * Original Figma SVG. Only translates existing #pupil-left / #pupil-right paths.
 * Does not draw overlays or alter the illustration artwork.
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
    const transform = `translate(${x} ${y})`
    for (const id of PUPIL_IDS) {
      host.querySelector(`#${id}`)?.setAttribute('transform', transform)
    }
  }, [glanceIndex])

  return <div ref={hostRef} className={className} />
}
