import type { Icon } from '@phosphor-icons/react'
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
  TelegramLogo,
  WhatsappLogo,
  XLogo,
  YoutubeLogo,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { routes, superSite } from '@/lib/siteLinks'
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

export function Footer() {
  return (
    <footer className="bg-neutral-500 text-neutral-100">
      <div className="mx-auto grid max-w-3xl gap-10 px-5 py-14 md:max-w-4xl md:grid-cols-[1.4fr_1fr] md:px-6 md:py-16">
        <div>
          <Link to={routes.home} aria-label="VagasUX — início">
            <Logo variant="white" />
          </Link>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-300">
            Comunidade brasileira de UX e design. Vagas reais, conteúdo e gente
            que se ajuda — de forma gratuita e colaborativa.
          </p>
          <p className="mt-6 text-sm text-neutral-300/80">
            Organizado por{' '}
            <a
              href="https://avely.me/mahpiacesi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-complementary-300 underline-offset-4 transition-colors hover:text-complementary-200 hover:underline"
            >
              Mah Piacesi
            </a>
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-complementary-300 uppercase">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-neutral-300">
              <li>
                <Link
                  to={routes.oportunidades}
                  className="transition-colors hover:text-neutral-100"
                >
                  Oportunidades
                </Link>
              </li>
              <li>
                <a
                  href={superSite.guia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-neutral-100"
                >
                  Guia
                </a>
              </li>
              <li>
                <a
                  href={superSite.comunidade}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-neutral-100"
                >
                  Comunidade
                </a>
              </li>
              <li>
                <a
                  href={superSite.publicar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-neutral-100"
                >
                  Publicar vaga
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-complementary-300 uppercase">
              Redes
            </p>
            <nav aria-label="Redes sociais da VagasUX" className="mt-4">
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
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-5 py-5 text-sm text-neutral-300/60 md:max-w-4xl md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} VagasUX</p>
          <p>Feito com carinho para a comunidade de UX no Brasil.</p>
        </div>
      </div>
    </footer>
  )
}
