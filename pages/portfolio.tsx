import ProjectCard from '@organisms/ProjectCard'
import { getProjects } from '@utils/mdx'
import { NextPage } from 'next'
import React from 'react'

const Portfolio: NextPage = ({ projects }: any) => {
  const renderProjects = projects.map((project: any) => (
    <ProjectCard key={project.slug} project={project} />
  ))

  return (
    <>
      <h2>Portfolio</h2>
      {renderProjects}
    </>
  )
}

export default Portfolio

export const getStaticProps = async () => {
  const projects = getProjects()

  return {
    props: {
      projects,
    },
  }
}
