export type ProjectFrontMatter = {
  title: string
}

export type Project = {
  frontmatter: ProjectFrontMatter
  slug: string
  code: string
}
