import SanitizedHtml from '@components/ui/SanitizedHtml/SanitizedHtml'
import { getDateString } from '@helpers/dates'
import type { BlogPost } from '@interfaces/blog.interfaces'
import BlogPostListItemImage from '@modules/BlogPostList/BlogPostListItem/BlogPostListItemImage'
import { type FC, useMemo } from 'react'
import { BlogPostListItemBase } from './BlogPostListItemBase'
import { BlogPostListItemProvider } from './BlogPostListItemContext'
import { BlogPostListItemTags } from './BlogPostListItemTags'
import { getLastFullStopAfterIndex } from './utils'

interface BlogPostListItemProps {
  post: BlogPost
}

const BlogPostListItem: FC<BlogPostListItemProps> = ({ post }) => {
  const excerpt = useMemo(() => {
    return getLastFullStopAfterIndex(post.excerpt)
  }, [post.excerpt])

  const dateString = useMemo(() => {
    return getDateString(post.dateCreated)
  }, [post.dateCreated])

  return (
    <BlogPostListItemProvider post={post}>
      <BlogPostListItemBase href={post.url}>
        <BlogPostListItemImage
          src={post.featuredImageUrl}
          alt={post.title}
          className='mb-4'
        />
        <div className='BlogPostListItem__content me-sm-5'>
          <h3 className='mb-1!'>{post.title}</h3>
          <p className='subtitle mb-2'>{dateString}</p>

          <SanitizedHtml html={excerpt} className='mb-4' />

          <BlogPostListItemTags />
        </div>
      </BlogPostListItemBase>
    </BlogPostListItemProvider>
  )
}

export default BlogPostListItem
