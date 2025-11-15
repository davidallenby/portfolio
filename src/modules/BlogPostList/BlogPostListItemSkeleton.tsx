import { SkeletonHeading } from '@components/loaders/SkeletonHeading'
import { SkeletonImage } from '@components/loaders/SkeletonImage'
import { SkeletonText } from '@components/loaders/SkeletonText'
import classNames from '@node_modules/classnames'
import { type FC } from 'react'
import { BLOG_POST_LIST_ITEM_BASE_CLASS, BLOG_POST_LIST_ITEM_IMAGE_BASE_CLASS } from './config'

const BlogPostListItemSkeleton: FC = () => {
	return (
		<div className={classNames(BLOG_POST_LIST_ITEM_BASE_CLASS)}>
			<SkeletonImage className={BLOG_POST_LIST_ITEM_IMAGE_BASE_CLASS} />
			<div className="flex flex-col gap-2 w-full">
				<SkeletonHeading level={2} className="mb-2" />
				<SkeletonText className="max-w-[300px] mb-2" />
				<SkeletonText className="max-w-[300px]" />
			</div>
		</div>
	)
}

export default BlogPostListItemSkeleton
