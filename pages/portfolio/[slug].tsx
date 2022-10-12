import NavLink from '@atoms/NavLink'
import { getProject, getProjects } from '@utils/mdx'
import { getMDXComponent } from 'mdx-bundler/client'
import { NextPage } from 'next'
import { useMemo } from 'react'

const Project: NextPage = ({ code, frontmatter }: any) => {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <Component
        components={{
          NavLink,
        }}
      />
    </div>
  )
}

export default Project

export const getStaticProps = async ({ params }: any) => {
  const project = await getProject(params.slug)

  return {
    props: { ...project },
  }
}

export const getStaticPaths = async () => {
  const paths = getProjects().map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
