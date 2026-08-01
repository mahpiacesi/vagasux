import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

const inlineLinkPattern = /\[([^\]]+)\]\(([^)]+)\)/g
const linkClassName =
  'font-bold text-brand-500 transition-colors hover:text-brand-400'

function FaqInlineLink({ href, label }: { href: string; label: string }) {
  const isExternal = /^https?:\/\//i.test(href)

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        {label}
      </a>
    )
  }

  return (
    <Link to={href} className={linkClassName}>
      {label}
    </Link>
  )
}

export function GuiaFaqParagraph({ text }: { text: string }) {
  const nodes: ReactNode[] = []
  let lastIndex = 0

  for (const match of text.matchAll(inlineLinkPattern)) {
    const [fullMatch, label, href] = match
    const start = match.index ?? 0

    if (start > lastIndex) {
      nodes.push(text.slice(lastIndex, start))
    }

    nodes.push(<FaqInlineLink key={start} href={href} label={label} />)

    lastIndex = start + fullMatch.length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return <p>{nodes.length > 0 ? nodes : text}</p>
}
