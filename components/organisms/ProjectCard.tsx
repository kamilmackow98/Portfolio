import Link from 'next/link'
import { Project } from 'types'

interface Props {
  project: Omit<Project, 'code'>
}

const ProjectCard = ({ project }: Props) => {
  const { frontmatter, slug } = project

  return (
    <>
      <h3>{frontmatter.title}</h3>
      <Link href={`portfolio/${slug}`}>Learn More</Link>
    </>
  )
}

export default ProjectCard
