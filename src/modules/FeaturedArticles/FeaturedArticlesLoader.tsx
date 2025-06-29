import BlogPostCardSkeleton from '@components/ui/BlogPostCard/BlogPostCardSkeleton'

export default function FeaturedArticlesLoader() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
      {[0, 1, 2]?.map((item, i) => {
        return <BlogPostCardSkeleton key={i} />
      })}
    </div>
  )
}
