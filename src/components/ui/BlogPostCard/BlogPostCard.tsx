import BaseCard from '@components/cards/BaseCard'
import BaseCardBody from '@components/cards/BaseCardBody'
import BaseCardImage from '@components/cards/BaseCardImage'
import type { BlogPost } from '@interfaces/blog.interfaces'
import { type FC } from 'react'
import { getDateString } from '../../../helpers/dates'
import ReadMoreLink from './ReadMoreLink'

interface BlogPostCardProps {
  postItem: BlogPost
}

const BlogPostCard: FC<BlogPostCardProps> = ({ postItem }) => (
  <BaseCard href={`/blog/${postItem.slug}`}>
    <BaseCardImage
      src={postItem.featuredImageUrl}
      alt=''
      width={600}
      height={400}
    />
    <BaseCardBody>
      <h3 className='mb-2!'>
        <span className='text-decoration-none text-body transition-all duration-250 line-clamp-2'>
          {postItem.title}
        </span>
      </h3>
      <small className='block subtitle mb-8'>
        {getDateString(postItem.dateCreated)}
      </small>
      <div className='mt-auto text-right'>
        <ReadMoreLink href={`/blog/${postItem.slug}`}>Read more</ReadMoreLink>
      </div>
    </BaseCardBody>
  </BaseCard>
)

export default BlogPostCard
