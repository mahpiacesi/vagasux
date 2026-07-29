import { InstagramLogo, LinkedinLogo, X } from '@phosphor-icons/react'
import { Dialog } from 'radix-ui'
import type { Volunteer } from '@/data/volunteers'
import { volunteerProfiles } from '@/data/volunteerProfiles'
import { cn } from '@/lib/utils'

type VolunteerProfileDialogProps = {
  volunteer: Volunteer | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

function formatParagraphs(text: string) {
  if (!text.trim()) return null

  return text.split('\n').map((paragraph, index) => (
    <p key={index} className="leading-relaxed text-neutral-400">
      {paragraph}
    </p>
  ))
}

export function VolunteerProfileDialog({
  volunteer,
  open,
  onOpenChange,
}: VolunteerProfileDialogProps) {
  if (!volunteer) return null

  const profile = volunteerProfiles[volunteer.slug]
  const hasAbout = Boolean(profile?.about.trim())
  const rapidinhas = profile?.rapidinhas.filter((item) => item.trim()) ?? []

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-neutral-500/60 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={cn(
            'fixed top-1/2 left-1/2 z-50 flex max-h-[min(90vh,820px)] w-[min(calc(100vw-2rem),42rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-3xl border border-neutral-500/10 bg-neutral-100 shadow-[0_32px_80px_-24px_rgb(7_0_58_/_0.45)]',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          )}
        >
          <div className="relative w-full shrink-0 overflow-hidden bg-brand-100">
            {volunteer.photo ? (
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={volunteer.photo}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-500/75 via-neutral-500/15 to-transparent" />
              </div>
            ) : (
              <div className="flex aspect-[4/5] w-full max-h-[min(52vh,28rem)] items-center justify-center bg-gradient-to-br from-brand-100 to-complementary-100">
                <span className="text-6xl" aria-hidden>
                  {volunteer.emoji}
                </span>
              </div>
            )}

            <div
              className={cn(
                'px-6 pb-5',
                volunteer.photo ? 'absolute inset-x-0 bottom-0' : 'pt-6',
              )}
            >
              <div className="flex items-end justify-between gap-4">
                <div>
                  <Dialog.Title className="text-2xl font-black tracking-[-0.03em] text-neutral-100">
                    {volunteer.name}
                  </Dialog.Title>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {volunteer.roles.map((role) => (
                      <li
                        key={role}
                        className="rounded-full bg-neutral-100/15 px-2.5 py-0.5 text-[0.7rem] font-bold tracking-wide text-neutral-100 uppercase backdrop-blur-sm"
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-neutral-100/90 text-2xl shadow-sm backdrop-blur-sm"
                  aria-hidden
                >
                  {volunteer.emoji}
                </span>
              </div>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6">
            {hasAbout ? (
              <section>
                <h3 className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
                  Um pouco sobre mim
                </h3>
                <div className="mt-3 space-y-3 text-sm md:text-base">
                  {formatParagraphs(profile.about)}
                </div>
              </section>
            ) : null}

            {rapidinhas.length > 0 ? (
              <section className={hasAbout ? 'mt-8' : undefined}>
                <h3 className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
                  Rapidinhas
                </h3>
                <ul className="mt-3 space-y-3">
                  {rapidinhas.map((item, index) => (
                    <li
                      key={index}
                      className="rounded-2xl border border-neutral-500/10 bg-neutral-100 px-4 py-3 text-sm leading-relaxed text-neutral-400 md:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          {(volunteer.instagram || volunteer.linkedin) && (
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-neutral-500/10 px-6 py-4">
              <p className="text-sm font-bold text-neutral-500">Redes sociais</p>
              <div className="flex flex-wrap gap-2">
                {volunteer.instagram ? (
                  <a
                    href={volunteer.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Instagram de ${volunteer.name}`}
                    className="inline-flex size-10 items-center justify-center rounded-xl text-neutral-400 transition-colors hover:bg-brand-100 hover:text-brand-500"
                  >
                    <InstagramLogo size={20} weight="bold" aria-hidden />
                  </a>
                ) : null}
                {volunteer.linkedin ? (
                  <a
                    href={volunteer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${volunteer.name}`}
                    className="inline-flex size-10 items-center justify-center rounded-xl text-neutral-400 transition-colors hover:bg-brand-100 hover:text-brand-500"
                  >
                    <LinkedinLogo size={20} weight="bold" aria-hidden />
                  </a>
                ) : null}
              </div>
            </div>
          )}

          <Dialog.Close
            className="absolute top-4 right-4 inline-flex size-10 items-center justify-center rounded-xl bg-neutral-100/90 text-neutral-500 shadow-sm backdrop-blur-sm transition-colors hover:bg-neutral-100 hover:text-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
            aria-label="Fechar perfil"
          >
            <X size={18} weight="bold" aria-hidden />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
