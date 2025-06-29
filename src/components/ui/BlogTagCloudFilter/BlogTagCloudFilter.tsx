import { useGetBlogPostTags, useMutateBlogPosts } from '@hooks/blog'
import type {
  BlogPostTag,
  GetBlogPostsPayload
} from '@interfaces/blog.interfaces'
import { type FC, useCallback } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useStore } from '../../../store/store'
import Chip from '../Chip/Chip'

const BlogTagCloudFilter: FC = () => {
  const {
    isSuccess: tagSuccess,
    data: tags,
    isLoading: tagLoading
  } = useGetBlogPostTags()
  const mutation = useMutateBlogPosts()
  const { blogFilterTags, setBlogFilterTags } = useStore()

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
   * Fired when the user clicks the tag to filter the posts.
   *
   * @param {number} tagId
   */
  const tagToggleHandler = useCallback(
    (tagId: number) => () => {
      // Check if the tag is currently active
      const isActive = blogFilterTags.some((id) => id === tagId)
      let newTagIds: number[] = []
      // If it is...
      if (isActive) {
        // Remove it
        newTagIds = blogFilterTags.filter((active: number) => active !== tagId)
      } else {
        // .. if not...
        // Add it
        newTagIds = [...blogFilterTags, tagId]
      }
      // Update the state
      setBlogFilterTags(newTagIds)
      // Fire the API
      filterPostsByTag(newTagIds)
    },
    [blogFilterTags, setBlogFilterTags, filterPostsByTag]
  )

  return (
    <div className='BlogTagCloudFilter'>
      {tagLoading && (
        <div className='flex flex-wrap'>
          {[0, 1, 2].map((num: number, i: number) => {
            return (
              <Skeleton
                width={100}
                height={38}
                className='me-3 mb-2'
                key={num}
              />
            )
          })}
        </div>
      )}

      {tagSuccess && tags.length && (
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag: BlogPostTag, i: number) => {
            const isTagActive = blogFilterTags.some((id) => id === tag.id)
            return (
              <Chip
                key={`blog-tag-${tag.id}`}
                onClick={tagToggleHandler(tag.id)}
                toggle={isTagActive}
              >
                {tag.name}
              </Chip>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default BlogTagCloudFilter
