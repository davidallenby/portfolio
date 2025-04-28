import type { BlogPost } from '@interfaces/blog.interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { type FC } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { getDateString } from '../../../helpers/dates'

interface BlogPostCardProps {
  postItem: BlogPost
}

const BlogPostCard: FC<BlogPostCardProps> = ({ postItem }) => (
  <div className='BlogPostCard bg-white'>
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
    <div className='BlogPostCard__content p-3'>
      <h3>
        <Link
          href={`/blog/${postItem.slug}`}
          className='text-decoration-none text-body'
        >
          {postItem.title}
        </Link>
      </h3>
      <small className='block subtitle mb-4'>
        {getDateString(postItem.dateCreated)}
      </small>
      <Link href={`/blog/${postItem.slug}`} className='small'>
        <span className='inline-block me-2'>Read more</span>
        <BsArrowRight />
      </Link>
    </div>
  </div>
)

export default BlogPostCard
