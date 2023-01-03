import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'
import { CgFigma as FigmaIcon } from 'react-icons/cg'
import {
  FaGitAlt as GitIcon,
  FaNodeJs as NodeIcon,
  FaReact as ReactIcon,
  FaSass as SassIcon,
  FaSymfony as SymfonyIcon,
} from 'react-icons/fa'
import {
  SiJavascript as JavaScriptIcon,
  SiSvelte as SvelteIcon,
  SiTypescript as TypeScriptIcon,
  SiVuedotjs as VueIcon,
} from 'react-icons/si'
import Tool from './Tool'

const containerStyles = cx('flex flex-col', 'items-center justify-center')
const blockStyles = cx('peer rounded p-5 peer-first:ml-1.5 xxs:p-6')

export type ToolType = {
  id: string
  name: string
  icon: ReactNode
}

const tool: ToolType[] = [
  {
    id: 'react',
    name: 'React',
    icon: <ReactIcon size="100%" color="#80d4ff" />,
  },
  {
    id: 'vue',
    name: 'Vue',
    icon: <VueIcon size="100%" color="#80d4ff" />,
  },
  {
    id: 'svelte',
    name: 'Svelte',
    icon: <SvelteIcon size="100%" color="#80d4ff" />,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: <TypeScriptIcon size="100%" color="#80d4ff" />,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: <JavaScriptIcon size="100%" color="#80d4ff" />,
  },
  {
    id: 'node',
    name: 'Node',
    icon: <NodeIcon size="100%" color="#80d4ff" />,
  },
  {
    id: 'symfony',
    name: 'Symfony',
    icon: <SymfonyIcon size="100%" color="#80d4ff" />,
  },
  {
    id: 'scss',
    name: 'SCSS',
    icon: <SassIcon size="100%" color="#80d4ff" />,
  },
  {
    id: 'git',
    name: 'Git',
    icon: <GitIcon size="100%" color="#80d4ff" />,
  },
  {
    id: 'figma',
    name: 'Figma',
    icon: <FigmaIcon size="100%" color="#80d4ff" />,
  },
]

const Tools = () => {
  const renderToolsFirstRow = tool
    .slice(0, 3)
    .map((t) => <Tool className={blockStyles} key={t.id} {...t} />)

  const renderToolsSecondRow = tool
    .slice(3, 7)
    .map((t) => <Tool className={blockStyles} key={t.id} {...t} />)

  const renderToolsThirdRow = tool
    .slice(7, tool.length)
    .map((t) => <Tool className={blockStyles} key={t.id} {...t} />)

  return (
    <div id="about-tools" className={containerStyles}>
      <div className="flex">{renderToolsFirstRow}</div>
      <div className="mt-1.5 flex">{renderToolsSecondRow}</div>
      <div className="mt-1.5 flex">{renderToolsThirdRow}</div>
    </div>
  )
}

export default Tools
