import React, { FC } from 'react';
import './BlogSidebar.scss';
import BlogTagCloudFilter from '@components/ui/BlogTagCloudFilter/BlogTagCloudFilter';
import ClearAllTagsButton from '@components/ui/ClearAllTagsButton/ClearAllTagsButton';

interface BlogSidebarProps {}

const BlogSidebar: FC<BlogSidebarProps> = () => {


  return (
    <div className='BlogSidebar d-none d-lg-block'>          
      <div className='d-flex align-items-end mb-4 justify-content-between'>
        <h2 className='me-2'>Tags</h2>
        <ClearAllTagsButton />
      </div>
      <BlogTagCloudFilter />
    </div>
  );
}

export default BlogSidebar;
