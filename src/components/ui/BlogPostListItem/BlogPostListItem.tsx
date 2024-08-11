import React, { FC } from 'react';
import './BlogPostListItem.scss';
import { BlogPost } from '@interfaces/blog.interfaces';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { getDateString } from '@lib/dates';
import SanitizedHtml from '../SanitizedHtml/SanitizedHtml';
import Chip from '../Chip/Chip';
import BlogPostListItemImage from '../BlogPostListItemImage/BlogPostListItemImage';

interface BlogPostListItemProps {
  post: BlogPost;
}


const BlogPostListItem: FC<BlogPostListItemProps> = ({ post }) => {
  const router = useRouter();
  
  const openPostUrl = (url: string) => {
    router.push(url, { scroll: false })
  }
  return(
    <div className='BlogPostListItem d-flex flex-wrap flex-sm-nowrap flex-lg-wrap flex-xl-nowrap flex-sm-row-reverse flex-row justify-content-between'
      tabIndex={0}
      onClick={() => openPostUrl(post.url)}
    >
      <BlogPostListItemImage 
        href={post.url}
        src={post.featuredImageUrl}
      />
      <div className='BlogPostListItem__content me-sm-5'>
        <h3 className='mb-1'>
          <Link href={post.url}>{post.title}</Link>
        </h3>
        <p className='mb-2'>
          <small>{getDateString(post.dateCreated)}</small>
        </p>
        <SanitizedHtml html={post.excerpt} className="mb-4" />
        <Chip small
          className='me-4'
        >Category</Chip>
      </div>
  
    </div>
  );
}

export default BlogPostListItem;
