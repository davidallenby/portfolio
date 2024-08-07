'use client'
import React, { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';
import './TitleInputField.scss';

interface TitleInputFieldProps extends DetailedHTMLProps<
InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}

const TitleInputField = forwardRef((props: TitleInputFieldProps, _ref: any) => {
  const { className } = props;
  return (
    <input 
      { ...props }
      ref={_ref}
      type="text" 
      placeholder='Enter post title'
      className={`TitleInputField${className ? ` ${className}` : '' }`}
    />
  );
})

TitleInputField.displayName = 'TitleInputField';

export default TitleInputField;
