import React, { FC, useState } from 'react';
import './BlogFiltersMobile.scss';
import { MdFilterList } from 'react-icons/md';
import Modal from '@components/ui/Modal/Modal';
import BlogTagCloudFilter from '@components/ui/BlogTagCloudFilter/BlogTagCloudFilter';
import ClearAllTagsButton from '@components/ui/ClearAllTagsButton/ClearAllTagsButton';

interface BlogFiltersMobileProps {}

const BlogFiltersMobile: FC<BlogFiltersMobileProps> = () => {

  const [open, isOpen] = useState(false);
  
  return (
    <div className='BlogFiltersMobile d-lg-none bg-body py-2'>
      <div className='d-flex align-items-center'>
        <button type='button'
          className='btn btn-sm btn-outline-primary d-flex align-items-center me-3'
          onClick={() => isOpen(!open)}
        >
          <MdFilterList size={16} className='me-1' />
          <span>Tags</span>
        </button>
      </div>
      <Modal 
        show={open} 
        title='Filter by tag' 
        onClose={(e) => isOpen(e)}
        cancelBtnLabel='Close'
      >
        <ClearAllTagsButton className="mb-3" />
        <BlogTagCloudFilter />
      </Modal>
    </div>

  )
}

export default BlogFiltersMobile;
