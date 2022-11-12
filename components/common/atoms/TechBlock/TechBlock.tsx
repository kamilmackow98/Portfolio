import { Tech } from '@molecules/TechUsed'
import clsx from 'clsx'
import styles from './TechBlock.module.css'

interface Props extends Tech {}

const TechBlock = (props: Props) => {
  const { icon: Icon } = props

  const classes = clsx(
    styles['wrapper'],
    'p-6 rounded peer peer-first:ml-2',
  )

  return (
    <div className={classes}>
      <Icon size={36} color="#80d4ff" />
    </div>
  )
}

export default TechBlock
