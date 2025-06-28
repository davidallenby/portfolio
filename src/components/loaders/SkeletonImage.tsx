import { type FC } from 'react'

interface SkeletonImageProps {
  className?: string
  aspectRatio?: string
}

export const SkeletonImage: FC<SkeletonImageProps> = ({
  className,
  aspectRatio = 'aspect-video'
}) => {
  return (
    <div className={`${aspectRatio} relative block`}>
      <div className='animate-pulse bg-gray-200 w-full h-full' />
    </div>
  )
}
