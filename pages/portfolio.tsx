import CustomHead from '@atoms/CustomHead'
import ProjectCard from '@organisms/Portfolio/ProjectCard'
import { getProjects } from '@utils/mdx'
import { GetStaticProps, NextPage } from 'next'
import { Project } from 'types'
import styles from '@styles/pages/Portfolio.module.css'
import clsx from 'clsx'

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
      <div
        className={clsx(
          'before:hidden xl:before:block',
          'after:hidden xl:after:block',
          'page-container',
          styles.container,
        )}
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
