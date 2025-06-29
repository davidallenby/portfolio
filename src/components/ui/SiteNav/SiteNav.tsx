'use client'
import { SITENAV_ITEMS } from '@constants/navigation'
import type { NavMenuItem } from '@interfaces/ui.interfaces'
import classNames from 'classnames'
import { type FC } from 'react'
import SiteNavLink from './SiteNavLink'

interface SiteNavProps {
  vertical?: boolean
  colorInverted?: boolean
  className?: string
}

const siteNavItems: NavMenuItem[] = [...SITENAV_ITEMS].slice(1)

const SiteNav: FC<SiteNavProps> = ({ colorInverted = false, className }) => {
  const siteNavClass = classNames('hidden md:inline-flex', className)

  return (
    <nav className={siteNavClass}>
      {siteNavItems.map((item, i) => (
        <SiteNavLink
          key={item.url}
          item={item}
          colorInverted={colorInverted}
          className='text-lg px-5'
        />
      ))}
    </nav>
  )
}

export default SiteNav
