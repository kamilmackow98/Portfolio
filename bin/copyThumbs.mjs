import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const IMAGE_THUMB = 'thumbnail.jpg'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const sourceDir = path.join(__dirname, '../data/projects/')
const destinationDir = path.join(__dirname, '../public/static/projects/')
const slugsAndPaths = []

const projectsDir = fs.readdirSync(sourceDir)

if (fs.existsSync(sourceDir)) {
  projectsDir.forEach((dir) => {
    slugsAndPaths.push({
      slug: dir,
      sourcePath: path.join(sourceDir, dir, 'images'),
      destinationPath: path.join(destinationDir, dir),
    })
  })

  slugsAndPaths.forEach(({ sourcePath, destinationPath }) => {
    if (!fs.existsSync(sourcePath)) {
      fs.mkdirSync(sourcePath, { recursive: true })
    }

    if (!fs.existsSync(destinationPath)) {
      fs.mkdirSync(destinationPath, { recursive: true })
    }

    const thumbnailSourcePath = path.join(sourcePath, IMAGE_THUMB)
    const thumbnailDestinationPath = path.join(destinationPath, IMAGE_THUMB)

    if (fs.existsSync(thumbnailSourcePath)) {
      fs.copyFileSync(thumbnailSourcePath, thumbnailDestinationPath)
    }
  })
}
