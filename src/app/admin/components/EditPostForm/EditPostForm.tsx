'use client'
import React, { FC, ReactNode, useEffect } from 'react';
import './EditPostForm.scss';
import TitleInputField from '../TitleInputField/TitleInputField';
import { BsShare } from 'react-icons/bs';
import Chip from '@components/ui/Chip/Chip';
import { BlogPostView } from '@interfaces/blog.interfaces';
import { getDateString } from '@utils/dates';

interface EditPostFormProps {
  postData: BlogPostView|null;
  className?: string;
  onChange?: () => void;
}

const EditPostForm: FC<EditPostFormProps> = ({
  className, postData
}): ReactNode => {

  useEffect(() => {
    console.log(postData);
  }, [postData])

  return (
    <div className="contained gutter-x">
      { postData ? <>
        <TitleInputField 
          className={'mb-3'}
        />
        <div className="mb-3 d-flex align-items-center justify-content-between mb-4">
          <p className="subtitle mb-0 me-4">
            <span>Created: </span>
            <span>{getDateString(postData.dateCreated)}</span>
          </p>
          <button type="button"
            disabled
            className="btn d-flex align-items-center btn-link text-decoration-none"
          >
            <BsShare className="me-2" />
            <span className="d-none d-md-inline-block">Share</span>
          </button>
        </div>

        <div className="EditPost__featured-image-wrapper">

        </div>

        <div className="EditPost__container mb-3">
          <Chip className="me-4 mb-3">
            Test
          </Chip>
          <Chip className="me-4 mb-3">
            Test
          </Chip>
          <Chip className="me-4 mb-3">
            Test
          </Chip>
          <Chip className="me-4 mb-3">
            Test
          </Chip>
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
    </div>
  );
}

export default EditPostForm;
