import { Button } from '@/components/ui/button'

type LoadMoreProps = {
  shown: number
  total: number
  onLoadMore: () => void
}

export function LoadMore({ shown, total, onLoadMore }: LoadMoreProps) {
  const hasMore = shown < total

  return (
    <div className="flex flex-col items-center gap-4 pt-10">
      <p className="text-sm text-neutral-400" aria-live="polite">
        Mostrando <span className="font-black text-neutral-500">{shown}</span> de{' '}
        <span className="font-black text-neutral-500">{total}</span>
        {total === 1 ? ' vaga' : ' vagas'}
      </p>
      {hasMore ? (
        <Button
          type="button"
          size="lg"
          onClick={onLoadMore}
          className="h-12 rounded-xl px-8 text-base font-black"
        >
          Ver mais vagas
        </Button>
      ) : total > 0 ? (
        <p className="text-xs font-semibold text-neutral-400/80">
          Você viu todas as vagas deste filtro
        </p>
      ) : null}
    </div>
  )
}
