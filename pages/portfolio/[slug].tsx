import ExternalLink from '@atoms/Link'
import Image from '@components/markdown/Image'
import InternalLink from '@components/markdown/InternalLink'
import CustomHead from '@components/misc/CustomHead'
import Tag from '@components/pages/portfolio/Tag'
import { getProject, getProjects } from '@utils/mdx'
import { cx } from 'class-variance-authority'
import { getMDXComponent } from 'mdx-bundler/client'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { ParsedUrlQuery } from 'querystring'
import { useMemo } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { FiExternalLink } from 'react-icons/fi'
import { Project as ProjectType } from 'types'

interface Props extends ProjectType {}

const pageContainerClasses = cx(
  'flex flex-col',
  'my-20 lg:my-32',
  'page-container',
)

const backLinkClasses = cx(
  'theme-font--reading font-text--md font-medium',
  'flex self-start',
  'tracking-wide',
)

const titleClasses = cx(
  'theme-font--heading font-text--xxl font-semibold',
  'tracking-wide text-white',
)

const components = {
  a: ExternalLink,
  InternalLink,
  img: Image as React.ComponentType<{}>,
}

const Project: NextPage<Props> = (project: Props) => {
  const { code, frontmatter } = project
  const { title, excerpt, tags, link } = frontmatter

  const Component = useMemo(() => getMDXComponent(code), [code])

  const renderBackLink = (
    <Link scroll={false} className={backLinkClasses} href="/portfolio">
      <BiArrowBack size={18} />
      <span className="ml-2">All projects</span>
    </Link>
  )

  const renderWebsiteLink = link ? (
    <a className="ml-2" href={link} target="_blank" rel="noopener noreferrer">
      <FiExternalLink size={20} className="text-white" />
    </a>
  ) : null

  const renderTags = (
    <ul id="tags-container" className="mt-3 flex items-center">
      {tags.map((tag, idx) => (
        <li key={idx} className="peer peer-first:ml-2.5">
          <Tag>{tag}</Tag>
        </li>
      ))}

      <span id="tags-separator" className="ml-4" />
    </ul>
  )

  return (
    <>
      <CustomHead title={`${title} | Portfolio`} description={excerpt} />

      <div id="project-page" className={pageContainerClasses}>
        {renderBackLink}

        <div className="mt-8 flex items-center">
          <h2 className={titleClasses}>{title}</h2>
          {renderWebsiteLink}
        </div>

        {renderTags}

        <div id="markdown-content" className="mt-24">
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
