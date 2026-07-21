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
    <footer className="border-t border-neutral-200 px-5 py-10 md:px-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 md:max-w-4xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-start gap-4">
            <Logo />
            <nav aria-label="Redes sociais da VagasUX">
              <ul className="flex flex-wrap items-center gap-1">
                {socialLinks.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex size-10 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-brand-100 hover:text-brand-500 focus-visible:bg-brand-100 focus-visible:text-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
                    >
                      <Icon size={22} weight="regular" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-neutral-400">
            Uma comunidade idealizada por{' '}
            <a
              href="https://avely.me/mahpiacesi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-500 underline decoration-neutral-300 underline-offset-2 transition-colors hover:text-brand-400 hover:decoration-brand-300"
            >
              Mah Piacesi
            </a>{' '}
            em 2020 e construída por voluntários que acreditam que
            oportunidades devem ser acessíveis para todas as pessoas.
          </p>
        </div>

        <p className="text-sm text-neutral-300">
          © {new Date().getFullYear()} VagasUX
        </p>
      </div>
    </footer>
  )
}
