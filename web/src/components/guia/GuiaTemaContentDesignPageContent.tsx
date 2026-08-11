import { GuiaLinkPreviewCard } from '@/components/guia/GuiaLinkPreviewCard'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { getGuiaGlossarioEntryById } from '@/data/guiaGlossario'
import { guiaTemaContentDesignDescription, guiaTemaContentDesignLinkSections } from '@/data/guiaTemaContentDesignLinks'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { routes } from '@/lib/siteLinks'

export function GuiaTemaContentDesignPageContent() {
  const total = guiaTemaContentDesignLinkSections.reduce((sum, section) => sum + section.links.length, 0)
  const glossaryEntry = getGuiaGlossarioEntryById('content-design')
  return <div className="mt-8 w-full">
    <header className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="text-3xl" aria-hidden>✍️</span>
        <h1 className="text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">Content Design</h1>
      </div>
      <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">{guiaTemaContentDesignDescription}</p>
      <p className="mt-4 text-sm font-semibold text-neutral-400">{total} links para explorar</p>
    </header>
    {glossaryEntry ? <section className="mt-10 rounded-3xl border border-brand-200/60 bg-brand-100/35 p-6 md:p-8">
      <h2 className="text-base font-black text-neutral-500">O que é?</h2>
      <div className="mt-2 space-y-3 text-sm leading-relaxed text-neutral-400">{glossaryEntry.whatIs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      <Button asChild variant="guia-outline" className="mt-5">
        <Link to={`${guiaRoutes.glossario}#content-design`}>Ver no glossário completo</Link>
      </Button>
    </section> : null}
    <div className="mt-10 space-y-12">
      {guiaTemaContentDesignLinkSections.map((section, index) => <section key={section.title} aria-labelledby={`content-design-${index}`}>
        <h2 id={`content-design-${index}`} className="text-xl font-black tracking-[-0.02em] text-neutral-500">{section.title}</h2>
        <ul className="mt-5 grid gap-4 lg:grid-cols-2">
          {section.links.map((link) => <li key={link.url}><GuiaLinkPreviewCard link={link} className="h-full" /></li>)}
        </ul>
      </section>)}
    </div>
    <div className="mt-12 grid gap-5 md:grid-cols-2">
      <section className="rounded-3xl border border-neutral-500/10 bg-neutral-100 p-6">
        <h2 className="text-xl font-black text-neutral-500">Procurando vagas de UX Writing?</h2>
        <Button asChild variant="guia-outline" className="mt-5"><Link to={`${routes.oportunidades}?discipline=content_design#vagas`}>Explorar vagas de UX Writing</Link></Button>
      </section>
      <section className="rounded-3xl border border-neutral-500/10 bg-neutral-100 p-6">
        <h2 className="text-xl font-black text-neutral-500">Procurando cursos de UX Writing?</h2>
        <Button asChild variant="guia-outline" className="mt-5"><Link to={`${guiaRoutes.cursos}?tema=Writing#guia-cursos-filtros`}>Explorar cursos de UX Writing</Link></Button>
      </section>
    </div>
  </div>
}
