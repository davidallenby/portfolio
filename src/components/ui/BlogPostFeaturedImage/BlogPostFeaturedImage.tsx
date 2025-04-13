'use client';
import { type FC } from 'react';
import './BlogPostFeaturedImage.scss';
import { useBreakpointBoolean } from '@hooks/dom';
import Image from 'next/image';

interface BlogPostFeaturedImageProps {
	src: string;
	className?: string;
}

const BlogPostFeaturedImage: FC<BlogPostFeaturedImageProps> = ({ src, className }) => {
	const { isDesktop } = useBreakpointBoolean();

	const getImageDimensions = () => {
		return {
			height: isDesktop ? 800 : 1200,
			width: isDesktop ? 800 : 1200
		};
	};
	const { height, width } = getImageDimensions();
	return (
		<div className={`BlogPostFeaturedImage${className ? ` ${className}` : ''}`}>
			<Image src={src} alt={''} width={width} height={height} />
		</div>
	);
};

export default BlogPostFeaturedImage;
