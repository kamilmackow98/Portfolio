import { AnchorHTMLAttributes } from 'react'
import styles from './Link.module.css'
import clsx from 'clsx'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link = (props: Props) => {
  const { children, className, ...rest } = props

  return (
    <a
      className={clsx(styles.wrapper, className)}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  )
}

export default Link
