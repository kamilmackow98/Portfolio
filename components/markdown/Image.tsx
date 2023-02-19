import NextImage, { ImageProps } from 'next/image'

interface Props extends ImageProps {
  alt: string
}

const Image = (props: Props) => {
  const { alt, ...rest } = props

  return (
    <NextImage
      className="lg:max-w-[40rem] mx-auto"
      height={360}
      width={640}
      alt={alt}
      {...rest}
    />
  )
}

export default Image
