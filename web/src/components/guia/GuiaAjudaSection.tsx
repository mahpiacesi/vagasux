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
    Icon: Question,
    accentClassName: 'border-l-brand-400',
    iconWrapClassName: 'bg-brand-100 text-brand-500 ring-1 ring-brand-200/80',
    badgeClassName: 'bg-brand-100 text-brand-500',
    arrowClassName:
      'border-brand-200/80 text-brand-400 group-hover:border-brand-400 group-hover:bg-brand-400 group-hover:text-neutral-100',
  },
  {
    id: 'glossario',
    to: guiaRoutes.glossario,
    count: guiaGlossarioEntries.length,
    countLabel: 'termos',
    title: 'Glossário',
    hint: 'Siglas, papéis e conceitos do dia a dia',
    Icon: BookBookmark,
    accentClassName: 'border-l-complementary-400',
    iconWrapClassName:
      'bg-complementary-100 text-complementary-500 ring-1 ring-complementary-300/70',
    badgeClassName: 'bg-complementary-100 text-complementary-500',
    arrowClassName:
      'border-complementary-300/80 text-complementary-500 group-hover:border-complementary-400 group-hover:bg-complementary-300 group-hover:text-neutral-500',
  },
] as const

export function GuiaAjudaSection() {
  return (
    <section
      id={guiaHashes.ajuda}
      className="border-t border-neutral-500/10 bg-neutral-100 px-5 py-16 md:px-6 md:py-20"
      aria-labelledby="guia-ajuda-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-200/50 bg-gradient-to-br from-brand-100/90 via-neutral-100 to-complementary-100/45 p-7 shadow-[0_28px_80px_-48px_rgb(7_0_58_/_0.3)] md:p-10">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgb(7 0 58 / 0.05) 1px, transparent 0)',
                backgroundSize: '20px 20px',
              }}
            />
            <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-brand-200/45 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-complementary-200/40 blur-3xl" />
          </div>

          <div className="relative">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
                Ajuda e suporte
              </p>
              <h2
                id="guia-ajuda-heading"
                className="mt-4 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl"
              >
                FAQ e Glossário da comunidade
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
                Dúvidas de carreira e jargões da área para você consultar sempre que precisar.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 md:mt-10 md:grid-cols-2 md:gap-4">
              {ajudaResources.map(
                ({
                  id,
                  to,
                  count,
                  countLabel,
                  title,
                  hint,
                  Icon,
                  accentClassName,
                  iconWrapClassName,
                  badgeClassName,
                  arrowClassName,
                }) => (
                  <li key={id}>
                    <Link
                      to={to}
                      aria-label={`${title}. ${hint}`}
                      className={cn(
                        'group flex items-center gap-4 rounded-2xl border border-neutral-500/10 border-l-[3px] bg-neutral-100/95 p-5 backdrop-blur-sm transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-200/80 hover:shadow-[0_20px_50px_-30px_rgb(7_0_58_/_0.28)] md:gap-5 md:p-6',
                        accentClassName,
                      )}
                    >
                      <span
                        className={cn(
                          'inline-flex size-12 shrink-0 items-center justify-center rounded-2xl md:size-14',
                          iconWrapClassName,
                        )}
                        aria-hidden
                      >
                        <Icon size={26} weight="bold" />
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h3 className="text-xl font-black tracking-tight text-neutral-500 md:text-[1.35rem]">
                            {title}
                          </h3>
                          <span
                            className={cn(
                              'rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold tracking-[0.08em] uppercase',
                              badgeClassName,
                            )}
                          >
                            {count} {countLabel}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">
                          {hint}
                        </p>
                      </div>

                      <span
                        className={cn(
                          'inline-flex size-10 shrink-0 items-center justify-center rounded-full border bg-neutral-100 transition-colors duration-200',
                          arrowClassName,
                        )}
                        aria-hidden
                      >
                        <ArrowRight size={18} weight="bold" />
                      </span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
