import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, BookBookmark, MagnifyingGlass } from '@phosphor-icons/react'
import { GuiaFaqCategoryAccordion } from '@/components/guia/faq/GuiaFaqCategoryAccordion'
import { Input } from '@/components/ui/input'
import {
  getGuiaFaqItemById,
  groupGuiaFaqItemsByCategory,
  guiaFaqCategories,
  guiaFaqItems,
  searchGuiaFaqItems,
  type GuiaFaqCategoryId,
} from '@/data/guiaFaq'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { cn } from '@/lib/utils'

export function GuiaFaqPageContent() {
  const { hash } = useLocation()
  const [query, setQuery] = useState('')
  const [openCategories, setOpenCategories] = useState<Set<GuiaFaqCategoryId>>(
    () => new Set(),
  )
  const [scrollTargetId, setScrollTargetId] = useState<string | null>(null)

  const filteredItems = useMemo(() => searchGuiaFaqItems(query), [query])

  const itemsByCategory = useMemo(
    () => groupGuiaFaqItemsByCategory(filteredItems),
    [filteredItems],
  )

  const hasActiveSearch = query.trim().length > 0

  const openCategory = useCallback((categoryId: GuiaFaqCategoryId) => {
    setOpenCategories((current) => new Set(current).add(categoryId))
  }, [])

  const navigateToQuestion = useCallback(
    (itemId: string) => {
      const item = getGuiaFaqItemById(itemId)
      if (!item) return
      openCategory(item.categoryId)
      setScrollTargetId(itemId)
    },
    [openCategory],
  )

  useEffect(() => {
    if (!hasActiveSearch) return
    setOpenCategories(
      new Set<GuiaFaqCategoryId>(
        guiaFaqCategories
          .filter(
            (category) => (itemsByCategory.get(category.id)?.length ?? 0) > 0,
          )
          .map((category) => category.id),
      ),
    )
  }, [hasActiveSearch, itemsByCategory])

  useEffect(() => {
    if (hasActiveSearch) return
    setOpenCategories(new Set())
  }, [hasActiveSearch])

  useEffect(() => {
    const itemId = hash.replace('#', '')
    if (!itemId) return
    navigateToQuestion(itemId)
  }, [hash, navigateToQuestion])

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

  function toggleCategory(categoryId: GuiaFaqCategoryId) {
    setOpenCategories((current) => {
      const next = new Set(current)
      if (next.has(categoryId)) next.delete(categoryId)
      else next.add(categoryId)
      return next
    })
  }

  return (
    <div className="mt-8 w-full">
      <div className="flex flex-wrap items-center gap-3">
        <Link
          to={guiaRoutes.home}
          className={cn(
            'inline-flex items-center gap-2 rounded-full bg-brand-400 px-4 py-2.5 text-sm font-bold text-neutral-100 transition-colors hover:bg-brand-500',
          )}
        >
          <ArrowLeft size={18} weight="bold" aria-hidden />
          Voltar ao Guia
        </Link>
        <Link
          to={guiaRoutes.glossario}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-500/10 bg-brand-100/30 px-4 py-2.5 text-sm font-bold text-neutral-500 transition-colors hover:border-brand-300 hover:bg-brand-100/60 hover:text-brand-500"
        >
          <BookBookmark size={18} weight="bold" aria-hidden />
          Glossário
        </Link>
      </div>

      <header className="mt-8 w-full">
        <h1 className="text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
          FAQ
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-neutral-400 md:text-lg">
          Compilado da VagasUX com perguntas frequentes da comunidade sobre
          carreira, preparação, processos seletivos, formação e contratação.
          São {guiaFaqItems.length} respostas. Busque ou abra a categoria que
          precisa.
        </p>
      </header>

      <div className="relative mt-8 min-w-0 w-full max-w-md">
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
          placeholder="Buscar pergunta…"
          className="h-12 rounded-xl border-neutral-500/15 bg-neutral-100 pl-11"
          aria-label="Buscar na FAQ"
        />
      </div>

      {hasActiveSearch && filteredItems.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-neutral-500/15 bg-brand-100/20 px-5 py-8 text-center text-sm text-neutral-400">
          Nenhuma pergunta encontrada para essa busca.
        </p>
      ) : null}

      <div className="mt-10 space-y-4">
        {guiaFaqCategories.map((category) => {
          const items = itemsByCategory.get(category.id) ?? []

          return (
            <GuiaFaqCategoryAccordion
              key={category.id}
              category={category}
              items={items}
              isOpen={openCategories.has(category.id)}
              onToggle={() => toggleCategory(category.id)}
              onQuestionLinkClick={navigateToQuestion}
            />
          )
        })}
      </div>
    </div>
  )
}
