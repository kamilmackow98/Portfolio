import { CSS, styled } from '@stitches/react'
import { ComponentPropsWithoutRef } from 'react'

export const LinkStyles: CSS = {
  color: 'var(--theme-primary)',
  position: 'relative',
  backgroundImage:
    'linear-gradient(to right, var(--theme-primary), var(--theme-primary))',
  backgroundPosition: 'bottom left',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '0% 1px',

  transition: 'background 500ms cubic-bezier(0.25, 1, 0.35, 1)',
  '&:hover, &:focus-visible': {
    backgroundSize: '100% 1px',
  },
}

const StyledLink = styled('a', LinkStyles)

interface Props extends ComponentPropsWithoutRef<'a'> {}

const Link = (props: Props) => {
  const { children, className, ...rest } = props

  return (
    <StyledLink
      className={className}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </StyledLink>
  )
}

export default Link
