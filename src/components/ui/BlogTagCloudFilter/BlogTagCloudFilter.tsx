import { useGetBlogPostTags, useMutateBlogPosts } from '@hooks/blog';
import type { BlogPostTag, GetBlogPostsPayload } from '@interfaces/blog.interfaces';
import { type FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useStore } from '../../../store/store';
import Chip from '../Chip/Chip';
import './BlogTagCloudFilter.scss';

const BlogTagCloudFilter: FC = () => {
	const { isSuccess: tagSuccess, data: tags, isLoading: tagLoading } = useGetBlogPostTags();
	const mutation = useMutateBlogPosts();
	const { blogFilterTags, setBlogFilterTags } = useStore();

	/**
	 * Check if the provided tag ID is currently selected.
	 *
	 * @param {number} tagId
	 * @return {*}
	 */
	const isTagActive = (tagId: number): boolean => {
		return blogFilterTags.some((id) => id === tagId);
	};

	/**
	 * Fired when the user clicks the tag to filter the posts.
	 *
	 * @param {number} tagId
	 */
	const tagToggleHandler = (tagId: number) => {
		// Check if the tag is currently active
		const isActive = isTagActive(tagId);
		let newTagIds: number[] = [];
		// If it is...
		if (isActive) {
			// Remove it
			newTagIds = blogFilterTags.filter((active: number) => active !== tagId);
		} else {
			// .. if not...
			// Add it
			newTagIds = [...blogFilterTags, tagId];
		}
		// Update the state
		setBlogFilterTags(newTagIds);
		// Fire the API
		filterPostsByTag(newTagIds);
	};

	/**
	 * Fire API to filter the tags and refresh the state
	 * @param tagIds
	 */
	const filterPostsByTag = (tagIds: number[]) => {
		const payload: GetBlogPostsPayload = { page: 1, tagIds };
		mutation.mutate(payload);
	};

	return (
		<div className="BlogTagCloudFilter">
			{tagLoading && (
				<div className="d-flex flex-wrap">
					{[0, 1, 2].map((num: number, i: number) => {
						return <Skeleton width={100} height={38} className="me-3 mb-2" key={num} />;
					})}
				</div>
			)}

			{tagSuccess &&
				tags.length &&
				tags.map((tag: BlogPostTag, i: number) => {
					return (
						<Chip key={tag.id} className="my-2 me-3" onClick={() => tagToggleHandler(tag.id)} toggle={isTagActive(tag.id)}>
							{tag.name}
						</Chip>
					);
				})}
		</div>
	);
};

export default BlogTagCloudFilter;
