import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function scrollToHash(hash: string) {
  const id = decodeURIComponent(hash.slice(1))
  const target = document.getElementById(id)

  if (target) {
    target.scrollIntoView({ behavior: 'instant', block: 'start' })
    return true
  }

  return false
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    if (hash) {
      const run = () => {
        if (!scrollToHash(hash)) {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        }
      }

      run()
      const timer = window.setTimeout(run, 0)

      return () => window.clearTimeout(timer)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
