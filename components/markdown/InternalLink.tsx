import { LinkStyles } from '@atoms/Link'
import { styled } from '@stitches/react'
import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

const StyledLink = styled('a', LinkStyles)

interface Props extends LinkProps {
  className?: string
  children?: ReactNode
}

const InternalLink = (props: Props) => {
  const { className, children, ...rest } = props

  return (
    <Link scroll={false} passHref {...rest}>
      <StyledLink className={className}>{children}</StyledLink>
    </Link>
  )
}

export default InternalLink
