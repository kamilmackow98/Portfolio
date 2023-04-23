import NavLink from '@atoms/NavLink'
import { useNavigationContext } from '@context/NavigationContext'
import { mobileNavMotion } from '@utils/motionVariants'
import { cx } from 'class-variance-authority'
import { motion } from 'framer-motion'

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

const MobileMenu = () => {
  const { routes, setIsMenuOpen } = useNavigationContext()

  const handleOpen = () => {
    setIsMenuOpen((state) => !state)
  }

  const renderLinks = routes.map(({ path, title }, idx) => (
    <NavLink
      activeClassName="mobile-navigation__nav-link--active"
      className={navLinkClasses}
      onClick={handleOpen}
      href={path}
      key={idx}
    >
      {title}
    </NavLink>
  ))

  return (
    <motion.div
      className="mobile-navigation__links-container disco-bg"
      key="mobile-navigation"
      variants={mobileNavMotion}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container relative mx-auto">
        <button
          className={'mobile-navigation__links-close-btn min-h-[24px]'}
          onClick={handleOpen}
        >
          <CloseIcon />
          <span className={menuClasses}>Close</span>
        </button>
        <div className="mobile-navigation__links-wrapper mt-24">
          {renderLinks}
        </div>
      </div>
    </motion.div>
  )
}

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122.88 122.88"
    height={10}
    fill="#fff"
  >
    <path d="M6,6H6a20.53,20.53,0,0,1,29,0l26.5,26.49L87.93,6a20.54,20.54,0,0,1,29,0h0a20.53,20.53,0,0,1,0,29L90.41,61.44,116.9,87.93a20.54,20.54,0,0,1,0,29h0a20.54,20.54,0,0,1-29,0L61.44,90.41,35,116.9a20.54,20.54,0,0,1-29,0H6a20.54,20.54,0,0,1,0-29L32.47,61.44,6,34.94A20.53,20.53,0,0,1,6,6Z" />
  </svg>
)

export default MobileMenu
