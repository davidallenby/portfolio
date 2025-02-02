'use client'
import React, { FC, ReactNode } from 'react';
import './BlogPostContainer.scss';
import { useRouter } from 'next/navigation'  // Usage: App router
import { BsArrowLeft } from 'react-icons/bs';

interface BlogPostContainerProps {
  children: ReactNode;
  className?: string;
}

const BlogPostContainer: FC<BlogPostContainerProps> = ({
  children, className
}) => {
  const router = useRouter();

  return (
    <div className={`BlogPostContainer gutter-x ${className}`}>
      <button type="button" 
        onClick={() => router.push(`/blog`)}
        className='text-primary bg-transparent border-0 mb-4 px-0 text-underline-none d-inline-flex align-items-center'
      >
        <BsArrowLeft className='me-2 mt-1' size={18} />
        <span> Back to blog list</span>
      </button>
      { children }
    </div>
  );
}

export default BlogPostContainer;
