import { Link } from 'react-router-dom'
import {
  InstitutionalPage,
  Prose,
  SectionTitle,
  TextLink,
} from '@/components/InstitutionalPage'
import { TestimonialsWall } from '@/components/TestimonialsWall'
import { communityMoments } from '@/data/communityMoments'
import {
  communityChannels,
  externalSupport,
  routes,
  superSite,
} from '@/lib/siteLinks'

const timeline = [
  {
    period: '2019',
    title: 'Nasce o VagasUX',
    text: 'Um site de vagas selecionadas em UX — o embrião do hub que conhecemos hoje.',
  },
  {
    period: 'Depois',
    title: 'Mah assume o bastão',
    text: 'Marianna Piacesi integra o Guia do Product Designer e Vagas para iniciantes, com foco em acesso e acolhimento.',
  },
  {
    period: 'Comunidade',
    title: 'De projeto a movimento',
    text: 'Voluntários, escolas parceiras, seletivas, lives e canais ativos passam a sustentar a iniciativa no dia a dia.',
  },
  {
    period: 'Hoje',
    title: 'Hub de oportunidades e pessoas',
    text: 'Curadoria de vagas, conteúdos e uma rede engajada pra quem está começando, migrando ou evoluindo em design.',
  },
] as const

const impactStats = [
  { value: '+40 mil', label: 'pessoas engajadas' },
  { value: '+20', label: 'lives realizadas' },
  { value: '+61', label: 'seletivas realizadas' },
  { value: '+230', label: 'bolsas distribuídas' },
  { value: '+30', label: 'iniciantes contratados com apoio da iniciativa' },
] as const

const joinChannels = [
  {
    network: 'WhatsApp',
    items: [
      {
        label: 'Canal de avisos',
        href: communityChannels.whatsappAvisos,
        note: 'Transmissões e novidades',
      },
      {
        label: 'Avisos da moderação',
        href: communityChannels.whatsappModeracao,
        note: 'Comunicados do time',
      },
      {
        label: 'Grupo #1 VagasUX',
        href: communityChannels.whatsappGrupo1,
        note: 'Conversas da comunidade',
      },
      {
        label: 'Grupo #2 VagasUX',
        href: communityChannels.whatsappGrupo2,
        note: 'Mais um espaço de conversa',
      },
      {
        label: 'Damas da VagasUX',
        href: communityChannels.whatsappDamas,
        note: 'Espaço dedicado',
      },
    ],
  },
  {
    network: 'Telegram',
    items: [
      {
        label: 'Canal VagasUX',
        href: communityChannels.telegramCanal,
        note: 'Avisos e atualizações',
      },
      {
        label: 'VagasUX & Guia do Product Designer',
        href: communityChannels.telegramConversas,
        note: 'Conversas sobre o Guia',
      },
    ],
  },
  {
    network: 'Discord',
    items: [
      {
        label: 'Servidor VagasUX',
        href: communityChannels.discord,
        note: 'Bate-papo, voz e canais temáticos',
      },
    ],
  },
] as const

