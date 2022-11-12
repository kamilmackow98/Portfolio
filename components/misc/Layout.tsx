import { AnimatePresence, motion } from 'framer-motion'
import { pageMotion } from '@utils/motionVariants'
import { useRouter } from 'next/router'
import Navigation from './Navigation'
import Footer from './Footer'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const { asPath } = useRouter()

  return (
    <>
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          className={clsx('container', 'mx-auto mt-28 md:mt-48')}
          variants={pageMotion}
          initial="initial"
          animate="animate"
          exit="exit"
          key={asPath}
        >
          {children}
          <Footer />
        </motion.main>
      </AnimatePresence>
    </>
  )
}

export default Layout
