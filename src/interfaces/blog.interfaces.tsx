// Blog Post Data for the client side
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  tags: number[];
  url: string;
  categories: number[];
  featuredImageUrl: string;
  dateCreated: Date;
  excerpt: string;
}

export interface BlogPostTag {
  id: number;
  slug: string;
  name: string;
}

export interface GetBlogPostsPayload {
  page: number;
  categoryId?: number[];
  tagIds?: number[];
}

export interface BlogPostCategory {
  name: string;
  id: number;
  slug: string;
}

