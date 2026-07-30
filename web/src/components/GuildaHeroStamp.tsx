import { useEffect, useId, useState } from 'react'

type GuildaHeroStampProps = {
  className?: string
  forceMotion?: boolean
}

const STAMP_TEXT = '✦ VAGAS UX ✦ GUILDA DO VAGUINER'
const CENTER = 104
const CIRCLE_R = 96
const CLIP_R = 90
const RING_R = 70
const RING_LENGTH = 2 * Math.PI * RING_R

export function GuildaHeroStamp({
  className,
  forceMotion = false,
}: GuildaHeroStampProps) {
  const [animate, setAnimate] = useState(forceMotion)
  const uid = useId().replace(/:/g, '')
  const clipId = `guilda-stamp-clip-${uid}`
  const pathId = `guilda-stamp-path-${uid}`

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
      <svg
        viewBox="0 0 208 208"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <defs>
          <clipPath id={clipId}>
            <circle cx={CENTER} cy={CENTER} r={CLIP_R} />
          </clipPath>
          <path
            id={pathId}
            d={`M ${CENTER} ${CENTER} m -${RING_R},0 a ${RING_R},${RING_R} 0 1,1 ${RING_R * 2},0 a ${RING_R},${RING_R} 0 1,1 -${RING_R * 2},0`}
          />
        </defs>

        <circle
          cx={CENTER}
          cy={CENTER}
          r={CIRCLE_R}
          fill="#A8B0FF"
          stroke="#07003A"
          strokeWidth="5"
        />

        <g clipPath={`url(#${clipId})`}>
          <g className="guilda-hero-stamp-ring">
            {animate ? (
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 ${CENTER} ${CENTER}`}
                to={`360 ${CENTER} ${CENTER}`}
                dur="22s"
                repeatCount="indefinite"
              />
            ) : null}
            <text
              fill="#07003A"
              fontSize="13"
              fontWeight="800"
              fontFamily="Lato, system-ui, sans-serif"
              letterSpacing="0.04em"
            >
              <textPath
                href={`#${pathId}`}
                startOffset="0%"
                textLength={RING_LENGTH}
                lengthAdjust="spacing"
              >
                {STAMP_TEXT}
              </textPath>
            </text>
          </g>
        </g>

        <g className="guilda-hero-stamp-arrow">
          <path
            d="M88 120L120 88"
            stroke="#07003A"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <path
            d="M120 88H100"
            stroke="#07003A"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <path
            d="M120 88V112"
            stroke="#07003A"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  )
}
