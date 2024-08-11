'use client'
import React, { FC, ReactNode } from 'react';
import './BlogLayout.scss';
import ContentContainer from '../ContentContainer/ContentContainer';
import { useGetBlogPostCategories, useGetBlogPostTags } from '@hooks/blog';
import Chip from '@components/ui/Chip/Chip';
import { BlogPostCategory, BlogPostTag } from '@interfaces/blog.interfaces';
import { MdFilterList } from 'react-icons/md';

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout: FC<BlogLayoutProps> = ({ children }) => {

  const { isSuccess: catSuccess, data: categories } = useGetBlogPostCategories();

  const { isSuccess: tagSuccess, data: tags } = useGetBlogPostTags();
  
  return (
    <ContentContainer>
      <div className='BlogLayout mx-auto ms-lg-0'>
        <div className='BlogLayout__nav-mobile d-lg-none bg-body pb-2'>
          <div className='d-flex align-items-center'>
            <button type='button'
              className='btn btn-sm btn-outline-primary d-flex align-items-center me-3'
            >
              <MdFilterList size={16} className='me-1' />
              <span>Categories</span>
            </button>

            <button type='button'
              className='btn btn-sm btn-outline-primary d-flex align-items-center me-3'
            >
              <MdFilterList size={16} className='me-1' />
              <span>Tags</span>
            </button>
          </div>
        </div>
        
        <div className='BlogLayout__content'>
          <h2 className='visually-hidden'>Posts</h2>
          { children }
        </div>

        <div className='d-none d-lg-block BlogLayout__nav-desktop'>
          <h2 className='mb-4'>Featured Articles</h2>
          <hr className='my-4' />
          { catSuccess && categories.length > 1 && <>
            <h2 className='mb-4'>Categories</h2>
              {categories.map((cat: BlogPostCategory, i: number) => {
                return <Chip key={i}
                  className='my-2 me-3'
                >
                  { cat.name}
                </Chip>
              })}
              <hr className='my-4' />
            </>
          }
          
          <h2 className='mb-4'>Tags</h2>
          { tagSuccess && tags.length && tags
            .map((tag: BlogPostTag, i: number) => {
            return <Chip key={i}
              className='my-2 me-3'
            >
              {tag.name}
            </Chip>
          })}
        </div>
      </div>
    </ContentContainer>
  );
}

export default BlogLayout;
