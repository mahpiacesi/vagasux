import { Button } from '@/components/ui/button'
import { superSite } from '@/lib/siteLinks'

const reasons = [
  {
    title: 'Descontos',
    description:
      'Condições exclusivas pra comunidade — destaque na área de cursos e acesso mais justo a formação.',
  },
  {
    title: 'Conteúdos',
    description:
      'Aulas abertas, lives e materiais compartilhados que aproximam sua marca de quem está construindo carreira.',
  },
  {
    title: 'Bolsas',
    description:
      'Seletivas recorrentes para vaguiners — impacto real em quem está começando ou migrando pra área.',
  },
] as const

const impact = [
  { value: '+40 mil', label: 'pessoas engajadas' },
  { value: '+61', label: 'seletivas realizadas' },
  { value: '+230', label: 'bolsas distribuídas' },
  { value: '+30', label: 'iniciantes contratados' },
] as const

export function PartnershipsSection() {
  return (
    <section className="border-y border-neutral-500/10 bg-neutral-100 px-5 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl md:max-w-4xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.18em] text-brand-400 uppercase">
              Parcerias
            </p>
            <h2 className="mt-4 text-3xl leading-[1.1] font-black tracking-[-0.03em] text-neutral-500 md:text-5xl">
              Quem constrói oportunidades{' '}
              <span className="text-mark">com a gente</span>.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-neutral-400 md:text-right md:text-[0.95rem]">
            Marcas e iniciativas que acreditam em uma comunidade aberta,
            colaborativa e humana — e ainda tem espaço pra sua também.
          </p>
        </div>

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
          A VagasUX é um hub de curadoria de vagas e conteúdos em UX para todos
          os níveis. Parcerias ajudam a garantir conteúdos acessíveis, conectar
          pessoas e abrir mais portas pra quem está começando.
        </p>

        <ul className="mt-12 grid gap-0 border-t border-neutral-500/15 md:grid-cols-3">
          {reasons.map((item) => (
            <li
              key={item.title}
              className="border-b border-neutral-500/15 py-8 md:border-r md:border-b-0 md:px-6 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <p className="text-xs font-bold tracking-[0.16em] text-complementary-500 uppercase">
                Como apoiar
              </p>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-neutral-500">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400 md:text-[0.95rem]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-8 border-t border-neutral-500/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-black tracking-tight text-brand-500 md:text-4xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-neutral-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <blockquote className="mt-14 max-w-2xl border-l-4 border-complementary-300 pl-5">
          <p className="text-base leading-relaxed text-neutral-500 md:text-lg">
            “A comunidade VagasUX desempenha um papel fundamental no
            desenvolvimento de carreira. Desde o início já formamos, juntos,
            mais de 100 alunos.”
          </p>
          <footer className="mt-4 text-sm font-bold text-neutral-400">
            Minas · Cofundador @ How Bootcamps
          </footer>
        </blockquote>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-neutral-400">
            Confira o mídia kit e os formatos de parceria — ou fale com a gente
            se tiver uma ideia.
          </p>
          <Button
            asChild
            size="lg"
            className="h-12 shrink-0 rounded-xl px-7 text-base font-black"
          >
            <a
              href={superSite.parcerias}
              target="_blank"
              rel="noopener noreferrer"
            >
              Seja um parceiro
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
