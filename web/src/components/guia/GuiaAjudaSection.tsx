import { Link } from 'react-router-dom'
import { BookBookmark, Question } from '@phosphor-icons/react'
import { guiaHashes } from '@/lib/siteLinks'
import { guiaRoutes } from '@/lib/guiaRoutes'

const ajudaItems = [
  {
    id: 'faq',
    title: 'FAQ',
    cta: 'Ver perguntas e respostas',
    to: guiaRoutes.faq,
    Icon: Question,
  },
  {
    id: 'glossario',
    title: 'Glossário',
    cta: 'Explorar termos',
    to: guiaRoutes.glossario,
    Icon: BookBookmark,
  },
] as const

export function GuiaAjudaSection() {
  return (
    <section
      id={guiaHashes.ajuda}
      className="bg-brand-100/25 px-5 py-16 md:px-6 md:py-20"
      aria-labelledby="guia-ajuda-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            Ajuda e suporte
          </p>
          <h2
            id="guia-ajuda-heading"
            className="mt-4 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl"
          >
            Não encontrou o que procurava?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
            Consulte a FAQ para dúvidas frequentes ou explore o Glossário para
            entender termos, siglas e conceitos do universo de Product Design.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {ajudaItems.map(({ id, title, cta, to, Icon }) => (
            <li key={id}>
              <Link
                to={to}
                className="group flex h-full flex-col rounded-2xl border border-neutral-500/10 bg-neutral-100 p-6 transition-colors hover:border-brand-300 hover:bg-brand-100/40 md:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-500 transition-colors group-hover:bg-brand-200/80">
                  <Icon size={24} weight="bold" aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-black text-neutral-500">
                  {title}
                </h3>
                <span className="mt-5 text-[0.65rem] font-bold tracking-[0.14em] text-brand-400 uppercase">
                  {cta}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
