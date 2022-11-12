import {
  FaReact as ReactIcon,
  FaSymfony as SymfonyIcon,
  FaNodeJs as NodeIcon,
  FaSass as SassIcon,
  FaGitAlt as GitIcon,
} from 'react-icons/fa'
import {
  SiVuedotjs as VueIcon,
  SiTypescript as TypeScriptIcon,
  SiJavascript as JavaScriptIcon,
  SiPhp as PhpIcon,
} from 'react-icons/si'
import { CgFigma as FigmaIcon } from 'react-icons/cg'
import { IconType } from 'react-icons'
import TechBlock from '@atoms/TechBlock/TechBlock'

export type Tech = {
  id: string
  name: string
  icon: IconType
}

const tech: Tech[] = [
  {
    id: 'react',
    name: 'React',
    icon: ReactIcon,
  },
  {
    id: 'vue',
    name: 'Vue',
    icon: VueIcon,
  },
  {
    id: 'symfony',
    name: 'Symfony',
    icon: SymfonyIcon,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: TypeScriptIcon,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    id: 'node',
    name: 'Node',
    icon: NodeIcon,
  },
  {
    id: 'php',
    name: 'PHP',
    icon: PhpIcon,
  },
  {
    id: 'scss',
    name: 'SCSS',
    icon: SassIcon,
  },
  {
    id: 'git',
    name: 'Git',
    icon: GitIcon,
  },
  {
    id: 'figma',
    name: 'Figma',
    icon: FigmaIcon,
  },
]

const TechUsed = () => {
  const renderTechFirstRow = tech
    .slice(0, 3)
    .map((t) => <TechBlock key={t.id} {...t} />)

  const renderTechSecondRow = tech
    .slice(3, 7)
    .map((t) => <TechBlock key={t.id} {...t} />)

  const renderTechThirdRow = tech
    .slice(7, tech.length)
    .map((t) => <TechBlock key={t.id} {...t} />)

  return (
    <div
      className="flex flex-col items-center justify-center overflow-hidden"
      id="tech"
    >
      <div className="flex">{renderTechFirstRow}</div>
      <div className="mt-2 flex">{renderTechSecondRow}</div>
      <div className="mt-2 flex">{renderTechThirdRow}</div>
    </div>
  )
}

export default TechUsed
