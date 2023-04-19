import useNav from 'hooks/useNav'
import { useRef } from 'react'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

const routes = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/portfolio', title: 'Portfolio' },
  { path: '/contact', title: 'Contact' },
]

function Navigation() {
  const headerRef = useRef<HTMLElement>(null)
  const { isOpen, setIsOpen } = useNav(headerRef)

  return (
    <header className="navigation__container" ref={headerRef}>
      <span className="navigation__bg" />
      <span className="go-go-gadget" />

      <DesktopNavigation routes={routes} />
      <MobileNavigation
        handleOpen={setIsOpen}
        routes={routes}
        isOpen={isOpen}
      />
    </header>
  )
}

export default Navigation
