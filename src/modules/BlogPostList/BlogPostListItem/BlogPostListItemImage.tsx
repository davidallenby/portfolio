import classNames from '@node_modules/classnames'
import Image from 'next/image'
import { type FC } from 'react'

interface BlogPostListItemImageProps {
	src: string
	alt?: string
	loading?: 'eager' | 'lazy'
	className?: string
}

const BlogPostListItemImage: FC<BlogPostListItemImageProps> = ({ src, alt, loading, className }) => {
	return (
		<div
			className={classNames(
				'aspect-video md:aspect-square lg:aspect-video xl:aspect-square block relative w-full md:max-w-[28%] lg:max-w-none xl:max-w-[30%] overflow-hidden',
				className
			)}
		>
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
