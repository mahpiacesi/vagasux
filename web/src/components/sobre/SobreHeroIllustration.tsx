import aboutUsSvg from '@/assets/illustrations/about-us-illustration.svg?raw'
import { cn } from '@/lib/utils'

type SobreHeroIllustrationProps = {
  className?: string
}

const illustrationMarkup = aboutUsSvg
  .replace(/\s(?:width|height)="[^"]*"/g, '')
  .replace(
    '<svg ',
    '<svg role="img" aria-label="Ilustração da comunidade VagasUX" preserveAspectRatio="xMidYMid meet" ',
  )

export function SobreHeroIllustration({ className }: SobreHeroIllustrationProps) {
  return (
    <div
      className={cn('sobre-hero-illustration', className)}
      dangerouslySetInnerHTML={{ __html: illustrationMarkup }}
    />
  )
}
