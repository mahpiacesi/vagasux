import type { ReactNode } from 'react'

type JobsListingSectionProps = {
  children: ReactNode
}

export function JobsListingSection({ children }: JobsListingSectionProps) {
  return (
    <section className="bg-gradient-to-b from-brand-100/35 via-neutral-100 to-neutral-100 px-5 pb-20 pt-8 md:px-6 md:pb-24 md:pt-10">
      <div className="mx-auto max-w-3xl md:max-w-4xl">{children}</div>
    </section>
  )
}
