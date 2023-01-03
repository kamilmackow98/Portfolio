import clsx from 'clsx'
import { ComponentPropsWithoutRef } from 'react'
import { ToolType } from './Tools'

type Props = {} & ToolType & ComponentPropsWithoutRef<'div'>

const Tool = (props: Props) => {
  const { icon, className, ...rest } = props

  return (
    <div title={props.name} className={clsx('tool-block', className)} {...rest}>
      {icon}
    </div>
  )
}

export default Tool
