import Nav from '@molecules/Nav'
import classNames from 'classnames'
import React, { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <main className="lg:container mt-28 md:mt-48 mx-auto">{children}</main>
    </>
  )
}

export default Layout
