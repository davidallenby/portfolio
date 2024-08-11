import BlogPostContainer from "@components/layout/BlogPostContainer/BlogPostContainer";
import SiteLayout from "@components/layout/SiteLayout/SiteLayout";
import BlogPostFeaturedImage from "@components/ui/BlogPostFeaturedImage/BlogPostFeaturedImage";
import { getBlogPostBySlug } from "@lib/blog";
import './BlogPost.scss';
import BlogPostTagList from "@components/ui/BlogPostTagList/BlogPostTagList";


export default async function BlogPage({ 
  params 
}: { params: { slug: string } }) {
  // If thre's no post slug parameter in the URL, abort.
  if (!params.slug) {
    return {
      notFound: true,
    };
  }

  // Get the post data by slug in the URL
  const { data, success } = await getBlogPostBySlug(params.slug)

  return (    
      <SiteLayout>
        <div className="BlogPost">
          {success ? <>
            <BlogPostContainer>
              <h1 className="mb-4">{ data.title }</h1>
              <BlogPostFeaturedImage src={data.featuredImageUrl}
                className="mb-4"
              />
              <BlogPostTagList tagIds={data.tags} />
            </BlogPostContainer>
            
          </> : <>
          <h1>404: Post not found</h1>
          <p>Sorry, but details of that post could not be found.</p>
          </>}
        </div>
      </SiteLayout>
  );
}