import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { GuiaLinkPreviewCard } from '@/components/guia/GuiaLinkPreviewCard'
import { getGuiaGlossarioEntryById } from '@/data/guiaGlossario'
import { guiaTemaResearchDescription, guiaTemaResearchLinkSections } from '@/data/guiaTemaResearchLinks'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { routes } from '@/lib/siteLinks'
import { guiaSearchAnchor } from '@/lib/guiaSearchAnchor'

export function GuiaTemaResearchPageContent() {
  const entry = getGuiaGlossarioEntryById('ux-research')
  return <div className="mt-8 w-full"><header className="max-w-3xl"><div className="flex items-center gap-3"><span className="text-3xl">🔍</span><h1 className="text-3xl font-black text-neutral-500 md:text-4xl">UX Research</h1></div><p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">{guiaTemaResearchDescription}</p></header>
    {entry ? <section className="mt-10 rounded-3xl border border-brand-200/60 bg-brand-100/35 p-6 md:p-8"><h2 className="text-base font-black text-neutral-500">O que é?</h2><div className="mt-2 space-y-3 text-sm leading-relaxed text-neutral-400">{entry.whatIs.map(x=><p key={x}>{x}</p>)}</div><Button asChild variant="guia-outline" className="mt-5"><Link to={`${guiaRoutes.glossario}#ux-research`}>Ver no glossário completo</Link></Button></section> : null}
    <div className="mt-10 space-y-12">{guiaTemaResearchLinkSections.map(s=><section id={guiaSearchAnchor(s.title ?? 'recursos')} key={s.title} className="scroll-mt-24"><h2 className="text-xl font-black text-neutral-500">{s.title}</h2><ul className="mt-5 grid gap-4 lg:grid-cols-2">{s.links.map(l=><li key={l.url}><GuiaLinkPreviewCard link={l} className="h-full"/></li>)}</ul></section>)}</div>
    <div className="mt-12 grid gap-5 md:grid-cols-2"><section className="rounded-3xl border border-neutral-500/10 bg-neutral-100 p-6"><h2 className="text-xl font-black text-neutral-500">Procurando vagas de pesquisa?</h2><Button asChild variant="guia-outline" className="mt-5"><Link to={`${routes.oportunidades}?discipline=ux_research#vagas`}>Explorar vagas</Link></Button></section><section className="rounded-3xl border border-neutral-500/10 bg-neutral-100 p-6"><h2 className="text-xl font-black text-neutral-500">Procurando cursos de pesquisa?</h2><Button asChild variant="guia-outline" className="mt-5"><Link to={`${guiaRoutes.cursos}?tema=Research#guia-cursos-filtros`}>Explorar cursos</Link></Button></section></div>
  </div>
}
