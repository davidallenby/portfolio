'use client'
import React, { FC } from 'react';
import './FeaturedArticles.scss';
import Link from 'next/link';
import BlogPostCard from '@components/ui/BlogPostCard/BlogPostCard';
import { BlogPost } from '@interfaces/blog.interfaces';
import { useGetBlogPosts } from '@hooks/blog';

interface FeaturedArticlesProps {
  className?: string;
  title?: string;
}
/**
 * Creates the list of card templates that display the blog posts.
 *
 * @return {*} 
 */
const setArticleContent = (posts: BlogPost[]): React.ReactNode => {
  if (!posts.length) {
    return <p className='lead'>There are no posts to display! 🧐</p>
  }
  return <>
    <div className='FeaturedArticles__wrapper row mb-5'>
      {
        posts.map((item, i) => {
          return <div className="col-12 col-lg-4 mb-4 mb-lg-0 FeaturedArticle" 
            key={i}
          >
            <BlogPostCard postItem={item} />
          </div>
        })
      }
    </div>
    <p className="text-center">
      <Link href={`/blog`}
        className="btn btn-outline-primary"
      >View more</Link>
    </p>
  </>
}

const FeaturedArticles: FC<FeaturedArticlesProps> = ({
  className, title = 'Featured articles'
}) => {

  const { data, isSuccess, isLoading } = useGetBlogPosts({ page: 1, limit: 3})

  return (
    <>
      <h2 className="mb-4">{title}</h2>
      {isSuccess && setArticleContent(data)}
    </>
  );
}

export default FeaturedArticles;
