import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

const inlineLinkPattern = /\[([^\]]+)\]\(([^)]+)\)/g

export function GuiaFaqParagraph({ text }: { text: string }) {
  const nodes: ReactNode[] = []
  let lastIndex = 0

  for (const match of text.matchAll(inlineLinkPattern)) {
    const [fullMatch, label, href] = match
    const start = match.index ?? 0

    if (start > lastIndex) {
      nodes.push(text.slice(lastIndex, start))
    }

    nodes.push(
      <Link
        key={start}
        to={href}
        className="font-bold text-brand-500 transition-colors hover:text-brand-400"
      >
        {label}
      </Link>,
    )

    lastIndex = start + fullMatch.length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return <p>{nodes.length > 0 ? nodes : text}</p>
}
