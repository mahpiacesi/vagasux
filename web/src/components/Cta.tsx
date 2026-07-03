import { ArrowRight } from 'lucide-react'

const values = [
  'Acolhimento',
  'Inclusão',
  'Clareza',
  'Comunidade',
  'Educação acessível',
]

export function Cta() {
  return (
    <section id="participar" className="px-6 pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl bg-brand-500 px-8 py-12 text-center md:px-16 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
            Faça parte
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-neutral-100 md:text-4xl">
            Pronto para crescer junto com a comunidade?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-brand-200">
            Entre na VagasUX e comece a acessar oportunidades, conteúdo e uma rede de
            pessoas que entendem o seu caminho.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-complementary-300 px-7 py-3.5 text-base font-semibold text-brand-500 transition-colors hover:bg-complementary-200"
            >
              Entrar na comunidade
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <span className="text-sm text-brand-200">
              Link da comunidade em breve
            </span>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {values.map((value) => (
              <li
                key={value}
                className="rounded-full border border-brand-400/40 bg-brand-400/20 px-4 py-1.5 text-sm font-semibold text-brand-100"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
