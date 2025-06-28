'use client'
import classNames from '@node_modules/classnames'
import { useRouter } from 'next/navigation' // Usage: App router
import { type FC, type ReactNode, useCallback } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import './BlogPostContainer.scss'

interface BlogPostContainerProps {
  children: ReactNode
  className?: string
}

const BlogPostContainer: FC<BlogPostContainerProps> = ({
  children,
  className
}) => {
  const router = useRouter()

  const handleClick = useCallback(() => {
    router.push(`/blog`)
  }, [router])

  return (
    <div className={classNames('BlogPostContainer', className)}>
      <button
        type='button'
        onClick={handleClick}
        className='text-primary bg-transparent border-0 mb-4 px-0 text-underline-none inline-flex items-center'
      >
        <BsArrowLeft className='me-2 mt-1' size={18} />
        <span> Back to blog list</span>
      </button>
      {children}
    </div>
  )
}

export default BlogPostContainer
