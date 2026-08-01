import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { GuiaGlossarioEntryArticle } from '@/components/guia/glossario/GuiaGlossarioEntryArticle'
import { Input } from '@/components/ui/input'
import {
  getGuiaGlossarioEntriesByCategory,
  guiaGlossarioCategories,
  searchGuiaGlossarioEntries,
  type GuiaGlossarioCategoryId,
} from '@/data/guiaGlossario'
import { cn } from '@/lib/utils'

function isCategoryId(value: string | null): value is GuiaGlossarioCategoryId {
  return (
    value !== null &&
    guiaGlossarioCategories.some((category) => category.id === value)
  )
}

export function GuiaGlossarioPageContent() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState('')

  const activeCategory = isCategoryId(searchParams.get('categoria'))
    ? searchParams.get('categoria')
    : null

  const entries = useMemo(() => {
    const searched = searchGuiaGlossarioEntries(query)
    if (!activeCategory) return searched
    return searched.filter((entry) => entry.categoryId === activeCategory)
  }, [query, activeCategory])

  function setCategory(categoryId: GuiaGlossarioCategoryId | null) {
    const next = new URLSearchParams(searchParams)
    if (categoryId) next.set('categoria', categoryId)
    else next.delete('categoria')
    setSearchParams(next, { replace: true })
  }

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (!hash) return

    const target = document.getElementById(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [entries])

  return (
    <div className="mt-8 max-w-2xl">
      <header>
        <h1 className="text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
          Glossário
        </h1>
        <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
          Termos, siglas e conceitos de Product Design explicados de forma
          simples. Use a busca ou pule direto para o termo que precisa.
        </p>
      </header>

      <div className="relative mt-8 max-w-md">
        <MagnifyingGlass
          size={18}
          weight="bold"
          className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-brand-400"
          aria-hidden
        />
        <Input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar termo…"
          className="h-12 rounded-xl border-neutral-500/15 bg-neutral-100 pl-11"
          aria-label="Buscar no glossário"
        />
      </div>

      <div
        role="tablist"
        aria-label="Categorias do glossário"
        className="mt-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === null}
          onClick={() => setCategory(null)}
          className={cn(
            'shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-colors',
            activeCategory === null
              ? 'border-brand-300 bg-brand-400 text-neutral-100'
              : 'border-neutral-500/10 bg-brand-100/30 text-neutral-500 hover:border-brand-200',
          )}
        >
          Todos
        </button>
        {guiaGlossarioCategories.map((category) => {
          const isSelected = activeCategory === category.id
          const count = getGuiaGlossarioEntriesByCategory(category.id).length

          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setCategory(category.id)}
              className={cn(
                'shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-colors',
                isSelected
                  ? 'border-brand-300 bg-brand-400 text-neutral-100'
                  : 'border-neutral-500/10 bg-brand-100/30 text-neutral-500 hover:border-brand-200',
              )}
            >
              <span aria-hidden>{category.emoji} </span>
              {category.title}
              {count > 0 ? (
                <span className="ml-1.5 opacity-80">({count})</span>
              ) : null}
            </button>
          )
        })}
      </div>

      {entries.length > 0 ? (
        <>
          <nav
            aria-label="Índice de termos"
            className="mt-8 flex flex-wrap gap-2"
          >
            {entries.map((entry) => (
              <a
                key={entry.id}
                href={`#${entry.id}`}
                className="inline-flex rounded-full border border-neutral-500/10 bg-neutral-100 px-3.5 py-2 text-sm font-bold text-neutral-500 transition-colors hover:border-brand-300 hover:bg-brand-100/40 hover:text-brand-500"
              >
                {entry.term}
              </a>
            ))}
          </nav>

          <div className="mt-12 space-y-12">
            {entries.map((entry) => (
              <GuiaGlossarioEntryArticle key={entry.id} entry={entry} />
            ))}
          </div>
        </>
      ) : (
        <p className="mt-8 rounded-2xl border border-dashed border-neutral-500/15 bg-brand-100/20 px-5 py-8 text-center text-sm text-neutral-400">
          Nenhum termo encontrado. Novos verbetes serão adicionados em breve.
        </p>
      )}
    </div>
  )
}
