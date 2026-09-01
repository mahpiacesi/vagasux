import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { guiaTrilhas } from '@/data/guia'
import { guiaTrilhaEntenderOBasicoStages } from '@/data/guiaTrilhaEntenderOBasico'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function GuiaTrilhaEntenderOBasicoPageContent() {
  const contents = guiaTrilhaEntenderOBasicoStages.flatMap((stage) => stage.contents)
  const nextTrails = guiaTrilhas.filter(
    (trail) => !['entender-o-basico', 'explorar'].includes(trail.id),
  )

  return (
    <div className="mt-8 w-full">
      <div className="flex flex-wrap items-center gap-3">
        <Button asChild variant="guia-compact">
          <Link to={guiaRoutes.home}>Voltar ao Guia</Link>
        </Button>
        <Button asChild variant="guia-compact-outline">
          <Link to={guiaRoutes.faq}>FAQ</Link>
        </Button>
      </div>

      <header className="mt-8 max-w-3xl">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
          Trilha
        </p>
        <div className="mt-4 flex items-center gap-3">
          <span className="text-3xl" aria-hidden>🚀</span>
          <h1 className="text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
            Entender o básico
          </h1>
        </div>
        <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
          O que é Product Design, como é o mercado e por onde começar.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-neutral-400">
          <Badge className="border-brand-300/30 bg-brand-100 text-brand-500">Iniciante</Badge>
          <span>6 h estimadas</span>
          <span>{contents.length} conteúdos</span>
        </div>
      </header>

      <section className="mt-10 rounded-3xl border border-brand-200/60 bg-brand-100/35 p-6 md:p-8">
        <h2 className="text-xl font-black text-neutral-500">Seu caminho começa aqui</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
          Siga as etapas na ordem ou volte quando quiser. A trilha organiza conteúdos que já fazem parte do Guia.
        </p>
      </section>

      <div className="mt-12 space-y-12">
        {guiaTrilhaEntenderOBasicoStages.map((stage) => (
          <section key={stage.number} aria-labelledby={`stage-${stage.number}`}>
            <div className="flex items-start gap-4">
              <span className="text-2xl font-black text-brand-400">{stage.number}</span>
              <div>
                <h2 id={`stage-${stage.number}`} className="text-2xl font-black tracking-[-0.02em] text-neutral-500">
                  {stage.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
                  {stage.description}
                </p>
                <p className="mt-3 text-xs font-bold tracking-[0.14em] text-brand-400 uppercase">
                  {stage.contents.length} conteúdos
                </p>
              </div>
            </div>
            <ol className="mt-6 grid gap-3 lg:grid-cols-2">
              {stage.contents.map((content, index) => (
                <li key={content.id}>
                  <Link to={content.to} className="group flex h-full gap-4 rounded-2xl border border-neutral-500/10 bg-neutral-100 p-5 transition-colors hover:border-brand-300 hover:bg-brand-100/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400">
                    <span className="text-sm font-black text-brand-400">{stage.number}.{index + 1}</span>
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
        ))}
      </div>

      <section className="mt-14 border-t border-neutral-500/10 pt-12">
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
      </section>
    </div>
  )
}
