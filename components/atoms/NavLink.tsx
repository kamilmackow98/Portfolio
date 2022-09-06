import Link from 'next/link'
import { ReactNode } from 'react'
import { UrlObject } from 'url'

interface NavLinkProps {
  href: string | UrlObject
  children?: ReactNode
}

function NavLink(props: NavLinkProps) {
  const { href, children } = props

  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  )
}

export default NavLink
