import { BlogPost } from "@interfaces/blog.interfaces";

export namespace BLOG {
  export const EMPTY_POST: BlogPost = {
    categories: [],
    content: '',
    dateCreated: new Date(),
    excerpt: '',
    featuredImageUrl: '',
    id: 0,
    slug: '',
    tags: [],
    title: '',
    url: ''
  }
}