import DiscoLink from '@atoms/DiscoLink'
import NavLink from '@atoms/NavLink'
import { cx } from 'class-variance-authority'
import Link from 'next/link'

interface Props {
  routes: { path: string; title: string }[]
}

const linkSpacingClasses = cx('peer peer-first:ml-12')
// TODO : Move internal classes to NavLink component
const linkClasses = cx(
  'theme-font--heading font-text--sm font-light',
  'tracking-wider',
  'navigation__link',
  linkSpacingClasses,
)

const navClasses = cx(
  'hidden sm:flex justify-between',
  'mx-auto py-4',
  'container',
)

function DesktopNavigation(props: Props) {
  const { routes } = props

  const renderLinks = routes
    .filter(({ path }) => path !== '/contact')
    .map(({ path, title }, idx) => (
      <NavLink
        activeClassName="navigation__link--active"
        className={linkClasses}
        href={path}
        key={idx}
      >
        {title}
        <span className="navigation__link-underline" />
      </NavLink>
    ))

  return (
    <nav className={navClasses} id="desktop-navigation">
      <div className="flex w-full items-center">
        <Link
          className="navigation__logo peer mr-auto"
          scroll={false}
          tabIndex={-1}
          href="/"
        />

        {renderLinks}

        <DiscoLink
          className={linkSpacingClasses}
          rounded="tl-br"
          href="/contact"
          size="xxs"
        >
          Contact
        </DiscoLink>
      </div>
    </nav>
  )
}

export default DesktopNavigation
