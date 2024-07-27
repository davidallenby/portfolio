'use client'
import React, { createRef, FC, ReactNode, useEffect, useState } from 'react';
import './EditPostForm.scss';
import TitleInputField from '../TitleInputField/TitleInputField';
import { BsShare } from 'react-icons/bs';
import { BlogPostTag, BlogPostView } from '@interfaces/blog.interfaces';
import { getDateString } from '@utils/dates';
import { useForm } from 'react-hook-form';
import BlogPostFeaturedImageUpload from '../BlogPostFeaturedImageUpload/BlogPostFeaturedImageUpload';
import { useGetTags } from '../../../../hooks/blog';
import { MultiSelect } from 'primereact/multiselect';
import Chip from '@components/ui/Chip/Chip';
import { queryClient } from '@context/ReactQueryProvider';
import { useMutation } from '@tanstack/react-query';
import { createTag } from '@lib/firebase/firestore';
import { QUERY } from '@constants/query';
import { objectSort } from '../../../../helpers/common';

import ContentEditor from '@features/ContentEditor/ContentEditor';

interface EditPostFormProps {
  formId?: string;
  postData: BlogPostView;
  className?: string;
  onChange?: () => void;
}

const EditPostForm: FC<EditPostFormProps> = ({
  className, postData, formId = 'form-edit-post'
}): ReactNode => {
  // Ref

  // const editorRef: RefObject<Editor> = createRef();
  const ref: React.RefObject<any> = createRef();
  // React hook form
  const {
    register, reset, handleSubmit, getValues, control, formState: { errors }
  } = useForm({ defaultValues: { ...postData} });
  // Feature image upload
  const [imageUpload, setImageUpload] = useState<File|null>(null);
  // Queries
  const { isLoading, isError, isSuccess, data } = useGetTags();
  // Selected items
  const [selected, setSelected] = useState<BlogPostTag[]>([]);
  // Options
  const [options, setOptions] = useState<BlogPostTag[]>([])
  // Creating tag spinner
  const [creating, setCreating] = useState<boolean>(false);

  // Mutations
  const mutation = useMutation({
    mutationFn: createTag,
    onSuccess: async (newTagId) => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({
        queryKey: [QUERY.IDS.BLOG_POST_TAGS]
      })
      return newTagId;
    },
  })

  /**
   * Fired when the user clicks "Publish"
   * @param data 
   */
  const onSubmit = (data: any) => {
    console.log('SUBMITTED DATA: ', data)
  }

  useEffect(() => {
    if (isSuccess) {
      setOptions(data)
      data.sort(objectSort('label'))
    }
  }, [data, isSuccess])

  useEffect(() => {
    reset({ ...postData });
    setSelected(data?.filter(item => postData.tagIds.includes(item.id)) ?? [])
  }, [postData, reset, data])

  /**
   * Fired when the user changes the featured image for upload
   *
   * @param {(File|null)} e
   */
  const testChange = (e: File|null) => {
    console.log('TEST CHANGE HERE', e);
    setImageUpload(e)
  }

  /**
   * When the user clicks the "dismiss" icon on each chip. It should remove the
   * item from the list. This function handles updating the selected items array
   *
   * @param {BlogPostTag} clicked
   */
  const removeItem = (clicked: BlogPostTag) => {
    const filtered = selected.filter((item) => item.id !== clicked.id);
    setSelected(filtered);
  }

  /**
   * Creates the template for the selected items in the multi select dropdown
   *
   * @param {BlogPostTag} option
   * @return {*} 
   */
  const selectedItemTemplate = (option: BlogPostTag): ReactNode => {
    if (!option) { return; }
      return <Chip onDismiss={(e) => removeItem(option)}
        className='me-3 my-2'
      >
        { option?.label }
      </Chip>;
  };

  /**
   * Fired when the user clicks "create new tag" button. It will add a new tag
   * to the data base, then react-query will invalidate and update the list of
   * tags
   *
   * @param {string} label
   */
  const createTagHandler = async (label: string) => {
    setCreating(true);
    await mutation.mutateAsync(label)
    setCreating(false);            
  }

  /**
   * Creates the empty state template for the filter. When the user searches for
   * a tag item, and nothing appears. It will show this empty message with a
   * button that allows the user to create a tag from the filter value
   * @param e 
   * @returns 
   */
  const emptyState = (e: any) => {
    const filterValue = e.filterValue;
    return (
      <div className='d-flex align-items-center flex-wrap'>
        <p className='mb-0 me-1'>No result found. </p>
        <button type="button" 
          disabled={creating}
          onClick={(e) => createTagHandler(filterValue)}
          className={'p-0 bg-transparent border-0 text-primary btn-link text-decoration-none'}
        >
          Create tag from filter
        </button>
      </div>
    );
  };

  /**
   * Fired when the list of selected tags is updated
   * @param e 
   */
  const tagChangeHandler = ({ value }: { 
    value: BlogPostTag[]
  }) => setSelected(value)

  return (
    <form 
      id={formId}
      onSubmit={handleSubmit(onSubmit)}
      className="contained gutter-x"
    >
      { postData ? <>
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

        <div className='EditPost__container mb-3'>
          <MultiSelect
            ref={ref}
            filter
            resetFilterOnHide
            style={{ width: '100%' }}
            value={selected} 
            options={data ? [...data] : []} 
            onChange={tagChangeHandler} 
            optionLabel="label" 
            placeholder="Select tags" 
            selectedItemTemplate={selectedItemTemplate}
            emptyFilterMessage={emptyState} 
            className="w-full md:w-20rem" 
            display="chip" 
          />
        </div>
        
        <div className="EditPost__content-wrapper EditPost__container lead">
          <ContentEditor 
            onChange={() => {}}
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
