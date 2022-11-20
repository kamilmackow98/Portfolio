import Layout from '@components/misc/Layout'
import '@styles/main.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

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
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
