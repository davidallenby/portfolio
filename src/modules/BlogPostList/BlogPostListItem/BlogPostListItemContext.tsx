import { BlogPost } from '@interfaces/blog.interfaces'
import { createContext, useContext, useMemo } from 'react'

interface BlogPostListItemContextProps {
  post: BlogPost
}
interface BlogPostListItemProviderProps {
  post: BlogPost
  children: React.ReactNode
}
export const BlogPostListItemContext =
  createContext<BlogPostListItemContextProps | null>(null)

export const BlogPostListItemProvider = ({
  post,
  children
}: BlogPostListItemProviderProps) => {
  const valueObject = useMemo(() => ({ post }), [post])

  return (
    <BlogPostListItemContext.Provider value={valueObject}>
      {children}
    </BlogPostListItemContext.Provider>
  )
}

export const useBlogPostListItemContext = () => {
  const context = useContext(BlogPostListItemContext)
  if (!context) {
    throw new Error(
      'useBlogPostListItemContext must be used within a BlogPostListItemProvider'
    )
  }
  return context
}
