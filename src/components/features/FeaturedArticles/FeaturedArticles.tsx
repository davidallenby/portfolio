'use client'
import React, { FC, ReactNode } from 'react';
import './FeaturedArticles.scss';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { useEffect, useState } from "react"
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore"
import { BlogPost } from '@interfaces/blog.interfaces';
import { FIREBASE } from '@constants/firebase';
import { db } from '@lib/firebase/app';

interface FeaturedArticlesProps {
  className?: string;
  title?: string;
  postLimit: number;
}
/**
 * Creates the list of card templates that display the blog posts.
 *
 * @return {*} 
 */
const setArticleContent = (posts: BlogPost[]): React.ReactNode => {
  if (!posts.length) {
    return <p className='lead'>There are no posts to display! 🧐</p>
  }
  return <>
    <div className='FeaturedArticles__wrapper row mb-5'>
      {
        posts.map((item, i) => {
          return <div className="col-12 col-lg-4 mb-4 mb-lg-0 FeaturedArticle" 
            key={i}
          >
            <div className='bg-white'>
              <div className="FeaturedArticle__image"></div>
              <div className="FeaturedArticle__content p-3">
                <h3>
                  <Link href={`/blog/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>
                <p></p>
                <Link href={`/blog/${item.slug}`} className="small">
                  <span className="d-inline-block me-2">Read more</span>
                  <BsArrowRight />
                </Link>
              </div>              
            </div>
          </div>
        })
      }
    </div>
    <p className="text-center">
      <Link href={`/blog`}
        className="btn btn-outline-primary"
      >View more</Link>
    </p>
  </>
}

/**
 * Skeleton screen content when loading data from the server
 * Displays 3 cards with loading skeletons in them.
 * @returns 
 */
const setLoadingContent = (): ReactNode => {
  return <div className="FeaturedArticles__wrapper row">
    {[0, 1, 2].map((item, i) => {
      return <div className="col-12 col-lg-4 mb-4 mb-lg-0 FeaturedArticle" 
        key={i}
      >
        <div className='bg-white'>
          <div className="FeaturedArticle__image"></div>
          <div className="FeaturedArticle__content p-3">
            <h3>LOADING</h3>
            <p>LOADING LOADING</p>
          </div>
        </div>
      </div>
    })}
  </div>
}

const FeaturedArticles: FC<FeaturedArticlesProps> = ({
  className, title = 'Featured articles', postLimit = 3
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [items, setItems] = useState<BlogPost[]>([]);

  /**
   * Fetch the article data from the server
   *
   * @param {number} postLimit
   * @return {*}  {Promise<BlogPost[]>}
   */
  async function getArticleData(postLimit: number): Promise<BlogPost[]> {
    setLoading(true);
    try {
      const collectionName = FIREBASE.COLLECTIONS.NAMES.BLOG_POSTS;
      const q = query(
        collection(db, collectionName), orderBy('dateCreated'), limit(postLimit)
      );
      const req = await getDocs(q);
      return req.docs.map((doc) => ({ ...doc.data() as BlogPost, id: doc.id }))
    } catch (err) {
      console.log(err);
      return [];
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const getData = async () => {
      const data = await getArticleData(postLimit);
      setItems(data);
    }
    getData();
  }, [postLimit])

  return (
    <>
      <h2 className="mb-4">{title}</h2>
      {loading ? setLoadingContent() : setArticleContent(items)}
    </>
  );
}

export default FeaturedArticles;
