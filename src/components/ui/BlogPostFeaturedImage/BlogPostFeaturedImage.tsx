'use client'
import { useBreakpointBoolean } from '@hooks/dom'
import classNames from '@node_modules/classnames'
import Image from 'next/image'
import { type FC } from 'react'
import './BlogPostFeaturedImage.scss'

interface BlogPostFeaturedImageProps {
  src: string
  className?: string
}

const BlogPostFeaturedImage: FC<BlogPostFeaturedImageProps> = ({
  src,
  className
}) => {
  const { isDesktop } = useBreakpointBoolean()

  const getImageDimensions = () => {
    return {
      height: isDesktop ? 800 : 1200,
      width: isDesktop ? 800 : 1200
    }
  }
  const { height, width } = getImageDimensions()
  return (
    <div
      className={classNames('BlogPostFeaturedImage w-full relative', className)}
    >
      <Image
        src={src}
        alt={''}
        width={width}
        height={height}
        className='w-full h-auto object-cover'
      />
    </div>
  )
}

export default BlogPostFeaturedImage
