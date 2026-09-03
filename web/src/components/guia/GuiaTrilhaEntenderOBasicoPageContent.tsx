import { ArrowRight, Umbrella } from '@phosphor-icons/react'
import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { guiaTrilhas } from '@/data/guia'
import { guiaTrilhaEntenderOBasicoStages } from '@/data/guiaTrilhaEntenderOBasico'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { withTrailContext } from '@/components/guia/GuiaTrailNavigator'

export function GuiaTrilhaEntenderOBasicoPageContent() {
  const [searchParams] = useSearchParams()
  const contents = guiaTrilhaEntenderOBasicoStages.flatMap((stage) => stage.contents)
  const selectedStageNumber = searchParams.get('etapa')
  const currentStage = guiaTrilhaEntenderOBasicoStages.find(
    (stage) => stage.number === (selectedStageNumber ?? '01'),
  ) ?? guiaTrilhaEntenderOBasicoStages[0]
  const isLastStage = currentStage.number === guiaTrilhaEntenderOBasicoStages.at(-1)?.number
  const nextTrails = guiaTrilhas.filter(
    (trail) => !['entender-o-basico', 'explorar'].includes(trail.id),
  )

  useEffect(() => {
    if (!selectedStageNumber) return
    document.getElementById(`stage-${currentStage.number}`)?.scrollIntoView()
  }, [currentStage.number, selectedStageNumber])

  return (
    <div className="mt-8 w-full pb-24">
      <div className="flex flex-wrap items-center gap-3">
        <Button asChild variant="guia-compact">
          <Link to={guiaRoutes.home}>Voltar ao Guia</Link>
        </Button>
        <Button asChild variant="guia-compact-outline">
          <Link to={guiaRoutes.faq}>FAQ</Link>
        </Button>
      </div>

      <header className="relative mt-8 overflow-hidden rounded-3xl bg-brand-100 px-6 py-8 md:px-10 md:py-10">
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">Trilha</p>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-3xl" aria-hidden>🚀</span>
            <h1 className="text-4xl leading-[1.06] font-black tracking-[-0.05em] text-neutral-500 md:text-5xl">
              Entender o básico
            </h1>
          </div>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
            O que é Product Design, como é o mercado e por onde começar.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-neutral-400">
            <Badge className="border-brand-300/30 bg-neutral-100 text-brand-500">Iniciante</Badge>
            <span>6 h estimadas</span>
            <span>{contents.length} conteúdos</span>
          </div>
        </div>
        <Umbrella aria-hidden weight="duotone" className="absolute -right-10 -bottom-14 hidden size-64 -rotate-12 text-brand-200/70 md:block" />
      </header>

      <section className="mt-12" id={`stage-${currentStage.number}`} aria-labelledby={`stage-title-${currentStage.number}`}>
        <div className="flex gap-4">
          <span className="text-2xl font-black text-brand-400">{currentStage.number}</span>
          <div>
            <h2 id={`stage-title-${currentStage.number}`} className="text-2xl font-black tracking-[-0.02em] text-neutral-500">
              {currentStage.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
              {currentStage.description}
            </p>
            <p className="mt-3 text-xs font-bold tracking-[0.14em] text-brand-400 uppercase">
              {currentStage.contents.length} conteúdos
            </p>
          </div>
        </div>
        <ol className="mt-6 ml-11 grid gap-3 lg:grid-cols-2">
              {currentStage.contents.map((content, index) => (
                <li key={content.id}>
                  <Link to={withTrailContext(content.to, content.id)} className="group flex h-full gap-4 rounded-2xl border border-neutral-500/10 bg-neutral-100 p-5 transition-colors hover:border-brand-300 hover:bg-brand-100/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400">
                    <span className="text-sm font-black text-brand-400">{currentStage.number}.{index + 1}</span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-start justify-between gap-3">
                        <span className="text-base font-black text-neutral-500 group-hover:text-brand-500">{content.title}</span>
                        <ArrowRight size={18} weight="bold" className="shrink-0 text-brand-400" aria-hidden />
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-neutral-400">{content.description}</span>
                      <span className="mt-3 block text-xs font-bold tracking-[0.12em] text-neutral-400 uppercase">{content.type}</span>
                    </span>
                  </Link>
                </li>
              ))}
        </ol>
      </section>

      {isLastStage ? <section className="mt-14 border-t border-neutral-500/10 pt-12">
        <h2 className="text-2xl font-black text-neutral-500">Terminou esta trilha?</h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
          Continue explorando o Guia de acordo com o que você quer aprender agora.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {nextTrails.map((trail) => (
            <li key={trail.id}>
              <Link to={guiaRoutes.trilha(trail.id)} className="flex h-full gap-3 rounded-2xl border border-neutral-500/10 bg-brand-100/30 p-4 font-bold text-neutral-500 transition-colors hover:border-brand-300 hover:bg-brand-100/60">
                <span aria-hidden>{trail.emoji}</span>
                {trail.title}
              </Link>
            </li>
          ))}
        </ul>
      </section> : null}
    </div>
  )
}
