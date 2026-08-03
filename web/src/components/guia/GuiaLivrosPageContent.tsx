import { useMemo, useState } from 'react'
import { GuiaBookCard } from '@/components/guia/GuiaBookCard'
import { GuiaLivrosContextFilter } from '@/components/guia/GuiaLivrosContextFilter'
import {
  filterGuiaBooksByContext,
  getGuiaBookContextTags,
  guiaBooks,
} from '@/data/guiaBooks'

type GuiaLivrosPageContentProps = {
  title: string
  description?: string
}

export function GuiaLivrosPageContent({
  title,
  description,
}: GuiaLivrosPageContentProps) {
  const [contextFilter, setContextFilter] = useState<string | null>(null)
  const contextTags = useMemo(() => getGuiaBookContextTags(), [])

  const filteredBooks = useMemo(
    () => filterGuiaBooksByContext(guiaBooks, contextFilter),
    [contextFilter],
  )

  const countLabel =
    contextFilter === null
      ? `${guiaBooks.length} livros curados`
      : `${filteredBooks.length} de ${guiaBooks.length} livros`

  return (
    <div className="mt-8">
      <header className="w-full">
        <h1 className="text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg md:whitespace-nowrap">
            {description}
          </p>
        ) : null}

        <p className="mt-4 text-sm font-semibold text-neutral-400">{countLabel}</p>
      </header>

      <GuiaLivrosContextFilter
        className="mt-8"
        tags={contextTags}
        value={contextFilter}
        onChange={setContextFilter}
      />

      {filteredBooks.length > 0 ? (
        <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredBooks.map((book) => (
            <li key={book.id}>
              <GuiaBookCard book={book} className="h-full" />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 rounded-2xl border border-dashed border-neutral-500/15 bg-brand-100/20 px-5 py-8 text-center text-sm text-neutral-400">
          Nenhum livro encontrado para este contexto.
        </p>
      )}
    </div>
  )
}
