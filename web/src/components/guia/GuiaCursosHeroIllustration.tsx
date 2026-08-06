import { useEffect, useRef } from 'react'
import illustrationWomanSvg from '@/assets/illustration-woman.svg?raw'

type GuiaCursosHeroIllustrationProps = {
  className?: string
  /** Keep motion even when the OS asks for reduced motion (dev QA). */
  forceMotion?: boolean
}

const LEFT_PIVOT = { x: 468, y: 248 }
const RIGHT_PIVOT = { x: 558, y: 212 }

const LEFT_CYCLE_S = 4.2
const RIGHT_CYCLE_S = 4.6
const RIGHT_PHASE_S = 0.4
const LEFT_AMPLITUDE_DEG = 1.75
const RIGHT_AMPLITUDE_DEG = 1.5

function applyPivotRotation(
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

/** Cursos hero: woman illustration with gentle limb sway (original paint order preserved). */
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

    const reduceMotion =
      !forceMotion &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const armLeft = [
      ...host.querySelectorAll<SVGGraphicsElement>('[data-motion="arm-left"]'),
    ]
    const armRight = [
      ...host.querySelectorAll<SVGGraphicsElement>('[data-motion="arm-right"]'),
    ]

    for (const el of [...armLeft, ...armRight]) {
      el.dataset.baseTransform = el.getAttribute('transform') ?? ''
    }

    if (reduceMotion) {
      svg.classList.remove('cursos-woman-hero-svg--motion')
      for (const el of [...armLeft, ...armRight]) {
        const base = el.dataset.baseTransform ?? ''
        if (base) el.setAttribute('transform', base)
        else el.removeAttribute('transform')
      }
      return
    }

    svg.classList.add('cursos-woman-hero-svg--motion')

    let frame = 0
    const tick = (now: number) => {
      const t = now / 1000
      const leftAngle =
        Math.sin((t * Math.PI * 2) / LEFT_CYCLE_S) * -LEFT_AMPLITUDE_DEG
      const rightAngle =
        Math.sin((t * Math.PI * 2) / RIGHT_CYCLE_S + RIGHT_PHASE_S) *
        RIGHT_AMPLITUDE_DEG

      applyPivotRotation(armLeft, leftAngle, LEFT_PIVOT)
      applyPivotRotation(armRight, rightAngle, RIGHT_PIVOT)

      frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(frame)
      for (const el of [...armLeft, ...armRight]) {
        const base = el.dataset.baseTransform ?? ''
        if (base) el.setAttribute('transform', base)
        else el.removeAttribute('transform')
      }
    }
  }, [forceMotion])

  return <div ref={hostRef} className={className} />
}
