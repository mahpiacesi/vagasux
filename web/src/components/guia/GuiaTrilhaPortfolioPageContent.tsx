import { Umbrella } from '@phosphor-icons/react'
import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GuiaLinkPreviewCard } from '@/components/guia/GuiaLinkPreviewCard'
import { guiaTrilhaPortfolioStages } from '@/data/guiaTrilhaPortfolio'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function GuiaTrilhaPortfolioPageContent() {
  const [searchParams] = useSearchParams()
  const selectedStageNumber = searchParams.get('etapa')
  const currentStageNumber = selectedStageNumber ?? '01'
  const currentStage = guiaTrilhaPortfolioStages.find(
    (stage) => stage.number === currentStageNumber,
  ) ?? guiaTrilhaPortfolioStages[0]
  const isLastStage = currentStage.number === guiaTrilhaPortfolioStages.at(-1)?.number

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
          <div className="mt-4 flex items-center gap-3"><span className="text-3xl">🎒</span><h1 className="text-4xl font-black tracking-[-0.05em] text-neutral-500 md:text-5xl">Montar meu portfólio</h1></div>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">Organize seus cases e mostre seu processo e suas decisões estratégicas.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3"><Badge className="border-brand-300/30 bg-neutral-100 text-brand-500">Iniciante</Badge><span className="text-sm font-semibold text-neutral-400">5 etapas para seguir no seu ritmo</span></div>
        </div>
        <Umbrella aria-hidden weight="duotone" className="absolute -right-10 -bottom-14 hidden size-64 -rotate-12 text-brand-200/70 md:block" />
      </header>
      <div className="mt-12">
        <section id={`stage-${currentStage.number}`} className="scroll-mt-24">
          <div className="flex gap-4"><span className="text-2xl font-black text-brand-400">{currentStage.number}</span><div><h2 className="text-2xl font-black text-neutral-500">{currentStage.title}</h2><p className="mt-2 text-sm font-semibold text-neutral-400">{currentStage.description}</p></div></div>
          <div className="ml-11">
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-400">{currentStage.introduction}</p>
            <div className="mt-7 max-w-3xl">
              <p className="text-xs font-black tracking-[0.16em] text-brand-400 uppercase">Na prática</p>
              <div className="mt-3 space-y-4">{currentStage.guidance.map((item) => <div key={item.title} className="border-l-2 border-brand-200 pl-4"><h3 className="font-black text-neutral-500">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-neutral-400">{item.description}</p></div>)}</div>
              {currentStage.tip ? <aside className="mt-6 max-w-3xl rounded-2xl border border-complementary-300/50 bg-complementary-100 px-5 py-4 text-sm leading-relaxed text-neutral-500"><p className="font-black">💡 {currentStage.tip.title}</p><p className="mt-1">{currentStage.tip.description}</p></aside> : null}
            </div>
            <aside className="mt-7 max-w-3xl rounded-2xl border border-brand-200 bg-brand-100/40 px-5 py-4"><p className="text-xs font-black tracking-[0.16em] text-brand-500 uppercase">Antes de seguir</p><p className="mt-1 text-sm leading-relaxed text-neutral-500">{currentStage.nextStep}</p></aside>
            <div className="mt-7">
              <p className="text-xs font-black tracking-[0.16em] text-neutral-400 uppercase">Quer se aprofundar?</p>
              <ol className="mt-3 grid gap-3 lg:grid-cols-2">
                {currentStage.contents.map((content) => (
                  <li key={content.id}>
                    <GuiaLinkPreviewCard link={{ title: content.title, url: content.to, href: content.to, description: content.description }} className="h-full" />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </div>
      {isLastStage ? <section className="mt-14 border-t border-neutral-500/10 pt-12"><h2 className="text-2xl font-black text-neutral-500">Ainda tem dúvida sobre portfólio?</h2><p className="mt-2 text-sm text-neutral-400">A FAQ da VagasUX reúne respostas sobre cases, experiências, publicação e o que recrutadores procuram.</p><Link to={`${guiaRoutes.faq}#portfolio-faz-diferenca-iniciante`} className="mt-6 inline-flex rounded-2xl border border-neutral-500/10 bg-brand-100/30 px-5 py-4 font-black text-neutral-500 hover:border-brand-300">🎒 Ver dúvidas sobre portfólio</Link></section> : null}
    </div>
  )
}
