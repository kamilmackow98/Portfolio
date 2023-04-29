import CustomHead from '@components/misc/CustomHead'
import ProjectCard from '@components/pages/portfolio/ProjectCard'
import { getProjects } from '@utils/mdx'
import { cx } from 'class-variance-authority'
import { GetStaticProps, NextPage } from 'next'
import { Project } from 'types'

interface Props {
  projects: Omit<Project, 'code'>[]
}

const cardStyles = cx(
  'peer peer-first:mt-24 peer-first:lg:mt-56',
  'sm:px-12 lg:px-0',
)

const Portfolio: NextPage<Props> = ({ projects }) => {
  const renderProjects = projects.map((project) => (
    <ProjectCard key={project.slug} project={project} className={cardStyles} />
  ))

  return (
    <>
      <CustomHead title="Portfolio" />

      <div
        className="page-container my-10 sm:my-20 lg:my-48"
        id="portfolio-page"
      >
        {renderProjects}
      </div>
    </>
  )
}

export default Portfolio

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = getProjects()

  return {
    props: {
      projects,
    },
  }
}
