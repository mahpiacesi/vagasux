import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type InstitutionalPageProps = {
  title: string
  lead?: string
  children: ReactNode
}

export function InstitutionalPage({
  title,
  lead,
  children,
}: InstitutionalPageProps) {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pt-12 pb-8 md:px-6 md:pt-16 md:pb-10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 -left-12 h-56 w-56 rounded-full bg-brand-200/35 blur-3xl" />
          <div className="absolute top-10 right-0 h-48 w-48 rounded-full bg-complementary-200/45 blur-3xl" />
        </div>
        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <h1 className="mural-fade max-w-2xl text-3xl font-black tracking-tight text-neutral-500 md:text-4xl">
            {title}
          </h1>
          {lead ? (
            <p className="mural-fade mural-fade-delay-1 mt-3 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
              {lead}
            </p>
          ) : null}
        </div>
      </section>

      <section className="px-5 pb-16 md:px-6">
        <div className="mural-fade mural-fade-delay-2 mx-auto max-w-3xl space-y-10 md:max-w-4xl">
          {children}
        </div>
      </section>
    </main>
  )
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4 text-base leading-relaxed text-neutral-400 md:text-[17px]">
      {children}
    </div>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xl font-black tracking-tight text-neutral-500 md:text-2xl">
      {children}
    </h2>
  )
}

const textLinkClass =
  'font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4 transition-colors hover:text-brand-400 hover:decoration-brand-300'

export function TextLink({
  href,
  children,
  external = true,
}: {
  href: string
  children: ReactNode
  external?: boolean
}) {
  if (!external) {
    return (
      <Link to={href} className={textLinkClass}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={textLinkClass}
    >
      {children}
    </a>
  )
}
