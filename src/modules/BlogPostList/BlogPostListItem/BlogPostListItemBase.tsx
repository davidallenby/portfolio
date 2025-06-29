import classNames from '@node_modules/classnames'
import Link from '@node_modules/next/link'
import { type FC } from 'react'
import { BLOG_POST_LIST_ITEM_BASE_CLASS } from '../config'

interface BlogPostListItemBaseProps {
  href: string
  children: React.ReactNode
  className?: string
}

export const BlogPostListItemBase: FC<BlogPostListItemBaseProps> = ({
  href,
  children,
  className
}) => {
  return (
    <Link
      href={href}
      className={classNames(BLOG_POST_LIST_ITEM_BASE_CLASS, className)}
    >
      {children}
    </Link>
  )
}
