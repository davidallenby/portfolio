import { ROUTES } from '@constants/navigation'
import classNames from '@node_modules/classnames'
import Link from 'next/link'
import { type FC, useMemo } from 'react'

interface SiteLogoProps {
  colorInverted?: boolean
  className?: string
  onClick?: () => void
  isLink?: boolean
}

const styleClasses = {
  default: `inline-flex h-12 w-12 border font-serif text-2xl items-center justify-center text-decoration-none`,
  base: 'border-primary text-primary',
  inverted: 'border-primary-100 text-primary-100'
}

const SiteLogo: FC<SiteLogoProps> = ({
  colorInverted,
  className,
  isLink = true
}) => {
  /**
   * This will build the style classes for the element based on whether the
   * props have been set.
   * @returns
   */
  const styleClass = useMemo(() => {
    return classNames(
      styleClasses.default,
      styleClasses[colorInverted ? 'inverted' : 'base'],
      className
    )
  }, [colorInverted, className])

  return isLink ? (
    <Link href={ROUTES.HOME} className={styleClass}>
      <span>DA</span>
    </Link>
  ) : (
    <span className={styleClass}>
      <span>DA</span>
    </span>
  )
}

export default SiteLogo
