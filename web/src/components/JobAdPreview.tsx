export function JobAdPreview() {
  return (
    <aside
      aria-label="Publicidade"
      className="rounded-2xl border border-neutral-200/80 bg-neutral-100 px-5 py-4 md:px-6"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
        Publicidade
      </p>
      <div className="mt-3 flex h-28 items-center justify-center rounded-xl bg-neutral-200/40 px-4">
        <p className="text-center text-sm text-neutral-400">
          O anúncio aparece neste espaço.
        </p>
      </div>
    </aside>
  )
}
