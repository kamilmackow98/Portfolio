import DiscoLink from '@atoms/DiscoLink'
import NavLink from '@atoms/NavLink'
import clsx from 'clsx'

function Navigation() {
  return (
    <header>
      <nav
        className={clsx(
          'container',
          'flex justify-between',
          'mx-auto mt-4 py-3',
        )}
      >
        <div className="flex items-center">
          <span id="navigation__logo" />
          <span id="navigation__name" />
        </div>
        <div className="flex items-center">
          <NavLink
            activeClassName="navigation__link--active"
            className={clsx(
              'navigation__link',
              'theme-font--heading font-text--md font-light',
              'tracking-wide',
              'peer',
            )}
            href="/"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="navigation__link--active"
            className={clsx(
              'navigation__link',
              'theme-font--heading font-text--md font-light',
              'tracking-wide',
              'peer peer-first:ml-10',
            )}
            href="/about"
          >
            About
          </NavLink>
          <NavLink
            activeClassName="navigation__link--active"
            className={clsx(
              'navigation__link',
              'theme-font--heading font-text--md font-light',
              'tracking-wide',
              'peer peer-first:ml-10',
            )}
            href="/portfolio"
          >
            Portfolio
          </NavLink>
          <DiscoLink
            className={clsx('px-6 py-3', 'peer peer-first:ml-10')}
            href="/contact"
            variant="blue"
          >
            Contact
          </DiscoLink>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
