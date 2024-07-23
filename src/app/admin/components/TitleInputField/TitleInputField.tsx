'use client'
import React, { FC, ReactNode } from 'react';
import './TitleInputField.scss';

interface TitleInputFieldProps {
  className?: string;
}

const AuthBanner: FC<TitleInputFieldProps> = ({
  className
}): ReactNode => {

  return (
    <input type="text" 
      placeholder='Enter post title'
      className={`TitleInputField${className ? ` ${className}` : '' }`}
    />
  );
}

export default AuthBanner;
