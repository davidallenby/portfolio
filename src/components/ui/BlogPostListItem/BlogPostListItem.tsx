import React, { FC } from 'react';
import './BlogPostListItem.scss';
import { BlogPost, BlogPostTag } from '@interfaces/blog.interfaces';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getDateString } from '../../../helpers/dates';
import SanitizedHtml from '../SanitizedHtml/SanitizedHtml';
import Chip from '../Chip/Chip';
import BlogPostListItemImage from '../BlogPostListItemImage/BlogPostListItemImage';
import { useGetBlogPostTags } from '@hooks/blog';
import Skeleton from 'react-loading-skeleton'

interface BlogPostListItemProps {
  post: BlogPost;
  loading?: boolean;
}

const BlogPostListItem: FC<BlogPostListItemProps> = ({
  post, loading = false
}) => {
  const router = useRouter();
  
  const openPostUrl = (
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (loading) { return; }
    return router.push(post.url, { scroll: false })
  }

  const { data: tags, isLoading, isSuccess } = useGetBlogPostTags()

  const getLastFullStopAfterIndex = (str: string) => {
    const maxExcerpt = str.substring(0, 280)
    const lastIndex = maxExcerpt.lastIndexOf('.')
    return str.substring(0, lastIndex) + '...';
  }

  const getActiveTags = (tagIds: number[]): BlogPostTag[] => {
    return tags ? tags.filter((tag) => tagIds.includes(tag.id)) : []
  }

  const setCategoryTagTemplate = (tagIds: number[]) => {
    if (isLoading) { return; }
    // Hide the category tag if it doesn't have one
    if (!isSuccess || !tags.length) { return; }
    const active = getActiveTags(tagIds)
    return active.map((tag: BlogPostTag, i: number) => {
      return <Chip key={i}
        small
        className='my-2 me-3'
      >{tag.name}</Chip>
    })
  }

  return(
    <div 
      className='BlogPostListItem py-4 d-flex flex-wrap flex-sm-nowrap flex-lg-wrap flex-xl-nowrap flex-sm-row-reverse flex-row justify-content-between'
      tabIndex={0}
      onClick={openPostUrl}
    >
      <BlogPostListItemImage 
        href={post.url}
        src={post.featuredImageUrl}
        loading={loading}
      />
      <div className='BlogPostListItem__content me-sm-5'>
        <h3 className='BlogPostListItem__title mb-1'>
          <Link
            className='BlogPostListItem__title text-decoration-none'
            href={post.url}
          >{ loading ? <Skeleton /> : post.title}</Link>
        </h3>
        <p className='mb-2'>
          <small>
            {loading ? <Skeleton width={130} /> : getDateString(post.dateCreated)}
          </small>
        </p>
        {
          loading ?
          <>
            <p className='mb-2'>
              <Skeleton />
            </p>
            <p className='mb-2'>
              <Skeleton />
            </p>
            <p className='mb-4'>
              <Skeleton width={'50%'} />
            </p>
          </>
          :
          <SanitizedHtml 
            html={getLastFullStopAfterIndex(post.excerpt)} 
            className="mb-4"
          />
        }
        {
          loading ? 
          <Skeleton width={130} height={28.8} /> :
          setCategoryTagTemplate(post.tags)
        }
      </div>
  
    </div>
  );
}

export default BlogPostListItem;
