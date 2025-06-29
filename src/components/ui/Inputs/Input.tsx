import classNames from '@node_modules/classnames'
import { ComponentProps, forwardRef } from 'react'
import InputLabel from './InputLabel'
import {
  INPUT_VARIANT_BACKGROUND_COLOURS,
  INPUT_VARIANT_BORDER_COLOURS,
  INPUT_VARIANT_TEXT_COLOURS
} from './config'
import { InputVariant } from './types'

interface InputProps extends ComponentProps<'input'> {
  id?: string
  variant?: InputVariant
  disabled?: boolean
  className?: string
  label?: string
  error?: string
  hideLabel?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    value,
    id,
    variant = 'neutral',
    disabled,
    className,
    label,
    error,
    hideLabel,
    ...props
  }: InputProps,
  ref
) {
  return (
    <label htmlFor={props.name} className='flex w-full flex-col gap-1'>
      {!!label && (
        <InputLabel
          htmlFor={props.name}
          className={classNames({ hidden: hideLabel })}
        >
          {label}
        </InputLabel>
      )}
      <div
        className={classNames(
          'relative border-1',
          `${INPUT_VARIANT_TEXT_COLOURS[variant]}`,
          `${INPUT_VARIANT_BACKGROUND_COLOURS[variant]}`,
          {
            [INPUT_VARIANT_BORDER_COLOURS.error]: !!error,
            [INPUT_VARIANT_BORDER_COLOURS.neutral]: !error
          },
          className
        )}
      >
        <input
          ref={ref}
          value={value}
          id={id}
          className={classNames('w-full border-none')}
          disabled={disabled}
          {...props}
        />
      </div>
      {!!error && <small className='text-red-800'>{error}</small>}
    </label>
  )
})

export default Input
