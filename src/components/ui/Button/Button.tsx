import classNames from 'classnames'
import { BUTTON_SIZES, BUTTON_VARIANTS } from './config'
import { ButtonSize, ButtonVariant } from './types'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  const buttonSizeClass = BUTTON_SIZES[size]
  const buttonVariantClass = BUTTON_VARIANTS[variant]

  return (
    <button
      className={classNames(buttonVariantClass, buttonSizeClass, className)}
      {...props}
    >
      {children}
    </button>
  )
}
