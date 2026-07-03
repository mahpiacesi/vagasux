import { Logo } from './Logo'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#manifesto', label: 'Manifesto' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-neutral-100/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" aria-label="VagasUX — início">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-neutral-400 transition-colors hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#participar"
          className="rounded-full bg-brand-300 px-5 py-2.5 text-sm font-semibold text-neutral-100 transition-colors hover:bg-brand-400"
        >
          Participar
        </a>
      </div>
    </header>
  )
}
