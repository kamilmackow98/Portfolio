export type ProjectFrontMatter = {
  title: string
  link?: string
  tags: string[]
  excerpt: string
  date: string
  isPublished: boolean
  priority: number | undefined
}

export type Project = {
  frontmatter: ProjectFrontMatter
  slug: string
  code: string
}

export type Route = {
  path: string
  title: string
}
