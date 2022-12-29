import { LinkStyles } from '@atoms/Link'
import NoScrollLink, { Props as NoScrollLinkProps } from '@atoms/NoScrollLink'
import { styled } from '@stitches/react'

const StyledLink = styled(NoScrollLink, LinkStyles)

interface Props extends NoScrollLinkProps {}

const InternalLink = (props: Props) => {
  const { className, children, ...rest } = props

  return (
    <StyledLink className={className} {...rest}>
      {children}
    </StyledLink>
  )
}

export default InternalLink
