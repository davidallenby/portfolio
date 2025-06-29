'use client'
import BlogFiltersMobile from '@modules/BlogFiltersMobile/BlogFiltersMobile'
import BlogSidebar from '@modules/BlogSidebar/BlogSidebar'
import { type FC, type ReactNode } from 'react'

interface BlogLayoutProps {
  children: ReactNode
}

const BlogLayout: FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div className='container py-12'>
      <div className='max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2'>
        <div className='lg:hidden mb-8'>
          <BlogFiltersMobile />
        </div>

        <div className='BlogLayout__content lg:border-r border-primary-100 lg:pr-16'>
          <h2 className='visually-hidden'>Posts</h2>
          {children}
        </div>

        <div className='hidden lg:block pl-16'>
          <BlogSidebar />
        </div>
      </div>
    </div>
  )
}

export default BlogLayout
