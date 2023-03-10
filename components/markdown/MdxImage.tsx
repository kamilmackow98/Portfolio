import NextImage, { ImageProps } from 'next/image'
import { useState } from 'react'

import BlurData from '@data/image/blur.json'

interface Props extends ImageProps {
  alt: string
}

const MdxImage = (props: Props) => {
  const [src, setSrc] = useState(props.src)
  const { alt, ...rest } = props

  function onError() {
    setSrc('/assets/images/picture-not-available.jpg')
  }

  return (
    <NextImage
      className="mx-auto lg:max-w-[40rem]"
      blurDataURL={BlurData.data}
      placeholder="blur"
      onError={onError}
      sizes="100vw" // TODO : Check doc
      quality={95}
      height={0} // Used to be 360
      width={0} // Used to be 640
      {...rest}
      alt={alt}
      src={src}
    />
  )
}

export default MdxImage
