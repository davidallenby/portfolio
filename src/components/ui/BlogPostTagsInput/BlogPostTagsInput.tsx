import React, { FC } from 'react';
import './BlogPostTagsInput.scss';
import Select from 'react-select';
import { useQuery } from '@tanstack/react-query';
import { QUERY } from '@constants/query';
import { getBlogPostTags } from '@lib/firebase/firestore';
interface BlogPostTagsInputProps {}

const BlogPostTagsInput: FC<BlogPostTagsInputProps> = () => {
  // Queries
  const query = useQuery({ queryKey: [
    QUERY.IDS.BLOG_POST_TAGS
  ], queryFn: getBlogPostTags });
  
  return (
    <div className="BlogPostTagsInput">
      <Select isLoading={query.isLoading} options={query.data} />
    </div>
  );
}

export default BlogPostTagsInput;
