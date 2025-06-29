import { type FC } from 'react'

const BlogPostListEmpty: FC = () => {
  return (
    <>
      <h3 className='h2'>No posts found</h3>
      <p>There weren&apos;t any posts found with those filters ☹️.</p>
    </>
  )
}

export default BlogPostListEmpty
