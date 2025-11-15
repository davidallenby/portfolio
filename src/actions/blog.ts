'use server';

import type { ApiResponse } from '../interfaces/api.interfaces';
import type {
  BlogPost,
  BlogPostCategory,
  BlogPostTag,
  GetBlogPostsPayload
} from '../interfaces/blog.interfaces';
import {
  getPostBySlug,
  getAllTags,
  getAllCategories,
  getPostsByTagIds,
  getPostsPaginated
} from '../lib/blog';

/**
 * Server Action: Get a list of blog posts
 */
export async function getBlogPostsAction(
  payload: GetBlogPostsPayload
): Promise<BlogPost[]> {
  try {
    const { page = 1, limit = 10, tagIds } = payload;

    // If filtering by tags, get filtered posts
    if (tagIds && tagIds.length > 0) {
      const filteredPosts = getPostsByTagIds(tagIds);
      // Apply pagination to filtered results
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      return filteredPosts.slice(startIndex, endIndex);
    }

    // Otherwise get paginated posts
    return getPostsPaginated(page, limit);
  } catch (err) {
    console.error('Error fetching blog posts:', err);
    return [];
  }
}

/**
 * Server Action: Get a list of categories for blog posts
 */
export async function getBlogPostCategoriesAction(): Promise<BlogPostCategory[]> {
  try {
    return getAllCategories();
  } catch (err) {
    console.error('Error fetching blog categories:', err);
    return [];
  }
}

/**
 * Server Action: Get a list of tags
 */
export async function getBlogPostTagsAction(): Promise<BlogPostTag[]> {
  try {
    return getAllTags();
  } catch (err) {
    console.error('Error fetching blog tags:', err);
    return [];
  }
}

/**
 * Server Action: Get a specific blog post by slug
 */
export async function getBlogPostBySlugAction(
  slug: string
): Promise<ApiResponse<BlogPost>> {
  try {
    const post = getPostBySlug(slug);

    if (post) {
      return { data: post, success: true };
    }

    return { data: null, success: false };
  } catch (err) {
    console.error('Error fetching blog post by slug:', err);
    return { data: null, success: false };
  }
}
