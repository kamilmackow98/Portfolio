import Head from 'next/head'

interface Props {
  title: string
  description?: string
}

const CustomHead = (props: Props) => {
  const { title, description } = props

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description}></meta>}
    </Head>
  )
}

export default CustomHead
