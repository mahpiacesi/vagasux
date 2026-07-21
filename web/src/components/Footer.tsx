import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <Logo />
        <p className="max-w-md text-center text-sm text-neutral-400 md:text-left">
          Uma comunidade idealizada por Mah Piacesi em 2020 e construída por
          voluntários que acreditam que oportunidades devem ser acessíveis para
          todas as pessoas.
        </p>
        <p className="text-sm text-neutral-300">
          © {new Date().getFullYear()} VagasUX
        </p>
      </div>
    </footer>
  )
}
