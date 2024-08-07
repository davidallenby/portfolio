'use client'
import React, { FC } from 'react';
import './EditPostLayout.scss';
import EditPostHeader from '@features/EditPostHeader/EditPostHeader';
import EditPostForm from '@features/EditPostForm/EditPostForm';
import { BlogPostView } from '@interfaces/blog.interfaces';
import { EditPostContextProvider } from '@context/EditPostContext';

interface EditPostLayoutProps {
  postData: BlogPostView
}

const EditPostLayout: FC<EditPostLayoutProps> = ({ postData }) => {

  return (
  <EditPostContextProvider value={postData}>
    <EditPostHeader />
    <EditPostForm />
  </EditPostContextProvider>
  )
}

export default EditPostLayout;
