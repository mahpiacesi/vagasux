import { GuiaBookCard } from '@/components/guia/GuiaBookCard'
import { guiaBooks } from '@/data/guiaBooks'

type GuiaLivrosPageContentProps = {
  title: string
  description?: string
}

export function GuiaLivrosPageContent({
  title,
  description,
}: GuiaLivrosPageContentProps) {
  return (
    <div className="mt-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
            {description}
          </p>
        ) : null}

        <p className="mt-4 text-sm font-semibold text-neutral-400">
          {guiaBooks.length} livros curados
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {guiaBooks.map((book) => (
          <li key={book.id}>
            <GuiaBookCard book={book} className="h-full" />
          </li>
        ))}
      </ul>
    </div>
  )
}
