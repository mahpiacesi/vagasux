import {
  Heart,
  Umbrella,
  UsersThree,
} from '@phosphor-icons/react'
import { CommunityShopSection } from '@/components/CommunityShopSection'
import { Button } from '@/components/ui/button'
import { Marquee } from '@/components/Marquee'
import { superSite } from '@/lib/siteLinks'

const marqueeItems = [
  'Comunidade aberta',
  'Mentorias',
  'Encontros quinzenais',
  'Vagas curadas',
  'Guilda do Vaguiner',
  'WhatsApp',
  'Discord',
  'Telegram',
  'Apoia-se',
  'Vaguiners',
]

const openCommunityLinks = [
  {
    label: 'Canal de transmissão no WhatsApp',
    href: 'https://www.whatsapp.com/channel/0029VaolXJkId7nHWZAPTz0P',
  },
  {
    label: 'Grupo no WhatsApp',
    href: 'https://chat.whatsapp.com/DJwdSS9jmH4FK8iCAH5XG4',
  },
  {
    label: 'Grupo no Telegram',
    href: 'https://t.me/guiadoproductdesigner',
  },
  {
    label: 'Servidor no Discord',
    href: 'https://discord.gg/NmsWUzCmN4',
  },
] as const

const participationPaths = [
  {
    id: 'aberta',
    index: '01',
    eyebrow: 'Gratuito',
    title: 'Comunidade aberta',
    hook: 'Comece por aqui, sem custo.',
    description:
      'Acompanhe vagas, conteúdos e novidades nos nossos canais públicos. É a porta de entrada para conhecer a VagasUX.',
    bullets: [
      'WhatsApp, Telegram e Discord',
      'Newsletter quinzenal gratuita',
      'Curadoria de vagas e conteúdos abertos',
    ],
    Icon: UsersThree,
    tone: 'light' as const,
    cta: { label: 'Entrar nos canais', href: '#canais-abertos', external: false },
  },
  {
    id: 'apoie',
    index: '02',
    eyebrow: 'Apoio voluntário',
    title: 'Apoia-se',
    hook: 'Para quem acredita na comunidade e quer contribuir.',
    description:
      'Apoie a VagasUX com o valor que fizer sentido para você. Sua contribuição ajuda a manter vagas, conteúdos e iniciativas gratuitas no ar.',
    bullets: [
      'Campanha de crowdfunding no Apoia.se',
      'Apoio voluntário, no seu ritmo',
      'Ajuda a sustentar a comunidade aberta',
    ],
    Icon: Heart,
    tone: 'brand' as const,
    cta: { label: 'Apoiar a iniciativa', href: superSite.apoie, external: true },
  },
  {
    id: 'guilda',
    index: '03',
    eyebrow: 'Membro',
    title: 'Guilda do Vaguiner',
    hook: 'A experiência completa, com encontros e mentorias.',
    description:
      'Comunidade exclusiva com encontros quinzenais, grupo fechado no WhatsApp, mentorias em grupo e avulsas com desconto.',
    bullets: [
      'Encontros e mentorias em grupo',
      'Seletivas e descontos para membros',
      'Mini-desafios e muito mais',
    ],
    Icon: Umbrella,
    tone: 'premium' as const,
    featured: true,
    cta: {
      label: 'Conheça a Guilda',
      href: 'https://vagasux.framer.website/',
      external: true,
    },
  },
] as const

const toneStyles = {
  light: {
    card: 'border-neutral-500/10 bg-neutral-100',
    icon: 'bg-brand-100 text-brand-500',
    eyebrow: 'text-brand-400',
  },
  brand: {
    card: 'border-brand-200/60 bg-gradient-to-b from-brand-100/90 to-neutral-100',
    icon: 'bg-brand-500 text-neutral-100',
    eyebrow: 'text-brand-500',
  },
  premium: {
    card: 'border-complementary-300/70 bg-gradient-to-b from-complementary-100 via-complementary-100/80 to-brand-100/40 shadow-[0_24px_60px_-28px_rgb(7_0_58_/_0.35)] ring-1 ring-complementary-300/40',
    icon: 'bg-complementary-300 text-neutral-500',
    eyebrow: 'text-neutral-500',
  },
} as const

