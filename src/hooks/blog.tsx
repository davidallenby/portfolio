import { QUERY } from '@constants/query';
import { queryClient } from '@context/ReactQueryProvider';
import type { GetBlogPostsPayload } from '@interfaces/blog.interfaces';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getBlogPostCategories, getBlogPostTags, getBlogPosts } from '../api/blog';

export const useGetBlogPosts = (payload?: GetBlogPostsPayload) => {
	const req = payload ? payload : { page: 1 };
	return useQuery({
		queryKey: [QUERY.BLOG_POSTS],
		queryFn: () => getBlogPosts(req)
	});
};

export const useMutateBlogPosts = () => {
	return useMutation({
		mutationFn: (payload: GetBlogPostsPayload) => getBlogPosts(payload),
		onSuccess: (data) => queryClient.setQueryData([QUERY.BLOG_POSTS], data)
	});
};

export const useGetBlogPostCategories = () => {
	return useQuery({
		queryKey: [QUERY.BLOG_POST_CATEGORIES],
		queryFn: getBlogPostCategories
	});
};

export const useGetBlogPostTags = () => {
	return useQuery({
		queryKey: [QUERY.BLOG_POST_TAGS],
		queryFn: getBlogPostTags
	});
};
