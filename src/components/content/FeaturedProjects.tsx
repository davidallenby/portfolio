import { ReactNode } from '@node_modules/@types/react'

interface FeaturedProjectsProps {
  children: ReactNode
}
export default function FeaturedProjects({ children }: FeaturedProjectsProps) {
  return (
    <div className='FeaturedProjects mb-5 block md:grid md:grid-cols-2 gap-12 min-h-[400px]'>
      {children}
    </div>
  )
}
