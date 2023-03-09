import React, { ComponentPropsWithoutRef } from 'react'
import MdxImage from './MdxImage'

interface Props extends ComponentPropsWithoutRef<'p'> {}

const MdxParagraph = (props: Props) => {
  // Might be useful or I might just forget - SO LET'S KEEP IT
  // React.Children.forEach(props.children, (child) => {
  //   if (React.isValidElement(child) && child.type === MdxImage) {
  //     return <React.Fragment>{props.children}</React.Fragment>
  //   }
  // })

  if (
    React.isValidElement(props.children) &&
    props.children.type === MdxImage
  ) {
    return <>{props.children}</>
  }

  return <p {...props} />
}

export default MdxParagraph
