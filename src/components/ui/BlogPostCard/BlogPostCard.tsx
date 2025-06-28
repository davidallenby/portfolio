import type { BlogPost } from '@interfaces/blog.interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { type FC } from 'react'
import { getDateString } from '../../../helpers/dates'
import ReadMoreLink from './ReadMoreLink'

interface BlogPostCardProps {
  postItem: BlogPost
}

const BlogPostCard: FC<BlogPostCardProps> = ({ postItem }) => (
  <div className='flex flex-col bg-white'>
    <Link
      href={`/blog/${postItem.slug}`}
      className='min-h-[200px] relative block'
    >
      <Image
        width={800}
        height={800}
        src={postItem.featuredImageUrl}
        alt=''
        className='object-cover absolute top-0 left-0 w-full h-full'
      />
    </Link>
    <div className='p-3 flex-1 flex flex-col'>
      <h3>
        <Link
          href={`/blog/${postItem.slug}`}
          className='text-decoration-none text-body hover:text-body/80 transition-all duration-250'
        >
          {postItem.title}
        </Link>
      </h3>
      <small className='block subtitle mb-4'>
        {getDateString(postItem.dateCreated)}
      </small>
      <div className='mt-auto'>
        <ReadMoreLink href={`/blog/${postItem.slug}`}>Read more</ReadMoreLink>
      </div>
    </div>
  </div>
)

export default BlogPostCard
