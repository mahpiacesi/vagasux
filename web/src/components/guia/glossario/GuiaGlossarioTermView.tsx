import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  guiaGlossarioCategoryLabels,
  resolveGuiaGlossarioSeeAlso,
  type GuiaGlossarioEntry,
} from '@/data/guiaGlossario'
import { guiaRoutes } from '@/lib/guiaRoutes'

function GlossarioSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-black text-neutral-500">{title}</h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed text-neutral-400">
        {children}
      </div>
    </section>
  )
}

export function GuiaGlossarioTermView({ entry }: { entry: GuiaGlossarioEntry }) {
  const related = resolveGuiaGlossarioSeeAlso(entry.seeAlso)
  const categoryLabel = guiaGlossarioCategoryLabels[entry.categoryId]

  return (
    <article className="mt-8 max-w-2xl">
      <p className="text-xs font-bold tracking-[0.16em] text-brand-400 uppercase">
        {categoryLabel}
      </p>

      <h1 className="mt-3 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
        {entry.term}
      </h1>

      {entry.originalName ? (
        <div className="mt-5 rounded-2xl border border-brand-200/60 bg-brand-100/40 px-5 py-4">
          <p className="text-base font-bold text-neutral-500">
            {entry.originalName.english}
          </p>
          <p className="mt-1 text-sm text-neutral-400">
            ({entry.originalName.portuguese})
          </p>
          {entry.originalName.usageNote ? (
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              {entry.originalName.usageNote}
            </p>
          ) : null}
        </div>
      ) : null}

      <GlossarioSection title="O que é?">
        {entry.whatIs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </GlossarioSection>

      <GlossarioSection title="Em outras palavras">
        <p>{entry.inOtherWords}</p>
      </GlossarioSection>

      <GlossarioSection title="Exemplo">
        <p>{entry.example}</p>
      </GlossarioSection>

      <GlossarioSection title="Você provavelmente vai ouvir">
        <ul className="space-y-2">
          {entry.youWillHear.map((phrase) => (
            <li
              key={phrase}
              className="rounded-xl border border-neutral-500/10 bg-neutral-100/80 px-4 py-3 text-sm font-medium text-neutral-500"
            >
              {phrase}
            </li>
          ))}
        </ul>
      </GlossarioSection>

      <GlossarioSection title="Por que isso importa?">
        <p>{entry.whyItMatters}</p>
      </GlossarioSection>

      {related.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-lg font-black text-neutral-500">Veja também</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {related.map((relatedEntry) => (
              <li key={relatedEntry.id}>
                <Link
                  to={guiaRoutes.glossarioTerm(relatedEntry.id)}
                  className="inline-flex rounded-full border border-neutral-500/10 bg-brand-100/30 px-4 py-2 text-sm font-bold text-neutral-500 transition-colors hover:border-brand-300 hover:bg-brand-100/60 hover:text-brand-500"
                >
                  {relatedEntry.term}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  )
}
