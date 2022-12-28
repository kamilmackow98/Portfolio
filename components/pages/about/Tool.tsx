import { Tool } from './Tools'
import clsx from 'clsx'

interface Props extends Tool {}

const Tool = (props: Props) => {
  const { icon } = props

  return (
    <div className={clsx('peer rounded p-6 peer-first:ml-2', 'tool-block')}>
      {icon}
    </div>
  )
}

export default Tool
