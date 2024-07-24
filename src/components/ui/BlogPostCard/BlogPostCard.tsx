import React, { FC } from 'react';
import './BlogPostCard.scss';
import { BlogPostView } from '@interfaces/blog.interfaces';
import { getDateString } from '@utils/dates';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

interface BlogPostCardProps {
  postItem: BlogPostView;
}

const BlogPostCard: FC<BlogPostCardProps> = ({
  postItem
}) => (
  <div className='bg-white'>
    <div className="FeaturedArticle__image"></div>
    <div className="FeaturedArticle__content p-3">
      <h3>
        <Link href={`/blog/${postItem.slug}`}>
          {postItem.title}
        </Link>
      </h3>
      <small className='d-block subtitle mb-4'>
        Published: {getDateString(postItem.dateCreated)}
      </small>
      <Link href={`/blog/${postItem.slug}`} className="small">
        <span className="d-inline-block me-2">Read more</span>
        <BsArrowRight />
      </Link>
    </div>              
  </div>
);

export default BlogPostCard;
