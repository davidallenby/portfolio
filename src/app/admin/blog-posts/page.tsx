import { getBlogPosts } from "@lib/firebase/firestore";
import Link from "next/link";
import { PiPlus } from "react-icons/pi";
import BlogPostAdminList from "./BlogPostAdminList";
import AdminLayoutContainer from "@components/layout/AdminLayoutContainer/AdminLayoutContainer";

export default async function BlogPosts() {

  const posts = await getBlogPosts()

  return (
    <AdminLayoutContainer>
      <div className="d-flex align-items-end justify-content-between mb-4">
        <h2 className="me-3 mb-0">Blog posts</h2>
        <Link href={`blog-posts/new`}
          className="btn btn-primary d-inline-flex align-items-center"
        >
          <PiPlus className="me-sm-2 me-md-0 me-lg-2" />
          <span className="d-none d-sm-inline-block d-md-none d-lg-inline-block">New post</span>
        </Link>
      </div>
      <BlogPostAdminList posts={posts} />
    </AdminLayoutContainer>
  );
}