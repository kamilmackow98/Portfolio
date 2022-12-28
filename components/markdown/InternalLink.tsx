import NoScrollLink, { Props as NoScrollLinkProps } from '@atoms/NoScrollLink'
import styles from '@atoms/Link/Link.module.css'
import clsx from 'clsx'

interface Props extends NoScrollLinkProps {}

const InternalLink = (props: Props) => {
  const { className, children, ...rest } = props

  return (
    <NoScrollLink className={clsx(styles.wrapper, className)} {...rest}>
      {children}
    </NoScrollLink>
  )
}

export default InternalLink
