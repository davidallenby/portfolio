import ExternalIcons from '@components/ui/ExternalIcons/ExternalIcons'
import SiteLogo from '@components/ui/SiteLogo/SiteLogo'
import { SITENAV_ITEMS } from '@constants/navigation'
import { useMobileNavContext } from '@context/MobileNavContext'
import type { NavMenuItem } from '@interfaces/ui.interfaces'
import Link from 'next/link'
import { type FC, useEffect, useState } from 'react'
import { getCurrentYear } from '../../../helpers/common'
import ToggleMobileNav from '../ToggleMobileNav/ToggleMobileNav'
import './MobileMenu.scss'

const MobileMenu: FC = () => {
  const { open, toggleOpen } = useMobileNavContext()
  const [attach, setAttach] = useState(false)
  const [styleClass, setStyleClass] = useState(
    `MobileMenu${open ? ` MobileMenu--open` : ''}`
  )
  // The delay between showing/hiding the menu, and attaching the element
  const delay = 250
  // Mobile navigation menu items
  const navItems: NavMenuItem[] = [...SITENAV_ITEMS]

  useEffect(() => {
    setStyleClass(`MobileMenu${open ? ` MobileMenu--open` : ''}`)
    setTimeout(() => {
      setAttach(open)
    }, delay)
  }, [open])

  const setOpenState = (bool: boolean) => {
    setStyleClass(`MobileMenu${open ? ` MobileMenu--open` : ''}`)
    toggleOpen(bool)
  }

  return (
    <>
      {attach && (
        <div className={styleClass}>
          <div className='MobileMenu__header flex justify-content-between items-center gutter-x py-3'>
            <SiteLogo
              colorInverted={true}
              onClick={() => setOpenState(!open)}
            />
            <ToggleMobileNav />
          </div>
          <nav className='MobileMenu__inner gutter-x'>
            <ul className='list-unstyled'>
              {navItems.map((item, i) => {
                return (
                  <li key={item.url}>
                    <Link href={item.url} onClick={() => setOpenState(!open)}>
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className='MobileMenu__footer mt-auto gutter-x'>
            <ExternalIcons className='mb-2' />
            <small>&copy; David Allenby {getCurrentYear()}</small>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileMenu
