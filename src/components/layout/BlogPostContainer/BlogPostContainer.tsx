'use client'
import classNames from '@node_modules/classnames'
import Link from '@node_modules/next/link'
import { type FC, type ReactNode } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import './BlogPostContainer.css'

interface BlogPostContainerProps {
  children: ReactNode
  className?: string
}

const BlogPostContainer: FC<BlogPostContainerProps> = ({
  children,
  className
}) => {
  return (
    <div
      className={classNames(
        'max-w-screen-md mx-auto BlogPostContainer py-24',
        className
      )}
    >
      <Link
        href='/blog'
        className='text-primary bg-transparent border-0 mb-4 px-0 text-underline-none inline-flex items-center hover:text-primary-100 transition-colors'
      >
        <BsArrowLeft className='me-2 mt-1' size={18} />
        <span> Back to blog list</span>
      </Link>
      {children}
    </div>
  )
}

export default BlogPostContainer
