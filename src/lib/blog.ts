import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost, BlogPostTag, BlogPostCategory } from '../interfaces/blog.interfaces';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

interface FrontMatter {
  title: string;
  date: string;
  categories: string[];
  tags: string[];
  coverImage: string;
}

interface PostWithStringTags {
  id: number;
  title: string;
  slug: string;
  dateCreated: Date;
  url: string;
  tags: string[];
  categories: string[];
  featuredImageUrl: string;
  excerpt: string;
  content: string;
}

/**
 * Recursively find all markdown files in the content directory
 */
function getAllMarkdownFiles(dir: string): string[] {
  const files: string[] = [];

  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getAllMarkdownFiles(fullPath));
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Extract slug from file path
 * Example: /path/to/2024/08/post-slug/index.md -> post-slug
 */
function getSlugFromPath(filePath: string): string {
  const relativePath = path.relative(contentDirectory, filePath);
  const parts = relativePath.split(path.sep);

  // Path format: 2024/08/post-slug/index.md
  // We want the post-slug part (third from last)
  if (parts.length >= 3) {
    return parts[parts.length - 2];
  }

  return path.basename(filePath, '.md');
}

/**
 * Get all posts with string tags/categories (internal use)
 */
function getAllPostsRaw(): PostWithStringTags[] {
  const markdownFiles = getAllMarkdownFiles(contentDirectory);

  const posts: PostWithStringTags[] = markdownFiles.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const frontMatter = data as FrontMatter;
    const slug = getSlugFromPath(filePath);

    return {
      id: Date.parse(frontMatter.date), // Use timestamp as ID
      title: frontMatter.title,
      slug,
      dateCreated: new Date(frontMatter.date),
      url: `/blog/${slug}`,
      tags: frontMatter.tags || [],
      categories: frontMatter.categories || [],
      featuredImageUrl: frontMatter.coverImage,
      excerpt: generateExcerpt(content),
      content,
    };
  });

  // Sort by date, newest first
  return posts.sort((a, b) => b.dateCreated.getTime() - a.dateCreated.getTime());
}

/**
 * Get all unique tags from all posts
 */
export function getAllTags(): BlogPostTag[] {
  const allPosts = getAllPostsRaw();
  const tagMap = new Map<string, number>();

  allPosts.forEach(post => {
    post.tags.forEach(tag => {
      if (!tagMap.has(tag)) {
        tagMap.set(tag, tagMap.size + 1);
      }
    });
  });

  return Array.from(tagMap.entries()).map(([tag, id]) => ({
    id,
    slug: tag,
    name: formatTagName(tag),
  }));
}

/**
 * Get all unique categories from all posts
 */
export function getAllCategories(): BlogPostCategory[] {
  const allPosts = getAllPostsRaw();
  const categoryMap = new Map<string, number>();

  allPosts.forEach(post => {
    post.categories.forEach(category => {
      if (!categoryMap.has(category)) {
        categoryMap.set(category, categoryMap.size + 1);
      }
    });
  });

  return Array.from(categoryMap.entries()).map(([category, id]) => ({
    id,
    slug: category,
    name: formatCategoryName(category),
  }));
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllPosts(): BlogPost[] {
  const rawPosts = getAllPostsRaw();

  // Get all tags and categories to create mappings
  const allTags = getAllTags();
  const allCategories = getAllCategories();

  const tagSlugToId = new Map(allTags.map(t => [t.slug, t.id]));
  const categorySlugToId = new Map(allCategories.map(c => [c.slug, c.id]));

  // Convert raw posts to BlogPost with numeric IDs
  return rawPosts.map(post => {
    const tagIds = post.tags
      .map(tagSlug => tagSlugToId.get(tagSlug))
      .filter((id): id is number => id !== undefined);

    const categoryIds = post.categories
      .map(catSlug => categorySlugToId.get(catSlug))
      .filter((id): id is number => id !== undefined);

    return {
      ...post,
      tags: tagIds,
      categories: categoryIds,
    };
  });
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const allPosts = getAllPosts();
  return allPosts.find(post => post.slug === slug) || null;
}

/**
 * Get posts filtered by tag IDs
 */
export function getPostsByTagIds(tagIds: number[]): BlogPost[] {
  const allPosts = getAllPosts();

  if (!tagIds || tagIds.length === 0) {
    return allPosts;
  }

  return allPosts.filter(post =>
    post.tags.some(tagId => tagIds.includes(tagId))
  );
}

/**
 * Get posts with pagination
 */
export function getPostsPaginated(page: number = 1, limit: number = 10): BlogPost[] {
  const allPosts = getAllPosts();
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return allPosts.slice(startIndex, endIndex);
}

/**
 * Generate excerpt from markdown content
 */
function generateExcerpt(content: string, length: number = 200): string {
  // Remove markdown syntax for excerpt
  const plainText = content
    .replace(/^---[\s\S]*?---/, '') // Remove frontmatter if any
    .replace(/#{1,6}\s/g, '') // Remove headers
    .replace(/\*\*/g, '') // Remove bold
    .replace(/\*/g, '') // Remove italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace links with text
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`([^`]+)`/g, '$1') // Remove inline code
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();

  if (plainText.length <= length) {
    return plainText;
  }

  return plainText.substring(0, length).trim() + '...';
}

/**
 * Format tag name for display (convert slug to title case)
 */
function formatTagName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Format category name for display
 */
function formatCategoryName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
