import { QUERY } from "@constants/query";
import { GetBlogPostsPayload } from "@interfaces/blog.interfaces";
import { getBlogPostCategories, getBlogPosts, getBlogPostTags } from "../api/blog";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "@context/ReactQueryProvider";


export const useGetBlogPosts = () => {
  return useQuery({
    queryKey: [QUERY.BLOG_POSTS],
    queryFn: () => getBlogPosts({ page: 1 })
  })
}

export const useMutateBlogPosts = () => {
  return useMutation({
    mutationFn: (payload: GetBlogPostsPayload) => getBlogPosts(payload),
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY.BLOG_POSTS], data)
    }
  })
}

export const useGetBlogPostCategories = () => {
  return useQuery({
    queryKey: [QUERY.BLOG_POST_CATEGORIES],
    queryFn: getBlogPostCategories
  })
}

export const useGetBlogPostTags = () => {
  return useQuery({
    queryKey: [QUERY.BLOG_POST_TAGS],
    queryFn: getBlogPostTags
  })
}