function ParticipationCard({
  index,
  eyebrow,
  title,
  hook,
  description,
  bullets,
  Icon: PathIcon,
  tone,
  featured = false,
  cta,
  animationDelay,
}: (typeof participationPaths)[number] & {
  featured?: boolean
  animationDelay: string
}) {
  const styles = toneStyles[tone]

  return (
    <article
      className={`comunidade-card mural-fade flex h-full flex-col rounded-3xl border p-6 md:p-7 ${styles.card} ${
        featured ? 'lg:-mt-2 lg:mb-2' : ''
      }`}
      style={{ animationDelay }}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={`inline-flex size-11 items-center justify-center rounded-2xl ${styles.icon}`}
        >
          <PathIcon size={22} weight="bold" aria-hidden />
        </span>
        <span className="text-xs font-black tracking-[0.2em] text-neutral-300 uppercase">
          {index}
        </span>
      </div>

      {featured ? (
        <div className="mt-4 flex items-center gap-2">
          <p className={`text-xs font-bold tracking-[0.18em] uppercase ${styles.eyebrow}`}>
            {eyebrow}
          </p>
          <span className="inline-flex shrink-0 rounded-full bg-neutral-500 px-2.5 py-0.5 text-[0.65rem] font-bold tracking-[0.14em] text-complementary-300 uppercase">
            EXCLUSIVO
          </span>
        </div>
      ) : (
        <p className={`mt-4 text-xs font-bold tracking-[0.18em] uppercase ${styles.eyebrow}`}>
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-neutral-500">
        {title}
      </h2>
      <p className="mt-3 text-base font-bold leading-snug text-neutral-500">
        {hook}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>

      <ul className="mt-5 space-y-2.5 border-t border-neutral-500/10 pt-5 text-sm leading-relaxed text-neutral-400">
        {bullets.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-300" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        {cta.external ? (
          <Button
            asChild
            size="lg"
            className={`h-11 w-full rounded-xl font-bold ${
              featured
                ? 'bg-complementary-300 text-neutral-500 hover:bg-complementary-200'
                : ''
            }`}
          >
            <a href={cta.href} target="_blank" rel="noopener noreferrer">
              {cta.label}
            </a>
          </Button>
        ) : (
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-11 w-full rounded-xl border-neutral-500/15 font-bold"
          >
            <a href={cta.href}>{cta.label}</a>
          </Button>
        )}
      </div>
    </article>
  )
}

export function ComunidadePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-neutral-500 px-5 pt-20 pb-16 text-neutral-100 md:px-6 md:pt-28 md:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="comunidade-orb absolute -top-24 -left-16 h-80 w-80 rounded-full bg-brand-400/30 blur-3xl" />
          <div className="comunidade-orb comunidade-orb-delay absolute top-16 -right-20 h-96 w-96 rounded-full bg-complementary-300/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <p className="mural-fade text-xs font-bold tracking-[0.22em] text-complementary-300 uppercase md:text-sm">
            Faça parte da VagasUX
          </p>
          <h1 className="mural-fade mural-fade-delay-1 mt-6 max-w-4xl text-[2.6rem] leading-[1.02] font-black tracking-[-0.045em] md:text-6xl lg:text-7xl">
            A maior comunidade de{' '}
            <span className="text-mark-on-dark">UX design</span> do Brasil
          </h1>
          <p className="mural-fade mural-fade-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">
            Seja como membro da comunidade, voluntário ou apoiador, sempre
            existe uma forma de fazer parte.
          </p>
          <div className="mural-fade mural-fade-delay-3 mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-complementary-300 px-7 text-base font-black text-neutral-500 shadow-lg shadow-black/20 hover:bg-complementary-200"
            >
              <a href="#formas-de-participar">Ver formas de participar</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border-white/20 bg-white/5 px-7 text-base font-bold text-neutral-100 hover:bg-white/10 hover:text-neutral-100"
            >
              <a href="#canais-abertos">Comunidade aberta</a>
            </Button>
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      <section className="px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mural-fade text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            Por que existimos
          </p>
          <h2 className="mural-fade mural-fade-delay-1 mx-auto mt-4 max-w-3xl text-3xl leading-[1.08] font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
            Ninguém deveria construir uma carreira sozinho.
          </h2>
          <p className="mural-fade mural-fade-delay-2 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
            A VagasUX nasceu para ampliar o acesso a oportunidades, conhecimento
            e apoio. Conheça as formas de fazer parte dessa comunidade.
          </p>
        </div>
      </section>

      <section
        id="formas-de-participar"
        className="scroll-mt-24 px-5 pb-20 md:px-6 md:pb-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mural-fade mb-10 md:mb-12">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Como participar
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-4xl lg:whitespace-nowrap">
              Escolha o ritmo que faz sentido{' '}
              <span className="whitespace-nowrap">pra você</span>
            </h2>
          </div>

          <div className="grid items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
            {participationPaths.map((path, index) => (
              <ParticipationCard
                key={path.id}
                {...path}
                animationDelay={`${120 + index * 90}ms`}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="canais-abertos"
        className="scroll-mt-24 border-t border-neutral-500/10 bg-gradient-to-b from-brand-100/50 to-neutral-100 px-5 py-20 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mural-fade grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
                Comunidade aberta
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
                Uma rede que acompanha você{' '}
                <span className="text-mark">no dia a dia</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
                Escolha onde prefere receber vagas, conteúdos e novidades. Tudo
                gratuito, sempre.
              </p>
            </div>

            <ul className="mural-fade mural-fade-delay-1 flex flex-col gap-3">
              {openCommunityLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-neutral-500/10 bg-neutral-100 px-5 py-4 text-base font-bold text-neutral-500 shadow-[0_12px_40px_-28px_rgb(7_0_58_/_0.35)] transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-500"
                  >
                    {item.label}
                    <span className="text-brand-300 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="mural-fade mural-fade-delay-2 mt-10 text-sm text-neutral-400">
            Quer saber quem organiza tudo isso?{' '}
            <a
              href={superSite.quemOrganiza}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4"
            >
              Conheça a equipe
            </a>
            .
          </p>
        </div>
      </section>

      <CommunityShopSection />
    </main>
  )
}
