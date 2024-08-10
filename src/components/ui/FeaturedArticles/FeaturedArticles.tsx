'use client'
import React, { FC } from 'react';
import './FeaturedArticles.scss';
import Link from 'next/link';
import BlogPostCard from '@components/ui/BlogPostCard/BlogPostCard';
import { BlogPost } from '@interfaces/blog.interfaces';

interface FeaturedArticlesProps {
  className?: string;
  title?: string;
  items: BlogPost[];
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
  className, items, title = 'Featured articles'
}) => {
  return (
    <>
      <h2 className="mb-4">{title}</h2>
      {setArticleContent(items)}
    </>
  );
}

export default FeaturedArticles;
