import { AnimatePresence, motion } from 'framer-motion'
import { pageMotion } from '@utils/motionVariants'
import { useRouter } from 'next/router'
import Navigation from './Navigation'
import Footer from './Footer'
import { ReactNode } from 'react'

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
          className="container mt-28 md:mt-48 mx-auto"
          variants={pageMotion}
          key={asPath}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
          <Footer />
        </motion.main>
      </AnimatePresence>
    </>
  )
}

export default Layout
