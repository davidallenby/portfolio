'use client'
import React, { FC, ReactNode } from 'react';
import './BlogLayout.scss';
import ContentContainer from '../ContentContainer/ContentContainer';
import BlogSidebar from '@modules/BlogSidebar/BlogSidebar';
import BlogFiltersMobile from '@modules/BlogFiltersMobile/BlogFiltersMobile';

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout: FC<BlogLayoutProps> = ({ children }) => {  
  return (
    <ContentContainer>
      <div className='BlogLayout mx-auto ms-lg-0'>
        <BlogFiltersMobile />
        
        <div className='BlogLayout__content'>
          <h2 className='visually-hidden'>Posts</h2>
          { children }
        </div>

        <BlogSidebar />
      </div>
    </ContentContainer>
  );
}

export default BlogLayout;
