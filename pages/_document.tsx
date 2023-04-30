import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="/assets/images/noisy-50.png" rel="preload" as="image" />
        <link href="/assets/images/logo-bodwars.svg" rel="preload" as="image" />
        <link href="/assets/images/funny-circle.svg" rel="preload" as="image" />
      </Head>
      <body>
        <div id="disco-bg" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
