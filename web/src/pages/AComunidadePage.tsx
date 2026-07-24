import { Link } from 'react-router-dom'
import {
  InstitutionalPage,
  Prose,
  SectionTitle,
  TextLink,
} from '@/components/InstitutionalPage'
import { externalSupport, routes, superSite } from '@/lib/siteLinks'

const exploreLinks = [
  { label: 'Seletivas e descontos', href: superSite.seletivas, external: true },
  {
    label: 'Hall dos Contratados',
    href: superSite.hallContratados,
    external: true,
  },
  { label: 'Panorama', href: superSite.panorama, external: true },
  { label: 'Quem organiza', href: routes.quemOrganiza, external: false },
  { label: 'Código de conduta', href: routes.codigoDeConduta, external: false },
  { label: 'Apoie a iniciativa', href: routes.apoie, external: false },
] as const

export function AComunidadePage() {
  return (
    <InstitutionalPage
      title="A comunidade"
      lead="Canais, história e iniciativas da VagasUX — um hub de curadoria, pessoas e projetos em design."
    >
      <div className="space-y-4">
        <SectionTitle>Canais</SectionTitle>
        <Prose>
          <p>
            Participe pelos canais oficiais: avisos no WhatsApp, conversas no
            Telegram e o servidor no Discord. O ponto de partida mais usado pela
            comunidade do Guia é o Telegram.
          </p>
          <p>
            <TextLink href={externalSupport.telegramCanal}>
              Canal / grupo no Telegram
            </TextLink>
          </p>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Explore</SectionTitle>
        <ul className="flex flex-col gap-3">
          {exploreLinks.map((item) => (
            <li key={item.label}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-base font-bold text-brand-500 transition-colors hover:text-brand-400"
                >
                  <span className="underline decoration-brand-200 underline-offset-4">
                    {item.label}
                  </span>
                  <span aria-hidden>→</span>
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="group inline-flex items-center gap-2 text-base font-bold text-brand-500 transition-colors hover:text-brand-400"
                >
                  <span className="underline decoration-brand-200 underline-offset-4">
                    {item.label}
                  </span>
                  <span aria-hidden>→</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <SectionTitle>Sobre a iniciativa</SectionTitle>
        <Prose>
          <p>
            Oie! Sou a{' '}
            <TextLink href={externalSupport.mah}>Marianna Piacesi</TextLink>,
            mas pode me chamar de Mah :)
          </p>
          <p>
            Sempre gostei de participar de comunidades de design. Depois que
            comecei a fazer mentorias com quem estava começando ou migrando pra
            área, veio a ideia de trazer conhecimento de forma acessível e
            organizada.
          </p>
          <p>
            A primeira iniciativa foi o{' '}
            <TextLink href={superSite.guia}>Guia do Product Designer</TextLink>
            , com curadoria de recursos e eventos. A galera curtiu e quis
            participar mais coletivamente — aí viramos comunidade. Depois veio{' '}
            <TextLink href={superSite.iniciantes}>
              Vagas para iniciantes
            </TextLink>
            , pra tornar o mercado de UX menos elitista e discutir a falta real
            de vagas pra júniores.
          </p>
          <p>
            O projeto que você conhece como VagasUX começou em 2019 como um site
            de vagas selecionadas. Depois de um tempo, os criadores passaram o
            bastão e eu topiei o desafio. Hoje as iniciativas estão compiladas
            nele: um hub de projetos, curadorias e pessoas em design.
          </p>
          <p>
            Ao longo do caminho fui trazendo mais gente pra ajudar. Nos
            organizamos todo mês pra trazer ideias novas. Temos escolas
            parceiras e conseguimos eventos, sorteios e descontos pra comunidade
            continuar aprendendo.
          </p>
        </Prose>
      </div>
    </InstitutionalPage>
  )
}
