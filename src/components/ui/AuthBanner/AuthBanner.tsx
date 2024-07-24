'use client'
import React, { FC, ReactNode } from 'react';
import './AuthBanner.scss';
import Link from 'next/link';
import { useAuthContext } from '@context/AuthContext';
import { auth } from '@lib/firebase/app';
import { HiHome } from 'react-icons/hi2';

interface AuthBannerProps {}
/**
 * Provides the user with authenticated user options. E.g. View admin area, and
 * log out. This component will use the auth context. If the user is not logged
 * in, it will remove the banner from the DOM.
 *
 * @return {*} 
 */
const AuthBanner: FC<AuthBannerProps> = (): ReactNode => {
  const user = useAuthContext();

  const signOut = () => auth.signOut();

  return (
    <>
      { user && <div className="AuthBanner bg-dark">
      <div className='gutter-x d-flex align-items-center justify-content-between'>
        <Link href={'/admin'} className='btn btn-link btn-sm text-light d-flex align-items-center'>
          <HiHome size={18} className='me-2' />
          <span>Admin</span>
        </Link>
        <span className='text-light mx-2'>|</span>
        <Link
          href={'/?'}
          className='btn btn-link btn-sm text-light me-3'
        >View site</Link>
        <div className='ms-auto'>
          <button type='button'
            onClick={() => signOut()}
            className='btn btn-link btn-sm text-light'
          >Logout</button>
        </div>
      </div>
    </div>}
    </>
  );
}

export default AuthBanner;
