import { Timestamp } from "@firebase/firestore";

// Base interface
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  tagIds: string[];
  featuredImageUrl: string;
}
// NextJS doesn't support passing "Timestamp" data to client components. 
// So we need to convert it to a view interface.
export interface BlogPostData extends BlogPost {
  dateCreated: Timestamp;
  dateEdited: Timestamp;
  datePublished: Timestamp;
}
// View interface
export interface BlogPostView extends BlogPost {
  dateCreated: Date;
  dateEdited: Date;
  datePublished: Date;
}

export interface BlogPostTag {
  label: string;
  id: string;
}