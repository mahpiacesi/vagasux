export function Marquee({
  items,
  className = '',
}: {
  items: string[]
  className?: string
}) {
  const row = [...items, ...items]

  return (
    <div
      className={`relative overflow-hidden border-y border-neutral-500/10 bg-neutral-500 text-neutral-100 ${className}`}
      aria-hidden
    >
      <div className="marquee-track flex w-max gap-10 py-3.5 whitespace-nowrap md:gap-14 md:py-4">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-10 text-xs font-bold tracking-[0.18em] uppercase md:gap-14 md:text-sm"
          >
            <span>{item}</span>
            <span className="text-complementary-300">●</span>
          </span>
        ))}
      </div>
    </div>
  )
}
