'use client'
import React, { FC, ReactNode } from 'react';
import './EditPostHeader.scss';
import Link from 'next/link';
import { BsArrowLeft, BsRocketTakeoff, BsSave } from 'react-icons/bs';
import { useFormContext } from 'react-hook-form';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { collection, doc } from 'firebase/firestore';
import { BlogPostView } from '@interfaces/blog.interfaces';
import { db } from '@lib/firebase/app';

interface EditPostHeaderProps {
  className?: string;
}

const EditPostHeader: FC<EditPostHeaderProps> = ({
  className
}): ReactNode => {

  const { formState, handleSubmit, getValues, trigger } = useFormContext();

  const draftClickHandler = async (e: any) => {
    console.log('---- DRAFT ------', e);
    
    const versionRef = doc(collection(db, `blog_posts/${e.id}/versions`))
    console.log(versionRef.id)

    return;
    if (!e.id) {
      console.log('NO POST ID!!!')
      return;
    }

    try {
      let newPostData: BlogPostView = { ...e }

      // Create a new version reference
      const versionRef = doc(db, `blog_posts/${e.id}/versions/`)

      // If the featured image is a file blog, we need to upload the new image
      const newFeaturedImg = (typeof e.featuredImgUrl !== 'string')

      if (newFeaturedImg) {
        const storage = getStorage();
        const storageRef = ref(storage, `blog_posts/${e.id}/${e.id}_featured`);
        const upload = await uploadBytes(storageRef, e.featuredImgUrl);
        // console.log('Upload snapshot: ', upload)
        const featuredImageUrl = await getDownloadURL(upload.ref)
        newPostData.featuredImageUrl = featuredImageUrl;
      }
      console.log('New post data: ', newPostData)

      

    } catch (err) {
      console.log(err);
    }
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
          onClick={handleSubmit(draftClickHandler)}
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
