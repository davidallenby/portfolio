'use client'
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@lib/firebase/app';

// Define the form data type
interface LoginFormInput {
  email: string;
  password: string;
}

interface ContactFormProps { }

const LoginForm: FC<ContactFormProps> = () => {
  const { 
    register, handleSubmit, formState: { errors } 
  } = useForm<LoginFormInput>();

  const [error , setError] = useState('')
  const router = useRouter();

  /**
   * Fired when the user submits the form. Clear any errors, attempts sign in.
   * If success, will redirec to the admin area.
   * If fail, will set an error.
   *
   * @param {*} data
   */
  const onSubmit = async (data: any) => {
    setError('');
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.push('/admin');
    } catch (error: any) {
      console.error('Error logging in:', error.message);
      setError('There was an error logging in.')
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label htmlFor="email">Email</label>
        <input id="email" 
          placeholder='Email address'
          type="email" 
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className='text-danger mt-1'>
          { errors.email?.message }
        </p>}
      </div>
      <div className='mb-3'>
        <label htmlFor="password">Password</label>
        <input id="password" 
          placeholder='Password'
          type="password" 
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className='text-danger mt-1'>
          {errors.password?.message}
        </p>}
      </div>
      { error && <p className='mb-4 text-danger'>{error}</p>}
      <button type="submit"
        className='btn btn-outline-primary'
      >Login</button>
    </form>
  );
};

export default LoginForm;