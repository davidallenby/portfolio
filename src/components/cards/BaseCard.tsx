import classNames from '@node_modules/classnames'
import Link from '@node_modules/next/link'

interface BaseCardProps {
  href?: string
  className?: string
  children: React.ReactNode
}
/**
 * Base Card component
 * Cards may or may not be links
 *
 * @export
 * @param {BaseCardProps} { href, className, children }
 * @return {*}
 */
export default function BaseCard({ href, className, children }: BaseCardProps) {
  const styleClasses = classNames(
    'flex flex-col bg-white transition-all duration-250 hover:shadow-md w-full',
    className
  )

  if (!href) {
    return <div className={styleClasses}>{children}</div>
  }

  return (
    <Link href={href} className={styleClasses}>
      {children}
    </Link>
  )
}
