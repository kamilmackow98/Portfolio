import NoScrollLink from '@atoms/NoScrollLink'
import clsx from 'clsx'

function Navigation() {
  return (
    <nav>
      <div className={clsx('container', 'flex justify-between', 'mx-auto')}>
        <div>Logo</div>
        <div className="flex">
          <NoScrollLink href="/">Home</NoScrollLink>
          <NoScrollLink href="/about">About</NoScrollLink>
          <NoScrollLink href="/portfolio">Portfolio</NoScrollLink>
          <div id="links-separator">...</div>
          <button>Contact</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
