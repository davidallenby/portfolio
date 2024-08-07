import { QUERY } from "@constants/query";
import { getBlogPosts, getBlogPostTags } from "@lib/firebase/firestore";
import { useQuery } from "@tanstack/react-query";

/**
 * Get the tags from the server
 * @returns
 */
export const useGetTags = () => {
  return useQuery({
    queryKey: [QUERY.IDS.BLOG_POST_TAGS], 
    queryFn: getBlogPostTags
  });
}


export const useGetPosts = (limit: number) => {
  return useQuery({
    queryKey: [QUERY.IDS.BLOG_POSTS],
    queryFn: () => getBlogPosts(limit)
  })
}


export const useGetPostById = async (id: string) => {
  return (await getBlogPosts(10)).find(post => post.id === id)
}

// export const useGetPostByIdPublic = () => {
//   return useQuery({
//     queryKey: [QUERY.IDS.]
//   })
// }