import { Link } from 'react-router-dom'
import { Question } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { cn } from '@/lib/utils'

type GuiaFaqLinkProps = {
  className?: string
}

export function GuiaFaqLink({ className }: GuiaFaqLinkProps) {
  return (
    <Button asChild variant="guia-compact-outline" className={cn(className)}>
      <Link to={guiaRoutes.faq}>
        <Question size={18} weight="bold" aria-hidden />
        FAQ
      </Link>
    </Button>
  )
}
