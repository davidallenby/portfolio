import Link from 'next/link'

export const BlogPostListError = () => {
  return (
    <p className="lead">
    <span>Hmmm, there was an error loading the blog posts. </span>
    <Link href={`/contact`}>Let me know</Link>
    <span> what happened so I can fix it!</span>
  </p>
  )
}
