'use client'
import Chip from '@components/ui/Chip/Chip'
import { useGetBlogPostTags } from '@hooks/blog'
import { type FC } from 'react'
import Skeleton from 'react-loading-skeleton'

interface BlogPostTagListProps {
  tagIds: number[]
  className?: string
}

const BlogPostTagList: FC<BlogPostTagListProps> = ({ tagIds, className }) => {
  // Queries
  const { isLoading, isError, isSuccess, data } = useGetBlogPostTags()

  return (
    <div
      className={`BlogPostTagList flex flex-wrap items-center${
        className ? ` ${className}` : ''
      }`}
    >
      {isLoading && <Skeleton width={130} height={28.8} />}

      {isError && <p className='text-danger mb-0'>Error fetching tags</p>}

      {isSuccess && (
        <>
          {data
            .filter((tag) => tagIds.includes(tag.id))
            .map((tag, i) => {
              return true ? (
                <Chip className='me-3 mb-3' key={i}>
                  {tag.name}
                </Chip>
              ) : (
                false
              )
            })}
        </>
      )}
    </div>
  )
}

export default BlogPostTagList
