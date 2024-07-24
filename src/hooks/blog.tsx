import { QUERY } from "@constants/query";
import { getBlogPostTags } from "@lib/firebase/firestore";
import { useQuery } from "@tanstack/react-query";

export const useGetTags = () => {
  return useQuery({
    queryKey: [QUERY.IDS.BLOG_POST_TAGS], 
    queryFn: getBlogPostTags
  });
}