import { ReactNode } from '@node_modules/@types/react'

interface FeaturedProjectsProps {
  children: ReactNode
}
export default function FeaturedProjects({ children }: FeaturedProjectsProps) {
  return (
    <div className='FeaturedProjects mb-5 grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]'>
      {children}
    </div>
  )
}
