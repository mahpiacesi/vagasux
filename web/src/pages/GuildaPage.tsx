import { ArrowUpRight, CaretDown } from '@phosphor-icons/react'
import { useState, type ReactNode } from 'react'
import { GuildaClosingSection } from '@/components/guilda/GuildaClosingSection'
import { GuildaTestimonials } from '@/components/guilda/GuildaTestimonials'
import { ScrollReveal } from '@/components/guilda/ScrollReveal'
import { GuildaHero } from '@/components/GuildaHero'
import { Button } from '@/components/ui/button'
import {
  guildaBenefits,
  guildaFaq,
  guildaHighlights,
  guildaJoinUrl,
  guildaPainPoints,
  guildaPlans,
  guildaTestimonials,
  guildaWhatsappFeature,
} from '@/data/guilda'
import { useActiveSection } from '@/hooks/useActiveSection'
import { guildaHashes } from '@/lib/siteLinks'
import { cn } from '@/lib/utils'

const guildaNav = [
  { label: 'Benefícios', hash: guildaHashes.beneficios },
  { label: 'Como funciona', hash: guildaHashes.comoFunciona },
  { label: 'Depoimentos', hash: guildaHashes.depoimentos },
  { label: 'Planos', hash: guildaHashes.planos },
  { label: 'FAQ', hash: guildaHashes.faq },
] as const

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
      {children}
    </p>
  )
}

function SectionIntro({
  eyebrow,
  title,
  description,
  sticky = true,
}: {
  eyebrow: string
  title: ReactNode
  description: string
  sticky?: boolean
}) {
  return (
    <ScrollReveal
      className={cn(
        'max-w-xl',
        sticky && 'lg:sticky lg:top-28 lg:self-start',
      )}
    >
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className="mt-4 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">
        {description}
      </p>
    </ScrollReveal>
  )
}

