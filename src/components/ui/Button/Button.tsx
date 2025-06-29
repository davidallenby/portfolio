import classNames from 'classnames'
import { BUTTON_SIZES, BUTTON_VARIANTS } from './config'
import { ButtonSize, ButtonVariant } from './types'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const buttonSizeClass = BUTTON_SIZES[size]
  const buttonVariantClass = BUTTON_VARIANTS[variant]

  return (
    <button
      className={classNames(buttonVariantClass, buttonSizeClass, className)}
      {...props}
    >
      {leftIcon && <span className='me-2'>{leftIcon}</span>}
      {children}
      {rightIcon && <span className='ms-2'>{rightIcon}</span>}
    </button>
  )
}
