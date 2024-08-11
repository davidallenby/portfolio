import React, { FC } from 'react';
import './BlogPostListItemImage.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useBreakpointBoolean } from '@hooks/dom';

interface BlogPostListItemImageProps {
  href: string;
  src: string;
}

const BlogPostListItemImage: FC<BlogPostListItemImageProps> = ({
  href, src 
}) => {
  const { isDesktop } = useBreakpointBoolean();

  const getImageDimensions = () => {
    return {
      height: isDesktop ? 400 : 800,
      width: isDesktop ? 400 : 800
    }
  }
  const { height, width } = getImageDimensions();

  return (
    <Link href={href}
      className='BlogPostListItemImage d-block position-relative mb-4 mb-sm-0 mb-lg-4 mb-xl-0'
    >
    <Image
      width={height} 
      height={width}
      src={src} 
      alt=''
    />
    </Link>
  );
}

export default BlogPostListItemImage;
