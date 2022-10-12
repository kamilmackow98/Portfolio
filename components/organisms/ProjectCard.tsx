import Link from 'next/link'

interface Props {
  project: any
}

const ProjectCard = (props: Props) => {
  const { project } = props
  const { frontmatter, slug } = project

  return (
    <>
      <h3>{frontmatter.title}</h3>
      <Link href={`portfolio/${slug}`}>Learn More</Link>
    </>
  )
}

export default ProjectCard
