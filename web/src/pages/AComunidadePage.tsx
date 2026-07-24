import { Link } from 'react-router-dom'
import {
  InstitutionalPage,
  Prose,
  SectionTitle,
  TextLink,
} from '@/components/InstitutionalPage'
import {
  communityChannels,
  externalSupport,
  routes,
  superSite,
} from '@/lib/siteLinks'

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
        note: 'Transmissões e novidades da comunidade',
      },
      {
        label: 'Avisos da moderação',
        href: communityChannels.whatsappModeracao,
        note: 'Comunicados oficiais do time',
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
        note: 'Conversas sobre o Guia e a iniciativa',
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
      title="A comunidade"
      lead="Uma rede voluntária que reúne vagas, conteúdos e pessoas de design — com foco em quem está começando ou migrando pra área."
    >
      <div className="space-y-4">
        <SectionTitle>O que é a VagasUX</SectionTitle>
        <Prose>
          <p>
            A VagasUX é um hub de iniciativas acessíveis em UX e design:
            curadoria de oportunidades, materiais pra estudar e uma comunidade
            engajada pra trocar dúvidas, experiências e portas abertas.
          </p>
          <p>
            O projeto nasceu em 2019 como um site de vagas selecionadas. Depois,
            a{' '}
            <TextLink href={externalSupport.mah}>Marianna Piacesi (Mah)</TextLink>{' '}
            assumiu o bastão e integrou o{' '}
            <TextLink href={superSite.guia}>Guia do Product Designer</TextLink>,{' '}
            <TextLink href={superSite.iniciantes}>
              Vagas para iniciantes
            </TextLink>{' '}
            e outras frentes — sempre com a ideia de tornar o mercado menos
            elitista e o conhecimento mais organizado.
          </p>
          <p>
            Hoje somos uma comunidade construída por voluntários, com escolas
            parceiras, eventos, seletivas e descontos pra quem quer continuar
            aprendendo.
          </p>
        </Prose>
      </div>

      <div className="space-y-5">
        <SectionTitle>Nosso impacto</SectionTitle>
        <p className="text-base leading-relaxed text-neutral-400 md:text-[17px]">
          Números aproximados da jornada até aqui — um retrato do alcance e do
          apoio que a comunidade já conseguiu gerar.
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

      <div className="space-y-6">
        <div className="space-y-3">
          <SectionTitle>Como fazer parte</SectionTitle>
          <Prose>
            <p>
              Entre pelos canais oficiais, leia o{' '}
              <TextLink href={routes.codigoDeConduta} external={false}>
                código de conduta
              </TextLink>{' '}
              e participe com respeito. Se quiser contribuir como voluntária ou
              voluntário, conheça{' '}
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
          Quer apoiar o projeto financeiramente ou conhecer parcerias? Veja{' '}
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
