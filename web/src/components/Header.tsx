import { Logo } from './Logo'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-500/10 bg-neutral-100/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 md:max-w-4xl md:px-6">
        <a href="/" aria-label="VagasUX — mural de vagas">
          <Logo />
        </a>
        <p className="text-xs font-semibold tracking-wide text-neutral-400 uppercase md:text-sm">
          Mural de vagas
        </p>
      </div>
    </header>
  )
}
