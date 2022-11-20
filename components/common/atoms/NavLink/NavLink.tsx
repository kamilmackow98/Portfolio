import NoScrollLink, { Props as NoScrollLinkProps } from '@atoms/NoScrollLink'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'

interface Props extends NoScrollLinkProps {
  activeClassName?: string
}

const NavLink = (props: Props) => {
  const { asPath, isReady } = useRouter()

  const { className, activeClassName, children, ...rest } = props
  const [classNameState, setClassNameState] = useState(className)

  useEffect(() => {
    if (isReady) {
      const linkPathname = new URL(
        (rest.as || rest.href) as string,
        location.href,
      ).pathname
      const activePathname = new URL(asPath, location.href).pathname
      // Hack to detect nested active routes
      const isNestedActivePathname =
        linkPathname !== '/'
          ? activePathname.substring(1).startsWith(linkPathname.substring(1))
          : false

      const newClassName =
        linkPathname === activePathname || isNestedActivePathname
          ? `${className} ${activeClassName}`.trim()
          : className

      if (newClassName !== classNameState) {
        setClassNameState(newClassName)
      }
    }
  }, [
    isReady,
    rest.as,
    rest.href,
    asPath,
    className,
    activeClassName,
    classNameState,
  ])

  return (
    <NoScrollLink className={clsx(classNameState)} {...rest}>
      {children}
    </NoScrollLink>
  )
}

export default NavLink
