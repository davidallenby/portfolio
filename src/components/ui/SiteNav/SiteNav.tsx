'use client'
import { SITENAV_ITEMS } from '@constants/navigation'
import type { NavMenuItem } from '@interfaces/ui.interfaces'
import classNames from 'classnames'
import Link from 'next/link'
import { type FC, type ReactNode, useCallback } from 'react'
import './SiteNav.scss'

interface SiteNavProps {
  vertical?: boolean
  colorInverted?: boolean
  className?: string
}

const siteNavItems: NavMenuItem[] = [...SITENAV_ITEMS].slice(1)

const SiteNav: FC<SiteNavProps> = ({ vertical, colorInverted, className }) => {
  const siteNavClass = classNames(
    'SiteNav inline-flex',
    {
      'SiteNav--vertical': vertical,
      'SiteNav--inverted': colorInverted
    },
    className
  )

  /**
   * Get the list of nav links. If "vertical" is true, we will wrap the links in
   * an unstyled list. If not vertical, we'll print them as inline nav links
   *
   * @return {*}
   */
  const getNavLinks = useCallback((): ReactNode => {
    return siteNavItems.map((item, i) => {
      return vertical ? (
        <li key={i} className='mb-1'>
          {getNavLinkNode(item)}
        </li>
      ) : (
        getNavLinkNode(item, i)
      )
    })
  }, [vertical])

  /**
   * Get the individual nav link item template
   *
   * @param {NavMenuItem} item
   * @return {*}  {ReactNode}
   */
  const getNavLinkNode = useCallback(
    (item: NavMenuItem, key?: number): ReactNode => {
      return (
        <Link
          href={item.url}
          key={key}
          className={classNames({
            'SiteNav__link--inverted text-primary-100': colorInverted
          })}
        >
          <span>{item.label}</span>
        </Link>
      )
    },
    [colorInverted]
  )

  return (
    <nav className={siteNavClass}>
      {vertical ? (
        <ul className='list-none mb-0'>{getNavLinks()}</ul>
      ) : (
        getNavLinks()
      )}
    </nav>
  )
}

export default SiteNav
