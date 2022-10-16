import Link from 'next/link'
import { Project } from 'types'

interface Props {
  project: Omit<Project, 'code'>
}

const ProjectCard = ({ project }: Props) => {
  const { frontmatter, slug } = project
  const { title, excerpt, date } = frontmatter

  const renderTags = frontmatter.tags && (
    <ul>
      {frontmatter.tags.map((tag, idx) => (
        <li key={idx}>{tag}</li>
      ))}
    </ul>
  )

  return (
    <>
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: excerpt }} /> 
      {/* TODO : Improve this /\ */}
      {renderTags}
      <p>{date}</p>
      <Link href={`portfolio/${slug}`}>Learn More</Link>
    </>
  )
}

export default ProjectCard
