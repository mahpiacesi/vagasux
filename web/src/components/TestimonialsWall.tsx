import { communityTestimonials } from '@/data/communityTestimonials'

const WALL_ALL = 'https://testimonial.to/pt/vagasux/all'
const WALL_WRITE = 'https://testimonial.to/vagasux'

export function TestimonialsWall() {
  return (
    <div className="space-y-8">
      <ul className="grid gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-10">
        {communityTestimonials.map((item) => (
          <li key={item.name} className="flex flex-col gap-4">
            <blockquote className="relative pl-4 text-base leading-relaxed text-neutral-500 md:text-[17px]">
              <span
                aria-hidden
                className="absolute top-0 left-0 h-full w-0.5 rounded-full bg-complementary-300"
              />
              <span className="font-black text-complementary-400">“</span>
              {item.quote}
              <span className="font-black text-complementary-400">”</span>
            </blockquote>
            <div className="pl-4">
              {item.rating ? (
                <p
                  className="mb-1 text-xs tracking-wide text-complementary-400"
                  aria-label={`${item.rating} de 5 estrelas`}
                >
                  {'★'.repeat(item.rating)}
                </p>
              ) : null}
              <p className="text-sm font-bold text-neutral-500">{item.name}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
        <a
          href={WALL_ALL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-500 underline decoration-brand-200 underline-offset-4 transition-colors hover:text-brand-400"
        >
          Ver todos os relatos →
        </a>
        <a
          href={WALL_WRITE}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 underline decoration-neutral-200 underline-offset-4 transition-colors hover:text-brand-500"
        >
          Deixar o seu
        </a>
      </p>
    </div>
  )
}
