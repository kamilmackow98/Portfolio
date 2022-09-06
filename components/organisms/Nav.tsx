import NavLink from '@atoms/NavLink'

function Nav() {
  return (
    <nav>
      <NavLink href="/">Yes</NavLink>
      <NavLink href="/about">No</NavLink>
    </nav>
  )
}

export default Nav
