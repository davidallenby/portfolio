import './EditPost.scss';
import EditPostHeader from "../../components/EditPostHeader/EditPostHeader";
import EditPostForm from "../../components/EditPostForm/EditPostForm";
import { getBlogPostById } from '@lib/firebase/firestore';
import { cache } from 'react';

export default async function EditPost({ params }: { 
  params: { id: string } 
}) {
  const query = cache(async () => await getBlogPostById(params.id));
  const data = await query();

  return (
      <>
        <EditPostHeader />
        <EditPostForm postData={data} />
      </> 
    
  );
}