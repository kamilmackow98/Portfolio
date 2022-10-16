import Nav from '@molecules/Nav'
import { pageMotion } from '@utils/motionVariants'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const { asPath } = useRouter()

  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <motion.main
          className="lg:container mt-28 md:mt-48 mx-auto"
          variants={pageMotion}
          key={asPath}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  )
}

export default Layout
