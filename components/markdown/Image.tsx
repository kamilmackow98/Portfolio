import NextImage, { ImageProps } from 'next/image'

interface Props extends ImageProps {
  alt: string
}

const Image = (props: Props) => {
  const { alt, ...rest } = props

  return (
    <NextImage
      objectFit="cover"
      width={1200}
      height={768}
      alt={alt}
      {...rest}
    />
  )
}

export default Image
