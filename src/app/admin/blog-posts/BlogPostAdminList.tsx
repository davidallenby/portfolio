'use client'

import { FC } from "react";
import { BlogPostView } from "@interfaces/blog.interfaces";
import { getDateString } from "@utils/dates";
import Link from "next/link";
import Chip from "@components/ui/Chip/Chip";
import { useGetTags } from "../../../hooks/blog";

interface BlogPostAdminListProps {
  posts: BlogPostView[];
}

const BlogPostAdminList: FC<BlogPostAdminListProps> = ({
  posts = []
}) => {

  const { data } = useGetTags();
  
  const getTable = (posts: BlogPostView[]) => {
    return <table className="table">
      <thead>
        <tr>
          <th style={{ width: 28 }}>Created</th>
          <th style={{ width: 28 }}>Published</th>
          
          <th>Title</th>
          <th>Tags</th>
          <th style={{ width: 28 }}>Last edit</th>
          <th style={{ width: 100 }}></th>
        </tr>
      </thead>
      <tbody>
        { posts.map((item, i) => {
          return <tr key={i}>
            <td>{getDateString(item.dateCreated)}</td>
            <td>{getDateString(item.datePublished)}</td>
            <td>{item.title}</td>
            <td>
              { item.tagIds.map((tagId, i) => {
                const found = data?.find((item, i) => item.id === tagId)
                return <Chip key={i} small>
                  {found?.label}
                </Chip>
              })}
            </td>
            <td>{getDateString(item.dateEdited)}</td>
            <td className="text-end">
              <Link href={`blog-posts/${item.id}`}>
                Edit post
              </Link>
            </td>
          </tr>
        }) }
      </tbody>
    </table>
  }

  return (
    <div className='BlogPostAdminList'>
      {
        posts.length ? getTable(posts) : <p>No posts to display.</p>
      }
    </div>
  );
}

export default BlogPostAdminList;