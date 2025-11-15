import type { ApiResponse } from '@interfaces/api.interfaces';
import type {
  BlogPost,
  BlogPostCategory,
  BlogPostTag,
  GetBlogPostsPayload
} from '@interfaces/blog.interfaces';
import {
  getBlogPostsAction,
  getBlogPostCategoriesAction,
  getBlogPostTagsAction,
  getBlogPostBySlugAction
} from '../actions/blog';

/**
 * Get a list of blog posts (wraps server action for React Query)
 */
export const getBlogPosts = async (
  payload: GetBlogPostsPayload
): Promise<BlogPost[]> => {
  return getBlogPostsAction(payload);
};

/**
 * Get a list of categories for blog posts (wraps server action for React Query)
 */
export const getBlogPostCategories = async (): Promise<BlogPostCategory[]> => {
  return getBlogPostCategoriesAction();
};

/**
 * Get a list of tags (wraps server action for React Query)
 */
export const getBlogPostTags = async (): Promise<BlogPostTag[]> => {
  return getBlogPostTagsAction();
};

/**
 * Get a specific blog post by slug (wraps server action for React Query)
 */
export const getBlogPostBySlug = async (
  slug: string
): ApiResponse<BlogPost> => {
  return getBlogPostBySlugAction(slug);
};
