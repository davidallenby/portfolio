import BlogTagCloudFilter from '@components/ui/BlogTagCloudFilter/BlogTagCloudFilter'
import ClearAllTagsButton from '@components/ui/ClearAllTagsButton/ClearAllTagsButton'
import { type FC } from 'react'

const BlogSidebar: FC = () => {
  return (
    <div className='BlogSidebar max-w-[420px] w-full sticky top-20'>
      <div className='flex items-center mb-4 justify-between'>
        <h2 className='me-2 mb-0!'>Tags</h2>
        <ClearAllTagsButton />
      </div>
      <BlogTagCloudFilter />
    </div>
  )
}

export default BlogSidebar
