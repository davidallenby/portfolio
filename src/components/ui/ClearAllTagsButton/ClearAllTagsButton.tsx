import { useMutateBlogPosts } from '@hooks/blog'
import type { GetBlogPostsPayload } from '@interfaces/blog.interfaces'
import classNames from '@node_modules/classnames'
import { useStore } from '@store/store'
import { type FC, useCallback } from 'react'

interface ClearAllTagsButtonProps {
  className?: string
}

const ClearAllTagsButton: FC<ClearAllTagsButtonProps> = ({ className }) => {
  const { setBlogFilterTags } = useStore()
  const mutation = useMutateBlogPosts()
  /**
   * Fire API to filter the tags and refresh the state
   * @param tagIds
   */
  const filterPostsByTag = useCallback(
    (tagIds: number[]) => {
      const payload: GetBlogPostsPayload = { page: 1, tagIds }
      mutation.mutate(payload)
    },
    [mutation]
  )

  /**
   * Update the state with an empty array and fetch the posts again
   *
   */
  const clearActiveTags = useCallback(() => {
    setBlogFilterTags([]) // Update zustand state
    filterPostsByTag([]) // Update the blog posts
  }, [setBlogFilterTags, filterPostsByTag])

  return (
    <button
      className={classNames(
        'text-primary cursor-pointer hover:text-primary/80',
        className
      )}
      onClick={clearActiveTags}
    >
      Clear all
    </button>
  )
}

export default ClearAllTagsButton
