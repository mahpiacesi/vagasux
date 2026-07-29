import { useEffect, useRef, type CSSProperties } from 'react'
import umbrellaHeroSvg from '@/assets/illustration-umbrella.svg?raw'

type UmbrellaHeroIllustrationProps = {
  className?: string
  forceMotion?: boolean
}

/** Mural SVG: layered umbrellas with gentle sway and float. */
export function UmbrellaHeroIllustration({
  className,
  forceMotion = false,
}: UmbrellaHeroIllustrationProps) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    if (!host.querySelector('svg')) {
      host.innerHTML = umbrellaHeroSvg
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

    if (reduceMotion) {
      svg.classList.remove('umbrella-hero-svg--motion')
      return
    }

    svg.classList.add('umbrella-hero-svg--motion')
  }, [forceMotion])

  return (
    <div className="umbrella-hero-stage" aria-hidden="true">
      <div className="umbrella-hero-glow" />
      <div className="umbrella-hero-rain">
        {Array.from({ length: 8 }, (_, index) => (
          <span
            key={index}
            className="umbrella-hero-raindrop"
            style={{ '--rain-index': index } as CSSProperties}
          />
        ))}
      </div>
      <div ref={hostRef} className={className} />
    </div>
  )
}
