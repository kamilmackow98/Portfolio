import Head from 'next/head'
import React from 'react'

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
