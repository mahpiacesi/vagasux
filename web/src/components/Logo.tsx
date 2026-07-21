import brandLogo from '../assets/brand-vagasux.svg'
import brandLogoWhite from '../assets/brand-vagasux-white.svg'

type LogoProps = {
  className?: string
  /** Use white wordmark on dark backgrounds */
  variant?: 'default' | 'white'
}

export function Logo({ className = '', variant = 'default' }: LogoProps) {
  const src = variant === 'white' ? brandLogoWhite : brandLogo

  return (
    <img
      src={src}
      alt="VagasUX"
      width={417}
      height={170}
      decoding="async"
      className={`h-9 w-auto md:h-10 ${className}`}
    />
  )
}
