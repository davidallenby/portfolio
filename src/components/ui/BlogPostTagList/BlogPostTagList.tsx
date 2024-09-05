'use client'
import React, { FC } from 'react';
import './BlogPostTagList.scss';
import Chip from '@components/ui/Chip/Chip';
import { useGetBlogPostTags } from '@hooks/blog';
import Skeleton from 'react-loading-skeleton';

interface BlogPostTagListProps {
  tagIds: number[];
  className?: string;
}

const BlogPostTagList: FC<BlogPostTagListProps> = ({ tagIds, className }) => {
  // Queries
  const { isLoading, isError, isSuccess, data } = useGetBlogPostTags();

  return (
    <div className={`BlogPostTagList d-flex flex-wrap align-items-center${className ? ` ${className}` : ''}`}>
      { isLoading && <Skeleton width={130} height={28.8} /> }
  
      { isError && <p className='text-danger mb-0'>Error fetching tags</p> }
  
      { isSuccess && <>
        {data.filter((tag) => tagIds.includes(tag.id)).map((tag, i) => {
          
          return true ? <Chip className="me-3 mb-3" key={i}>
          { tag.name }
        </Chip> : false;
        })}
      </>}
    </div>
  );
}

export default BlogPostTagList;
