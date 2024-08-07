import './EditPost.scss';
import EditPostLayout from '@components/layout/EditPostLayout/EditPostLayout';
import { useGetPostById } from '@hooks/blog';
// import { cache } from 'react';

export default async function EditPost({ params }: { 
  params: { id: string } 
}) {
  
  const data = await useGetPostById(params.id)
  if (!data) { return null; }

  return (
    <EditPostLayout postData={data} />
  );
}