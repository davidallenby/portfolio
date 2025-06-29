import { ReactNode } from '@node_modules/@types/react'
import classNames from '@node_modules/classnames'
import { BsArrowRight } from '@node_modules/react-icons/bs'

interface ReadMoreLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export default function ReadMoreLink({
  href,
  children,
  className
}: ReadMoreLinkProps) {
  return (
    <span
      className={classNames(
        'small inline-flex items-center text-primary hover:text-primary/80 transition-all duration-250',
        className
      )}
    >
      <span className='inline-block me-2'>{children}</span>
      <BsArrowRight className='w-4 h-4 mt-1.5' />
    </span>
  )
}
