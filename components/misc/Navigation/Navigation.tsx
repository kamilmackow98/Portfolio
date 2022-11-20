import DiscoLink from '@atoms/DiscoLink'
import NavLink from '@atoms/NavLink/NavLink'
import styles from './Navigation.module.css'
import clsx from 'clsx'

function Navigation() {
  // Possible implementation of sliding underline tab on active link
  // const handleClick = (e: React.MouseEvent<HTMLElement>) => {
  //   activeSliderRef.current!.style.transform = `translate3d(${e.currentTarget.offsetLeft}px, 0, 0)`
  //   activeSliderRef.current!.style.width = e.currentTarget.offsetWidth + 'px'
  // }

  // <span
  //   ref={activeSliderRef}
  //   style={{
  //     position: 'absolute',
  //     height: '1px',
  //     background: 'var(--theme-secondary)',
  //     transition: 'all 600ms ease',
  //     width: '100px',
  //     bottom: '0',
  //   }}
  // />

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
          <span className={styles.logo} />
          <span className={styles.name} />
        </div>
        <div className="flex items-center">
          <NavLink
            activeClassName={styles.active}
            className={clsx(
              styles['nav-link'],
              'theme-font--heading font-text--md font-light',
              'tracking-wide',
              'peer',
            )}
            href="/"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName={styles.active}
            className={clsx(
              styles['nav-link'],
              'theme-font--heading font-text--md font-light',
              'tracking-wide',
              'peer peer-first:ml-10',
            )}
            href="/about"
          >
            About
          </NavLink>
          <NavLink
            activeClassName={styles.active}
            className={clsx(
              styles['nav-link'],
              'theme-font--heading font-text--md font-light',
              'tracking-wide',
              'peer peer-first:ml-10',
            )}
            href="/portfolio"
          >
            Portfolio
          </NavLink>
          {/* <span className={clsx(styles.separator, 'peer peer-first:ml-10')} /> */}
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
