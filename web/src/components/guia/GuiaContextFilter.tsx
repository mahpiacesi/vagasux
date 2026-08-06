import { cn } from '@/lib/utils'

type GuiaContextFilterProps = {
  tags: string[]
  value: string | null
  onChange: (tag: string | null) => void
  className?: string
  /** Ex.: "Filtrar livros por contexto" */
  ariaLabel?: string
  /** Oculta o chip "Todos" (ex.: diretório de cursos). */
  showAllOption?: boolean
}

export function GuiaContextFilter({
  tags,
  value,
  onChange,
  className,
  ariaLabel = 'Filtrar por contexto',
  showAllOption = true,
}: GuiaContextFilterProps) {
  return (
    <div className={className}>
      <p className="text-xs font-bold tracking-[0.12em] text-neutral-400 uppercase">
        Contexto
      </p>
      <div
        className="mt-3 flex flex-wrap gap-2"
        role="group"
        aria-label={ariaLabel}
      >
        {showAllOption ? (
          <button
            type="button"
            aria-pressed={value === null}
            onClick={() => onChange(null)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-bold transition-colors',
              value === null
                ? 'border-brand-400 bg-brand-400 text-neutral-100 shadow-sm'
                : 'border-neutral-500/10 bg-neutral-100 text-neutral-500 hover:border-brand-300 hover:bg-brand-100/60 hover:text-brand-500',
            )}
          >
            Todos
          </button>
        ) : null}
        {tags.map((tag) => {
          const active = value === tag
          return (
            <button
              key={tag}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(active ? null : tag)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-bold transition-colors',
                active
                  ? 'border-brand-400 bg-brand-400 text-neutral-100 shadow-sm'
                  : 'border-neutral-500/10 bg-neutral-100 text-neutral-500 hover:border-brand-300 hover:bg-brand-100/60 hover:text-brand-500',
              )}
            >
              {tag}
            </button>
          )
        })}
      </div>
    </div>
  )
}
