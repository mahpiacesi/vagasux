import { ArrowRight, BookBookmark, Question } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { guiaFaqItems } from '@/data/guiaFaq'
import { guiaGlossarioEntries } from '@/data/guiaGlossario'
import { guiaHashes } from '@/lib/siteLinks'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { cn } from '@/lib/utils'

const ajudaResources = [
  {
    id: 'faq',
    to: guiaRoutes.faq,
    count: guiaFaqItems.length,
    countLabel: 'respostas',
    title: 'FAQ',
    hint: 'Carreira, rotina e processos seletivos',
    cta: 'Ver perguntas',
    Icon: Question,
    cardClassName:
      'bg-brand-400 text-neutral-100 shadow-[0_32px_80px_-32px_rgb(36_46_144_/_0.85)] hover:bg-brand-300',
    asideClassName: 'bg-brand-500/35',
    hintClassName: 'text-brand-100/85',
    ctaClassName: 'text-neutral-100',
  },
  {
    id: 'glossario',
    to: guiaRoutes.glossario,
    count: guiaGlossarioEntries.length,
    countLabel: 'termos',
    title: 'Glossário',
    hint: 'Siglas, papéis e conceitos do dia a dia',
    cta: 'Ver termos',
    Icon: BookBookmark,
    cardClassName:
      'bg-complementary-300 text-neutral-500 shadow-[0_32px_80px_-32px_rgb(246_209_110_/_0.75)] hover:bg-complementary-200',
    asideClassName: 'bg-neutral-500/8',
    hintClassName: 'text-neutral-500/75',
    ctaClassName: 'text-neutral-500',
  },
] as const

export function GuiaAjudaSection() {
  return (
    <section
      id={guiaHashes.ajuda}
      className="bg-brand-500 px-5 py-16 md:px-6 md:py-20"
      aria-labelledby="guia-ajuda-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold tracking-[0.22em] text-complementary-300 uppercase">
            Ajuda e suporte
          </p>
          <h2
            id="guia-ajuda-heading"
            className="mt-4 text-3xl leading-[1.02] font-black tracking-[-0.04em] text-neutral-100 md:text-4xl"
          >
            FAQ e Glossário da comunidade
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-100/90 md:text-lg md:whitespace-nowrap">
            Dúvidas de carreira e jargões da área para você consultar sempre que precisar.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
          {ajudaResources.map(
            ({
              id,
              to,
              count,
              countLabel,
              title,
              hint,
              cta,
              Icon,
              cardClassName,
              asideClassName,
              hintClassName,
              ctaClassName,
            }) => (
              <li key={id}>
                <Link
                  to={to}
                  className={cn(
                    'group flex gap-4 rounded-3xl p-5 transition-colors duration-200 md:gap-5 md:p-6',
                    cardClassName,
                  )}
                >
                  <aside
                    className={cn(
                      'flex w-[6.25rem] shrink-0 flex-col items-center justify-center gap-4 rounded-2xl px-3 py-5 md:w-[7rem] md:py-6',
                      asideClassName,
                    )}
                    aria-hidden
                  >
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-neutral-100/15">
                      <Icon size={24} weight="bold" />
                    </span>
                    <div className="text-center">
                      <p className="text-2xl leading-none font-black tracking-tight">
                        {count}
                      </p>
                      <p className="mt-1 text-[0.58rem] font-bold tracking-[0.14em] uppercase opacity-80">
                        {countLabel}
                      </p>
                    </div>
                  </aside>

                  <div className="flex min-w-0 flex-1 flex-col justify-center py-1">
                    <h3 className="text-[1.85rem] leading-none font-black tracking-[-0.03em] md:text-[2.1rem]">
                      {title}
                    </h3>
                    <p
                      className={cn(
                        'mt-3 max-w-[18rem] text-sm leading-snug',
                        hintClassName,
                      )}
                    >
                      {hint}
                    </p>
                    <span
                      className={cn(
                        'mt-5 inline-flex items-center gap-2 text-sm font-black',
                        ctaClassName,
                      )}
                    >
                      {cta}
                      <ArrowRight
                        size={18}
                        weight="bold"
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  )
}
