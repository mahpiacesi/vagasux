import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { GuiaGlossarioCategoryAccordion } from '@/components/guia/glossario/GuiaGlossarioCategoryAccordion'
import { Input } from '@/components/ui/input'
import {
  getGuiaGlossarioEntryById,
  groupGuiaGlossarioEntriesByCategory,
  guiaGlossarioCategories,
  guiaGlossarioSortModeLabels,
  parseGuiaGlossarioSortMode,
  searchGuiaGlossarioEntries,
  type GuiaGlossarioCategoryId,
  type GuiaGlossarioSortMode,
} from '@/data/guiaGlossario'
import { cn } from '@/lib/utils'

function isCategoryId(value: string | null): value is GuiaGlossarioCategoryId {
  return (
    value !== null &&
    guiaGlossarioCategories.some((category) => category.id === value)
  )
}

export function GuiaGlossarioPageContent() {
  const { hash } = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [openCategories, setOpenCategories] = useState<
    Set<GuiaGlossarioCategoryId>
  >(() => new Set())
  const [scrollTargetId, setScrollTargetId] = useState<string | null>(null)

  const categoriaParam = searchParams.get('categoria')
  const activeCategoryFilter = isCategoryId(categoriaParam)
    ? categoriaParam
    : null
  const sortMode = parseGuiaGlossarioSortMode(searchParams.get('ordem'))

  const filteredEntries = useMemo(() => {
    const searched = searchGuiaGlossarioEntries(query, sortMode)
    if (!activeCategoryFilter) return searched
    return searched.filter((entry) => entry.categoryId === activeCategoryFilter)
  }, [query, activeCategoryFilter, sortMode])

  const entriesByCategory = useMemo(
    () => groupGuiaGlossarioEntriesByCategory(filteredEntries, sortMode),
    [filteredEntries, sortMode],
  )

  const visibleCategories = guiaGlossarioCategories

  const hasActiveSearch = query.trim().length > 0

  const openCategory = useCallback((categoryId: GuiaGlossarioCategoryId) => {
    setOpenCategories((current) => new Set(current).add(categoryId))
  }, [])

  const navigateToTerm = useCallback(
    (termId: string) => {
      const entry = getGuiaGlossarioEntryById(termId)
      if (!entry) return
      openCategory(entry.categoryId)
      setScrollTargetId(termId)
    },
    [openCategory],
  )

  useEffect(() => {
    if (!hasActiveSearch) return
    setOpenCategories(
      new Set<GuiaGlossarioCategoryId>(
        guiaGlossarioCategories
          .filter(
            (category) => (entriesByCategory.get(category.id)?.length ?? 0) > 0,
          )
          .map((category) => category.id),
      ),
    )
  }, [hasActiveSearch, entriesByCategory])

  useEffect(() => {
    if (activeCategoryFilter) return
    if (hasActiveSearch) return
    setOpenCategories(new Set())
  }, [activeCategoryFilter, hasActiveSearch])

  useEffect(() => {
    const termId = hash.replace('#', '')
    if (!termId) return
    navigateToTerm(termId)
  }, [hash, navigateToTerm])

  useEffect(() => {
    if (!scrollTargetId) return

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(scrollTargetId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      setScrollTargetId(null)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [scrollTargetId, openCategories])

  function setSortMode(nextSortMode: GuiaGlossarioSortMode) {
    const next = new URLSearchParams(searchParams)
    if (nextSortMode === 'recomendada') next.delete('ordem')
    else next.set('ordem', nextSortMode)
    setSearchParams(next, { replace: true })
  }

  function setCategoryFilter(categoryId: GuiaGlossarioCategoryId | null) {
    const next = new URLSearchParams(searchParams)
    if (categoryId) next.set('categoria', categoryId)
    else next.delete('categoria')
    setSearchParams(next, { replace: true })
  }

  function toggleCategory(categoryId: GuiaGlossarioCategoryId) {
    setOpenCategories((current) => {
      const next = new Set(current)
      if (next.has(categoryId)) next.delete(categoryId)
      else next.add(categoryId)
      return next
    })
  }

  return (
    <div className="mt-8 w-full">
      <header className="max-w-3xl">
        <h1 className="text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
          Glossário
        </h1>
        <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
          Termos, siglas e conceitos de Product Design explicados de forma
          simples. Busque um termo ou abra a categoria que precisa.
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

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-neutral-400">
          {sortMode === 'recomendada'
            ? 'Ordem sugerida para quem está começando.'
            : 'Termos em ordem alfabética.'}
        </p>
        <div
          role="group"
          aria-label="Ordenar termos"
          className="inline-flex rounded-full border border-neutral-500/10 bg-brand-100/20 p-1"
        >
          {(['recomendada', 'alfabetica'] as const).map((mode) => {
            const isSelected = sortMode === mode

            return (
              <button
                key={mode}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSortMode(mode)}
                className={cn(
                  'rounded-full px-3.5 py-1.5 text-sm font-bold transition-colors',
                  isSelected
                    ? 'bg-brand-400 text-neutral-100'
                    : 'text-neutral-500 hover:text-brand-500',
                )}
              >
                {guiaGlossarioSortModeLabels[mode]}
              </button>
            )
          })}
        </div>
      </div>

      <div
        role="tablist"
        aria-label="Filtrar categorias"
        className="mt-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategoryFilter === null}
          onClick={() => setCategoryFilter(null)}
          className={cn(
            'shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-colors',
            activeCategoryFilter === null
              ? 'border-brand-300 bg-brand-400 text-neutral-100'
              : 'border-neutral-500/10 bg-brand-100/30 text-neutral-500 hover:border-brand-200',
          )}
        >
          Todas
        </button>
        {guiaGlossarioCategories.map((category) => {
          const count = entriesByCategory.get(category.id)?.length ?? 0
          const isSelected = activeCategoryFilter === category.id

          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setCategoryFilter(category.id)}
              className={cn(
                'shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-colors',
                isSelected
                  ? 'border-brand-300 bg-brand-400 text-neutral-100'
                  : 'border-neutral-500/10 bg-brand-100/30 text-neutral-500 hover:border-brand-200',
                count === 0 && !isSelected && 'opacity-50',
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

      {hasActiveSearch && filteredEntries.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-neutral-500/15 bg-brand-100/20 px-5 py-8 text-center text-sm text-neutral-400">
          Nenhum termo encontrado para essa busca.
        </p>
      ) : null}

      <div className="mt-10 space-y-4">
        {visibleCategories.map((category) => {
          const entries = entriesByCategory.get(category.id) ?? []

          return (
            <GuiaGlossarioCategoryAccordion
              key={category.id}
              category={category}
              entries={entries}
              sortMode={sortMode}
              isOpen={openCategories.has(category.id)}
              onToggle={() => toggleCategory(category.id)}
              onTermLinkClick={navigateToTerm}
            />
          )
        })}
      </div>
    </div>
  )
}
