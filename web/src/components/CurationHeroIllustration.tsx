import { useEffect, useRef } from 'react'
import curationHeroSvg from '@/assets/illustrations/curation-hero.svg?raw'

type CurationHeroIllustrationProps = {
  className?: string
  forceMotion?: boolean
}

/** Curadoria SVG: subtle blob motion, same mount pattern as the guia hero. */
export function CurationHeroIllustration({
  className,
  forceMotion = false,
}: CurationHeroIllustrationProps) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    if (!host.querySelector('svg')) {
      host.innerHTML = curationHeroSvg
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
      svg.classList.remove('curation-hero-svg--motion')
      return
    }

    svg.classList.add('curation-hero-svg--motion')
  }, [forceMotion])

  return <div ref={hostRef} className={className} />
}
