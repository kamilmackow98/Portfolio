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
    <div key={project.slug}>
      <hr />
      <br />
      <ProjectCard key={project.slug} project={project} />
      <br />
      <br />
    </div>
  ))

  return (
    <>
      <CustomHead title='Portfolio' />
      <h2>Portfolio</h2>
      {renderProjects}
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
