import { GuiaLinkPreviewCard } from '@/components/guia/GuiaLinkPreviewCard'
import {
  guiaTemaUxDescription,
  guiaTemaUxLinkSections,
} from '@/data/guiaTemaUxLinks'

export function GuiaTemaUxPageContent() {
  const linkCount = guiaTemaUxLinkSections.reduce(
    (count, section) => count + section.links.length,
    0,
  )

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
