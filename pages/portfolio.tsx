import CustomHead from '@atoms/CustomHead'
import ProjectCard from '@organisms/ProjectCard'
import { getProjects } from '@utils/mdx'
import { GetStaticProps, NextPage } from 'next'
import { Project } from 'types'

interface Props {
  projects: Omit<Project, 'code'>[]
}

const Portfolio: NextPage<Props> = ({ projects }) => {
  const renderProjects = projects.map((project) => (
    <ProjectCard key={project.slug} project={project} />
  ))

  return (
    <>
      <CustomHead title="Portfolio" />
      <div id="portfolio-page" className="page-container">
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
