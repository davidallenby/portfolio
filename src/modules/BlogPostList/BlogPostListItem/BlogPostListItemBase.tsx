import Link from '@node_modules/next/link'
import { type FC } from 'react'
import { BLOG_POST_LIST_ITEM_BASE_CLASS } from '../config'

interface BlogPostListItemBaseProps {
  href: string
  children: React.ReactNode
}

export const BlogPostListItemBase: FC<BlogPostListItemBaseProps> = ({
  href,
  children
}) => {
  return (
    <Link href={href} className={BLOG_POST_LIST_ITEM_BASE_CLASS}>
      {children}
    </Link>
  )
}
