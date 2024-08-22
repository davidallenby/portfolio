'use client'
import React, { FC, useEffect } from 'react';
import './BlogPostList.scss';
import { useGetBlogPosts } from '@hooks/blog';
import Link from 'next/link';
import { BlogPost } from '@interfaces/blog.interfaces';
import BlogPostListItem from '@components/ui/BlogPostListItem/BlogPostListItem';
import { BLOG } from '@constants/blog';
import { queryClient } from '@context/ReactQueryProvider';
import { QUERY } from '@constants/query';

interface BlogPostListProps {}

const BlogPostList: FC<BlogPostListProps> = () => {
  const { data, isSuccess, isLoading, isError } = useGetBlogPosts();
  // When we load this screen, reload the blog posts to the original state.
  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: [QUERY.BLOG_POSTS]})
    }
  }, [])
  
  return (
    <div className="BlogPostList">
      { !isLoading && isSuccess && <>
        {data.length ? data.map((post: BlogPost, i: number) => {
          return <BlogPostListItem key={i} post={post} />
        }) : <>
          <h3 className='h2'>No posts found</h3>
          <p>There weren&apos;t any posts found with those filters ☹️.</p>
        </>}
      </>}

      { isLoading && <BlogPostListItem 
          post={BLOG.EMPTY_POST} 
          loading={true} 
      />}

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
