import { useEffect, useState } from 'react'

type GuildaHeroStampProps = {
  className?: string
  forceMotion?: boolean
}

export function GuildaHeroStamp({
  className,
  forceMotion = false,
}: GuildaHeroStampProps) {
  const [animate, setAnimate] = useState(forceMotion)

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    setAnimate(forceMotion || !reduceMotion)
  }, [forceMotion])

  return (
    <div
      className={[
        'guilda-hero-stamp',
        animate ? 'guilda-hero-stamp--motion' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      <svg viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="52"
          cy="52"
          r="48"
          fill="#A8B0FF"
          stroke="#07003A"
          strokeWidth="2.5"
        />
        <g className="guilda-hero-stamp-arrow">
          <path
            d="M46 58L58 46"
            stroke="#07003A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M58 46H49"
            stroke="#07003A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M58 46V55"
            stroke="#07003A"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
        <g className="guilda-hero-stamp-ring">
          <defs>
            <path
              id="guilda-stamp-circle"
              d="M 52,52 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
            />
          </defs>
          <text
            fill="#07003A"
            fontSize="7.5"
            fontWeight="800"
            letterSpacing="0.14em"
          >
            <textPath href="#guilda-stamp-circle" startOffset="0%">
              ✦ VAGAS UX ✦ GUILDA DO VAGUINER
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  )
}
