import { type FC } from 'react'
import { BLOG_POST_LIST_ITEM_BASE_CLASS } from './config'

const BlogPostListItemSkeleton: FC = () => {
  return (
    <div className={BLOG_POST_LIST_ITEM_BASE_CLASS}>
      <div className='BlogPostListItemSkeleton__image' />
      <div className='BlogPostListItemSkeleton__content' />
    </div>
  )
}

export default BlogPostListItemSkeleton
