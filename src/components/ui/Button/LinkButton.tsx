import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import { BUTTON_VARIANTS } from './config'
import { ButtonVariant } from './types'

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode
  variant?: ButtonVariant
  className?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export default function LinkButton({
  children,
  variant = 'primary',
  className,
  leftIcon,
  rightIcon,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={classNames(BUTTON_VARIANTS[variant], className)}
      {...props}
    >
      {leftIcon && <span className='mr-2'>{leftIcon}</span>}
      {children}
      {rightIcon && <span className='ml-2'>{rightIcon}</span>}
    </Link>
  )
}
