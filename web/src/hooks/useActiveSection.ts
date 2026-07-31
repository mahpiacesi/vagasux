import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section != null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const nextId = visible[0]?.target.id
        if (nextId) setActiveId(nextId)
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0, 0.15, 0.35, 0.55],
      },
    )

    for (const section of sections) observer.observe(section)
    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
