import ContentContainer from "@components/layout/ContentContainer/ContentContainer";
import SiteLayout from "@components/layout/SiteLayout/SiteLayout";
import BlogPostList from "@modules/BlogPostList/BlogPostList";

export default async function Blog() {
  return (    
      <SiteLayout>
        <ContentContainer>
          <BlogPostList/> 
        </ContentContainer> 
      </SiteLayout>
  );
}