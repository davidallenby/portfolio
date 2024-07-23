import { FIREBASE } from "@constants/firebase";
import { collection, doc, getDoc, getDocs, limit, orderBy, query } from "@firebase/firestore";
import { BlogPost, BlogPostData, BlogPostView } from "@interfaces/blog.interfaces";
import { db } from "./app";

/**
 * Get a list of blog articles - Will use the filter parameters passed to the
 * function
 *
 * @export
 * @param {number} [posts]
 * @return {*}  {Promise<BlogPost[]>}
 */
export async function getBlogPosts(posts?: number): Promise<BlogPostView[]> {
  try {
    const collectionName = FIREBASE.COLLECTIONS.NAMES.BLOG_POSTS;
    const coll = collection(db, collectionName);
    let q = query(coll, orderBy('dateCreated'));
    // If the posts filer is added, limit the reqest
    if (posts) {
      q = query(coll, orderBy('dateCreated'), limit(posts))
    }
    const req = await getDocs(q);
    // Restructure document data
    const docs: BlogPostView[] = req.docs.map((doc) => {
      const data = doc.data() as BlogPostData;
      return { 
        ...data, 
        id: doc.id,
        dateCreated: data.dateCreated.toDate(),
        dateEdited: data.dateEdited.toDate(),
        datePublished: data.datePublished.toDate()
      }
    })

    return docs;
  } catch (err) {
    console.log(err);
    return [];
  }
}

/**
 * Get the details of a singular blog post
 *
 * @export
 * @param {string} id
 * @return {*}  {Promise<BlogPost>}
 */
export async function getBlogPostDetails(id: string): Promise<BlogPostView> {
  try {
    const collectionName = FIREBASE.COLLECTIONS.NAMES.BLOG_POSTS;
    const snapshot = await getDoc(doc(db, `${collectionName}`, id))
    // If the document exists...
    if (snapshot) {
      const data = snapshot.data() as BlogPostData;
      return {
        ...data,
        id: snapshot.id,
        dateCreated: data.dateCreated.toDate(),
        dateEdited: data.dateEdited.toDate(),
        datePublished: data.datePublished.toDate()
      }
    } else {
      throw new Error('Blog post not found')
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}