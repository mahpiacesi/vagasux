import { useEffect, useRef } from 'react'
import illustrationWomanSvg from '@/assets/illustration-woman.svg?raw'

type GuiaCursosHeroIllustrationProps = {
  className?: string
  /** Keep motion even when the OS asks for reduced motion (dev QA). */
  forceMotion?: boolean
}

type Pivot = { x: number; y: number }
type Point = { x: number; y: number }

const PIVOTS = {
  'arm-left': { x: 472, y: 253.55 },
  'arm-right': { x: 558, y: 212 },
  'leg-right': { x: 554, y: 466 },
  'leg-right-knee': { x: 668, y: 418 },
  head: { x: 502, y: 198 },
} as const

type MotionGroup = 'arm-left' | 'arm-right' | 'leg-right' | 'leg-right-foot' | 'head'

const MOTION: Record<
  MotionGroup,
  { amplitude: number; cycle: number; phase: number }
> = {
  'arm-left': { amplitude: 1.6, cycle: 4.4, phase: 0 },
  'arm-right': { amplitude: 1.8, cycle: 4.8, phase: 0.5 },
  'leg-right': { amplitude: 1.4, cycle: 5.6, phase: 0.75 },
  'leg-right-foot': { amplitude: 0.9, cycle: 5.6, phase: 0.82 },
  head: { amplitude: 0, cycle: 5.4, phase: 0.35 },
}

const MOTION_GROUP_SELECTORS: MotionGroup[] = [
  'arm-left',
  'arm-right',
  'leg-right',
  'leg-right-foot',
  'head',
]

const BODY_PATH_ORIGINAL =
  'M721.2,410.82S626.52,463,589.5,450.5c-51.31,-17.34,-61,-119.38,-82,-151c-8,-1,-59.73,-1.36,-59.73,-1.36V616.75h38.85V377c20.81,41.35,37.64,95.73,78.88,112.55c76,31,181.44,-44.86,181.44,-44.86Z'

const BODY_FIXED = {
  crotch: { x: 589.5, y: 450.5 },
  innerThigh: { x: 486.62, y: 377 },
} as const

const BODY_RAISED_LEG = {
  outerTop: { x: 721.2, y: 410.82 },
  sCp2: { x: 626.52, y: 463 },
  innerCp1: { x: 507.43, y: 418.35 },
  innerCp2: { x: 524.26, y: 472.73 },
  innerMid: { x: 565.5, y: 489.55 },
  outerCp1: { x: 641.5, y: 520.55 },
  outerCp2: { x: 746.94, y: 444.69 },
  outerEnd: { x: 746.94, y: 444.69 },
} as const

const BODY_TORSO =
  'c-51.31,-17.34,-61,-119.38,-82,-151c-8,-1,-59.73,-1.36,-59.73,-1.36V616.75h38.85V377'

type RaisedLegPoints = { [K in keyof typeof BODY_RAISED_LEG]: Point }

function waveAngle(t: number, cycle: number, amplitude: number, phase: number) {
  return Math.sin(((t + phase) / cycle) * Math.PI * 2) * amplitude
}

function rotatePoint(p: Point, pivot: Pivot, angleDeg: number): Point {
  const rad = (angleDeg * Math.PI) / 180
  const cos = Math.cos(rad)
  const sin = Math.sin(rad)
  const dx = p.x - pivot.x
  const dy = p.y - pivot.y
  return {
    x: pivot.x + dx * cos - dy * sin,
    y: pivot.y + dx * sin + dy * cos,
  }
}

function fmt(n: number) {
  return n.toFixed(2).replace(/\.?0+$/, '').replace(/^-0$/, '0')
}

function rel(from: Point, to: Point) {
  return `${fmt(to.x - from.x)},${fmt(to.y - from.y)}`
}

