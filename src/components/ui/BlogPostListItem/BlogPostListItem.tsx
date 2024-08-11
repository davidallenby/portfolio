import React, { FC } from 'react';
import './BlogPostListItem.scss';
import { BlogPost, BlogPostCategory } from '@interfaces/blog.interfaces';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { getDateString } from '@lib/dates';
import SanitizedHtml from '../SanitizedHtml/SanitizedHtml';
import Chip from '../Chip/Chip';
import BlogPostListItemImage from '../BlogPostListItemImage/BlogPostListItemImage';
import { useGetBlogPostCategories } from '@hooks/blog';

interface BlogPostListItemProps {
  post: BlogPost;
}


const BlogPostListItem: FC<BlogPostListItemProps> = ({ post }) => {
  const router = useRouter();
  
  const openPostUrl = (url: string) => router.push(url, { scroll: false })

  const { data: categories, isLoading, isSuccess } = useGetBlogPostCategories()

  const getLastFullStopAfterIndex = (str: string) => {
    const maxExcerpt = str.substring(0, 280)
    const lastIndex = maxExcerpt.lastIndexOf('.')
    return str.substring(0, lastIndex) + '...';
  }

  const setCategoryTagTemplate = () => {
    // TODO: Return a loading spinner / skeleton screen here...
    if (isLoading) { return; }
    // Hide the category tag if it doesn't have one
    if (!isSuccess || !categories.length) { return; }
    const category = categories.find((cat: BlogPostCategory, i: number) => {
      return cat.id === post.categories[0];
    })
    return !!category ? <Chip small>
      { category.name }
    </Chip> : '';
  }

  return(
    <div className='BlogPostListItem py-4 d-flex flex-wrap flex-sm-nowrap flex-lg-wrap flex-xl-nowrap flex-sm-row-reverse flex-row justify-content-between'
      tabIndex={0}
      onClick={() => openPostUrl(post.url)}
    >
      <BlogPostListItemImage 
        href={post.url}
        src={post.featuredImageUrl}
      />
      <div className='BlogPostListItem__content me-sm-5'>
        <h3 className='BlogPostListItem__title mb-1'>
          <Link
            className='BlogPostListItem__title text-decoration-none'
            href={post.url}
          >{post.title}</Link>
        </h3>
        <p className='mb-2'>
          <small>{getDateString(post.dateCreated)}</small>
        </p>
        <SanitizedHtml html={getLastFullStopAfterIndex(post.excerpt)} className="mb-4" />
        {setCategoryTagTemplate()}
      </div>
  
    </div>
  );
}

export default BlogPostListItem;
