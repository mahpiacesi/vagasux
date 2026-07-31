import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useScrollReveal } from '@/hooks/useScrollReveal'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
  as?: 'div' | 'section' | 'li' | 'article'
}

export function ScrollReveal({
  children,
  className,
  delayMs = 0,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const { ref, visible } = useScrollReveal<HTMLElement>()

  return (
    <Tag
      ref={ref as never}
      className={cn('guilda-reveal', visible && 'guilda-reveal--visible', className)}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </Tag>
  )
}
