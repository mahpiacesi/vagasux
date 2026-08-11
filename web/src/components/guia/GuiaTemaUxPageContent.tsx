import { GuiaLinkPreviewCard } from '@/components/guia/GuiaLinkPreviewCard'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { getGuiaGlossarioEntryById } from '@/data/guiaGlossario'
import {
  guiaTemaUxDescription,
  guiaTemaUxLinkSections,
} from '@/data/guiaTemaUxLinks'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function GuiaTemaUxPageContent() {
  const linkCount = guiaTemaUxLinkSections.reduce(
    (count, section) => count + section.links.length,
    0,
  )
  const glossaryEntry = getGuiaGlossarioEntryById('ui')

  return (
    <div className="mt-8 w-full">
      <header className="max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="text-3xl" aria-hidden>🎨</span>
          <h1 className="text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
            UI
          </h1>
        </div>
        <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
          {guiaTemaUxDescription}
        </p>
        <p className="mt-4 text-sm font-semibold text-neutral-400">
          {linkCount} links para explorar
        </p>
      </header>
      {glossaryEntry ? (
        <section className="mt-10 rounded-3xl border border-brand-200/60 bg-brand-100/35 p-6 md:p-8">
          <h2 className="text-base font-black text-neutral-500">O que é?</h2>
          <div className="mt-2 space-y-3 text-sm leading-relaxed text-neutral-400">{glossaryEntry.whatIs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          <Button asChild variant="guia-outline" className="mt-5">
            <Link to={`${guiaRoutes.glossario}#ui`}>Ver no glossário completo</Link>
          </Button>
        </section>
      ) : null}

      <div className="mt-10 space-y-12">
        {guiaTemaUxLinkSections.map((section, sectionIndex) => (
          <section
            key={section.title ?? 'destaque'}
            aria-labelledby={section.title ? `ui-section-${sectionIndex}` : undefined}
          >
            {section.title ? (
              <div className="max-w-2xl">
                <h2
                  id={`ui-section-${sectionIndex}`}
                  className="text-xl font-black tracking-[-0.02em] text-neutral-500"
                >
                  {section.title}
                </h2>
                {section.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {section.description}
                  </p>
                ) : null}
              </div>
            ) : null}

            <ul className="mt-5 grid gap-4 lg:grid-cols-2">
              {section.links.map((link) => (
                <li key={link.url}>
                  <GuiaLinkPreviewCard link={link} className="h-full" />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
