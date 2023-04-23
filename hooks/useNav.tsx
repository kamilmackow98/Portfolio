import { useEffect, useState } from 'react'

const BREAKPOINT = 640 // Tailwind's "sm" breakpoint
const HEIGHT = 40

const SCROLL_CLASS = 'scroll'
const MC_HAMMER_CLASS = 'cant-touch-this'

function useNav() {
  const [isScrolling, setIsScrolling] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // TODO : Also change state on routeChange

  useEffect(() => {
    function updateNavigation() {
      const scrollOffset = window.scrollY
      const pageWidth = window.innerWidth

      if (!isScrolling) {
        // Mobile nav - instant background fill on scroll
        if (pageWidth < BREAKPOINT) {
          document.documentElement.classList.add(SCROLL_CLASS)
          setIsScrolling(true)
        }

        // Desktop nav - wait till scrollOffset >= height to fill the background
        if (pageWidth >= BREAKPOINT && scrollOffset >= HEIGHT) {
          document.documentElement.classList.add(SCROLL_CLASS)
          setIsScrolling(true)
        }
      }

      if (isScrolling && scrollOffset === 0) {
        document.documentElement.classList.remove(SCROLL_CLASS)
        setIsScrolling(false)
      }
    }

    window.addEventListener('scroll', updateNavigation)

    return () => {
      window.removeEventListener('scroll', updateNavigation)
    }
  }, [isScrolling])

  useEffect(() => {
    function handleResize() {
      if (isMenuOpen && window.innerWidth >= BREAKPOINT) {
        document.documentElement.classList.remove(MC_HAMMER_CLASS)
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.documentElement.classList.add(MC_HAMMER_CLASS)
    } else {
      document.documentElement.classList.remove(MC_HAMMER_CLASS)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen])

  return [isMenuOpen, setIsMenuOpen] as const
}

export default useNav
