import { ArrowUpRight, CaretDown } from '@phosphor-icons/react'
import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { GuildaHero } from '@/components/GuildaHero'
import { Marquee } from '@/components/Marquee'
import { NewsletterSection } from '@/components/NewsletterSection'
import { Button } from '@/components/ui/button'
import {
  guildaBenefits,
  guildaFaq,
  guildaHighlights,
  guildaJoinUrl,
  guildaMarqueeItems,
  guildaPainPoints,
  guildaPlans,
  guildaTestimonials,
  guildaWhatsappFeature,
  type GuildaTestimonial,
} from '@/data/guilda'
import { guildaHashes, routes } from '@/lib/siteLinks'
import { cn } from '@/lib/utils'

const toneClass: Record<GuildaTestimonial['tone'], string> = {
  cream: 'border border-neutral-500/10 bg-neutral-100 text-neutral-500',
  indigo: 'bg-brand-100 text-brand-500',
  mustard: 'bg-complementary-200 text-neutral-500',
  navy: 'bg-neutral-500 text-neutral-100',
  lilac: 'bg-brand-200/80 text-brand-500',
  soft: 'border border-complementary-300/50 bg-complementary-100 text-neutral-500',
}

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
            'mt-1 shrink-0 text-brand-400 transition-transform',
            open && 'rotate-180',
          )}
          aria-hidden
        />
      </button>
      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-200',
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
  return (
    <main>
      <GuildaHero />

      <Marquee items={[...guildaMarqueeItems]} />

      <nav
        aria-label="Seções da Guilda"
        className="sticky top-0 z-40 border-b border-neutral-500/10 bg-neutral-100/90 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5 py-2.5 md:justify-center md:px-6">
          {guildaNav.map((item) => (
            <a
              key={item.hash}
              href={`#${item.hash}`}
              className="shrink-0 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide text-neutral-400 transition-colors hover:bg-brand-100/80 hover:text-brand-500 md:text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Problem */}
      <section className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionEyebrow>O grande problema</SectionEyebrow>
          <h2 className="mt-4 max-w-3xl text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
            Migrar para UX{' '}
            <span className="text-mark">não deveria ser confuso</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
            Você se perde tentando aprender tudo ao mesmo tempo, sem apoio, sem
            direção e sem saber por onde começar.
          </p>

          <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
            {guildaPainPoints.map((item, index) => (
              <li
                key={item.title}
                className="mural-fade rounded-2xl border border-neutral-500/10 bg-neutral-100 p-6 md:p-7"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="text-xs font-black tracking-[0.2em] text-neutral-300 uppercase">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-lg font-black tracking-tight text-neutral-500">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section
        id={guildaHashes.beneficios}
        className="scroll-mt-28 border-t border-neutral-500/10 bg-gradient-to-b from-brand-100/40 to-neutral-100 px-5 py-16 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Benefícios</SectionEyebrow>
          <h2 className="mt-4 max-w-3xl text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
            Tudo para migrar com{' '}
            <span className="text-mark">confiança</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
            Da curadoria de conteúdo à troca com mentores, apoio de verdade
            para construir sua carreira em UX.
          </p>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {guildaBenefits.map((item, index) => (
              <li
                key={item.title}
                className="mural-fade group rounded-2xl border border-neutral-500/10 bg-neutral-100 p-6 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_20px_50px_-30px_rgb(7_0_58_/_0.35)] md:p-7"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-neutral-100">
                  <item.Icon size={22} weight="bold" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-black tracking-tight text-neutral-500">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WhatsApp + highlights */}
      <section
        id={guildaHashes.comoFunciona}
        className="scroll-mt-28 px-5 py-16 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="relative overflow-hidden rounded-3xl bg-neutral-500 p-8 text-neutral-100 md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(246,209,110,0.18),transparent_45%)]" />
              <div className="relative">
                <SectionEyebrow>
                  <span className="text-complementary-300">Conexão</span>
                </SectionEyebrow>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-4xl">
                  {guildaWhatsappFeature.title}
                </h2>
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
            </article>

            <div className="flex flex-col gap-5">
              {guildaHighlights.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-1 flex-col justify-center rounded-3xl border border-neutral-500/10 bg-neutral-100 p-8 md:p-9"
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
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="border-y border-neutral-500/10 bg-gradient-to-r from-brand-500 to-brand-400 px-5 py-14 text-neutral-100 md:px-6 md:py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
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
        </div>
      </section>

      {/* Testimonials */}
      <section
        id={guildaHashes.depoimentos}
        className="scroll-mt-28 px-5 py-16 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Relatos de vaguiners</SectionEyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl leading-[1.08] font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
            Histórias reais de quem encontrou{' '}
            <span className="text-mark">apoio na Guilda</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-400">
            Gente como você, migrando, estudando e dando os primeiros passos
            com mais segurança no mercado de UX.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guildaTestimonials.map((item, index) => (
              <li
                key={item.id}
                className={cn(
                  'mural-fade flex min-h-[14rem] flex-col justify-between rounded-2xl p-6',
                  toneClass[item.tone],
                )}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <p className="text-sm leading-relaxed md:text-[0.95rem]">
                  “{item.quote}”
                </p>
                <p className="mt-6 text-sm font-black tracking-tight">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section
        id={guildaHashes.planos}
        className="scroll-mt-28 border-t border-neutral-500/10 bg-gradient-to-b from-complementary-100/60 to-neutral-100 px-5 py-16 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>Valores</SectionEyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
            Apoie a comunidade e entre na Guilda
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
            A partir de R$ 19,90 por mês, com conteúdos exclusivos, mentorias e
            grupo fechado no WhatsApp.
          </p>

          <ul className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-stretch">
            {guildaPlans.map((plan, index) => (
              <li
                key={plan.id}
                className={cn(
                  'mural-fade flex flex-col rounded-3xl border p-7 md:p-8',
                  plan.featured
                    ? 'border-complementary-300/70 bg-gradient-to-b from-complementary-100 via-neutral-100 to-brand-100/30 shadow-[0_28px_70px_-32px_rgb(7_0_58_/_0.4)] ring-1 ring-complementary-300/40'
                    : 'border-neutral-500/10 bg-neutral-100',
                )}
                style={{ animationDelay: `${index * 90}ms` }}
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
              </li>
            ))}
          </ul>

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
            . Dúvidas?{' '}
            <Link
              to={routes.comunidade}
              className="font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4"
            >
              Veja a comunidade aberta
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        id={guildaHashes.faq}
        className="scroll-mt-28 px-5 py-16 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400">
            O que muita gente pergunta antes de começar a jornada como
            vaguiner.
          </p>

          <div className="mt-8 rounded-2xl border border-neutral-500/10 bg-neutral-100 px-5 md:px-7">
            {guildaFaq.map((item, index) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  )
}
