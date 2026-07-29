import {
  Gift,
  GraduationCap,
  Handshake,
  Heart,
  Medal,
  Sparkle,
  UsersThree,
  VideoCamera,
} from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Marquee } from '@/components/Marquee'
import { ParceriasHero } from '@/components/ParceriasHero'
import { partners } from '@/data/partners'
import { contact, mediaKit } from '@/lib/siteLinks'

const marqueeItems = [
  'Aberta e inclusiva',
  'Colaborativa',
  'Humana',
  'Descontos',
  'Conteúdos',
  'Bolsas',
  'Seletivas',
  'Impacto coletivo',
]

const values = [
  {
    emoji: '🙋🏻‍♀️',
    title: 'Aberta e inclusiva',
    description: 'Nosso lema é tamo juntos — todos são bem-vindos.',
  },
  {
    emoji: '💪',
    title: 'Colaborativa',
    description: 'Feedbacks são nosso ponto de partida.',
  },
  {
    emoji: '💜',
    title: 'Humana',
    description: 'Conexão e troca real entre a comunidade.',
  },
] as const

const purposeBullets = [
  'Garantir conteúdos acessíveis para todos',
  'Conectar pessoas e criar pontes',
  'Incentivar o perfil júnior na área',
  'Promover mais oportunidades',
] as const

type SupportTier = {
  medal: string
  title: string
  subtitle: string
  perks: string[]
  Icon: Icon
  accent: 'bronze' | 'silver' | 'gold'
}

const supportTiers: SupportTier[] = [
  {
    medal: '🥉',
    title: 'Descontos',
    subtitle: 'Exclusivos para a comunidade',
    perks: [
      'Desconto fixo para vaguiners',
      'Entre 10% e 50% de benefício',
      'Destaque na área de Cursos',
    ],
    Icon: Gift,
    accent: 'bronze',
  },
  {
    medal: '🥈',
    title: 'Conteúdos',
    subtitle: 'Aulas abertas, eventos e compartilhamento',
    perks: [
      'Aula aberta exclusiva',
      'Lives no Insta e YouTube',
      'Conteúdos acessíveis',
      'Destaque na área de Cursos',
    ],
    Icon: VideoCamera,
    accent: 'silver',
  },
  {
    medal: '🥇',
    title: 'Bolsas',
    subtitle: 'Seletivas recorrentes para vaguiners',
    perks: [
      'Mensais ou pontuais',
      'Quantidade à combinar',
      'Destaque na área de Cursos',
    ],
    Icon: GraduationCap,
    accent: 'gold',
  },
]

const tierStyles = {
  bronze: {
    card: 'border-neutral-500/10 bg-gradient-to-b from-neutral-100 to-brand-100/40',
    icon: 'bg-neutral-500/10 text-neutral-500',
  },
  silver: {
    card: 'border-brand-200/50 bg-gradient-to-b from-brand-100/80 to-neutral-100',
    icon: 'bg-brand-500 text-neutral-100',
  },
  gold: {
    card: 'border-complementary-300/60 bg-gradient-to-b from-complementary-100 via-complementary-100/90 to-brand-100/30 shadow-[0_24px_60px_-28px_rgb(7_0_58_/_0.3)] ring-1 ring-complementary-300/35',
    icon: 'bg-complementary-300 text-neutral-500',
  },
} as const

const partnerQuotes = [
  {
    quote:
      'A comunidade VagasUX desempenha um papel fundamental no desenvolvimento de carreira de profissionais e estamos muito felizes com essa parceria. Desde o início já formamos, juntos, mais de 100 alunos. VagasUX é um canal que nos aproxima das necessidades dos nossos alunos.',
    name: 'Minas',
    role: 'Cofundador · How Bootcamps',
  },
  {
    quote:
      'A VagasUX é uma iniciativa necessária e positiva para uma área em ascensão. Seu diferencial é trazer luz aos anseios de uma nova geração ao conectar-se com a comunidade — e estamos muito felizes de contribuir com essa história.',
    name: 'Luiz Resende',
    role: 'Fundador · UXCO',
  },
] as const

