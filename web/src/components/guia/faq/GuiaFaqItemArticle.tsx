import type { GuiaFaqItem } from '@/data/guiaFaq'

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
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}
