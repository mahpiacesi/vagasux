import type { ReactNode } from 'react'
import {
  guiaGlossarioCategoryLabels,
  type GuiaGlossarioEntry,
} from '@/data/guiaGlossario'

function GlossarioSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="min-w-0">
      <h3 className="text-base font-black text-neutral-500">{title}</h3>
      <div className="mt-2 space-y-3 text-base leading-relaxed text-neutral-400">
        {children}
      </div>
    </section>
  )
}

export function GuiaGlossarioEntryArticle({
  entry,
}: {
  entry: GuiaGlossarioEntry
}) {
  const categoryLabel = guiaGlossarioCategoryLabels[entry.categoryId]

  return (
    <article
      id={entry.id}
      className="scroll-mt-28 border-t border-neutral-500/10 pt-8 first:border-t-0 first:pt-0"
    >
      <p className="text-xs font-bold tracking-[0.16em] text-brand-400 uppercase">
        {categoryLabel}
      </p>

      <h2 className="mt-2 text-2xl leading-[1.08] font-black tracking-[-0.04em] text-neutral-500 md:text-[1.65rem]">
        {entry.term}
      </h2>

      {entry.originalName ? (
        <div className="mt-4 max-w-2xl rounded-2xl border border-brand-200/60 bg-brand-100/40 px-5 py-4">
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

      <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
        <GlossarioSection title="O que é?">
          {entry.whatIs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
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
      </div>
    </article>
  )
}
