import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'

interface Props extends LinkProps {
  activeClassName?: string
  className?: string
  children?: ReactNode
}

const NavLink = (props: Props) => {
  const { asPath, isReady } = useRouter()

  const { className, activeClassName, children, ...rest } = props
  const [classNameState, setClassNameState] = useState(className)

  // TODO : Extract to a custom hook ?
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
    <Link scroll={false} {...rest}>
      <a className={classNameState}>{children}</a>
    </Link>
  )
}

export default NavLink
