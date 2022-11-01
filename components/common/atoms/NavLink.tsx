import Link from 'next/link'
import { ReactNode } from 'react'
import { UrlObject } from 'url'

interface Props {
  href: string | UrlObject
  children?: ReactNode
}

function NavLink(props: Props) {
  const { href, children } = props

  return (
    <Link scroll={false} href={href}>
      <a>{children}</a>
    </Link>
  )
}

export default NavLink
