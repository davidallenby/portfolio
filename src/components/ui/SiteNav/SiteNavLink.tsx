import { NavMenuItem } from '@interfaces/ui.interfaces'
import classNames from 'classnames'
import Link from 'next/link'
import { type FC } from 'react'
interface SiteNavLinkProps {
  item: NavMenuItem
  colorInverted: boolean
  className?: string
}

const SiteNavLink: FC<SiteNavLinkProps> = ({
  item,
  colorInverted,
  className
}) => {
  return (
    <Link
      href={item.url}
      className={classNames(
        'text-lg font-serif transition-colors duration-200',
        {
          'text-primary-100 hover:text-white': colorInverted,
          'text-primary hover:text-body': !colorInverted
        },
        className
      )}
    >
      <span>{item.label}</span>
    </Link>
  )
}

export default SiteNavLink
