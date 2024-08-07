'use client'
import React, { FC, ReactNode } from 'react';
import './EditPostHeader.scss';
import Link from 'next/link';
import { BsArrowLeft, BsRocketTakeoff, BsSave } from 'react-icons/bs';

interface EditPostHeaderProps {
  className?: string;
}

const EditPostHeader: FC<EditPostHeaderProps> = ({
  className
}): ReactNode => {

  const draftClickHandler = (e: any) => {
    console.log('---- DRAFT ------', e);
  }
  const publishClickHandler = (e: any) => {
    console.log('---- PUBLISH ----', e);
  }

  return (
    <div className="mb-4 gutter-x py-3 d-flex align-items-center justify-content-between bg-beige">
      <Link href="/admin/blog-posts" 
        className="btn btn-link d-inline-flex align-items-center text-decoration-none"
      >
        <BsArrowLeft className="me-md-2" />
        <span className="d-none d-md-inline">Back to posts</span>
      </Link>
      <div>
        <button type="button"
          className="btn btn-outline-primary d-inline-flex align-items-center me-4"
          onClick={draftClickHandler}
        >
          <BsSave className="me-sm-2" />
          <span className="d-none d-sm-inline">Save draft</span>
        </button>

        <button type="button"
          className="btn btn-primary d-inline-flex align-items-center"
          onClick={publishClickHandler}
        >
          <BsRocketTakeoff className="me-sm-2" />
          <span className="d-none d-sm-inline">Publish</span>
        </button>
      </div>
    </div>
  );
}

export default EditPostHeader;
