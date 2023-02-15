import DiscoLink from '@atoms/DiscoLink'
import NavLink from '@atoms/NavLink'
import { cx } from 'class-variance-authority'
import useScrollNav from 'hooks/useScrollNav'
import { useRef } from 'react'

const navClasses = cx('container', 'flex justify-between', 'mx-auto py-3')

const linkSpacingClasses = 'peer peer-first:ml-12'
// TODO : Move internal classes to NavLink component
const linkClasses = cx(
  'theme-font--heading font-text--sm font-light',
  'tracking-wider',
  'navigation__link',
  linkSpacingClasses,
)

const pagesLinks = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/portfolio', title: 'Portfolio' },
]

function Navigation() {
  const headerRef = useRef<HTMLElement>(null)
  useScrollNav(headerRef)

  const renderLinks = pagesLinks.map(({ path, title }, idx) => (
    <NavLink
      activeClassName="navigation__link--active"
      className={linkClasses}
      href={path}
      key={idx}
    >
      {title}
    </NavLink>
  ))

  return (
    <header ref={headerRef} id="navigation__container">
      <span className="navigation__bg" />
      <span className="go-go-gadget" />

      <nav className={navClasses}>
        <div className="flex items-center">
          <span id="navigation__logo" />
        </div>
        <div className="flex items-center">
          {renderLinks}

          <DiscoLink
            className={linkSpacingClasses}
            href="/contact"
            variant="blue"
            size="xs"
          >
            Contact
          </DiscoLink>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
