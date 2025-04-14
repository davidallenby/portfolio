'use client'
import BlogFiltersMobile from '@modules/BlogFiltersMobile/BlogFiltersMobile'
import BlogSidebar from '@modules/BlogSidebar/BlogSidebar'
import { type FC, type ReactNode } from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'
import './BlogLayout.scss'

interface BlogLayoutProps {
  children: ReactNode
}

const BlogLayout: FC<BlogLayoutProps> = ({ children }) => {
  return (
    <ContentContainer>
      <div className='BlogLayout mx-auto lg:ms-0'>
        <BlogFiltersMobile />

        <div className='BlogLayout__content'>
          <h2 className='visually-hidden'>Posts</h2>
          {children}
        </div>

        <BlogSidebar />
      </div>
    </ContentContainer>
  )
}

export default BlogLayout
