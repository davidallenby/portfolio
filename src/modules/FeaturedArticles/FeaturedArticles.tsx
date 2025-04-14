'use client'
import BlogPostCard from '@components/ui/BlogPostCard/BlogPostCard'
import { useGetBlogPosts } from '@hooks/blog'
import type { BlogPost } from '@interfaces/blog.interfaces'
import Link from 'next/link'
import type React from 'react'
import type { FC } from 'react'
import './FeaturedArticles.scss'

interface FeaturedArticlesProps {
  className?: string
  title?: string
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
  return (
    <>
      <div className='FeaturedArticles__wrapper row mb-5'>
        {posts.map((item, i) => {
          return (
            <div
              className='w-full col-lg-4 mb-4 lg:mb-0 FeaturedArticle'
              key={i}
            >
              <BlogPostCard postItem={item} />
            </div>
          )
        })}
      </div>
      <p className='text-center'>
        <Link href={`/blog`} className='btn btn-outline-primary'>
          View more
        </Link>
      </p>
    </>
  )
}

const FeaturedArticles: FC<FeaturedArticlesProps> = ({
  className,
  title = 'Featured articles'
}) => {
  const { data, isSuccess, isLoading } = useGetBlogPosts({ page: 1, limit: 3 })

  return (
    <>
      <h2 className='mb-4'>{title}</h2>
      {isSuccess && setArticleContent(data)}
    </>
  )
}

export default FeaturedArticles
