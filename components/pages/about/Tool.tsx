import { ToolType } from './Tools'
import clsx from 'clsx'
import React from 'react'

type Props = {} & ToolType & React.ComponentPropsWithoutRef<'div'>

const Tool = (props: Props) => {
  const { icon, className, ...rest } = props

  return (
    <div title={props.name} className={clsx('tool-block', className)} {...rest}>
      {icon}
    </div>
  )
}

export default Tool
