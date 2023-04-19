import { RefObject, useEffect, useState, useRef } from 'react'

function useNav(ref: RefObject<any>) {
  const [isOpen, setIsOpen] = useState(false)

  // TODO : Also change state on routeChange

  useEffect(() => {
    function updateNavigation() {
      const header = ref.current
      const height = 40

      const scrollOffset = window.scrollY

      if (!header?.classList.contains('scroll') && scrollOffset >= height) {
        document.documentElement.classList.add('scroll')
        header?.classList.add('scroll')
      }

      if (header?.classList.contains('scroll') && scrollOffset === 0) {
        document.documentElement.classList.remove('scroll')
        header?.classList.remove('scroll')
      }
    }

    window.addEventListener('scroll', updateNavigation)

    return () => {
      window.removeEventListener('scroll', updateNavigation)
    }
  }, [ref])

  useEffect(() => {
    function handleResize() {
      if (isOpen && window.innerWidth >= 640) {
        document.documentElement.classList.remove('cant-touch-this')
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.documentElement.classList.add('cant-touch-this')
    } else {
      document.documentElement.classList.remove('cant-touch-this')
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen])

  return { isOpen, setIsOpen }
}

export default useNav
