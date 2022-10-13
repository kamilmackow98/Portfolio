import fs from 'fs'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'
import { Project, ProjectFrontMatter } from 'types'

export const PROJECTS_PATH = path.join(process.cwd(), 'data/projects')

export const getFileSource = (fileName: string): string => {
  return fs.readFileSync(path.join(PROJECTS_PATH, fileName), 'utf-8')
}

// No need to get all the content from Markdown file
// So we remove the 'code' property (corresponds to the file's content)
export const getProjects = (): Omit<Project, 'code'>[] => {
  return fs
    .readdirSync(PROJECTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '')
      const source = getFileSource(fileName)
      const { data } = matter(source) // Data = metadata from MDX

      return {
        frontmatter: data as ProjectFrontMatter,
        slug: slug,
      }
    })
}

export const getProject = async (slug: string): Promise<Project> => {
  const source = getFileSource(`${slug}.mdx`)

  const { code, frontmatter } = await bundleMDX<ProjectFrontMatter>({
    source: source,
    cwd: PROJECTS_PATH, // It's usually a good idea to provide the CWD
  })

  return {
    frontmatter,
    slug,
    code, // File's or Markdown's content
  }
}
