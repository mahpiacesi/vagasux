type LoadMoreProps = {
  shown: number
  total: number
  onLoadMore: () => void
}

export function LoadMore({ shown, total, onLoadMore }: LoadMoreProps) {
  const hasMore = shown < total

  return (
    <div className="mt-8 flex flex-col items-center gap-3 border-t border-neutral-500/10 pt-8">
      <p className="text-sm text-neutral-400" aria-live="polite">
        Mostrando <span className="font-bold text-neutral-500">{shown}</span> de{' '}
        <span className="font-bold text-neutral-500">{total}</span>
        {total === 1 ? ' vaga' : ' vagas'}
      </p>
      {hasMore ? (
        <button
          type="button"
          onClick={onLoadMore}
          className="rounded-xl bg-brand-300 px-6 py-3 text-sm font-bold text-neutral-100 transition-colors hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
        >
          Ver mais vagas
        </button>
      ) : total > 0 ? (
        <p className="text-xs font-semibold text-neutral-300">Você viu todas as vagas deste filtro</p>
      ) : null}
    </div>
  )
}
