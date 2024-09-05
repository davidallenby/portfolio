// Data returned from the WP Server
export interface WPBlogPost {
  id:                         number;
  date:                       Date;
  date_gmt:                   Date;
  guid:                       WpGUID;
  modified:                   Date;
  modified_gmt:               Date;
  slug:                       string;
  status:                     string;
  type:                       string;
  link:                       string;
  title:                      WpGUID;
  content:                    WpContent;
  excerpt:                    WpContent;
  author:                     number;
  featured_media:             number;
  comment_status:             string;
  ping_status:                string;
  sticky:                     boolean;
  template:                   string;
  format:                     string;
  meta:                       WpMeta;
  categories:                 number[];
  tags:                       any[];
  class_list:                 string[];
  jetpack_sharing_enabled:    boolean;
  jetpack_featured_media_url: string;
  _links:                     WpLinks;
}

export interface WpCategory {
  id:          number;
  count:       number;
  description: string;
  link:        string;
  name:        string;
  slug:        string;
  taxonomy:    string;
  parent:      number;
  meta:        any[];
  _links:      WpLinks;
}

export interface WpTag {
  id:          number;
  count:       number;
  description: string;
  link:        string;
  name:        string;
  slug:        string;
  taxonomy:    string;
  meta:        any[];
  _links:      WpLinks;
}

export interface WpLinks {
  self:                  WpAbout[];
  collection:            WpAbout[];
  about:                 WpAbout[];
  author:                WpAuthor[];
  replies:               WpAuthor[];
  "version-history":     WpVersionHistory[];
  "predecessor-version": WpPredecessorVersion[];
  "wp:featuredmedia":    WpAuthor[];
  "wp:attachment":       WpAbout[];
  "wp:term":             WpTerm[];
  curies:                WpCury[];
}

export interface WpAbout {
  href: string;
}

export interface WpAuthor {
  embeddable: boolean;
  href:       string;
}

export interface WpCury {
  name:      string;
  href:      string;
  templated: boolean;
}

export interface WpPredecessorVersion {
  id:   number;
  href: string;
}

export interface WpVersionHistory {
  count: number;
  href:  string;
}

export interface WpTerm {
  taxonomy:   string;
  embeddable: boolean;
  href:       string;
}

export interface WpContent {
  rendered:  string;
  protected: boolean;
}

export interface WpGUID {
  rendered: string;
}

export interface WpMeta {
  nf_dc_page:                                 string;
  _jetpack_memberships_contains_paid_content: boolean;
  footnotes:                                  string;
}