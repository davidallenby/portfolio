import React, { FC } from 'react';
import './BlogPostListItemImage.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useBreakpointBoolean } from '@hooks/dom';
import Skeleton from 'react-loading-skeleton';

interface BlogPostListItemImageProps {
  href: string;
  src: string;
  loading?: boolean;
}

const BlogPostListItemImage: FC<BlogPostListItemImageProps> = ({
  href, src, loading = false
}) => {
  const { isDesktop } = useBreakpointBoolean();

  /**
   * Change the image size depending on screen size. Will load the image faster
   * on smaller devices
   * @returns 
   */
  const getImageDimensions = () => ({
    height: isDesktop ? 400 : 800,
    width: isDesktop ? 400 : 800
  })
  const { height, width } = getImageDimensions();

  return (
    <Link href={href}
      className='BlogPostListItemImage d-block position-relative mb-4 mb-sm-0 mb-lg-4 mb-xl-0'
    >
      { loading ? <Skeleton width={'100%'} height={'100%'} /> : <Image
          width={height} 
          height={width}
          src={src} 
          alt=''
        />
      }
    </Link>
  );
}

export default BlogPostListItemImage;
