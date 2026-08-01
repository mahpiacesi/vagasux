import { Outlet } from 'react-router-dom'
import { GuiaBreadcrumbs, type GuiaBreadcrumbItem } from '@/components/guia/GuiaBreadcrumbs'
import { useGuiaBreadcrumbs } from '@/components/guia/useGuiaBreadcrumbs'

function GuiaSubpageShell({
  breadcrumbs,
}: {
  breadcrumbs: GuiaBreadcrumbItem[]
}) {
  return (
    <div className="guia-subpage border-b border-neutral-500/10 bg-neutral-100">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-6 md:py-10">
        <GuiaBreadcrumbs items={breadcrumbs} />
        <Outlet />
      </div>
    </div>
  )
}

export function GuiaLayout() {
  const breadcrumbs = useGuiaBreadcrumbs()

  if (breadcrumbs.length === 0) {
    return <Outlet />
  }

  return <GuiaSubpageShell breadcrumbs={breadcrumbs} />
}
