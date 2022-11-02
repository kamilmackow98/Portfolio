import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface Props extends LinkProps {
  children?: ReactNode
  className?: string
}

const NoScrollLink = (props: Props) => {
  const { className, children } = props

  return (
    <Link scroll={false} {...props}>
      <a className={className}>{children}</a>
    </Link>
  )
}

export default NoScrollLink
