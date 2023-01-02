import Head from 'next/head'

interface Props {
  description?: string
  title: string
}

const CustomHead = (props: Props) => {
  const { title, description } = props

  return (
    <Head>
      <title>{title}</title>
      {description ? (
        <meta name="description" content={description}></meta>
      ) : null}
    </Head>
  )
}

export default CustomHead
