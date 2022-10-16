import NavLink from '@atoms/NavLink'

function Nav() {
  return (
    <nav>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/portfolio">Portfolio</NavLink>
    </nav>
  )
}

export default Nav
