import CustomHead from '@atoms/CustomHead'
import NoScrollLink from '@atoms/NoScrollLink'
import Tag from '@atoms/Tag/Tag'
import { getProject, getProjects } from '@utils/mdx'
import clsx from 'clsx'
import { getMDXComponent } from 'mdx-bundler/client'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useMemo } from 'react'
import { Project as ProjectType } from 'types'
import { BiArrowBack } from 'react-icons/bi'
import styles from '@styles/pages/Project.module.css'
import Image from '@atoms/Markdown/Image'
import Link from '@atoms/Link/Link'
import { FiExternalLink } from 'react-icons/fi'
import InternalLink from '@atoms/Markdown/InternalLink'

interface Props extends ProjectType {}

const components = {
  a: Link,
  InternalLink,
  Image,
}

const Project: NextPage<Props> = (project: Props) => {
  const { code, frontmatter } = project
  const { title, excerpt, tags, link } = frontmatter

  const Component = useMemo(() => getMDXComponent(code), [code])

  const renderTags = tags.map((tag, idx) => (
    <li className={clsx('peer peer-first:ml-2')} key={idx}>
      <Tag className="px-4 py-1.5">{tag}</Tag>
    </li>
  ))

  const renderLink = link ? (
    <a className="ml-2" href={link} target="_blank" rel="noopener noreferrer">
      <FiExternalLink size={20} className="text-white" />
    </a>
  ) : null

  return (
    <>
      <CustomHead title={`${title} | Portfolio`} description={excerpt} />
      <div id="project-page" className="page-container">
        <div className="flex items-center">
          <BiArrowBack size={18} />
          <NoScrollLink
            className={clsx(
              'theme-font--reading font-text--md font-medium',
              'tracking-wide',
              'ml-2',
            )}
            href="/portfolio"
          >
            All projects
          </NoScrollLink>
        </div>
        <div className={clsx('flex', 'items-center', 'mt-8')}>
          <h2
            className={clsx(
              'theme-font--heading font-text--xxl font-semibold',
              'tracking-wide text-white',
            )}
          >
            {title}
          </h2>
          {renderLink}
        </div>
        <ul className={clsx('flex items-center', 'mt-3')}>
          {renderTags}
          <span className={clsx(styles['tags-separator'], 'ml-8')} />
        </ul>
        <div className={clsx(styles['md-content'], 'mt-24')}>
          <Component components={components} />
        </div>
      </div>
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
