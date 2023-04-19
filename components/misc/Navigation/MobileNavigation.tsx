import NavLink from '@atoms/NavLink'
import { mobileNavMotion } from '@utils/motionVariants'
import { cx } from 'class-variance-authority'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import Portal from '../Portal'

interface Props {
  routes: { path: string; title: string }[]
  isOpen: boolean
  handleOpen: Function
}

const menuClasses = cx(
  'theme-font--heading text-white uppercase',
  'leading-relaxed tracking-widest',
  'ml-3',
)

const navLinkClasses = cx(
  'theme-font--heading font-medium',
  'text-white uppercase',
  'tracking-wider',
  'text-xl',
  'py-6',
  'mobile-navigation__nav-link',
)

function MobileNavigation(props: Props) {
  const { routes, isOpen, handleOpen: setIsOpen } = props

  const handleMenuClick = () => {
    setIsOpen((state: boolean) => !state)
  }

  const renderLinks = routes.map(({ path, title }, idx) => (
    <NavLink
      activeClassName="mobile-navigation__nav-link--active"
      className={navLinkClasses}
      onClick={handleMenuClick}
      href={path}
      key={idx}
    >
      {title}
    </NavLink>
  ))

  const renderWrapper = isOpen ? (
    <motion.div
      className="mobile-navigation__links-container disco-bg"
      key="mobile-navigation"
      variants={mobileNavMotion}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <span className="go-go-gadget" />
      <div className="container relative mx-auto">
        <button
          className={'mobile-navigation__links-close-btn min-h-[24px]'}
          onClick={handleMenuClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 122.88"
            height={10}
            fill="#fff"
          >
            <path d="M6,6H6a20.53,20.53,0,0,1,29,0l26.5,26.49L87.93,6a20.54,20.54,0,0,1,29,0h0a20.53,20.53,0,0,1,0,29L90.41,61.44,116.9,87.93a20.54,20.54,0,0,1,0,29h0a20.54,20.54,0,0,1-29,0L61.44,90.41,35,116.9a20.54,20.54,0,0,1-29,0H6a20.54,20.54,0,0,1,0-29L32.47,61.44,6,34.94A20.53,20.53,0,0,1,6,6Z" />
          </svg>
          <span className={menuClasses}>Close</span>
        </button>
        <div className="mobile-navigation__links-wrapper mt-24">
          {renderLinks}
        </div>
      </div>
    </motion.div>
  ) : null

  return (
    <nav id="mobile-navigation" className="container mx-auto py-4 sm:hidden">
      <div className="flex min-h-[2rem] items-center">
        <Link
          className="navigation__logo mr-auto"
          scroll={false}
          tabIndex={-1}
          href="/"
        />

        <button onClick={handleMenuClick} className="mobile-navigation__menu">
          <span className="mobile-navigation__kebab">
            <span />
            <span />
            <span />
          </span>

          <span className={menuClasses}>Menu</span>
        </button>
      </div>

      <Portal>
        <AnimatePresence mode="wait">{renderWrapper}</AnimatePresence>
      </Portal>
    </nav>
  )
}

export default MobileNavigation
