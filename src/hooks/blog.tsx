import { QUERY } from "@constants/query";
import { GetBlogPostsPayload } from "@interfaces/blog.interfaces";
import { getBlogPostCategories, getBlogPosts, getBlogPostTags } from "@lib/blog";
import { useQuery } from "@tanstack/react-query";


export const useGetBlogPosts = (payload: GetBlogPostsPayload) => {
  return useQuery({
    queryKey: [QUERY.IDS.BLOG_POSTS],
    queryFn: () => getBlogPosts(payload)
  })
}

export const useGetBlogPostCategories = () => {
  return useQuery({
    queryKey: [QUERY.IDS.BLOG_POST_CATEGORIES],
    queryFn: getBlogPostCategories
  })
}

export const useGetBlogPostTags = () => {
  return useQuery({
    queryKey: [QUERY.IDS.BLOG_POST_TAGS],
    queryFn: getBlogPostTags
  })
}