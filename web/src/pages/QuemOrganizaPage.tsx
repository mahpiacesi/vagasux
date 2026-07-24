import { Link } from 'react-router-dom'
import {
  InstitutionalPage,
  Prose,
  SectionTitle,
  TextLink,
} from '@/components/InstitutionalPage'
import { volunteers } from '@/data/volunteers'
import { routes } from '@/lib/siteLinks'

export function QuemOrganizaPage() {
  return (
    <InstitutionalPage
      title="Quem organiza"
      lead="Profissionais voluntários que tiram um tempinho toda semana pra compilar conteúdos, trazer vagas e planejar iniciativas."
    >
      <Prose>
        <p>
          Recomendamos conhecer a trajetória de cada pessoa — tem muita
          curiosidade boa nesse time. Quer apoiar o trabalho coletivo?{' '}
          <Link
            to={routes.apoie}
            className="font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4 hover:text-brand-400"
          >
            Apoie a iniciativa
          </Link>
          .
        </p>
      </Prose>

      <div className="space-y-4">
        <SectionTitle>Time voluntário</SectionTitle>
        <ul className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
          {volunteers.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <p className="font-bold text-neutral-500">{person.name}</p>
              <p className="text-sm text-neutral-400 sm:text-right">
                {person.roles.join(' · ')}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <Prose>
        <p>
          Também vale ler o{' '}
          <TextLink href={routes.codigoDeConduta} external={false}>
            código de conduta
          </TextLink>{' '}
          e a página da{' '}
          <Link
            to={routes.comunidade}
            className="font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4 hover:text-brand-400"
          >
            comunidade
          </Link>
          .
        </p>
      </Prose>
    </InstitutionalPage>
  )
}
