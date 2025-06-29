import classNames from '@node_modules/classnames'
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
    <div
      className={classNames(aspectRatio, 'relative block w-full', className)}
    >
      <div className='animate-pulse bg-gray-200 w-full h-full' />
    </div>
  )
}
