import { ArrowUpRight, ChatCircleDots, X } from '@phosphor-icons/react'
import { Dialog } from 'radix-ui'
import type { Mentor } from '@/data/mentorship'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type MentorProfileDialogProps = {
  mentor: Mentor | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MentorProfileDialog({
  mentor,
  open,
  onOpenChange,
}: MentorProfileDialogProps) {
  if (!mentor) return null

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-neutral-500/60 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={cn(
            'fixed top-1/2 left-1/2 z-50 flex max-h-[min(90vh,46rem)] w-[min(calc(100vw-2rem),38rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-3xl border border-neutral-500/10 bg-neutral-100 shadow-[0_32px_80px_-24px_rgb(7_0_58_/_0.45)]',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          )}
        >
          <div className="relative flex min-h-56 items-end overflow-hidden bg-brand-100 px-6 py-5">
            {mentor.photo ? (
              <>
                <img src={mentor.photo} alt="" className="absolute inset-0 size-full object-cover" style={{ objectPosition: mentor.photoFocus }} />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-500/80 via-neutral-500/20 to-transparent" />
              </>
            ) : (
              <span className="absolute inset-0 flex items-center justify-center text-6xl" aria-hidden>{mentor.emoji}</span>
            )}
            <div className="relative">
              <Dialog.Title className="text-3xl font-black tracking-[-0.04em] text-neutral-100">{mentor.name}</Dialog.Title>
              <p className={`mt-2 text-sm font-bold ${mentor.available ? 'text-emerald-200' : 'text-neutral-200'}`}>{mentor.status}</p>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6">
            <section>
              <h3 className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">Temas para conversar</h3>
              {mentor.topics.length > 0 ? (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {mentor.topics.map((topic) => (
                    <li key={topic} className="rounded-full bg-brand-100 px-3 py-1.5 text-sm font-bold text-brand-500">{topic}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">Os temas desta pessoa mentora serão atualizados em breve.</p>
              )}
            </section>
          </div>

          <div className="flex shrink-0 items-center justify-between gap-4 border-t border-neutral-500/10 px-6 py-4">
            <p className="text-sm font-bold text-neutral-500">Contatar via</p>
            {mentor.available && mentor.contactUrl ? (
              <Button asChild variant="guia" className="h-10 rounded-xl px-4">
                <a href={mentor.contactUrl} target="_blank" rel="noopener noreferrer">
                  Conversar
                  <ChatCircleDots weight="bold" aria-hidden />
                  <ArrowUpRight weight="bold" aria-hidden />
                </a>
              </Button>
            ) : (
              <p className="text-sm text-neutral-400">Indisponível no momento</p>
            )}
          </div>

          <Dialog.Close className="absolute top-4 right-4 inline-flex size-10 items-center justify-center rounded-xl bg-neutral-100/90 text-neutral-500 shadow-sm backdrop-blur-sm transition-colors hover:bg-neutral-100 hover:text-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400" aria-label="Fechar perfil">
            <X size={18} weight="bold" aria-hidden />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
