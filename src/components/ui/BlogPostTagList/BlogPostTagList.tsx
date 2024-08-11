'use client'
import React, { FC } from 'react';
import './BlogPostTagList.scss';
import Chip from '@components/ui/Chip/Chip';
import { useGetBlogPostTags } from '@hooks/blog';

interface BlogPostTagListProps {
  tagIds: number[];
}

const BlogPostTagList: FC<BlogPostTagListProps> = ({ tagIds }) => {
  // Queries
  const { isLoading, isError, isSuccess, data } = useGetBlogPostTags();

  return (
    <div className="BlogPostTagList d-flex align-items-center">
      { isLoading && <p>LOADING TAGS</p> }
  
      { isError && <p className='text-danger mb-0'>Error fetching tags</p> }
  
      { isSuccess && <>
        {data.filter((tag) => tagIds.includes(tag.id)).map((tag, i) => {
          
          return true ? <Chip className="me-4 mb-3" key={i}>
          { tag.name }
        </Chip> : false;
        })}
      </>}
    </div>
  );
}

export default BlogPostTagList;
