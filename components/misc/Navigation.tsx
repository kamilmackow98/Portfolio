import NavLink from '@atoms/NavLink'

function Navigation() {
  return (
    <nav>
      <div className="lg:container mx-auto flex justify-between">
        <div>Logo</div>
        <div className="flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <div id="links-separator">...</div>
          <button>Contact</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
