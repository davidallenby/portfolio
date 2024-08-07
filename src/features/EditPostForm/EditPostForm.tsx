'use client'
import React, { FC, ReactNode, useEffect, useState } from 'react';
import './EditPostForm.scss';
import TitleInputField from '@components/ui/TitleInputField/TitleInputField';
import { BsShare } from 'react-icons/bs';
import { BlogPostView } from '@interfaces/blog.interfaces';
import { getDateString } from '@utils/dates';
import { useForm } from 'react-hook-form';
import BlogPostFeaturedImageUpload from '@components/ui/BlogPostFeaturedImageUpload/BlogPostFeaturedImageUpload';

import ContentEditor from '@features/ContentEditor/ContentEditor';
import EditPostTagsMultiselect from './EditPostTagsMultiselect';
import { useEditPostContext } from '@context/EditPostContext';

interface EditPostFormProps {
  formId?: string;
  className?: string;
}

const EditPostForm: FC<EditPostFormProps> = ({
  className, formId = 'form-edit-post'
}): ReactNode => {
  // Feature image upload
  const [imageUpload, setImageUpload] = useState<File|null>(null);

  const { postState, setPostState } = useEditPostContext();

  const {
    register, handleSubmit, control, formState: { errors }
  } = useForm({ defaultValues: { ...postState} });

  useEffect(() => {
    console.log('EDIT POST FORM UPDATE: ', postState)
  }, [postState])

  /**
   * Fired when the user clicks "Publish"
   * @param data 
   */
  const onSubmit = (data: any) => {
    console.log('SUBMITTED DATA: ', data)
  }

  /**
   * Fired when the user changes the featured image for upload
   *
   * @param {(File|null)} e
   */
  const testChange = (e: File|null) => {
    console.log('TEST CHANGE HERE', e);
    setImageUpload(e)
  }

  const testContentChange = (e: any) => {
    console.log(e);
  }

  return (
    <form 
      id={formId}
      onSubmit={handleSubmit(onSubmit)}
      className="contained gutter-x"
    >
      { postState ? <>
        <TitleInputField 
          className={'mb-3'}
          {...register('title', {
            required: 'Title is required'
          })}
        />
        <div className="mb-3 d-flex align-items-center justify-content-between mb-4">
          <p className="subtitle mb-0 me-4">
            <span className='d-none d-sm-inline'>Published: </span>
            <span>{getDateString(new Date())}</span>
          </p>
          <button type="button"
            disabled
            className="btn d-flex align-items-center btn-link text-decoration-none"
          >
            <BsShare className="me-2" />
            <span className="d-none d-md-inline-block">Share</span>
          </button>
        </div>

        <BlogPostFeaturedImageUpload 
          onImageChange={testChange}
          {...register('featuredImageUrl', { 
            required: 'Featured image is required'
          })}
        />

        <div className='EditPost__container mb-5'>
          <EditPostTagsMultiselect />
        </div>
        
        <div className="EditPost__content-wrapper EditPost__container lead">
          <ContentEditor 
            onChange={testContentChange}
          />
        </div>
      </> : <>
        <h1>Post data not found!</h1>
        <p>Could not return data for this post.</p>
      </>}
    </form>
  );
}

export default EditPostForm;
