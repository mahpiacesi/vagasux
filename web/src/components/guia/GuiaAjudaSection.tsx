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
    title: 'FAQ',
    hint: 'Carreira, rotina e processos seletivos',
    cta: 'Ver perguntas',
    Icon: Question,
    cardClassName:
      'bg-brand-400 text-neutral-100 shadow-[0_32px_80px_-32px_rgb(36_46_144_/_0.85)] hover:bg-brand-300',
    countClassName: 'text-neutral-100/12',
    hintClassName: 'text-brand-100/85',
    ctaClassName: 'text-neutral-100',
  },
  {
    id: 'glossario',
    to: guiaRoutes.glossario,
    count: guiaGlossarioEntries.length,
    title: 'Glossário',
    hint: 'Siglas, papéis e conceitos do dia a dia',
    cta: 'Ver verbetes',
    Icon: BookBookmark,
    cardClassName:
      'bg-complementary-300 text-neutral-500 shadow-[0_32px_80px_-32px_rgb(246_209_110_/_0.75)] hover:bg-complementary-200',
    countClassName: 'text-neutral-500/10',
    hintClassName: 'text-neutral-500/75',
    ctaClassName: 'text-neutral-500',
  },
] as const

export function GuiaAjudaSection() {
  return (
    <section
      id={guiaHashes.ajuda}
      className="relative overflow-hidden bg-neutral-500 px-5 py-16 md:px-6 md:py-20"
      aria-labelledby="guia-ajuda-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-px w-full bg-gradient-to-r from-transparent via-complementary-300/50 to-transparent" />
        <div className="absolute top-[-20%] right-[-8%] h-80 w-80 rounded-full bg-brand-400/25 blur-3xl" />
        <div className="absolute bottom-[-24%] left-[-10%] h-72 w-72 rounded-full bg-complementary-300/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-xs font-bold tracking-[0.22em] text-complementary-300 uppercase">
            Ajuda e suporte
          </p>
          <h2
            id="guia-ajuda-heading"
            className="mt-4 text-3xl leading-[1.02] font-black tracking-[-0.04em] text-neutral-100 md:text-4xl"
          >
            FAQ e Glossário{' '}
            <span className="text-mark-on-dark">da comunidade</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-200/75 md:text-lg">
            Dois acervos prontos para consultar — sem precisar caçar link solto.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
          {ajudaResources.map(
            ({
              id,
              to,
              count,
              title,
              hint,
              cta,
              Icon,
              cardClassName,
              countClassName,
              hintClassName,
              ctaClassName,
            }) => (
              <li key={id}>
                <Link
                  to={to}
                  className={cn(
                    'group relative flex min-h-[15.5rem] flex-col overflow-hidden rounded-3xl p-7 transition-colors duration-200 md:min-h-[16.5rem] md:p-8',
                    cardClassName,
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      'pointer-events-none absolute top-2 right-2 text-[5.5rem] leading-none font-black tracking-[-0.06em] md:text-[6.5rem]',
                      countClassName,
                    )}
                  >
                    {count}
                  </span>

                  <Icon size={36} weight="bold" aria-hidden />

                  <div className="relative mt-auto pt-10">
                    <p className="text-[0.65rem] font-bold tracking-[0.16em] uppercase opacity-80">
                      {count} {id === 'faq' ? 'respostas' : 'verbetes'}
                    </p>
                    <h3 className="mt-2 text-[2rem] leading-none font-black tracking-[-0.03em] md:text-[2.35rem]">
                      {title}
                    </h3>
                    <p className={cn('mt-3 max-w-[16rem] text-sm leading-snug', hintClassName)}>
                      {hint}
                    </p>
                    <span
                      className={cn(
                        'mt-6 inline-flex items-center gap-2 text-sm font-black',
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
