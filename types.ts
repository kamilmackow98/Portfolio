export type ProjectFrontMatter = {
  title: string
  tags: string[]
  excerpt: string
  date: string
  isPublished: boolean
  priority: number
}

export type Project = {
  frontmatter: ProjectFrontMatter
  slug: string
  code: string
}
