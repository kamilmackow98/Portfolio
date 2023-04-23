import { useNavigationContext } from '@context/NavigationContext'
import { cx } from 'class-variance-authority'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Portal from '../Portal'
import MobileMenu from './MobileMenu'

const menuClasses = cx(
  'theme-font--heading text-white uppercase',
  'leading-relaxed tracking-widest',
  'ml-3',
)

function MobileNavigation() {
  const { isMenuOpen, setIsMenuOpen } = useNavigationContext()

  const handleOpen = () => {
    setIsMenuOpen((state) => !state)
  }

  return (
    <nav id="mobile-navigation" className="container mx-auto py-4 sm:hidden">
      <div className="flex min-h-[2rem] items-center">
        <Link
          className="navigation__logo mr-auto"
          scroll={false}
          tabIndex={-1}
          href="/"
        />

        <button onClick={handleOpen} className="mobile-navigation__menu">
          <span className="mobile-navigation__kebab">
            <span />
            <span />
            <span />
          </span>

          <span className={menuClasses}>Menu</span>
        </button>
      </div>

      <Portal>
        <AnimatePresence mode="wait">
          {isMenuOpen ? <MobileMenu /> : null}
        </AnimatePresence>
      </Portal>
    </nav>
  )
}

export default MobileNavigation
