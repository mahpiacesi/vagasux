import { Button } from '@/components/ui/button'

type LoadMoreProps = {
  shown: number
  total: number
  onLoadMore: () => void
}

export function LoadMore({ shown, total, onLoadMore }: LoadMoreProps) {
  const hasMore = shown < total

  return (
    <div className="mt-8 flex flex-col items-center gap-3 border-t border-border pt-8">
      <p className="text-sm text-muted-foreground" aria-live="polite">
        Mostrando <span className="font-bold text-foreground">{shown}</span> de{' '}
        <span className="font-bold text-foreground">{total}</span>
        {total === 1 ? ' vaga' : ' vagas'}
      </p>
      {hasMore ? (
        <Button type="button" size="lg" onClick={onLoadMore} className="px-6 font-bold">
          Ver mais vagas
        </Button>
      ) : total > 0 ? (
        <p className="text-xs font-semibold text-muted-foreground/70">
          Você viu todas as vagas deste filtro
        </p>
      ) : null}
    </div>
  )
}