const impactStats = [
  { value: '+40.000', label: 'Pessoas engajadas' },
  { value: '+20', label: 'Lives realizadas' },
  { value: '+61', label: 'Seletivas realizadas' },
  { value: '+230', label: 'Bolsas distribuídas' },
  { value: '+30', label: 'Iniciantes contratados' },
] as const

function PartnerLogoCard({
  name,
  logo,
  index,
}: {
  name: string
  logo: string
  index: number
}) {
  return (
    <article
      className="parcerias-logo-card group flex flex-col items-center justify-center rounded-2xl border border-neutral-500/10 bg-neutral-100 p-4 shadow-[0_12px_36px_-28px_rgb(7_0_58_/_0.35)]"
      style={{ animationDelay: `${60 + (index % 12) * 40}ms` }}
    >
      <div className="flex h-16 w-full items-center justify-center md:h-[4.5rem]">
        {logo ? (
          <img
            src={logo}
            alt={name}
            className="max-h-full max-w-[85%] object-contain opacity-85 transition-all duration-300 group-hover:scale-[1.04] group-hover:opacity-100"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="text-center text-xs font-bold text-neutral-400">
            {name}
          </span>
        )}
      </div>
      <p className="mt-3 line-clamp-2 text-center text-[0.7rem] font-bold leading-snug text-neutral-500">
        {name}
      </p>
    </article>
  )
}

