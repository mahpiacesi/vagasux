import { useEffect } from 'react'

const WALL_SRC =
  'https://embed.testimonial.to/w/vagasux?theme=light&card=base&loadMore=on&initialCount=4&autoPlay=off'

declare global {
  interface Window {
    iFrameResize?: (
      options: Record<string, unknown>,
      target: string,
    ) => void
  }
}

/** Embeds the VagasUX Wall of Love from testimonial.to */
export function TestimonialsWall() {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-testimonial-iframe-resizer]',
    )
    if (existing) {
      window.iFrameResize?.(
        { log: false, checkOrigin: false },
        '#testimonialto-vagasux',
      )
      return
    }

    const script = document.createElement('script')
    script.src = 'https://testimonial.to/js/iframeResizer.min.js'
    script.async = true
    script.dataset.testimonialIframeResizer = 'true'
    script.onload = () => {
      window.iFrameResize?.(
        { log: false, checkOrigin: false },
        '#testimonialto-vagasux',
      )
    }
    document.body.appendChild(script)
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <iframe
        id="testimonialto-vagasux"
        title="Depoimentos da comunidade VagasUX"
        src={WALL_SRC}
        loading="lazy"
        className="min-h-[28rem] w-full border-0"
      />
    </div>
  )
}
