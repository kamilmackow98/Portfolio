import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import React from 'react'

interface ProjectPageProps {
  id: string
}

const Project: NextPage<ProjectPageProps> = ({
  id,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{id}</div>
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params

  return {
    props: {
      host: '',
    },
  }
}

export default Project
