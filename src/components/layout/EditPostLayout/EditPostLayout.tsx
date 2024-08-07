'use client'
import React, { FC } from 'react';
import './EditPostLayout.scss';
import EditPostHeader from '@features/EditPostHeader/EditPostHeader';
import EditPostForm from '@features/EditPostForm/EditPostForm';
import { BlogPostView } from '@interfaces/blog.interfaces';
import { FormProvider, useForm } from 'react-hook-form';

interface EditPostLayoutProps {
  postData: BlogPostView
}

const EditPostLayout: FC<EditPostLayoutProps> = ({ postData }) => {
  // If the post doesn't exist, or there is an error... show a message.
  if (!postData) {
    return <>
    <h1>Post data not found!</h1>
    <p>Could not return data for this post.</p>
  </>
  }
  
  const methods = useForm({ defaultValues: { ...postData} });

  return (
  
    <FormProvider {...methods}>
      <EditPostHeader />
      <EditPostForm post={postData} />
    </FormProvider>
  
  )
}

export default EditPostLayout;
