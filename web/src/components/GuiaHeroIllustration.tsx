import guiaCharacter from '@/assets/illustrations/guia-character.png'
import guiaHero from '@/assets/illustrations/guia-hero.png'

type GuiaHeroIllustrationProps = {
  className?: string
}

/**
 * Layered SVG: morphing blob + character + original icon slices
 * clipped from the full illustration and floated independently.
 */
export function GuiaHeroIllustration({ className }: GuiaHeroIllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 730 560"
      role="img"
      aria-label="Ilustração de uma pessoa apontando para ferramentas de design como Notion, Miro e Figma"
    >
      <defs>
        <clipPath id="guia-clip-notion">
          <circle cx="118" cy="120" r="56" />
        </clipPath>
        <clipPath id="guia-clip-miro">
          <circle cx="355" cy="60" r="56" />
        </clipPath>
        <clipPath id="guia-clip-figma">
          <circle cx="575" cy="180" r="56" />
        </clipPath>
      </defs>

      <g className="guia-blob" aria-hidden="true">
        <path
          className="guia-blob__shape"
          fill="var(--color-brand-200, #a8b0ff)"
          d="M168 78c72-48 168-58 262-38 78 16 158 58 198 128 42 74 28 168-28 230-58 64-158 92-248 88-86-4-178-36-228-102-52-70-40-168 4-230 18-26 26-48 40-76z"
        />
        <path
          className="guia-blob__shape guia-blob__shape--soft"
          fill="var(--color-brand-300, #5d6bf6)"
          opacity="0.2"
          d="M210 110c60-40 150-52 230-28 70 20 140 55 168 118 32 72 8 150-42 200-54 54-142 78-220 72-78-6-160-38-200-100-42-64-28-150 10-202 16-22 32-40 54-60z"
        />
      </g>

      <g className="guia-figure">
        <image
          href={guiaCharacter}
          x="0"
          y="12"
          width="730"
          height="543"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>

      {/* Original icon artwork, clipped and floated on independent timelines */}
      <g className="guia-icon guia-icon--notion">
        <image
          href={guiaHero}
          x="0"
          y="12"
          width="730"
          height="543"
          preserveAspectRatio="xMidYMid meet"
          clipPath="url(#guia-clip-notion)"
        />
      </g>
      <g className="guia-icon guia-icon--miro">
        <image
          href={guiaHero}
          x="0"
          y="12"
          width="730"
          height="543"
          preserveAspectRatio="xMidYMid meet"
          clipPath="url(#guia-clip-miro)"
        />
      </g>
      <g className="guia-icon guia-icon--figma">
        <image
          href={guiaHero}
          x="0"
          y="12"
          width="730"
          height="543"
          preserveAspectRatio="xMidYMid meet"
          clipPath="url(#guia-clip-figma)"
        />
      </g>

      <g aria-hidden="true">
        <circle
          className="guia-spark guia-spark--a"
          cx="70"
          cy="48"
          r="4.5"
          fill="#F6D16E"
        />
        <circle
          className="guia-spark guia-spark--b"
          cx="430"
          cy="22"
          r="3.5"
          fill="#5D6BF6"
        />
        <circle
          className="guia-spark guia-spark--c"
          cx="690"
          cy="130"
          r="4"
          fill="#F24E1E"
        />
        <circle
          className="guia-spark guia-spark--d"
          cx="650"
          cy="255"
          r="3"
          fill="#F6D16E"
        />
      </g>
    </svg>
  )
}
