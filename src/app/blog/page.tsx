import BlogLayout from "@components/layout/BlogLayout/BlogLayout";
import SiteLayout from "@components/layout/SiteLayout/SiteLayout";
import BlogPostList from "@modules/BlogPostList/BlogPostList";

export default async function Blog() {
  return (    
      <SiteLayout>
        <BlogLayout>
          <BlogPostList/>
        </BlogLayout>
      </SiteLayout>
  );
}