'use client'
import BlogPostListItem from '@components/ui/BlogPostListItem/BlogPostListItem'
import { BLOG } from '@constants/blog'
import { QUERY } from '@constants/query'
import { queryClient } from '@context/ReactQueryProvider'
import { useGetBlogPosts } from '@hooks/blog'
import type { BlogPost } from '@interfaces/blog.interfaces'
import { useStore } from '@store/store'
import Link from 'next/link'
import { type FC, useEffect } from 'react'

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
      {!isLoading && isSuccess && (
        <>
          {data.length ? (
            data.map((post: BlogPost, i: number) => {
              return <BlogPostListItem key={i} post={post} />
            })
          ) : (
            <>
              <h3 className='h2'>No posts found</h3>
              <p>There weren&apos;t any posts found with those filters ☹️.</p>
            </>
          )}
        </>
      )}

      {isLoading && <BlogPostListItem post={BLOG.EMPTY_POST} loading={true} />}

      {isError && (
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
