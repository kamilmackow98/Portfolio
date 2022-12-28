import { Tech } from '@components/pages/about/Tools'
import clsx from 'clsx'
import styles from './TechBlock.module.css'

interface Props extends Tech {}

const TechBlock = (props: Props) => {
  const { icon } = props

  return (
    <div className={clsx(styles.wrapper, 'peer rounded p-6 peer-first:ml-2')}>
      {icon}
    </div>
  )
}

export default TechBlock
