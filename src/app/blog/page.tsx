import ContentContainer from "@components/containers/ContentContainer/ContentContainer";
import PublicLayout from "@components/layout/PublicLayout/PublicLayout";

export default function Blog() {

  return (    
      <PublicLayout>
        <ContentContainer>
          <h1 className="mb-4">Blog</h1>
        </ContentContainer> 
      </PublicLayout>
  );
}