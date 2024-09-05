import React, { FC } from 'react';
import './BlogPostCard.scss';
import { getDateString } from '../../../helpers/dates';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import { BlogPost } from '@interfaces/blog.interfaces';
import Image from 'next/image';

interface BlogPostCardProps {
  postItem: BlogPost;
}

const BlogPostCard: FC<BlogPostCardProps> = ({
  postItem
}) => (
  <div className='BlogPostCard bg-white'>
    <Link 
      href={`/blog/${postItem.slug}`}
      className="BlogPostCard__image position-relative d-block"
    >
      <Image 
        width={800} 
        height={800} 
        src={postItem.featuredImageUrl} 
        alt=''
      />
    </Link>
    <div className="BlogPostCard__content p-3">
      <h3>
        <Link 
          href={`/blog/${postItem.slug}`}
          className='text-decoration-none text-body'
        >
          {postItem.title}
        </Link>
      </h3>
      <small className='d-block subtitle mb-4'>
        {getDateString(postItem.dateCreated)}
      </small>
      <Link href={`/blog/${postItem.slug}`} className="small">
        <span className="d-inline-block me-2">Read more</span>
        <BsArrowRight />
      </Link>
    </div>              
  </div>
);

export default BlogPostCard;
