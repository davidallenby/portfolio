import { Timestamp } from "@firebase/firestore";

// Base interface
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  tags: number[];
  url: string;
  categories: number[];
  featuredImageUrl: string;
  dateCreated: Date;
}

export interface BlogPostTag {
  label: string;
  id: string;
}

export interface GetBlogPostsPayload {
  page: number;
  categoryId?: number[];
  tagIds?: number[];
}

export interface WPResponse {
  id:                         number;
  date:                       Date;
  date_gmt:                   Date;
  guid:                       GUID;
  modified:                   Date;
  modified_gmt:               Date;
  slug:                       string;
  status:                     string;
  type:                       string;
  link:                       string;
  title:                      GUID;
  content:                    Content;
  excerpt:                    Content;
  author:                     number;
  featured_media:             number;
  comment_status:             string;
  ping_status:                string;
  sticky:                     boolean;
  template:                   string;
  format:                     string;
  meta:                       Meta;
  categories:                 number[];
  tags:                       any[];
  class_list:                 string[];
  jetpack_sharing_enabled:    boolean;
  jetpack_featured_media_url: string;
  _links:                     Links;
}

export interface Links {
  self:                  About[];
  collection:            About[];
  about:                 About[];
  author:                Author[];
  replies:               Author[];
  "version-history":     VersionHistory[];
  "predecessor-version": PredecessorVersion[];
  "wp:featuredmedia":    Author[];
  "wp:attachment":       About[];
  "wp:term":             WpTerm[];
  curies:                Cury[];
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href:       string;
}

export interface Cury {
  name:      string;
  href:      string;
  templated: boolean;
}

export interface PredecessorVersion {
  id:   number;
  href: string;
}

export interface VersionHistory {
  count: number;
  href:  string;
}

export interface WpTerm {
  taxonomy:   string;
  embeddable: boolean;
  href:       string;
}

export interface Content {
  rendered:  string;
  protected: boolean;
}

export interface GUID {
  rendered: string;
}

export interface Meta {
  nf_dc_page:                                 string;
  _jetpack_memberships_contains_paid_content: boolean;
  footnotes:                                  string;
}
