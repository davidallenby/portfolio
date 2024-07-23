import { FIREBASE } from "@constants/firebase";
import { collection, getDocs, limit, orderBy, query } from "@firebase/firestore";
import { BlogPostData, BlogPostView } from "@interfaces/blog.interfaces";
import { db } from "./app";

export async function getArticleData(posts?: number): Promise<BlogPostView[]> {
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
        dateCreated: data.dateCreated.toDate()
      }
    })

    return docs;
  } catch (err) {
    console.log(err);
    return [];
  }
}