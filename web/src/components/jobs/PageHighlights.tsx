import type { LucideIcon } from 'lucide-react'

export type PageHighlight = {
  icon: LucideIcon
  title: string
  text: string
}

type PageHighlightsProps = {
  items: readonly PageHighlight[]
}

export function PageHighlights({ items }: PageHighlightsProps) {
  return (
    <ul className="mural-fade mural-fade-delay-2 mt-8 grid gap-4 sm:grid-cols-3">
      {items.map(({ icon: Icon, title, text }) => (
        <li
          key={title}
          className="rounded-2xl border border-neutral-200/70 bg-neutral-100/70 px-4 py-4 shadow-[0_10px_30px_-24px_rgb(7_0_58_/_0.35)] backdrop-blur-sm"
        >
          <Icon className="size-5 text-brand-400" aria-hidden />
          <p className="mt-2 text-sm font-black text-neutral-500">{title}</p>
          <p className="mt-1 text-sm leading-relaxed text-neutral-400">{text}</p>
        </li>
      ))}
    </ul>
  )
}
