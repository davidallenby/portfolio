import { ReactNode } from '@node_modules/@types/react'
import classNames from '@node_modules/classnames'

interface FeaturedProjectsProps {
  children: ReactNode
  className?: string
}
export default function FeaturedProjects({
  children,
  className
}: FeaturedProjectsProps) {
  return (
    <div
      className={classNames('grid grid-cols-1 md:grid-cols-2 gap-8', className)}
    >
      {children}
    </div>
  )
}
