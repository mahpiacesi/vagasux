import { MagnifyingGlass } from '@phosphor-icons/react'
import { useId, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import {
  guiaSearchCategories,
  guiaSearchSuggestions,
} from '@/data/guia'
import { searchGuia } from '@/data/guiaSearchIndex'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { cn } from '@/lib/utils'

export function GuiaSearch() {
  const navigate = useNavigate()
  const inputId = useId()
  const listboxId = useId()
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)

  const suggestions = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return guiaSearchSuggestions.slice(0, 6)

    return guiaSearchSuggestions.filter((item) =>
      item.toLowerCase().includes(normalized),
    )
  }, [query])
  const results = useMemo(() => searchGuia(query), [query])
  const hasQuery = query.trim().length > 0

  function openAllResults() {
    if (query.trim()) navigate(`${guiaRoutes.home}/busca?q=${encodeURIComponent(query.trim())}`)
  }

  const showPanel = focused && (query.length > 0 || suggestions.length > 0)

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <label htmlFor={inputId} className="sr-only">
        Buscar no Guia do Product Designer
      </label>
      <div className="relative">
        <MagnifyingGlass
          size={20}
          weight="bold"
          className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-brand-400"
          aria-hidden
        />
        <Input
          id={inputId}
          type="search"
          role="combobox"
          aria-expanded={showPanel}
          aria-controls={listboxId}
          aria-autocomplete="list"
          placeholder="Buscar artigos, trilhas, ferramentas…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && query.trim()) {
              event.preventDefault()
              openAllResults()
            }
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => window.setTimeout(() => setFocused(false), 150)}
          className="h-14 rounded-2xl border-neutral-500/15 bg-neutral-100 pr-4 pl-12 text-base shadow-[0_16px_40px_-24px_rgb(7_0_58_/_0.35)] placeholder:text-neutral-300 focus-visible:border-brand-300 focus-visible:ring-brand-200/60 md:text-base"
        />
      </div>

      {showPanel ? (
        <div
          id={listboxId}
          role="listbox"
          className="absolute top-[calc(100%+0.5rem)] z-30 w-full rounded-2xl border border-neutral-500/10 bg-neutral-100 shadow-[0_24px_48px_-24px_rgb(7_0_58_/_0.35)]"
        >
          <div className="border-b border-neutral-500/8 px-4 py-3">
            <p className="text-[0.65rem] font-bold tracking-[0.16em] text-neutral-400 uppercase">
              {hasQuery ? 'Resultados' : 'Sugestões'}
            </p>
            <ul className="mt-2 space-y-1">
              {(hasQuery ? results : suggestions.map((title) => ({
                id: `suggestion-${title}`,
                title,
                category: 'Sugestão',
                to: '',
                keywords: title,
              }))).map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    role="option"
                    className="flex w-full rounded-xl px-3 py-2 text-left text-sm font-semibold text-neutral-500 transition-colors hover:bg-brand-100/70"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => hasQuery ? openAllResults() : setQuery(item.title)}
                  >
                    <span className="min-w-0"><span>{item.title}</span>{hasQuery && item.snippet ? <span className="mt-1 block text-xs font-medium leading-relaxed text-neutral-400">{item.snippet}</span> : null}</span>
                    {hasQuery ? <span className="ml-auto shrink-0 text-xs font-medium text-neutral-400">{item.category}</span> : null}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {guiaSearchCategories.map((category) => (
          <button
            key={category}
            type="button"
            disabled
            aria-disabled="true"
            title="Em breve"
            className={cn(
              'rounded-full border border-neutral-500/10 bg-neutral-100 px-3 py-1.5 text-xs font-bold text-neutral-400',
              'cursor-not-allowed opacity-70',
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
