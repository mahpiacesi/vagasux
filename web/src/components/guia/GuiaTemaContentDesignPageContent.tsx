import { GuiaLinkPreviewCard } from '@/components/guia/GuiaLinkPreviewCard'
import { guiaTemaContentDesignDescription, guiaTemaContentDesignLinkSections } from '@/data/guiaTemaContentDesignLinks'

export function GuiaTemaContentDesignPageContent() {
  const total = guiaTemaContentDesignLinkSections.reduce((sum, section) => sum + section.links.length, 0)
  return <div className="mt-8 w-full">
    <header className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="text-3xl" aria-hidden>✍️</span>
        <h1 className="text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">Content Design</h1>
      </div>
      <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">{guiaTemaContentDesignDescription}</p>
      <p className="mt-4 text-sm font-semibold text-neutral-400">{total} links para explorar</p>
    </header>
    <div className="mt-10 space-y-12">
      {guiaTemaContentDesignLinkSections.map((section, index) => <section key={section.title} aria-labelledby={`content-design-${index}`}>
        <h2 id={`content-design-${index}`} className="text-xl font-black tracking-[-0.02em] text-neutral-500">{section.title}</h2>
        <ul className="mt-5 grid gap-4 lg:grid-cols-2">
          {section.links.map((link) => <li key={link.url}><GuiaLinkPreviewCard link={link} className="h-full" /></li>)}
        </ul>
      </section>)}
    </div>
  </div>
}
