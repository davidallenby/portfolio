import { Timestamp } from "@firebase/firestore";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  dateCreated: Timestamp;
  tagIds: string[];
  featuredImageUrl: string;
}