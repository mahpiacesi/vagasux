import type { Icon } from '@phosphor-icons/react'
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
  SpotifyLogo,
  TelegramLogo,
  WhatsappLogo,
  XLogo,
  YoutubeLogo,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { routes } from '@/lib/siteLinks'
import { openCookiePreferences } from '@/lib/cookieConsent'
import { Logo } from './Logo'

const socialLinks: { label: string; href: string; Icon: Icon }[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/vagasux',
    Icon: InstagramLogo,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/vagasux',
    Icon: LinkedinLogo,
  },
  {
    label: 'WhatsApp',
    href: 'https://www.whatsapp.com/channel/0029VaolXJkId7nHWZAPTz0P',
    Icon: WhatsappLogo,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/guiadoproductdesigner',
    Icon: TelegramLogo,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/c/VagasUX',
    Icon: YoutubeLogo,
  },
  {
    label: 'Podvagas no Spotify',
    href: 'https://open.spotify.com/show/3XlkhvjZyh425pdRkAtBVs',
    Icon: SpotifyLogo,
  },
  {
    label: 'X',
    href: 'https://x.com/vagasux',
    Icon: XLogo,
  },
  {
    label: 'Medium',
    href: 'https://medium.com/vagas-ux',
    Icon: MediumLogo,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/vagasux',
    Icon: FacebookLogo,
  },
]

const legalLinkClass =
  'text-sm text-neutral-300/70 underline decoration-neutral-300/30 underline-offset-4 transition-colors hover:text-complementary-300 hover:decoration-complementary-300/50'

const legalLinks = [
  { kind: 'internal' as const, label: 'Código de Conduta', href: routes.codigoDeConduta },
  { kind: 'internal' as const, label: 'Termos e Políticas', href: routes.termosEPoliticas },
  { kind: 'cookies' as const, label: 'Preferências de cookies' },
] as const

export function Footer() {
  return (
    <footer className="relative bg-neutral-500 px-5 py-10 text-neutral-100 md:px-6">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden
      />
      <div className="mx-auto flex max-w-3xl flex-col gap-8 md:max-w-4xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-start gap-4">
            <Link to={routes.home} aria-label="VagasUX início">
              <Logo variant="white" />
            </Link>
            <nav aria-label="Redes sociais da VagasUX">
              <ul className="flex flex-wrap items-center gap-1">
                {socialLinks.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex size-10 items-center justify-center rounded-lg text-neutral-300 transition-colors hover:bg-white/10 hover:text-complementary-300 focus-visible:bg-white/10 focus-visible:text-complementary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-complementary-300"
                    >
                      <Icon size={22} weight="regular" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-neutral-300">
            Uma comunidade idealizada por{' '}
            <a
              href="https://avely.me/mahpiacesi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-100 underline decoration-neutral-300/50 underline-offset-2 transition-colors hover:text-complementary-300 hover:decoration-complementary-300"
            >
              Mah Piacesi
            </a>{' '}
            em 2020 e construída por voluntários que acreditam que
            oportunidades devem ser acessíveis para todas as pessoas.
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-neutral-400/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Institucional">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  {item.kind === 'cookies' ? (
                    <button
                      type="button"
                      onClick={openCookiePreferences}
                      className={legalLinkClass}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link to={item.href} className={legalLinkClass}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-sm text-neutral-300/70">
            © {new Date().getFullYear()} VagasUX
          </p>
        </div>
      </div>
    </footer>
  )
}
