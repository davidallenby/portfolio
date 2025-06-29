'use client'
import BlogPostCard from '@components/ui/BlogPostCard/BlogPostCard'
import LinkButton from '@components/ui/Button/LinkButton'
import { useGetBlogPosts } from '@hooks/blog'
import type { FC } from 'react'
import FeaturedArticlesLoader from './FeaturedArticlesLoader'

interface FeaturedArticlesProps {
  className?: string
  title?: string
}

const FeaturedArticles: FC<FeaturedArticlesProps> = ({
  className,
  title = 'Featured articles'
}) => {
  const { data, isSuccess, isLoading, isError } = useGetBlogPosts({
    page: 1,
    limit: 3
  })

  return (
    <>
      <h2 className='mb-8!'>{title}</h2>
      {isSuccess && data?.length && (
        <>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
            {data?.map((item, i) => {
              return <BlogPostCard postItem={item} key={i} className='h-full' />
            })}
          </div>
          <div className='text-center'>
            <LinkButton href={`/blog`} variant='secondary'>
              View more
            </LinkButton>
          </div>
        </>
      )}

      {isSuccess && !data?.length && <p>No articles found 🧐</p>}

      {!isLoading && isError && <p>Error loading articles 😬</p>}

      {isLoading && <FeaturedArticlesLoader />}
    </>
  )
}

export default FeaturedArticles
