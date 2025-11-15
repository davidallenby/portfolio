import { getBlogPostBySlug } from '@api/blog'
import BlogPostContainer from '@components/layout/BlogPostContainer/BlogPostContainer'
import SiteLayout from '@components/layout/SiteLayout/SiteLayout'
import BlogPostFeaturedImage from '@components/ui/BlogPostFeaturedImage/BlogPostFeaturedImage'
import BlogPostTagList from '@components/ui/BlogPostTagList/BlogPostTagList'
import { MarkdownContent } from '@components/ui/MarkdownContent'
import { getDateString } from '@helpers/dates'
import NotFound from './NotFound'

export default async function BlogPage({
  params
}: {
  params: { slug: string }
}) {
  // If thre's no post slug parameter in the URL, abort.
  if (!params.slug) {
    return { notFound: true }
  }
  // Get the post data by slug in the URL
  const { data, success } = await getBlogPostBySlug(params.slug)

  return (
    <SiteLayout>
      <div className='BlogPost'>
        {!success && <NotFound />}
        {success && (
          <>
            <BlogPostContainer>
              <h1 className='mb-1'>{data.title}</h1>
              <div className='flex align-items-end justify-content-between mb-4'>
                <span className='subtitle me-4'>
                  Created: {getDateString(data.dateCreated)}
                </span>
                {/* Will add share button in v2 */}
                {/* <SharePostButton /> */}
              </div>
              <BlogPostFeaturedImage
                src={data.featuredImageUrl}
                className='mb-4'
              />
              <BlogPostTagList
                tagIds={data.tags}
                size='sm'
                className='mb-4 hidden sm:block'
              />
              <MarkdownContent content={data.content} />
            </BlogPostContainer>
          </>
        )}
      </div>
    </SiteLayout>
  )
}
