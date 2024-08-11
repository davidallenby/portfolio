import { CMS } from "@constants/wordpress";
import { 
  WPResponse, GetBlogPostsPayload, BlogPost, 
  BlogPostCategory
} from "@interfaces/blog.interfaces";

/**
 * Get a list of blog posts
 * @param payload 
 * @returns 
 */
export const getBlogPosts = async (payload: GetBlogPostsPayload)
: Promise<BlogPost[]> => {
  try {
    const { page } = payload;
    const url = `${CMS.BASE_URL}/posts?page=${page}`
    const data = await fetch(url);
    const json = await data.json();
    // Re-map the WP items as blog post items for the client side / NextJS
    return json.map((item: WPResponse) => setWpResponseItemAsBlogPost(item));
  } catch (err) {
    console.log(err);
    return [];
  }
}
// Converts the WP response item to a better format for our frontend. There are
// a lot of properties we don't need and we need to drill down into the WP
// properties to get the data we do need.
const setWpResponseItemAsBlogPost = (item: WPResponse): BlogPost => {
  return {
    id: item.id,
    title: item.title.rendered,
    slug: item.slug,
    dateCreated: new Date(item.date),
    url: `/blog/${item.slug}`,
    tags: item.tags,
    categories: item.categories,
    featuredImageUrl: item.jetpack_featured_media_url,
    excerpt: item.excerpt.rendered
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
    console.log(json);
    // Re-map the WP items as blog post items for the client side / NextJS
    return json;
  } catch (err) {
    console.log(err);
    return [];
  }
}