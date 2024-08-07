'use client'
import React, { FC, ReactNode } from 'react';
import './EditPostForm.scss';
import TitleInputField from '@components/ui/TitleInputField/TitleInputField';
import { BsShare } from 'react-icons/bs';
import { getDateString } from '@utils/dates';
import { Controller, useFormContext } from 'react-hook-form';
import BlogPostFeaturedImageUpload from '@components/ui/BlogPostFeaturedImageUpload/BlogPostFeaturedImageUpload';
import ContentEditor from '@features/ContentEditor/ContentEditor';
import EditPostTagsMultiselect from './EditPostTagsMultiselect';;
import { EditorEvents } from '@tiptap/react';
import { Editor } from '@tiptap/core'
import { BlogPostTag, BlogPostView } from '@interfaces/blog.interfaces';

interface EditPostFormProps {
  formId?: string;
  className?: string;
  post: BlogPostView|null
}

const EditPostForm: FC<EditPostFormProps> = ({
  className, post
}): ReactNode => {

  const {
    register, handleSubmit, control, setValue, formState: { errors }
  } = useFormContext();

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
  const imageChangeHandler = (e: File) => {
    setValue('featuredImgUrl', e)
  }

  /**
   * Fired when the user changes the content in the editor field
   *
   * @param {EditorEvents['update']} e
   */
  const contentChangeHandler = (e: EditorEvents['update']) => {
    const { editor, transaction } = e;
    const content = (isEditorDirty(editor)) ? transaction.doc : null;
    setValue('content', content)
  }

  /**
   * Check if there is any content in the field. We'll need to clear the field
   * if not.
   *
   * @param {Editor} editor
   * @return {*} 
   */
  const isEditorDirty = (editor: Editor): boolean => {
    return !!editor?.state.doc.textContent.trim();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="contained gutter-x"
    >
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

      <Controller 
        name='featuredImgUrl'
        control={control}
        rules={{
          required: 'Featured image is required'
        }}
        render={({ field }) => {
          return <BlogPostFeaturedImageUpload 
            onImageChange={imageChangeHandler}
          />
        }} 
      />

      <div className='EditPost__container mb-5'>
        
        <Controller 
          name='tagIds'
          control={control}
          
          rules={{
            validate: (val: string[]) => {
              return !!val.length || "Tags are required";
            }
          }}
          render={({ field }) => {
            return <EditPostTagsMultiselect 
              value={field.value}
              onChange={(e: BlogPostTag[]) => {
                console.log('New tags: ', e)
                const mapped = e.map((tag) => tag.id)
                setValue('tagIds', mapped)
              }}
            />
          }} 
        />
      </div>
      
      <div className="EditPost__content-wrapper EditPost__container lead">


        <Controller 
          name='content'
          control={control}
          rules={{
            required: 'Content is required'
          }}
          render={({ field }) => (
            <ContentEditor 
              value={field.value}
              onChange={contentChangeHandler}
            />
          )} 
        />
      </div>
    </form>
  );
}

export default EditPostForm;
