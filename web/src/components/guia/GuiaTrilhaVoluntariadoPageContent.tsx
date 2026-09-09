import { ArrowRight, Umbrella } from '@phosphor-icons/react'
import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GuiaLinkPreviewCard } from '@/components/guia/GuiaLinkPreviewCard'
import { withTrailContext } from '@/components/guia/GuiaTrailNavigator'
import { guiaTrilhaVoluntariadoStages } from '@/data/guiaTrilhaVoluntariado'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function GuiaTrilhaVoluntariadoPageContent() {
  const [searchParams] = useSearchParams()
  const selectedStageNumber = searchParams.get('etapa')
  const currentStageNumber = selectedStageNumber ?? '01'
  const currentStage = guiaTrilhaVoluntariadoStages.find((stage) => stage.number === currentStageNumber) ?? guiaTrilhaVoluntariadoStages[0]

  useEffect(() => {
    if (!selectedStageNumber) return
    document.getElementById(`stage-${currentStage.number}`)?.scrollIntoView()
  }, [currentStage.number, selectedStageNumber])

  return (
    <div className="mt-8 w-full pb-24">
      <div className="flex flex-wrap gap-3">
        <Button asChild variant="guia-compact"><Link to={guiaRoutes.home}>Voltar ao Guia</Link></Button>
        <Button asChild variant="guia-compact-outline"><Link to={guiaRoutes.faq}>FAQ</Link></Button>
      </div>
      <header className="relative mt-8 overflow-hidden rounded-3xl bg-brand-100 px-6 py-8 md:px-10 md:py-10">
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">Trilha</p>
          <div className="mt-4 flex items-center gap-3"><span className="text-3xl">🤝</span><h1 className="text-4xl font-black tracking-[-0.05em] text-neutral-500 md:text-5xl">Praticar em um voluntariado</h1></div>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">Um caminho para encontrar uma iniciativa, colaborar com pessoas e transformar a experiência em aprendizado.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3"><Badge className="border-brand-300/30 bg-neutral-100 text-brand-500">Iniciante</Badge><span className="text-sm font-semibold text-neutral-400">5 etapas para seguir no seu ritmo</span></div>
        </div>
        <Umbrella aria-hidden weight="duotone" className="absolute -right-10 -bottom-14 hidden size-64 -rotate-12 text-brand-200/70 md:block" />
      </header>
      <div className="mt-12">
        <section id={`stage-${currentStage.number}`} className="scroll-mt-24">
          <div className="flex gap-4"><span className="text-2xl font-black text-brand-400">{currentStage.number}</span><div><h2 className="text-2xl font-black text-neutral-500">{currentStage.title}</h2><p className="mt-2 text-sm font-semibold text-neutral-400">{currentStage.description}</p></div></div>
          <div className="ml-11">
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-400">{currentStage.introduction}</p>
            <div className="mt-7 max-w-3xl"><p className="text-xs font-black tracking-[0.16em] text-brand-400 uppercase">Na prática</p><div className="mt-3 space-y-4">{currentStage.guidance.map((item) => <div key={item.title} className="border-l-2 border-brand-200 pl-4"><h3 className="font-black text-neutral-500">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-neutral-400">{item.description}</p></div>)}</div></div>
            <aside className="mt-7 max-w-3xl rounded-2xl border border-brand-200 bg-brand-100/40 px-5 py-4"><p className="text-xs font-black tracking-[0.16em] text-brand-500 uppercase">Antes de seguir</p><p className="mt-1 text-sm leading-relaxed text-neutral-500">{currentStage.nextStep}</p></aside>
            {currentStage.contents.length ? <div className="mt-7"><p className="text-xs font-black tracking-[0.16em] text-neutral-400 uppercase">Quer se aprofundar?</p><ol className="mt-3 grid gap-3 lg:grid-cols-2">{currentStage.contents.map((content, index) => <li key={content.id}>{content.external ? <GuiaLinkPreviewCard link={{ title: content.title, url: content.previewUrl ?? content.to, href: content.to, description: content.description }} className="h-full" /> : <Link to={withTrailContext(content.to, content.id, 'voluntariado')} className="group flex h-full gap-4 rounded-2xl border border-neutral-500/10 bg-neutral-100 p-5 hover:border-brand-300 hover:bg-brand-100/30"><CardContent number={`${currentStage.number}.${index + 1}`} title={content.title} description={content.description} type={content.type} /></Link>}</li>)}</ol></div> : null}
          </div>
        </section>
      </div>
    </div>
  )
}

function CardContent({ number, title, description, type }: { number: string; title: string; description: string; type: string }) {
  return <><span className="text-sm font-black text-brand-400">{number}</span><span className="min-w-0 flex-1"><span className="flex justify-between gap-3"><span className="font-black text-neutral-500 group-hover:text-brand-500">{title}</span><ArrowRight size={18} className="shrink-0 text-brand-400" /></span><span className="mt-2 block text-sm text-neutral-400">{description}</span><span className="mt-3 block text-xs font-bold tracking-[0.12em] text-neutral-400 uppercase">{type}</span></span></>
}
