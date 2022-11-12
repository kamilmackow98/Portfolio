import { Tech } from '@molecules/TechUsed'
import clsx from 'clsx'
import styles from './TechBlock.module.css'

interface Props extends Tech {}

const TechBlock = (props: Props) => {
  const { icon: Icon } = props

  return (
    <div className={clsx(styles.wrapper, 'peer rounded p-6 peer-first:ml-2')}>
      <Icon size={36} color="#80d4ff" />
    </div>
  )
}

export default TechBlock
