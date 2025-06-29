import ExternalIcons from '@components/ui/ExternalIcons/ExternalIcons'
import SiteLogo from '@components/ui/SiteLogo/SiteLogo'
import { SITENAV_ITEMS } from '@constants/navigation'
import { useMobileNavContext } from '@context/MobileNavContext'
import type { NavMenuItem } from '@interfaces/ui.interfaces'
import classNames from 'classnames'
import Link from 'next/link'
import { type FC, useEffect, useState } from 'react'
import { getCurrentYear } from '../../../helpers/common'
import ToggleMobileNav from '../ToggleMobileNav/ToggleMobileNav'

const MobileMenu: FC = () => {
  const { open, toggleOpen } = useMobileNavContext()
  const [attach, setAttach] = useState(false)

  // The delay between showing/hiding the menu, and attaching the element
  const delay = 250
  // Mobile navigation menu items
  const navItems: NavMenuItem[] = [...SITENAV_ITEMS]

  useEffect(() => {
    setTimeout(() => {
      setAttach(open)
    }, delay)
  }, [open])

  const setOpenState = (bool: boolean) => {
    toggleOpen(bool)
  }

  const currentYear = getCurrentYear()

  const styleClass = classNames(
    'transition-opacity duration-250 top-0 left-0 w-full h-full fixed z-99 fixed flex flex-col gap-6 animate-fadeIn bg-primary text-primary-100',
    {
      'opacity-100': open,
      'opacity-0': !open
    }
  )

  return (
    <>
      {attach && (
        <div className={styleClass}>
          <div className='flex justify-between items-center py-3 px-4'>
            <SiteLogo
              colorInverted={true}
              onClick={() => setOpenState(!open)}
            />
            <ToggleMobileNav />
          </div>
          <nav className='px-4 flex flex-col flex-grow-1 justify-center gap-12'>
            {navItems.map((item, i) => {
              return (
                <Link
                  key={item.url}
                  href={item.url}
                  className='text-primary-100 font-serif text-3xl hover:text-white'
                  onClick={() => setOpenState(!open)}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <div className='p-4 mt-auto'>
            <ExternalIcons className='mb-2' />
            <small>&copy; David Allenby {currentYear}</small>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileMenu
