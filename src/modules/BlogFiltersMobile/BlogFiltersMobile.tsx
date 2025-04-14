import BlogTagCloudFilter from '@components/ui/BlogTagCloudFilter/BlogTagCloudFilter'
import ClearAllTagsButton from '@components/ui/ClearAllTagsButton/ClearAllTagsButton'
import Modal from '@components/ui/Modal/Modal'
import { type FC, useState } from 'react'
import { MdFilterList } from 'react-icons/md'
import './BlogFiltersMobile.scss'

const BlogFiltersMobile: FC = () => {
  const [open, isOpen] = useState(false)

  return (
    <div className='BlogFiltersMobile lg:hidden bg-off-white py-2'>
      <div className='flex items-center'>
        <button
          type='button'
          className='btn btn-sm btn-outline-primary flex items-center me-3'
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
        <ClearAllTagsButton className='mb-3' />
        <BlogTagCloudFilter />
      </Modal>
    </div>
  )
}

export default BlogFiltersMobile
