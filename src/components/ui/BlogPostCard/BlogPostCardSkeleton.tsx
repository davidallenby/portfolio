import BaseCard from '@components/cards/BaseCard'
import BaseCardBody from '@components/cards/BaseCardBody'
import { SkeletonHeading } from '@components/loaders/SkeletonHeading'
import { SkeletonImage } from '@components/loaders/SkeletonImage'
import { SkeletonText } from '@components/loaders/SkeletonText'

export default function BlogPostCardSkeleton() {
  return (
    <BaseCard>
      <SkeletonImage />
      <BaseCardBody>
        <SkeletonHeading level={3} className='mb-4!' />
        <SkeletonText className='mb-8! w-1/2' />
      </BaseCardBody>
    </BaseCard>
  )
}
