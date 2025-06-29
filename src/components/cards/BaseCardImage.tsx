import Image, { type ImageProps } from 'next/image'

export type BaseCardImageProps = ImageProps

export default function BaseCardImage({
  src,
  alt,
  width,
  height,
  ...props
}: BaseCardImageProps) {
  return (
    <div className='aspect-video relative block'>
      <Image
        width={width}
        height={height}
        src={src}
        alt={alt}
        className='object-cover absolute top-0 left-0 w-full h-full'
      />
    </div>
  )
}