export function ParceriasPage() {
  return (
    <main>
      <ParceriasHero />

      <Marquee items={marqueeItems} />

      <section className="px-5 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mural-fade grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-3xl border border-neutral-500/10 bg-neutral-100 p-6"
              >
                <span className="text-3xl" aria-hidden>
                  {value.emoji}
                </span>
                <h2 className="mt-4 text-lg font-black tracking-[-0.02em] text-neutral-500">
                  {value.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-500/10 bg-gradient-to-r from-brand-100/50 via-neutral-100 to-complementary-100/40 px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="mural-fade">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Nosso propósito
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
              Um hub de oportunidades para{' '}
              <span className="text-mark">todos os níveis</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">
              Promovemos curadoria de vagas e conteúdos em UX para todos os
              níveis — todos mesmo. Somos uma comunidade de design que funciona
              como um hub de iniciativas acessíveis para quem está começando na
              área.
            </p>
          </div>

          <ul className="mural-fade mural-fade-delay-1 space-y-3">
            {purposeBullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-neutral-500/10 bg-neutral-100/90 px-5 py-4 text-sm font-semibold text-neutral-500"
              >
                <Sparkle
                  size={18}
                  weight="fill"
                  className="mt-0.5 shrink-0 text-brand-400"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="parceiros"
        className="scroll-mt-24 px-5 py-20 md:px-6 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mural-fade max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Parceiros oficiais
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
              Quem caminha junto com a gente
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">
              Um agradecimento especial a todos os parceiros que nos apoiam até
              aqui — escolas, eventos, empresas e profissionais que acreditam no
              nosso impacto.
            </p>
          </div>

          <div className="parcerias-logo-wall mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {partners.map((partner, index) => (
              <PartnerLogoCard
                key={partner.slug}
                name={partner.name}
                logo={partner.logo}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="como-apoiar"
        className="scroll-mt-24 border-t border-neutral-500/10 bg-neutral-500 px-5 py-20 text-neutral-100 md:px-6 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mural-fade max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] text-complementary-300 uppercase">
              Como apoiar
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-5xl">
              Três formas de construir essa ponte
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-300 md:text-lg">
              Cada parceria é desenhada junto — do desconto pontual à bolsa
              recorrente. Escolha o formato que faz sentido para a sua
              iniciativa.
            </p>
          </div>

          <div className="mural-fade mural-fade-delay-1 mt-12 grid gap-5 lg:grid-cols-3">
            {supportTiers.map((tier) => {
              const styles = tierStyles[tier.accent]
              const TierIcon = tier.Icon

              return (
                <article
                  key={tier.title}
                  className={`parcerias-tier-card flex h-full flex-col rounded-3xl border p-6 md:p-7 ${styles.card}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`inline-flex size-11 items-center justify-center rounded-2xl ${styles.icon}`}
                    >
                      <TierIcon size={22} weight="bold" aria-hidden />
                    </span>
                    <span className="text-2xl" aria-hidden>
                      {tier.medal}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-black tracking-[-0.03em] text-neutral-500">
                    {tier.title}
                  </h3>
                  <p className="mt-2 text-sm font-bold text-neutral-400">
                    {tier.subtitle}
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5 border-t border-neutral-500/10 pt-5 text-sm text-neutral-400">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex gap-2.5">
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-300"
                          aria-hidden
                        />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mural-fade max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Depoimentos
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
              O que dizem nossos parceiros
            </h2>
          </div>

          <div className="mural-fade mural-fade-delay-1 mt-10 grid gap-5 lg:grid-cols-2">
            {partnerQuotes.map((item) => (
              <blockquote
                key={item.name}
                className="relative rounded-3xl border border-neutral-500/10 bg-gradient-to-br from-brand-100/60 to-neutral-100 p-7 md:p-8"
              >
                <Medal
                  size={28}
                  weight="fill"
                  className="text-complementary-400"
                  aria-hidden
                />
                <p className="mt-5 text-base leading-relaxed text-neutral-500 md:text-lg">
                  “{item.quote}”
                </p>
                <footer className="mt-6 border-t border-neutral-500/10 pt-5">
                  <cite className="not-italic">
                    <span className="block text-sm font-black text-neutral-500">
                      {item.name}
                    </span>
                    <span className="mt-1 block text-xs font-bold text-neutral-400">
                      {item.role}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-500/10 bg-gradient-to-b from-brand-100/40 to-neutral-100 px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mural-fade text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Impacto
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
              Um pouquinho de como fazemos a diferença
            </h2>
          </div>

          <dl className="mural-fade mural-fade-delay-1 mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-neutral-500/10 bg-neutral-100 px-4 py-5 text-center"
              >
                <dt className="text-2xl font-black tracking-tight text-brand-500 md:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-[0.65rem] font-bold tracking-[0.1em] text-neutral-400 uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="relative overflow-hidden bg-neutral-500 px-5 py-20 text-neutral-100 md:px-6 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_right,rgba(93,107,246,0.28),transparent_55%)]" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="mural-fade inline-flex size-14 items-center justify-center rounded-2xl bg-complementary-300 text-2xl text-neutral-500">
            ☂️
          </span>
          <p className="mural-fade mural-fade-delay-1 mt-6 text-xs font-bold tracking-[0.2em] text-complementary-300 uppercase">
            Seja um parceiro
          </p>
          <h2 className="mural-fade mural-fade-delay-1 mt-4 text-3xl font-black tracking-[-0.04em] md:text-5xl">
            Vamos construir impacto juntos?
          </h2>
          <p className="mural-fade mural-fade-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
            Tem alguma ideia de parceria? Conte pra gente como gostaria de
            apoiar a comunidade — respondemos com calma e alinhamos o formato
            ideal para a sua iniciativa.
          </p>
          <div className="mural-fade mural-fade-delay-3 mt-10 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-complementary-300 px-7 text-base font-black text-neutral-500 hover:bg-complementary-200"
            >
              <a href={`mailto:${contact.email}?subject=Parceria%20VagasUX`}>
                <Handshake size={18} weight="bold" className="mr-1.5" aria-hidden />
                Entrar em contato
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border-white/20 bg-white/5 px-7 text-base font-bold text-neutral-100 hover:bg-white/10 hover:text-neutral-100"
            >
              <a
                href={mediaKit.parcerias}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart size={18} weight="bold" className="mr-1.5" aria-hidden />
                Ver mídia kit
              </a>
            </Button>
          </div>
          <p className="mural-fade mural-fade-delay-3 mt-6 flex items-center justify-center gap-2 text-sm text-neutral-400">
            <UsersThree size={18} weight="bold" aria-hidden />
            {partners.length} parceiros ativos hoje
          </p>
        </div>
      </section>
    </main>
  )
}
