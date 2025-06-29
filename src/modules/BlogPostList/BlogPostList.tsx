'use client'
import { QUERY } from '@constants/query'
import { queryClient } from '@context/ReactQueryProvider'
import { useGetBlogPosts } from '@hooks/blog'
import type { BlogPost } from '@interfaces/blog.interfaces'
import BlogPostListItem from '@modules/BlogPostList/BlogPostListItem/BlogPostListItem'
import { useStore } from '@store/store'
import Link from 'next/link'
import { type FC, useEffect } from 'react'
import BlogPostListEmpty from './BlogPostListEmpty'
import BlogPostListItemSkeleton from './BlogPostListItemSkeleton'

const BlogPostList: FC = () => {
  const { blogFilterTags } = useStore()
  const { data, isSuccess, isLoading, isError } = useGetBlogPosts({
    tagIds: blogFilterTags,
    page: 1
  })
  // When we load this screen, reload the blog posts to the original state.
  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: [QUERY.BLOG_POSTS] })
    }
  }, [])

  return (
    <div className='BlogPostList'>
      {isLoading && <BlogPostListItemSkeleton />}

      {!isLoading && isSuccess && data.length > 0 && (
        <div className='flex flex-col gap-16'>
          {data.map((post: BlogPost, i: number) => {
            const isLastItem = i === data.length - 1
            return (
              <>
                <BlogPostListItem key={i} post={post} />
                {!isLastItem && <hr />}
              </>
            )
          })}
        </div>
      )}

      {!isLoading && isSuccess && data.length === 0 && <BlogPostListEmpty />}

      {!isLoading && isError && (
        <>
          <p className='lead'>
            <span>Hmmm, there was an error loading the blog posts. </span>
            <Link href={`/contact`}>Let me know</Link>
            <span> what happened so I can fix it!</span>
          </p>
        </>
      )}
    </div>
  )
}

export default BlogPostList