function buildBodyPath(raised: RaisedLegPoints) {
  const { crotch, innerThigh } = BODY_FIXED
  const mid = raised.innerMid
  return [
    `M${fmt(raised.outerTop.x)},${fmt(raised.outerTop.y)}`,
    `S${fmt(raised.sCp2.x)},${fmt(raised.sCp2.y)},${crotch.x},${crotch.y}`,
    BODY_TORSO,
    `c${rel(innerThigh, raised.innerCp1)},${rel(innerThigh, raised.innerCp2)},${rel(innerThigh, mid)}`,
    `c${rel(mid, raised.outerCp1)},${rel(mid, raised.outerCp2)},${rel(mid, raised.outerEnd)}`,
    'Z',
  ].join('')
}

function rotateRaisedLeg(angleDeg: number): RaisedLegPoints {
  const pivot = PIVOTS['leg-right']
  return Object.fromEntries(
    Object.entries(BODY_RAISED_LEG).map(([key, point]) => [
      key,
      rotatePoint(point, pivot, angleDeg),
    ]),
  ) as RaisedLegPoints
}

function buildTransform(rotations: Array<{ angleDeg: number; pivot: Pivot }>, base: string) {
  const parts = rotations.map(
    ({ angleDeg, pivot }) => `rotate(${angleDeg.toFixed(3)}, ${pivot.x}, ${pivot.y})`,
  )
  if (base) parts.push(base)
  return parts.join(' ')
}

function applyGroupRotation(
  elements: SVGGraphicsElement[],
  angleDeg: number,
  pivot: Pivot,
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

    const bodyEl = host.querySelector<SVGPathElement>('#body')

    if (bodyEl && !bodyEl.dataset.basePath) {
      bodyEl.dataset.basePath = bodyEl.getAttribute('d') ?? BODY_PATH_ORIGINAL
    }

    const groups = Object.fromEntries(
      MOTION_GROUP_SELECTORS.map((key) => [
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
      bodyEl?.setAttribute('d', bodyEl.dataset.basePath ?? BODY_PATH_ORIGINAL)
      return
    }

    svg.classList.add('cursos-woman-hero-svg--motion')

    let frame = 0
    const tick = (now: number) => {
      const t = now / 1000

      const legRightHip = waveAngle(
        t,
        MOTION['leg-right'].cycle,
        MOTION['leg-right'].amplitude,
        MOTION['leg-right'].phase,
      )
      const legRightKnee = waveAngle(
        t,
        MOTION['leg-right-foot'].cycle,
        MOTION['leg-right-foot'].amplitude,
        MOTION['leg-right-foot'].phase,
      )

      const headAngle = waveAngle(
        t,
        MOTION.head.cycle,
        MOTION.head.amplitude,
        MOTION.head.phase,
      )

      if (bodyEl) {
        bodyEl.setAttribute('d', buildBodyPath(rotateRaisedLeg(legRightHip)))
      }

      for (const key of MOTION_GROUP_SELECTORS) {
        if (key === 'leg-right-foot') continue

        const { amplitude, cycle, phase } = MOTION[key]
        const angle =
          key === 'leg-right'
            ? legRightHip
            : key === 'head'
              ? headAngle
              : waveAngle(t, cycle, amplitude, phase)
        applyGroupRotation(
          groups[key],
          angle,
          PIVOTS[key === 'leg-right' ? 'leg-right' : key],
        )
      }

      for (const el of groups['leg-right-foot']) {
        const base = el.dataset.baseTransform ?? ''
        el.setAttribute(
          'transform',
          buildTransform(
            [
              { angleDeg: legRightHip, pivot: PIVOTS['leg-right'] },
              { angleDeg: legRightKnee, pivot: PIVOTS['leg-right-knee'] },
            ],
            base,
          ),
        )
      }

      frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(frame)
      resetTransforms(allAnimated)
      bodyEl?.setAttribute('d', bodyEl.dataset.basePath ?? BODY_PATH_ORIGINAL)
    }
  }, [forceMotion])

  return <div ref={hostRef} className={className} />
}
