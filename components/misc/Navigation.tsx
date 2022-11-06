import NoScrollLink from '@atoms/NoScrollLink'

function Navigation() {
  return (
    <nav>
      <div className="container mx-auto flex justify-between">
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
