'use client'
import React, { FC } from 'react';
import './BlogPostList.scss';
import { useGetBlogPosts } from '@hooks/blog';
import Link from 'next/link';

interface BlogPostListProps {}

const BlogPostList: FC<BlogPostListProps> = () => {

  const { data, isSuccess, isLoading, isError } = useGetBlogPosts({ page: 1 });
  console.log(data)
  return (
    <div className="BlogPostList">
      { !isLoading && isSuccess && <>
        { JSON.stringify(data)}
      </>}

      { isError && <>
        <p className="lead">
          <span>Hmmm, there was an error loading the blog posts. </span>
          <Link href={`/contact`}>Let me know</Link>
          <span> what happened so I can fix it!</span>
        </p>
      </>}
    </div>
  );
}

export default BlogPostList;
