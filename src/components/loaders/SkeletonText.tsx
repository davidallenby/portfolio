import { ComponentProps, type FC } from 'react'

interface SkeletonTextProps extends ComponentProps<'p'> {
  className?: string
}

export const SkeletonText: FC<SkeletonTextProps> = ({
  className = 'w-full'
}) => {
  return (
    <p className={`animate-pulse bg-gray-200 h-4 min-w-[100px] ${className}`} />
  )
}
