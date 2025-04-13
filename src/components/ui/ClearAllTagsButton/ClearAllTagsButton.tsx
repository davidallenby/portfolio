import { type FC } from 'react';
import './ClearAllTagsButton.scss';
import { useMutateBlogPosts } from '@hooks/blog';
import type { GetBlogPostsPayload } from '@interfaces/blog.interfaces';
import { useStore } from '@store/store';

interface ClearAllTagsButtonProps {
	className?: string;
}

const ClearAllTagsButton: FC<ClearAllTagsButtonProps> = ({ className }) => {
	const { setBlogFilterTags } = useStore();
	const mutation = useMutateBlogPosts();
	/**
	 * Fire API to filter the tags and refresh the state
	 * @param tagIds
	 */
	const filterPostsByTag = (tagIds: number[]) => {
		const payload: GetBlogPostsPayload = { page: 1, tagIds };
		mutation.mutate(payload);
	};

	/**
	 * Update the state with an empty array and fetch the posts again
	 *
	 */
	const clearActiveTags = () => {
		setBlogFilterTags([]);
		filterPostsByTag([]);
	};
	return (
		<button
			className={`btn btn-link btn-sm ${className}`}
			onClick={() => {
				clearActiveTags();
			}}
		>
			Clear all
		</button>
	);
};

export default ClearAllTagsButton;
