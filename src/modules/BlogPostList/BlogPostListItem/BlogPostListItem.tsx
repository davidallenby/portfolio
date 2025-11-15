import { getDateString } from '@helpers/dates'
import type { BlogPost } from '@interfaces/blog.interfaces'
import BlogPostListItemImage from '@modules/BlogPostList/BlogPostListItem/BlogPostListItemImage'
import { type FC, useMemo } from 'react'
import { BlogPostListItemBase } from './BlogPostListItemBase'
import { BlogPostListItemContent } from './BlogPostListItemContent'
import { BlogPostListItemProvider } from './BlogPostListItemContext'
import { getLastFullStopAfterIndex } from './utils'

interface BlogPostListItemProps {
	post: BlogPost
	className?: string
}

const BlogPostListItem: FC<BlogPostListItemProps> = ({ post, className }) => {
	const excerpt = useMemo(() => {
		return getLastFullStopAfterIndex(post.excerpt)
	}, [post.excerpt])

	const dateString = useMemo(() => {
		return getDateString(post.dateCreated)
	}, [post.dateCreated])

	return (
		<BlogPostListItemProvider post={post}>
			<BlogPostListItemBase href={post.url} className={className}>
				<BlogPostListItemImage src={post.featuredImageUrl} alt={post.title} />

				<BlogPostListItemContent title={post.title} dateString={dateString} excerpt={excerpt} />
			</BlogPostListItemBase>
		</BlogPostListItemProvider>
	)
}

export default BlogPostListItem