function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string
  answer: string
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-neutral-500/10 last:border-b-0">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className="text-base font-bold text-neutral-500 md:text-lg">
          {question}
        </span>
        <CaretDown
          size={18}
          weight="bold"
          className={cn(
            'mt-1 shrink-0 text-brand-400 transition-transform duration-300',
            open && 'rotate-180',
          )}
          aria-hidden
        />
      </button>
      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-neutral-400 md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function GuildaPage() {
  const activeSection = useActiveSection(guildaNav.map((item) => item.hash))

  return (
    <main className="guilda-page">
      <GuildaHero />

      <nav
        aria-label="Seções da Guilda"
        className="sticky top-0 z-40 border-b border-neutral-500/10 bg-neutral-100/90 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5 py-2.5 md:justify-center md:px-6">
          {guildaNav.map((item) => (
            <a
              key={item.hash}
              href={`#${item.hash}`}
              className={cn(
                'shrink-0 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide transition-all duration-300 md:text-sm',
                activeSection === item.hash
                  ? 'bg-brand-500 text-neutral-100 shadow-md shadow-brand-500/20'
                  : 'text-neutral-400 hover:bg-brand-100/80 hover:text-brand-500',
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-16">
          <SectionIntro
            eyebrow="O grande problema"
            title={
              <>
                Migrar para UX{' '}
                <span className="text-mark">não deveria ser confuso</span>
              </>
            }
            description="Você se perde tentando aprender tudo ao mesmo tempo, sem apoio, sem direção e sem saber por onde começar."
          />

          <ul className="space-y-4">
            {guildaPainPoints.map((item, index) => (
              <ScrollReveal key={item.title} as="li" delayMs={index * 90}>
                <article className="group flex gap-5 rounded-2xl border border-neutral-500/10 bg-neutral-100 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_24px_60px_-36px_rgb(7_0_58_/_0.35)] md:p-7">
                  <span
                    className="guilda-stat-index shrink-0 select-none"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-black tracking-tight text-neutral-500">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-400 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      <section
        id={guildaHashes.beneficios}
        className="guilda-bevel scroll-mt-28 border-t border-neutral-500/10 bg-gradient-to-b from-brand-100/50 to-neutral-100 px-5 py-16 md:px-6 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <SectionIntro
            eyebrow="Benefícios"
            title={
              <>
                Tudo para migrar com{' '}
                <span className="text-mark">confiança</span>
              </>
            }
            description="Da curadoria de conteúdo à troca com mentores, apoio de verdade para construir sua carreira em UX."
          />

          <ul className="space-y-5">
            {guildaBenefits.map((item, index) => (
              <ScrollReveal key={item.title} as="li" delayMs={index * 70}>
                <article
                  className={cn(
                    'guilda-benefit-row group flex flex-col gap-5 rounded-3xl border border-neutral-500/10 bg-neutral-100/90 p-6 md:flex-row md:items-center md:p-7',
                    index % 2 === 1 && 'md:flex-row-reverse',
                  )}
                >
                  <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-500 transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-500 group-hover:text-neutral-100 md:size-16">
                    <item.Icon size={26} weight="bold" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-black tracking-tight text-neutral-500">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-400 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      <section
        id={guildaHashes.comoFunciona}
        className="scroll-mt-28 px-5 py-16 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="max-w-2xl">
            <SectionEyebrow>Como funciona</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
              Conexão, prática e ritmo na mesma jornada
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
            <ScrollReveal
              as="article"
              className="relative overflow-hidden rounded-3xl bg-neutral-500 p-8 text-neutral-100 lg:col-span-7 lg:row-span-2 lg:p-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(246,209,110,0.18),transparent_45%)]" />
              <div className="relative">
                <SectionEyebrow>
                  <span className="text-complementary-300">Conexão</span>
                </SectionEyebrow>
                <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-4xl">
                  {guildaWhatsappFeature.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-300">
                  {guildaWhatsappFeature.description}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-8 h-12 rounded-xl bg-complementary-300 px-7 font-black text-neutral-500 hover:bg-complementary-200"
                >
                  <a
                    href={guildaJoinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <guildaWhatsappFeature.Icon
                      size={20}
                      weight="fill"
                      className="mr-2"
                      aria-hidden
                    />
                    Tenha acesso ao grupo
                  </a>
                </Button>
              </div>
            </ScrollReveal>

            {guildaHighlights.map((item, index) => (
              <ScrollReveal
                key={item.title}
                as="article"
                delayMs={120 + index * 100}
                className={cn(
                  'flex flex-col justify-center rounded-3xl border border-neutral-500/10 bg-neutral-100 p-8 md:p-9',
                  index === 0 ? 'lg:col-span-5' : 'lg:col-span-5 lg:col-start-8',
                )}
              >
                <p className="text-xs font-bold tracking-[0.18em] text-brand-400 uppercase">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-neutral-500">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400 md:text-base">
                  {item.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-500/10 bg-gradient-to-r from-brand-500 to-brand-400 px-5 py-14 text-neutral-100 md:px-6 md:py-16">
        <ScrollReveal className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-black tracking-[-0.03em] md:text-3xl">
              Faça parte com a gente
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-200">
              Acesso antecipado a novidades, cocriação de projetos e voz nas
              decisões que moldam a comunidade.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="h-12 shrink-0 rounded-xl bg-complementary-300 px-8 font-black text-neutral-500 hover:bg-complementary-200"
          >
            <a href={guildaJoinUrl} target="_blank" rel="noopener noreferrer">
              Vem pra Guilda
              <ArrowUpRight className="ml-1 size-4" aria-hidden />
            </a>
          </Button>
        </ScrollReveal>
      </section>

      <section
        id={guildaHashes.depoimentos}
        className="guilda-bevel scroll-mt-28 bg-gradient-to-b from-complementary-100/50 to-neutral-100 px-5 py-16 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            sticky={false}
            eyebrow="Relatos de vaguiners"
            title={
              <>
                Histórias reais de quem encontrou{' '}
                <span className="text-mark">apoio na Guilda</span>
              </>
            }
            description="Gente como você, migrando, estudando e dando os primeiros passos com mais segurança no mercado de UX."
          />

          <GuildaTestimonials items={guildaTestimonials} />
        </div>
      </section>

      <section
        id={guildaHashes.planos}
        className="scroll-mt-28 border-t border-neutral-500/10 px-5 py-16 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
            <SectionIntro
              eyebrow="Valores"
              title="Apoie a comunidade e entre na Guilda"
              description="A partir de R$ 19,90 por mês, com conteúdos exclusivos, mentorias e grupo fechado no WhatsApp."
            />

            <ul className="flex flex-col gap-5">
              {guildaPlans.map((plan, index) => (
                <ScrollReveal key={plan.id} as="li" delayMs={index * 100}>
                  <article
                    className={cn(
                      'flex h-full flex-col rounded-3xl border p-7 transition-transform duration-300 hover:-translate-y-1 md:p-8',
                      plan.featured
                        ? 'border-complementary-300/70 bg-gradient-to-b from-complementary-100 via-neutral-100 to-brand-100/30 shadow-[0_28px_70px_-32px_rgb(7_0_58_/_0.4)] ring-1 ring-complementary-300/40'
                        : 'border-neutral-500/10 bg-neutral-100',
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-black tracking-tight text-neutral-500">
                          {plan.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                          {plan.hook}
                        </p>
                      </div>
                      {plan.badge ? (
                        <span className="shrink-0 rounded-full bg-neutral-500 px-2.5 py-1 text-[0.65rem] font-bold tracking-wide text-complementary-300 uppercase">
                          {plan.badge}
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-8 flex items-baseline gap-1">
                      <span className="text-4xl font-black tracking-tight text-neutral-500">
                        {plan.price}
                      </span>
                      <span className="text-sm font-semibold text-neutral-400">
                        {plan.period}
                      </span>
                    </p>

                    <p className="mt-6 text-xs font-bold tracking-[0.16em] text-neutral-400 uppercase">
                      Inclui
                    </p>
                    <ul className="mt-3 flex-1 space-y-2.5 text-sm text-neutral-400">
                      {plan.perks.map((perk) => (
                        <li key={perk} className="flex gap-2.5">
                          <span
                            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-300"
                            aria-hidden
                          />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      size="lg"
                      className={cn(
                        'mt-8 h-11 w-full rounded-xl font-bold',
                        plan.featured &&
                          'bg-complementary-300 text-neutral-500 hover:bg-complementary-200',
                      )}
                    >
                      <a
                        href={guildaJoinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Acesse agora
                      </a>
                    </Button>
                  </article>
                </ScrollReveal>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-center text-sm text-neutral-400">
            Pagamento e gestão de assinatura via{' '}
            <a
              href={guildaJoinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4"
            >
              Nas.io
            </a>
            .
          </p>
        </div>
      </section>

      <section
        id={guildaHashes.faq}
        className="guilda-bevel scroll-mt-28 border-t border-neutral-500/10 bg-brand-100/25 px-5 py-16 md:px-6 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <SectionIntro
            eyebrow="FAQ"
            title="FAQ da guilda"
            description="As perguntas mais comuns que você pode ter antes de começar sua jornada como Vaguiner."
          />

          <ScrollReveal delayMs={100}>
            <div className="rounded-2xl border border-neutral-500/10 bg-neutral-100 px-5 md:px-7">
              {guildaFaq.map((item, index) => (
                <FaqItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  defaultOpen={index === 0}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <GuildaClosingSection />
    </main>
  )
}
