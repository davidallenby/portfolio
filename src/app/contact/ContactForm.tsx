'use client'
import React, { FC, useRef, useState } from 'react';
import './ContactForm.scss';
import ReCAPTCHA from 'react-google-recaptcha';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RECAPTCHA_SITE_KEY } from '@constants/recaptcha';
import { getFunctions, httpsCallable } from 'firebase/functions';
import SendingSpinner from './SendingSpinner';
import { app } from '../../api/firebase';


interface ContactFormProps {}

// Define the form data type
interface ContactFormInput {
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
    register, reset, handleSubmit, formState: { errors }
  } = useForm<ContactFormInput>();
  // Reference to the recaptcha component
  const recaptchaRef = useRef<ReCAPTCHA>(null);  
  // Sending states
  const [sending, setSending] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  /**
   * When the user clicks submit
   * @param data 
   */
  const onSubmit: SubmitHandler<ContactFormInput> = async data => {
    // Validate recaptcha
    const recaptchaToken = await recaptchaRef.current?.executeAsync();
    if (!recaptchaToken) { 
      console.error('No recaptcha token!')
      return;
    }
    // Append the recaptcha token to the request payload.
    data.recaptchaToken = recaptchaToken;
    // Handle form submission here, e.g., sending data to an API
    setSending(true);
    setError(false);
    setSuccess(false);
    try {
      await sendEmail({ ...data })
      setSuccess(true);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      reset();
      setSending(false);
    }
  };

  return (
    <div className='ContactForm'>
      { !sending && !success && <form onSubmit={handleSubmit(onSubmit)}
        className='position-relative'
      >
        <div className='mb-4'>
          <label htmlFor="name">Name:</label>
          <input 
            disabled={sending}
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
            disabled={sending}
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
            disabled={sending}
            placeholder="What's on your mind? ...."
            className={errors.email ? 'border-danger' : ''}
            id="message"
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          {errors.message && <span className='d-block text-danger mt-1'>
            {errors.message.message}
          </span>}
        </div>

        {error && <div className="p-3 border border-danger bg-light mb-3">
          <p className='mb-0 text-danger'>
            <span>🚨 There was an error processing your request. Try again later.</span>
          </p>
        </div>}

        <div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            size="invisible"
          />
          <button 
            disabled={sending}
            type="submit"
            className='btn btn-outline-primary'
          >Submit</button>
        </div>


      </form>}
        { sending && <div className='position-absolute top-0 left-0 h-100 w-100 ContactForm__overlay'>
          <SendingSpinner />  
        </div>}

        { !sending && success && <div className='position-absolute top-0 left-0 h-100 w-100 ContactForm__overlay pt-5 text-center'>
          <p className='lead'>✅ Message sent successfully!</p>
          <p>Thanks for your message. I&apos;ll be in touch soon.</p>
        </div>}
    </div>
  );
}

export default ContactForm;
