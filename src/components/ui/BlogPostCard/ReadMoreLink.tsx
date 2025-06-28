import { ReactNode } from '@node_modules/@types/react'
import { BsArrowRight } from '@node_modules/react-icons/bs'
import Link from 'next/link'

interface ReadMoreLinkProps {
  href: string
  children: ReactNode
}

export default function ReadMoreLink({ href, children }: ReadMoreLinkProps) {
  return (
    <Link
      href={href}
      className='small inline-flex items-center text-primary hover:text-primary/80 transition-all duration-250'
    >
      <span className='inline-block me-2'>{children}</span>
      <BsArrowRight className='w-4 h-4 mt-0.5' />
    </Link>
  )
}
