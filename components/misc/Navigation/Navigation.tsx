import NavigationContext from '@context/NavigationContext'
import useNav from 'hooks/useNav'
import { Route } from 'types'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

const routes: Route[] = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/portfolio', title: 'Portfolio' },
  { path: '/contact', title: 'Contact' },
]

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useNav()
  const contextValue = { routes, isMenuOpen, setIsMenuOpen }

  return (
    <NavigationContext.Provider value={contextValue}>
      <header className="navigation__container">
        <span className="navigation__bg" />
        <span className="go-go-gadget" />

        <DesktopNavigation />
        <MobileNavigation />
      </header>
    </NavigationContext.Provider>
  )
}

export default Navigation
