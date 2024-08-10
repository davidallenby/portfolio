import React, { FC } from 'react';
import './BlogPostTagList.scss';
import Chip from '@components/ui/Chip/Chip';

interface BlogPostTagListProps {
  tagIds: string[] | undefined;
  enableEdit?: boolean;
}

const BlogPostTagList: FC<BlogPostTagListProps> = ({ tagIds }) => {
  // Queries
  // const { isLoading, isError, isSuccess, data } = useGetTags();

  return (
    <div className="BlogPostTagList d-flex align-items-center">
      {/* { isLoading && <p>LOADING TAGS</p> }
  
      { isError && <p className='text-danger mb-0'>Error fetching tags</p> }
  
      { isSuccess && <>
        {tagIds?.map((id, i) => {
          
          return true ? <Chip className="me-4 mb-3" key={i}>
          
        </Chip> : false;
        })}
      </>} */}
    </div>
  );
}

export default BlogPostTagList;
