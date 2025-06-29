import classNames from 'classnames'
import { ComponentProps, forwardRef } from 'react'
import InputLabel from './InputLabel'
import { INPUT_VARIANT_BORDER_COLOURS } from './config'
import { InputVariant } from './types'

interface TextAreaProps extends ComponentProps<'textarea'> {
  id?: string
  variant?: InputVariant
  disabled?: boolean
  className?: string
  label?: string
  error?: string
  hideLabel?: boolean
}

interface TextAreaProps extends ComponentProps<'textarea'> {
  label?: string
  id?: string
  disabled?: boolean
  className?: string
  isResizeEnabled?: boolean
  error?: string
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      label,
      id,
      disabled,
      className,
      isResizeEnabled = true,
      error,
      ...props
    }: TextAreaProps,
    ref
  ) {
    return (
      <label
        htmlFor={props.name}
        className='relative flex w-full flex-col gap-1'
      >
        {!!label && <InputLabel>{label}</InputLabel>}
        <textarea
          ref={ref}
          id={id}
          className={classNames(
            'w-full border border-primary/70 text-body placeholder:text-body/50',
            {
              'resize-none': !isResizeEnabled,
              [`${INPUT_VARIANT_BORDER_COLOURS.error}`]: !!error,
              [`${INPUT_VARIANT_BORDER_COLOURS.neutral}`]: !error
            },
            className
          )}
          disabled={disabled}
          {...props}
        />
        {!!error && <small className='text-red-800'>{error}</small>}
      </label>
    )
  }
)

export default TextArea
