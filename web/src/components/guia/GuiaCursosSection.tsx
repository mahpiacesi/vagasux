import { ArrowRight, ChatCircleDots, GraduationCap, Umbrella } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { guiaCursos } from '@/data/guiaCursos'
import { getGuiaCursoStats } from '@/lib/guiaCursoFilters'
import { guiaHashes } from '@/lib/siteLinks'
import { guiaRoutes } from '@/lib/guiaRoutes'

const statItems = [
  {
    key: 'total',
    label: 'cursos',
    icon: GraduationCap,
  },
  {
    key: 'withFeedback',
    label: 'com relatos',
    icon: ChatCircleDots,
  },
  {
    key: 'partners',
    label: 'parceiros',
    icon: Umbrella,
  },
] as const

export function GuiaCursosSection() {
  const stats = getGuiaCursoStats(guiaCursos)

  return (
    <section
      id={guiaHashes.cursos}
      className="border-b border-neutral-500/10 bg-neutral-100 px-5 py-16 md:px-6 md:py-20"
      aria-labelledby="guia-cursos-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Por onde estudar
            </p>
            <h2
              id="guia-cursos-heading"
              className="mt-4 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl"
            >
              Encontrar um curso
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
              Diretório coletivo para comparar formações de UX, UI e produto, com
              relatos de quem já passou por elas.
            </p>

            <div className="mt-8">
              <Button asChild variant="guia">
                <Link to={guiaRoutes.cursos}>
                  Explorar diretório
                  <ArrowRight size={16} weight="bold" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 lg:ml-auto lg:w-fit">
            {statItems.map(({ key, label, icon: Icon }) => (
              <div
                key={key}
                className="rounded-2xl border border-neutral-500/10 bg-brand-100/30 px-4 py-4 text-center"
              >
                <Icon
                  size={24}
                  weight="duotone"
                  className="mx-auto text-brand-400"
                  aria-hidden
                />
                <p className="mt-2 text-2xl font-black text-neutral-500">{stats[key]}</p>
                <p className="text-[0.65rem] font-bold tracking-wide text-neutral-400 uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
