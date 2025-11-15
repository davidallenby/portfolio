import { type FC } from 'react';
import { BLOG_POST_LIST_ITEM_CONTENT_BASE_CLASS } from '../config';
import { BlogPostListItemTags } from './BlogPostListItemTags';

interface BlogPostListItemContentProps {
  title: string;
  dateString: string;
  excerpt: string;
}

export const BlogPostListItemContent: FC<BlogPostListItemContentProps> = ({ title, dateString, excerpt }) => {
  return (
    <div className={BLOG_POST_LIST_ITEM_CONTENT_BASE_CLASS}>
      <h3 className="mb-1!">{title}</h3>
      <p className="subtitle mb-2">{dateString}</p>
      <p className="mb-4">{excerpt}</p>
      <BlogPostListItemTags />
    </div>
  );
};
