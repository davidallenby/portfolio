import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import { buttonVariants } from './config'
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
    <Link className={classNames(buttonVariants[variant], className)} {...props}>
      {children}
    </Link>
  )
}
