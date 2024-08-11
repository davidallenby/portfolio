'use client'
import React, { FC } from 'react';
import './BlogPostList.scss';
import { useGetBlogPosts } from '@hooks/blog';
import Link from 'next/link';
import { BlogPost } from '@interfaces/blog.interfaces';
import BlogPostListItem from '@components/ui/BlogPostListItem/BlogPostListItem';

interface BlogPostListProps {}

const BlogPostList: FC<BlogPostListProps> = () => {

  const { data, isSuccess, isLoading, isError } = useGetBlogPosts({ page: 1 });
  
  return (
    <div className="BlogPostList">
      { !isLoading && isSuccess && data.map((post: BlogPost, i: number) => {
        return <BlogPostListItem key={i} post={post} />
      })}

      { isLoading && [0,1,2].map((_, i) => {
        return <span key={i}>
          LOADING
        </span>
      })}

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
