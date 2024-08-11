import React, { FC, ReactNode } from 'react';
import './BlogPostContainer.scss';

interface BlogPostContainerProps {
  children: ReactNode;
  className?: string;
}

const BlogPostContainer: FC<BlogPostContainerProps> = ({
  children, className
}) => (
  <div className={`BlogPostContainer gutter-x ${className}`}>
    { children }
  </div>
);

export default BlogPostContainer;
