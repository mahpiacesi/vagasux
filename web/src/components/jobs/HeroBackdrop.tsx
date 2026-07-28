type HeroBackdropProps = {
  variant?: 'default' | 'curated'
}

export function HeroBackdrop({ variant = 'default' }: HeroBackdropProps) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-28 -left-20 h-[28rem] w-[28rem] rounded-full bg-brand-200/35 blur-3xl" />
      <div className="absolute top-32 -right-24 h-80 w-80 rounded-full bg-complementary-200/45 blur-3xl" />
      {variant === 'curated' ? (
        <>
          <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-highlight-200/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgb(36 46 144 / 0.1) 1px, transparent 0)',
              backgroundSize: '20px 20px',
            }}
          />
        </>
      ) : null}
    </div>
  )
}
