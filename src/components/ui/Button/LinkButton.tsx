import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import { BUTTON_VARIANTS } from './config'
import { ButtonVariant } from './types'

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode
  variant?: ButtonVariant
  className?: string
}

export default function LinkButton({
  children,
  variant = 'primary',
  className,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={classNames(BUTTON_VARIANTS[variant], className)}
      {...props}
    >
      {children}
    </Link>
  )
}
