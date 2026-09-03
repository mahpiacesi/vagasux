import { ArrowRight, Umbrella } from '@phosphor-icons/react'
import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { guiaTrilhaPrimeiraVagaStages } from '@/data/guiaTrilhaPrimeiraVaga'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { withTrailContext } from '@/components/guia/GuiaTrailNavigator'
import { GuiaLinkPreviewCard } from '@/components/guia/GuiaLinkPreviewCard'

export function GuiaTrilhaPrimeiraVagaPageContent() {
  const [searchParams] = useSearchParams()
  const selectedStageNumber = searchParams.get('etapa')
  const currentStageNumber = selectedStageNumber ?? '01'
  const currentStage = guiaTrilhaPrimeiraVagaStages.find(
    (stage) => stage.number === currentStageNumber,
  ) ?? guiaTrilhaPrimeiraVagaStages[0]
  const isFirstStage = currentStage.number === '01'
  const isLastStage = currentStage.number === guiaTrilhaPrimeiraVagaStages.at(-1)?.number

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
      <header className={isFirstStage ? 'relative mt-8 overflow-hidden rounded-3xl bg-brand-100 px-6 py-8 md:px-10 md:py-10' : 'mt-8 max-w-3xl'}>
        <div className={isFirstStage ? 'relative z-10 max-w-2xl' : ''}>
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">Trilha</p>
          <div className="mt-4 flex items-center gap-3"><span className="text-3xl">💼</span><h1 className={isFirstStage ? 'text-4xl font-black tracking-[-0.05em] text-neutral-500 md:text-5xl' : 'text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-4xl'}>Conseguir minha primeira vaga</h1></div>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">Um caminho para organizar sua busca, preparar sua apresentação e se posicionar em processos seletivos.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3"><Badge className="border-brand-300/30 bg-neutral-100 text-brand-500">Iniciante</Badge>{isFirstStage ? <span className="text-sm font-semibold text-neutral-400">7 etapas para seguir no seu ritmo</span> : null}</div>
        </div>
        {isFirstStage ? <Umbrella aria-hidden weight="duotone" className="absolute -right-10 -bottom-14 hidden size-64 -rotate-12 text-brand-200/70 md:block" /> : null}
      </header>
      <div className="mt-12">
        <section id={`stage-${currentStage.number}`} className="scroll-mt-24">
          {(() => {
            const stage = currentStage
            return (
              <>
            <div className="flex gap-4"><span className="text-2xl font-black text-brand-400">{stage.number}</span><div><h2 className="text-2xl font-black text-neutral-500">{stage.title}</h2><p className="mt-2 text-sm font-semibold text-neutral-400">{stage.description}</p></div></div>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-400">{stage.introduction}</p>
            {stage.essentials ? <ul className="mt-5 grid gap-2 sm:grid-cols-2">{stage.essentials.map((item) => <li key={item} className="rounded-xl bg-brand-100/40 px-4 py-3 text-sm font-semibold text-neutral-500">{item}</li>)}</ul> : null}
            {stage.note ? <aside className="mt-5 rounded-2xl border border-complementary-300/50 bg-complementary-100 px-5 py-4 text-sm leading-relaxed text-neutral-500">{stage.note}</aside> : null}
            <div className="mt-7 max-w-3xl">
              <p className="text-xs font-black tracking-[0.16em] text-brand-400 uppercase">Na prática</p>
              <div className="mt-3 space-y-4">{stage.guidance.map((item) => <div key={item.title} className="border-l-2 border-brand-200 pl-4"><h3 className="font-black text-neutral-500">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-neutral-400">{item.description}</p></div>)}</div>
            </div>
            <aside className="mt-7 max-w-3xl rounded-2xl border border-brand-200 bg-brand-100/40 px-5 py-4"><p className="text-xs font-black tracking-[0.16em] text-brand-500 uppercase">Antes de seguir</p><p className="mt-1 text-sm leading-relaxed text-neutral-500">{stage.nextStep}</p></aside>
            <div className="mt-7"><p className="text-xs font-black tracking-[0.16em] text-neutral-400 uppercase">Quer se aprofundar?</p><ol className="mt-3 grid gap-3 lg:grid-cols-2">{stage.contents.map((content, index) => <li key={content.id}>{content.external ? <GuiaLinkPreviewCard link={{ title: content.title, url: content.to, description: content.description }} className="h-full" /> : <Link to={withTrailContext(content.to, content.id, 'primeira-vaga')} className="group flex h-full gap-4 rounded-2xl border border-neutral-500/10 bg-neutral-100 p-5 hover:border-brand-300 hover:bg-brand-100/30"><CardContent number={`${stage.number}.${index+1}`} title={content.title} description={content.description} type={content.type}/></Link>}</li>)}</ol></div>
              </>
            )
          })()}
        </section>
      </div>
      {isLastStage ? <section className="mt-14 border-t border-neutral-500/10 pt-12"><h2 className="text-2xl font-black text-neutral-500">Quer continuar se preparando?</h2><p className="mt-2 text-sm text-neutral-400">A VagasUX já reuniu respostas para dúvidas de currículo, LinkedIn e entrevistas.</p><div className="mt-6 grid gap-3 md:grid-cols-3">{[['📄','Currículo','/guia/faq#cv-o-que-incluir'],['💼','LinkedIn','/guia/faq#linkedin-perfil-competitivo'],['🎤','Entrevistas','/guia/faq#como-portar-entrevista']].map(([emoji,title,to])=><Link key={title} to={to} className="rounded-2xl border border-neutral-500/10 bg-brand-100/30 p-5 font-black text-neutral-500">{emoji} {title}<span className="mt-2 block text-sm font-semibold text-brand-400">Ver dúvidas</span></Link>)}</div></section> : null}
    </div>
  )
}

function CardContent({ number, title, description, type }: { number: string; title: string; description: string; type: string }) {
  return <><span className="text-sm font-black text-brand-400">{number}</span><span className="min-w-0 flex-1"><span className="flex justify-between gap-3"><span className="font-black text-neutral-500 group-hover:text-brand-500">{title}</span><ArrowRight size={18} className="shrink-0 text-brand-400"/></span><span className="mt-2 block text-sm text-neutral-400">{description}</span><span className="mt-3 block text-xs font-bold tracking-[0.12em] text-neutral-400 uppercase">{type}</span></span></>
}
