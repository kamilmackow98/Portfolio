import Layout from '@components/misc/Layout'
import '@styles/main.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Hind_Madurai, Kanit } from 'next/font/google'

const headingFont = Kanit({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

const readingFont = Hind_Madurai({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual' // Prevents scrolls jumps
    }
  }, [])

  useEffect(() => {
    router.beforePopState((state) => {
      state.options.scroll = false
      return true
    })
  }, [router])

  return (
    <Layout>
      <style jsx global>
        {`
          :root {
            --theme-font--heading: ${headingFont.style.fontFamily}, sans-serif;
            --theme-font--reading: ${readingFont.style.fontFamily}, sans-serif;
          }
        `}
      </style>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
