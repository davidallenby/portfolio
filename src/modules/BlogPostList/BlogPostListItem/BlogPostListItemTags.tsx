import Chip from '@components/ui/Chip/Chip'
import { useGetBlogPostTags } from '@hooks/blog'
import { BlogPostTag } from '@interfaces/blog.interfaces'
import { useBlogPostListItemContext } from './BlogPostListItemContext'

export const BlogPostListItemTags = () => {
  const { post } = useBlogPostListItemContext()
  const { data: tags, isSuccess } = useGetBlogPostTags()

  const getActiveTags = (tagIds: number[]): BlogPostTag[] => {
    return tags ? tags.filter((tag) => tagIds.includes(tag.id)) : []
  }

  if (!isSuccess || !tags.length) {
    return null
  }
  const active = getActiveTags(post.tags)

  return (
    <div className='flex flex-wrap gap-2'>
      {active.map((tag) => {
        return (
          <Chip size='sm' key={tag.id}>
            {tag.name}
          </Chip>
        )
      })}
    </div>
  )
}
