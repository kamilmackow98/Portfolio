import fs from 'fs'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'

export const PROJECTS_PATH = path.join(process.cwd(), 'data/projects')

export const getFileSource = (fileName: string) => {
  return fs.readFileSync(path.join(PROJECTS_PATH, fileName), 'utf-8')
}

export const getProjects = () => {
  return fs
    .readdirSync(PROJECTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '')
      const source = getFileSource(fileName)
      const { data } = matter(source)

      return {
        frontmatter: data,
        slug: slug,
      }
    })
}

export const getProject = async (slug: string) => {
  const source = getFileSource(`${slug}.mdx`)

  const { code, frontmatter } = await bundleMDX({
    source: source,
    cwd: PROJECTS_PATH,
  })

  return {
    frontmatter,
    code,
  }
}
