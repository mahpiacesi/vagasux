import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { Link, useSearchParams } from 'react-router-dom'
import { guiaTrilhaEntenderOBasicoStages } from '@/data/guiaTrilhaEntenderOBasico'
import { guiaRoutes } from '@/lib/guiaRoutes'

const trailContents = guiaTrilhaEntenderOBasicoStages.flatMap((stage) =>
  stage.contents.map((content) => ({ ...content, stage })),
)

export function withTrailContext(to: string, itemId: string): string {
  const [pathWithQuery, hash] = to.split('#')
  const params = new URLSearchParams()
  params.set('trilha', 'entender-o-basico')
  params.set('item', itemId)
  return `${pathWithQuery}?${params}${hash ? `#${hash}` : ''}`
}

export function GuiaTrailNavigator() {
  const [searchParams] = useSearchParams()
  if (searchParams.get('trilha') !== 'entender-o-basico') return null

  const currentIndex = trailContents.findIndex(
    (content) => content.id === searchParams.get('item'),
  )
  if (currentIndex < 0) return null

  const current = trailContents[currentIndex]
  const next = trailContents[currentIndex + 1]
  const backTo = `${guiaRoutes.trilha('entender-o-basico')}#stage-${current.stage.number}`

  return (
    <aside className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-200/70 bg-neutral-100/95 px-5 py-3 shadow-[0_-12px_32px_-24px_rgb(7_0_58_/_0.45)] backdrop-blur md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-neutral-500">
          Você está na trilha <span className="font-black">Entender o básico</span>
        </p>
        <div className="flex flex-wrap gap-2">
          <Link
            to={backTo}
            className="inline-flex items-center gap-1.5 rounded-full border border-neutral-500/10 px-3 py-2 text-sm font-bold text-neutral-500 transition-colors hover:border-brand-300 hover:bg-brand-100/60"
          >
            <ArrowLeft size={16} weight="bold" aria-hidden />
            Voltar à trilha
          </Link>
          {next ? (
            <Link
              to={withTrailContext(next.to, next.id)}
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
