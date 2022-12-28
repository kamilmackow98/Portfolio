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
  SiSvelte as SvelteIcon,
} from 'react-icons/si'
import { CgFigma as FigmaIcon } from 'react-icons/cg'
import TechBlock from '@atoms/TechBlock/TechBlock'
import clsx from 'clsx'
import { ReactNode } from 'react'

export type Tech = {
  id: string
  name: string
  icon: ReactNode
}

const tech: Tech[] = [
  {
    id: 'react',
    name: 'React',
    icon: <ReactIcon size={36} color="#80d4ff" />,
  },
  {
    id: 'vue',
    name: 'Vue',
    icon: <VueIcon size={36} color="#80d4ff" />,
  },
  {
    id: 'svelte',
    name: 'Svelte',
    icon: <SvelteIcon size={36} color="#80d4ff" />,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: <TypeScriptIcon size={36} color="#80d4ff" />,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: <JavaScriptIcon size={36} color="#80d4ff" />,
  },
  {
    id: 'node',
    name: 'Node',
    icon: <NodeIcon size={36} color="#80d4ff" />,
  },
  {
    id: 'symfony',
    name: 'Symfony',
    icon: <SymfonyIcon size={36} color="#80d4ff" />,
  },
  {
    id: 'scss',
    name: 'SCSS',
    icon: <SassIcon size={36} color="#80d4ff" />,
  },
  {
    id: 'git',
    name: 'Git',
    icon: <GitIcon size={36} color="#80d4ff" />,
  },
  {
    id: 'figma',
    name: 'Figma',
    icon: <FigmaIcon size={36} color="#80d4ff" />,
  },
]

const Tools = () => {
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
      className={clsx(
        'flex flex-col',
        'items-center justify-center',
        'overflow-hidden',
      )}
      id="tech"
    >
      <div className="flex">{renderTechFirstRow}</div>
      <div className="mt-2 flex">{renderTechSecondRow}</div>
      <div className="mt-2 flex">{renderTechThirdRow}</div>
    </div>
  )
}

export default Tools
