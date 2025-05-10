import classNames from 'classnames'
import { buttonVariants } from './config'
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
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(buttonVariants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}
