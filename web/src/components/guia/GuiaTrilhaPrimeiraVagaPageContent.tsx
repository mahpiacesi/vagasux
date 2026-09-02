import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { guiaTrilhaPrimeiraVagaStages } from '@/data/guiaTrilhaPrimeiraVaga'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { withTrailContext } from '@/components/guia/GuiaTrailNavigator'

export function GuiaTrilhaPrimeiraVagaPageContent() {
  return (
    <div className="mt-8 w-full">
      <div className="flex flex-wrap gap-3">
        <Button asChild variant="guia-compact"><Link to={guiaRoutes.home}>Voltar ao Guia</Link></Button>
        <Button asChild variant="guia-compact-outline"><Link to={guiaRoutes.faq}>FAQ</Link></Button>
      </div>
      <header className="mt-8 max-w-3xl">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">Trilha</p>
        <div className="mt-4 flex items-center gap-3"><span className="text-3xl">💼</span><h1 className="text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">Conseguir minha primeira vaga</h1></div>
        <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">Currículo, LinkedIn, entrevistas e processos seletivos.</p>
        <Badge className="mt-5 border-brand-300/30 bg-brand-100 text-brand-500">Iniciante</Badge>
      </header>
      <div className="mt-12 space-y-14">
        {guiaTrilhaPrimeiraVagaStages.map((stage) => (
          <section key={stage.number} id={`stage-${stage.number}`} className="scroll-mt-24">
            <div className="flex gap-4"><span className="text-2xl font-black text-brand-400">{stage.number}</span><div><h2 className="text-2xl font-black text-neutral-500">{stage.title}</h2><p className="mt-2 text-sm font-semibold text-neutral-400">{stage.description}</p></div></div>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-400">{stage.introduction}</p>
            {stage.essentials ? <ul className="mt-5 grid gap-2 sm:grid-cols-2">{stage.essentials.map((item) => <li key={item} className="rounded-xl bg-brand-100/40 px-4 py-3 text-sm font-semibold text-neutral-500">{item}</li>)}</ul> : null}
            {stage.note ? <aside className="mt-5 rounded-2xl border border-complementary-300/50 bg-complementary-100 px-5 py-4 text-sm leading-relaxed text-neutral-500">{stage.note}</aside> : null}
            <ol className="mt-6 grid gap-3 lg:grid-cols-2">{stage.contents.map((content, index) => <li key={content.id}>{content.external ? <a href={content.to} target="_blank" rel="noopener noreferrer" className="group flex h-full gap-4 rounded-2xl border border-neutral-500/10 bg-neutral-100 p-5 hover:border-brand-300 hover:bg-brand-100/30"><CardContent number={`${stage.number}.${index+1}`} title={content.title} description={content.description} type={content.type}/></a> : <Link to={withTrailContext(content.to, content.id, 'primeira-vaga')} className="group flex h-full gap-4 rounded-2xl border border-neutral-500/10 bg-neutral-100 p-5 hover:border-brand-300 hover:bg-brand-100/30"><CardContent number={`${stage.number}.${index+1}`} title={content.title} description={content.description} type={content.type}/></Link>}</li>)}</ol>
          </section>
        ))}
      </div>
      <section className="mt-14 border-t border-neutral-500/10 pt-12"><h2 className="text-2xl font-black text-neutral-500">Quer continuar se preparando?</h2><p className="mt-2 text-sm text-neutral-400">A VagasUX já reuniu respostas para dúvidas de currículo, LinkedIn e entrevistas.</p><div className="mt-6 grid gap-3 md:grid-cols-3">{[['📄','Currículo','/guia/faq#cv-o-que-incluir'],['💼','LinkedIn','/guia/faq#linkedin-perfil-competitivo'],['🎤','Entrevistas','/guia/faq#como-portar-entrevista']].map(([emoji,title,to])=><Link key={title} to={to} className="rounded-2xl border border-neutral-500/10 bg-brand-100/30 p-5 font-black text-neutral-500">{emoji} {title}<span className="mt-2 block text-sm font-semibold text-brand-400">Ver dúvidas</span></Link>)}</div></section>
    </div>
  )
}

function CardContent({ number, title, description, type }: { number: string; title: string; description: string; type: string }) {
  return <><span className="text-sm font-black text-brand-400">{number}</span><span className="min-w-0 flex-1"><span className="flex justify-between gap-3"><span className="font-black text-neutral-500 group-hover:text-brand-500">{title}</span><ArrowRight size={18} className="shrink-0 text-brand-400"/></span><span className="mt-2 block text-sm text-neutral-400">{description}</span><span className="mt-3 block text-xs font-bold tracking-[0.12em] text-neutral-400 uppercase">{type}</span></span></>
}
