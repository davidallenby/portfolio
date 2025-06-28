import { ReactNode } from '@node_modules/@types/react'
import classNames from '@node_modules/classnames'
import Link from '@node_modules/next/link'

interface FeaturedProjectLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export default function FeaturedProjectLink({
  href,
  children,
  className
}: FeaturedProjectLinkProps) {
  return (
    <Link
      href={href}
      target='_blank'
      className={classNames(
        'FeaturedProjectLink no-underline transition-all duration-250 aspect-video w-full text-body relative flex hover:brightness-75',
        className
      )}
    >
      {children}
    </Link>
  )
}
