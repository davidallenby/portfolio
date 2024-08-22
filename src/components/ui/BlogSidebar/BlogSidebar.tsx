import React, { FC, useState } from 'react';
import './BlogSidebar.scss';
import { useGetBlogPostTags, useMutateBlogPosts } from '@hooks/blog';
import Skeleton from 'react-loading-skeleton';
import { BlogPostTag, GetBlogPostsPayload } from '@interfaces/blog.interfaces';
import Chip from '../Chip/Chip';

interface BlogSidebarProps {}

const BlogSidebar: FC<BlogSidebarProps> = () => {
  const {
    isSuccess: tagSuccess, data: tags, isLoading: tagLoading
  } = useGetBlogPostTags();
  const mutation = useMutateBlogPosts();
  const [activeTags, setActiveTags] = useState<number[]>([]);

  /**
   * Fire API to filter the tags and refresh the state
   * @param tagIds 
   */
  const filterPostsByTag = (tagIds: number[]) => {
    const payload: GetBlogPostsPayload = { page: 1, tagIds };
    mutation.mutate(payload)
  }

  /**
   * Check if the provided tag ID is currently selected.
   *
   * @param {number} tagId
   * @return {*} 
   */
  const isTagActive = (tagId: number) => {
    return activeTags.some((id) => id === tagId)
  }

  /**
   * Fired when the user clicks the tag to filter the posts. 
   *
   * @param {number} tagId
   */
  const tagToggleHandler = (tagId: number) => {
    // Check if the tag is currently active
    const isActive = isTagActive(tagId);
    let newTagIds: number[] = []
    // If it is...
    if (isActive) {
      // Remove it
      newTagIds = activeTags
      .filter((active: number) => active !== tagId )
    } else {// .. if not...
      // Add it
      newTagIds = [...activeTags, tagId]
    }
    // Update the state
    setActiveTags(newTagIds);
    // Fire the API
    filterPostsByTag(newTagIds)
  }

  // Clear all active tag filters
  const clearFilters = () => {
    setActiveTags([])
    filterPostsByTag([])
  };

  return (
    <div className='BlogSidebar d-none d-lg-block'>          
      <div className='d-flex align-items-end mb-4 justify-content-between'>
        <h2 className='me-2'>Tags</h2>
        {
          activeTags.length > 0 && <button className='btn btn-link btn-sm'
            onClick={clearFilters}
          >
            Clear all
          </button>
        }
      </div>
      {
        tagLoading && <div className='d-flex flex-wrap'>
        {[0,1,2].map((_: number, i: number) => {
          return <Skeleton width={100}
            height={38}
            className='me-3 mb-2'
            key={i}
          />
        })}
        </div>
      }
  
      { tagSuccess && tags.length && tags
        .map((tag: BlogPostTag, i: number) => {
        return <Chip key={i}
          className='my-2 me-3'
          onClick={() => tagToggleHandler(tag.id)}
          toggle={isTagActive(tag.id)}
        >
          {tag.name}
        </Chip>
      })}
    </div>
  );
}

export default BlogSidebar;
