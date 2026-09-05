import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { guiaTrilhaEntenderOBasicoStages } from '@/data/guiaTrilhaEntenderOBasico'
import { guiaTrilhaFreelancerStages } from '@/data/guiaTrilhaFreelancer'
import { guiaTrilhaPortfolioStages } from '@/data/guiaTrilhaPortfolio'
import { guiaTrilhaPrimeiraVagaStages } from '@/data/guiaTrilhaPrimeiraVaga'
import { guiaTrilhaVoluntariadoStages } from '@/data/guiaTrilhaVoluntariado'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { guiaHashes } from '@/lib/siteLinks'

const trails = {
  'entender-o-basico': { title: 'Entender o básico', stages: guiaTrilhaEntenderOBasicoStages },
  'primeira-vaga': { title: 'Conseguir minha primeira vaga', stages: guiaTrilhaPrimeiraVagaStages },
  portfolio: { title: 'Montar meu portfólio', stages: guiaTrilhaPortfolioStages },
  freelancer: { title: 'Me tornar um designer freelancer', stages: guiaTrilhaFreelancerStages },
  voluntariado: { title: 'Praticar em um voluntariado', stages: guiaTrilhaVoluntariadoStages },
} as const

export function withTrailContext(to: string, itemId: string, trailId = 'entender-o-basico'): string {
  const [pathWithQuery, hash] = to.split('#')
  const params = new URLSearchParams()
  params.set('trilha', trailId)
  params.set('item', itemId)
  return `${pathWithQuery}?${params}${hash ? `#${hash}` : ''}`
}

export function GuiaTrailNavigator() {
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const stageId = searchParams.get('etapa')
  const trailId = searchParams.get('trilha') ?? (
    location.pathname === guiaRoutes.trilha('primeira-vaga')
      ? 'primeira-vaga'
      : location.pathname === guiaRoutes.trilha('entender-o-basico')
        ? 'entender-o-basico'
        : location.pathname === guiaRoutes.trilha('portfolio')
          ? 'portfolio'
        : location.pathname === guiaRoutes.trilha('freelancer')
          ? 'freelancer'
        : location.pathname === guiaRoutes.trilha('voluntariado')
          ? 'voluntariado'
        : null
  )
  const itemId = searchParams.get('item')

  if (!trailId) return null
  const trail = trails[trailId as keyof typeof trails]
  if (!trail) return null

  if (
    (trailId === 'primeira-vaga' || trailId === 'entender-o-basico' || trailId === 'portfolio' || trailId === 'voluntariado' || trailId === 'freelancer')
    && (stageId || !itemId)
  ) {
    const currentIndex = trail.stages.findIndex(
      (stage) => stage.number === (stageId ?? trail.stages[0].number),
    )
    const current = trail.stages[currentIndex]
    if (!current) return null

    const previous = trail.stages[currentIndex - 1]
    const next = trail.stages[currentIndex + 1]
    const stageTo = (stageNumber: string) =>
      `${guiaRoutes.trilha(trailId)}?trilha=${trailId}&etapa=${stageNumber}`

    return (
      <aside className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-200/70 bg-neutral-100/95 px-5 py-3 shadow-[0_-12px_32px_-24px_rgb(7_0_58_/_0.45)] backdrop-blur md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-neutral-500">
            Você está na trilha <span className="font-black">{trail.title}</span>
            <span className="ml-2 text-neutral-400">| Etapa {current.number} {current.title}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              to={previous ? stageTo(previous.number) : guiaRoutes.home}
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-500/10 px-3 py-2 text-sm font-bold text-neutral-500 transition-colors hover:border-brand-300 hover:bg-brand-100/60"
            >
              <ArrowLeft size={16} weight="bold" aria-hidden />
              {previous ? 'Anterior' : 'Voltar ao Guia'}
            </Link>
            {next ? (
              <Link
                to={stageTo(next.number)}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-400 px-3 py-2 text-sm font-bold text-neutral-100 transition-colors hover:bg-brand-500"
              >
                Próximo
                <ArrowRight size={16} weight="bold" aria-hidden />
              </Link>
            ) : (
              <Link
                to={`${guiaRoutes.home}#${guiaHashes.trilhas}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-400 px-3 py-2 text-sm font-bold text-neutral-100 transition-colors hover:bg-brand-500"
              >
                Ver trilhas
              </Link>
            )}
          </div>
        </div>
      </aside>
    )
  }

  const trailContents = trail.stages.flatMap((stage) =>
    stage.contents.map((content) => ({ ...content, stage })),
  )

  const currentIndex = trailContents.findIndex(
    (content) => content.id === itemId,
  )
  if (currentIndex < 0) return null

  const current = trailContents[currentIndex]
  const next = trailContents[currentIndex + 1]
  const chapterIndex = current.stage.contents.findIndex(
    (content) => content.id === current.id,
  ) + 1
  const nextTo = next && (
    next.stage.number !== current.stage.number
    && (trailId === 'primeira-vaga' || trailId === 'entender-o-basico' || trailId === 'portfolio' || trailId === 'voluntariado' || trailId === 'freelancer')
  )
    ? `${guiaRoutes.trilha(trailId)}?trilha=${trailId}&etapa=${next.stage.number}`
    : next
      ? withTrailContext(next.to, next.id, trailId)
      : null
  const backTo = (
    trailId === 'primeira-vaga' || trailId === 'entender-o-basico' || trailId === 'portfolio' || trailId === 'voluntariado' || trailId === 'freelancer'
  )
    ? `${guiaRoutes.trilha(trailId)}?trilha=${trailId}&etapa=${current.stage.number}`
    : `${guiaRoutes.trilha(trailId)}#stage-${current.stage.number}`

  return (
    <aside className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-200/70 bg-neutral-100/95 px-5 py-3 shadow-[0_-12px_32px_-24px_rgb(7_0_58_/_0.45)] backdrop-blur md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-neutral-500">
          Você está na trilha <span className="font-black">{trail.title}</span>
          <span className="ml-2 text-neutral-400">
            | {current.stage.number}.{chapterIndex} {current.title}
          </span>
        </p>
        <div className="flex flex-wrap gap-2">
          <Link
            to={backTo}
            className="inline-flex items-center gap-1.5 rounded-full border border-neutral-500/10 px-3 py-2 text-sm font-bold text-neutral-500 transition-colors hover:border-brand-300 hover:bg-brand-100/60"
          >
            <ArrowLeft size={16} weight="bold" aria-hidden />
            Voltar à trilha
          </Link>
          {nextTo ? (
            <Link
              to={nextTo}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-400 px-3 py-2 text-sm font-bold text-neutral-100 transition-colors hover:bg-brand-500"
            >
              Próximo
              <ArrowRight size={16} weight="bold" aria-hidden />
            </Link>
          ) : null}
        </div>
      </div>
    </aside>
  )
}
