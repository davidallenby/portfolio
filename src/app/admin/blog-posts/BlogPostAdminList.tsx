'use client'

import { FC } from "react";
import { BlogPostView } from "@interfaces/blog.interfaces";
import { getDateString } from "@utils/dates";
import Link from "next/link";
import Chip from "@components/ui/Chip/Chip";

interface BlogPostAdminListProps {
  posts: BlogPostView[];
}

const BlogPostAdminList: FC<BlogPostAdminListProps> = ({
  posts = []
}) => {
  
  const getTable = (posts: BlogPostView[]) => {
    return <table className="table">
      <thead>
        <tr>
          <th style={{ width: 28 }}>Created</th>
          <th>Title</th>
          <th>Tags</th>
          <th style={{ width: 100 }}></th>
        </tr>
      </thead>
      <tbody>
        { posts.map((item, i) => {
          return <tr key={i}>
            <td>{getDateString(item.dateCreated)}</td>
            <td>{item.title}</td>
            <td>
              { item.tagIds.map((item, i) => {
                return <Chip key={i} small>Test</Chip>
              })}
            </td>
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