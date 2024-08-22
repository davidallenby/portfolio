import React, { FC } from 'react';
import './BlogFiltersMobile.scss';
import { MdFilterList } from 'react-icons/md';

interface BlogFiltersMobileProps {}

const BlogFiltersMobile: FC<BlogFiltersMobileProps> = () => {
  
  return (
    <div className='BlogLayout__nav-mobile d-lg-none bg-body pb-2'>
      <div className='d-flex align-items-center'>
        <button type='button'
          className='btn btn-sm btn-outline-primary d-flex align-items-center me-3'
        >
          <MdFilterList size={16} className='me-1' />
          <span>Tags</span>
        </button>
      </div>
    </div>

  )
}

export default BlogFiltersMobile;
