'use client'
import { QUERY } from '@constants/query'
import { queryClient } from '@context/ReactQueryProvider'
import { useGetBlogPosts } from '@hooks/blog'
import type { BlogPost } from '@interfaces/blog.interfaces'
import BlogPostListItem from '@modules/BlogPostList/BlogPostListItem/BlogPostListItem'
import { useStore } from '@store/store'
import { type FC, useEffect } from 'react'
import BlogPostListEmpty from './BlogPostListEmpty'
import { BlogPostListError } from './BlogPostListError'
import BlogPostListItemSkeleton from './BlogPostListItemSkeleton'

const BlogPostList: FC = () => {
	const { blogFilterTags } = useStore()
	const { data, isSuccess, isLoading, isError } = useGetBlogPosts({
		tagIds: blogFilterTags,
		page: 1
	})
	// When we leave this page, reload the blog posts to the original state.
	useEffect(() => {
		return () => {
			queryClient.removeQueries({ queryKey: [QUERY.BLOG_POSTS] })
		}
	}, [])

	return (
		<div className="BlogPostList">
			{isLoading && <BlogPostListItemSkeleton />}

			{!isLoading && isSuccess && data.length > 0 && (
				<ul className="flex flex-col">
					{data.map((post: BlogPost, i: number) => {
						const isLastItem = i === data.length - 1
						return (
							<li key={`blog-post-${post.id}`}>
								<BlogPostListItem post={post} />
								{!isLastItem && <hr className="my-16" />}
							</li>
						)
					})}
				</ul>
			)}

			{!isLoading && isSuccess && data.length === 0 && <BlogPostListEmpty />}

			{!isLoading && isError && <BlogPostListError />}
		</div>
	)
}

export default BlogPostList
