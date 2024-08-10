import { QUERY } from "@constants/query";
import { GetBlogPostsPayload } from "@interfaces/blog.interfaces";
import { getBlogPosts } from "@lib/blog";
import { useQuery } from "@tanstack/react-query";


export const useGetBlogPosts = (payload: GetBlogPostsPayload) => {
  return useQuery({
    queryKey: [QUERY.IDS.BLOG_POSTS],
    queryFn: () => getBlogPosts(payload)
  })
}