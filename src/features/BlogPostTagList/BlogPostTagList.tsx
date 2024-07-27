import React, { FC } from 'react';
import './BlogPostTagList.scss';
import Chip from '@components/ui/Chip/Chip';
import { useGetTags } from '@hooks/blog';
import { BlogPostTag } from '@interfaces/blog.interfaces';

interface BlogPostTagListProps {
  tagIds: string[] | undefined;
  enableEdit?: boolean;
}

const BlogPostTagList: FC<BlogPostTagListProps> = ({ tagIds }) => {
  // Queries
  const { isLoading, isError, isSuccess, data } = useGetTags();

  return (
    <div className="BlogPostTagList d-flex align-items-center">
      { isLoading && <p>LOADING TAGS</p> }
  
      { isError && <p className='text-danger mb-0'>Error fetching tags</p> }
  
      { isSuccess && <>
        {tagIds?.map((id, i) => {
          const found = data.find((tag: BlogPostTag) => id === tag.id);
          return found ? <Chip className="me-4 mb-3" key={i}>
          {found.label}
        </Chip> : false;
        })}
      </>}
    </div>
  );
}

export default BlogPostTagList;
