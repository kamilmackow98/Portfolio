import { Tool } from '@components/pages/about/Tools'
import clsx from 'clsx'

interface Props extends Tool {}

const TechBlock = (props: Props) => {
  const { icon } = props

  return (
    <div className={clsx('peer rounded p-6 peer-first:ml-2', 'tool-block')}>
      {icon}
    </div>
  )
}

export default TechBlock
