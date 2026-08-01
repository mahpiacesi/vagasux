import { ArrowRight, BookBookmark, Question, UsersThree } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { guiaFaqCategories, guiaFaqItems } from '@/data/guiaFaq'
import { guiaGlossarioCategories, guiaGlossarioEntries } from '@/data/guiaGlossario'
import { guiaHashes } from '@/lib/siteLinks'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { cn } from '@/lib/utils'

const faqHighlights = [
  'Rotina de quem trabalha com Product Design',
  'LinkedIn, portfólio e processos seletivos',
  'Squads, sprints e dia a dia no time',
] as const

const glossarioHighlights = ['Squad', 'Discovery', 'Handoff', 'MVP', 'Backlog'] as const

const ajudaResources = [
  {
    id: 'faq',
    eyebrow: 'Perguntas e respostas',
    title: 'FAQ do Product Designer',
    description:
      'Dúvidas reais de carreira, rotina, entrevistas e contratação — compiladas pela VagasUX com a comunidade desde o guia original.',
    to: guiaRoutes.faq,
    Icon: Question,
    stat: `${guiaFaqItems.length} respostas`,
    categories: guiaFaqCategories,
    highlights: faqHighlights,
    highlightsLabel: 'Temas que você encontra',
    cta: 'Explorar a FAQ',
    cardClassName:
      'border-brand-200/70 bg-gradient-to-br from-brand-100/90 via-neutral-100 to-brand-100/30 shadow-[0_28px_70px_-40px_rgb(7_0_58_/_0.45)]',
    iconClassName: 'bg-brand-400 text-neutral-100',
    chipClassName: 'border-brand-200/60 bg-brand-100/50 text-brand-500',
  },
  {
    id: 'glossario',
    eyebrow: 'Termos e conceitos',
    title: 'Glossário do Product Designer',
    description:
      'Siglas, papéis, métodos e jargão do dia a dia explicados de forma direta — para você não ficar perdido em reunião ou vaga.',
    to: guiaRoutes.glossario,
    Icon: BookBookmark,
    stat: `${guiaGlossarioEntries.length} verbetes`,
    categories: guiaGlossarioCategories,
    highlights: glossarioHighlights,
    highlightsLabel: 'Termos populares',
    cta: 'Explorar o glossário',
    cardClassName:
      'border-complementary-300/70 bg-gradient-to-br from-complementary-100 via-neutral-100 to-brand-100/35 shadow-[0_28px_70px_-40px_rgb(195_163_76_/_0.35)]',
    iconClassName: 'bg-neutral-500 text-complementary-300',
    chipClassName:
      'border-complementary-300/50 bg-complementary-100/80 text-neutral-500',
  },
] as const

function AjudaStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-neutral-500/10 bg-neutral-100/80 px-4 py-3 backdrop-blur-sm">
      <p className="text-2xl font-black tracking-tight text-neutral-500">{value}</p>
      <p className="mt-1 text-xs font-semibold text-neutral-400">{label}</p>
    </div>
  )
}

export function GuiaAjudaSection() {
  return (
    <section
      id={guiaHashes.ajuda}
      className="relative overflow-hidden border-t border-neutral-500/10 bg-brand-100/20 px-5 py-16 md:px-6 md:py-24"
      aria-labelledby="guia-ajuda-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(7 0 58 / 0.05) 1px, transparent 0)',
            backgroundSize: '22px 22px',
          }}
        />
        <div className="absolute top-[-10%] right-[-4%] h-72 w-72 rounded-full bg-brand-200/35 blur-3xl" />
        <div className="absolute bottom-[-16%] left-[-6%] h-64 w-64 rounded-full bg-complementary-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            <UsersThree size={16} weight="bold" aria-hidden />
            Acervo da comunidade
          </p>
          <h2
            id="guia-ajuda-heading"
            className="mt-4 text-3xl leading-[1.04] font-black tracking-[-0.04em] text-neutral-500 md:text-[2.65rem]"
          >
            Muito conteúdo para consultar quando{' '}
            <span className="text-mark">precisar</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
            Além das trilhas e da curadoria, a FAQ e o Glossário reúnem anos de
            troca da comunidade VagasUX — prontos para você buscar resposta ou
            decifrar um termo na hora.
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <AjudaStat value={String(guiaFaqItems.length)} label="respostas na FAQ" />
          <AjudaStat
            value={String(guiaGlossarioEntries.length)}
            label="verbetes no glossário"
          />
          <AjudaStat
            value={String(guiaFaqCategories.length)}
            label="categorias na FAQ"
          />
          <AjudaStat
            value={String(guiaGlossarioCategories.length)}
            label="áreas no glossário"
          />
        </dl>

        <ul className="mt-10 grid gap-5 lg:grid-cols-2">
          {ajudaResources.map(
            ({
              id,
              eyebrow,
              title,
              description,
              to,
              Icon,
              stat,
              categories,
              highlights,
              highlightsLabel,
              cta,
              cardClassName,
              iconClassName,
              chipClassName,
            }) => (
              <li key={id}>
                <Link
                  to={to}
                  className={cn(
                    'group flex h-full flex-col rounded-3xl border p-7 transition-transform duration-200 hover:-translate-y-0.5 md:p-8',
                    cardClassName,
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        'inline-flex size-12 shrink-0 items-center justify-center rounded-2xl',
                        iconClassName,
                      )}
                    >
                      <Icon size={26} weight="bold" aria-hidden />
                    </span>
                    <span className="rounded-full border border-neutral-500/10 bg-neutral-100/70 px-3 py-1 text-[0.65rem] font-bold tracking-[0.12em] text-neutral-500 uppercase">
                      {stat}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-bold tracking-[0.18em] text-brand-400 uppercase">
                    {eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-neutral-500">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400 md:text-base">
                    {description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <span
                        key={category.id}
                        className={cn(
                          'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] font-bold',
                          chipClassName,
                        )}
                      >
                        <span aria-hidden>{category.emoji}</span>
                        {category.title}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-neutral-500/10 bg-neutral-100/60 p-4">
                    <p className="text-[0.65rem] font-bold tracking-[0.14em] text-neutral-400 uppercase">
                      {highlightsLabel}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm leading-snug text-neutral-500"
                        >
                          <span
                            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-400"
                            aria-hidden
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-black text-brand-500 transition-colors group-hover:text-brand-400">
                    {cta}
                    <ArrowRight
                      size={18}
                      weight="bold"
                      className="transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  )
}
