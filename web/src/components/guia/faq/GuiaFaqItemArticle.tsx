import { Link } from 'react-router-dom'
import { GuiaFaqParagraph } from '@/components/guia/faq/GuiaFaqParagraph'
import type { GuiaFaqItem } from '@/data/guiaFaq'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function GuiaFaqItemArticle({ item }: { item: GuiaFaqItem }) {
  return (
    <article
      id={item.id}
      className="scroll-mt-32 border-t border-neutral-500/10 pt-6 first:border-t-0 first:pt-0"
    >
      <h3 className="text-lg leading-snug font-black text-neutral-500 md:text-xl">
        {item.question}
      </h3>
      <div className="mt-3 space-y-3 text-base leading-relaxed text-neutral-400">
        {item.answer.map((paragraph) => (
          <GuiaFaqParagraph key={paragraph.slice(0, 32)} text={paragraph} />
        ))}
      </div>
      {item.seeAlso && item.seeAlso.length > 0 ? (
        <p className="mt-4 text-sm text-neutral-400">
          <span className="font-bold text-neutral-500">No glossário: </span>
          {item.seeAlso.map((link, index) => (
            <span key={link.glossarioId}>
              {index > 0 ? ', ' : ''}
              <Link
                to={`${guiaRoutes.glossario}#${link.glossarioId}`}
                className="font-bold text-brand-500 transition-colors hover:text-brand-400"
              >
                {link.term}
              </Link>
            </span>
          ))}
        </p>
      ) : null}
    </article>
  )
}