export function AComunidadePage() {
  return (
    <InstitutionalPage
      title="A comunidade que nasceu pra abrir caminhos em UX"
      lead="Curadoria de vagas, conteúdos e uma rede voluntária — com foco em quem está começando ou migrando pra área."
    >
      <div className="space-y-4">
        <SectionTitle>Nossa história</SectionTitle>
        <Prose>
          <p>
            A VagasUX é um hub de iniciativas acessíveis em UX e design: vagas,
            materiais pra estudar e pessoas pra trocar dúvidas e experiências.
            Idealizada por{' '}
            <TextLink href={externalSupport.mah}>
              Marianna Piacesi (Mah)
            </TextLink>
            , a comunidade cresceu com voluntários que acreditam que
            oportunidades devem ser acessíveis pra todas as pessoas.
          </p>
        </Prose>
        <ol className="mt-2 space-y-6 border-l border-brand-200 pl-5 md:pl-6">
          {timeline.map((item) => (
            <li key={item.period} className="relative">
              <span
                aria-hidden
                className="absolute top-1.5 -left-[1.45rem] size-2.5 rounded-full bg-brand-300"
              />
              <p className="text-xs font-bold tracking-wide text-brand-400 uppercase">
                {item.period}
              </p>
              <h3 className="mt-1 text-lg font-black text-neutral-500">
                {item.title}
              </h3>
              <p className="mt-1 text-base leading-relaxed text-neutral-400">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
        <Prose>
          <p>
            No caminho, vieram o{' '}
            <TextLink href={superSite.guia}>Guia do Product Designer</TextLink> e{' '}
            <TextLink href={superSite.iniciantes}>
              Vagas para iniciantes
            </TextLink>
            — sempre com a ideia de tornar o mercado menos elitista e o
            conhecimento mais organizado.
          </p>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Momentos da comunidade</SectionTitle>
        <p className="text-base leading-relaxed text-neutral-400 md:text-[17px]">
          Encontros, lives e o dia a dia de quem constrói a VagasUX. Quando você
          indicar as fotos, a gente encaixa aqui.
        </p>
        <ul className="grid gap-4 sm:grid-cols-3">
          {communityMoments.map((moment) => (
            <li key={moment.id} className="space-y-2">
              {moment.src ? (
                <img
                  src={moment.src}
                  alt={moment.alt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div
                  aria-hidden
                  className="flex aspect-[4/3] w-full items-end bg-gradient-to-br from-brand-100 via-neutral-100 to-complementary-100 p-3"
                >
                  <span className="text-xs font-semibold tracking-wide text-brand-400/80 uppercase">
                    Foto em breve
                  </span>
                </div>
              )}
              <p className="text-sm font-semibold text-neutral-500">
                {moment.caption}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-5">
        <SectionTitle>Nosso impacto</SectionTitle>
        <p className="text-base leading-relaxed text-neutral-400 md:text-[17px]">
          Um retrato aproximado do que a comunidade já construiu até aqui.
        </p>
        <ul className="grid gap-6 sm:grid-cols-2">
          {impactStats.map((stat) => (
            <li key={stat.label}>
              <p className="text-3xl font-black tracking-tight text-brand-500 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm leading-snug text-neutral-400 md:text-base">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <SectionTitle>O que a comunidade diz</SectionTitle>
        <p className="text-base leading-relaxed text-neutral-400 md:text-[17px]">
          Relatos curtos de quem faz parte da VagasUX.
        </p>
        <TestimonialsWall />
        <p className="text-sm text-neutral-400">
          <TextLink href="https://testimonial.to/pt/vagasux/all">
            Ver todos os relatos
          </TextLink>
          {' · '}
          <TextLink href="https://testimonial.to/vagasux">
            Deixar o seu
          </TextLink>
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <SectionTitle>Como fazer parte</SectionTitle>
          <Prose>
            <p>
              Entre pelos canais oficiais, leia o{' '}
              <TextLink href={routes.codigoDeConduta} external={false}>
                código de conduta
              </TextLink>{' '}
              e participe com respeito. Quer ajudar como voluntária ou
              voluntário? Conheça{' '}
              <TextLink href={routes.quemOrganiza} external={false}>
                quem organiza
              </TextLink>
              .
            </p>
          </Prose>
        </div>

        {joinChannels.map((group) => (
          <div key={group.network} className="space-y-3">
            <h3 className="text-sm font-bold tracking-wide text-neutral-500 uppercase">
              {group.network}
            </h3>
            <ul className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
              {group.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-0.5 py-3.5 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="font-bold text-brand-500 underline decoration-brand-200 underline-offset-4 group-hover:text-brand-400 group-hover:decoration-brand-300">
                      {item.label}
                    </span>
                    <span className="text-sm text-neutral-400 sm:text-right">
                      {item.note}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Prose>
        <p>
          Quer apoiar o projeto ou conhecer parcerias? Veja{' '}
          <Link
            to={routes.apoie}
            className="font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4 hover:text-brand-400"
          >
            Apoie a iniciativa
          </Link>{' '}
          e{' '}
          <Link
            to={routes.parcerias}
            className="font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4 hover:text-brand-400"
          >
            Parcerias
          </Link>
          .
        </p>
      </Prose>
    </InstitutionalPage>
  )
}
