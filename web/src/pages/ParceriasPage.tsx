import { Link } from 'react-router-dom'
import {
  InstitutionalPage,
  Prose,
  SectionTitle,
  TextLink,
} from '@/components/InstitutionalPage'
import { routes, superSite } from '@/lib/siteLinks'

const values = [
  {
    title: 'Aberta e inclusiva',
    text: 'Nosso lema é tamo juntos — e todos são bem-vindos.',
  },
  {
    title: 'Colaborativa',
    text: 'Feedbacks são nosso ponto de partida.',
  },
  {
    title: 'Humana',
    text: 'Queremos conexão e troca de verdade na comunidade.',
  },
] as const

const supportTiers = [
  {
    title: 'Descontos',
    text: 'Condições exclusivas pra comunidade (em geral entre 10% e 50%), com destaque na área de cursos.',
  },
  {
    title: 'Conteúdos',
    text: 'Aulas abertas, lives e materiais compartilhados no Instagram/YouTube.',
  },
  {
    title: 'Bolsas',
    text: 'Seletivas recorrentes ou pontuais pros vaguiners, com quantidade a combinar.',
  },
] as const

export function ParceriasPage() {
  return (
    <InstitutionalPage
      title="Parcerias"
      lead="Conheça quem apoia a VagasUX, nosso propósito e como fazer parte dessa jornada."
    >
      <div className="space-y-4">
        <SectionTitle>Nosso propósito</SectionTitle>
        <Prose>
          <p>
            Promover uma curadoria de vagas e conteúdos em UX para todos os
            níveis, todos mesmo. Somos uma comunidade de design que funciona
            como hub de iniciativas acessíveis pra quem está começando.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Garantir conteúdos acessíveis para todos</li>
            <li>Conectar pessoas e criar pontes</li>
            <li>Incentivar o perfil júnior na área</li>
            <li>Promover mais oportunidades</li>
          </ul>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Como a gente trabalha</SectionTitle>
        <ul className="space-y-5">
          {values.map((item) => (
            <li key={item.title}>
              <p className="font-bold text-neutral-500">{item.title}</p>
              <p className="mt-1 text-neutral-400">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <SectionTitle>Como apoiar</SectionTitle>
        <ul className="space-y-5">
          {supportTiers.map((item) => (
            <li key={item.title}>
              <p className="font-bold text-neutral-500">{item.title}</p>
              <p className="mt-1 text-neutral-400">{item.text}</p>
            </li>
          ))}
        </ul>
        <Prose>
          <p>
            Confira também as{' '}
            <TextLink href={superSite.seletivas}>
              seletivas e descontos
            </TextLink>{' '}
            no site atual, ou{' '}
            <Link
              to={routes.apoie}
              className="font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4 hover:text-brand-400"
            >
              apoie a iniciativa
            </Link>{' '}
            como pessoa da comunidade.
          </p>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>O que dizem nossos parceiros</SectionTitle>
        <blockquote className="space-y-2 border-l-2 border-brand-200 pl-4 text-neutral-400">
          <p>
            “A comunidade VagasUX desempenha um papel fundamental no
            desenvolvimento de carreira de pessoas profissionais e estamos muito
            felizes com essa parceria. Desde o início já formamos, juntos, mais
            de 100 alunos.”
          </p>
          <footer className="text-sm font-semibold text-neutral-500">
            Minas — Cofundador @HowBootcamps
          </footer>
        </blockquote>
        <blockquote className="space-y-2 border-l-2 border-brand-200 pl-4 text-neutral-400">
          <p>
            “A VagasUX é uma iniciativa necessária e positiva para uma área em
            ascensão. Seu diferencial é trazer luz aos anseios de uma nova
            geração ao conectar-se com a comunidade.”
          </p>
          <footer className="text-sm font-semibold text-neutral-500">
            Luiz Resende — Fundador @UXCO
          </footer>
        </blockquote>
      </div>
    </InstitutionalPage>
  )
}
