import { CMS } from "@constants/wordpress";
import { ApiResponse } from "@interfaces/api.interfaces";
import { 
  GetBlogPostsPayload, BlogPost, 
  BlogPostCategory,
  BlogPostTag
} from "@interfaces/blog.interfaces";
import { WPBlogPost, WpCategory, WpTag } from "@interfaces/wordpress.interfaces";

/**
 * Get a list of blog posts
 * @param payload 
 * @returns 
 */
export const getBlogPosts = async (payload: GetBlogPostsPayload)
: Promise<BlogPost[]> => {
  console.log(payload)

  try {
    const { page, tagIds } = payload;
    let url = `${CMS.BASE_URL}/posts?page=${page}`;

    if (tagIds?.length) {
      tagIds.forEach((id) => {
        url += `&tags=${id}`
      })
    }

    const data = await fetch(url);
    const json = await data.json();
    // Re-map the WP items as blog post items for the client side / NextJS
    return json.map((item: WPBlogPost) => setWpBlogPostAsBlogPost(item));
  } catch (err) {
    console.log(err);
    return [];
  }
}
// Converts the WP response item to a better format for our frontend. There are
// a lot of properties we don't need and we need to drill down into the WP
// properties to get the data we do need.
const setWpBlogPostAsBlogPost = (item: WPBlogPost): BlogPost => {
  return {
    id: item.id,
    title: item.title.rendered,
    slug: item.slug,
    dateCreated: new Date(item.date),
    url: `/blog/${item.slug}`,
    tags: item.tags,
    categories: item.categories,
    featuredImageUrl: item.jetpack_featured_media_url,
    excerpt: item.excerpt.rendered,
    content: item.content.rendered
  }
}

/**
 * Get a list of categories for blog posts
 */
export const getBlogPostCategories = async(): Promise<BlogPostCategory[]> => {
  try {
    const url = `${CMS.BASE_URL}/categories?hide_empty=true`
    const data = await fetch(url);
    const json = await data.json();
    // Re-map the WP items as blog post items for the client side / NextJS
    return json.map(mapWpItemsAsClient);
  } catch (err) {
    console.log(err);
    return [];
  }
}


/**
 * Get a list of tags
 * @returns 
 */
export const getBlogPostTags = async(): Promise<BlogPostTag[]> => {
  try {
    const url = `${CMS.BASE_URL}/tags`
    const data = await fetch(url);
    const json = await data.json();
    // Re-map the WP items as blog post tags for the client side / NextJS
    return json.map(mapWpItemsAsClient);
  } catch (err) {
    console.log(err);
    return [];
  }
}
// Categories and Tags have the same structure
type WpTagOrWpCategory = WpTag | WpCategory;
const mapWpItemsAsClient = (item: WpTagOrWpCategory)
: BlogPostTag|BlogPostCategory => {
  const { id, name, slug } = item;
  return { id, name, slug };
}
/**
 * Get a specific blog post by slug
 * @param slug 
 * @returns 
 */
export const getBlogPostBySlug = async (slug: string)
: ApiResponse<BlogPost> => {
  try {
    const url = `${CMS.BASE_URL}/posts?slug=${slug}`
    const data = await fetch(url);
    const json = await data.json();
    const mapped = json.map((item: WPBlogPost) => setWpBlogPostAsBlogPost(item))
    return { data: mapped[0], success: true }
  } catch {
    return { data: null, success: false }
  }
}