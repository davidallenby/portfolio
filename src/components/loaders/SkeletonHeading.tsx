import { type ComponentProps, type FC } from 'react'

interface SkeletonHeadingProps extends ComponentProps<'div'> {
  className?: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}

const getHeadingSize = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  switch (level) {
    case 1:
      return 'text-4xl'
  }
}

export const SkeletonHeading: FC<SkeletonHeadingProps> = ({
  className,
  level
}) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 w-full ${getHeadingSize(
        level
      )} ${className}`}
    >
      <span className='opacity-0'>Loading...</span>
    </div>
  )
}
