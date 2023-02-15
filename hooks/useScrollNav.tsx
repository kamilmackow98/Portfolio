import { RefObject, useEffect } from 'react'

function useScrollNav(ref: RefObject<any>) {
  useEffect(() => {
    function updateNavigation() {
      const header = ref.current
      const height = 40

      const scrollOffset = window.scrollY

      if (!header?.classList.contains('scroll') && scrollOffset >= height) {
        header?.classList.add('scroll')
      }

      if (header?.classList.contains('scroll') && scrollOffset === 0) {
        header?.classList.remove('scroll')
      }
    }

    window.addEventListener('scroll', updateNavigation)

    return () => {
      window.removeEventListener('scroll', updateNavigation)
    }
  }, [ref])
}

export default useScrollNav
