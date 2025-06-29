'use client'
import Input from '@components/ui/Inputs/Input'
import TextArea from '@components/ui/Inputs/TextArea'
import { RECAPTCHA_SITE_KEY } from '@constants/recaptcha'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { type FC, useCallback, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { app } from '../../../api/firebase'
import ContactLoadingSpinner from './ContactLoadingSpinner'
import { ContactFormInput } from './types'

const ContactForm: FC = () => {
  const functions = getFunctions(app)
  const sendEmail = httpsCallable(functions, 'postContactRequest')

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactFormInput>({
    defaultValues: {
      name: 'Test ',
      email: 'test@test.com',
      message: 'Test message'
    }
  })
  // Reference to the recaptcha component
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  // Sending states
  const [sending, setSending] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  /**
   * When the user clicks submit
   * @param data
   */
  const onSubmit: SubmitHandler<ContactFormInput> = useCallback(
    async (data: ContactFormInput) => {
      // Validate recaptcha
      const recaptchaToken = await recaptchaRef.current?.executeAsync()
      if (!recaptchaToken) {
        setError(true)
        console.error('No recaptcha token!')
        return
      }
      // Append the recaptcha token to the request payload.
      data.recaptchaToken = recaptchaToken
      // Handle form submission here, e.g., sending data to an API
      setSending(true)
      setError(false)
      setSuccess(false)
      try {
        await sendEmail({ ...data })
        setSuccess(true)
        reset()
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setSending(false)
      }
    },
    [sendEmail, reset]
  )

  return (
    <div className='ContactForm relative'>
      {!sending && !success && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='relative flex flex-col gap-4'
        >
          <Input
            id='name'
            label='Name'
            placeholder='Enter your name'
            error={errors.name?.message}
            {...register('name', { required: 'Name is required' })}
          />

          <Input
            id='email'
            label='Email'
            placeholder='Enter your email address'
            error={errors.email?.message}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address'
              }
            })}
          />

          <TextArea
            id='message'
            label='Message'
            placeholder="What's on your mind? ...."
            error={errors.message?.message}
            {...register('message', { required: 'Message is required' })}
          />

          {error && (
            <div className='p-3 bg-red-50 mb-3'>
              <p className='mb-0 text-red-800'>
                <span>
                  🚨 There was an error processing your request. Try again
                  later.
                </span>
              </p>
            </div>
          )}

          <div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              size='invisible'
            />
            <button
              disabled={sending}
              type='submit'
              className='btn btn-outline-primary'
            >
              Submit
            </button>
          </div>
        </form>
      )}
      {sending && (
        <div className='absolute top-0 left-0 h-full w-full bg-white flex items-center justify-center text-center'>
          <ContactLoadingSpinner />
        </div>
      )}

      {!sending && success && (
        <div className='absolute top-0 left-0 h-full w-full bg-white flex items-center justify-center text-center'>
          <p className='lead'>✅ Message sent successfully!</p>
          <p>Thanks for your message. I&apos;ll be in touch soon.</p>
        </div>
      )}
    </div>
  )
}

export default ContactForm
