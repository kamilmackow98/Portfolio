import { LinkStyles } from '@atoms/Link'
import { styled } from '@stitches/react'
import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

const StyledLink = styled(Link, LinkStyles)

interface Props extends LinkProps {
  className?: string
  children?: ReactNode
}

const InternalLink = (props: Props) => {
  const { className, children, ...rest } = props

  return (
    <StyledLink scroll={false} className={className} {...rest}>
      {children}
    </StyledLink>
  )
}

export default InternalLink
