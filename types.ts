export type ProjectFrontMatter = {
  title: string
  link?: string
  tags: string[]
  thumbnail: string
  excerpt: string
  date: string
  isPublished: boolean
  priority: number|undefined
}

export type Project = {
  frontmatter: ProjectFrontMatter
  slug: string
  code: string
}
