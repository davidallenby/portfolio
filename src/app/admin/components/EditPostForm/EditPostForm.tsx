'use client'
import React, { FC, ReactNode, useEffect, useState } from 'react';
import './EditPostForm.scss';
import TitleInputField from '../TitleInputField/TitleInputField';
import { BsShare } from 'react-icons/bs';
import { BlogPostView } from '@interfaces/blog.interfaces';
import { getDateString } from '@utils/dates';
import { useForm } from 'react-hook-form';
import BlogPostFeaturedImageUpload from '../BlogPostFeaturedImageUpload/BlogPostFeaturedImageUpload';
import BlogPostTagList from '@features/BlogPostTagList/BlogPostTagList';
import BlogPostTagsInput from '@components/ui/BlogPostTagsInput/BlogPostTagsInput';
import { BiEditAlt } from 'react-icons/bi';

interface EditPostFormProps {
  formId?: string;
  postData: BlogPostView|null;
  className?: string;
  onChange?: () => void;
}

const EditPostForm: FC<EditPostFormProps> = ({
  className, postData, formId = 'form-edit-post'
}): ReactNode => {
  // React hook form
  const {
    register, reset, handleSubmit, getValues, formState: { errors }
  } = useForm({ defaultValues: { ...postData} });
  // Feature image upload
  const [imageUpload, setImageUpload] = useState<File|null>(null);

  /**
   * Fired when the user clicks "Publish"
   * @param data 
   */
  const onSubmit = (data: any) => {
    console.log('SUBMITTED DATA: ', data)
  }

  useEffect(() => {
    console.log('Post data: ', postData)
    reset({ ...postData });
  }, [postData, reset])

  /**
   * Fired when the user changes the featured image for upload
   *
   * @param {(File|null)} e
   */
  const testChange = (e: File|null) => {
    console.log('TEST CHANGE HERE', e);
    setImageUpload(e)
  }


  return (
    <form 
      id={formId}
      onSubmit={handleSubmit(onSubmit)}
      className="contained gutter-x"
    >
      { postData ? <>
        <TitleInputField 
          className={'mb-3'}
          {...register('title', { required: 'Title is required' })}
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

        <div className='EditPost__container mb-3'>
          <BlogPostTagList tagIds={getValues('tagIds')}
            enableEdit
          />
        </div>
        
        <div className="EditPost__content-wrapper EditPost__container  lead">
          <p>Occaecat non enim labore cupidatat enim Lorem sunt. Commodo velit dolor reprehenderit sit pariatur commodo quis ea eu exercitation eu ad. Dolore anim anim aliqua deserunt non adipisicing.</p>
          <p>Dolor aliquip exercitation eiusmod velit aliqua consequat nisi ea laboris velit. Nulla non aliqua adipisicing ex minim et labore amet quis exercitation in. Officia laborum velit laborum ad proident ullamco nostrud voluptate occaecat elit. Est ad exercitation aliqua quis labore tempor ipsum aliquip et. Ad ad cillum cupidatat esse amet officia Lorem elit anim minim labore quis eiusmod.</p>
          <p>Enim proident ea mollit duis officia quis pariatur nostrud excepteur eiusmod. Enim consequat deserunt ipsum voluptate sint cillum tempor. Ipsum cupidatat Lorem mollit et. Veniam sint reprehenderit excepteur aliquip amet culpa irure ad magna velit aute excepteur eu occaecat. Adipisicing irure pariatur labore sint laboris enim ipsum voluptate et laborum sunt laboris Lorem in. Et incididunt minim ut dolore id tempor non officia. Exercitation do consectetur et pariatur anim cillum labore ex.</p>
        </div>
      </> : <>
        <h1>Post data not found!</h1>
        <p>Could not return data for this post.</p>
      </>}
    </form>
  );
}

export default EditPostForm;
