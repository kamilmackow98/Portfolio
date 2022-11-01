import CustomHead from '@atoms/CustomHead'
import NavLink from '@atoms/NavLink'
import { getProject, getProjects } from '@utils/mdx'
import { getMDXComponent } from 'mdx-bundler/client'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useMemo } from 'react'
import { Project as ProjectType } from 'types'

interface Props extends ProjectType {}

const Project: NextPage<Props> = (project: Props) => {
  const { code, frontmatter } = project
  const { title, excerpt } = frontmatter

  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <CustomHead title={`${title} | Portfolio`} description={excerpt} />
      <h1>{title}</h1>
      <Component
        components={{
          NavLink,
        }}
      />
    </>
  )
}

export default Project

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context,
) => {
  const { params } = context

  if (params && params.slug && typeof params.slug === 'string') {
    const project = await getProject(params.slug)

    return {
      props: { ...project },
    }
  }

  return {
    notFound: true, // Should be OK - https://nextjs.org/docs/api-reference/data-fetching/get-static-props#notfound
  }
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getProjects().map(({ slug }) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}