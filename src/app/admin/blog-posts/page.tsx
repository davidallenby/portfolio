import Link from "next/link";
import { PiPlus } from "react-icons/pi";

export default function BlogPosts() {

  return (    
    
      <>
        <div className="d-flex align-items-end justify-content-between">
          <h2 className="me-3 mb-0">Blog posts</h2>
          <Link href={`new`}
            className="btn btn-primary d-inline-flex align-items-center"
          >
            <PiPlus className="me-sm-2 me-md-0 me-lg-2" />
            <span className="d-none d-sm-inline-block d-md-none d-lg-inline-block">New post</span>
          </Link>
        </div>
      </> 
    
  );
}