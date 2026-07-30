import { useEffect, useRef } from 'react'
import guildaHeroSvg from '@/assets/illustrations/guilda-hero.svg?raw'
import { GuildaHeroStamp } from '@/components/GuildaHeroStamp'

type GuildaHeroIllustrationProps = {
  className?: string
  forceMotion?: boolean
}

export function GuildaHeroIllustration({
  className,
  forceMotion = false,
}: GuildaHeroIllustrationProps) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    if (!host.querySelector('svg')) {
      host.innerHTML = guildaHeroSvg
    }

    const svg = host.querySelector('svg')
    if (!svg) return

    svg.removeAttribute('width')
    svg.removeAttribute('height')
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
    svg.style.width = '100%'
    svg.style.height = 'auto'
    svg.style.overflow = 'visible'

    const reduceMotion =
      !forceMotion &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    svg.classList.toggle('guilda-hero-svg--motion', !reduceMotion)
  }, [forceMotion])

  return (
    <div className="guilda-hero-visual" aria-hidden="true">
      <div className="guilda-hero-visual-glow" />
      <GuildaHeroStamp forceMotion={forceMotion} />
      <div ref={hostRef} className={className} />
    </div>
  )
}
