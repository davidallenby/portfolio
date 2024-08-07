import React, { ChangeEvent, DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes, useEffect, useState } from 'react';
import './BlogPostFeaturedImageUpload.scss';
import Image from 'next/image';
import { BiEditAlt } from 'react-icons/bi';

interface BlogPostFeaturedImageUploadProps extends DetailedHTMLProps<
InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onImageChange: (file: File) => void;
}

const BlogPostFeaturedImageUpload: FC<BlogPostFeaturedImageUploadProps> = 
forwardRef((props: BlogPostFeaturedImageUploadProps, _ref: any) => {

  const [imagePreviewUrl, setImagePreviewUrl] = 
    useState(props.value as string || '');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files.length) { return; }
    const file = e.target.files[0];
    // If there's a valid file, we need to pass it up to the parent for upload  
    const reader = new FileReader();
    // Get the preview URL
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    // Pass file blob up to parent
    props.onImageChange(file);
  };

  return (
    <label htmlFor="input-featured-img" 
      className="BlogPostFeaturedImageUpload"
    >
      <span className='BlogPostFeaturedImageUpload__hover-state d-flex align-items-center justify-content-center'>
        <BiEditAlt className='me-3' />
        { imagePreviewUrl ?  <span className='BlogPostFeaturedImageUpload__text'>Edit Image</span> : 
        <span className='BlogPostFeaturedImageUpload__text'>No image selected</span>}
      </span>
      <input 
        onChange={handleImageChange}
        type='file' 
        className='d-none'
        id='input-featured-img'
      />
      { imagePreviewUrl && <Image 
        src={imagePreviewUrl} 
        fill 
        alt={''}
      />}
    </label>
  );
})

BlogPostFeaturedImageUpload.displayName = 'BlogPostFeaturedImageUpload';

export default BlogPostFeaturedImageUpload;
