import { ArrowRight, BookBookmark, Question } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '@/components/guilda/ScrollReveal'
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
    variantClassName: 'guia-ajuda-spotlight--faq',
    iconClassName: 'bg-brand-400/20 text-brand-200 ring-brand-300/30',
    countClassName: 'text-brand-200',
    ctaClassName: 'text-brand-200',
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
    variantClassName: 'guia-ajuda-spotlight--glossario',
    iconClassName: 'bg-complementary-300/15 text-complementary-300 ring-complementary-300/25',
    countClassName: 'text-complementary-300',
    ctaClassName: 'text-complementary-300',
  },
] as const

export function GuiaAjudaSection() {
  return (
    <section
      id={guiaHashes.ajuda}
      className="guia-ajuda relative overflow-hidden bg-neutral-500 px-5 py-20 md:px-6 md:py-28"
      aria-labelledby="guia-ajuda-heading"
    >
      <div className="guia-ajuda-ambient pointer-events-none absolute inset-0" aria-hidden>
        <span className="guia-ajuda-ambient__orb guia-ajuda-ambient__orb--brand" />
        <span className="guia-ajuda-ambient__orb guia-ajuda-ambient__orb--gold" />
        <span className="guia-ajuda-ambient__orb guia-ajuda-ambient__orb--violet" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.22em] text-complementary-300 uppercase">
            Ajuda e suporte
          </p>
          <h2
            id="guia-ajuda-heading"
            className="mt-4 text-[2.1rem] leading-[1.02] font-black tracking-[-0.04em] text-neutral-100 md:text-[2.85rem]"
          >
            FAQ e Glossário da comunidade
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-200/75 md:text-lg">
            Dúvidas de carreira e jargões da área para você consultar sempre que precisar.
          </p>
        </ScrollReveal>

        <ul className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
          {ajudaResources.map(
            (
              {
                id,
                to,
                count,
                countLabel,
                title,
                hint,
                cta,
                Icon,
                variantClassName,
                iconClassName,
                countClassName,
                ctaClassName,
              },
              index,
            ) => (
              <ScrollReveal key={id} as="li" delayMs={120 + index * 140}>
                <Link
                  to={to}
                  aria-label={`${title}. ${hint}`}
                  className={cn('guia-ajuda-spotlight group', variantClassName)}
                >
                  <span className="guia-ajuda-spotlight__border" aria-hidden />
                  <span className="guia-ajuda-spotlight__shine" aria-hidden />

                  <span className="guia-ajuda-spotlight__inner">
                    <span className="flex items-start justify-between gap-4">
                      <span
                        className={cn(
                          'inline-flex size-14 items-center justify-center rounded-2xl ring-1',
                          iconClassName,
                        )}
                        aria-hidden
                      >
                        <Icon size={30} weight="bold" />
                      </span>
                      <span className="text-right">
                        <span
                          className={cn(
                            'block text-4xl leading-none font-black tracking-tight md:text-[2.75rem]',
                            countClassName,
                          )}
                        >
                          {count}
                        </span>
                        <span className="mt-1 block text-[0.62rem] font-bold tracking-[0.16em] text-neutral-200/55 uppercase">
                          {countLabel}
                        </span>
                      </span>
                    </span>

                    <span className="mt-10 block text-[2rem] leading-none font-black tracking-[-0.03em] text-neutral-100 md:text-[2.35rem]">
                      {title}
                    </span>
                    <span className="mt-3 block max-w-[16rem] text-sm leading-relaxed text-neutral-200/70 md:text-base">
                      {hint}
                    </span>

                    <span
                      className={cn(
                        'guia-ajuda-spotlight__cta mt-auto inline-flex items-center gap-2 pt-10 text-sm font-black',
                        ctaClassName,
                      )}
                    >
                      {cta}
                      <ArrowRight
                        size={18}
                        weight="bold"
                        className="guia-ajuda-spotlight__arrow"
                        aria-hidden
                      />
                    </span>
                  </span>
                </Link>
              </ScrollReveal>
            ),
          )}
        </ul>
      </div>
    </section>
  )
}
