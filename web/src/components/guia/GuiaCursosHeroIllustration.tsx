import { useEffect, useRef } from 'react'
import illustrationWomanSvg from '@/assets/illustration-woman.svg?raw'

type GuiaCursosHeroIllustrationProps = {
  className?: string
  /** Keep motion even when the OS asks for reduced motion (dev QA). */
  forceMotion?: boolean
}

/** Shared pivots (viewBox coords) — shoulder, hip, head base. */
const PIVOTS = {
  'arm-left': { x: 468, y: 248 },
  'arm-right': { x: 558, y: 212 },
  'leg-left': { x: 455, y: 474 },
  'leg-right': { x: 554, y: 466 },
  hair: { x: 502, y: 178 },
} as const

type MotionGroup = keyof typeof PIVOTS

const MOTION = {
  'arm-left': { amplitude: 2, cycle: 4.4, phase: 0 },
  'arm-right': { amplitude: 1.8, cycle: 4.8, phase: 0.5 },
  'leg-left': { amplitude: 1.2, cycle: 5.2, phase: 0.25 },
  'leg-right': { amplitude: 1.4, cycle: 5.6, phase: 0.75 },
  hair: { amplitude: 0.8, cycle: 6, phase: 0.35 },
} satisfies Record<MotionGroup, { amplitude: number; cycle: number; phase: number }>

function waveAngle(t: number, cycle: number, amplitude: number, phase: number) {
  return Math.sin(((t + phase) / cycle) * Math.PI * 2) * amplitude
}

function applyGroupRotation(
  elements: SVGGraphicsElement[],
  angleDeg: number,
  pivot: { x: number; y: number },
) {
  const rotate = `rotate(${angleDeg.toFixed(3)}, ${pivot.x}, ${pivot.y})`
  for (const el of elements) {
    const base = el.dataset.baseTransform ?? ''
    el.setAttribute('transform', base ? `${rotate} ${base}` : rotate)
  }
}

function resetTransforms(elements: SVGGraphicsElement[]) {
  for (const el of elements) {
    const base = el.dataset.baseTransform ?? ''
    if (base) el.setAttribute('transform', base)
    else el.removeAttribute('transform')
  }
}

/** Cursos hero — flat woman illustration; paint order preserved, limbs animated via SVG rotate. */
export function GuiaCursosHeroIllustration({
  className,
  forceMotion = false,
}: GuiaCursosHeroIllustrationProps) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    if (!host.querySelector('svg')) {
      host.innerHTML = illustrationWomanSvg
    }

    const svg = host.querySelector('svg')
    if (!svg) {
      host.textContent = 'Falha ao carregar SVG'
      return
    }

    svg.removeAttribute('width')
    svg.removeAttribute('height')
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
    svg.style.width = '100%'
    svg.style.height = 'auto'
    svg.style.maxWidth = '100%'
    svg.style.overflow = 'visible'

    const groups = Object.fromEntries(
      (Object.keys(PIVOTS) as MotionGroup[]).map((key) => [
        key,
        [...host.querySelectorAll<SVGGraphicsElement>(`[data-motion="${key}"]`)],
      ]),
    ) as Record<MotionGroup, SVGGraphicsElement[]>

    const allAnimated = (Object.values(groups) as SVGGraphicsElement[][]).flat()
    for (const el of allAnimated) {
      el.dataset.baseTransform = el.getAttribute('transform') ?? ''
    }

    const reduceMotion =
      !forceMotion &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      svg.classList.remove('cursos-woman-hero-svg--motion')
      resetTransforms(allAnimated)
      return
    }

    svg.classList.add('cursos-woman-hero-svg--motion')

    let frame = 0
    const tick = (now: number) => {
      const t = now / 1000
      for (const key of Object.keys(MOTION) as MotionGroup[]) {
        const { amplitude, cycle, phase } = MOTION[key]
        const angle = waveAngle(t, cycle, amplitude, phase)
        applyGroupRotation(groups[key], angle, PIVOTS[key])
      }
      frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(frame)
      resetTransforms(allAnimated)
    }
  }, [forceMotion])

  return <div ref={hostRef} className={className} />
}
