import './EditPost.scss';
import EditPostHeader from "../../components/EditPostHeader/EditPostHeader";
import EditPostForm from "../../components/EditPostForm/EditPostForm";
import { BlogPost, BlogPostView } from '@interfaces/blog.interfaces';
import { getBlogPostDetails } from '@lib/firebase/firestore';

export default async function EditPost({ params }: { 
  params: { id: string } 
}) {
  let postData: BlogPostView|null = null;

  try {
    postData = await getBlogPostDetails(params.id)
  } catch (err) {
    console.log(err);
  }

  return (
      <>
        <EditPostHeader />
        <EditPostForm postData={postData}  />
      </> 
    
  );
}