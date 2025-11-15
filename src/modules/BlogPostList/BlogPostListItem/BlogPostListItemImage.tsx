import classNames from '@node_modules/classnames'
import Image from 'next/image'
import { type FC } from 'react'
import { BLOG_POST_LIST_ITEM_IMAGE_BASE_CLASS } from '../config'

interface BlogPostListItemImageProps {
	src: string
	alt?: string
	loading?: 'eager' | 'lazy'
	className?: string
}

const BlogPostListItemImage: FC<BlogPostListItemImageProps> = ({ src, alt, loading, className }) => {
	return (
		<div className={classNames(BLOG_POST_LIST_ITEM_IMAGE_BASE_CLASS, className)}>
			<Image
				width={400}
				height={400}
				src={src}
				alt={alt || ''}
				loading={loading}
				className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
			/>
		</div>
	)
}

export default BlogPostListItemImage
