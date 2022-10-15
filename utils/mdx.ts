import fs from 'fs'
import grayMatter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'
import { Project, ProjectFrontMatter } from 'types'

export const PROJECTS_PATH = path.join(process.cwd(), 'data/projects')

export const getFileSource = (fileName: string): string => {
  return fs.readFileSync(path.join(PROJECTS_PATH, fileName), 'utf-8')
}

// User defined Type Guard
// Tips : https://stackoverflow.com/questions/43010737/way-to-tell-typescript-compiler-array-prototype-filter-removes-certain-types-fro
function isPublished<T>(argument: T | null): argument is T {
  return argument !== null
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
      const { data } = grayMatter(source) // Data = metadata from MDX

      const frontMatter = data as ProjectFrontMatter

      // Removes project / page from existence
      // If the 'isPublished' is not defined or is set to 'false'
      if (
        undefined === frontMatter.isPublished ||
        false === frontMatter.isPublished
      ) {
        return null
      }

      return {
        frontmatter: frontMatter,
        slug: slug,
      }
    })
    .filter(isPublished)
    .sort((a, b) => {
      const aPriority = a.frontmatter.priority
      const bPriority = b.frontmatter.priority

      // If aProject and bProject both don't have priority defined
      // Sort alphabetically
      if (
        'undefined' === typeof aPriority &&
        'undefined' === typeof bPriority
      ) {
        return a.frontmatter.title.localeCompare(b.frontmatter.title)
      }

      // If only one of the projects has priority defined, push it to the top

      if ('undefined' === typeof aPriority) {
        return 1
      }

      if ('undefined' === typeof bPriority) {
        return -1
      }

      return aPriority - bPriority
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
