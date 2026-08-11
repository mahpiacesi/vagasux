import { Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Question } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { GuiaPlaceholder } from '@/components/guia/GuiaPlaceholder'
import { GuiaTemaUxPageContent } from '@/components/guia/GuiaTemaUxPageContent'
import { getGuiaTemaById } from '@/data/guia'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function GuiaTemaPage() {
  const { slug } = useParams<{ slug: string }>()
  const tema = slug ? getGuiaTemaById(slug) : undefined

  if (!tema) {
    return <Navigate to={guiaRoutes.home} replace />
  }

  if (tema.id === 'ui') {
    return (
      <>
        <GuiaTemaNavigation />
        <GuiaTemaUxPageContent />
      </>
    )
  }

  return (
    <>
      <GuiaTemaNavigation />
      <GuiaPlaceholder title={tema.title} icon={tema.emoji} />
    </>
  )
}

function GuiaTemaNavigation() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <Link
        to={guiaRoutes.home}
        className="inline-flex items-center gap-2 rounded-full bg-brand-400 px-4 py-2.5 text-sm font-bold text-neutral-100 transition-colors hover:bg-brand-500"
      >
        <ArrowLeft size={18} weight="bold" aria-hidden />
        Voltar ao Guia
      </Link>
      <Link
        to={guiaRoutes.faq}
        className="inline-flex items-center gap-2 rounded-full border border-neutral-500/10 bg-brand-100/30 px-4 py-2.5 text-sm font-bold text-neutral-500 transition-colors hover:border-brand-300 hover:bg-brand-100/60 hover:text-brand-500"
      >
        <Question size={18} weight="bold" aria-hidden />
        FAQ
      </Link>
    </div>
  )
}
