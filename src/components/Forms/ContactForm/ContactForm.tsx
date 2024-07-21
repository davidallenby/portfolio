'use client'
import React, { FC, useRef, useState } from 'react';
import './ContactForm.scss';
import ReCAPTCHA from 'react-google-recaptcha';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RECAPTCHA_SITE_KEY } from '../../../constants/recaptcha';
import { getFunctions, httpsCallable } from 'firebase/functions';
import app from '@lib/firebase-config';


interface ContactFormProps {}

// Define the form data type
interface IFormInput {
  name: string;
  email: string;
  phone?: string;
  message: string;
  recaptchaToken: string;
}

const ContactForm: FC<ContactFormProps> = () => {
  const functions = getFunctions(app);
  const sendEmail = httpsCallable(functions, 'postContactRequest');

  const { 
    register, handleSubmit, setValue, formState: { errors }
  } = useForm<IFormInput>();
  // Reference to the recaptcha component
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  // Loading state when the email is sending
  const [sending, setSending] = useState<boolean>(false);

  /**
   * When the user clicks submit
   * @param data 
   */
  const onSubmit: SubmitHandler<IFormInput> = async data => {
    const recaptchaToken = await recaptchaRef.current?.executeAsync();
    if (!recaptchaToken) { 
      console.error('No recaptcha token!')
      return;
    }

    data.recaptchaToken = recaptchaToken;
    console.log(data);
    // Handle form submission here, e.g., sending data to an API
    setSending(true);
    try {
      const req = await sendEmail({ ...data })
    } catch (err) {
      console.log(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className='ContactForm'
    >
      <div className='mb-4'>
        <label htmlFor="name">Name:</label>
        <input 
          placeholder='Enter your name'
          className={errors.email ? 'border-danger' : ''}
          id="name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <span className='d-block text-danger mt-1'>
          {errors.name.message}
        </span>}
      </div>

      <div className='mb-4'>
        <label htmlFor="email">Email:</label>
        <input 
          id="email"
          placeholder='Enter your email address'
          className={errors.email ? 'border-danger' : ''}
          type="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <span className='d-block text-danger mt-1'>
          {errors.email.message}
        </span>}
      </div>

      <div className='mb-4'>
        <label htmlFor="message">Message:</label>
        <textarea 
          placeholder="What's on your mind? ...."
          className={errors.email ? 'border-danger' : ''}
          id="message"
          {...register('message', { required: 'Message is required' })}
        ></textarea>
        {errors.message && <span className='d-block text-danger mt-1'>
          {errors.message.message}
        </span>}
      </div>

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={RECAPTCHA_SITE_KEY}
        size="invisible"
      />

      <button type="submit"
        className='btn btn-primary'
      >Submit</button>
    </form>
  );
}

export default ContactForm;
