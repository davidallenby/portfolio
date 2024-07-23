import Link from "next/link"
import { BsArrowLeft, BsRocketTakeoff, BsSave, BsShare } from "react-icons/bs";
import TitleInputField from "./components/TitleInputField";
import './EditPost.scss';

export default async function EditPost() {

  return (
      <>
        <div className="mb-4 gutter-x py-3 d-flex align-items-center justify-content-between bg-beige">
          <Link href="/admin/blog-posts" className="btn btn-link d-inline-flex align-items-center text-decoration-none">
            <BsArrowLeft className="me-md-2" />
            <span className="d-none d-md-inline">Back to posts</span>
          </Link>
          <div>
            <button type="button"
              className="btn btn-outline-primary d-inline-flex align-items-center me-4"
            >
              <BsSave className="me-sm-2" />
              <span className="d-none d-sm-inline">Save draft</span>
            </button>

            <button type="button"
              className="btn btn-primary d-inline-flex align-items-center"
            >
              <BsRocketTakeoff className="me-sm-2" />
              <span className="d-none d-sm-inline">Publish</span>
            </button>
          </div>
        </div>
        <div className="contained gutter-x">
          <TitleInputField 
            className={'mb-3'}
          />
          <div className="mb-3 d-flex align-items-center justify-content-between">
            <p className="subtitle mb-0 me-4">
              Published: 29/07/2024
            </p>
            <button type="button"
              className="btn d-flex align-items-center"
            >
              <BsShare className="me-2" />
              <span className="d-none d-md-inline-block">Share</span>
            </button>
          </div>
          <hr className="my-5 "/>
          <div className="EditPost__featured-image-wrapper">

          </div>
        </div>
      </> 
    
  );
}